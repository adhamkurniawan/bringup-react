import React, { Component } from 'react';
import Items from './Items';

class ListProduct extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-body content has-text-grey-dark">
          <Items />
        </div>
      </section>
    )
  }
}

export default ListProduct;
