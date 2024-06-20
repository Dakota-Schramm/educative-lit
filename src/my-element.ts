import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import Flower1 from './assets/Flower1.jpg'
import Flower2 from './assets/Flower2.jpg'
import Flower3 from './assets/Flower3.jpg'
import Flower4 from './assets/Flower4.jpg'
import Flower5 from './assets/Flower5.jpg'
import Flower6 from './assets/Flower6.jpg'

const flowers = [
  { src: Flower1 },
  { src: Flower2 },
  { src: Flower3 },
  { src: Flower4 },
  { src: Flower5 },
  { src: Flower6 }
]

// created an interface for a card
export interface ICard {
  id: number;
  src: string;
  matched: boolean;
};


@customElement('my-element')
export class MyElement extends LitElement {
  
  @state()
  protected _firstChoice?: ICard;

  @state()
  protected _secondChoice?: ICard;

  render() {
    return html`
      <div>
        <h1> Memory Game </h1>
      </div>
    `
  }

  shuffleCards() {
    
  }

  static styles = css``
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}