'use strict'

import { ENDPOINTS } from './../constants/endpoints'
import { 
  CURRENT_USER_FETCH_START,         
  CURRENT_USER_FETCH_SUCCESS,
  CURRENT_USER_FETCH_ERROR 
} from './../constants/actionTypes'
import * as ERRORS from './../constants/errorTypes'

import { setAppError, unsetAppError } from './appErrorActions'
import { fJSON, fGet, redirectOnError } from './../utils/api'

let redirectOn401 = redirectOnError(401, '/login')

// CURRENT_USER_FETCH Action Creators

export function currentUserFetchStart() {
  return {
    type: CURRENT_USER_FETCH_START
  }
}

export function currentUserFetchSuccess(data) {
  return {
    type: CURRENT_USER_FETCH_SUCCESS,
    payload: data
  }
}

export function currentUserFetchError(err) {
  return {
    type: CURRENT_USER_FETCH_ERROR,
    payload: err,
    error: true
  }
}

export function currentUserFetch(redirect = true) {
  return (dispatch) => {
    const fetchUrl = ENDPOINTS.USER_FETCH

    dispatch(currentUserFetchStart())
    dispatch(unsetAppError(ERRORS.CURRENT_USER_FETCH))

    return fGet(fetchUrl)
      .then(function(payload) {
        if (redirect) {
          return redirectOn401(payload)
        }
        return payload
      })
      .then(fJSON)
      .then((payload) => {
        dispatch(currentUserFetchSuccess(payload))
      })
      .catch((err) => {
        dispatch(currentUserFetchError(err))
        dispatch(setAppError(err, ERRORS.CURRENT_USER_FETCH))
      })
  }
}
