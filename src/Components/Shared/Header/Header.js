import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
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
        <Navbar.Toggle />
        <Navbar.Collapse data-toggle="offcanvas">
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
            {/* {user ?
                                <Navbar.Text>
                                <a style={{ textDecoration: "none" }} href="#login"> {user?.displayName}</a>
                            </Navbar.Text>
                                :
                                <Nav.Link as={Link} to="/login"></Nav.Link>}
            {user ? <Button variant="outline-success" onClick={logOut} type="button" className="btn btn-light ms-2">Sign Out</Button>: <Nav.Link as={HashLink} to="/login">Login</Nav.Link>} */}

           {
            user? ( <NavDropdown className="text-uppercase fw-bold shadow-lg" title={user?.displayName} id="collasible-nav-dropdown">
              
            <NavDropdown.Item><Button onClick={logOut} type="button" className="btn btn-dark rounded-3 px-auto">Sign Out</Button></NavDropdown.Item>
            
          </NavDropdown>):(<Nav.Link className="fw-bold shadow-sm" as={HashLink} to="/login">Login</Nav.Link>)
           }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
