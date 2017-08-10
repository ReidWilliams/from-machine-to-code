// Globals
import React, { Component } from 'react'

import CircuitContainer from '../containers/CircuitContainer'

class DeliciousContainer extends Component {
  render() { 
    return(   
      <div>
        <div className="centered body-width-line" />
        <div className="centered svg-width-circuit svg-vertical-margin">
          <svg viewBox="0 0 1100 360">
          	<g transform="translate(330,0)">
            	<CircuitContainer circuitName="delicious" />
            </g>
          </svg>
        </div>
        <div className="centered body-width-line" />
      </div>
    )
  }
}

export default DeliciousContainer