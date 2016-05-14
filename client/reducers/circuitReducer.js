import _ from 'underscore'
import q from 'q'

import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'
import { boolInvert }  from '../lib/bool'
import initialState from '../constants/initialState'
import { SWITCH, WIRE, AND_GATE } from '../constants/nodeTypes'

const SWITCH_TOGGLE_ACTION = 'SWITCH_TOGGLE_ACTION'
const PROPOGATE_CIRCUIT = 'PROPOGATE_CIRCUIT'

// exported action creator
export let switchToggled = function(circuitId, nodeId) {
  return function(dispatch) {
    dispatch({ type: SWITCH_TOGGLE_ACTION, circuitId, nodeId })
    dispatch({ type: PROPOGATE_CIRCUIT})
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

// does not mutate app state, returns new app state with node pushed 
let addNodeToChangedNodes = function(appState, node) {
  let newChangedNodes = appState.changedNodes.slice(0)
  newChangedNodes.push(node)
  let newAppState = Object.assign({}, appState)
  newAppState.changedNodes = newChangedNodes
  return newAppState
}

// propogates changes in a circuit until none are left
let propogateCircuit = function(appState) {
  let changedNodes = appState.changedNodes
  let newAppState = Object.assign({}, appState)
  newAppState.changedNodes = []
  _.each(changedNodes, function(changedNode) {
    newAppState = propogateChangedNode(newAppState, changedNode)
  })

  if (newAppState.changedNodes.length > 0) {
    return propogateCircuit(newAppState)
  } else {
    return newAppState
  }
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
  let newNode = Object.assign({}, appState.allNodes[nodeId])
  if (inputIndex >= newNode.inputs.length ) throw ("inputIndex higher than node input expected")
  newNode.inputs[inputIndex] = nodeInputState
  newNode.state = computeState(newNode.type, newNode.inputs)
  let newAppState = Object.assign({}, appState)
  let newAllNodes = newAppState.allNodes.slice(0)
  newAllNodes[nodeId] = newNode
  newAppState.allNodes = newAllNodes

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
    default:
      throw("nodeType " + nodeType + " doesn't match anything we know about")
  }
}






