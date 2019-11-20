// Globals
import React, { Component } from 'react'

class FooterComponent extends Component {
  render() {
    return(   
      <div className="footer">
        <div className="body-copy-container">
          <p>
            Thank you to vi hart + nicky case for inspiring this post.
          </p>
          <p>
            All content and &nbsp;
            <a href="https://github.com/reidwilliams/from-machine-to-code">
              code
            </a>
            &nbsp; are released under the MIT license.
          </p>
          <p>
            Find me on Twitter <a href="https://twitter.com/_reidw_">@_reidw_</a>
          </p>
        </div>
      </div>
    )
  }
}

export default FooterComponent