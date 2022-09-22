import axios from 'axios';
import React from 'react';
import './AddCourse.css';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';

const AddCourse = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        
        axios.post('https://tech-specter.onrender.com/course', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
                console.log(res);
            })

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
        <h2 className="text-secondary fw-bold text-center banner-title">Add a Course</h2>
            <div className="container pt-1"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name",)} placeholder="name" /> <br />
                <input type="number"{...register("price")} placeholder="price" /> <br />
                <input type="text" {...register("image")} placeholder="image" /> <br />
                <input type="text" {...register("category")} placeholder="development / design / marketing" /> <br />
                <input type="text" {...register("description")} placeholder="description" /> <br />
                <input className='submit-btn' type="submit" />
            </form>
        </Col>
      </Row>
            
        </div>
    );
};

export default AddCourse;