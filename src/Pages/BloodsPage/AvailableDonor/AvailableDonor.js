import React, { useEffect, useState } from "react";
import { Pagination, Table, Toast } from "react-bootstrap";

const AvailableDonor = () => {
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
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

  const totalPages = Math.ceil(donors.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentDonors = donors.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="manage-order col-lg-10 mx-auto">
        <div className="card my-5">
          <h5 className="text-uppercase card-header danger-color white-text text-center py-4">
            <strong>Available Donor List [Total {currentDonors.length}]</strong>
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
              {currentDonors.map((donor, index) => (
                <tr 
                key={donor._id}
                donor={donor}
                index={startIndex + index + 1}
                >
                  <td>{startIndex + index + 1}</td>
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

export default AvailableDonor;
