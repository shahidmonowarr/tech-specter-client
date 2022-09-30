import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import PageTitle from '../Components/Shared/PageTitle/PageTitle';

const PrivacyPolicy = () => {
    return (
        <Container>
          <PageTitle title="Policy"></PageTitle>
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
        Our website address is: https://techspecter.com. This privacy policy is for this website and served by Tech specter and governs the privacy of its users who choose to use it. The policy sets out the different areas where user privacy is concerned and outlines the obligations & requirements of the users, the website and website owners. Furthermore the way this website processes, stores and protects user data and information will also be detailed within this policy.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Consent</Accordion.Header>
        <Accordion.Body>
        By using our website, you hereby consent to our Privacy Policy and agree to its terms. This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Tech specter. This policy is not applicable to any information collected offline or via channels other than this website.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Information We Collect</Accordion.Header>
        <Accordion.Body>
        The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.

If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.

When you register for an Account, we may ask for your contact information, including items such as name, address, email address, and telephone number.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How We use your Information</Accordion.Header>
        <Accordion.Body>
        <ul>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Refunds</Accordion.Header>
        <Accordion.Body>
        Our refund and returns policy lasts 30 days. If 30 days have passed since your purchase, we can't offer you a full refund or exchange. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging. To complete your return, we require a receipt or proof of purchase. Please do not send your purchase back to the manufacturer. There are certain situations where only partial refunds are granted (if applicable). 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Cookies and Web Beacons</Accordion.Header>
        <Accordion.Body>
        Like any other website, One Tech specter uses 'cookies'. These cookies are used to store information including visitors preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users experience by customizing our web page content based on visitors browser type and/or other information.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Container>
    );
};

export default PrivacyPolicy;