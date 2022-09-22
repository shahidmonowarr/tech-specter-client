import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Rating from "react-rating";
import { Col, Row } from "react-bootstrap";
import './AddReview.css';

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const [rating, setRating] = useState(5);
  const onSubmit = (data) => {
    console.log(data);
    data.rating = rating;

    axios.post("https://tech-specter.onrender.com/reviews", data).then((res) => {
      if (res.data.insertedId) {
        alert("Added Successfully");
        reset();
      }
      console.log(res);
    });
  };

  return (
    <div className="container add-product">
      <Row>
        <Col md="6">
          <img
            style={{ width: "100%", height: "auto" }}
            className="vert-move mt-1"
            src="https://i.ibb.co/2gWNYVp/7206475-3497822.jpg"
            alt=""
          />
        </Col>
        <Col md="6">
          <h2 className="text-center text-secondary mt-5">
            Please Add A Review
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} placeholder="name" /> <br />
            <input type="text" {...register("category")} placeholder="course / travel / website" /> 
            <div>
              <div>
                <h5>Rating</h5>
              </div>
              <div>
                <Rating
                  className="text-warning fs-3"
                  emptySymbol="far fa-star "
                  fullSymbol="fas fa-star "
                  onChange={(rate) => setRating(rate)}
                  initialRating={rating}
                  fractions={2}
                />
                <h4 className="d-inline-block ms-2">{rating}</h4>
              </div>
            </div>
            <input
              type="text"
              {...register("description")}
              placeholder="description"
            />{" "}
            <br />
            <input className="submit-btn" type="submit" />
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default AddReview;
