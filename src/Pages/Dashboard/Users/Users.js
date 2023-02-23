import React, { useState } from "react";
import { Pagination, Table } from "react-bootstrap";
import { useQuery } from "react-query";
import Loading from "../../../Components/Shared/Loading/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const pageSize = 10; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1); // Current page number

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://tech-specter.onrender.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const totalPages = Math.ceil(users.length / pageSize); // Total number of pages
  const startIndex = (currentPage - 1) * pageSize; // Index of first item on current page
  const endIndex = startIndex + pageSize; // Index of last item on current page
  const currentUsers = users.slice(startIndex, endIndex); // Items to display on current page

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h2>All Users [Total {users.length}] </h2>
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr className="bg-dark text-white">
            <th>Index</th>
            <th>User Email</th>
            <th>Make Admin</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <UserRow
              key={user._id}
              user={user}
              index={startIndex + index}
              refetch={refetch}
            ></UserRow>
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
  );
};

export default Users;
