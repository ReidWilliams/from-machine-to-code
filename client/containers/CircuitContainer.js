import React, { Component } from 'react'
import { connect } from 'react-redux'

import SvgComponent from '../components/SvgComponent'
import SwitchComponent from '../components/SwitchComponent'
import AndGateComponent from '../components/AndGateComponent'
import WireComponent from '../components/WireComponent'
import { switchToggled } from '../reducers/circuitReducer'
import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'

function mapStateToProps(state) {
  debugger
  return {
    circuitNodes: state.circuitNodes.allNodes
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
    return (
      <div className="test-svg-container centered">
        <SvgComponent>
          <SwitchComponent boolState={this.props.circuitNodes[0].state} clickHandler={() => this.props.switchToggled(0)} left={140} top={215} />
          <SwitchComponent boolState={this.props.circuitNodes[2].state} clickHandler={() => this.props.switchToggled(2)} left={140} top={265} />
          <WireComponent boolState={BOOL_OFF} left={0} top={300} />
          <WireComponent boolState={BOOL_OFF} left={0} top={300} />
          <AndGateComponent boolState={BOOL_ON} left={200} top={200}/>
        </SvgComponent>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CircuitContainer)