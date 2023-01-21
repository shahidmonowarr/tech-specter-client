import axios from "axios";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import './AddReview.css';

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const [rating, setRating] = useState(5);
  const [user] = useAuthState(auth);
  const onSubmit = (data) => {
    // console.log(data);
    data.rating = rating;

    axios.post("https://tech-specter-server.vercel.app/reviews", data).then((res) => {
      if (res.data.insertedId) {
        toast("Review Added Successfully");
        reset();
      }
      // console.log(res);
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
            <input className="form-control w-75 mb-1" {...register("name")} value={user?.displayName} />{" "}
            <select
                {...register("category")}
                type="text"
                className="form-control md-form w-75 mb-1"
              >
                <option selected disabled>
                  Review is About:
                </option>
                <option>course</option>
                <option>travel</option>
                <option>website</option>
              </select> 
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
            <input className="form-control w-75 mb-1" 
              type="text"
              {...register("description")}
              placeholder="description"
            />{" "}
            <input className="form-control w-75 mb-1 submit-btn" type="submit" />
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default AddReview;
