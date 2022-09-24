import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CourseDetails.css";
import { Col, Container, Row, Toast } from "react-bootstrap";
import Rating from "react-rating";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import useCourseDetails from "../../../hooks/useCourseDetails/useCourseDetails";

const CourseDetails = () => {
  const { serviceId } = useParams();
  const [course] = useCourseDetails(serviceId);

  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch("https://tech-specter.onrender.com/reviews")
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
                    <Card style={{ width: 'auto' }} className="ps-3 py-2">
                      <h6>{review.name}</h6>
                      <h6>
                        <Rating
                          className="text-warning"
                          emptySymbol="far fa-star"
                          fullSymbol="fas fa-star"
                          initialRating={review.rating}
                          readonly
                        />{" "}
                        {review.rating}
                      </h6>
                      <small>{review.description}</small>
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
              <Rating defaultValue={5} fullSymbol="fas fa-star" />
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
                <Button className="me-2" variant="danger">Order Now</Button>
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
