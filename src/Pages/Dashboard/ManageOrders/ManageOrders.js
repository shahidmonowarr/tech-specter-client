import { Button, Table } from "react-bootstrap";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../../Components/Shared/Loading/Loading";

const ManageOrders = () => {
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
            Remove and Update Orders
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
              {allOrder.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
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
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
