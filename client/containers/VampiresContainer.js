// Globals
import React, { Component } from 'react'

import CircuitContainer from '../containers/CircuitContainer'

class VampiresContainer extends Component {
  render() { 
    return(   
      <div>
        <div className="centered body-width-line" />
        <div className="centered svg-width-circuit svg-vertical-margin">
          <svg viewBox="0 0 950 185">
          	<g transform="translate(300,0)">
            	<CircuitContainer circuitName="vampires" />
            </g>
          </svg>
        </div>
        <div className="centered body-width-line" />
      </div>
    )
  }
}

export default VampiresContainer