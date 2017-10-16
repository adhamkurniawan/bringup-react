import React, { Component } from 'react';
import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import Banner from './Banner';
import Content from './Content';

class Career extends Component {
  render() {
    return (
      <div className="Career">
        <Navbar />
          <Banner />
          <Content />
        <Footer />
      </div>
    )
  }
}

export default Career;
