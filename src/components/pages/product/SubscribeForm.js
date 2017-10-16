import React, { Component } from 'react';

class SubscribeForm extends Component {
  render() {
    return (
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-5">
                <h1 className="title">
                  Subscribe newsletter
                </h1>
              </div>
              <div className="column is-5">
                <div className="field">
                  <div className="control">
                    <input className="input is-info" type="text" placeholder="Your email address" />
                  </div>
                </div>
              </div>
              <div className="column is-2">
                <a href="#" className="button">Subscribe</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SubscribeForm;
