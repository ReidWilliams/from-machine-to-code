// Globals
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { findObjects } from '../reducers/circuitReducerHelpers'
import { setNodeState } from '../reducers/circuitReducer'
import CircuitContainer from '../containers/CircuitContainer'
import DecimalNumberComponent from '../components/DecimalNumberComponent'
import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'

const CIRCUIT_NAME = "fullAdder"

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

class FullAdderContainer extends Component {
  render() { 
    return(   
      <div>
        <div className="centered body-width-line" />
        <div className="centered svg-width-circuit svg-vertical-margin">
          <svg viewBox="0 0 1050 360">
            <g transform="translate(330,0)">
              <CircuitContainer circuitName={CIRCUIT_NAME} />
            </g>
          </svg>
        </div>
        <div className="centered body-width-line" />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullAdderContainer)