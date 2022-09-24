import React, { useEffect, useState } from "react";
import "./AllCourses.css";
import { Button, ButtonGroup, Container, Row, Spinner } from "react-bootstrap";
import { Toast } from "bootstrap";
import SingleCourse from "../SingleCourse/SingleCourse";

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

  const filterCourses = (courseCate) => {
    const cateServices = courses.filter((currentCourses) => {
      return currentCourses.category === courseCate;
    });
    if (courseCate === "All") {
      setTempCourses(courses);
    } else {
      setTempCourses(cateServices);
    }
  };

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
          <h2 className="text-center text-uppercase mt-5 mb-4 feature">
            LATEST courses
          </h2>
          <p style={{ maxWidth: "500px" }} className="mx-auto text-center">
            What We provide to Our Customer!
          </p>
          <Container>
            <ButtonGroup className="flex-wrap" aria-label="Basic example">
              <Button variant="secondary" onClick={() => filterCourses("All")}>
                All
              </Button>
              <Button
                variant="secondary"
                onClick={() => filterCourses("development")}
              >
                Development
              </Button>
              <Button
                variant="secondary"
                onClick={() => filterCourses("design")}
              >
                Design
              </Button>
              <Button
                variant="secondary"
                onClick={() => filterCourses("marketing")}
              >
                Marketing
              </Button>
            </ButtonGroup>
          </Container>
          <Row>
            {tempCourses.length === 0
              ? courses?.map((singleCourse) => (
                  <SingleCourse
                    key={singleCourse._id}
                    singleCourse={singleCourse}
                  />
                ))
              : tempCourses.map((singleCourse) => (
                  <SingleCourse
                    key={singleCourse._id}
                    singleCourse={singleCourse}
                  ></SingleCourse>
                ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default AllCourses;
