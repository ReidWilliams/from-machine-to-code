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
import FooterComponent from '../components/FooterComponent'

class App extends Component {
  render() {
    return (
      <div>
        <BannerContainer />
        <div className="body-copy body-copy-container">
          <p>
            Right now you&#39;re staring at a bunch of pixels powered by a tiny digital machine
            of astounding complexity. Sitting below the layers of software—things like web browsers
            and operating systems—it does something special. It creates 
            one universe inside of another: a neat, abstracted world of 
            ones and zeros within a noisy, analog world of electricity. It's where hardware becomes
            software. 
          </p>

          <p>
            Inside this machine, the microprocessor, lives over a billion transistors, each 
            helping corral electricity into only 
            one of two possible states: zero or one. With a billion transistors
            connected in the right way, we get fantastical machines that power everything
            from watches to washing machines.
          </p>

          <p>
            This post is an interactive tour of how 
            the simplest digital parts work together to represent numbers, do math, 
            remember data, and create programmable machines.
          </p>

          <p className="is-pink">
            Every picture in this post is interactive, so 👉 
          </p>

        </div>
        <div className="body-copy body-copy-container">
          <h1 className="paragraph-title-copy paragraph-title-spacer">Hello gates</h1>
          <p>
            When just a few transistors are put together in the right electrical circuit, they create
            a “gate”. The gate is the simplest building block of the digital universe.
          </p>
        </div>
        <HelloGatesContainer />
        <div className="body-copy body-copy-container">
          <p>
            Gates are an abstraction. They hide the messy physics of electricity
            and form simple rules based on logic, where input bits 
            combine to determine an output bit. We can build a lot with four kinds of gates
            called <span className="is-pink">OR, AND, NOT, and XOR</span>.
          </p>

          <p>
            The XOR (exclusive or) and OR gates represent different ideas of what 
            “or” can mean. As you&#39;ll see, it&#39;s useful to have both.
          </p>
          
          <h1 className="paragraph-title-copy paragraph-title-spacer">Combining gates</h1>
          <p>
            Gates can be wired together, output to input, to create more complex logic.
            Is it warm outside? Is it raining? → Should we go to the beach?
          </p>
        </div>
        <VampiresContainer />
        <div className="body-copy body-copy-container">
          <h1 className="paragraph-title-copy paragraph-title-spacer">Speaking numbers</h1>
          <p>
            The problem with the beach circuit is it&#39;s specialized and can only be used
            for one thing. What if we build more general circuits that solve lots of different kinds
            of problems by using &#8220;bits&#8221; to represent text and numbers?
          </p>
          <p>
            We can use a collection of five bits to represent any number between
            0 and 31. You can 👉 the bits and the number.
          </p>
        </div>
        <BinaryNumberContainer />


        <div className="body-copy body-copy-container">
          <h1 className="paragraph-title-copy paragraph-title-spacer">Adding numbers</h1>
          <p>Here&#39;s a circuit that adds numbers. The XOR and AND gate are really 
          important for this circuit. If you think about how you&#39;d add numbers
          on paper, the XOR gate is like adding up a column, and the AND gate is
          like carrying the overflow from one column to the next. This circuit is called a half adder.
          </p>
        </div>
        <Adder1Container />

        <div className="body-copy body-copy-container">
            <h1 className="paragraph-title-copy paragraph-title-spacer">The &#8220;full&#8221; adder</h1>
            <p>Here&#39;s a bigger adder. It adds three 1-bit numbers
            to make a 2-bit number. This circuit is special becase it can be combined to make
            circuits that add much larger numbers.
            </p>
        </div>
        <FullAdderContainer />


        <div className="body-copy body-copy-container">
            <h1 className="paragraph-title-copy paragraph-title-spacer">Adding larger numbers</h1>
            <p>Combining one half adder and two full adders, we can build a circuit that adds
            even larger numbers. We don&#39;t talk about subtraction, multiplication, or division 
            in this post, but there&#39;s a circuit that can do each.  
            </p>
        </div>
        <Adder3Container />

        <div className="body-copy body-copy-container">
            <h1 className="paragraph-title-copy paragraph-title-spacer">Remembering a bit</h1>
            <p>
              Adding numbers is great, but it would be nice to be able to remember things.
              By introducing feedback that connects an output back as an earlier input, a circuit can have
              memory.
            </p> 

            <p>
              When the WAITING bit is off, the output is always the same as INPUT. When it&#39;s
              on, the circuit remembers the last INPUT.
            </p>
        </div>
        <LatchContainer />

        <div className="body-copy body-copy-container">
            <h1 className="paragraph-title-copy paragraph-title-spacer">More stable memory </h1>
            <p>
              Often it&#39;s useful to remember an input but to only sample the input at
              a specific time. The register does this. 
            </p>
            <p>
              When CLOCK goes from off to on,
              it&#39;s output becomes the same as INPUT. It then ignores changes to INPUT until
              the next time CLOCK goes from off to on. 
            </p>
            <p>
              This is useful because more complex circuits
              often have the output of a register connect though some math circuits and then back
              into the input of the same register. The register ensures an orderly transition from
              the old value to the new value by updating only when the clock goes from off to on.
            </p>
            <p> 
               We&#39;ll see how registers are used in bigger circuits next.
            </p>
        </div>
        <RegisterContainer />

        <div className="body-copy body-copy-container">
          <h1 className="paragraph-title-copy paragraph-title-spacer">Always adding</h1>
          <p>
            Putting registers to work, we can build a circuit that adds a number to itself
            over and over. The total so far is remembered by a 3-bit register and added
            to the input each clock cycle.
          </p>
        </div>
        <CalculatorContainer />

        <div className="body-copy body-copy-container">
          <h1 className="paragraph-title-copy paragraph-title-spacer">Stay tuned</h1>
            <p>
              The adding circuits we&#39;ve explored are the basis for much of 
              what microprocessors do. They have some inputs from the outside world,
              do some some math, store the results, do more math on the result, store that result. 
            </p>
            <p>
              Stay tuned for a future post where we explore how to make tiny machines programmable.
            </p>
        </div> 
        <FooterComponent />
      </div>
    )
  }
}

module.exports = App
