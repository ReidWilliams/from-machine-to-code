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
            Inside our many computers, from laptop to smart watch, is a layer cake of technology. 
            This stack includes the browsers that render web apps, 
            the operating systems on which they run, and the compilers, programming languages, 
            and network protocols that make expressing and running all this complexity possible.  
          </p>

          <p>
            At the foundation of the cake is one magical technology that does something special.
            It creates one universe inside of another: a neat, abstracted world of 
            ones and zeros inside a messy, analog world of physics. It's where hardware becomes
            software. 
          </p>

          <p>
            Inside a typical microprocessor live over a billion transistors. Each 
            transistor does a bit of magic, helping domesticate electricity into only 
            one of two possible states: zero or one. Powerful though this sleight of 
            hand is, it isn’t enough to create a digital universe. It's not any one transistor
            but the precise connection of the billion that does it. 
          </p>

          <p>
            This post is an interactive tour of how 
            the simplest digital parts work together to represent numbers, do math, 
            remember data, and create programmable machines. Every picture is interactive.
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
            combine to determine an output bit. We can build a lot with four kinds of gates: OR, AND, 
            NOT, and XOR.
          </p>

          <p>
            The logic each gate implements follows the intuition behind its name, though
            it turns out how we think about "or" in English isn&#39;t the full picture. The XOR
            and OR gates capture slightly different ideas of what "or" means. 
          </p>
          
          <h1 className="paragraph-title-copy paragraph-title-spacer">Combining gates</h1>
          <p>
            What if we wanted to build a circuit that decides whether a poker hand is a straight
            or a flush? We'd need something more powerful than any one gate can provide. To handle
            this and other more complex logic, we combine gates into circuits with multiple inputs.

          </p>
        </div>
        <VampiresContainer />
        <div className="body-copy body-copy-container">
          <h1 className="paragraph-title-copy paragraph-title-spacer">Speaking numbers</h1>
          <p>
            The problem with the poker hand circuit is it&#39;s specialized and can only be used
            for one thing. We can start to build more general circuits that solve lots of different kinds
            of problems by using &#8220;bits&#8221; to represent text and numbers.
            We can use a collection of five bits to represent any number between
            0 and 31. 
          </p>
        </div>
        <BinaryNumberContainer />


        <div className="body-copy body-copy-container">
            <h1 className="paragraph-title-copy paragraph-title-spacer">Adding numbers</h1>
            <p>Now that we can use bits to represent numbers, we&#39;ll want to do
            something with them, like add them. The XOR gate and the AND gate are really 
            important to these adder circuits. If you think about how you&#39;d add numbers
            on paper, the XOR gate is like adding numbers in a column, and the AND gate is
            like carrying a one left to antoher column. This circuit is called a half adder.
            </p>
        </div>
        <Adder1Container />

        <div className="body-copy body-copy-container">
            <h1 className="paragraph-title-copy paragraph-title-spacer">The &#8220;full&#8221; adder</h1>
            <p>Here&#39;s an adder circuit that is a little more complicated. It adds three 1-bit numbers
            to make a 2-bit number. This circuit is special becase several can be cobined to make
            circuits that add much larger numbers.
            </p>
        </div>
        <FullAdderContainer />


        <div className="body-copy body-copy-container">
            <h1 className="paragraph-title-copy paragraph-title-spacer">Adding larger numbers</h1>
            <p>Combining one half adder and two full adders, we can build a circuit that adds
            much larger numbers! We won&#39;t talk about subtraction, multiplication, or division, but
            there&#39;s a circuit that can do each.  
            </p>
        </div>
        <Adder3Container />

        <div className="body-copy body-copy-container">
            <h1 className="paragraph-title-copy paragraph-title-spacer">Remembering a bit</h1>
            <p>Adding numbers is great and all, but it would be nice to be able to remember things.
            By introducing feedback that feeds an output back as an input, a circuit can have
            memory. 
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
