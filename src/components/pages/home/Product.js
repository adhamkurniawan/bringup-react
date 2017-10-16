import React, { Component } from 'react';
import p1 from './images/product.jpg';

class Product extends Component {
  render() {
    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-2 has-text-white has-text-centered">Our Product</h1>
            <div className="columns">
              <div className="column">
                <figure className="image is-4by3">
                  <img src={p1} alt="Product" className="rounded" />
                </figure>
              </div>
              <div className="column">
                <i className="fa fa-desktop fa-5x has-text-primary"></i>
                <h1 className="subtitle is-4 has-text-white">Cliche Distillery</h1>
                <p className="has-text-white-bis">
                  Disrupt iPhone paleo, cred tote bag everyday carry leggings hella pinterest blog etsy affogato schlitz shoreditch pickled. Jean shorts franzen XOXO, DIY authentic heirloom unicorn butcher palo santo VHS tilde you probably haven't heard of them synth chillwave schlitz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Product;
