import React, { Component } from 'react';

class Login extends Component {
  render() {
    let GoogleIcon = {
      color: '#b30000'
    }

    let GithubIcon = {
      color: '#333'
    }

    return (
      <div className="Login">
        <div className="container">
          <br/><br/><br/>
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <div className="box">
                <article className="media">
                  <div className="media-content">
                    <div className="content has-text-grey-dark">
                      <h2 className="has-text-centered">Login</h2>
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
                        <label className="checkbox">
                          <input type="checkbox" />
                          Remember Me
                        </label>
                      </div>
                      <div className="field">
                        <a className="button is-info is-fullwidth" href="/">Login</a>
                      </div>
                      <div className="field">
                        <a className="button is-primary is-fullwidth" href="/">Back</a>
                      </div>
                      <div className="field">
                        <p className="has-text-centered">
                          or
                        </p>
                      </div>
                      <div className="field">
                        <a className="button is-default is-fullwidth">
                          <span className="icon" style={GithubIcon} href="/">
                            <i className="fa fa-github"></i>
                          </span>
                          <span>Login with Github</span>
                        </a>
                      </div>
                      <div className="field">
                        <a className="button is-default is-fullwidth" href="/">
                          <span className="icon" style={GoogleIcon}>
                            <i className="fa fa-google"></i>
                          </span>
                          <span>Login with Google</span>
                        </a>
                      </div>
                    </div>
                    <p className="has-text-centered">
                      <small>Don't have an account? <a href="/">Register</a></small>
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

export default Login;
