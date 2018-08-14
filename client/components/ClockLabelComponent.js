// Interactive clock label that starts / stops the clock
// Keeps state for clock on / off in local state using setState
// Not in redux store

// Globals
import React, { Component } from 'react'
import { CLOCK_INTERVAL } from '../constants/constants'

import { BOOL_OFF, BOOL_ON } from '../constants/boolStates'

class ClockLabelComponent extends Component {
  constructor(props) {
    super(props)

    // Set the state directly. Use props if necessary.
    this.state = {
      intervalTimer: undefined,
      boolState: BOOL_OFF
    }
  }

  componentDidMount() {
    this.toggleClock()
  }

  // play, pause clock
  toggleClock() {
    if(this.state.intervalTimer) {
      // pause
      clearInterval(this.state.intervalTimer)
      this.setState({intervalTimer: undefined})
    } else {
      let handle = setInterval(() => {this.tick()}, CLOCK_INTERVAL)
      this.tick()
      this.setState({intervalTimer: handle})
    }
  }

  // clock tick
  tick() {
    let newState = (this.state.boolState === BOOL_OFF)? BOOL_ON : BOOL_OFF
    this.setState({boolState: newState})
    if (document.hasFocus()) {
      this.props.setState(newState)
    }
  }

  // play or pause depending on state
  getIcon() {
    let pause = (
      <g>
        <rect id="Rectangle" x="0" y="0" width="4.08333333" height="11.25"></rect>
        <rect id="Rectangle-Copy" x="5.91666667" y="0" width="4.08333333" height="11.25"></rect>
      </g>
    )

    let play = (
      <polygon id="Triangle" fill-rule="nonzero" transform="translate(4.500000, 6.000000) rotate(90.000000) translate(-4.500000, -6.000000) " points="4.5 1.5 10.5 10.5 -1.5 10.5"></polygon>
    )

    // console.log(this.intervalTimer)
    return (this.state.intervalTimer? pause : play)
  }

  renderLabel() {
    let labelStyle = {
      fontSize: '15px'
    }

    return (
      <g className = "cursor-pointer" onClick={() => {this.toggleClock()}}>
        <text className="circuit-label" style={labelStyle}>CLOCK</text>
        <g transform="translate(-35, -9) scale(0.7)" className="clock-play-pause">
          {this.getIcon()}
        </g>
      </g>
    )
  }

  renderEmpty() {
    return (<g/>)
  }

  render() {
    if (this.props.invisible === undefined || this.props.invisible === false) {
      return this.renderLabel()
    } else {
      return this.renderEmpty()
    }
  }
}

export default ClockLabelComponent