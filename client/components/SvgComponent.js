// Globals
import React, { Component } from 'react'

class SvgComponent extends Component {
  render() {
    
    return(
      <svg width="100%" viewBox="0 0 3000 5500">
        {this.props.children}
      </svg>
    )
  }
}

export default SvgComponent