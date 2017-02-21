import R from 'ramda'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { findObjects } from '../reducers/circuitReducerHelpers'
import { setNodeState } from '../reducers/circuitReducer'
import CircuitContainer from '../containers/CircuitContainer'
import PixelDisplayComponent from '../components/PixelDisplayComponent'
// import DecimalNumberComponent from '../components/DecimalNumberComponent'

import { BOOL_ON } from '../constants/boolStates'

const CIRCUIT_NAME = "cpu1"

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

class Processor extends Component {
  render() { 
    // let input = findObjects([0, 1, 2], this.props.circuits[CIRCUIT_NAME].allNodes)
    let registerObjs = findObjects([115, 153, 179, 192, 140, 166  ], this.props.circuits[CIRCUIT_NAME].allNodes)
    let displayBus = R.map((obj) => {
      return (obj.state === BOOL_ON)? 1 : 0
    }, registerObjs)
  

    return(   
      <div>
        <div className="centered body-width-line" />
        <div className="centered svg-width-processor svg-vertical-margin">
          <svg viewBox="0 -10 5000 3000">
          	<g transform="translate(500,0)">
            	<CircuitContainer circuitName="cpu1" />
            </g>
            <g transform="translate(3530, 250) scale(0.9)">
              <PixelDisplayComponent inputBus={displayBus}/>
            </g>
          </svg>
        </div>
        <div className="centered body-width-line" />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Processor)