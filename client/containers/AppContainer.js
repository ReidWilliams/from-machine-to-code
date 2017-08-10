import React, {Component} from 'react'

import BannerContainer from '../containers/BannerContainer'
import HelloGatesContainer from '../containers/HelloGatesContainer'
import DeliciousContainer from '../containers/DeliciousContainer'
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
            This post is an interactive tour of how 
            the simplest digital parts work together to represent numbers, do math, 
            remember data, and create programmable machines. 
          </p>
    		</div>
        <div className="body-copy body-copy-container">
          <h1 className="paragraph-title-copy paragraph-title-spacer">Hello Gates</h1>
          <p>
            When just a few transistors are put together in the right electrical circuit, they create
            a gate. The gate is the simplest building block of the digital universe.
          </p>
        </div>
        <HelloGatesContainer />
        <div className="body-copy body-copy-container">
          <p>
            Gates are an abstraction. They hide the messy physics of electricity 
            and form simple rules based on logic in which input bits (each of which can be a zero or a one) 
            combine to determine an output bit. You can build a lot with four kinds of gates: OR, AND, 
            NOT, and XOR.
          </p>

          <p>
            The logic each gate implements pretty much follows what it&#39;s name suggests, though
            it turns out how we think about "or" in English isn&#39;t the full picture. With gates, 
            we need OR which outputs one when either input is one and also when
            both inputs are one, and separately XOR which outputs one when either input is one but
            not when both are one. It&#39;s complicated, and better to just play with the four 
            gates above by clicking to change their inputs. 
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
