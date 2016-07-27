// Globals
import React, { Component } from 'react'

import HeadlineCopyComponent from '../components/HeadlineCopyComponent'
import CircuitContainer from '../containers/CircuitContainer'

class BannerContainer extends Component {
  render() { 
    return(  
      <div> 
        <div className="banner-component centered">
          <svg className="banner-headline" viewBox="0 0 2778 1800">
          	<g transform="translate(0, 150)">
    	      	<CircuitContainer circuitName="banner" />
    	      	<HeadlineCopyComponent />
    	      </g>
          </svg>
        </div>
        <div className="banner-subhead-margin body-copy-container">
          <h1 className="banner-subhead-copy">How simple parts combine to create programmable machines</h1>
        </div>
      </div>
    )
  }
}

export default BannerContainer