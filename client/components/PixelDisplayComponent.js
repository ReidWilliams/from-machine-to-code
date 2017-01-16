// 8x8 pixel display controlled by a 6 bit input
// Only one pixel can be lit at a time

import React, { Component } from 'react'
import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'

class Pixel extends Component {
  render() {
    return (
      <rect x={this.props.x} y={this.props.y} width="100" height="100" fill={this.props.fill} fillRule="evenodd" />
    )
  }
}

class PixelDisplayComponent extends Component {
  render() { 
    const spacing = 4
    const side = 100

    // expects inputBus array of binary digits, LSB to MSB
    let pixelOn = 0
    for (let i=0; i < this.props.inputBus.length; i++) {
      pixelOn = pixelOn + (Math.pow(2, i) * this.props.inputBus[i])
    }

    const fill = (pixelIdx) => {
      return (pixelIdx === pixelOn)? '#FF2B84' : '#D2E9EA'
    }

    const pixelArray = []
    let xidx, yidx, xpos, ypos, pixel
    let pixelIdx = 0
    for (yidx = 0; yidx < 8; yidx++) {
      for (xidx = 0; xidx < 8; xidx++) {
        xpos = xidx * (side + spacing)
        ypos = yidx * (side + spacing)
        pixel = <Pixel x={xpos} y={ypos} fill={fill(pixelIdx)} key={pixelIdx} />
        pixelArray.push(pixel)
        pixelIdx += 1
      }
    }

    return(  
      <g stroke="none">
        { pixelArray }
      </g>
    )
  }
}

export default PixelDisplayComponent