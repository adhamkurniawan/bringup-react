import React, { Component } from 'react';
import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import Banner from './Banner';
import Service from './Service';
import Product from './Product';
import ContactForm from './ContactForm';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar />
          <Banner />
          <Service />
          <Product />
          <ContactForm />
        <Footer />
      </div>
    )
  }
}

export default Home;
