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