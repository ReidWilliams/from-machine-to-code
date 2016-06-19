// Globals
import React, { Component } from 'react'

import HeadlineCopyComponent from './HeadlineCopyComponent'
import CircuitContainer from '../containers/CircuitContainer'

class BannerComponent extends Component {
  render() { 
    return(   
      <div className="centered banner-component">
        <svg className="banner-headline" viewBox="0 0 2778 1800">
        	<g transform="translate(0, 150)">
  	      	<CircuitContainer circuitName="banner" />
  	      	<HeadlineCopyComponent />
  	      </g>
        </svg>
        <h1 className="column">The world of microprocessor</h1>
      </div>
    )
  }
}

export default BannerComponent