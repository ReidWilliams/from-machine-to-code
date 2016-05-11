import { BOOL_OFF BOOL_ON BOOL_TRANSITION_OFF BOOL_TRANSITION_ON } from '../constants/boolStates'

// Don't use native boolean because we have transition states that represent
// a node in transition from one state to another
let invert = function(bool) {
	switch (bool) {
	  case BOOL_OFF:
	    return BOOL_ON
	  case BOOL_ON:
	  	return BOOL_OFF
	  default:
	    throw "Cannot invert: " + bool
	 }
}

export default invert