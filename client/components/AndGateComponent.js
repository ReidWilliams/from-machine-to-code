// Interactive button that users can click to turn on or off

// Globals
import React, { Component } from 'react'

import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'

// off and on. right now we don't animate transitions
let colors = ["#8CCEDA", "#FFAA00"]

class SwitchComponent extends Component {
  render() {
    let fill = "#ff0000"
    if (this.props.node.state == BOOL_OFF || this.props.node.state == BOOL_TRANSITION_OFF) {
      fill = colors[0]
    } else if (this.props.node.state == BOOL_ON || this.props.node.state == BOOL_TRANSITION_ON) {
      fill = colors[1]
    } else {
      throw "prop boolState is invalid: " + this.props.node.state
    }

    if (this.props.node.svg.path) {
      return(
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path fill={fill} d={this.props.node.svg.path.d}></path>
        </g>
      )
    }
  }
}

export default SwitchComponent