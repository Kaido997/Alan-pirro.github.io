import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('hero-component')
export class Hero extends LitElement {
  render(){
    return html`
    <p>HELLO WORLD</p>
    ` 
  } 
    
  
}

declare global {
  interface HTMLElementTagNameMap {
    'hero-component': Hero
  }
}
