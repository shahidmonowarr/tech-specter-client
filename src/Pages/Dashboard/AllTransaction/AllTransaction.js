import React, { useState } from "react";
import { Pagination, Table } from "react-bootstrap";
import { useQuery } from "react-query";
import Loading from "../../../Components/Shared/Loading/Loading";

const AllTransaction = () => {
  const pageSize = 10; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1); // Current page number

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

  const orderWithTransaction = allOrder.filter( (order) => order.transactionId);

  const totalPages = Math.ceil(allOrder.length / pageSize); // Total number of pages
  const startIndex = (currentPage - 1) * pageSize; // Index of first item on current page
  const endIndex = startIndex + pageSize; // Index of last item on current page
  const currentOrders = orderWithTransaction.slice(startIndex, endIndex); // Items to display on current page

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <div className=" manage-order">
        <div className="container">
          <h1 className="text-dark fw-bold pt-5 pb-3 fs-1">
            All Transaction Details [Total {orderWithTransaction.length}]
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
              {currentOrders.map((order, index) => (
                <tr
                  key={order._id}
                  order={order}
                  index={startIndex + index + 1}
                  refetch={setAllOrder}
                >
                  <td>{startIndex + index + 1}</td>
                  <td>{order.email}</td>
                  <td>{order.service}</td>
                  <td>{order.price}</td>
                  <td>{order.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-center">
            <Pagination>
              <Pagination.First
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              />
              <Pagination.Prev
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              />
              {Array.from({ length: totalPages }, (_, i) => (
                <Pagination.Item
                  key={i + 1}
                  active={i + 1 === currentPage}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
              <Pagination.Last
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTransaction;
