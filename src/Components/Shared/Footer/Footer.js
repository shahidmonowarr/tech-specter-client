import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
        <div className="footer-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="left-container mt-2 text-start">
                            <h2>TECH SPECTER</h2>
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
                        <div className="right-footer-container">
                            <div className="phone d-flex align-items-center justify-content-center mt-3">
                                <div>
                                    <input className="px-5 mx-2 mt-1 mb-1" placeholder="Name" type="email" name="" id="" />
                                    <input className="px-5 mx-2" placeholder="Email" type="email" name="" id="" />
                                    <button className="px-5 my-2 btn-danger rounded-3 text-white">SUBSCRIBE NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div >
                            <ul >
                                <li className="footer-menu mx-5 rounded-3 btn-danger"><Link to='/' style={{ textDecoration: "none", color:'white' }}>Home</Link></li>
                                <li className="footer-menu mx-5 rounded-3 btn-danger"><Link to='/services' style={{ textDecoration: "none", color:'white' }}>Services</Link></li>
                                <li className="footer-menu mx-5 rounded-3 btn-danger"><Link to='/dashboard' style={{ textDecoration: "none", color:'white' }}>Dashboard</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <h6 >TECH SPECTER Ⓒ All rights reserved</h6>
            </div>
        </div>
    </div>
    );
};

export default Footer;