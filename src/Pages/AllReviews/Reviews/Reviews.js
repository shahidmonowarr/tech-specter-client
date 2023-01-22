import { Toast } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Card, Row, Spinner } from "react-bootstrap";
import Review from '../Review/Review';
import './Reviews.css';


const Reviews = () => {
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews]=useState();
    useEffect(() => {
        fetch("https://tech-specter.onrender.com/reviews")
          .then((res) => res.json())
          .then((data) => {
            setReviews(data);
            setLoading(false);
          })
          .catch((error) => Toast.error(error.message));
      }, []);

      const filteredReviews = reviews?.filter(
        (review) => review.category === "website"
      );

    return (
        <div
    id="reviews"
    style={{ overflow: "hidden" }}
    className="reviews p-md-3"
  >

      <div className="container mb-5 py-4">
        <div className="contact-title text-center">
          <h2>
            Review
            <p className="fs-6 fw-normal mt-2">What our client say!</p>
          </h2>
        </div>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="danger" />
          </div>
        ) : (
          <Card className="mt-5 mb-5">
              <Row>
            {filteredReviews?.map((review) => (
              <Review key={review._id} review={review} />
            ))}
          </Row>
          </Card>
        )}
      </div>
        </div>
    );
};

export default Reviews;