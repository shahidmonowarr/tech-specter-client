import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ib1 from '../../images/blood-analysis.png';
import ib2 from '../../images/blood-transfusion.png';
import ib3 from '../../images/blood-bag.png';
import it1 from '../../images/calendar.png';
import it2 from '../../images/pickup.png';
import it3 from '../../images/tool.png';
import bi1 from '../../images/development.png';
import bi2 from '../../images/marketing.png';
import bi3 from '../../images/health.png';
import bi4 from '../../images/design.png';
import './OfferServices.css';
import { Link } from 'react-router-dom';

const OfferServices = () => {
    return (
        <div>
            <div className="contact-title mt-5">
            <h2>
              Services
              <p className="fs-6 fw-normal mt-2">What we provide to you!</p>
            </h2>
          </div>
        
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
                        <div className="offer-wrapper">
                            <div className="">
                                <img style={{width:'100%', height: 'auto'}}  src="https://i.ibb.co/jGwSgbH/12145615-Wavy-Edu-05-Single-08-1.jpg" alt="" />
                            </div>
                            <div className="offer-info">
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
                            <h2 >Develop your career with amazing resources 
                                <br />    [Grab your best courses]</h2>
                            <p  >An online learning platform is a web space or portal for educational content and resources that offers a student everything they need in one place: lectures, resources, opportunities to meet and chat with other students, and more.
                            </p>
                            <div className='spec mb-2'>
                                <img width="40px" src={bi1} alt="" />
                                <h5 className='ps-2'>Development</h5>
                            </div>
                            <div className='spec mb-2'>
                                <img width="0px" src={bi4} alt="" />
                                <h5 className='ps-2'>Design</h5>
                            </div>
                            <div className='spec mb-2'>
                                <img width="40px" src={bi2} alt="" />
                                <h5 className='ps-2'>Marketing</h5>
                            </div>
                            <div className='mt-2'>
                            <Link to='/allCourses'>
                                <Button className='px-5 btn-danger offer-button'>See Courses</Button>
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
                        <div className="offer-wrapper">
                            <div >
                                <img style={{width:'100%', height: 'auto'}}  src='https://i.ibb.co/NSt3xsb/12291290-Wavy-Trv-01-Single-06-1.jpg' alt="" />
                            </div>
                            <div className="offer-info">
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
                            <h2>Best travel agency websites are a great source of information for travelers.
                                <br />  [We are here for you.]</h2>
                            <p>If a man stays at one place for a long time, he becomes monotonous and his life becomes boring and callous. Traveling removes our monotony and gives pleasure. Similarly, it also broadens our outlook and refreshes our mind. A good traveler can easily educate others.
                            </p>
                            <div className='spec mb-2'>
                                <img width="40px" src={it1} alt="" />
                                <h5 className='ps-2'>Date Analysis</h5>
                            </div>
                            <div className='spec mb-2'>
                                <img width="40px" src={it2} alt="" />
                                <h5 className='ps-2'>Pickup Transportation</h5>
                            </div>
                            <div className='spec mb-2'>
                                <img width="40px" src={it3} alt="" />
                                <h5 className='ps-2'>Tent Benefit</h5>
                            </div>
                            <Link to='/allPlaces'>
                                <Button className='px-5 btn-danger offer-button'>See Places</Button>
                            </Link>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div> 

        {/* Blog Section   */}
        <div className='py-5'>
            <Container >
                <Row spacing={10}>
                    <Col sm={12} md={5} lg={5}>
                        <div className="offer-wrapper">
                            <div className="">
                                <img style={{width:'100%', height: 'auto'}}  src="https://i.ibb.co/ZHDZZtd/12083320-Wavy-Bus-15-Single-06-min.jpg" alt="blogs" />
                            </div>
                            <div className="offer-info">
                                <span>Blog</span>
                                <strong>For Students</strong>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={7} lg={7}>
                        <div className='text-start'>
                            <div sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <div className="dash" ></div>
                                <h5   color="#D72323" >About</h5>

                            </div>
                            <h2 >Reading blogs will not only keep you updated with information but can help you in 
                                <br />    [Becoming a great person as well]</h2>
                            <p  >However, following a positive attitude as well as spreading that rationalist to other people will make your skills more rewarding. This blog will help you in becoming that positivist social butterfly with its everyday tips on how to be a better person as well as how to build stronger skills. Believe me, you will be surprised after reading a few posts. 
                            </p>
                            <div className='spec mb-2'>
                                <img width="40px" src={bi1} alt="" />
                                <h5 className='ps-2'>Development</h5>
                            </div>
                            <div className='spec mb-2'>
                                <img width="0px" src={bi2} alt="" />
                                <h5 className='ps-2'>Marketing</h5>
                            </div>
                            <div className='spec mb-2'>
                                <img width="40px" src={bi3} alt="" />
                                <h5 className='ps-2'>Health</h5>
                            </div>
                            <div className='mt-2'>
                            <Link to='/allBlogs'>
                                <Button className='px-5 btn-danger offer-button'>See Blogs</Button>
                            </Link>
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div> 

        {/* Blood Bank Section   */}
        <div className='py-5'>
            <Container >
                <Row spacing={10}>
                    <Col sm={12} md={5} lg={5}>
                        <div className="offer-wrapper">
                            <div className="">
                                <img style={{width:'100%', height: 'auto'}}  src="https://i.ibb.co/BnCpxq5/12146072-Wavy-Lst-04-Single-01-min-1.jpg" alt="blood donation" />
                            </div>
                            <div className="offer-info">
                                <span>Blood</span>
                                <strong>For Urgent</strong>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={7} lg={7}>
                        <div className='text-start'>
                            <div sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <div className="dash" ></div>
                                <h5   color="#D72323" >About</h5>

                            </div>
                            <h2 >Blood donation is a safe process. Patient need blood for their treatment.
                                <br />    [Donate your blood or collect if needed]</h2>
                            <p  >Volunteer with the blood service to reach out to members of your community, provide care to donors, and help manage blood donation sessions/drives. Find out your blood type and register as a blood donor. You can donate blood every 3 months. 
                            </p>
                            <div className='spec mb-2'>
                                <img width="40px" src={ib1} alt="" />
                                <h5 className='ps-2'>Blood Donation</h5>
                            </div>
                            <div className='spec mb-2'>
                                <img width="0px" src={ib2} alt="" />
                                <h5 className='ps-2'>Platelet Donation</h5>
                            </div>
                            <div className='spec mb-2'>
                                <img width="40px" src={ib3} alt="" />
                                <h5 className='ps-2'>Plasma Donation</h5>
                            </div>
                            <div className='mt-2'>
                            <Link to='/'>
                                <Button className='px-5 btn-danger offer-button'>See Bloods</Button>
                            </Link>
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div> 
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