import React, { Component } from 'react'
import { connect } from 'react-redux'
import { findObjects } from '../reducers/circuitReducerHelpers'
import { setNodeState } from '../reducers/circuitReducer'
import CircuitContainer from '../containers/CircuitContainer'
import DecimalNumberComponent from '../components/DecimalNumberComponent'
import ClockLabelComponent from '../components/ClockLabelComponent'

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
    let labelStyle = {
      fontSize: '30px'
    }

    // circuit nodes for input switches, output led
    let input = findObjects([0, 1, 2], this.props.circuits[CIRCUIT_NAME].allNodes)
    let output = findObjects([97, 98, 99], this.props.circuits[CIRCUIT_NAME].allNodes)
    let clockSwitch = findObjects([3], this.props.circuits[CIRCUIT_NAME].allNodes)[0]

    return(   
      <div>
        <div className="centered body-width-line" />
        <div className="centered svg-width-circuit svg-vertical-margin">
          <svg viewBox="0 -10 1900 850">
            <g transform="translate(80, 770) scale(2.05)">
              <ClockLabelComponent 
                setState={(boolState) => {
                  console.log('setting to ', boolState)
                  this.props.setState(clockSwitch, boolState)
                }}/>
            </g>
            <g transform="translate(68,590) scale(1.6)">
              <DecimalNumberComponent 
                nodes={input} 
                setState={this.props.setState} 
                anchor="middle" 
                bgX="-40" bgY="-69" bgWidth="80" bgHeight="82" />
            </g>
            <g transform="translate(1830,590) scale(1.6)">
              <DecimalNumberComponent 
                nodes={output} 
                setState={undefined} 
                anchor="middle" 
                bgX="-40" bgY="-69" bgWidth="80" bgHeight="82" />
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