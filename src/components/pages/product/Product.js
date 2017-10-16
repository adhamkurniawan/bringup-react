import React, { Component } from 'react';
import Banner from './Banner';
import ListProduct from './ListProduct';
import SubscribeForm from './SubscribeForm';

class Product extends Component {
  render() {
    return (
      <div className="Product">
        <Banner />
        <ListProduct />
        <SubscribeForm />
      </div>
    )
  }
}

export default Product;
