import React from "react";
import "./StudentDetailsForm.css";
import { Link } from "react-router-dom";

const MAX_STEPS = 10;

const StudentDetailsForm = () => {
  const [formStep, setFormStep] = React.useState(0);
  const completeFormStep = () => {
    setFormStep((cur) => cur + 1);
  };
  const goToPrevStep = () => {
    formStep === 0 ? setFormStep((cur) => cur) : setFormStep((cur) => cur - 1);
  };

  return (
    <div
      className="container-fluid col-sm-8 col-md-6 col-lg-5 login-form text-center p-4"
      id="student-details-form"
    >
      <form className="form-signin">
        {/* Form Header */}
        <h3 className="mb-3 fs-3 text-center">Student Details Form.</h3>
        <button
          id="submit-btn"
          className="form-group btn btn-outline-secondary sign-btn fs-6 px-2 m-1"
          onClick={goToPrevStep}
        >
          &#171; Step {formStep} of {MAX_STEPS}
        </button>

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
                id="father_name"
                className="form-control"
                required
              />
              <label htmlFor="father_name">Father's Name</label>
            </div>

            <button
              onClick={completeFormStep}
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
            <h4>Class 10.</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="text"
                id="class-10-grade"
                className="form-control"
                required
                autoFocus
              />
              <label htmlFor="class-10-grade">Percentage/ CGPA</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="class-10-state"
                className="form-control"
                required
              />
              <label htmlFor="class-10-state">Graduation State</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="class-10-school"
                className="form-control"
                required
              />
              <label htmlFor="class-10-school">Name of School</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="class-10-board"
                className="form-control"
                required
              />
              <label htmlFor="class-10-board">Name of Board</label>
            </div>

            <div className="form-label-group">
              <input
                type="number"
                id="class-10-year"
                className="form-control"
                required
              />
              <label htmlFor="class-10-year">Year of Passing</label>
            </div>
            <button
              onClick={completeFormStep}
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
            <h4>Class 12/ Pre-University</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="text"
                id="class-12-grade"
                className="form-control"
                required
                autoFocus
              />
              <label htmlFor="class-12-grade">Percentage/ CGPA</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="class-12-state"
                className="form-control"
                required
              />
              <label htmlFor="class-12-state">Graduation State</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="class-12-school"
                className="form-control"
                required
              />
              <label htmlFor="class-12-school">Name of School</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="class-12-board"
                className="form-control"
                required
              />
              <label htmlFor="class-12-board">Name of Board</label>
            </div>

            <div className="form-label-group">
              <input
                type="number"
                id="class-12-year"
                className="form-control"
                required
              />
              <label htmlFor="class-12-year">Year of Passing</label>
            </div>
            <button
              onClick={completeFormStep}
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
            <h4>SGPA</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="text"
                id="sgpa-sem-1"
                className="form-control"
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
                className="form-control"
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
                className="form-control"
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
                className="form-control"
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
                className="form-control"
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
                className="form-control"
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
                className="form-control"
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
                className="form-control"
                required
                autoFocus
              />
              <label htmlFor="sgpa-sem-8">
                8<sup>th</sup> &nbsp;Semester
              </label>
            </div>
            <button
              onClick={completeFormStep}
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
            <h4>CGPA</h4>
            <hr />
            <div className="form-label-group">
              <input type="text" id="cgpa" className="form-control" required />
              <label htmlFor="cgpa">Current CGPA</label>
            </div>
            <button
              onClick={completeFormStep}
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
            <h4>Contact Details</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="tel"
                id="student-mobile"
                className="form-control"
                required
                autoFocus
              />
              <label htmlFor="student-mobile">Personal Mobile No.</label>
            </div>
            <div className="form-label-group">
              <input
                type="tel"
                id="parent-mobile"
                className="form-control"
                required
              />
              <label htmlFor="parent-mobile">Parent Mobile No.</label>
            </div>
            <div className="form-label-group">
              <input
                type="student-email"
                id=""
                className="form-control"
                required
              />
              <label htmlFor="student-email">Personal Email ID</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="rnsit-email"
                className="form-control"
                required
              />
              <label htmlFor="rnsit-email">
                RNSIT Email ID [usn.name@gmail.com]
              </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="parent-email"
                className="form-control"
                required
              />
              <label htmlFor="parent-email">Parent's Email ID</label>
            </div>
            <button
              onClick={completeFormStep}
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
            <h4>Address</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="text"
                id="address-line-1"
                className="form-control"
                required
                autoFocus
              />
              <label htmlFor="address-line-1">Address Line 1</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="address-line-2"
                className="form-control"
                required
              />
              <label htmlFor="address-line-2">Address Line 2</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="address-city"
                className="form-control"
                required
              />
              <label htmlFor="address-city">City/ Town</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="address-state"
                className="form-control"
                required
              />
              <label htmlFor="address-state">State</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="address-country"
                className="form-control"
                required
              />
              <label htmlFor="address-country">Country</label>
            </div>

            <div className="form-label-group">
              <input
                type="number"
                id="address-pincode"
                className="form-control"
                required
              />
              <label htmlFor="address-pincode">Postal Code</label>
            </div>
            <button
              onClick={completeFormStep}
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
            <h4>Admission Quota</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="text"
                id="admission-quota"
                className="form-control"
                required
                autoFocus
              />
              <label htmlFor="admission-quota">COMEDK/KCET/MANAGEMENT </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="cet-rank"
                className="form-control"
                required
              />
              <label htmlFor="cet-rank">CET Rank </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="comedk-rank"
                className="form-control"
                required
              />
              <label htmlFor="comedk-rank">COMEDK Rank </label>
            </div>

            <h4>Backlogs and Year Gap</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="text"
                id="no-of-backlog"
                className="form-control"
                required
              />
              <label htmlFor="no-of-backlog">No. of backlogs </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="year-gap-10-to-12"
                className="form-control"
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
                className="form-control"
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
                className="form-control"
                required
              />
              <label htmlFor="year-gap-during-be">
                Year gap during B.E. (till current semester){" "}
              </label>
            </div>
            <button
              onClick={completeFormStep}
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
            <h4>Bank Details</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="text"
                id="acct-no"
                className="form-control"
                required
                autoFocus
              />
              <label htmlFor="acct-no">Account No.</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="bank-name"
                className="form-control"
                required
              />
              <label htmlFor="bank-name">Bank Name </label>
            </div>

            <h4>Further Details</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="text"
                id="passport-no"
                className="form-control"
                required
              />
              <label htmlFor="passport-no">Passport No. </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="aadhar-no"
                className="form-control"
                required
              />
              <label htmlFor="aadhar-no">Aadhar No. </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="pan-no"
                className="form-control"
                required
              />
              <label htmlFor="pan-no">PAN No. </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="driving-license-no"
                className="form-control"
                required
              />
              <label htmlFor="driving-license-no">Driving License No. </label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="voter-no"
                className="form-control"
                required
              />
              <label htmlFor="voter-no">Voter ID </label>
            </div>
            <button
              onClick={completeFormStep}
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
            <h4>Citizenship</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="text"
                id="citizenship"
                className="form-control"
                required
                autoFocus
              />
              <label htmlFor="citizenship">Citizenship</label>
            </div>
            <h4>Social Handles</h4>
            <hr />
            <div className="form-label-group">
              <input
                type="text"
                id="skype-id"
                className="form-control"
                required
              />
              <label htmlFor="skype-id">Skype URL</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="github-id"
                className="form-control"
                required
              />
              <label htmlFor="github-id">GitHub URL</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="linkedin-id"
                className="form-control"
                required
              />
              <label htmlFor="linked-id">LinkedIn URL</label>
            </div>
            <button
              onClick={completeFormStep}
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
            <h4>Certificates/ Achievements from recognized body</h4>
            <hr />
            <textarea
              id="student-achievement"
              className="form-control"
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
                to="/signed_in/student/details_submitted"
                className="form-submit fs-4 px-5"
              >
                Submit
              </Link>
            </div>
          </section>
        )}
      </form>
    </div>
  );
};

export default StudentDetailsForm;
