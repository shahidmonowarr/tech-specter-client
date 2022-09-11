import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from 'react-hook-form';
import { Spinner } from 'react-bootstrap';
import Loading from '../../../Components/Shared/Loading/Loading';
import { toast } from 'react-toastify';


const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if(loading || gLoading){
    return <Loading></Loading>
  }

  if(error || gError){
    signInError= <p className='text-danger mt-1'><small>{error?.message || gError?.message}</small></p>
  }

  if(user || gUser){
    navigate(from, {replace: true});
    toast('Login Successful');
  }

  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password);
  }

    return (
        <div>
            <MDBContainer className="my-5">

<MDBCard>
  <MDBRow className='g-0'>

    <MDBCol md='6'>
      <MDBCardImage src='https://i.ibb.co/V9FVW7n/4957136.jpg' alt="login form" className='rounded-start w-100'/>
    </MDBCol>

    <MDBCol md='6'>
      <MDBCardBody className='d-flex flex-column'>

        <div className='d-flex flex-row mt-2 mx-auto'>
          <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
          <span className="h1 fw-bold mb-0">Logo</span>
        </div>

        <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>SignIn to your account</h5>
        <form onSubmit={handleSubmit(onSubmit)}>


          {/* for email */}
          <div>
           <div className='text-start ms-5'> <label >Email</label><br/></div>
          <input ClassName='mb-2'
          placeholder='Enter Your Email'
          style={{ width: '82%', marginBottom: '10px', borderRadius: '8px', height:'40px' }}
          label='Email address' 
          id='formControlLg' 
          type='email' 
          {...register("email",  {
            required:{
              value: true,
              message: 'email is required'
            },
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
            message: 'Provide a valid Email'}
          })}
          size="lg"/>
          <label className='label mb-2 text-danger'>
          {errors.email?.type === 'required' && <span className='label-text-alt text-red'>{errors.email.message}</span>}
          {errors.email?.type === 'pattern' && <span className='label-text-alt text-red'>{errors.email.message}</span>}
          </label>
          </div>

          {/* for password */}
          <div>
          <div className='text-start ms-5'> <label >Password</label></div>
          <input  
          className='mb-2' 
          placeholder='Enter Your Password'
          style={{ width: '82%', marginBottom: '20px', borderRadius: '8px', height:'40px' }} 
          id='formControlLg' type='password'
          {...register("password",  {
            required:{
              value: true,
              message: 'password is required'
            },
            minLength:{
              value: 6,
              message: 'Must be 6 characters or longer'
          }})} 
          size="lg"/>
          <label className='label mb-2 text-danger'>
          {errors.password?.type === 'required' && <span className='label-text-alt text-red'>{errors.password.message}</span>}
          {errors.password?.type === 'minLength' && <span className='label-text-alt text-red'>{errors.password.message}</span>}
          </label>
          </div>

          {signInError}
        <input type="submit" value="Login" className="mb-4 px-5" style={{ backgroundColor: 'black', color:'whitesmoke', fontWeight:'bolder',width: '82%', marginBottom: '20px', borderRadius: '8px', height:'40px'  }}/>
        </form>

        <a className="small text-muted" href="#!">Forgot password?</a>
        <p className="mb-2 pb-lg-2" style={{color: 'black'}}>Don't have an account? <span   ><Link style={{color: '#393f81',fontWeight:'bold'}} to="/register">Register here</Link> </span></p>

        <p>Or SignIn with:</p>
                <MDBBtn onClick={() => signInWithGoogle()} className="mb-2 mx-auto w-30" size="lg" style={{backgroundColor: '#dd4b39'}} >
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

export default Login;