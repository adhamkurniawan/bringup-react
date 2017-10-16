import React, { Component } from 'react';
import p1 from './images/product.jpg';
import p2 from './images/product_2.jpg';
import p3 from './images/product_3.jpg';

class Items extends Component {
  render() {
    return (
      <div className="Items">
        <div className="columns">
          <div className="column">
            <img src={p1} alt="Product 1" className="image rounded" />
          </div>
          <div className="column">
            <h1 className="title is-2 has-text-grey">
              Product 1
            </h1>
            <p>Church-key air plant lorem eiusmod, migas poke commodo fashion axe nisi disrupt shoreditch. Whatever nulla vaporware lyft, iPhone butcher hella chicharrones plaid asymmetrical iceland. Williamsburg whatever tbh, pabst duis fugiat gochujang normcore tempor cardigan ut twee XOXO green juice neutra. Hammock whatever migas ennui et, normcore 8-bit twee.</p>
            <br />
            <p>Selvage cray +1 taxidermy anim, mlkshk palo santo culpa kickstarter officia occaecat shabby chic. Gochujang elit taiyaki swag yr tousled. Williamsburg la croix helvetica poke chartreuse.</p>
            <ul>
              <li>Adipisicing williamsburg YOLO banh mi</li>
              <li>Sunt incididunt cold-pressed next</li>
              <li>Letterpress 8-bit marfa esse</li>
              <li>Skateboard ea raclette fixie</li>
            </ul>
          </div>
        </div>
        <br />
        <div className="columns">
          <div className="column">
            <h1 className="title is-2 has-text-grey">
              Product 2
            </h1>
            <p>Church-key air plant lorem eiusmod, migas poke commodo fashion axe nisi disrupt shoreditch. Whatever nulla vaporware lyft, iPhone butcher hella chicharrones plaid asymmetrical iceland. Williamsburg whatever tbh, pabst duis fugiat gochujang normcore tempor cardigan ut twee XOXO green juice neutra. Hammock whatever migas ennui et, normcore 8-bit twee.</p>
            <br />
            <p>Selvage cray +1 taxidermy anim, mlkshk palo santo culpa kickstarter officia occaecat shabby chic. Gochujang elit taiyaki swag yr tousled. Williamsburg la croix helvetica poke chartreuse.</p>
            <ul>
              <li>Adipisicing williamsburg YOLO banh mi</li>
              <li>Sunt incididunt cold-pressed next</li>
              <li>Letterpress 8-bit marfa esse</li>
              <li>Skateboard ea raclette fixie</li>
            </ul>
          </div>
          <div className="column">
            <img src={p2} alt="Product 2" className="image rounded" />
          </div>
        </div>
        <br />
        <div className="columns">
          <div className="column">
            <img src={p3} alt="Product 3" className="image rounded" />
          </div>
          <div className="column">
            <h1 className="title is-2 has-text-grey">
              Product 3
            </h1>
            <p>Church-key air plant lorem eiusmod, migas poke commodo fashion axe nisi disrupt shoreditch. Whatever nulla vaporware lyft, iPhone butcher hella chicharrones plaid asymmetrical iceland. Williamsburg whatever tbh, pabst duis fugiat gochujang normcore tempor cardigan ut twee XOXO green juice neutra. Hammock whatever migas ennui et, normcore 8-bit twee.</p>
            <br />
            <p>Selvage cray +1 taxidermy anim, mlkshk palo santo culpa kickstarter officia occaecat shabby chic. Gochujang elit taiyaki swag yr tousled. Williamsburg la croix helvetica poke chartreuse.</p>
            <ul>
              <li>Adipisicing williamsburg YOLO banh mi</li>
              <li>Sunt incididunt cold-pressed next</li>
              <li>Letterpress 8-bit marfa esse</li>
              <li>Skateboard ea raclette fixie</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Items;
