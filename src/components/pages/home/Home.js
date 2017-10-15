import React, { Component } from 'react';
import Banner from './Banner';
import Service from './Service';
import Product from './Product';
import ContactForm from './ContactForm';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Banner />
        <Service />
        <Product />
        <ContactForm />
      </div>
    )
  }
}

export default Home;
