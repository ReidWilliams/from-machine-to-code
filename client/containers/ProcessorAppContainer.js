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
                <p>Blah blah blah blah this is the text of the thing that I am writing at some point. 
                </p>
            </div>
            <ProcessorContainer />



           
         
    	</div>
    )
  }
}

module.exports = App
