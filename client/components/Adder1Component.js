// Globals
import React, { Component } from 'react'

import CircuitContainer from '../containers/CircuitContainer'

class Adder1Component extends Component {
  render() { 
    return(   
      <div className="centered svg-width-large-gates svg-vertical-margin">
        <svg viewBox="0 0 476 184">
        	<g transform="translate(74,0)">
  	      	<CircuitContainer circuitName="adder1" />
  	      </g>
        </svg>
      </div>
    )
  }
}

export default Adder1Component