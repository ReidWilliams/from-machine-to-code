// Interactive button that users can click to turn on or off

// Globals
import React, { Component } from 'react'
import { CLOCK_INTERVAL } from '../constants/constants'

class ClockLabelComponent extends Component {
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
      // this.props.clickHandler()
      this.intervalTimer = setInterval(this.props.clickHandler, CLOCK_INTERVAL)
    }
  }

  render() {
    let labelStyle = {
      fontSize: '15px'
    }

    return (
      <g onClick={() => {
            console.log("nodeId: " + this.props.node.nodeId) 
            this.toggleClock()
          }}>

        <text className="circuit-label" style={labelStyle}>CLOCK</text>
        <g transform="translate(30, -15)">
          <rect id="Rectangle-Copy" x="0" y="0" width="4" height="10"></rect>
          <rect id="Rectangle-Copy-2" x="6" y="0" width="4" height="10"></rect>    
        </g>
      </g>
    )
  }
}

export default ClockLabelComponent