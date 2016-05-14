// AND gate

// Globals
import React, { Component } from 'react'

import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'

// off and on. right now we don't animate transitions
let colors = ["#8CCEDA", "#FFAA00"]

class OrGateComponent extends Component {
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
      <g transform={transform} stroke="none" fill="none" fill-rule="evenodd">
        <path d="M19,49.8867187 C19.0000014,18.5664057 2.46646945,5.3115745 2.46646945,5.3115745 C-0.552578263,2.09967116 0.574346568,-0.357676815 4.98717089,0.0298703385 C4.98717089,0.0298703385 61.3476563,-0.504090957 61.3476563,49.495909 C61.3476563,99.4959079 4.97099111,98.9637216 4.97099111,98.9637216 C0.568734277,99.2576406 -0.411627451,97.0377835 2.56574329,93.757608 C2.56574329,93.757608 18.9999986,81.2070318 19,49.8867187 Z" fill={fill}></path>
      </g>
    )
  }
}

OrGateComponent.propTypes = {
    boolState: React.PropTypes.string.isRequired,
    left: React.PropTypes.number.isRequired,
    top: React.PropTypes.number.isRequired
  }

export default OrGateComponent