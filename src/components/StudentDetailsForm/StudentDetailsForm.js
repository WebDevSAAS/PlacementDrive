import React, { useState } from "react";
import "./StudentDetailsForm.css";
import { Link } from "react-router-dom";
import DataService from "../../Services/service";
import { usnData } from "../Login/Login";

const MAX_STEPS = 10;

const initialValues = {
  father_name: null,
  mother_name: null,
  cgpa_10th: null,
  g_state_10th: null,
  school_10th: null,
  board_10th: null,
  year_10th: null,
  cgpa_12th: null,
  g_state_12th: null,
  school_12th: null,
  board_12th: null,
  year_12th: null,
  result_sem1: null,
  result_sem2: null,
  result_sem3: null,
  result_sem4: null,
  result_sem5: null,
  result_sem6: null,
  result_sem7: null,
  result_sem8: null,
  cgpa_total: null,
  percentage_total: null,
  parents_mobile: null,
  parents_email: null,
  street: null,
  address_line2: null,
  city: null,
  state: null,
  country: null,
  postal_code: null,
  admission_quota: null,
  cet_rank: null,
  comedk_rank: null,
  backlogs: null,
  edu_gap_10_12: null,
  edu_gap_12_grad: null,
  edu_gap_grad_sem: null,
  citizenship: null,
  bank_acc: null,
  bank_name: null,
  passport_no: null,
  aadhar_no: null,
  pan_no: null,
  skypeid: null,
  githubid: null,
  linkedinid: null,
  driving_license: null,
  voterid_no: null,
  awards: null,
};

