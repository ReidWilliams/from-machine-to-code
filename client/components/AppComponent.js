import React, {Component} from 'react'

import SvgComponent from './SvgComponent'
import AndGateComponent from './AndGateComponent'

class App extends Component {
  render() {
    return (
    	<div className="test-svg-container centered">
	      <SvgComponent className="centered">
		      <AndGateComponent/>
		    </SvgComponent>
		   </div>
    )
  }
}

module.exports = App
