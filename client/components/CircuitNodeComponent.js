// Interactive button that users can click to turn on or off

// Globals
import React, { Component } from 'react'

import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'
import { SWITCH, WIRE, AND_GATE, OR_GATE, NOT_GATE, JUNCTION } from '../constants/nodeTypes'

// off and on. right now we don't animate transitions
let colors = ["#8CCEDA", "#FFAA00"]

class CircuitNodeComponent extends Component {
  render() {
  	let fill = "#ff0000"
  	if (this.props.node.state == BOOL_OFF || this.props.node.state == BOOL_TRANSITION_OFF) {
  		fill = colors[0]
  	} else if (this.props.node.state == BOOL_ON || this.props.node.state == BOOL_TRANSITION_ON) {
  		fill = colors[1]
  	} else {
  		throw "prop boolState is invalid: " + this.props.node.state
  	}

    let className = ""
    if (this.props.node.type === SWITCH) {
      className = "component--switch"
    }

    if (this.props.node.svg.path) {
      return(
        <g onClick={this.props.clickHandler} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path className={className} stroke="none" fill={fill} d={this.props.node.svg.path.d}></path>
        </g>
      )
    } else if (this.props.node.svg.polyline) {
      return(
        <g onClick={this.props.clickHandler} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <polyline className={className} stroke="none" fill={fill} points={this.props.node.svg.polyline.points}></polyline>
        </g>
      )
    } else if (this.props.node.svg.circle) {
      return(
        <g onClick={this.props.clickHandler} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <circle className={className} stroke="none" fill={fill} cx={this.props.node.svg.circle.cx} cy={this.props.node.svg.circle.cy} r={this.props.node.svg.circle.r} ></circle>
        </g>
      )
    }
  }
}

CircuitNodeComponent.propTypes = {
    boolState: React.PropTypes.string.isRequired,
    left: React.PropTypes.number.isRequired,
    top: React.PropTypes.number.isRequired
  }

export default CircuitNodeComponent