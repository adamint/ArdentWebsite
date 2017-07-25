import React from "react";
import { NavLink } from "react-router-dom";

import logo from "./logo.svg";
import "./styles.css";

const Nav = () =>
  <header>
    <div className="container">
      <div id="logo">
        <img id="logo-img" className="center" src={logo} alt="Ardent" />
      </div>
      <div id="nav" className="center">
        <NavLink
          className="nav-link"
          exact
          to="/ArdentWebsite/"
          activeClassName="nav-link-active"
        >
          Home
        </NavLink>
        <NavLink
          className="nav-link"
          exact
          to="/ArdentWebsite/about"
          activeClassName="nav-link-active"
        >
          About
        </NavLink>
        <NavLink
          className="nav-link"
          exact
          to="/ArdentWebsite/4444"
          activeClassName="nav-link-active"
        >
          NotFound
        </NavLink>
      </div>
    </div>
  </header>;

export default Nav;
