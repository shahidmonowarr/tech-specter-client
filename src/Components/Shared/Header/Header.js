import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { HashLink } from "react-router-hash-link";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  return (
    <Navbar
      style={{ backgroundColor: "#1c2331" }}
      variant="dark"
      sticky="top"
      expand="lg"
    >
      <Container>
        <Navbar.Brand as={HashLink} to="/home">
          <div className="logo">
            <img width="100%" src={logo} alt="logo" />
          </div>
        </Navbar.Brand>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars text-danger"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/services">
              Services
            </Nav.Link>
            {user && (
              <Nav.Link as={HashLink} to="/dashboard">
                Dashboard
              </Nav.Link>
            )}
           {
            user? ( <NavDropdown className="text-uppercase fw-bold shadow-lg" title={user?.displayName} id="collasible-nav-dropdown">
              
            <NavDropdown.Item><Button onClick={logOut} type="button" className="btn btn-dark rounded-3 px-auto">Sign Out</Button></NavDropdown.Item>
            
          </NavDropdown>):(<Nav.Link className="fw-bold shadow-sm" as={HashLink} to="/login">Login</Nav.Link>)
           }
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
