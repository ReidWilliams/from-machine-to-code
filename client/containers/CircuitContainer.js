import React, { Component } from 'react'
import { connect } from 'react-redux'

import SvgComponent from '../components/SvgComponent'
import SwitchComponent from '../components/SwitchComponent'
import { switchToggled } from '../reducers/circuitReducer'

function mapStateToProps(state) {
  return {
    allNodes: state.circuits.allCircuits[0].allNodes
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
          <SwitchComponent boolState={this.props.allNodes[0].state} clickHandler={() => this.props.switchToggled(0)} left={0} top={200} />
        </SvgComponent>
      </div>
    )
  }

  _handleClick() {
    console.log('click')
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CircuitContainer)