import emailjs from 'emailjs-com';
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j5ax74i', 'template_r30vlp2', e.target, 'user_D6NRRRQqBmKlFFSRdDwrA')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset();
};
  return (
    <div id="contact">
      <div className="container overflow-hidden">
        <div className="contact-section">
          <div className="contact-title">
            <h2>
              Contact Us
              <p className="fs-6 fw-normal mt-2">Feel free to Contact!</p>
            </h2>
          </div>

          <div className="row mx-2 contact">
            <div className="col-md-6 col-sm-12">
              <div className="">
                <img
                  data-aos="zoom-in-up"
                  style={{width:'100%', height: 'auto'}}
                  className="mt-5"
                  src="https://i.ibb.co/M9DMtMd/20943953.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mt-5">
              <h1 className="display-5 fw-bold text-warning">
                Drop
                <span className="display-5 fw-bold text-warning">
                  {" "}
                  us a Message{" "}
                </span>
              </h1>
              <h4 className="text-primary">We'd Love To Hear From You</h4>

              <div className=" text-start p-2 mt-2">
                <Form onSubmit={sendEmail} className="mt-2">
                  <Row className="pb-3">
                    <Col>
                      <Form.Control type="text" name="name" placeholder="Your Name" />
                    </Col>
                  </Row>
                  <Form.Group className="pb-3" controlId="formBasicEmail">
                    
                    <Form.Control type="email" name="email" placeholder="Enter Email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={3}
                      placeholder="Message..."
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
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
