'use strict'

// Action creators for certifying a user from something

import _ from 'lodash'

import { ENDPOINTS } from './../constants/endpoints'
import { fJSON, fGetExternal, fPost, redirectOnError } from './../utils/api'
import {
  CERTIFY_SOMEONE_START, 
  CERTIFY_SOMEONE_SUCCESS, 
  CERTIFY_SOMEONE_ERROR,
  CERTIFY_RECEIVER_USERNAME_SEARCH_RESULTS,
  CERTIFY_RECEIVER_SELECTED,
  CERTIFY_RECEIVER_CHANGED
} from './../constants/actionTypes'
import { currentUserFetch } from './userActions'

let redirectOn401 = redirectOnError(401, '/login')

export function certifySomeoneStart() {
  return {
    type: CERTIFY_SOMEONE_START,
    payload: null
  }
}

export function certifySomeoneSuccess() {
  return {
    type: CERTIFY_SOMEONE_SUCCESS,
    payload: null
  }
}

export function certifySomeoneError(err) {
  return {
    type: CERTIFY_SOMEONE_ERROR,
    payload: err,
  }
}

// Action creator. Returns a function of dispatch. This is the pattern
// when using thunk middleware for dispatching async actions.

export function certifySomeone(payload) {
  return (function(dispatch) {
    dispatch(certifySomeoneStart)

    return fPost(ENDPOINTS.CERTIFY_SOMEONE, payload)
    .then(redirectOn401)
    .then(fJSON)
    .then((payload) => {
      if (payload === true) {
        dispatch(certifySomeoneSuccess())
        return currentUserFetch()
      } else {
        dispatch(certifySomeoneError(payload))
      }
    }) // FIXME: should be catching b/c redirectOn401 throws on redirect
  })
}

let throttledGet = _.throttle(fGetExternal, 300)

// Called when form field where user types certificaton receiver's
// username changes
export function receiverChanged(username) {
  if (username.length > 0) {
    return (function(dispatch) {
      dispatch({type: CERTIFY_RECEIVER_CHANGED, payload: username})
      const url = ENDPOINTS.KEYBASE_LOOKUP + username
      return throttledGet(url)
      .then(fJSON)
      .then(payload => {
        dispatch({type: CERTIFY_RECEIVER_USERNAME_SEARCH_RESULTS, payload: payload})
      })
    })  
  } else {
      return function(dispatch) {
        dispatch({type: CERTIFY_RECEIVER_CHANGED, payload: username})
        dispatch({type: CERTIFY_RECEIVER_USERNAME_SEARCH_RESULTS, payload: null})
      }
  }
}

export function receiverSelected(username) {
  return function(dispatch) {
    dispatch({type: CERTIFY_RECEIVER_SELECTED, payload:username})
  }
}






