import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AddPlace = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        
        axios.post('http://localhost:5000/travel', data)
            .then(res => {
                if (res.data.insertedId) {
                    toast('Place Added Successfully');
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
        <h2 className="text-secondary fw-bold text-center banner-title">Add a Place</h2>
            <div className="container pt-1"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name",)} placeholder="name" /> <br />
                <input type="number"{...register("price")} placeholder="price" /> <br />
                <input type="text" {...register("image")} placeholder="image" /> <br />
                <input type="text" {...register("category")} placeholder="ocean / mountain / heritage" /> <br />
                <input type="date" {...register("date")} /> <br />
                <input type="text" {...register("description")} placeholder="description" /> <br />
                <input className='submit-btn' type="submit" />
            </form>
        </Col>
      </Row>
            
        </div>
    );
};

export default AddPlace;