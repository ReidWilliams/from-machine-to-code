import React, {Component} from 'react'

import SvgComponent from './SvgComponent'
import AndGateComponent from './AndGateComponent'
import SwitchComponent from './SwitchComponent'
import WireComponent from './WireComponent'

import { BOOL_OFF, BOOL_ON, BOOL_TRANSITION_OFF, BOOL_TRANSITION_ON } from '../constants/boolStates'

class App extends Component {
  render() {
    return (
    	<div className="test-svg-container centered">
	      <SvgComponent>
		      <AndGateComponent boolState={BOOL_OFF} left={0} top={0}/>
		      <AndGateComponent boolState={BOOL_ON} left={100} top={0}/>
		      <SwitchComponent boolState={BOOL_OFF} left={0} top={200} />
		      <SwitchComponent boolState={BOOL_ON} left={100} top={200} />

		      <WireComponent boolState={BOOL_OFF} left={0} top={300} />
		    </SvgComponent>
		   </div>
    )
  }
}

module.exports = App
