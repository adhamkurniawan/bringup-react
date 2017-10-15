import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <span className="logo">Bring</span>
              <span className="up">Up</span>
            </Link>

            <div className="navbar-burger burger" data-target="menu-mobile">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="menu-mobile" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/product">
                Product
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/career">
                Career
              </Link>
            </div>
            <div className="navbar-end">
              <Link className="navbar-item" to="/login">
                Login
              </Link>
              <Link className="navbar-item" to="/register">
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
