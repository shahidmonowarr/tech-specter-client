import axios from "axios";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddPlace = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);

    axios.post("https://tech-specter-server.vercel.app/travel", data).then((res) => {
      if (res.data.insertedId) {
        toast("Place Added Successfully");
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
            src="https://i.ibb.co/GRjJqPC/14245130-My-April8.jpg"
            alt=""
          />
        </Col>
        <Col md="6">
          <div className="card py-2 mb-3">
            <h2 className="text-secondary fw-bold text-center banner-title">
              Add a Place
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control w-75 mb-1"
                {...register("name")}
                placeholder="name"
              />
              <input
                className="form-control w-75 mb-1"
                type="number"
                {...register("price")}
                placeholder="price"
              />
              <input
                className="form-control w-75 mb-1"
                type="text"
                {...register("image")}
                placeholder="image"
              />
              <input
                className="form-control w-75 mb-1"
                type="text"
                {...register("image2")}
                placeholder="image 2"
              />
              <input
                className="form-control w-75 mb-1"
                type="text"
                {...register("image3")}
                placeholder="image 2"
              />
              <select
                {...register("category")}
                className="form-control md-form w-75 mb-1"
              >
                <option selected disabled>
                  Select Category:
                </option>
                <option>ocean</option>
                <option>mountain</option>
                <option>city</option>
              </select>
              <input
                className="form-control w-75 mb-1"
                type="text"
                {...register("period")}
                placeholder="visit period"
              />
              <input
                className="form-control w-75 mb-1"
                type="text"
                {...register("description")}
                placeholder="description 1"
              />
              <input
                className="form-control w-75 mb-1"
                type="text"
                {...register("description2")}
                placeholder="description 2"
              />
              <input
                className="form-control w-75 mb-1"
                type="text"
                {...register("description3")}
                placeholder="description 2"
              />
              <input className="form-control w-75 submit-btn" type="submit" />
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AddPlace;
