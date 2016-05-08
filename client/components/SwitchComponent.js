// Interactive button that users can click to turn on or off

// Globals
import React, { Component } from 'react'

import { GATE_OFF, GATE_ON, GATE_TRANSITION_OFF, GATE_TRANSITION_ON } from '../constants/gateStates'

// off and on. right now we don't animate transitions
let colors = ["#8CCEDA", "#FFAA00"]

class SwitchComponent extends Component {
  render() {
  	let gateFill = "#ff0000"
  	if (this.props.gateState == GATE_OFF || this.props.gateState == GATE_TRANSITION_OFF) {
  		gateFill = colors[0]
  	} else if (this.props.gateState == GATE_ON || this.props.gateState == GATE_TRANSITION_ON) {
  		gateFill = colors[1]
  	} else {
  		throw "prop gateState is invalid: " + this.props.gateState
  	}

  	// draw this gate offset using a translation
  	let transform = "translate(" + this.props.left + " " + this.props.top + ")" 

    return(
      <g transform={transform} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <circle id="switch" stroke="#B1AEAE" fill={gateFill} cx="10.5" cy="10.5" r="9.5"></circle>
    	</g>
    )
  }
}

SwitchComponent.propTypes = {
    gateState: React.PropTypes.string.isRequired,
    left: React.PropTypes.number.isRequire,
    top: React.PropTypes.number.isRequired
  }

export default SwitchComponent