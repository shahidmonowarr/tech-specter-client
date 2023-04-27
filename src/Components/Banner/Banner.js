import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../Shared/PageTitle/PageTitle";
import "./Banner.css";
const imageUrl = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80";
const Banner = () => {
  return ( 
    <div style={{height: "100vh", backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center"}} className="position-relative w-100"><PageTitle title="Home"></PageTitle>
    <div className="position-absolute text-white d-flex flex-column align-items-start justify-content-center" style={{top: "0", right: "0", bottom: "0", left: "0", backgroundColor: "rgba(0,0,0,.7)"}}>
      <div className="container">
        <div className="col-md-6">
          <span style={{color: "#bbb"}} className="text-uppercase">Hello There...</span>
          <h1 className="mb-4 mt-2 display-4 font-weight-bold">Find Your</h1>
          <h1 className="mb-4 mt-2 display-5 font-weight-bold"><span style={{color: "#9B5DE5"}}>Solutions Here</span></h1>
          <p  style={{color: "#bbb"}}>We are providing best solutions here</p>
          <div className="mt-5">
            <Link to="/services" className="btn px-5 py-3 text-white mt-3 mt-sm-0" style={{borderRadius: "30px", backgroundColor: "#9B5DE5"}}>Get Started</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Banner;
