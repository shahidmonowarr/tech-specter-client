import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner">
        <div>
          <h1 className="text-center">
          FIND YOUR <br/> SOLUTIONS HERE
          </h1>
          <div className="text-center">
            <Link to="/services">
              {" "}
              <button className="btn btn-warning text-dark">
                Explore Now
              </button>
            </Link>
          </div>{" "}
        </div>
      </div>
    );
};

export default Banner;