import { LitElement, css, html } from 'lit-element';

class HelloGates extends LitElement {
  static get styles() {
    return css``;
  }

  constructor() {
    super();
  }

  render() {  
    return html`
      <h1>I'm rendering inside Hello gates</h1>
    `;
  }
}

customElements.define('hello-gates', HelloGates);

