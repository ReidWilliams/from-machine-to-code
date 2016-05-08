// AND gate

// Globals
import React, { Component } from 'react'

import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'

// off and on. right now we don't animate transitions
let colors = ["#8CCEDA", "#FFAA00"]

class AndGateComponent extends Component {
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
      <g transform={transform} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path d="M0,7.48926326 C0,3.07465563 3.57434657,-0.357676815 7.98717089,0.0298703385 C7.98717089,0.0298703385 64.3476562,-0.504090957 64.3476562,49.495909 C64.3476562,99.4959079 7.97099111,98.9637216 7.97099111,98.9637216 C3.56873428,99.2576406 0,95.9073725 0,91.5025548 L0,7.48926326 Z" id="AND-gate" fill={fill}></path>
      </g>
    )
  }
}

AndGateComponent.propTypes = {
    boolState: React.PropTypes.string.isRequired,
    left: React.PropTypes.number.isRequired,
    top: React.PropTypes.number.isRequired
  }

export default AndGateComponent