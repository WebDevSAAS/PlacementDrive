import React from "react";
import "./Register.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

var responseData;

function hash(message) {
  var forge = require("node-forge");
  var md = forge.md.sha256.create();
  md.update(message.toString());
  return md.digest().toHex();
}

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "include", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

//console.log(hash("hi"));

// funct to login request, returns login status and data for success according to spec
async function login(userid, password) {
  password = hash(password); // get hash
  postData("http://localhost:8000/login", {
    usn: userid,
    password,
  }).then((data) => {
    return data;
  });
}

// funct to register, returns profile and status flags if success else error flags according to spec
async function signup(
  usn,
  fn,
  ln,
  branch,
  gender,
  dob,
  email,
  phone,
  password
) {
  password = hash(password); // get hash
  postData("http://localhost:8000/register", {
    usn,
    first_name: fn,
    last_name: ln,
    branch,
    gender,
    dob,
    email,
    phone,
    password,
  }).then((data) => {
    return data;
  });
}

// funct to check logged in state, returns profile data if logged in else not logged according to soec
async function status() {
  const status = await fetch("http://localhost:8000/status");
  return status.json();
}

// funct to logout the user, returns success always
async function logout() {
  const status = await fetch("http://localhost:8000/logout");
  return status.json();
}

const storeData = (usn, fn, ln, branch, gender, dob, mail, pno, pswd) => {
  responseData = signup(usn, fn, ln, branch, gender, dob, mail, pno, pswd);
};

const Register = () => {
  const [usn, setUsn] = useState("");
  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [branch, setBranch] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [mail, setMail] = useState("");
  const [pno, setPno] = useState("");
  const [pswd, setPswd] = useState("");
  return (
    <div
      className="container-fluid col-sm-8 col-md-6 col-lg-5 login-form p-4"
      id="registration_container"
    >
      <form className="form-signin">
        <h3 className="mb-2 fs-3 text-center">Create New Account</h3>

        <div className="form-label-group">
          <input
            type="text"
            id="usn"
            className="form-control"
            placeholder="University Serial Number (USN)"
            onInput={(e) => setUsn(e.target.value)}
            required
            autoFocus
          />
          <label htmlFor="usn">University Serial Number (USN)</label>
        </div>
        <div className="form-label-group">
          <input
            type="text"
            id="first_name"
            className="form-control"
            placeholder="First Name"
            onInput={(e) => setFn(e.target.value)}
            required
          />
          <label htmlFor="first_name">First Name</label>
        </div>
        <div className="form-label-group">
          <input
            type="text"
            id="last_name"
            className="form-control"
            placeholder="Last Name"
            onInput={(e) => setLn(e.target.value)}
          />
          <label htmlFor="last_name">Last Name</label>
        </div>

        <select class="form-select mb-3 fs-6 selectStyle" id="branch" required>
          <option selected disabled>
            Select Your Branch
          </option>
          <option value="CSE" onInput={(e) => setBranch(e.target.value)}>
            CSE - Computer Science and Engineering
          </option>
          <option value="ISE" onInput={(e) => setBranch(e.target.value)}>
            ISE - Information Science and Engineering
          </option>
          <option value="ECE" onInput={(e) => setBranch(e.target.value)}>
            ECE - Electronics and Communication Engineering
          </option>
          <option value="EEE" onInput={(e) => setBranch(e.target.value)}>
            EEE - Electrical and Electronics Engineering
          </option>
          <option value="EIE" onInput={(e) => setBranch(e.target.value)}>
            EIE - Electronics & Instrumentation Engineering
          </option>
          <option value="MECH" onInput={(e) => setBranch(e.target.value)}>
            MECH - Mechanical Engineering
          </option>
          <option value="CIVIL" onInput={(e) => setBranch(e.target.value)}>
            CIV - Civil Engineering
          </option>
          <option value="AI&ML" onInput={(e) => setBranch(e.target.value)}>
            AI&ML - Artificial intelligence & Machine Learning{" "}
          </option>
        </select>

        <select class="form-select mb-3 fs-6 selectStyle" id="gender" required>
          <option selected disabled>
            Gender
          </option>
          <option value="male" onInput={(e) => setGender(e.target.value)}>
            Male
          </option>
          <option value="Female" onInput={(e) => setGender(e.target.value)}>
            Female
          </option>
        </select>

        <div className="form-label-group">
          <input
            type="date"
            id="dob"
            className="form-control"
            placeholder="Date of Birth"
            onInput={(e) => setDob(e.target.value)}
            required
          />
          <label htmlFor="dob">Date of Birth</label>
        </div>

        <div className="form-label-group">
          <input
            type="tel"
            id="phone"
            className="form-control"
            placeholder="Phone No."
            onInput={(e) => setPno(e.target.value)}
            pattern="^[6-9]\d{9}"
            required
          />
          <label htmlFor="phone">Phone No.</label>
        </div>

        <div className="form-label-group">
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email ID"
            onInput={(e) => setMail(e.target.value)}
            required
          />
          <label htmlFor="email">Email ID</label>
        </div>

        <div className="form-label-group">
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            onInput={(e) => setPswd(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
        </div>

        <div
          className="form-group btn btn-outline-secondary sign-btn m-2"
          id="signin-btn"
        >
          <button
            onClick={() =>
              storeData(usn, fn, ln, branch, gender, dob, mail, pno, pswd)
            }
            className="form-submit fs-4 px-5"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
