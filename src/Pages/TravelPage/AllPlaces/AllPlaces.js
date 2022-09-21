import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Row, Spinner } from 'react-bootstrap';
import { Toast } from "bootstrap";
import SinglePlace from '../SinglePlace/SinglePlace';

const AllPlaces = () => {
    const [places, setPlaces] = useState([]);
  const count = places.length;

  useEffect(() => {
    fetch("http://localhost:5000/travel")
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
      })
      .catch((error) => Toast.error(error.message));
  }, []);

  const [tempPlaces, setTempPlaces] = useState(places);

  const filterPlaces = (placeCate) => {
    const cateServices = places.filter((currentCourses) => {
      return currentCourses.category === placeCate;
    });
    if (placeCate === "All") {
        setTempPlaces(places);
    } else {
        setTempPlaces(cateServices);
    }
  };
    return (
        <>
      {!count ? (
        <div className="text-center my-5 private-spinner py-5">
          <Spinner variant="danger" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h6>Loading...</h6>
        </div>
      ) : (
        <Container className="mb-5">
          <h2 className="text-center text-uppercase mt-5 mb-4 feature">
            LATEST Places
          </h2>
          <p style={{ maxWidth: "500px" }} className="mx-auto text-center">
            What We provide to Our Customer!
          </p>
          <Container>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" onClick={() => filterPlaces("All")}>
                All
              </Button>
              <Button
                variant="secondary"
                onClick={() => filterPlaces("ocean")}
              >
                Ocean
              </Button>
              <Button
                variant="secondary"
                onClick={() => filterPlaces("mountain")}
              >
                Mountain
              </Button>
              <Button
                variant="secondary"
                onClick={() => filterPlaces("heritage")}
              >
                Heritage
              </Button>
            </ButtonGroup>
          </Container>
          <Row>
            {tempPlaces.length === 0
              ? places?.map((singlePlace) => (
                  <SinglePlace
                    kay={singlePlace._id}
                    singlePlace={singlePlace}
                  />
                ))
              : tempPlaces.map((singlePlace) => (
                  <SinglePlace
                    kay={singlePlace._id}
                    singlePlace={singlePlace}
                  ></SinglePlace>
                ))}
          </Row>
        </Container>
      )}
    </>
    );
};

export default AllPlaces;