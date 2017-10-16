import React, { Component } from 'react';
import Banner from './Banner';
import Story from './Story';

class About extends Component {
  render() {
    return (
      <div className="About">
        <Banner />
        <Story />
      </div>
    )
  }
}

export default About;
