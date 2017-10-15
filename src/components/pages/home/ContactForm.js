import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-2 has-text-grey has-text-centered">Let's get started</h1>
            <div className="columns">
              <div className="column">
                <div className="field">
                  <div className="control">
                    <label>Full Name</label>
                    <input className="input" type="text" placeholder="Full Name" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <div className="control">
                    <label>Email Address</label>
                    <input className="input" type="text" placeholder="Email Address" />
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="field">
                  <div className="control">
                    <label>Phone Number</label>
                    <input className="input" type="text" placeholder="Phone Number" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <div className="control">
                    <label>Subject</label>
                    <input className="input" type="text" placeholder="Subject" />
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="field">
                  <div className="control">
                    <label>Message</label>
                    <textarea className="textarea" rows="6" placeholder="Your message"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="has-text-centered">
                  <a href="#!" className="button is-info is-outlined">
                    <span className="icon">
                      <i className="fa fa-send"></i>
                    </span>
                    <span>
                      Send Message
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ContactForm;
