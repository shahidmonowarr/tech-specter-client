import { Toast } from "bootstrap";
import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Pagination,
  Row,
  Spinner
} from "react-bootstrap";
import PageTitle from "../../../Components/Shared/PageTitle/PageTitle";
import SingleCourse from "../SingleCourse/SingleCourse";
import "./AllCourses.css";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const count = courses.length;
  useEffect(() => {
    fetch("https://tech-specter.onrender.com/course")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => Toast.error(error.message));
  }, []);

  const [tempCourses, setTempCourses] = useState(courses);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(6);

  const filterCourses = (courseCate) => {
    const cateServices = courses.filter((currentCourses) => {
      return currentCourses.category === courseCate;
    });
    if (courseCate === "All") {
      setTempCourses(courses);
    } else {
      setTempCourses(cateServices);
    }
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(tempCourses.length / coursesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = tempCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  return (
    <>
      {!count ? (
        <div className="text-center my-5 private-spinner py-5">
          <Spinner variant="danger" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h6>Loading...</h6>
        </div>
      ) : (
        <Container className="mb-5">
          <PageTitle title="Courses"></PageTitle>
          <h2 className="text-center text-uppercase mt-5 mb-4 feature">
            LATEST courses
          </h2>
          <p style={{ maxWidth: "500px" }} className="mx-auto text-center">
            What We provide to Our Customer!
          </p>
          <Container>
            <ButtonGroup className="flex-wrap" aria-label="Basic example">
              <Button
                className="mx-2 my-2 rounded-3"
                variant="secondary"
                onClick={() => filterCourses("All")}
              >
                All
              </Button>
              <Button
                className="mx-2 my-2 rounded-3"
                variant="secondary"
                onClick={() => filterCourses("development")}
              >
                Development
              </Button>
              <Button
                className="mx-2 my-2 rounded-3"
                variant="secondary"
                onClick={() => filterCourses("design")}
              >
                Design
              </Button>
              <Button
                className="mx-2 my-2 rounded-3"
                variant="secondary"
                onClick={() => filterCourses("marketing")}
              >
                Marketing
              </Button>
            </ButtonGroup>
          </Container>
          <Row>
            {currentCourses.length === 0
              ? courses?.map((singleCourse) => (
                  <SingleCourse
                    key={singleCourse._id}
                    singleCourse={singleCourse}
                  />
                ))
              : currentCourses.map((singleCourse) => (
                  <SingleCourse
                    key={singleCourse._id}
                    singleCourse={singleCourse}
                  ></SingleCourse>
                ))}
          </Row>
          <div className="d-flex justify-content-center">
          <Pagination className="mt-4">
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
          </div>
        </Container>
      )}
    </>
  );
};

export default AllCourses;
