// Globals
import React, { Component } from 'react'

class SvgComponent extends Component {
  render() {
    
    return(
      <svg width="65px" height="99px" viewBox="0 0 65 99">
        {this.props.children}
      </svg>
    )
  }
}

export default SvgComponent