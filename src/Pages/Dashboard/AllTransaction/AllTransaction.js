import React from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Shared/Loading/Loading';

const AllTransaction = () => {
    const {
        data: allOrder,
        setAllOrder,
        isLoading,
      } = useQuery("allOrder", () =>
        fetch("https://tech-specter.onrender.com/order", {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }).then((res) => res.json())
      );
    
      if (isLoading) {
        return <Loading />;
      }
    return (
        <div>
      <div className=" manage-order">
        <div className="container">
          <h1 className="text-dark fw-bold pt-5 pb-3 fs-1">
            All Transaction Details
          </h1>
          <Table striped bordered hover responsive variant="dark">
            <thead>
              <tr className="bg-dark text-white">
                <th>Index</th>
                <th>Email</th>
                <th>Order Name</th>
                <th>Order Price</th>
                <th>Transaction Id</th>
              </tr>
            </thead>
            <tbody>
              {allOrder.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>{order.email}</td>
                  <td>{order.service}</td>
                  <td>{order.price}</td>
                  <td>{order.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
    );
};

export default AllTransaction;