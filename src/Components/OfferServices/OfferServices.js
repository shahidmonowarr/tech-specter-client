import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import service1 from '../../images/blood-concept.jpg';
import service2 from '../../images/travel-concept.jpg';
import ib1 from '../../images/blood-analysis.png';
import ib2 from '../../images/blood-transfusion.png';
import ib3 from '../../images/blood-bag.png';
import it1 from '../../images/calendar.png';
import it2 from '../../images/pickup.png';
import it3 from '../../images/tool.png';
import './OfferServices.css';

const OfferServices = () => {
    return (
        <div>
            <h1 className='mt-5'>Services we provide</h1>
            {/* Blood section  */}

          <div className='py-5'>
            <Container >
                <Row spacing={10}>
                    <Col sm={12} md={5} lg={5}>
                        <div className="drone-wrapper">
                            <div className="drone-media">
                                <img src={service1} alt="" />
                            </div>
                            <div className="drone-info">
                                <span>BLOOD</span>
                                <strong>For Human</strong>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={7} lg={7}>
                        <div className='text-start'>
                            <div sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <div className="dash" ></div>
                                <h5   color="#D72323" >About</h5>

                            </div>
                            <h1 variant="h3" color="initial" sx={{ fontWeight: 500, mt: 1, mb: 3 }}>Specializing in Drone Services
                                <br />    and Aerial Photography</h1>
                            <p  sx={{ width: { xs: 1, sm: '80%' } }}>There are many variations of passages of drone size available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.
                                Let you shine on darkness and follow your path where ever you go. It comes with GPS tracker and motion sensor so that you don't get lose.
                            </p>
                            <div className='spec mb-2'>
                                <img width="45px" src={ib1} alt="" />
                                <h5 className='ps-2'>Blood Analysis</h5>
                            </div>
                            <div className='spec mb-3'>
                                <img width="45px" src={ib2} alt="" />
                                <h5 className='ps-2'>Blood Transfusion</h5>
                            </div>
                            <div className='spec mb-3'>
                                <img width="45px" src={ib3} alt="" />
                                <h5 className='ps-2'>Blood Bag</h5>
                            </div>
                            <div className='mt-2'>
                                <Button className='px-5 offer-button'>Read More</Button>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>

        </div> 

        {/* Travel Section   */}
          <div className='py-5'>
            <Container >
                <Row spacing={10}>
                    <Col sm={12} md={5} lg={5}>
                        <div className="drone-wrapper">
                            <div className="drone-media">
                                <img src={service2} alt="" />
                            </div>
                            <div className="drone-info">
                                <span>Travel</span>
                                <strong>For Refresh</strong>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={7} lg={7}>
                        <div className='text-start'>
                            <div sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <div className="dash" ></div>
                                <h5   color="#D72323" >About</h5>

                            </div>
                            <h1 variant="h3" color="initial" sx={{ fontWeight: 500, mt: 1, mb: 3 }}>Specializing in Drone Services
                                <br />    and Aerial Photography</h1>
                            <p  sx={{ width: { xs: 1, sm: '80%' } }}>There are many variations of passages of drone size available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.
                                Let you shine on darkness and follow your path where ever you go. It comes with GPS tracker and motion sensor so that you don't get lose.
                            </p>
                            <div className='spec mb-2'>
                                <img width="45px" src={it1} alt="" />
                                <h5 className='ps-2'>Date Analysis</h5>
                            </div>
                            <div className='spec mb-3'>
                                <img width="45px" src={it2} alt="" />
                                <h5 className='ps-2'>Pickup Transportation</h5>
                            </div>
                            <div className='spec mb-3'>
                                <img width="45px" src={it3} alt="" />
                                <h5 className='ps-2'>Tent Benefit</h5>
                            </div>
                            <div className='mt-2'>
                                <Button className='px-5 offer-button'>Read More</Button>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div> 
        </div>
    );
};

export default OfferServices;