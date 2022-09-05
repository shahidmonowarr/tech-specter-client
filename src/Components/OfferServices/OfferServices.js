import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import service2 from '../../images/travel-concept.jpg';
import service3 from '../../images/delivery-concept.jpg';
import ib1 from '../../images/blood-analysis.png';
import ib2 from '../../images/blood-transfusion.png';
import ib3 from '../../images/blood-bag.png';
import it1 from '../../images/calendar.png';
import it2 from '../../images/pickup.png';
import it3 from '../../images/tool.png';
import './OfferServices.css';
import { Link } from 'react-router-dom';

const OfferServices = () => {
    return (
        <div>
            <h1 className='mt-5'>Services we provide</h1>
        
        {/* Blood section 
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
                            <h1 variant="h3" color="initial" sx={{ fontWeight: 500, mt: 1, mb: 3 }}>Encourage your friends and family to become 
                                <br />    Regular blood donors</h1>
                            <p  sx={{ width: { xs: 1, sm: '80%' } }}>Volunteer with the blood service to reach out to members of your community, provide care to donors, and help manage blood donation sessions/drives. Find out your blood type and register as a blood donor
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
                                <Button className='px-5 offer-button'><a target="_blank" href='https://medipharma-health-care.web.app/'>Read More</a></Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>  */}

        {/* Courses section  */}
        <div className='py-5'>
            <Container >
                <Row spacing={10}>
                    <Col sm={12} md={5} lg={5}>
                        <div className="drone-wrapper">
                            <div className="drone-media">
                                <img src="https://i.ibb.co/YL1ZwG1/happy-entrepreneur-analyzing-business-chart-during-web-conference-home.jpg" alt="" />
                            </div>
                            <div className="drone-info">
                                <span>Courses</span>
                                <strong>For Programmers</strong>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={7} lg={7}>
                        <div className='text-start'>
                            <div sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <div className="dash" ></div>
                                <h5   color="#D72323" >About</h5>

                            </div>
                            <h1 variant="h3" color="initial" sx={{ fontWeight: 500, mt: 1, mb: 3 }}>Develop your career with amazing resources 
                                <br />    Grab your best courses</h1>
                            <p  sx={{ width: { xs: 1, sm: '80%' } }}>Volunteer with the blood service to reach out to members of your community, provide care to donors, and help manage blood donation sessions/drives. Find out your blood type and register as a blood donor
                            </p>
                            <div className='spec mb-2'>
                                <img width="45px" src={ib1} alt="" />
                                <h5 className='ps-2'>Web Development</h5>
                            </div>
                            <div className='spec mb-3'>
                                <img width="45px" src={ib2} alt="" />
                                <h5 className='ps-2'>Mobile Development</h5>
                            </div>
                            <div className='spec mb-3'>
                                <img width="45px" src={ib3} alt="" />
                                <h5 className='ps-2'>Graphics Design</h5>
                            </div>
                            <div className='mt-2'>
                            <Link to='/allCourses'>
                                <Button className='px-5 offer-button'>Read More</Button>
                            </Link>
                                
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
                            <h1 variant="h3" color="initial" sx={{ fontWeight: 500, mt: 1, mb: 3 }}>Best travel agency websites are a great source of information for travelers
                                <br />  We are here for you.</h1>
                            <p  sx={{ width: { xs: 1, sm: '80%' } }}>If a man stays at one place for a long time, he becomes monotonous and his life becomes boring and callous. Travelling removes our monotony and gives pleasure. Similarly, it also broadens our outlook and refreshes our mind. A good traveler can easily educate others.
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
                                <Button className='px-5 offer-button'><a target="_blank" href='https://travel-booking-website-b1db8.web.app/'>Read More</a></Button>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div> 

        {/* Food delivery Section   */}
          {/* <div className='py-5'>
            <Container >
                <Row spacing={10}>
                    <Col sm={12} md={5} lg={5}>
                        <div className="drone-wrapper">
                            <div className="drone-media">
                                <img src={service3} alt="" />
                            </div>
                            <div className="drone-info">
                                <span>FOOD</span>
                                <strong>For Delivery</strong>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={7} lg={7}>
                        <div className='text-start'>
                            <div sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <div className="dash" ></div>
                                <h5   color="#D72323" >About</h5>

                            </div>
                            <h1 variant="h3" color="initial" sx={{ fontWeight: 500, mt: 1, mb: 3 }}>More than anything, having fresh food 
                                <br />    brought to you is convenient.</h1>
                            <p  sx={{ width: { xs: 1, sm: '80%' } }}>The very first thing we would say here is people nowadays are rapidly coping up with the progressive world's updated technology day to day and when they have an option to order their favourite  food with a single click, why wouldn't they?we mean it is a very easy to get the food delivered at your door step.
                            </p>
                            <div className='spec mb-2'>
                                <img width="45px" src={if1} alt="" />
                                <h5 className='ps-2'>Fast Food</h5>
                            </div>
                            <div className='spec mb-3'>
                                <img width="45px" src={if2} alt="" />
                                <h5 className='ps-2'>Best Cook</h5>
                            </div>
                            <div className='spec mb-3'>
                                <img width="45px" src={if3} alt="" />
                                <h5 className='ps-2'>Fast Delivery</h5>
                            </div>
                            <div className='mt-2'>
                                <Button className='px-5 offer-button'><a target="_blank" href='https://foodsense-c7769.firebaseapp.com/'>Read More</a></Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>  */}
        </div>
    );
};

export default OfferServices;