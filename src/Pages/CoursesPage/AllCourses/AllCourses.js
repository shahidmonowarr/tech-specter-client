import React, { useEffect, useState } from 'react';
import './AllCourses.css';
import { Container, Row, Spinner } from 'react-bootstrap';
import { Toast } from 'bootstrap';
import SingleCourse from '../SingleCourse/SingleCourse';

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const count = courses.length;
    useEffect(() => {
        fetch("http://localhost:5000/course")
            .then(res => res.json())
            .then(data => {
              setCourses(data);
            })
            .catch((error) => Toast.error(error.message));
    }, [])
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
          <Row>
            {courses?.map((singleCourse) => (
              <SingleCourse kay={singleCourse._id} singleCourse={singleCourse} />
            ))}
          </Row>
        </Container>
      )}
    </>
    );
};

export default AllCourses;