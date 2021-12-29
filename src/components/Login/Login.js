import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div class="container-fluid col-md-6 col-lg-4 login-form">
      <form class="form-signin">
        <h3 class="mb-2">Login</h3>
        <div class="form-label-group">
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
          />
          <label for="inputEmail">Email address</label>
        </div>

        <div class="form-label-group">
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
          />
          <label for="inputPassword">Password</label>
        </div>

        <div class="text-center">
          <a class="small" href="#">
            Forgot password?
          </a>
        </div>
        <div class="form-group btn btn-outline-secondary sign-btn">
          <a href="#" class="form-submit">
            Sign In
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
