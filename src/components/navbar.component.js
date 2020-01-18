import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/js/dist/collapse";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-md">
        <Link to="/" className="navbar-brand">
        💰Piggy Saver
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
              🗒️All Payments
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">
              👛Add Payment Log
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user" className="nav-link">
              👤Create User
              </Link>
            </li>
          </ul>
        </div>








      </nav>


      
    );
  }
}
