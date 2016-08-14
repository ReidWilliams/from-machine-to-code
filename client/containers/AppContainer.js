import React, {Component} from 'react'

import BannerContainer from '../containers/BannerContainer'
import HelloGatesContainer from '../containers/HelloGatesContainer'
import VampiresContainer from '../containers/VampiresContainer'
import BinaryNumberContainer from '../containers/BinaryNumberContainer'
import Adder1Container from '../containers/Adder1Container'
import FullAdderContainer from '../containers/FullAdderContainer'
import Adder3Container from '../containers/Adder3Container'

class App extends Component {
  render() {
    return (
    	<div>
            <BannerContainer />
    		<div className="body-copy body-copy-container">
    			<p>
                The microprocessor, the beating heart inside every laptop and smartphone,
                is a fantastically complex machine built out of nearly  a billion individual parts. The amazing thing
                is that there are only a few different kinds of parts, and each one
                is really simple.
                </p>

                <p>
                This is the story of how these simple components, called logic
                gates combine to build the tiny programmable computing machines we call
                microprocessors.
                </p>

                <h1 className="paragraph-title-copy paragraph-title-spacer">Hello gates</h1>

                <p>
                Logic gates are the Lego building blocks of microprocessors.
                They&#39;re binary devices that do just a little bit of logic. They come in a handful of flavors
                but for now we&#39;re only going to need four. Meet OR, AND, NOT, and XOR.
                </p>

                <p>
                These guys are binary, which means their inputs and outputs can only be in
                one of two states: On or Off. Each gate has an output that depends on its 
                two inputs and each type of gate responds differently to its inputs. Play with the gates by 
                turning their inputs on and off.
                </p>


    		</div>
            <HelloGatesContainer />

            <div className="body-copy body-copy-container">
             <h1 className="paragraph-title-copy paragraph-title-spacer">Combining gates</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sag
                ittis pretium vestibulum. Vestibulum nec blandit mauris. Phasellus 
                nec imperdiet est. Integer eu posuere sem. Duis suscipit fringilla 
                lacus, id viverra justo tempor a. Curabitur nec sem convallis neque 
                mattis cursus. Mauris feugiat nec dolor a eleifend. Donec non urna 
                pulvinar, ultrices nulla in, eleifend dolor. Fusce et lectus nisl.
                </p>
            </div>
            <VampiresContainer />


            <div className="body-copy body-copy-container">
                <h1 className="paragraph-title-copy paragraph-title-spacer">Speaking numbers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sag
                ittis pretium vestibulum. Vestibulum nec blandit mauris. Phasellus 
                nec imperdiet est. Integer eu posuere sem. Duis suscipit fringilla 
                lacus, id viverra justo tempor a. Curabitur nec sem convallis neque 
                mattis cursus. Mauris feugiat nec dolor a eleifend. Donec non urna 
                pulvinar, ultrices nulla in, eleifend dolor. Fusce et lectus nisl.
                </p>
            </div>
            <BinaryNumberContainer />


            <div className="body-copy body-copy-container">
                <h1 className="paragraph-title-copy paragraph-title-spacer">Adding numbers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sag
                ittis pretium vestibulum. Vestibulum nec blandit mauris. Phasellus 
                nec imperdiet est. Integer eu posuere sem. Duis suscipit fringilla 
                lacus, id viverra justo tempor a. Curabitur nec sem convallis neque 
                mattis cursus. Mauris feugiat nec dolor a eleifend. Donec non urna 
                pulvinar, ultrices nulla in, eleifend dolor. Fusce et lectus nisl.
                </p>
            </div>
            <Adder1Container />

            <div className="body-copy body-copy-container">
                <h1 className="paragraph-title-copy paragraph-title-spacer">Adding larger numbers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sag
                ittis pretium vestibulum. Vestibulum nec blandit mauris. Phasellus 
                nec imperdiet est. 
                </p>
            </div>
            <FullAdderContainer />


            <div className="body-copy body-copy-container">
                <h1 className="paragraph-title-copy paragraph-title-spacer">Adding larger numbers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sag
                ittis pretium vestibulum. Vestibulum nec blandit mauris. Phasellus 
                nec imperdiet est. 
                </p>
            </div>
            <Adder3Container />
            
    	</div>
    )
  }
}

module.exports = App
