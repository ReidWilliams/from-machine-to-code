// Globals
import React, { Component } from 'react'

import CircuitContainer from '../containers/CircuitContainer'
import DecimalNumberComponent from './DecimalNumberComponent'

import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'

class Adder1Component extends Component {
  render() { 

    let displayAsDecimal = [BOOL_ON, BOOL_OFF, BOOL_OFF, BOOL_OFF, BOOL_OFF, BOOL_ON]

    return(   
      <div className="centered svg-width-large-gates svg-vertical-margin">
        <svg viewBox="0 0 476 184">
        	<g transform="translate(74,0)">
  	      	<CircuitContainer circuitName="adder1" />
            <g transform="translate(100,100)">
              <DecimalNumberComponent bits={displayAsDecimal} />
            </g>
  	      </g>
        </svg>
      </div>
    )
  }
}

export default Adder1Component