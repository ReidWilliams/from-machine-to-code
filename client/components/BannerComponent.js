// Globals
import React, { Component } from 'react'

import HeadlineCopyComponent from './HeadlineCopyComponent'
import SvgComponent from '../components/SvgComponent'
import CircuitContainer from '../containers/CircuitContainer'

class BannerComponent extends Component {
  render() { 
    return(   
      <svg className="centered banner-component" viewBox="0 0 2778 1800">
      	<g transform="translate(0, 150)">
	      	<CircuitContainer />
	      	<HeadlineCopyComponent />
	      </g>
      </svg>
    )
  }
}

export default BannerComponent