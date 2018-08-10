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
    
    let input0 = findObjects([0], this.props.circuits[CIRCUIT_NAME].allNodes)
    let input1 = findObjects([1], this.props.circuits[CIRCUIT_NAME].allNodes)
    let input2 = findObjects([4], this.props.circuits[CIRCUIT_NAME].allNodes)
    let output = findObjects([2, 3], this.props.circuits[CIRCUIT_NAME].allNodes)


    return(   
      <div>
        <div className="centered body-width-line" />
        <div className="centered svg-width-circuit svg-vertical-margin">
          <svg viewBox="60 0 900 380">
            <g transform="translate(298,50) scale(0.55)">
              <DecimalNumberComponent 
                nodes={input0} 
                setState={this.props.setState}  
                anchor="middle" 
                bgX="-40" bgY="-69" bgWidth="80" bgHeight="82" />
            </g>
            <g transform="translate(298,105) scale(0.55)">
              <DecimalNumberComponent 
                nodes={input1} 
                setState={this.props.setState}  
                anchor="middle" 
                bgX="-40" bgY="-69" bgWidth="80" bgHeight="82" />
            </g>
            <g transform="translate(298,160) scale(0.55)">
              <DecimalNumberComponent 
                nodes={input2} 
                setState={this.props.setState}  
                anchor="middle" 
                bgX="-40" bgY="-69" bgWidth="80" bgHeight="82" />
            </g><g transform="translate(720,195) scale(0.55)">
              <DecimalNumberComponent 
                nodes={output} 
                setState={undefined}  
                anchor="middle" 
                bgX="-40" bgY="-69" bgWidth="80" bgHeight="82" />
            </g>
            <g transform="translate(330,20)">
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