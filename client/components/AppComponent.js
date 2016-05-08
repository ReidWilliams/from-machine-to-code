import React, {Component} from 'react'

import SvgComponent from './SvgComponent'
import AndGateComponent from './AndGateComponent'
import SwitchComponent from './SwitchComponent'

import { GATE_OFF, GATE_ON, GATE_TRANSITION_OFF, GATE_TRANSITION_ON } from '../constants/gateStates'

class App extends Component {
  render() {
    return (
    	<div className="test-svg-container centered">
	      <SvgComponent className="centered">
		      <AndGateComponent gateState={GATE_OFF} left="0" top="0"/>
		      <AndGateComponent gateState={GATE_ON} left="100" top="0"/>
		      <SwitchComponent gateState={GATE_OFF} left="0" top="200" />
		      <SwitchComponent gateState={GATE_ON} left="100" top="200" />
		    </SvgComponent>
		   </div>
    )
  }
}

module.exports = App
