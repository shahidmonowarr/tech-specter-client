import { useState } from "react";
import { Button, Pagination, Table } from "react-bootstrap";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../../Components/Shared/Loading/Loading";

const ManageOrders = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: allOrder,
    setAllOrder,
    isLoading,
    refetch,
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

  const totalPages = Math.ceil(allOrder.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentOrders = allOrder.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //for confirm
  const handleConfirmOrder = (id) => {
    const matchedOrder = allOrder.filter((order) => order._id === id);
    matchedOrder[0].status = "Confirmed";

    fetch(`https://tech-specter.onrender.com/order/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(matchedOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("order confirmed");
        refetch();
      });

    // fetch()
  };

  //for delete
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
            const remaining = allOrder.filter((order) => order._id !== id);
            setAllOrder(remaining);
          }
        });
    }
  };

  return (
    <div>
      <div className=" manage-order">
        <div className="container">
          <h1 className="text-dark fw-bold pt-5 pb-3 fs-1">
            Remove and Approve Orders [Total: {allOrder.length}]
          </h1>
          <Table striped bordered hover responsive variant="dark">
            <thead>
              <tr className="bg-dark text-white">
                <th>Index</th>
                <th>Email</th>
                <th>Order Name</th>
                <th>Order Status</th>
                <th>Approve</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order, index) => (
                <tr 
                key={order._id}
                order={order}
                index={startIndex + index + 1}
                refetch={refetch}
                >
                  <td>{startIndex + index + 1}</td>
                  <td>{order.email}</td>
                  <td>{order.service}</td>
                  <td>{order.status}</td>
                  {order.paid ? (
                    <td>
                      <Button
                        className="px-3 btn-danger"
                        onClick={() => handleConfirmOrder(order._id)}
                      >
                        Confirm
                      </Button>
                    </td>
                  ):(
                    <td>
                      <span className="text-danger fw-bolder">Not Paid</span>
                    </td>
                  )}
                  {/* <td><Button className='px-3 btn-danger' onClick={() => handleConfirmOrder(order._id)}>Confirm</Button></td> */}
                  <td>
                    <Button
                      className="px-3 btn-danger"
                      onClick={() => handleDeleteOrder(order._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-center">
        <Pagination>
          <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
          <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
          {Array.from({ length: totalPages }, (_, i) => (
            <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
          <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
      </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
