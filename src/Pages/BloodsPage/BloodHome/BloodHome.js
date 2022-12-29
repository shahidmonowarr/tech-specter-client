import React from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import BloodDonate from '../BloodDonate/BloodDonate';

const BloodHome = () => {
    return (
        <>
            <Container>
            <h2 className="text-center text-uppercase mt-5 mb-4 feature">
                Available Blood
          </h2>
          <p style={{ maxWidth: "500px" }} className="mx-auto text-center">
          Donate Your Blood to Us, Save More Life Together
          </p>
          <Container>
            <ButtonGroup className="flex-wrap" aria-label="Basic example">
              <Button className="mx-2 my-2 rounded-3" variant="secondary" o>
                Available Blood
              </Button>
              <Button className="mx-2 my-2 rounded-3"
                variant="secondary"
                
              >
                Donate Blood
              </Button>
              <Button className="mx-2 my-2 rounded-3"
                variant="secondary"
                
              >
                Request Blood
              </Button>
            </ButtonGroup>
          </Container>
          <BloodDonate/>
            </Container>
        </>
    );
};

export default BloodHome;