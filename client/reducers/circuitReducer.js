import _ from 'underscore'
import q from 'q'
import util from 'util'

import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'
import { boolInvert }  from '../lib/bool'
import { SWITCH, LED, WIRE, AND_GATE, OR_GATE, XOR_GATE, NOT_GATE, BUFFER_GATE, JUNCTION } from '../constants/nodeTypes'
import { TRANSITION_TIME } from '../constants/constants'
import { initialState } from './mergeDesigns'

const NODE_SET_STATE_ACTION = 'NODE_SET_STATE_ACTION'
const PROPOGATE_CIRCUIT = 'PROPOGATE_CIRCUIT'

// exported action creator for toggling a switch
export let switchToggled = function(circuitName, nodeId) {
  return function(dispatch, getState) {
    let currentBoolState = getState().circuits[circuitName].allNodes[nodeId].state
    let toggled = boolInvert(currentBoolState)
    dispatch({ type: NODE_SET_STATE_ACTION, circuitName, nodeId, boolState:toggled })
    propogateCircuitWithDelays(dispatch, getState, circuitName)
  }
}

export let setNodeState = function(circuitName, nodeId, boolState) {
  return function(dispatch, getState) {
    dispatch({ type: NODE_SET_STATE_ACTION, circuitName, nodeId, boolState })
    propogateCircuitWithDelays(dispatch, getState, circuitName)
  }
}

// exported action creator for instantly propogating state changes in a circuit
// used during react componnent initialization
export let immediatelyPropogateCircuit = function(circuitName) {
  return function(dispatch, getState) {
    recursivelyPropogateCircuit(dispatch, getState, circuitName, function() {
      // "noop" callback to recursivelyPropogateCircuit 
      // don't want delays in propogation with immediatePropogateCircuit
      let deferred = q.defer()
      deferred.resolve()
      return deferred.promise
    })
  }
}

// propogate circuit node change with timing delays to create animating effect
let propogateCircuitWithDelays = function(dispatch, getState, circuitName) {
  recursivelyPropogateCircuit(dispatch, getState, circuitName, function() {
    let deferred = q.defer()
    setInterval(function() {
      deferred.resolve()
    }, TRANSITION_TIME)
    return deferred.promise
  })
}

// Recursively propogates changed circuit nodes' state to downstream nodes
// until no remaining changes are left
// dispatch and getState are redux objects. Callback is a function that returns
// a promise that is called before recursive call. Use this to create a short 
// delay between propogation steps to show flow of changes through the circuit to user.
let recursivelyPropogateCircuit = function(dispatch, getState, circuitName, callback) {
  if (getState().circuits[circuitName].changedNodes.length > 0) {
    callback().then(function() {
      dispatch({ type: PROPOGATE_CIRCUIT, circuitName })
      recursivelyPropogateCircuit(dispatch, getState, circuitName, callback)
    })
  }
}

// For below functions, use variable named appState to refer to the
// redux state object. Use variables named state to refer to a node's
// state, e.g. an AND gate's boolean state.

// handle user changes to switch and circuit propogation
export let circuitsReducer = function(appState=initialState, action) {
  let circuitName = action.circuitName
  if (circuitName) {
    // call reducer for changed circuit only
    let newCircuit = circuitReducer(appState[circuitName], action)
    // create new object and merge in changed circuit with existing circuits
    let newState = Object.assign({}, appState)
    newState[circuitName] = newCircuit
    return newState
  }
  return appState
}

// top level reducer function for a single circuit instance
let circuitReducer = function(appState, action) {
  switch (action.type) {
    case NODE_SET_STATE_ACTION:
      let nodeId = action.nodeId
      let boolState = action.boolState
      let newAppState = Object.assign({}, appState)
      newAppState.allNodes = appState.allNodes.slice(0) // shallow copy array
      newAppState.allNodes[nodeId] = Object.assign({}, appState.allNodes[nodeId])

      newAppState.allNodes[nodeId].state = boolState
      return addNodeToChangedNodes(newAppState, newAppState.allNodes[nodeId])
    case PROPOGATE_CIRCUIT:
      return propogateCircuit(appState)      
    default:
      return appState
  }
}

