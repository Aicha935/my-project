// Navs.jsx
import React from "react";
import './Navs.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from './../../assets/logo.jpg';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Navs = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("🚪 Logged out successfully");
      navigate("/login");
    } catch (error) {
      alert("❌ Logout error: " + error.message);
    }
  };

  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container className="nav-container">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/explore">Explore Food</Nav.Link>
            <Nav.Link as={Link} to="/review">Reviews</Nav.Link>
            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link id="lastnav">236856589765</Nav.Link>
            <Nav.Link onClick={handleLogout} style={{ color: "red", fontWeight: "bold" }}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
