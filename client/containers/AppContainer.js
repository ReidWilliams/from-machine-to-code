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
            <BannerContainer />
    		<div className="body-copy body-copy-container">
    			<p>
                Close your eyes and picture the most complex machine you own. What is it? 
                Is it the one you&#39;re using right now to read this? Inside the utility, 
                delight, and frustration of our many computers, large and small including 
                this one, is a layer cake of technology. This stack includes HTML, 
                web browsers, operating systems, compilers, programming languages, 
                network protocols and many others. 
                </p>

                <p>
                At the foundation is one technology that&#39;s special, because historically 
                it came first, but also because it does something magical that no other machine can 
                do. It creates one universe inside of another: a neat, abstracted world of 
                ones, zeros, and software inside a messy, analog world of physics. 
                </p>

                <p>
                In 2017, a typical microprocessor houses over a billion transistors. Each 
                transistor does a bit of magic, helping domesticate electricity into only 
                one of two possible states: zero or one. Powerful though this sleight of 
                hand is, it isn’t enough to create a digital universe. It’s the precise 
                connection of these billion transistors that does it. 
                </p>

                <p>
                This post is an interactive tour of a tiny slice of the machine: how 
                the simplest digital parts work together to represent numbers, do math, 
                and run programs of software.
                </p>

                <h1 className="paragraph-title-copy paragraph-title-spacer">Hello gates</h1>

    		</div>
            <HelloGatesContainer />

            <div className="body-copy body-copy-container">
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

            <div className="body-copy body-copy-container">
                <h1 className="paragraph-title-copy paragraph-title-spacer">Remembering a bit</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sag
                ittis pretium vestibulum. Vestibulum nec blandit mauris. Phasellus 
                nec imperdiet est. 
                </p>
            </div>
            <LatchContainer />

            <div className="body-copy body-copy-container">
                <h1 className="paragraph-title-copy paragraph-title-spacer">Bob Lablaw</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sag
                ittis pretium vestibulum. Vestibulum nec blandit mauris. Phasellus 
                nec imperdiet est. 
                </p>
            </div>
            <RegisterContainer />

            <div className="body-copy body-copy-container">
                <h1 className="paragraph-title-copy paragraph-title-spacer">Bob Lablaw</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sag
                ittis pretium vestibulum. Vestibulum nec blandit mauris. Phasellus 
                nec imperdiet est. 
                </p>
            </div>
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
