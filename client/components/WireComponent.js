// Interactive button that users can click to turn on or off

// Globals
import React, { Component } from 'react'

import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'

// off and on. right now we don't animate transitions
let colors = ["#8CCEDA", "#FFAA00"]

class WireComponent extends Component {
  render() {
  	let stroke = "#ff0000"
  	if (this.props.boolState == BOOL_OFF || this.props.boolState == BOOL_TRANSITION_OFF) {
  		stroke = colors[0]
  	} else if (this.props.boolState == BOOL_ON || this.props.boolState == BOOL_TRANSITION_ON) {
  		stroke = colors[1]
  	} else {
  		throw "prop boolState is invalid: " + this.props.boolState
  	}

    return(
      <g stroke={stroke} strokeWidth="3" fill="none">
        <path d={this.props.path}></path>
    	</g>
    )
  }
}

WireComponent.propTypes = {
    boolState: React.PropTypes.string.isRequired,
    path: React.PropTypes.string.isRequired
  }

export default WireComponent