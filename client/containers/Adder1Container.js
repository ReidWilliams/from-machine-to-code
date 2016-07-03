// Globals
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bitArrayFromNodeIds } from '../reducers/circuitReducerHelpers'
import CircuitContainer from '../containers/CircuitContainer'
import DecimalNumberComponent from '../components/DecimalNumberComponent'
import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'

const CIRCUIT_NAME = "adder1"

function mapStateToProps(state, ownProps) {
  return {
    circuits: state.circuits
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {}
}

class Adder1Container extends Component {
  render() { 

    let input0BitForDecimal = bitArrayFromNodeIds([2], this.props.circuits[CIRCUIT_NAME].allNodes)
    let input1BitForDecimal = bitArrayFromNodeIds([3], this.props.circuits[CIRCUIT_NAME].allNodes)
    let outputBitsForDecimal = bitArrayFromNodeIds([5, 4], this.props.circuits[CIRCUIT_NAME].allNodes)

    return(   
      <div className="centered svg-width-large-gates svg-vertical-margin">
        <svg viewBox="-10 0 500 184">
          <g transform="translate(35,70)">
            <DecimalNumberComponent bits={input0BitForDecimal} clickable={true} anchor="middle" />
          </g>
          <g transform="translate(35,170)">
            <DecimalNumberComponent bits={input1BitForDecimal} clickable={true} anchor="middle" />
          </g>
          <g transform="translate(450,120)">
            <DecimalNumberComponent bits={outputBitsForDecimal} anchor="middle" />
          </g>
          <g transform="translate(74,0)">
            <CircuitContainer circuitName={CIRCUIT_NAME} />
          </g>
        </svg>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adder1Container)