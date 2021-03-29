import { LitElement, css, html } from 'lit-element';

import HelloGates from './sections/hello-gates';

class Content extends LitElement {
  static get styles() {
    return css`
      layout {
        display: block;
        min-height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr auto;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {  
    return html`
      <h1>I'm rendering inside Content</h1>
      <hello-gates></hello-gates>
    `;
  }
}

customElements.define('content-component', Content);

