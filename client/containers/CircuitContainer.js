import React, { Component } from 'react'
import { connect } from 'react-redux'
import R from 'ramda'

import SwitchComponent from '../components/SwitchComponent'
import LEDComponent from '../components/LEDComponent'
import ClockComponent from '../components/ClockComponent'
import WireComponent from '../components/WireComponent'
import GateComponent from '../components/GateComponent'
import { switchToggled, immediatelyPropogateCircuit } from '../reducers/circuitReducer'
import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'
import { SWITCH, LED, CLOCK, WIRE, AND_GATE, OR_GATE, NOT_GATE, JUNCTION } from '../constants/nodeTypes'


function mapStateToProps(state, ownProps) {
  return {
    circuitNodes: state.circuits[ownProps.circuitName].allNodes
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    switchToggled: function(nodeId) {
      dispatch(switchToggled(ownProps.circuitName, nodeId))
    },
    immediatelyPropogateCircuit: function() {
      dispatch(immediatelyPropogateCircuit(ownProps.circuitName))
    }
  }
}

class CircuitContainer extends Component {
  componentWillMount() {
    this.props.immediatelyPropogateCircuit(this.props.circuitName)
  }

  render() {
    let _this = this
    let filterNodes = predicate => { return R.filter(predicate, this.props.circuitNodes) }
    let isType = R.curry((type, node) => { return node.type === type })

    let isWire = isType(WIRE)
    let isSwitch = isType(SWITCH)
    let isLED = isType(LED)
    let isClock = isType(CLOCK)
    let isGate = node => { return !(isWire(node) || isSwitch(node) || isClock(node)) }

    // calling switchToggler with argument returns function of 0 arguments
    let switchToggler = nodeId => {
      return () => { return _this.props.switchToggled(nodeId) }
    }

    let renderWire = node => { return (<WireComponent node={node} />) }
    let renderSwitch = node => { return (<SwitchComponent node={node} clickHandler={switchToggler(node.nodeId)} />) }
    let renderLED = node => { return (<LEDComponent node={node} />) }
    // Clock is rendered as Switch. Originally had clock component with timer that
    // changed state of clock. Now timer is outside the rendered component so all
    // that's needed is to render a switch.
    let renderClock = node => { return (<SwitchComponent node={node} clickHandler={switchToggler(node.nodeId)} />) }
    let renderGate = node => { return (<GateComponent node={node} />) }

    let wires = filterNodes(isWire)
    let switches = filterNodes(isSwitch)
    let leds = filterNodes(isLED)
    let clocks = filterNodes(isClock)
    let gates = filterNodes(isGate)

    // let renderedNodes = R.map(renderGate, gates)
    let renderedNodes = [].concat(
      R.map(renderWire, wires),
      R.map(renderSwitch, switches),
      R.map(renderLED, leds),
      R.map(renderClock, clocks),
      R.map(renderGate, gates)
    )

    return (
      <g>
        { renderedNodes }
      </g>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CircuitContainer)
