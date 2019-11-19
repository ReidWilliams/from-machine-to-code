// Globals
import React, { Component } from 'react'

import CircuitContainer from '../containers/CircuitContainer'

class HelloGatesContainer extends Component {
  render() { 
    let labelStyle = {
      fontSize: '15px'
    }

    return(   
      <div>
        <div className="centered body-width-line" />
        <div className="centered svg-width-circuit svg-vertical-margin">
          <svg viewBox="0 0 1000 330">
          	<g transform="translate(250,0)">
    	      	<CircuitContainer circuitName="helloGates" />
              <g transform="translate(85,325)">
                <text className="circuit-label" style={labelStyle}>NOT</text>
              </g>
              <g transform="translate(395,125)">
                <text className="circuit-label" style={labelStyle}>AND</text>
              </g>
              <g transform="translate(85,125)">
                <text className="circuit-label" style={labelStyle}>OR</text>
              </g>
              <g transform="translate(395,325)">
                <text className="circuit-label" style={labelStyle}>XOR</text>
              </g>
    	      </g>
          </svg>
        </div>
        <div className="centered body-width-line" />
      </div>
    )
  }
}

export default HelloGatesContainer