import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import SwitchComponent from '../components/SwitchComponent'
import ClockComponent from '../components/ClockComponent'
import WireComponent from '../components/WireComponent'
import GateComponent from '../components/GateComponent'
import { switchToggled, immediatelyPropogateCircuit } from '../reducers/circuitReducer'
import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'
import { SWITCH, CLOCK, WIRE, AND_GATE, OR_GATE, NOT_GATE, JUNCTION } from '../constants/nodeTypes'


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
    },
    immediatelyPropogateCircuit: function() {
      let circuit = 0
      dispatch(immediatelyPropogateCircuit(circuit))
    }
  }
}

class CircuitContainer extends Component {
  componentWillMount() {
    this.props.immediatelyPropogateCircuit()
  }

  render() {
    let _this = this
    let wires = _.filter(this.props.allNodes, function(n) {
      return n.type === WIRE
    })
    let notWires = _.filter(this.props.allNodes, function(n) {
      return n.type !== WIRE
    })

    return (
      <g>
        { wires.map(function(node) {
          // render wires first so they're underneath
          return (<WireComponent node={node} />)
        })}

        { notWires.map(function(node) {
          switch (node.type) {
            case SWITCH:
              return (<SwitchComponent node={node} clickHandler={() => _this.props.switchToggled(node.nodeId)} />)
            case CLOCK:
              return (<ClockComponent node={node} clickHandler={() => _this.props.switchToggled(node.nodeId)} />)
            default:
              // GateComponent renders AND, OR, NOT, XOR, and JUNCTION
              // basically anything tat's a non-interactive filled shape
              return (<GateComponent node={node} />)
          }})}
      </g>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CircuitContainer)