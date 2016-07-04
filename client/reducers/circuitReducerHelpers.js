// various functions to support getting and manipulating circuit state data

import R from 'ramda'

import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'

// table maps BOOL constants to numbers
const transformTable = {
  BOOL_OFF: 0,
  BOOL_TRANSITION_OFF: 0,
  BOOL_ON: 1,
  BOOL_TRANSITION_ON: 1,
  0: BOOL_OFF,
  1: BOOL_ON
}

// translates constant BOOL_OFF, BOOL_ON, etc to integer 0 or 1
let boolStateToInteger = R.prop(R.__, transformTable)
let intToBoolState = R.prop(R.__, transformTable)

// gets node state from node object
let getState = R.prop('state')

// gets node object from node id
let findObject = (id) => { return R.find(R.propEq('nodeId', id)) }

// takes datat structure and list of functions and applies
// each function to the object, returning a list of results
let mapApply = R.curry((data, fns) => {
  return R.map((fn) => { return fn(data) }, fns)
})

// ids: [1, 2, 3]
// objectList: [node, node, node]
// returns list of node objects with given ids
let findObjects = (idList, objectList) => {
  // create list of finder functions
  let finders = R.map(findObject, idList)
  return mapApply(objectList, finders)
}

// returns array of bits (lsb first) from
// array of circuit nodes
let bitArrayFromNodeList = (nodeList) => {
  return R.map(R.compose(boolStateToInteger, getState), nodeList) 
}

export { bitArrayFromNodeList, intToBoolState, findObject, findObjects }