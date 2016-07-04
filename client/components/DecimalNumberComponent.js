// Wire to a list of nodes, this component interprets the on / off
// state of those nodes as a binary number and displays the decimal value
// prop named bits is array of nodes to use. First item is least significant bit

import React, { Component } from 'react'
import R from 'ramda'

import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'
import { bitArrayFromNodeList, findObject, findObjects, intToBoolState } from '../reducers/circuitReducerHelpers'


class DecimalNumberComponent extends Component {
  render() { 
    let _this = this

    // parent passes list of nodes from which we compute a decimal number to display
    let bitsForDecimal = bitArrayFromNodeList(this.props.nodes)  
    // iterator function for reduce
    // treats index as a digit in N bit number
    // raises 2 to the index and multiplies by bit.
    let multiplyBit = (accum, bit, index) => { return accum + (bit * (2**index)) }
    let reduceWithIndex = R.addIndex(R.reduce)
    let decimal = reduceWithIndex(multiplyBit, 0, bitsForDecimal)

    let toBinaryString = (string) => { return parseInt(string).toString(2) }
    let split = (string) => { return string.split('') }
    let pad = R.curry((item, length, list) => {
      if (list.length >= length) { return list }
      return R.concat(R.repeat(0, length - list.length), list)
    })

    // converts a decimal integer to a fixed length array of bit integers
    let decToBoolConstArray = (dec, length) => {
      let takeLast = R.takeLast(length)
      let padZeros = pad(0, length)
      let rightLength = R.compose(padZeros, takeLast)
      let convert = R.compose(split, toBinaryString)
      let map = R.map(R.compose(intToBoolState, parseInt))
      return R.compose(R.reverse, map, rightLength, convert)(dec)
      // reverse because array is index 0 lsb.
    }

    // call passed props setState function on pairs of node (to update) and boolState
    // value to update it with
    let clickHandler = () => { 
      // list of BOOL_ON, etc constants
      let boolList = decToBoolConstArray(decimal + 1, _this.props.nodes.length)
      R.zipWith(_this.props.setState, _this.props.nodes, boolList)
    }
    
    let fillClass = (decimal === 0)? "fill-off" : "fill-off"
    let className = "decimal-number " + fillClass
    let style = {"textAnchor": this.props.anchor}

    return(  
      <g className="cursor-pointer" onClick={clickHandler}>
      <rect className="decimal-number-rect" 
        x={this.props.bgX} 
        y={this.props.bgY} 
        width={this.props.bgWidth} 
        height={this.props.bgHeight} 
        rx="5" ry="5" />
      <text className="decimal-number" style={style}>{ decimal }</text>
      </g>
    )
  }
}

export default DecimalNumberComponent

