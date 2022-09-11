import axios from "axios";
import React from "react";
import { toast } from 'react-toastify';
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import useCourseDetails from "../../../hooks/useCourseDetails/useCourseDetails";
import "./CheckOut.css";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [course] = useCourseDetails(serviceId);
  const [user] = useAuthState(auth);

  if(user){
    console.log(user);
  }

  const handlePlaceOrder = event =>{
    event.preventDefault();
    const order = {
        email: user.email,
        service: course.name,
        serviceId: serviceId,
        phone: event.target.phone.value,

    }
    axios.post('http://localhost:5000/order', order)
        .then(res => {
            const {data}= res;
            if (data.insertedId) {
                toast('Your Order is Booked');
                event.target.reset();
            }
            console.log(res);
        })
  }

  return (
    <div className="w-50 mx-auto">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Place Your Order</h3>
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
                  value={course.name}
                  required readOnly
                />
                <input
                  className="form-control"
                  type="number"
                  name="phone"
                  autoComplete="off"
                  placeholder="Phone"
                />
                <input id='submit' className="btn-danger fw-bold mt-3 w-25" value='Place Order' type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
