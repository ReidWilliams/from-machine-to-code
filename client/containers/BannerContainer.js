// Globals
import React, { Component } from 'react'
import { connect } from 'react-redux'

import HeadlineCopyComponent from '../components/HeadlineCopyComponent'
import CircuitContainer from '../containers/CircuitContainer'
import ClockLabelComponent from '../components/ClockLabelComponent'

import { findObjects } from '../reducers/circuitReducerHelpers'
import { setNodeState } from '../reducers/circuitReducer'

// remove after testing
import { BOOL_OFF, BOOL_ON } from '../constants/boolStates'

const CIRCUIT_NAME = 'banner'

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

class BannerContainer extends Component {
  render() { 

    let clockSwitch = findObjects([17], this.props.circuits[CIRCUIT_NAME].allNodes)[0]

    return(  
      <div> 
        <div className="banner-component centered">
          <svg className="banner-headline" viewBox="0 0 2778 1800">
            <ClockLabelComponent 
              setState={(boolState) => {this.props.setState(clockSwitch, boolState)}}
              invisible={true}
            />
          	<g transform="translate(0, 150)">
    	      	<CircuitContainer circuitName={CIRCUIT_NAME} />
    	      	<HeadlineCopyComponent />
    	      </g>
          </svg>
        </div>
        <div className="banner-subhead-margin body-copy-container">
          <h1 className="banner-subhead-copy">How simple parts combine to create programmable machines</h1>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BannerContainer)