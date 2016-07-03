import React, {Component} from 'react'

import BannerContainer from '../containers/BannerContainer'
import HelloGatesContainer from '../containers/HelloGatesContainer'
import VampiresContainer from '../containers/VampiresContainer'
import Adder1Container from '../containers/Adder1Container'

class App extends Component {
  render() {
    return (
    	<div>
            <BannerContainer />
    		<div className="body-copy body-copy-container">
    			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sag
    			ittis pretium vestibulum. Vestibulum nec blandit mauris. Phasellus 
    			nec imperdiet est. Integer eu posuere sem. Duis suscipit fringilla 
    			lacus, id viverra justo tempor a. Curabitur nec sem convallis neque 
    			mattis cursus. Mauris feugiat nec dolor a eleifend. Donec non urna 
    			pulvinar, ultrices nulla in, eleifend dolor. Fusce et lectus nisl.
    			</p>
    		</div>
            <HelloGatesContainer />
            <div className="body-copy body-copy-container">
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sag
                ittis pretium vestibulum. Vestibulum nec blandit mauris. Phasellus 
                nec imperdiet est. Integer eu posuere sem. Duis suscipit fringilla 
                lacus, id viverra justo tempor a. Curabitur nec sem convallis neque 
                mattis cursus. Mauris feugiat nec dolor a eleifend. Donec non urna 
                pulvinar, ultrices nulla in, eleifend dolor. Fusce et lectus nisl.
                </p>
            </div>
            <Adder1Container />
    	</div>
    )
  }
}

module.exports = App
