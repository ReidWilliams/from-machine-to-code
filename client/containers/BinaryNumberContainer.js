// Globals
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { findObjects } from '../reducers/circuitReducerHelpers'
import { setNodeState } from '../reducers/circuitReducer'
import CircuitContainer from '../containers/CircuitContainer'
import DecimalNumberComponent from '../components/DecimalNumberComponent'
// import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'

const CIRCUIT_NAME = "binaryNumbers"

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

class BinaryNumberContainer extends Component {
  render() { 

    let displayIdList = [2, 0, 3, 1, 4]
    let nodes = findObjects(displayIdList, this.props.circuits[CIRCUIT_NAME].allNodes)
   
    return(   
      <div className="centered svg-width-large-gates svg-vertical-margin">
        <svg viewBox="-0 0 300 175">
          <g transform="translate(60,0)">
            <g transform="translate(120,115)">
              <DecimalNumberComponent 
                nodes={nodes}
                setState={this.props.setState}
                anchor="middle"
                bgX="-55" bgY="-69" bgWidth="112" bgHeight="82" />
            </g>
            <CircuitContainer circuitName={CIRCUIT_NAME} />
          </g>
        </svg>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BinaryNumberContainer)