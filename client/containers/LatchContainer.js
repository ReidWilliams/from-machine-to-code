// Globals
import React, { Component } from 'react'
import { connect } from 'react-redux'

import CircuitContainer from '../containers/CircuitContainer'
import { BOOL_OFF, BOOL_ON } from '../constants/boolStates'

function mapStateToProps(state, ownProps) {

  return {
    circuitNodes: state.circuits.latch.allNodes
  }
}

class Latch extends Component {
  render() { 
    let labelStyle = {
      fontSize: '15px'
    }

    let latchLabel = "WAITING"
    let latchTransform = "translate(220,83)"
    if (this.props.circuitNodes[2].state === BOOL_ON) {
      latchLabel = "REMEMBERING"
      latchTransform = "translate(195,83)"
    }



    return(   
      <div>
        <div className="centered body-width-line" />
        <div className="centered svg-width-circuit svg-vertical-margin">
          <svg viewBox="0 -10 950 240">
          	<g transform="translate(255,0)">
            	<CircuitContainer circuitName="latch" />
            </g>
            <g transform={ latchTransform }>
              <text className="circuit-label" style={labelStyle}>{ latchLabel }</text>
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

export default connect(mapStateToProps)(Latch)