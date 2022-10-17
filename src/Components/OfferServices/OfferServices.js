import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './OfferServices.css';
import { Link } from 'react-router-dom';

const OfferServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('fakeDB.JSON')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                console.log(data);
            })
    }, [])
    return (
        <div>
            <div className="contact-title mt-5">
            <h2>
              Services
              <p className="fs-6 fw-normal mt-2">What we provide to you!</p>
            </h2>
          </div>

          <Container className="my-5">
            {services.map(service => (
                <Container className="my-5" >
                <Row spacing={10}>
                    <Col sm={12} md={5} lg={5}>
                        <div className="offer-wrapper">
                            <div className="">
                                <img style={{width:'100%', height: 'auto'}}  src={service.image} alt="" />
                            </div>
                            <div className="offer-info">
                                <span>{service.name}</span>
                                <strong>{service.subtitle}</strong>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={7} lg={7}>
                        <div className='text-start'>
                            <div sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <div className="dash" ></div>
                                <h5   color="#D72323" >About</h5>

                            </div>
                            <h2 >{service.header1} 
                                <br />    {service.header2}</h2>
                            <p  >{service.description}
                            </p>
                            <div className='spec mb-2'>
                                <img width="40px" src={service.cateImg1} alt="" />
                                <h5 className='ps-2'>{service.category1}</h5>
                            </div>
                            <div className='spec mb-2'>
                                <img width="0px" src={service.cateImg2} alt="" />
                                <h5 className='ps-2'>{service.category2}</h5>
                            </div>
                            <div className='spec mb-2'>
                                <img width="40px" src={service.cateImg3} alt="" />
                                <h5 className='ps-2'>{service.category3}</h5>
                            </div>
                            <div className='mt-2'>
                            <Link to='/allCourses'>
                                <Button className='px-5 btn-danger offer-button'>{service.btnText}</Button>
                            </Link>
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            ))}
          </Container>
          
        </div>
    );
};

export default OfferServices;