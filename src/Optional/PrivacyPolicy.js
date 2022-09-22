import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const PrivacyPolicy = () => {
    return (
        <Container>
            <div className="contact-title mt-5">
            <h2>
              Privacy Policy
              <p className="fs-6 fw-normal mt-2">Terms and conditions of Tech specter!</p>
            </h2>
          </div>
            <Accordion className='text-start mb-5' defaultActiveKey="0" alwaysOpen>
      <Accordion.Item  eventKey="0">
        <Accordion.Header>Overview</Accordion.Header>
        <Accordion.Body>
        Our refund and returns policy lasts 30 days. If 30 days have passed since your purchase, we can't offer you a full refund or exchange.

To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.

Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Refunds</Accordion.Header>
        <Accordion.Body>
        Our refund and returns policy lasts 30 days. If 30 days have passed since your purchase, we can't offer you a full refund or exchange.

To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Privacy policy amendment</Accordion.Header>
        <Accordion.Body>
        We may amend or update this policy from time to time and will notify you of any material changes to this policy. Previous versions of this privacy policy are available upon request.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Container>
    );
};

export default PrivacyPolicy;