import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <section className="hero is-info is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="has-text-centered">
              <h1 className="title is-1">
                About
              </h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Banner;
