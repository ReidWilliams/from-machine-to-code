import { LitElement, css, html } from 'lit-element';

class Main extends LitElement {
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
      <h1>I'm rendering inside main</h1>
    `;
  }
}

customElements.define('main-component', Main);
