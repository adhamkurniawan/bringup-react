import React, { Component } from 'react';
import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import Banner from './Banner';
import ListProduct from './ListProduct';
import SubscribeForm from './SubscribeForm';

class Product extends Component {
  render() {
    return (
      <div className="Product">
        <Navbar />
          <Banner />
          <ListProduct />
          <SubscribeForm />
        <Footer />
      </div>
    )
  }
}

export default Product;
