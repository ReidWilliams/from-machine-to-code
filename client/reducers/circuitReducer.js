import _ from 'underscore'
import q from 'q'
import util from 'util'

import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'
import { boolInvert }  from '../lib/bool'
import initialState from '../../design/test1.json'
import { SWITCH, LED, WIRE, AND_GATE, OR_GATE, XOR_GATE, NOT_GATE, JUNCTION } from '../constants/nodeTypes'
import { TRANSITION_TIME } from '../constants/constants'

const SWITCH_TOGGLE_ACTION = 'SWITCH_TOGGLE_ACTION'
const PROPOGATE_CIRCUIT = 'PROPOGATE_CIRCUIT'

// exported action creator
export let switchToggled = function(circuitId, nodeId) {
  return function(dispatch, getState) {
    dispatch({ type: SWITCH_TOGGLE_ACTION, circuitId, nodeId })
    propogateCircuitWithDelays(dispatch, getState)
  }
}

export let immediatelyPropogateCircuit = function(circuitId) {
  return function(dispatch, getState) {
    recursivelyPropogateCircuit(dispatch, getState, function() {
      // "noop" callback to recursivelyPropogateCircuit 
      // don't want delays in propogation with immediatePropogateCircuit
      let deferred = q.defer()
      deferred.resolve()
      return deferred.promise
    })
  }
}

let propogateCircuitWithDelays = function(dispatch, getState) {
  recursivelyPropogateCircuit(dispatch, getState, function() {
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
let recursivelyPropogateCircuit = function(dispatch, getState, callback) {
  if (getState().circuitNodes.changedNodes.length > 0) {
    callback().then(function() {
      dispatch({ type: PROPOGATE_CIRCUIT })
      recursivelyPropogateCircuit(dispatch, getState, callback)
    })
  }
}

// For below functions, use variable named appState to refer to the
// redux state object. Use variables named state to refer to a node's
// state, e.g. an AND gate's boolean state.

// handle user changes to switch and circuit propogation
export let circuitReducer = function(appState=initialState, action) {
  switch (action.type) {
    case SWITCH_TOGGLE_ACTION:
      let nodeId = action.nodeId
      let newAppState = Object.assign({}, appState)
      newAppState.allNodes = appState.allNodes.slice(0) // shallow copy array
      newAppState.allNodes[nodeId] = Object.assign({}, appState.allNodes[nodeId])

      let toggled = boolInvert(newAppState.allNodes[nodeId].state)
      newAppState.allNodes[nodeId].state = toggled
      return addNodeToChangedNodes(newAppState, newAppState.allNodes[nodeId])
    case PROPOGATE_CIRCUIT:
      return propogateCircuit(appState)      
    default:
      return appState
  }
}

// adds node to nodeChangedNodes list
let addNodeToChangedNodes = function(appState, node) {
  return Object.assign({}, appState, {
    changedNodes: [...appState.changedNodes, node]
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
  if (newNode.state !== appState.allNodes[nodeId]) {
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






