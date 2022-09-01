import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Rating from 'react-rating';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const [rating, setRating] = useState(5);
    const onSubmit = data => {
        console.log(data);
        data.rating = rating;

        axios.post('http://localhost:5000/reviews', data)
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
            <h2 className="text-center text-success my-4 py-2">Please Add A Review About Us</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name",)} placeholder="name" /> <br />
                <div>
                    <div><h5>Your Review</h5></div>
                    <div><Rating
                className="text-warning fs-3"
                emptySymbol="far fa-star "
                fullSymbol="fas fa-star "
                onChange={(rate) => setRating(rate)}
                initialRating={rating}
                fractions={2}
              />
              <h4 className="d-inline-block ms-2">{rating}</h4></div>
                </div>
                <input type="text" {...register("description")} placeholder="description" /> <br />
                <input className='submit-btn' type="submit" />
            </form>
        </div>
    );
};

export default AddReview;