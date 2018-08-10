// Globals
import React, { Component } from 'react'

import CircuitContainer from '../containers/CircuitContainer'

class Latch extends Component {
  render() { 
    let labelStyle = {
      fontSize: '15px'
    }

    return(   
      <div>
        <div className="centered body-width-line" />
        <div className="centered svg-width-circuit svg-vertical-margin">
          <svg viewBox="0 -10 950 240">
          	<g transform="translate(255,0)">
            	<CircuitContainer circuitName="latch" />
            </g>
            <g transform="translate(227,83)">
              <text className="circuit-label" style={labelStyle}>LATCH</text>
            </g><g transform="translate(227,209)">
              <text className="circuit-label" style={labelStyle}>INPUT</text>
            </g>
          </svg>
        </div>
        <div className="centered body-width-line" />
      </div>
    )
  }
}

export default Latch