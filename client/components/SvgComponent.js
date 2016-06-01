// Globals
import React, { Component } from 'react'

class SvgComponent extends Component {
  render() {
    
    return(
      <svg width="800px" height="600px">
        {this.props.children}
      </svg>
    )
  }
}

export default SvgComponent