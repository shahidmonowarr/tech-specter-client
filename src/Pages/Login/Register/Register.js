import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';

const Register = () => {
    return (
        <div>
            <MDBContainer className="my-5">

<MDBCard>
  <MDBRow className='g-0'>

    <MDBCol md='6'>
      <MDBCardImage src='https://i.ibb.co/ZLNSMY4/6300959.jpg' alt="login form" className='rounded-start w-100'/>
    </MDBCol>

    <MDBCol md='6'>
      <MDBCardBody className='d-flex flex-column'>

        <div className='d-flex flex-row mt-2 mx-auto'>
          <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
          <span className="h1 fw-bold mb-0">Logo</span>
        </div>

        <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>SignUp to your account</h5>

        <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
                </MDBCol>
              </MDBRow>
          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

        <MDBBtn className="mb-4 px-5" color='dark' size='lg'>SIGN UP</MDBBtn>
        <p>Or SignUp with:</p>

                {/* <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn> */}

            <MDBBtn className="mb-2 mx-auto w-30" size="lg" style={{backgroundColor: '#dd4b39'}}>
                <MDBIcon fab icon="google" style={{ color: '#f6ca64', fontWeight:'bold' }} className="mx-2"/>
                google
              </MDBBtn>


      </MDBCardBody>
    </MDBCol>

  </MDBRow>
</MDBCard>

</MDBContainer>
        </div>
    );
};

export default Register;