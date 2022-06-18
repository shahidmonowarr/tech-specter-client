import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div id='contact'>
            <div className="container overflow-hidden">
                <div className="contact-section">
                    <h1 className="text-warning text-center banner-title py-3"><i className="far fa-address-book"></i> Contact With Us</h1>

                    <div className="row contact">
                        <div className="col-md-6 col-sm-12">

                            <div className="">

                                <img className="contact-img w-100 mt-2 pt-4 mb-4 rounded-3" src="https://i.ibb.co/M9DMtMd/20943953.jpg" alt="" />

                            </div>

                        </div>
                        <div className="col-md-6 col-sm-12 mt-5">
                            <h1 className="display-5 text-white">Drop<span className="display-5 fw-bold text-warning">  us a Message </span></h1>
                            <h4 className="text-white">We’d Love To Hear From You</h4>

                            <div className=" text-start p-2 mt-2">

                                <Form className="mt-2">
                                    <Row className='pb-3'>
                                        <Col>
                                            <Form.Control placeholder="First name" />
                                        </Col>
                                        <Col>
                                            <Form.Control placeholder="Last name" />
                                        </Col>
                                    </Row>
                                    <Form.Group className="pb-3" controlId="formBasicEmail">
                                        <Form.Label className="text-white">Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                                        <Form.Control as="textarea" rows={3} placeholder="Message..." />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" >
                                        Submit
                                    </Button>
                                </Form>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;