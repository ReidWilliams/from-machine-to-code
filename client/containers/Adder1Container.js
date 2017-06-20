// Globals
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { findObjects } from '../reducers/circuitReducerHelpers'
import { setNodeState } from '../reducers/circuitReducer'
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
  return {
    setState: function(node, boolState) {
      // note translation of node object to node id
      dispatch(setNodeState(CIRCUIT_NAME, node.nodeId, boolState) )
    }
  }
}

class Adder1Container extends Component {
  render() { 

    // circuit nodes for input switches, output led
    let input0 = findObjects([2], this.props.circuits[CIRCUIT_NAME].allNodes)
    let input1 = findObjects([3], this.props.circuits[CIRCUIT_NAME].allNodes)
    let output = findObjects([5, 4], this.props.circuits[CIRCUIT_NAME].allNodes)

    return(
      <div>
        <div className="centered body-width-line" />
        <div className="centered svg-width-circuit svg-vertical-margin">
          <svg viewBox="-20 0 900 184">
            <g transform="translate(200,0)">
              <g transform="translate(25,70)">
                <DecimalNumberComponent 
                  nodes={input0} 
                  setState={this.props.setState} 
                  anchor="middle" 
                  bgX="-40" bgY="-69" bgWidth="80" bgHeight="82" />
              </g>
              <g transform="translate(25,170)">
                <DecimalNumberComponent 
                  nodes={input1} 
                  setState={this.props.setState} 
                  anchor="middle" 
                  bgX="-40" bgY="-69" bgWidth="80" bgHeight="82" />
              </g>
              <g transform="translate(450,120)">
                <DecimalNumberComponent 
                  nodes={output} 
                  setState={undefined} 
                  anchor="middle" 
                  bgX="-40" bgY="-69" bgWidth="80" bgHeight="82" />
              </g>
              <g transform="translate(74,0)">
                <CircuitContainer circuitName={CIRCUIT_NAME} />
              </g>
            </g>
          </svg>
        </div>
        <div className="centered body-width-line" />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adder1Container)