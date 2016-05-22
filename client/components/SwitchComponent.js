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

    // svg always has 1 key which is type of svg element
    let svgType = Object.keys(this.props.node.svg)[0]

    return (
      <g onClick={this.props.clickHandler}>
        { // return svg element overriding fill
          React.createElement(
            svgType, 
            Object.assign({}, this.props.node.svg[svgType], { fill: fill })
          ) 
        }
      </g>
      )
  }
}

export default SwitchComponent