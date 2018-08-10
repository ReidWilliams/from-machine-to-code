// Globals
import React, { Component } from 'react'

import CircuitContainer from '../containers/CircuitContainer'

class Register extends Component {
  render() { 
    let labelStyle = {
      fontSize: '15px'
    }


    return(   
      <div>
        <div className="centered body-width-line" />
        <div className="centered svg-width-circuit svg-vertical-margin">
          <svg viewBox="0 -10 950 235">
            <g transform="translate(110,83)">
              <text className="circuit-label" style={labelStyle}>CLOCK</text>
            </g><g transform="translate(110,209)">
              <text className="circuit-label" style={labelStyle}>INPUT</text>
            </g>
          	<g transform="translate(140,0)">
            	<CircuitContainer circuitName="register" />
            </g>
          </svg>
        </div>
        <div className="centered body-width-line" />
      </div>
    )
  }
}

export default Register