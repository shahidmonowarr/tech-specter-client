import React, { useState } from "react";
import 'react-phone-number-input/style.css';
import "./BloodDonate.css";

const BloodDonate = () => {
    const [value, setValue] = useState()
  return (
    <div>
      <div className="col-sm-6 col-md-6 col-lg-8 mx-auto">
        {/*  Material form register */}
        <div className="card">
          <h5 className="text-uppercase card-header danger-color white-text text-center py-4">
            <strong>Blood Donor Registration</strong>
          </h5>

          {/* <!--Card content--> */}
          <div className="card-body px-lg-5 pt-0">
            {/* <!-- Form --> */}
            <form className="text-center" action="#!">
              <div className="form-row">
                <div className="col">
                  <div className="md-form">
                    <input
                      type="text"
                      id="materialRegisterFormFirstName"
                      className="form-control"
                    />
                    <label for="materialRegisterFormFirstName">
                      Name
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="md-form">
                    <input
                      type="email"
                      id="materialRegisterFormLastName"
                      className="form-control"
                    />
                    <label for="materialRegisterFormLastName">Email</label>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="col">
                  <div className="md-form">
                    <input
                    type="number"
                      className="form-control"
                      placeholder="Your Number"
                    />
                    <label for="materialRegisterFormEmail">Phone Number</label>
                  </div>
                </div>
                <div className="col">
                  <div className="md-form">
                  <input
                      type="date"
                      id="materialRegisterFormDate"
                      className="form-control"
                    />
                    <label for="materialRegisterFormPhone">Date Of Birth</label>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="col">
                  <div className="md-form">
                    <input
                      type="date"
                      id="materialRegisterFormDate"
                      className="form-control"
                    />
                    <label for="materialRegisterFormEmail">Last Blood Donate Date</label>
                  </div>
                </div>
                <div className="col">
                  <div className="md-form">
                    <select className="form-control">
                      <option selected disabled>
                        Select Blood Type:
                      </option>
                      <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                      <option>O+</option>
                      <option>O-</option>
                    </select>
                    <label for="materialRegisterFormPhone">Blood Group</label>
                  </div>
                </div>
              </div>

              <div className="md-form">
                    <input
                      type="text"
                      placeholder="Your Address"
                      id="materialRegisterFormFirstName"
                      className="form-control"
                    />
                    <label for="materialRegisterFormFirstName">
                      Address
                    </label>
                  </div>
              <button
                className="btn btn-danger btn-rounded btn-block w-50 mx-auto my-4 waves-effect z-depth-0"
                type="submit"
              >
                GET APPOINTMENT
              </button>
            </form>
            {/* <!-- Form --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodDonate;
