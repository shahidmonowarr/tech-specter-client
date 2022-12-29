import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const BloodPatient = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    axios.post("https://tech-specter.onrender.com/patient", data).then((res) => {
      if (res.data.insertedId) {
        toast("Request Added Successfully, We will contact you soon");
        reset();
      }
      // console.log(res);
    });
  };

  return (
    <div>
      <div className="col-sm-6 col-md-6 col-lg-8 mx-auto my-5">
        {/*  Material form register */}
        <div className="card">
          <h5 className="text-uppercase card-header danger-color white-text text-center py-4">
            <strong>Patient Request Registration</strong>
          </h5>

          {/* <!--Card content--> */}
          <div className="card-body px-lg-5 pt-0">
            {/* <!-- Form --> */}
            <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-row">
                <div className="col">
                  <div className="md-form">
                    <input
                      type="text"
                      {...register("name")}
                      className="form-control"
                      value={user?.displayName}
                    />
                    <label for="materialRegisterFormFirstName">Name</label>
                  </div>
                </div>
                <div className="col">
                  <div className="md-form">
                    <input
                      type="email"
                      {...register("email")}
                      className="form-control"
                      value={user?.email}
                    />
                    <label for="materialRegisterFormLastName">Email</label>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="col">
                  <div className="md-form">
                    <input
                      {...register("phone")}
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
                      {...register("date")}
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
                      {...register("prescription")}
                      type="file"
                      name="myImage"
                      className="form-control"
                      accept="image/png, image/gif, image/jpeg"
                    />
                    <label for="materialRegisterFormEmail">
                      Add Prescription
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="md-form">
                    <select
                      {...register("bloodGroup")}
                      className="form-control"
                    >
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
                  {...register("address")}
                  type="text"
                  placeholder="Your Address"
                  id="materialRegisterFormFirstName"
                  className="form-control"
                />
                <label for="materialRegisterFormFirstName">Address</label>
              </div>
              <button
                className="btn btn-danger btn-rounded btn-block w-50 mx-auto my-4 waves-effect z-depth-0"
                type="submit"
              >
                Send Request
              </button>
            </form>
            {/* <!-- Form --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodPatient;
