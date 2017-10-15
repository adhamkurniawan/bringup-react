import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar">
          <div className="navbar-brand">
            <a className="navbar-item" href="index.html">
              <span className="logo">Bring</span>
              <span className="up">Up</span>
            </a>

            <div className="navbar-burger burger" data-target="menu-mobile">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="menu-mobile" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="index.html">
                Home
              </a>
              <a className="navbar-item" href="product.html">
                Product
              </a>
              <a className="navbar-item" href="about.html">
                About
              </a>
              <a className="navbar-item " href="career.html">
                Career
              </a>
            </div>
            <div className="navbar-end">
              <a className="navbar-item " href="login.html">
                Login
              </a>
              <a className="navbar-item" href="register.html">
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
