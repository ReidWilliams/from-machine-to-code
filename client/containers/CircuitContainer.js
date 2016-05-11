import React, { Component } from 'react'
import { connect } from 'react-redux'

import { switchToggled } from '../reducers/circuitReducer'

function mapStateToProps(state) {
  return {
    allNodes: state.circuits[0].allNodes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    switchToggled: function(nodeId) {
      let circuit = 0
      dispatch(switchToggled(circuit, nodeId))
    }
  }
}

class CircuitContainer extends Component {
  render() {
    <div className="test-svg-container centered">
      <SvgComponent>
        <SwitchComponent boolState={this.props.allNodes[0].state} clickHandler={this.props.switchToggled} left={0} top={200} />
      </SvgComponent>
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCertificationPageContainer)