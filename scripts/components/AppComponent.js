import React, {Component} from 'react'

import SvgComponent from './SvgComponent'
import AndGateComponent from './AndGateComponent'

class App extends Component {
  render() {
    return (
      <SvgComponent>
	      <AndGateComponent/>
	    </SvgComponent>
    )
  }
}

module.exports = App
