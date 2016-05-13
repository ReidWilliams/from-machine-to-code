import _ from 'underscore'
import q from 'q'

import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'
import { boolInvert }  from '../lib/bool'
import initialState from '../constants/initialState'

const SWITCH_TOGGLE_ACTION = 'SWITCH_TOGGLE_ACTION'

// redux action
let switchToggledAction = function(circuitId, nodeId) {
  return {
    type: SWITCH_TOGGLE_ACTION,
    circuitId,
    nodeId
  }
}

// exported action creator
export let switchToggled = function(circuitId, nodeId) {
  return function(dispatch) {
    dispatch(switchToggledAction(circuitId, nodeId))
  }
}
 
// handle user changes to switch and circuit propogation
export let circuitReducer = function(state=initialState, action) {
  switch (action.type) {
    case SWITCH_TOGGLE_ACTION:
      let nodeId = action.nodeId
      let newState = Object.assign({}, state)
      newState.allNodes = state.allNodes.slice(0) // shallow copy array
      newState.allNodes[nodeId] = Object.assign({}, state.allNodes[nodeId])

      let toggled = boolInvert(newState.allNodes[nodeId].state)
      newState.allNodes[nodeId].state = toggled
      return addNodeToChangedNodes(newState, newState.allNodes[nodeId])      
    default:
      return state
  }
}

// does not mutate state, returns new state with node pushed 
let addNodeToChangedNodes = function(state, node) {
  let newChangedNodes = state.changedNodes.slice(0)
  newChangedNodes.push(node)
  let newState = Object.assign({}, state)
  newState.changedNodes = newChangedNodes
  return newState
}

// propogates state of node to downstream nodes, changes downstream state, and
// adds downstream node to changed node list. Does not mutate state. Returns
// new state.
let propogateChangedNode = function(state, node) {
  let outputs = node.outputs
  if (outputs.length === 0) return

  let newState

  // most nodes have 1 output, wires can have multiple outputs
  _.each(outputs, function(outputObj) {
    // id of the node that this output connects to
    let outputNodeId = outputObj.nodeId
    // gates have more than one input, index of the downstream node's input
    let outputNodeInputIndex = outputObj.nodeInput

    // update the downstream node's state
    newState = updateNodeStateFromInputs(state, outputNodeId, outputNodeInputIndex, node.state)
  })

  return newState
}

// updates state of node given new input value. If node state has changed, adds it to
// changedNodes list. Does not mutate state, returns new state.
let updateNodeStateFromInputs = function(state, nodeId, inputIndex, inputState) {
  // here is where we have different logic based on gate type.
  HERE
}
