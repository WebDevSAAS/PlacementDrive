import React from "react";
import "./Navbar.css";
import navbarLogo from "./images/rnsit-logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid fs-5 mx-5">
        <a href="#" className="navbar-brand fw-bold">
          <img className="mx-1" src={navbarLogo} alt="" width="50" height="40"/>  
          R N S Institute of Technology
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navmenu">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-2 mx-1">
              <Link className="nav-link" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item px-2 mx-1">
              <Link className="nav-link active" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item px-2 mx-1">
              <Link className="nav-link" to="/contact_us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
