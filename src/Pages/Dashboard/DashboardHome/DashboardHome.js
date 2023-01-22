import axios from "axios";
import { reload, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const DashboardHome = () => {
  const [userProfile, setUserProfile] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`https://tech-specter.onrender.com/userProfile?email=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          // console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          console.log("data", data);
          const myProfile = data.filter(
            (singleData) => singleData.email === user.email
          );
          setUserProfile(myProfile);
        });
    }
  }, [user]);

  const handleProfileUpdate = (event) => {
    event.preventDefault();
    const profile = {
      name: user.displayName,
      email: user.email,
      image: event.target.image.value,
      bloodGroup: event.target.bloodGroup.value,
      status: event.target.status.value,
      phone: event.target.phone.value,
      address: event.target.address.value,
      about: event.target.about.value,
    };
    axios.post("https://tech-specter.onrender.com/userProfile", profile).then((res) => {
      const { data } = res;
      if (data.insertedId) {
        toast("Your Profile is Updated");
        event.target.reset();
        reload();
        navigate("/dashboard");
      }
      // console.log(res);
    });
  };
  return (
    <div style={{ height: "auto" }} className="container add-product">
      <h2>
        Welcome to Dashboard,{" "}
        <span style={{ color: "#e64088" }}>{user?.displayName}</span>.
      </h2>
      <Row>
        <Col md="6">
          {userProfile.map((profile) => (
            <Card
              key={profile._id}
              profile={profile}
              style={{ height: "97%" }}
              className="mx-1 mb-3  shadow"
            >
              <div className="text-center">
                <Card.Img
                  style={{ width: "50%", marginTop: "10px", height: "auto" }}
                  variant="top"
                  src={profile.image}
                />
              </div>
              <Card.Body className="text-start  ">
                <Card.Title
                  style={{ color: "#42a5f5" }}
                  className="text-uppercase"
                >
                  Name: {profile.name}
                </Card.Title>
                <Card.Title>Email: {profile.email}</Card.Title>
                <Card.Title>
                  Blood Group:{" "}
                  <span className="text-uppercase">{profile.bloodGroup}</span>
                </Card.Title>
                <Card.Title>Phone NO: {profile.phone}</Card.Title>
                <Card.Text>Present Status: {profile.status}</Card.Text>
                <Card.Text>Address: {profile.address}</Card.Text>
                <Card.Text>About Me: {profile.about}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md="6">
          <div className="card py-2">
            <h3 className="text-secondary text-uppercase fw-bold text-center">
              Update Your Profile
            </h3>
            <form onSubmit={handleProfileUpdate}>
              <input
                className="form-control md-form w-75 mb-1"
                value={user?.displayName}
                disabled
                type="text"
              />
              <input
                className="form-control md-form w-75 mb-1"
                value={user?.email}
                disabled
                type="email"
              />
              <input
                className="form-control md-form w-75 mb-1"
                type="text"
                name="image"
                placeholder="Profile Image URL"
              />
              <input
                className="form-control text-uppercase md-form w-75 mb-1"
                type="text"
                name="bloodGroup"
                placeholder="Your Blood Group"
              />
              <input
                className="form-control md-form w-75 mb-1"
                type="text"
                name="status"
                placeholder="Your Current Status"
              />
              <input
                className="form-control w-75 mb-1"
                required
                type="number"
                placeholder="01xxxxxxxxx"
                name="phone"
              />
              <input
                className="form-control w-75 mb-1"
                type="text"
                name="address"
                placeholder="Your Address"
              />
              <input
                className="form-control w-75 mb-1"
                type="text"
                name="about"
                placeholder="About You"
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

export default DashboardHome;
