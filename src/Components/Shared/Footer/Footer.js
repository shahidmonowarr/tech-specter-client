import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-4">
              <div className="left-container mt-2 text-start">
                <div className="footer-logo">
                  <img src={logo} alt="footer" />
                </div>
                <div className="icons-container d-flex text-center">
                  <div className="icon ms-3">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="">
                <div className="mt-3">
                  <div>
                    <input
                      className=" mt-1 mb-1 rounded-3"
                      placeholder="Name"
                      type="email"
                      name=""
                      id=""
                    />
                    <br />
                    <input
                      className=" mx-2 rounded-3"
                      placeholder="Email"
                      type="email"
                      name=""
                      id=""
                    />
                    <br />
                    <button className=" my-2 btn-danger rounded-3 text-white">
                      SUBSCRIBE NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div >
                <ul className="mx-5">
                  <li className="footer-menu mx-3 rounded-3 btn-danger">
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="footer-menu mx-3 rounded-3 btn-danger">
                    <Link
                      to="/services"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Services
                    </Link>
                  </li>
                  <li className="footer-menu mx-3 rounded-3 btn-danger">
                    <Link
                      to="/dashboard"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr></hr>
          <h6>TECH SPECTER Ⓒ All rights reserved</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
