import React, { Component } from 'react';

class Banner extends Component {
  render() {
    let GithubIconColor = {
      color: '#333'
    }

    let TwitterIconColor = {
      color: '#55acee'
    }

    return (
      <section className="hero is-info is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="has-text-centered">
              <h1 className="title is-1">
                Let's join with us in awesome digital product brand.
              </h1>
              <a className="bd-tw-button button" href="https://github.com/">
                <span className="icon" style={GithubIconColor}>
                  <i className="fa fa-lg fa-github"></i>
                </span>
                <span>
                  Login with Github
                </span>
              </a>
              <span>&nbsp;</span>
              <a className="button" href="https://twitter.com/">
                <span className="icon" style={TwitterIconColor}>
                  <i className="fa fa-lg fa-twitter"></i>
                </span>
                <span>Login with Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Banner;
