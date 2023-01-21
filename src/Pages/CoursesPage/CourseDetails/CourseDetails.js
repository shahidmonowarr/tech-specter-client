import React, { useEffect, useState } from "react";
import { Col, Container, Row, Toast } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import PageTitle from "../../../Components/Shared/PageTitle/PageTitle";
import useCourseDetails from "../../../hooks/useCourseDetails/useCourseDetails";
import "./CourseDetails.css";

const CourseDetails = () => {
  const { serviceId } = useParams();
  const [course] = useCourseDetails(serviceId);

  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch("https://tech-specter-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((error) => Toast.error(error.message));
  }, []);

  const filteredReviews = reviews?.filter(
    (review) => review.category === "course"
  );
  // console.log(filteredReviews);

  return (
    <Container>
      <PageTitle title="Course Details"></PageTitle>
      <h1
        style={{
          textTransform: "uppercase",
          fontWeight: "bolder",
          fontSize: "35px",
        }}
      >
        {course.category}
      </h1>
      <Row className="text-start">
        <Col>
          <img
            className="img-fluid"
            alt=""
            src={course.image}
            style={{ height: "auto" }}
          />
          <Card style={{ width: "auto" }}>
            <Card.Title style={{ paddingTop: "20px", marginLeft: '5px' }}>
              Instructor Details:
            </Card.Title>
            <Row>
              <Col>
                <Card.Img
                  style={{ width: "100%", marginTop: "80px", marginLeft: "10px" }}
                  src="https://i.ibb.co/m83YDnf/elegant-young-teacher-with-brunette-hair-stylish-light-shirt-black-striped-suit-glasses-holding-writ.jpg"
                />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Text className="fw-bold">Junior Ahmed</Card.Text>
                  <small style={{ color: "lightBlack" }}>
                    A technology entrepreneur. He himself is a full stack web
                    developer and software architect and has been involved in
                    the web development and software profession for over 14
                    years.
                  </small>
                  <br />
                  <Card.Text style={{ fontWeight: "bold", color: "red" }}>
                    <small>juniorahmed.cse@gmail.com</small>{" "}
                    <small>Phone: +880 1711 000 000</small>{" "}
                    <small>
                      Reviews:{" "}
                      <Rating
                        className="text-warning"
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        initialRating="4.5"
                        readonly
                      />
                    </small>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="my-2">
            <h6 className="fw-bold ms-1 mt-1">Reviews</h6>
            <Row>
              {filteredReviews?.map((review) => (
                <Col
                  key={review._id}
                  review={review}
                  className="my-1 text-start"
                  sm={12}
                  md={3}
                  lg={3}
                >
                  <Card
                    style={{ width: "auto", height: "140px" }}
                    className="ps-3 py-2"
                  >
                    <small>
                      <h6>{review.name}</h6>
                      <p>
                        <Rating
                          className="text-warning"
                          emptySymbol="far fa-star"
                          fullSymbol="fas fa-star"
                          initialRating={review.rating}
                          readonly
                        />{" "}
                        {review.rating}
                      </p>
                      <small>{review.description}</small>
                    </small>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header
              style={{ textTransform: "uppercase", fontWeight: "bold" }}
              as="h4"
            >
              {course.name}
            </Card.Header>
            <h6 className="rating">
            <Rating
                          className="text-warning pb-2 mt-2"
                          emptySymbol="far fa-star"
                          fullSymbol="fas fa-star"
                          initialRating="4.5"
                          readonly
                        />{" "}
              <br />
              <small>based on 129 reviews</small>
            </h6>

            <hr />
            <Card.Body>
              <Card.Title>
                Price:
                {course.price} BDT
              </Card.Title>
              <Card.Text>{course.description}</Card.Text>
              <Card.Title>What we provide?</Card.Title>
              <ul>
                <li>24 hours customer support</li>
                <li>Team of 4 peoples will work on your project</li>
                <li>Immediate solution to your problem </li>
                <li>Commitment to deliver your project on time</li>
              </ul>
              <Link to={`/checkOut/${serviceId}`}>
                <Button className="me-2" variant="danger">
                  Enroll Now
                </Button>
              </Link>
              <Link to="/dashboard/addReview">
                <Button className="mt-2" variant="danger">
                  Add Review
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseDetails;
