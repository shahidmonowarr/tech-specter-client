import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?email=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user]);

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are Sure To Cancel This Order?");
    if (proceed) {
      const url = `http://localhost:5000/order/${id}`;
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
      {/* <Table striped bordered hover variant="dark">
                <thead>
                    <tr className="bg-dark text-white">
                        <th>Index</th>
                        <th>Customer Name</th>
                        <th>Product Name</th>
                        <th>Phone</th>
                        <th>Order Status</th>
                        <th>Approve</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => (
                            <tr key={order._id}>
                                <td>{index + 1}</td>
                                <td>{user?.displayName}</td>
                                <td>{order.service}</td>
                                <td>{order.phone}</td>
                                <td>{order.orderStatus}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table> */}

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
            <Card style={{ height: "97%" }} className="mx-1 mb-3  shadow">
              <div className="text-center">
                <Card.Img
                  style={{ width: "80%", height: "200px" }}
                  variant="top"
                  src={order.image}
                />
              </div>
              <Card.Body>
                <Card.Title
                  style={{ color: "#42a5f5" }}
                  className="text-uppercase"
                >
                  {order.service}
                </Card.Title>
                <h5 className="btn-danger mx-5 rounded-3">{order.status}</h5>
                <Card.Title>Price: {order.price}.00 BDT</Card.Title>
                <Card.Text>{order.description.slice(0, 60)}...</Card.Text>

                <button className="btn btn-danger me-2" onClick={() => handleDeleteOrder(order._id)}>Cancel Order</button>
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
