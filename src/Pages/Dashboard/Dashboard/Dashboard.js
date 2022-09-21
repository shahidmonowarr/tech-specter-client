import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin/useAdmin";
import "./Dashboard.css";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2 pt-2 my-auto shadow-lg">
          {/* <ul className="">
            <li className="me-3 my-2 rounded-3 btn-dark">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </li>
            <li className="me-3 my-2 rounded-3 btn-dark">
              <Link
                to="/dashboard/addReview"
                style={{ textDecoration: "none", color: "white" }}
              >
                Add Review
              </Link>
            </li>
            <li className="me-3 my-2 rounded-3 btn-dark">
              <Link
                to="/dashboard/myOrders"
                style={{ textDecoration: "none", color: "white" }}
              >
                My Orders
              </Link>
            </li>
            {admin && <li className="me-3 my-2 rounded-3 btn-dark">
              <Link
                to="/dashboard/users"
                style={{ textDecoration: "none", color: "white" }}
              >
                All Users
              </Link>
            </li>}
            {admin && <li className="me-3 my-2 rounded-3 btn-dark">
              <Link
                to="/dashboard/addCourse"
                style={{ textDecoration: "none", color: "white" }}
              >
                Add Course
              </Link>
            </li>}
            {admin && <li className="me-3 my-2 rounded-3 btn-dark">
              <Link
                to="/dashboard/manageOrders"
                style={{ textDecoration: "none", color: "white" }}
              >
                Manage Orders
              </Link>
            </li>}
          </ul> */}

          {admin ? (
            <ul>
              <li className="me-3 my-2 rounded-3 btn-dark">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Home
                </Link>
              </li>
              <li className="me-3 my-2 rounded-3 btn-dark">
                <Link
                  to="/dashboard/users"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  All Users
                </Link>
              </li>
              <li className="me-3 my-2 rounded-3 btn-dark">
                <Link
                  to="/dashboard/addCourse"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Add Course
                </Link>
              </li>
              <li className="me-3 my-2 rounded-3 btn-dark">
                <Link
                  to="/dashboard/manageOrders"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Manage Orders
                </Link>
              </li>
              <li className="me-3 my-2 rounded-3 btn-dark">
                <Link
                  to="/dashboard/allTransaction"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  All Transaction
                </Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li className="me-3 my-2 rounded-3 btn-dark">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Home
                </Link>
              </li>
              <li className="me-3 my-2 rounded-3 btn-dark">
                <Link
                  to="/dashboard/addReview"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Add Review
                </Link>
              </li>
              <li className="me-3 my-2 rounded-3 btn-dark">
                <Link
                  to="/dashboard/myOrders"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  My Orders
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="col-md-10 my-auto ">
          <h1 className="fw-bolder shadow-sm">Dashboard</h1>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
