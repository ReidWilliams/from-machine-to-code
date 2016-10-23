// Globals
import React, { Component } from 'react'

import CircuitContainer from '../containers/CircuitContainer'

class FlipFlopContainer extends Component {
  render() { 
    return(   
      <div>
        <div className="centered body-width-line" />
        <div className="centered svg-width-circuit svg-vertical-margin">
          <svg viewBox="0 -10 950 240">
          	<g transform="translate(255,0)">
            	<CircuitContainer circuitName="flipFlop" />
            </g>
          </svg>
        </div>
        <div className="centered body-width-line" />
      </div>
    )
  }
}

export default FlipFlopContainer