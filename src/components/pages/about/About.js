import React, { Component } from 'react';
import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import Banner from './Banner';
import Story from './Story';

class About extends Component {
  render() {
    return (
      <div className="About">
        <Navbar />
          <Banner />
          <Story />
        <Footer />
      </div>
    )
  }
}

export default About;
