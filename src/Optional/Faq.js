import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import PageTitle from '../Components/Shared/PageTitle/PageTitle';

const Faq = () => {
    return (
        <Container>
          <PageTitle title="Faq"></PageTitle>
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
          After entering to the website you can visit the home page and see the services we provide to the customers. You can also see the reviews of the customers. If you want to buy a product you can go to the service page and select the product you want to buy. After selecting the product you can add it to the cart and then you can proceed to checkout. After checkout you can pay the amount and then you can get the product.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Are there any extra fees?</Accordion.Header>
        <Accordion.Body>
          We just charge the amount of the product you buy. There are no extra fees. We also provide free shipping to our customers. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Do you offer any other services?</Accordion.Header>
        <Accordion.Body>
          Yes, we offer other services like web development, web design, software development, software design, mobile app development, mobile app design, digital marketing etc. You can visit our service page to see the services we offer. Also you can visit our blog page to see the blogs we write. You can also visit our contact page to contact us. You can also visit our about page to know more about us. You can also visit our FAQ page to see the frequently asked questions. You can also visit our privacy policy page to see our privacy policy.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Can I make changes to an order I already placed?</Accordion.Header>
        <Accordion.Body>
          Yes, you can make changes to an order you already placed if you not yet  paid. So You can contact us within 24 hours of placing the order. If you contact us after 24 hours, we will not be able to make any changes to your order.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Where Is my Order?</Accordion.Header>
        <Accordion.Body>
        Please visit the My Orders page to the dashboard for a list of your confirmed orders. You can also check the status of your order by clicking on the order number. If you have any questions about your order, please contact us.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Where are You Located?</Accordion.Header>
        <Accordion.Body>
        Mirpur DOHS, Dhaka North, Mirpur Thana of Dhaka City. The Neighborhood is located close to Mirpur Cantonment. The Postal Code of Mirpur DOHS is 1216.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Container>
    );
};

export default Faq;