export default function StudentDetailsForm() {
  // let dataFilled;
  // async function DataLoad() {
  //   const DataRegistered = await DataService.get(usnData);
  //   dataFilled = DataRegistered.data[0];
  //   console.log(dataFilled);
  // }
  // DataLoad();
  // console.log(dataFilled);

  const [formStep, setFormStep] = useState(0);

  function completeFormStep() {
    formStep === 10 ? setFormStep((cur) => cur) : setFormStep((cur) => cur + 1);
  }
  function goToPrevStep() {
    formStep === 0 ? setFormStep((cur) => cur) : setFormStep((cur) => cur - 1);
  }

  const [values, setValues] = useState(initialValues);

  const updateData = () => {
    console.log(values);
    DataService.update(usnData, values);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value !== "") {
      setValues({
        ...values,
        [name]: value,
      });
    } else {
      setValues({
        ...values,
        [name]: null,
      });
    }

    console.log(name, value, values);
  };

  return (
    <div
      className="container-fluid col-sm-8 col-md-6 col-lg-5 login-form p-4"
      id="student-details-form"
    >
      <form className="form-signin">
        {/* Form Header */}
        <h3 className="mb-3 fs-3 text-center">Student Details Form.</h3>
        <div className="text-center">
          <div className="form-group btn btn-outline-secondary sign-btn fs-6 px-2 m-1">
            <button
              id="submit-btn"
              className="form-group btn btn-outline-secondary sign-btn fs-6 px-2 m-1"
              onClick={goToPrevStep}
            >
              &#171;
            </button>
            Step {formStep} of {MAX_STEPS}
            <button
              id="submit-btn"
              className="form-group btn btn-outline-secondary sign-btn fs-6 px-2 m-1"
              onClick={completeFormStep}
            >
              &#187;
            </button>
          </div>
        </div>

        {formStep === 0 && (
          <section>
            <br />
            <div className="form-label-group">
              <input
                type="text"
                id="usn"
                className="form-control"
                required
                autoFocus
              />
              <label htmlFor="usn">University Serial Number (USN)</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="full_name"
                className="form-control"
                required
              />
              <label htmlFor="full_name">Full Name</label>
            </div>

            <select
              class="form-select mb-3 fs-6 selectStyle"
              id="branch"
              required
            >
              <option selected disabled>
                Select Your Branch
              </option>
              <option value="CSE">
                CSE - Computer Science and Engineering
              </option>
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

            <div className="form-label-group">
              <input
                type="text"
                id="first_name"
                className="form-control"
                required
              />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="middle_name"
                className="form-control"
                required
              />
              <label htmlFor="middle_name">Middle Name</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="last_name"
                className="form-control"
                required
              />
              <label htmlFor="last_name">Last Name</label>
            </div>

            <select
              class="form-select mb-3 fs-6 selectStyle"
              id="gender"
              required
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
                required
              />
              <label htmlFor="dob">Date of Birth</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                value={values.father_name}
                id="father_name"
                name="father_name"
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="father_name">Father's Name</label>
            </div>

            <button
              onClick={updateData}
              type="button"
              className="form-group btn btn-outline-secondary sign-btn fs-4 px-5 m-2"
              id="submit-btn"
            >
              Next Step
            </button>
          </section>
        )}

        {formStep === 1 && (
          <section>
            <h4 className="text-center">Class 10</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="text"
                id="class-10-grade"
                name="cgpa_10th"
                value={values.cgpa_10th}
                className="form-control"
                onChange={handleInputChange}
                required
                autoFocus
              />
              <label htmlFor="class-10-grade">Percentage/ CGPA</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="class-10-state"
                name="g_state_10th"
                value={values.g_state_10th}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="class-10-state">Graduation State</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="class-10-school"
                name="school_10th"
                value={values.school_10th}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="class-10-school">Name of School</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="class-10-board"
                name="board_10th"
                value={values.board_10th}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="class-10-board">Name of Board</label>
            </div>

            <div className="form-label-group">
              <input
                type="date"
                id="class-10-year"
                name="year_10th"
                value={values.year_10th}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="class-10-year">Year of Passing</label>
            </div>
            <button
              onClick={updateData}
              type="button"
              className="form-group btn btn-outline-secondary sign-btn fs-4 px-5 m-2"
              id="submit-btn"
            >
              Next Step
            </button>
          </section>
        )}

        {formStep === 2 && (
          <section>
            <h4 className="text-center">Class 12/ Pre-University</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="text"
                id="class-12-grade"
                name="cgpa_12th"
                value={values.cgpa_12th}
                className="form-control"
                onChange={handleInputChange}
                required
                autoFocus
              />
              <label htmlFor="class-12-grade">Percentage/ CGPA</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="class-12-state"
                name="g_state_12th"
                value={values.g_state_12th}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="class-12-state">Graduation State</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="class-12-school"
                name="school_12th"
                value={values.school_12th}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="class-12-school">Name of School</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="class-12-board"
                name="board_12th"
                value={values.board_12th}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="class-12-board">Name of Board</label>
            </div>

            <div className="form-label-group">
              <input
                type="date"
                id="class-12-year"
                name="year_12th"
                value={values.year_12th}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="class-12-year">Year of Passing</label>
            </div>
            <button
              onClick={updateData}
              type="button"
              className="form-group btn btn-outline-secondary sign-btn fs-4 px-5 m-2"
              id="submit-btn"
            >
              Next Step
            </button>
          </section>
        )}

        {formStep === 3 && (
          <section>
            <h4 className="text-center">SGPA</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="text"
                id="sgpa-sem-1"
                className="form-control"
                name="result_sem1"
                value={values.result_sem1}
                onChange={handleInputChange}
                required
                autoFocus
              />
              <label htmlFor="sgpa-sem-1">
                1<sup>st</sup> &nbsp;Semester
              </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="sgpa-sem-2"
                name="result_sem2"
                value={values.result_sem2}
                className="form-control"
                onChange={handleInputChange}
                required
                autoFocus
              />
              <label htmlFor="sgpa-sem-2">
                2<sup>nd</sup> &nbsp;Semester
              </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="sgpa-sem-3"
                name="result_sem3"
                value={values.result_sem3}
                className="form-control"
                onChange={handleInputChange}
                required
                autoFocus
              />
              <label htmlFor="sgpa-sem-3">
                3<sup>rd</sup> &nbsp;Semester
              </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="sgpa-sem-4"
                name="result_sem4"
                value={values.result_sem4}
                className="form-control"
                onChange={handleInputChange}
                required
                autoFocus
              />
              <label htmlFor="sgpa-sem-4">
                4<sup>th</sup> &nbsp;Semester
              </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="sgpa-sem-5"
                name="result_sem5"
                value={values.result_sem5}
                className="form-control"
                onChange={handleInputChange}
                required
                autoFocus
              />
              <label htmlFor="sgpa-sem-5">
                5<sup>th</sup> &nbsp;Semester
              </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="sgpa-sem-6"
                name="result_sem6"
                value={values.result_sem6}
                className="form-control"
                onChange={handleInputChange}
                required
                autoFocus
              />
              <label htmlFor="sgpa-sem-6">
                6<sup>th</sup> &nbsp;Semester
              </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="sgpa-sem-7"
                name="result_sem7"
                value={values.result_sem7}
                className="form-control"
                onChange={handleInputChange}
                required
                autoFocus
              />
              <label htmlFor="sgpa-sem-7">
                7<sup>th</sup> &nbsp;Semester
              </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="sgpa-sem-8"
                name="result_sem8"
                value={values.result_sem8}
                className="form-control"
                onChange={handleInputChange}
                required
                autoFocus
              />
              <label htmlFor="sgpa-sem-8">
                8<sup>th</sup> &nbsp;Semester
              </label>
            </div>
            <button
              onClick={updateData}
              type="button"
              className="form-group btn btn-outline-secondary sign-btn fs-4 px-5 m-2"
              id="submit-btn"
            >
              Next Step
            </button>
          </section>
        )}

        {formStep === 4 && (
          <section>
            <br />
            <h4 className="text-center">CGPA</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="text"
                id="cgpa"
                name="cgpa_total"
                value={values.cgpa_total}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="cgpa">Current CGPA</label>
            </div>
            <button
              onClick={updateData}
              type="button"
              className="form-group btn btn-outline-secondary sign-btn fs-4 px-5 m-2"
              id="submit-btn"
            >
              Next Step
            </button>
          </section>
        )}

        {formStep === 5 && (
          <section>
            <h4 className="text-center">Contact Details</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="tel"
                id="student-mobile"
                name="parents_mobile"
                value={values.parents_mobile}
                className="form-control"
                onChange={handleInputChange}
                required
                autoFocus
              />
              <label htmlFor="student-mobile">Personal Mobile No.</label>
            </div>
            <div className="form-label-group">
              <input
                type="tel"
                id="parent-mobile"
                name="parents_mobile"
                value={values.parents_mobile}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="parent-mobile">Parent Mobile No.</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="rnsit-email"
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="rnsit-email">
                RNSIT Email ID [usn.name@gmail.com]
              </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="parent_email"
                name="parents_email"
                value={values.parents_email}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="parent-email">Parent's Email ID</label>
            </div>
            <button
              onClick={updateData}
              type="button"
              className="form-group btn btn-outline-secondary sign-btn fs-4 px-5 m-2"
              id="submit-btn"
            >
              Next Step
            </button>
          </section>
        )}

        {formStep === 6 && (
          <section>
            <h4 className="text-center">Address</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="text"
                id="address-line-1"
                name="street"
                value={values.street}
                className="form-control"
                onChange={handleInputChange}
                required
                autoFocus
              />
              <label htmlFor="address-line-1">Address Line 1</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="address_line2"
                name="address_line2"
                value={values.address_line2}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="address-line-2">Address Line 2</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="address-city"
                name="city"
                value={values.city}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="address-city">City/ Town</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="address-state"
                name="state"
                value={values.state}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="address-state">State</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="address-country"
                name="country"
                value={values.country}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="address-country">Country</label>
            </div>

            <div className="form-label-group">
              <input
                type="number"
                id="address-pincode"
                name="postal_code"
                value={values.postal_code}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="address-pincode">Postal Code</label>
            </div>
            <button
              onClick={updateData}
              type="button"
              className="form-group btn btn-outline-secondary sign-btn fs-4 px-5 m-2"
              id="submit-btn"
            >
              Next Step
            </button>
          </section>
        )}

        {formStep === 7 && (
          <section>
            <h4 className="text-center">Admission Quota</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="text"
                id="admission-quota"
                name="admission_quota"
                value={values.admission_quota}
                className="form-control"
                onChange={handleInputChange}
                required
                autoFocus
              />
              <label htmlFor="admission-quota">COMEDK/KCET/MANAGEMENT </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="cet-rank"
                name="cet_rank"
                value={values.cet_rank}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="cet-rank">CET Rank </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="comedk-rank"
                name="comedk_rank"
                value={values.comedk_rank}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="comedk-rank">COMEDK Rank </label>
            </div>

            <h4 className="text-center">Backlogs and Year Gap</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="text"
                id="no-of-backlog"
                name="backlogs"
                value={values.backlogs}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="no-of-backlog">No. of backlogs </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="year-gap-10-to-12"
                name="edu_gap_10_12"
                value={values.edu_gap_10_12}
                className="form-control"
                onChange={handleInputChange}
                required
                autoFocus
              />
              <label htmlFor="year-gap-10-to-12">
                Year gap between 10th and 12th{" "}
              </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="year-gap-12-to-be"
                name="edu_gap_12_grad"
                value={values.edu_gap_12_grad}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="year-gap-12-to-be">
                Year gap between 12th and B.E.{" "}
              </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="year-gap-during-be"
                name="edu_gap_grad_sem"
                value={values.edu_gap_grad_sem}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="year-gap-during-be">
                Year gap during B.E. (till current semester){" "}
              </label>
            </div>
            <button
              onClick={updateData}
              type="button"
              className="form-group btn btn-outline-secondary sign-btn fs-4 px-5 m-2"
              id="submit-btn"
            >
              Next Step
            </button>
          </section>
        )}
        {formStep === 8 && (
          <section>
            <h4 className="text-center">Bank Details</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="text"
                id="acct-no"
                name="bank_acc"
                value={values.bank_acc}
                className="form-control"
                onChange={handleInputChange}
                required
                autoFocus
              />
              <label htmlFor="acct-no">Account No.</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="bank-name"
                name="bank_name"
                value={values.bank_name}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="bank-name">Bank Name </label>
            </div>

            <h4 className="text-center">Further Details</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="text"
                id="passport-no"
                name="passport_no"
                value={values.passport_no}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="passport-no">Passport No. </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="aadhar-no"
                name="aadhar_no"
                value={values.aadhar_no}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="aadhar-no">Aadhar No. </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="pan-no"
                name="pan_no"
                value={values.pan_no}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="pan-no">PAN No. </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="driving-license-no"
                name="driving_license"
                value={values.driving_license}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="driving-license-no">Driving License No. </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="voter-no"
                name="voterid_no"
                value={values.voterid_no}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="voter-no">Voter ID </label>
            </div>
            <button
              onClick={updateData}
              type="button"
              className="form-group btn btn-outline-secondary sign-btn fs-4 px-5 m-2"
              id="submit-btn"
            >
              Next Step
            </button>
          </section>
        )}

        {formStep === 9 && (
          <section>
            <h4 className="text-center">Citizenship</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="text"
                id="citizenship"
                name="citizenship"
                value={values.citizenship}
                className="form-control"
                onChange={handleInputChange}
                required
                autoFocus
              />
              <label htmlFor="citizenship">Citizenship</label>
            </div>
            <h4 className="text-center">Social Media Handles</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="text"
                id="skype-id"
                name="skypeid"
                value={values.skypeid}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="skype-id">Skype URL</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="github-id"
                name="githubid"
                value={values.githubid}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="github-id">GitHub URL</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="linkedin-id"
                name="linkedinid"
                value={values.linkedinid}
                className="form-control"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="linked-id">LinkedIn URL</label>
            </div>
            <button
              onClick={updateData}
              type="button"
              className="form-group btn btn-outline-secondary sign-btn fs-4 px-5 m-2"
              id="submit-btn"
            >
              Next Step
            </button>
          </section>
        )}

        {formStep === 10 && (
          <section>
            <br />
            <h4 className="text-center">
              Certificates/ Achievements from recognized body
            </h4>
            <hr />
            <textarea
              id="student-achievement"
              className="form-control"
              name="awards"
              value={values.awards}
              onChange={handleInputChange}
              cols="20"
              rows="5"
            ></textarea>

            <br />
            <br />
            <div className="">
              <input
                type="checkbox"
                id="acct-no"
                className=""
                required
                autoFocus
              />
              <span>
                &nbsp;I agree the above informations are correct to my
                knowledge.
              </span>
            </div>
            <br />
            <div
              className="form-group btn btn-outline-secondary sign-btn m-2"
              id="signin-btn"
            >
              <Link
                to="/home"
                className="form-submit fs-4 px-5"
                onClick={updateData}
              >
                Submit
              </Link>
            </div>
          </section>
        )}
      </form>
    </div>
  );
}
