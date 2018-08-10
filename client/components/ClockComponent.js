// Interactive button that users can click to turn on or off

// Globals
import React, { Component } from 'react'

import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'
import { CLOCK_INTERVAL } from '../constants/constants'

class ClockComponent extends Component {
  constructor() {
    super()
    this.intervalTimer = undefined
  }

  componentDidMount() {
    this.toggleClock()
  }

  toggleClock() {
    if(this.intervalTimer) {
      clearInterval(this.intervalTimer)
      this.intervalTimer = undefined
    } else {
      this.props.clickHandler()
      this.intervalTimer = setInterval(this.props.clickHandler, CLOCK_INTERVAL)
    }
  }

  render() {
    let className
    if (this.props.node.state == BOOL_OFF || this.props.node.state == BOOL_TRANSITION_OFF) {
      className = "cursor-pointer fill-off"
    } else if (this.props.node.state == BOOL_ON || this.props.node.state == BOOL_TRANSITION_ON) {
      className = "cursor-pointer fill-on"
    } else {
      throw "prop boolState is invalid: " + this.props.node.state
    }

    // svg always has 1 key which is type of svg element
    let svgType = Object.keys(this.props.node.svg)[0]
    return (
      <g onClick={() => {
            console.log("nodeId: " + this.props.node.nodeId) 
            this.toggleClock()
          }}>

        { // return svg element overriding fill
          React.createElement(
            svgType, 
            Object.assign({}, this.props.node.svg[svgType], { className })
          ) 
        }
      </g>
    )
  }
}

export default ClockComponent