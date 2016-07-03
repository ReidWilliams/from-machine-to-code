// Globals
import React, { Component } from 'react'

import CircuitContainer from '../containers/CircuitContainer'

class HelloGatesContainer extends Component {
  render() { 
    return(   
      <div className="centered svg-width-large-gates svg-vertical-margin">
        <svg viewBox="0 0 476 285">
        	<g>
  	      	<CircuitContainer circuitName="helloGates" />
  	      </g>
        </svg>
      </div>
    )
  }
}

export default HelloGatesContainer