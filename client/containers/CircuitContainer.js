import React, { Component } from 'react'
import { connect } from 'react-redux'

import SvgComponent from '../components/SvgComponent'
import SwitchComponent from '../components/SwitchComponent'
import AndGateComponent from '../components/AndGateComponent'
import OrGateComponent from '../components/OrGateComponent'
import WireComponent from '../components/WireComponent'
import { switchToggled } from '../reducers/circuitReducer'
import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'

function mapStateToProps(state) {
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
          <WireComponent boolState={this.props.circuitNodes[1].state} path="M 110 225 L 200 225" />
          <WireComponent boolState={this.props.circuitNodes[3].state} path="M 110 275 L 200 275" />
          <WireComponent boolState={this.props.circuitNodes[1].state} path="M 110 225 L 170 225 L 170 375 L 240 375" />
          <WireComponent boolState={this.props.circuitNodes[3].state} path="M 110 275 L 155 275 L 155 425 L 250 425" />

          <SwitchComponent boolState={this.props.circuitNodes[0].state} clickHandler={() => this.props.switchToggled(0)} left={100} top={215} />
          <SwitchComponent boolState={this.props.circuitNodes[2].state} clickHandler={() => this.props.switchToggled(2)} left={100} top={265} />
          <AndGateComponent boolState={this.props.circuitNodes[4].state} left={200} top={200}/>
          <OrGateComponent boolState={this.props.circuitNodes[5].state} left={200} top={350}/>
        </SvgComponent>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CircuitContainer)