import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <div className='logo'>
            <img width="45px" src={logo} alt="" />
            <h5>TECH SPECTER</h5>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/dashboard">Dashboard</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item className='fw-bold' href="#action/3.1">Blood</NavDropdown.Item>
              <NavDropdown.Item className='fw-bold' href="#action/3.1">Travel</NavDropdown.Item>
              <NavDropdown.Item className='fw-bold' href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;