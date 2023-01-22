import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import img1 from '../../../images/review.jpg';
import './Review.css';

const Review = ({review}) => {
    const { name, description, rating } = review;
    return (
      <Col className="my-3 text-center" sm={12} md={6} lg={4}>
        <Card data-aos="zoom-in" style={{ minHeight: "345px" }} className="my-3">
      <Card.Img variant="top" className='img-top mt-5' src={img1} />
      <Card.Body className="text-center">
        <h5>
          {name}
        </h5>
        <h6>
          Rating:
          <Rating
            className="text-warning"
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            initialRating={rating}
            readonly
          />{" "}
          {rating}
        </h6>
        <Card.Text>{description?.slice(0, 140)}</Card.Text>
      </Card.Body>
    </Card>
    </Col>
    );
};

export default Review;