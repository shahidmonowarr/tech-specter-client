import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PageTitle from '../../Components/Shared/PageTitle/PageTitle';
import auth from '../../firebase.init';
import usePlaceDetails from '../../hooks/usePlaceDetails/usePlaceDetails';

const PlaceBooking = () => {
    const { serviceId } = useParams();
  const [place] = usePlaceDetails(serviceId);
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  if(user){
    // console.log(user);
  }

  const handlePlaceOrder = event =>{
    event.preventDefault();
    const order = {
        email: user.email,
        service: place.name,
        serviceId: serviceId,
        image: place.image,
        price: place.price,
        date: place.date,
        description: place.description,
        phone: event.target.phone.value,
        status: "Pending"

    }
    axios.post('https://tech-specter-server.vercel.app/order', order)
        .then(res => {
            const {data}= res;
            if (data.insertedId) {
                toast('Your Order is Booked');
                event.target.reset();
                navigate('/dashboard/myOrders');
            }
            // console.log(res);
        })
  }

    return (
        <div className="w-50 mx-auto">
          <PageTitle title="Booking"></PageTitle>
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Place Your Booking</h3>
              <p>Fill in the data below.</p>
              <form onSubmit={handlePlaceOrder}>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={user.displayName}
                  required readOnly
                />
                
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={user.email}
                  placeholder="E-mail Address"
                  required readOnly
                />
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={place.name}
                  required readOnly
                />
                <input
                  className="form-control"
                  type="date"
                  name="date"
                  required
                />
                <input
                  className="form-control"
                  type="number"
                  name="phone"
                  autoComplete="off"
                  required
                  placeholder="01xxxxxxxxx"
                />
                <input id='submit' className="btn-danger fw-bold mt-3 w-50" value='Place Booking' type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default PlaceBooking;