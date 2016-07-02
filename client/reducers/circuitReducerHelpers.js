import R from 'ramda'

import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'

// table maps BOOL constants to numbers
const transformTable = {
  BOOL_OFF: 0,
  BOOL_TRANSITION_OFF: 0,
  BOOL_ON: 1,
  BOOL_TRANSITION_ON: 1
}

// converts constant BOOL_OFF, BOOL_ON, etc to integer 0 or 1
export let boolStateToIntegers = (state) => { return transformTable[state] }

// returns node state from node object
export let getState = (nodeObj) => { return nodeObj['state'] }