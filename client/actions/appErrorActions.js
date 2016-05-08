'use strict'  

import { SET_APP_ERROR, UNSET_APP_ERROR } from './../constants/actionTypes'

export function setAppError(err, type) {
  err.type = type
  return {
    type: SET_APP_ERROR,
    payload: err,
    error: true
  }
}

export function unsetAppError(type) {
  return {
    type: UNSET_APP_ERROR,
    payload: { type: type }
  }
}


