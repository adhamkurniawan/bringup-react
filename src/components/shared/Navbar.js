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
            <Link className="navbar-item" to={process.env.PUBLIC_URL + "/"}>
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
              <Link className="navbar-item" to={process.env.PUBLIC_URL + "/"}>
                Home
              </Link>
              <Link className="navbar-item" to={process.env.PUBLIC_URL + "/product"}>
                Product
              </Link>
              <Link className="navbar-item" to={process.env.PUBLIC_URL + "/about"}>
                About
              </Link>
              <Link className="navbar-item" to={process.env.PUBLIC_URL + "/career"}>
                Career
              </Link>
            </div>
            <div className="navbar-end">
              <Link className="navbar-item" to={process.env.PUBLIC_URL + "/login"}>
                Login
              </Link>
              <Link className="navbar-item" to={process.env.PUBLIC_URL + "/register"}>
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
