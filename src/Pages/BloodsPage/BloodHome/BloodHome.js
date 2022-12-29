import React from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

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
            <Link
              to="/blood/availableDonor"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button className="mx-2 my-2 rounded-3" variant="secondary" o>
                Available Donor
              </Button>
            </Link>
            <Link
              to="/blood/bloodDonate"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button className="mx-2 my-2 rounded-3" variant="secondary">
                Donate Blood
              </Button>
            </Link>
            <Link
              to="/blood/bloodPatient"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button className="mx-2 my-2 rounded-3" variant="secondary">
                Request Blood
              </Button>
            </Link>
            <Link
              to="/blood/guidelines"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button className="mx-2 my-2 rounded-3" variant="secondary">
                Guidelines
              </Button>
            </Link>
          </ButtonGroup>
        </Container>
        <Outlet></Outlet>
      </Container>
    </>
  );
};

export default BloodHome;
