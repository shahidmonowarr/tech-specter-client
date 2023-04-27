import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateCourse = () => {
    const { courseId } = useParams();
    console.log(courseId);
    const { register, handleSubmit, reset } = useForm();
    const [course, setCourse] = useState({});
  
    useEffect(() => {
      axios.get(`https://tech-specter.onrender.com/course/${courseId}`).then((res) => {
        setCourse(res.data);
      });
    }, [courseId]);
  
    const onSubmit = (data) => {
      axios.put(`https://tech-specter.onrender.com/course/${courseId}`, data).then((res) => {
        if (res.data.modifiedCount) {
          toast("Updated Successfully");
          reset();
        }
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
            <div className="card py-2">
              <h2 className="text-secondary fw-bold text-center banner-title">
                Update Course
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="form-control w-75"
                  {...register("name")}
                  defaultValue={course.name}
                  placeholder="name"
                />{" "}
                <br />
                <input
                  className="form-control w-75"
                  type="number"
                  {...register("price")}
                  defaultValue={course.price}
                  placeholder="price"
                />{" "}
                <br />
                <input
                  className="form-control w-75"
                  type="text"
                  {...register("image")}
                  defaultValue={course.image}
                  placeholder="image"
                />{" "}
                <br />
                <select
                  {...register("category")}
                  className="form-control md-form w-75"
                  defaultValue={course.category}
                >
                  <option disabled>Select Category:</option>
                  <option value="development">development</option>
                  <option value="design">design</option>
                  <option value="marketing">marketing</option>
                </select>
                <br />
                <input
                  className="form-control w-75"
                  type="text"
                  {...register("description")}
                  defaultValue={course.description}
                  placeholder="description"
                />{" "}
                <br />
                <input className="form-control submit-btn" type="submit" />
              </form>
            </div>
          </Col>
        </Row>
      </div>
    );
  };
  
  export default UpdateCourse;