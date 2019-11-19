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
      <g id="pause" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle id="Oval" fill="#EBEBEB" cx="12.5" cy="12.5" r="12.5"></circle>
        <g id="Group" transform="translate(7.000000, 6.000000)" fill="#9E9E9E" fill-rule="nonzero">
          <rect id="Rectangle" x="0" y="0" width="5" height="14" rx="1"></rect>
          <rect id="Rectangle-Copy" x="6" y="0" width="5" height="14" rx="1"></rect>
        </g>
      </g>
    )

    let play = (
      <g id="play" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle id="Oval" fill="#EBEBEB" cx="12.5" cy="12.5" r="12.5"></circle>
        <g transform="translate(7.000000, 4.000000)" fill="#9E9E9E" fill-rule="nonzero" id="Triangle">
          <path d="M8.06192294,3.16027844 L14.5814345,13.5914969 C14.8741448,14.0598335 14.7317717,14.6767838 14.2634351,14.9694942 C14.1045035,15.0688264 13.9208559,15.1214959 13.7334362,15.1214959 L0.694413083,15.1214959 C0.142128333,15.1214959 -0.305586917,14.6737806 -0.305586917,14.1214959 C-0.305586917,13.9340761 -0.252917472,13.7504285 -0.153585221,13.5914969 L6.36592633,3.16027844 C6.65863666,2.69194191 7.27558704,2.54956875 7.74392357,2.84227908 C7.8726927,2.92275979 7.98144223,3.03150931 8.06192294,3.16027844 Z" transform="translate(7.213925, 8.462489) rotate(90.000000) translate(-7.213925, -8.462489) "></path>
        </g>
      </g>
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
        <g transform="translate(-47, -15) scale(0.8)" className="clock-play-pause">
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