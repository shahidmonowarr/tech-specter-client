import axios from "axios";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios.post("https://tech-specter-server.vercel.app/blogs", data).then((res) => {
      if (res.data.insertedId) {
        toast("Blog Added Successfully");
        reset();
      }
      console.log(res);
    });
  };
  return (
    <div style={{ height: "auto" }} className="container add-product">
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
          <div className="card py-2">
            <h2 className="text-secondary fw-bold text-center banner-title">
              Add a Blog
            </h2>

            <form className=" " onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control md-form w-75 mb-1"
                {...register("name")}
                placeholder="name"
              />
              <input
                className="form-control md-form w-75 mb-1"
                type="text"
                {...register("image")}
                placeholder="image"
              />
              <select
                {...register("category")}
                className="form-control md-form w-75 mb-1"
              >
                <option selected disabled>
                  Select Category:
                </option>
                <option>development</option>
                <option>design</option>
                <option>marketing</option>
                <option>travel</option>
                <option>health</option>
              </select>
              <input
                className="form-control md-form w-75 mb-1"
                type="text"
                {...register("description")}
                placeholder="description"
              />
              <input
                className="form-control md-form w-75 mb-1"
                type="text"
                {...register("desTitle1")}
                placeholder="des title1"
              />
              <input
                className="form-control w-75 mb-1"
                type="text"
                {...register("description1")}
                placeholder="description 1"
              />
              <input
                className="form-control w-75 mb-1"
                type="text"
                {...register("desTitle2")}
                placeholder="des title2"
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
                {...register("desTitle3")}
                placeholder="des title3"
              />
              <input
                className="form-control w-75 mb-1"
                type="text"
                {...register("description3")}
                placeholder="description 3"
              />
              <input
                className="form-control w-75 mb-1"
                type="text"
                {...register("desTitle4")}
                placeholder="des title4"
              />
              <input
                className="form-control w-75 mb-1"
                type="text"
                {...register("description4")}
                placeholder="description 4"
              />
              <input
                className="form-control w-75 mb-1"
                type="text"
                {...register("desTitle5")}
                placeholder="des title5"
              />
              <input
                className="form-control w-75 mb-1"
                type="text"
                {...register("description5")}
                placeholder="description 5"
              />
              <input
                className="form-control w-75 mb-1 submit-btn"
                type="submit"
              />
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AddBlog;
