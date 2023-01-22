import React, { useEffect, useState } from "react";
import { Table, Toast } from "react-bootstrap";

const AvailableDonor = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    fetch("https://tech-specter.onrender.com/blood")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDonors(data);
      })
      .catch((error) => Toast.error(error.message));
  }, []);
  return (
    <div>
      <div className="manage-order col-lg-10 mx-auto">
        <div className="card my-5">
          <h5 className="text-uppercase card-header danger-color white-text text-center py-4">
            <strong>Available Donor List:</strong>
          </h5>
          <Table striped bordered hover responsive variant="dark">
            <thead>
              <tr className="bg-dark text-white">
                <th>Index</th>
                <th>Donor Name</th>
                <th>Donor Email</th>
                <th>Phone No.</th>
                <th>Blood Group</th>
                <th>Last Donate Date</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {donors.map((donor, index) => (
                <tr key={donor._id}>
                  <td>{index + 1}</td>
                  <td>{donor.name}</td>
                  <td>{donor.email}</td>
                  <td>{donor.phone}</td>
                  <td>{donor.bloodGroup}</td>
                  <td>{donor.lastBloodDonateDate}</td>
                  <td>{donor.address}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AvailableDonor;
