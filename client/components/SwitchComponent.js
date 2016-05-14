// Interactive button that users can click to turn on or off

// Globals
import React, { Component } from 'react'

import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'

// off and on. right now we don't animate transitions
let colors = ["#8CCEDA", "#FFAA00"]

class SwitchComponent extends Component {
  render() {
  	let fill = "#ff0000"
  	if (this.props.boolState == BOOL_OFF || this.props.boolState == BOOL_TRANSITION_OFF) {
  		fill = colors[0]
  	} else if (this.props.boolState == BOOL_ON || this.props.boolState == BOOL_TRANSITION_ON) {
  		fill = colors[1]
  	} else {
  		throw "prop boolState is invalid: " + this.props.boolState
  	}

  	// draw this gate offset using a translation
  	let transform = "translate(" + this.props.left + " " + this.props.top + ")" 

    return(
      <g onClick={this.props.clickHandler} transform={transform} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <circle className="component--switch" id="switch" stroke="none" fill={fill} cx="10.5" cy="10.5" r="9.5"></circle>
    	</g>
    )
  }
}

SwitchComponent.propTypes = {
    boolState: React.PropTypes.string.isRequired,
    left: React.PropTypes.number.isRequired,
    top: React.PropTypes.number.isRequired
  }

export default SwitchComponent