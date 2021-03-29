import { LitElement, css, html } from 'lit-element';

import { connect } from '../../../store';

class HelloGates extends LitElement {
  static get styles() {
    return css``;
  }

  constructor() {
    super();
  }

  render() {  
    console.log(this.state);

    return html`
      <h1>I'm rendering inside Hello gates</h1>
    `;
  }
}

const mapStateToProps = (state, component) => {
  component.state = state;
};

customElements.define('hello-gates', connect(mapStateToProps, HelloGates));
// customElements.define('hello-gates', HelloGates);

