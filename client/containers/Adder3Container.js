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
    let input0 = findObjects([0, 2, 4], this.props.circuits[CIRCUIT_NAME].allNodes)
    let input1 = findObjects([1, 3, 5], this.props.circuits[CIRCUIT_NAME].allNodes)
    let output = findObjects([26, 25, 27, 28], this.props.circuits[CIRCUIT_NAME].allNodes)

    return(   
      <div>
        <div className="centered body-width-line" />
        <div className="centered svg-width-circuit svg-vertical-margin">
          <svg viewBox="-30 -5 1225 470">
            <g transform="translate(0,0)">
              <g transform="translate(10,165)">
                <DecimalNumberComponent 
                  nodes={input0} 
                  setState={this.props.setState} 
                  anchor="middle" 
                  bgX="-40" bgY="-69" bgWidth="80" bgHeight="82" />
              </g>
              <g transform="translate(10,345)">
                <DecimalNumberComponent 
                  nodes={input1} 
                  setState={this.props.setState} 
                  anchor="middle" 
                  bgX="-40" bgY="-69" bgWidth="80" bgHeight="82" />
              </g>
              <g transform="translate(1130,253)">
                <DecimalNumberComponent 
                  nodes={output} 
                  setState={this.props.setState} 
                  anchor="middle" 
                  bgX="-55" bgY="-69" bgWidth="115" bgHeight="82" />
              </g>
              <g transform="translate(60,0)">
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

export default connect(mapStateToProps, mapDispatchToProps)(Adder3Container)