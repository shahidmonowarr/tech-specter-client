import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../../Components/Shared/Loading/Loading';

const ManagePlaces = () => {
    const {
        data: allPlaces,
        setAllPlaces,
        isLoading
      } = useQuery("allPlaces", () =>
        fetch("https://tech-specter-server.vercel.app/travel", {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }).then((res) => res.json())
      );

      //for delete
  const handleDeletePlace = (id) => {
    const proceed = window.confirm("Are Sure To Cancel This Order?");
    if (proceed) {
      const url = `https://tech-specter-server.vercel.app/travel/${id}`;
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
            const remaining = allPlaces.filter((place) => place._id !== id);
            setAllPlaces(remaining);
          }
        });
    }
  };
    
      if (isLoading) {
        return <Loading />;
      }
    return (
        <div>
      <div className=" manage-place">
        <div className="container">
          <h1 className="text-dark fw-bold pt-5 pb-3 fs-1">
            Remove Places
          </h1>
          <Table striped hover responsive variant="dark">
            <thead>
              <tr className="bg-dark text-white">
                <th>Index</th>
                <th>place Name</th>
                <th>place Category</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allPlaces.map((place, index) => (
                <tr key={place._id}>
                  <td>{index + 1}</td>
                  <td>{place.name}</td>
                  <td>{place.category}</td>
                  <td>
                    <Button
                      className="px-3 btn-danger"
                      onClick={() => handleDeletePlace(place._id)}
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

export default ManagePlaces;