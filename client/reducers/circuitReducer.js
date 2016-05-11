import _ from 'underscore'
import q from 'q'

import { SWITCH } from '../constants/nodeTypes'
import { BOOL_OFF BOOL_ON BOOL_TRANSITION_OFF BOOL_TRANSITION_ON } from '../constants/boolStates'
import { boolInvert } from '../lib/bool'

const SWITCH_TOGGLE_ACTION = 'SWITCH_TOGGLE_ACTION'

// redux action
let switchToggledAction = function(circuitId, nodeId) {
  return {
    type: SWITCH_TOGGLE,
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

let initialState = {
  allCircuits: [
    {
      allNodes: [
        {
          id: 0,
          type: SWITCH,
          state: BOOL_OFF,
          inputs: [],
          outputs: []
        }
      ]
      // all nodes in the circuit as a list
    }
  ]
}

export let circuitReducer = function(state=initialState, action) {
  let newState = Object.assign({}, state)
  let circuitId = action.circuitId
  let nodeId = action.nodeId
  
  switch (action.type) {

    case SWITCH_TOGGLE:
      let toggled = boolInvert(newState.allCircuits[circuitId].allNodes[nodeId].state)
      newState.allCircuits[circuitId].allNodes[nodeId].state = toggled 
      return newState

    default:
      return state
  }
}