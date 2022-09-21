import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import usePlaceDetails from "../../../hooks/usePlaceDetails/usePlaceDetails";


const PlaceDetails = () => {
    const { serviceId } = useParams();
    const [place] = usePlaceDetails(serviceId);
    return (
        <Container >
      <h1 style={{textTransform:'uppercase', fontWeight:'bolder', fontSize:'60px'}}>{place.category}</h1>
      <Row className="text-start">
        <Col>
          <img
            className="img-fluid"
            alt=""
            src={place.image}
            style={{ height: "500px" }}
          />
        </Col>
        <Col>
          <Card>
            <Card.Header style={{textTransform:'uppercase', fontWeight:'bold'}} as="h4">{place.name}</Card.Header>
            <h6 className="rating"><Rating 
            defaultValue={5}
            fullSymbol="fas fa-star"
          /><br/><small>based on 120 reviews</small></h6>
          
          <hr />
            <Card.Body>
                <Card.Title>Price: 
                {place.price} BDT
              </Card.Title>
                <Card.Title>Date: 
                {place.date}
              </Card.Title>
              <Card.Text>
                {place.description}
              </Card.Text>
              <Card.Title>
                What we provide?
              </Card.Title>
              <ul>
                  <li>24 hours customer support.</li>
                  <li>Team of 4 peoples will always ready to help.</li>
                  <li>Immediate solution to your problem.</li>
                  <li>Commitment to make your travel safe.</li>
                </ul>
              <Link to={`/placeBooking/${serviceId}`}>
              <Button variant="danger">Book Now</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    );
};

export default PlaceDetails;