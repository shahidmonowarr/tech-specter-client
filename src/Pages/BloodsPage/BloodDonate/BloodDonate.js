import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import "./BloodDonate.css";

const BloodDonate = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [user] = useAuthState(auth);
  const onSubmit = (data) => {
    // console.log(data);
    axios.post("https://tech-specter.onrender.com/blood", data).then((res) => {
      if (res.data.insertedId) {
        toast("Details Added Successfully, We will contact you soon");
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
            <strong>Blood Donor Registration</strong>
          </h5>

          {/* <!--Card content--> */}
          <div className="card-body px-lg-5 pt-0">
            {/* <!-- Form --> */}
            <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-row">
                <div className="col">
                  <div className="md-form">
                    <input
                      {...register("name")}
                      type="text"
                      value={user?.displayName}
                      className="form-control"
                    />
                    <label for="materialRegisterFormFirstName">Name</label>
                  </div>
                </div>
                <div className="col">
                  <div className="md-form">
                    <input
                      {...register("email")}
                      type="email"
                      value={user?.email}
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
                      id="formControlLg"
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "phone number is required",
                        },
                        pattern: {
                          value: /^01\d{9}$/,
                          message:
                            "Provide phone no. in this format 01xxxxxxxxx",
                        },
                      })}
                      type="number"
                      className="form-control"
                      placeholder="01xxxxxxxxx"
                    />
                    <label className="label mb-2 text-danger">
                      {errors.phone?.type === "required" && (
                        <span className="label-text-alt text-red">
                          {errors.phone.message}
                        </span>
                      )}
                      {errors.phone?.type === "pattern" && (
                        <span className="label-text-alt text-red">
                          {errors.phone.message}
                        </span>
                      )}
                    </label>
                    <label for="">Phone Number</label>
                  </div>
                </div>
                <div className="col">
                  <div className="md-form">
                    <input
                      {...register("dateOfBirth")}
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
                      required
                      {...register("lastBloodDonateDate")}
                      type="date"
                      id="materialRegisterFormDate"
                      className="form-control"
                    />
                    <label for="materialRegisterFormEmail">
                      Last Blood Donate Date
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
                Register
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
