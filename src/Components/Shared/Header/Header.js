import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const logOut = ()=>{
    signOut(auth);
  }

    return (
        <Navbar bg="dark" variant='dark'sticky='top' expand="lg">
      <Container>
        <Navbar.Brand as={HashLink} to="/home">
            <div className='logo'>
            <img width="30px" src={logo} alt="" />
            <h5>TECH SPECTER</h5>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={HashLink} to="/services">Services</Nav.Link>
            {/* <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item className='fw-bold' href="#action/3.1">Blood</NavDropdown.Item>
              <NavDropdown.Item className='fw-bold' href="#action/3.1">Travel</NavDropdown.Item>
              <NavDropdown.Item className='fw-bold' href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown> */}
            {user ?
                                <Navbar.Text>
                                <a style={{ textDecoration: "none" }} href="#login"> {user?.displayName}</a>
                            </Navbar.Text>
                                :
                                <Nav.Link as={Link} to="/login"></Nav.Link>}
            {user ? <button onClick={logOut} type="button" class="btn btn-light ms-2">Sign Out</button>: <Nav.Link as={HashLink} to="/login">Login</Nav.Link>}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;