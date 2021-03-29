import { LitElement, css, html } from 'lit-element';

import Content from './main/content';

class App extends LitElement {
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
      <content-component></content-component>
    `;
  }
}

customElements.define('app-component', App);
