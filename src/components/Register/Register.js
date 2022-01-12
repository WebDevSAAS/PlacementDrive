import React, { Component } from "react";
import "./Register.css";
import { NavLink } from "react-router-dom";
import DataService from "../../Services/service";

// var responseData;

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

// const storeData = (usn, fn, ln, branch, gender, dob, mail, pno, pswd) => {
//   responseData = signup(usn, fn, ln, branch, gender, dob, mail, pno, pswd);
// };

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsn = this.onChangeUsn.bind(this);
    this.onChangeFnm = this.onChangeFnm.bind(this);
    this.onChangeLnm = this.onChangeLnm.bind(this);
    this.onChangeBranch = this.onChangeBranch.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeDob = this.onChangeDob.bind(this);
    this.onChangeMail = this.onChangeMail.bind(this);
    this.onChangePno = this.onChangePno.bind(this);
    this.onChangePswd = this.onChangePswd.bind(this);
    this.saveData = this.saveData.bind(this);

    this.state = {
      usn: null,
      first_name: "",
      last_name: "",
      branch: "",
      gender: "",
      dob: "",
      email: "",
      phone: "",
      password: "",
    };
  }

  onChangeUsn(e) {
    this.setState({
      usn: e.target.value,
    });
  }
  onChangeFnm(e) {
    this.setState({
      first_name: e.target.value,
    });
  }
  onChangeLnm(e) {
    this.setState({
      last_name: e.target.value,
    });
  }
  onChangeBranch(e) {
    this.setState({
      branch: e.target.value,
    });
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value,
    });
  }
  onChangeDob(e) {
    this.setState({
      dob: e.target.value,
    });
  }
  onChangeMail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePno(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onChangePswd(e) {
    this.setState({
      password: e.target.value,
    });
  }

  // funct to register, returns profile and status flags if success else error flags according to spec
  saveData() {
    var data = {
      usn: this.state.usn,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      branch: this.state.branch,
      gender: this.state.gender,
      dob: this.state.dob,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
    };
    console.log(data);
    DataService.creates(data)
      .then((response) => {
        this.setState({
          usn: response.data.usn,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          branch: response.data.branch,
          gender: response.data.gender,
          dob: response.data.dob,
          email: response.data.email,
          phone: response.data.phone,
          password: response.data.password,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <div
        className="container-fluid col-sm-8 col-md-6 col-lg-5 p-4"
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
              onChange={this.onChangeUsn}
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
              onChange={this.onChangeFnm}
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
              onChange={this.onChangeLnm}
            />
            <label htmlFor="last_name">Last Name</label>
          </div>

          <select
            class="form-select mb-3 fs-6 selectStyle"
            id="branch"
            required
            onChange={this.onChangeBranch}
          >
            <option selected disabled>
              Select Your Branch
            </option>
            <option value="CSE">CSE - Computer Science and Engineering</option>
            <option value="ISE">
              ISE - Information Science and Engineering
            </option>
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
              AI&ML - Artificial intelligence & Machine Learning
            </option>
          </select>

          <select
            class="form-select mb-3 fs-6 selectStyle"
            id="gender"
            required
            onChange={this.onChangeGender}
          >
            <option value="Select" selected disabled>
              Gender
            </option>
            <option value="male">Male</option>
            <option value="Female">Female</option>
          </select>

          <div className="form-label-group">
            <input
              type="date"
              id="dob"
              className="form-control"
              placeholder="Date of Birth"
              onChange={this.onChangeDob}
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
              onChange={this.onChangePno}
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
              onChange={this.onChangeMail}
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
              onChange={this.onChangePswd}
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          <div
            className="form-group btn btn-outline-secondary sign-btn m-2"
            id="signin-btn"
          >
            <button className="form-submit fs-4 px-5" onClick={this.saveData}>
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}
