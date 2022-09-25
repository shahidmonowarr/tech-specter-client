import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import PageTitle from '../Components/Shared/PageTitle/PageTitle';

const AboutUs = () => {
    return (
        <Container>
          <PageTitle title="About"></PageTitle>
            <div className="contact-title mt-5">
            <h2>
              About Us
              <p className="fs-6 fw-normal mt-2">About Tech specter!</p>
            </h2>
          </div>
            <Accordion className='text-start mb-5' defaultActiveKey="0" alwaysOpen>
      <Accordion.Item  eventKey="0">
        <Accordion.Header>Overview</Accordion.Header>
        <Accordion.Body>
        Our website address is: https://techspecter.com. This privacy policy is for this website and served by Tech specter and governs the privacy of its users who choose to use it. The policy sets out the different areas where user privacy is concerned and outlines the obligations & requirements of the users, the website and website owners. Furthermore the way this website processes, stores and protects user data and information will also be detailed within this policy.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Refunds</Accordion.Header>
        <Accordion.Body>
        Our refund and returns policy lasts 30 days. If 30 days have passed since your purchase, we can't offer you a full refund or exchange. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging. To complete your return, we require a receipt or proof of purchase. Please do not send your purchase back to the manufacturer. There are certain situations where only partial refunds are granted (if applicable). 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Privacy policy amendment</Accordion.Header>
        <Accordion.Body>
        We may amend or update this policy from time to time and will notify you of any material changes to this policy. Previous versions of this privacy policy are available upon request. We encourage you to periodically review this page for the latest information on our privacy practices. Your continued use of the Site after any changes or revisions to this Privacy Policy shall indicate your agreement with the terms of such revised Privacy Policy.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Container>
    );
};

export default AboutUs;