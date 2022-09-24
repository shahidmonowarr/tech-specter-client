import React from 'react';
import './SingleCourse.css';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SingleCourse = ({singleCourse}) => {
    const { _id, name, description, price, image } = singleCourse;
    const navigate = useNavigate();

    const navigateToCourseDetails = id=>{
      navigate(`/courseDetails/${id}`);
      // console.log(navigate);
    }

    return (
        <Col className="my-3 text-center" sm={12} md={6} lg={4}>
          <Card style={{ height: "97%" }} className="mx-1 mb-3  shadow">
            <div className="text-center">
              <Card.Img
                style={{ width: "80%", height: "200px" }}
                variant="top"
                src={image}
              />
            </div>
            <Card.Body>
              <Card.Title style={{ color: "#42a5f5" }} className="text-uppercase">
                {name}
              </Card.Title>
              <Card.Title>Price: {price}.00 BDT</Card.Title>
              <Card.Text>{description.slice(0,160)}...</Card.Text>
              
                <button onClick={()=> navigateToCourseDetails(_id)} className="btn  btn-danger">See Details</button>
            </Card.Body>
          </Card>
      </Col>
    );
};

export default SingleCourse;