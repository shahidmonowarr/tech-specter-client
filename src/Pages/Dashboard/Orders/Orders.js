import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`https://tech-specter.onrender.com/order?email=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          // console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          // console.log("data", data);
          const myOrders = data.filter(singleData => singleData.email === user.email);
                setOrders(myOrders);
        });
    }
  }, [user]);

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are Sure To Cancel This Order?");
    if (proceed) {
      const url = `https://tech-specter.onrender.com/order/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast("Order Deleted SuccessFully");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h1>My orders {orders.length}</h1>
      <Row>
        {orders?.map((order) => (
          <Col
            key={order._id}
            order={order}
            className="my-3 text-center"
            sm={12}
            md={6}
            lg={4}
          >
            <Card data-aos="zoom-in" style={{ height: "97%" }} className="mx-1 mb-3  shadow">
              <div className="text-center">
                <Card.Img
                  style={{ width: "90%", height: "200px" }}
                  variant="top"
                  src={order.image}
                />
              </div>
              <Card.Body>
                <Card.Title
                  style={{ color: "#42a5f5", fontSize: "15px" }}
                  className="text-uppercase"
                >
                  {order.service}
                </Card.Title>
                <h6 className="btn-danger mx-5 rounded-3">{order.status}</h6>
                <Card.Text>Price: {order.price}.00 BDT</Card.Text>
                {(order.date)&&<Card.Title>Date: {order.date}</Card.Title>}
                {
                  (!order.paid) && <button className="btn btn-danger me-2" onClick={() => handleDeleteOrder(order._id)}>Cancel Order</button>
                }
                {
                  (order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-danger">Pay</button></Link>
                }
                {
                  (order.price && order.paid) && <span className="btn btn-danger">Paid</span>
                }
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Orders;
