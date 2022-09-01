import React from 'react';
import './SingleCourse.css';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleCourse = ({singleCourse}) => {
    const { _id, name, description, price, image } = singleCourse;
    return (
        <Col className="my-3 text-center" sm={12} md={6} lg={4}>
          <Card style={{ height: "105%" }} className="mx-1  shadow">
            <div className="text-center">
              <Card.Img
                style={{ width: "80%", height: "80%" }}
                variant="top"
                src={image}
              />
            </div>
            <Card.Body>
              <Card.Title style={{ color: "#42a5f5" }} className="text-uppercase">
                {name}
              </Card.Title>
              <Card.Title>Price: {price}.00 $</Card.Title>
              <Card.Text>{description}...</Card.Text>
              <Link to={`/placeorder/${_id}`}>
                <button className="btn mt-2 btn-danger">Buy Now</button>
              </Link>
            </Card.Body>
          </Card>
      </Col>
    );
};

export default SingleCourse;