import React from "react";
import "./Navbar.css";
import navbarLogo from "./images/rnsit-logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid fs-5 mx-5">
        <a href="/" className="navbar-brand fw-bold">
          <img
            className="mx-1"
            src={navbarLogo}
            alt=""
            width="50"
            height="40"
          />
          R N S Institute of Technology
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-2 mx-1">
              <NavLink
                activeClassName="current"
                className="nav-link"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item px-2 mx-1">
              <NavLink
                activeClassName="current"
                className="nav-link"
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item px-2 mx-1">
              <NavLink
                activeClassName="current"
                className="nav-link"
                to="/contact_us"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
