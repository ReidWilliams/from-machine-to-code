// Globals
import React, { Component } from 'react'

class SvgComponent extends Component {
  render() {
    
    return(
      <svg className="centered" viewBox="0 0 3000 3000">
        {this.props.children}
      </svg>
    )
  }
}

export default SvgComponent