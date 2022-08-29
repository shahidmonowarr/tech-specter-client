import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
        <div className="footer-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="left-container text-start">
                            <h1>Management</h1>
                            <div className="icons-container d-flex text-center">
                                <div className="icon">
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
                        <div className="right-footer-container">
                            <div className="phone d-flex align-items-center justify-content-center mt-3">
                                <div>
                                    <input className="px-5 mx-2 mb-1" placeholder="Name" type="email" name="" id="" />
                                    <input className="px-5 mx-2" placeholder="Email" type="email" name="" id="" />
                                    <button className="px-5 my-2 bg-success rounded-3 text-white">SUBSCRIBE NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div >
                            <ul >
                                <li className="footer-menu">Home</li>
                                <li className="footer-menu">Services</li>
                                <li className="footer-menu">Dashboard</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <h6 >Ⓒ All rights reserved</h6>
            </div>
        </div>
    </div>
    );
};

export default Footer;