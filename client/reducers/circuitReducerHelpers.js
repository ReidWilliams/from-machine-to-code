import R from 'ramda'

import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'

// table maps BOOL constants to numbers
const transformTable = {
  BOOL_OFF: 0,
  BOOL_TRANSITION_OFF: 0,
  BOOL_ON: 1,
  BOOL_TRANSITION_ON: 1
}

// translates constant BOOL_OFF, BOOL_ON, etc to integer 0 or 1
export let boolStateToInteger = R.prop(R.__, transformTable)

// gets node state from node object
export let getState = R.prop('state')

// gets node object from node id
export let findObject = (id) => { return R.find(R.propEq('nodeId', id)) }

// returns array of bits (lsb first) from
// array of circuit node ids
export let bitArrayFromNodeIds = (nodeIds, nodeArray) => {

  // create list of finder functions
  let finders = R.map(findObject, nodeIds)

  // finder takes list and returns object
  // findTransform outputs an integer given a specific finder function that   
  let findTransform = (finder) => {
    let f = R.compose(boolStateToInteger, getState, finder)
    return f(nodeArray)
  }

  return R.map(findTransform, finders)
}