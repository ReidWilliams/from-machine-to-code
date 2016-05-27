import React, { Component } from 'react'
import { connect } from 'react-redux'

import SvgComponent from '../components/SvgComponent'
import SwitchComponent from '../components/SwitchComponent'
import WireComponent from '../components/WireComponent'
import GateComponent from '../components/GateComponent'
import { switchToggled } from '../reducers/circuitReducer'
import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'
import { SWITCH, WIRE, AND_GATE, OR_GATE, NOT_GATE, JUNCTION } from '../constants/nodeTypes'


function mapStateToProps(state) {
  return {
    allNodes: state.circuitNodes.allNodes
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
    let _this = this
    return (
      <div className="test-svg-container centered">
        <SvgComponent>
          { this.props.allNodes.map(function(node) {
            switch (node.type) {
              case SWITCH:
                return (<SwitchComponent node={node} clickHandler={() => _this.props.switchToggled(node.nodeId)} />)
              case WIRE:
                return (<WireComponent node={node} />)
              default:
                // GateComponent renders AND, OR, NOT, XOR, and JUNCTION
                // basically anything tat's a non-interactive filled shape
                return (<GateComponent node={node} />)
            }
          })}
        </SvgComponent>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CircuitContainer)