// adds node to nodeChangedNodes list
let addNodeToChangedNodes = function(appState, node) {
  // list of all nodes in changedNodes excet node
  let allButNew = _.filter(appState.changedNodes, function(n) {
    return n.nodeId !== node.nodeId
  })

  // Return allButNew and node. If node with same nodeId existed, it gets replaced with this one
  // This is important because sometimes a node will be changed twice in one cycle because
  // both its inputs change in same cycle. Don't want to add the node twice to
  // changedNodes but do want latest state
  return Object.assign({}, appState, {
    changedNodes: [...allButNew, node]
  })
}

// propogates changes to a node one node downstream
// Does not recursively propogate changes through whole circuit
// returns a promise that resolves to newAppState
let propogateCircuit = function(appState) {  
  // nodes who's state has not been propogated to downstream node
  let changedNodes = appState.changedNodes

  // empty changed nodes list in appState
  let newAppState = Object.assign({}, appState, {
    changedNodes: []
  })

  // propogate node state for each node
  _.each(changedNodes, function(changedNode) {
    newAppState = propogateChangedNode(newAppState, changedNode)
  })

  return newAppState
}

// propogates state of node to downstream nodes, changes downstream node state, and
// adds downstream node to changed node list. Does not mutate app state. Returns
// new app state.
let propogateChangedNode = function(appState, node) {  
  let outputs = node.outputs
  if (outputs.length === 0) return appState

  let newAppState = Object.assign({}, appState)

  // most nodes have 1 output, wires can have multiple outputs
  _.each(outputs, function(outputObj) {
    // id of the node that this output connects to
    let outputNodeId = outputObj.nodeId
    // gates have more than one input, index of the downstream node's input
    let outputNodeInputIndex = outputObj.nodeInput

    // update the downstream node's state
    newAppState = updateNodeStateFromInputs(newAppState, outputNodeId, outputNodeInputIndex, node.state)
  })

  return newAppState
}

// updates state of node given new input value. If node state has changed, adds it to
// changedNodes list. Does not mutate app state, returns new app state.
let updateNodeStateFromInputs = function(appState, nodeId, inputIndex, nodeInputState) {
  // here is where we have different logic based on gate type.

  // duplicate node, because we may change it
  let newNode = Object.assign({}, appState.allNodes[nodeId])
  if (inputIndex >= newNode.inputs.length ) throw ("inputIndex higher than node input expected")

  // change node's input state   
  newNode.inputs[inputIndex] = nodeInputState

  // update node's state from inputs. Where not, and, or, etc logic happens
  newNode.state = computeState(newNode.type, newNode.inputs)

  // copy allNodes and add new node
  let newAllNodes = appState.allNodes.slice(0)
  newAllNodes[nodeId] = newNode

  // copy appstate
  let newAppState = Object.assign({}, appState, {
    allNodes: newAllNodes
  })

  // if node's state changed, add it to list of changed nodes
  if (newNode.state !== appState.allNodes[nodeId].state) {
    return addNodeToChangedNodes(newAppState, newNode)
  }

  return newAppState
}

// returns logic results based on gate type, wire, etc
let computeState = function(nodeType, inputs) {
  switch (nodeType) {
    case WIRE:
      return inputs[0]
    case AND_GATE:
      // this is where the AND-ing really happens
      if (inputs[0] === BOOL_ON && inputs[1] === BOOL_ON) {
        return BOOL_ON
      } else {
        return BOOL_OFF
      }
    case OR_GATE:
      if (inputs[0] === BOOL_ON || inputs[1] === BOOL_ON) {
        return BOOL_ON
      } else {
        return BOOL_OFF
      }
    case NOT_GATE:
      if (inputs[0] === BOOL_ON ) {
        return BOOL_OFF
      } else {
        return BOOL_ON
      }
    case BUFFER_GATE:
      if (inputs[0] === BOOL_ON ) {
        return BOOL_ON
      } else {
        return BOOL_OFF
      }
    case XOR_GATE:
      if (inputs[0] === BOOL_ON && inputs[1] === BOOL_OFF) {
        return BOOL_ON
      } else if (inputs[0] === BOOL_OFF && inputs[1] === BOOL_ON) {
        return BOOL_ON
      } else {
        return BOOL_OFF
      }
    case LED:
      return inputs[0]
    default:
      console.error("nodeType " + nodeType + " doesn't match anything we know about")
  }
}






