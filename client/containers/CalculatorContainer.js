// Globals
import React, { Component } from 'react'

import CircuitContainer from '../containers/CircuitContainer'

class Calculator extends Component {
  render() { 
    return(   
      <div>
        <div className="centered body-width-line" />
        <div className="centered svg-width-circuit svg-vertical-margin">
          <svg viewBox="0 -10 2000 850">
          	<g transform="translate(120,0)">
            	<CircuitContainer circuitName="calculator" />
            </g>
          </svg>
        </div>
        <div className="centered body-width-line" />
      </div>
    )
  }
}

export default Calculator