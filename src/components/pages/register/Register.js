import React, { Component } from 'react';

class Register extends Component {
  render() {
    let GoogleIcon = {
      color: '#b30000'
    }

    let GithubIcon = {
      color: '#333'
    }

    return (
      <div className="Register">
        <div className="container">
          <br/><br/><br/>
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <div className="box">
                <article className="media">
                  <div className="media-content">
                    <div className="content has-text-grey-dark">
                      <h2 className="has-text-centered">Sign Up</h2>
                      <div className="field">
                        <label className="label">Email Address</label>
                        <div className="control">
                          <input className="input is-info" type="email" placeholder="Email Address" />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                          <input className="input is-info" type="password" placeholder="Password" />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Password Confirmation</label>
                        <div className="control">
                          <input className="input is-info" type="password" placeholder="Password Confirmation" />
                        </div>
                      </div>
                      <div className="field">
                        <a className="button is-info is-fullwidth" href={process.env.PUBLIC_URL + "/"}>Register</a>
                      </div>
                      <div className="field">
                        <a className="button is-primary is-fullwidth" href={process.env.PUBLIC_URL + "/"}>Back</a>
                      </div>
                      <div className="field">
                        <p className="has-text-centered">
                          or
                        </p>
                      </div>
                      <div className="field">
                        <a className="button is-default is-fullwidth" href={process.env.PUBLIC_URL + "/"}>
                          <span className="icon" style={GithubIcon}>
                            <i className="fa fa-github"></i>
                          </span>
                          <span>Sign Up with Github</span>
                        </a>
                      </div>
                      <div className="field">
                        <a className="button is-default is-fullwidth" href={process.env.PUBLIC_URL + "/"}>
                          <span className="icon" style={GoogleIcon}>
                            <i className="fa fa-google"></i>
                          </span>
                          <span>Sign Up with Google</span>
                        </a>
                      </div>
                    </div>
                    <p className="has-text-centered">
                      <small>Have an account? <a href={process.env.PUBLIC_URL + "/login"}>Login</a></small>
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;
