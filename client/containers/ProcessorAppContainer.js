import React, {Component} from 'react'

import BannerContainer from '../containers/BannerContainer'
import HelloGatesContainer from '../containers/HelloGatesContainer'
import VampiresContainer from '../containers/VampiresContainer'
import BinaryNumberContainer from '../containers/BinaryNumberContainer'
import Adder1Container from '../containers/Adder1Container'
import FullAdderContainer from '../containers/FullAdderContainer'
import Adder3Container from '../containers/Adder3Container'
import LatchContainer from '../containers/LatchContainer'
import RegisterContainer from '../containers/RegisterContainer'
import CalculatorContainer from '../containers/CalculatorContainer'
import ProcessorContainer from '../containers/ProcessorContainer'

class App extends Component {
  render() {
    return (
    	<div>
            <CalculatorContainer />

             <div className="body-copy body-copy-container">
                <h1 className="paragraph-title-copy paragraph-title-spacer">Bob Lablaw</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sag
                ittis pretium vestibulum. Vestibulum nec blandit mauris. Phasellus 
                nec imperdiet est. 
                </p>
            </div>
            <ProcessorContainer />



           
         
    	</div>
    )
  }
}

module.exports = App
