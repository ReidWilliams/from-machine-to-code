// Interactive button that users can click to turn on or off

// Globals
import React, { Component } from 'react'

import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'

// off and on. right now we don't animate transitions
let colors = ["#8CCEDA", "#FFAA00"]

class WireComponent extends Component {
  render() {
    let className
    if (this.props.node.state == BOOL_OFF || this.props.node.state == BOOL_TRANSITION_OFF) {
      className = "stroke--off"
    } else if (this.props.node.state == BOOL_ON || this.props.node.state == BOOL_TRANSITION_ON) {
      className = "stroke--on"
    } else {
      throw "prop boolState is invalid: " + this.props.node.state
    }

    if (this.props.node.svg.path) {
      return(
        <g stroke="none" fill="none" fillRule="evenodd">
          <path className={className} strokeWidth="3" fill="none" d={this.props.node.svg.path.d}></path>
        </g>
      )
    } else if (this.props.node.svg.polyline) {
      return(
        <g stroke="none" fill="none" fillRule="evenodd">
          <polyline className={className} strokeWidth="3" fill="none" points={this.props.node.svg.polyline.points}></polyline>
        </g>
      )
    } else {
      throw ("wire component had bad svg: " + this.props.node.svg)
    }
  }
}

export default WireComponent