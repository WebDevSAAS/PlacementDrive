import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

var usnData;

const Login = () => {
  const sendUSN = (e) => {
    console.log(e.target.dataset.mssg);
    usnData = e.target.dataset.mssg;
  };

  const [usn, onChangeUsn] = useState("USN");

  const fetchUSN = (e) => {
    onChangeUsn(e.target.value);
  };

  return (
    <div
      className="container-fluid col-sm-8 col-md-6 col-lg-5 text-center p-4"
      id="login-form"
    >
      <form className="form-signin">
        <h3 className="mb-5 pt-1 fs-2">
          Placement Management
          <br /> Login
        </h3>
        <div className="form-label-group px-3">
          <input
            type="text"
            id="inputUsn"
            className="form-control"
            placeholder="USN"
            onChange={fetchUSN}
            required
            autoFocus
          />
          <label htmlFor="inputUSN">USN</label>
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
          <Link
            className="form-submit fs-4 px-5"
            data-mssg={usn}
            onClick={sendUSN}
            to="/signed_in/student"
          >
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

export { Login, usnData };
