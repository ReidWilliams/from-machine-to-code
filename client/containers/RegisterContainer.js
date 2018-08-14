// Globals
import React, { Component } from 'react'
import { connect } from 'react-redux'

import CircuitContainer from '../containers/CircuitContainer'
import ClockLabelComponent from '../components/ClockLabelComponent'
import { findObjects } from '../reducers/circuitReducerHelpers'
import { setNodeState } from '../reducers/circuitReducer'

const CIRCUIT_NAME = 'register'

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

class RegisterContainer extends Component {
  render() { 
    let labelStyle = {
      fontSize: '15px'
    }

    let clockSwitch = findObjects([1], this.props.circuits[CIRCUIT_NAME].allNodes)[0]

    return(   
      <div>
        <div className="centered body-width-line" />
        <div className="centered svg-width-circuit svg-vertical-margin">
          <svg viewBox="0 -10 950 235">
            <g transform="translate(50,83)">
              <ClockLabelComponent 
                setState={(boolState) => {
                  console.log('setting to ', boolState)
                  this.props.setState(clockSwitch, boolState)
                }}/>
            </g><g transform="translate(110,209)">
              <text className="circuit-label" style={labelStyle}>INPUT</text>
            </g>
          	<g transform="translate(140,0)">
            	<CircuitContainer circuitName={CIRCUIT_NAME} />
            </g>
          </svg>
        </div>
        <div className="centered body-width-line" />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)