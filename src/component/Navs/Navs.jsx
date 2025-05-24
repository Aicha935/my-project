// Navs.jsx
import React from "react";
import './Navs.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.jpg';

const Navs = () => {
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container className="nav-container">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/explore">Explore Food</Nav.Link>
            <Nav.Link as={Link} to="/review">Review</Nav.Link>
            <Nav.Link as={Link} to="/faq">Faq</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link id="lastnav">236856589765</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
