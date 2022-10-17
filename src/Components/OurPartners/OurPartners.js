import React from 'react';
import { Container } from 'react-bootstrap';
import './OurPartners.css';

const OurPartners = () => {
    return (
        <div>
            <Container>
            <div className="contact-title mt-5">
            <h2>
              Our Partners
              <p className="fs-6 fw-normal mt-2">We are with!</p>
            </h2>
          </div>
                <div className='brands'>
                <div class="brand"><img src="https://i.ibb.co/9vKV8PP/alitalia.png" alt="" /></div>
                <div class="brand"><img src="https://i.ibb.co/m6xB5vF/axon.png" alt="" /></div>
                <div class="brand"><img src="https://i.ibb.co/9cNPFCC/expedia.png" alt="" /></div>
                <div class="brand"><img src="https://i.ibb.co/Sn9xpxQ/qantas.png" alt="" /></div>
                <div class="brand"><img src="https://i.ibb.co/vdw9kxp/jetstart.png" alt="" /></div>
                </div>
            </Container>
            
        </div>
    );
};

export default OurPartners;