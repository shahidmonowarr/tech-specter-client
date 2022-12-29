import React from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import BloodDonate from "../BloodDonate/BloodDonate";
import BloodPatient from "../BloodPatient/BloodPatient";
import Guidelines from "../Guidelines/Guidelines";

const BloodHome = () => {
  return (
    <>
      <Container>
        <h2 className="text-center text-uppercase mt-5 mb-4 feature">
          Available Blood Donor
        </h2>
        <p style={{ maxWidth: "500px" }} className="mx-auto text-center">
          Donate Your Blood to Us, Save More Life Together
        </p>
        <Container>
          <ButtonGroup className="flex-wrap" aria-label="Basic example">
            <Button className="mx-2 my-2 rounded-3" variant="secondary" o>
              Available Donor
            </Button>
            <Button className="mx-2 my-2 rounded-3" variant="secondary">
              Donate Blood
            </Button>
            <Button className="mx-2 my-2 rounded-3" variant="secondary">
              Request Blood
            </Button>
            <Button className="mx-2 my-2 rounded-3" variant="secondary">
              Guidelines
            </Button>
          </ButtonGroup>
        </Container>
        <BloodDonate/>
        <BloodPatient/>
        <Guidelines/>
      </Container>
    </>
  );
};

export default BloodHome;
