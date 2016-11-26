import React, { Component } from 'react'
import { connect } from 'react-redux'
import { findObjects } from '../reducers/circuitReducerHelpers'
import { setNodeState } from '../reducers/circuitReducer'
import CircuitContainer from '../containers/CircuitContainer'
import DecimalNumberComponent from '../components/DecimalNumberComponent'

const CIRCUIT_NAME = "calculator"

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

class Calculator extends Component {
  render() { 
    // circuit nodes for input switches, output led
    let input = findObjects([0, 1, 2], this.props.circuits[CIRCUIT_NAME].allNodes)
    let output = findObjects([128, 129, 130, 131], this.props.circuits[CIRCUIT_NAME].allNodes)

    return(   
      <div>
        <div className="centered body-width-line" />
        <div className="centered svg-width-circuit svg-vertical-margin">
          <svg viewBox="0 -10 2200 1150">
            <g transform="translate(68,720) scale(1.6)">
              <DecimalNumberComponent 
                nodes={input} 
                setState={this.props.setState} 
                anchor="middle" 
                bgX="-40" bgY="-69" bgWidth="80" bgHeight="82" />
            </g>
            <g transform="translate(2030,740) scale(1.6)">
              <DecimalNumberComponent 
                nodes={output} 
                setState={undefined} 
                anchor="middle" 
                bgX="-40" bgY="-69" bgWidth="150" bgHeight="82" />
            </g>
          	<g transform="translate(140,0)">
            	<CircuitContainer circuitName="calculator" />
            </g>
          </svg>
        </div>
        <div className="centered body-width-line" />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)