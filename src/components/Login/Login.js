import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container-fluid col-sm-8 col-md-6 col-lg-5 login-form p-4">
      <form className="form-signin">
        <h3 className="mb-5 pt-1 fs-2 ">
          Placement Management
          <br /> System.
        </h3>
        <div className="form-label-group px-3">
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
          />
          <label htmlFor="inputEmail">Email ID</label>
        </div>
        <div className="form-label-group px-3">
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />
          <label htmlFor="inputPassword">Password</label>
        </div>
        <div className="text-center mb-3">
          <Link className="small" to="/forgot_password">
            Forgot password?
          </Link>
        </div>
        <div
          className="form-group btn btn-outline-secondary sign-btn m-2"
          id="signin-btn"
        >
          <Link to="/sign_in" className="form-submit fs-4 px-5">
            Sign In
          </Link>
        </div>
        <div
          className="form-group btn btn-outline-secondary sign-btn m-2"
          id="signin-btn"
        >
          <Link to="/register" className="form-submit fs-4 px-5">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
