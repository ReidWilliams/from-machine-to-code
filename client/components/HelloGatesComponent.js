// Globals
import React, { Component } from 'react'

import CircuitContainer from '../containers/CircuitContainer'

class HelloGatesComponent extends Component {
  render() { 
    return(   
      <div className="centered svg-width-large-gates">
        <svg viewBox="0 0 500 500">
        	<g>
  	      	<CircuitContainer circuitName="helloGates" />
  	      </g>
        </svg>
      </div>
    )
  }
}

export default HelloGatesComponent