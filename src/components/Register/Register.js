import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container-fluid col-sm-8 col-md-6 col-lg-5 login-form p-4" id="registration_container">
      <form className="form-signin">
        <h3 className="mb-2 fs-3">
          Create New Account
        </h3>

        <div className="form-label-group px-3">
          <input
            type="text"
            id="usn"
            className="form-control"
            placeholder="University Serial Number (USN)"
            required
            autoFocus
          />
          <label htmlFor="usn">University Serial Number (USN)</label>
        </div>
        <div className="form-label-group px-3">
          <input
            type="text"
            id="first_name"
            className="form-control"
            placeholder="First Name"
            required
          />
          <label htmlFor="first_name">First Name</label>
        </div>
        <div className="form-label-group px-3">
          <input
            type="text"
            id="last_name"
            className="form-control"
            placeholder="Last Name"
          />
          <label htmlFor="last_name">Last Name</label>
        </div>

        <select class="form-select-lg mb-3 fs-6 mx-3" id="branch" required>
          <option selected disabled>
            Select Your Branch
          </option>
          <option value="CSE">CSE - Computer Science and Engineering</option>
          <option value="ISE">ISE - Information Science and Engineering</option>
          <option value="ECE">
            ECE - Electronics and Communication Engineering
          </option>
          <option value="EEE">
            EEE - Electrical and Electronics Engineering
          </option>
          <option value="EIE">
            EIE - Electronics & Instrumentation Engineering
          </option>
          <option value="MECH">MECH - Mechanical Engineering</option>
          <option value="CIVIL">CIV - Civil Engineering</option>
          <option value="AI&ML">
            AI&ML - Artificial intelligence & Machine Learning{" "}
          </option>
        </select>
              
        
        <select class="form-select-sm py-2 mb-3 fs-6 mx-3" id="gender" required>
          <option selected disabled>
            Gender
          </option>
          <option value="male">
          Male
          </option>
          <option value="Female">
          Female
          </option>
        </select>
        
        <div className="form-label-group px-3">
          <input
            type="date"
            id="dob"
            className="form-control"
            placeholder="Date of Birth"
            required
          />
          <label htmlFor="dob">Date of Birth</label>
        </div>
        
        <div className="form-label-group px-3">
          <input
            type="tel"
            id="phone"
            className="form-control"
            placeholder="Phone No."
            pattern="^[6-9]\d{9}"
            required
          />
          <label htmlFor="phone">Phone No.</label>
        </div>


        <div className="form-label-group px-3">
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email ID"
            required
            
          />
          <label htmlFor="email">Email ID</label>
        </div>



        <div className="form-label-group px-3">
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            required
          />
          <label htmlFor="password">Password</label>
        </div>

        <div
          className="form-group btn btn-outline-secondary sign-btn m-2"
          id="signin-btn"
        >
          <Link to="/registration_details" className="form-submit fs-4 px-5">
            Submit
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
