// Globals
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bitArrayFromNodeIds } from '../reducers/circuitReducerHelpers'
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
  return {}
}

class BinaryNumberContainer extends Component {
  render() { 

    let bitsForDecimal = bitArrayFromNodeIds([2, 0, 3, 1, 4], this.props.circuits[CIRCUIT_NAME].allNodes)

    return(   
      <div className="centered svg-width-large-gates svg-vertical-margin">
        <svg viewBox="-0 0 300 175">
          <g transform="translate(60,0)">
            <g transform="translate(120,115)">
              <rect className="decimal-number-rect" x="-55" y="-69" width="112" height="82" rx="5" ry="5"/>
              <DecimalNumberComponent bits={bitsForDecimal} clickable={false} anchor="middle" />
            </g>
            <CircuitContainer circuitName={CIRCUIT_NAME} />
          </g>
        </svg>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BinaryNumberContainer)