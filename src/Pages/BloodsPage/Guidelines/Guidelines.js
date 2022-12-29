import React from "react";
import { Card, Container } from "react-bootstrap";

const Guidelines = () => {
  return (
    <Container>
      <Card className="text-start mx-auto col-sm-6 col-md-6 col-lg-8">
        <Card.Body>
          <Card.Title
            style={{ textTransform: "uppercase", fontWeight: "bold" }}
            as="h3"
          >
            Read This Blog About Blood Donation
          </Card.Title>
          <Card.Text>
            Blood donation is a selfless act that can save the lives of
            countless people in need. It is a simple and quick process that has
            the potential to make a huge difference in the lives of others.
          </Card.Text>
          <Card.Text>
            <h6 className="fw-bold">Why people donate Blood:</h6>
            <hr></hr>
            There are several reasons why people donate blood. Some do it to
            give back to their community, while others do it to help a loved one
            in need. No matter the reason, the act of donating blood is a noble
            and selfless one that can have a profound impact on the lives of
            others.
          </Card.Text>
          <Card.Text>
            <h6 className="fw-bold">Process of Blood donating:</h6>
            <hr></hr>
            The process of donating blood is relatively simple. First, you will
            need to find a blood donation center or blood drive in your area.
            Many hospitals, community centers, and other organizations host
            blood drives on a regular basis. Once you have found a location, you
            will need to make an appointment to donate.
          </Card.Text>
          <Card.Text>
            <h6 className="fw-bold">Medical Checkup:</h6>
            <hr></hr>
            Before donating blood, you will need to fill out a medical
            questionnaire to ensure that you are eligible to donate. There are
            certain medical conditions and medications that can disqualify you
            from donating blood. It is important to be honest and upfront about
            your medical history to ensure the safety of both the donor and the
            recipient.
          </Card.Text>
          <Card.Text>
            <h6 className="fw-bold">On the day of your appointment:</h6>
            <hr></hr>
            On the day of your appointment, you will need to arrive at the blood
            donation center a few minutes early to check in. You will be asked
            to provide identification and to complete a few more forms. Next,
            you will undergo a mini-physical, which will include checking your
            pulse, blood pressure, and hemoglobin levels. This is to ensure that
            you are healthy enough to donate blood.
          </Card.Text>
          <Card.Text>
            <h6 className="fw-bold">What you have to do:</h6>
            <hr></hr>
            Once you have been cleared to donate, you will be taken to a private
            room where the actual blood donation will take place. A trained
            phlebotomist will insert a sterile needle into a vein in your arm
            and collect the blood. The entire process takes about 10-15 minutes
            and is relatively painless.
          </Card.Text>
          <Card.Text>
            <h6 className="fw-bold">What you have to do:</h6>
            <hr></hr>
            Once you have been cleared to donate, you will be taken to a private
            room where the actual blood donation will take place. A trained
            phlebotomist will insert a sterile needle into a vein in your arm
            and collect the blood. The entire process takes about 10-15 minutes
            and is relatively painless. After the blood has been collected, you
            will be given a snack and encouraged to relax for a few minutes
            before leaving. It is important to drink plenty of fluids and avoid
            strenuous activity for the rest of the day. Most people are able to
            return to their normal activities the next day.
          </Card.Text>
          <Card.Text>
            <h6 className="fw-bold">Benefits to donating Blood:</h6>
            <hr></hr>
            There are many benefits to donating blood. In addition to helping
            others, it can also have a positive impact on your own health.
            Donating blood can help lower your risk of heart disease and can
            also stimulate the production of new red blood cells, which can help
            improve your overall health and well-being.
          </Card.Text>
          <Card.Text>
            It is important to note that there is a constant need for blood
            donations. Blood is a perishable product and must be constantly
            replenished. By donating blood, you can help ensure that there is a
            sufficient supply of blood available for those in need.
          </Card.Text>
          <Card.Text>
            In conclusion, donating blood is a simple and selfless act that can
            save the lives of countless people. If you are eligible to donate,
            consider making an appointment to give blood today. You never know
            when you or someone you love may need a blood transfusion, and by
            donating blood, you can help ensure that there is a sufficient
            supply available for those in need.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Guidelines;
