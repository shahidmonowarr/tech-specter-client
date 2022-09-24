import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Faq = () => {
    return (
        <Container>
            <div className="contact-title mt-5">
            <h2>
              FAQ
              <p className="fs-6 fw-normal mt-2">Frequently Asked Questions!</p>
            </h2>
          </div>
            <Accordion className='text-start' defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How do I get started on Tech specter?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Are there any extra fees?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Do you offer any other services?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Can I make changes to an order I already placed?</Accordion.Header>
        <Accordion.Body>
          Yes, you can make changes to an order you already placed if you not yet  paid. So You can contact us within 24 hours of placing the order. If you contact us after 24 hours, we will not be able to make any changes to your order.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Where are You Located?</Accordion.Header>
        <Accordion.Body>
        Mirpur DOHS, Dhaka North, Mirpur Thana of Dhaka City. The Neighborhood is located close to Mirpur Cantonment. The Postal Code of Mirpur DOHS is 1216.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Where Is my Order?</Accordion.Header>
        <Accordion.Body>
        Please visit the My Orders page to the dashboard for a list of your confirmed orders.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Container>
    );
};

export default Faq;