import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import PageTitle from "../../../Components/Shared/PageTitle/PageTitle";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin/useAdmin";
import "./Dashboard.css";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="container">
      <PageTitle title="Dashboard"></PageTitle>
      <div className="row">
        <div className="col-md-2 pt-2 my-auto shadow-lg">
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
                  to="/dashboard/addPlace"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Add Place
                </Link>
              </li>
              <li className="me-3 my-2 rounded-3 btn-dark">
                <Link
                  to="/dashboard/addBlog"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Add Blog
                </Link>
              </li>
              <li className="me-3 my-2 rounded-3 btn-dark">
                <Link
                  to="/dashboard/manageCourses"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Manage Courses
                </Link>
              </li>
              <li className="me-3 my-2 rounded-3 btn-dark">
                <Link
                  to="/dashboard/managePlaces"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Manage Places
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
