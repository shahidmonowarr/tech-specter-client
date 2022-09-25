import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div  style={{ backgroundColor: "#1c2331" }}>
      <div className="container mt-3">
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#1c2331" }}
        >
          <section
            className="d-flex justify-content-between p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="https://www.facebook.com/" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.google.com/" className="text-white me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="https://www.instagram.com/" className="text-white me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/" className="text-white me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/shahidmonowarr"
                className="text-white me-4"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Company name</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: " 60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <div className="footer-logo mt-5">
                    <img src={logo} alt="footer" />
                  </div>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Services</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: " 60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <Link className="text-white" to="/allCourses">
                    <p>Courses</p>
                  </Link>
                  <Link className="text-white" to="/allPlaces">
                    <p>Travels</p>
                  </Link>
                  <Link className="text-white" to="/aboutUs">
                    <p>About Us</p>
                  </Link>
                  <Link className="text-white" to="/">
                    <p>Home</p>
                  </Link>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: " 60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <Link className="text-white" to="/dashboard">
                    <p>Dashboard</p>
                  </Link>
                  <Link className="text-white" to="/dashboard/myOrders">
                    <p>Your Orders</p>
                  </Link>
                  <Link className="text-white" to="/privacyPolicy">
                    <p>Privacy</p>
                  </Link>
                  <Link className="text-white" to="/faq">
                    <p>FAQ</p>
                  </Link>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: " 60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <i className="fas fa-home mr-3"></i> Dhaka, PT 2323, BD
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Section: Links  */}

          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright Tech Specter
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
