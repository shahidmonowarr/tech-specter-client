import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../../Components/Shared/Loading/Loading';
import auth from '../../../firebase.init';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51LjQDsIuMYzXtkmkPWiH8MIT8tMlHG55vpMv5QaXhcfHkIY4eizKa4r6CYgaKe3SY2g0vMfFREqLqhOutCTY1WvZ00R5WjrT5n');

const Payment = () => {
    const [user, loading, error] = useAuthState(auth);

    const {id} = useParams();
    const url = `https://tech-specter-server.vercel.app/order/${id}`;

    const {data: singleOrder, isLoading} = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
      <Card className='mt-5 mb-3 w-50 mx-auto'>
      <Card.Body>
        <Card.Title style={{textTransform: 'uppercase'}}>Hello, <span style={{color:'#e64088', fontWeight:'bolder'}}>{user.displayName}</span></Card.Title>
        <Card.Title>Pay for {singleOrder.service}</Card.Title>
        <Card.Text>
          Please pay: {singleOrder.price} BDT
        </Card.Text>
      </Card.Body>
    </Card>
      <Card className='mb-5  w-50 mx-auto'>
      <Card.Body>
        
      <Elements stripe={stripePromise}>
    <CheckoutForm singleOrder={singleOrder} />
  </Elements>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Payment;