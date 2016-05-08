// Globals
import React, { Component } from 'react'

class SvgComponent extends Component {
  render() {
    
    return(
      <svg width="600px" height="400px" viewBox="0 0 600 400">
        {this.props.children}
      </svg>
    )
  }
}

export default SvgComponent