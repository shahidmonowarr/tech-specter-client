import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../../Components/Shared/Loading/Loading';

const ManageCourses = () => {
    const {
        data: allCourses,
        setAllCourses,
        isLoading,
        refetch,
      } = useQuery("allCourses", () =>
        fetch("https://tech-specter-server.vercel.app/course", {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }).then((res) => res.json())
      );

      //for delete
  const handleDeleteCourse = (id) => {
    const proceed = window.confirm("Are Sure To Cancel This Order?");
    if (proceed) {
      const url = `https://tech-specter-server.vercel.app/course/${id}`;
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
            const remaining = allCourses.filter((course) => course._id !== id);
            setAllCourses(remaining);
          }
        });
    }
  };
    
      if (isLoading) {
        return <Loading />;
      }
    return (
        <div>
      <div className=" manage-course">
        <div className="container">
          <h1 className="text-dark fw-bold pt-5 pb-3 fs-1">
            Remove Courses
          </h1>
          <Table striped hover responsive variant="dark">
            <thead>
              <tr className="bg-dark text-white">
                <th>Index</th>
                <th>course Name</th>
                <th>course Category</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allCourses.map((course, index) => (
                <tr key={course._id}>
                  <td>{index + 1}</td>
                  <td>{course.name}</td>
                  <td>{course.category}</td>
                  <td>
                    <Button
                      className="px-3 btn-danger"
                      onClick={() => handleDeleteCourse(course._id)}
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

export default ManageCourses;