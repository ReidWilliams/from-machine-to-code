// Globals
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { findObjects } from '../reducers/circuitReducerHelpers'
import { setNodeState } from '../reducers/circuitReducer'
import CircuitContainer from '../containers/CircuitContainer'
import DecimalNumberComponent from '../components/DecimalNumberComponent'
import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'

const CIRCUIT_NAME = "adder3"

function mapStateToProps(state, ownProps) {
  return {
    circuits: state.circuits
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setState: function(node, boolState) {
      // note translation of node object to node id
      dispatch(setNodeState(CIRCUIT_NAME, node.nodeId, boolState) )
    }
  }
}

class Adder3Container extends Component {
  render() { 

    // circuit nodes for input switches, output led
    let input0 = findObjects([0, 1, 2], this.props.circuits[CIRCUIT_NAME].allNodes)
    let input1 = findObjects([7, 8, 9], this.props.circuits[CIRCUIT_NAME].allNodes)
    let output = findObjects([3, 4, 5, 6], this.props.circuits[CIRCUIT_NAME].allNodes)

    return(   
      <div className="centered svg-width-small-gates svg-vertical-margin">
        <svg viewBox="0 0 1150 600">
          <g transform="translate(20,170)">
            <DecimalNumberComponent nodes={input0} setState={this.props.setState} anchor="middle" />
          </g>
          <g transform="translate(20,330)">
            <DecimalNumberComponent nodes={input1} setState={this.props.setState} anchor="middle" />
          </g>
          <g transform="translate(1100,250)">
            <DecimalNumberComponent nodes={output} anchor="middle" />
          </g>
          <g transform="translate(60,0)">
            <CircuitContainer circuitName={CIRCUIT_NAME} />
          </g>
        </svg>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adder3Container)