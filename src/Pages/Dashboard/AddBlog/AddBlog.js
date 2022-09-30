import axios from 'axios';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddBlog = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        
        axios.post('https://tech-specter.onrender.com/blogs', data)
            .then(res => {
                if (res.data.insertedId) {
                    toast('Blog Added Successfully');
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
        <h2 className="text-secondary fw-bold text-center banner-title">Add a Blog</h2>
            <div className="container"></div>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <div className='w-100 mb-1'><input {...register("name",)} placeholder="name" /> <br /></div>
                <div className='w-100 mb-1'><input type="text" {...register("image")} placeholder="image" /></div>
                <div className='w-100 mb-1'><input type="text" {...register("image2")} placeholder="image 2" /></div>
                <div className='w-100 mb-1'><input type="text" {...register("image3")} placeholder="image 3" /></div>
                <div className='w-100 mb-1'><input type="text" {...register("category")} placeholder="development / design / marketing /travel / health" /> </div>
                <div className='w-100 mb-1'><input type="text" {...register("description")} placeholder="description 1" /></div>
                <div className='w-100 mb-1'><input type="text" {...register("description2")} placeholder="description 2" /></div>
                <div className='w-100 mb-1'><input type="text" {...register("description3")} placeholder="description 2" /></div>
                <input className='submit-btn' type="submit" />
            </form>
        </Col>
      </Row>
            
        </div>
    );
};

export default AddBlog;