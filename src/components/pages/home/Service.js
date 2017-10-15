import React, { Component } from 'react';

class Service extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="has-text-centered">
              <h1 className="title is-2 has-text-grey">Our Services</h1>
              <div className="columns">
                <div className="column">
                  <i className="fa fa-code fa-5x has-text-primary"></i>
                  <h1 className="subtitle is-4 has-text-grey">Web Development</h1>
                  <p className="has-text-grey-dark">
                    Flexitarian vaporware disrupt ramps food truck mixtape shaman health goth bicycle rights four loko. Schlitz sustainable af scenester, air plant 8-bit poutine brunch heirloom mixtape iPhone
                  </p>
                </div>
                <div className="column">
                  <i className="fa fa-mobile fa-5x has-text-primary"></i>
                  <h1 className="subtitle is-4 has-text-grey">Mobile Development</h1>
                  <p className="has-text-grey-dark">
                    Flexitarian vaporware disrupt ramps food truck mixtape shaman health goth bicycle rights four loko. Schlitz sustainable af scenester, air plant 8-bit poutine brunch heirloom mixtape iPhone
                  </p>
                </div>
                <div className="column">
                  <i className="fa fa-desktop fa-5x has-text-primary"></i>
                  <h1 className="subtitle is-4 has-text-grey">Web Design</h1>
                  <p className="has-text-grey-dark">
                    Flexitarian vaporware disrupt ramps food truck mixtape shaman health goth bicycle rights four loko. Schlitz sustainable af scenester, air plant 8-bit poutine brunch heirloom mixtape iPhone
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Service;
