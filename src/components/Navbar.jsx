import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

function Header() {
  // Esto es para que cambie el diseño del link cuando esta activo o inactivo.
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive")

  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Portafolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link><NavLink className={setActiveClass} to="/portafolio-personal/">Sobre mi</NavLink></Nav.Link>
          <Nav.Link><NavLink className={setActiveClass} to="/skills">Habilidades</NavLink></Nav.Link>
          <Nav.Link><NavLink className={setActiveClass} to="/projects">Proyectos</NavLink></Nav.Link>
          <Nav.Link><NavLink className={setActiveClass} to="/contact">Contacto</NavLink></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header