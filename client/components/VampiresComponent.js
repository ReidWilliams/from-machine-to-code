// Globals
import React, { Component } from 'react'

import CircuitContainer from '../containers/CircuitContainer'

class VampiresComponent extends Component {
  render() { 
    return(   
      <div className="centered svg-width-large-gates svg-vertical-margin">
        <svg viewBox="0 0 476 185">
        	<g transform="translate(50,0)">
  	      	<CircuitContainer circuitName="vampires" />
  	      </g>
        </svg>
      </div>
    )
  }
}

export default VampiresComponent