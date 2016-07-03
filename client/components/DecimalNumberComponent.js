// Wire to a list of nodes, this component interprets the on / off
// state of those nodes as a binary number and displays the decimal value
// prop named bits is array of bits to use. First item is least significant bit

import React, { Component } from 'react'
import R from 'ramda'

import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'

class DecimalNumberComponent extends Component {
  render() { 
    // iterator function for reduce
    // treats index as a digit in N bit number
    // raises 2 to the index and multiplies by bit.
    let multiplyBit = (accum, bit, index) => { return accum + (bit * (2**index)) }
    let reduceWithIndex = R.addIndex(R.reduce)

    let decimal = reduceWithIndex(multiplyBit, 0, this.props.bits)
    let fillClass = (decimal === 0)? "fill-off" : "fill-off"
    let className = "decimal-number " + fillClass
    let style = {"textAnchor": this.props.anchor }

    return(   
      <div className={className} style={style}>{ decimal }</div>
    )
  }
}

export default DecimalNumberComponent

