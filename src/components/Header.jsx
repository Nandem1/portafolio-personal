import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" fixed='top'>
    <Container>
      <Navbar.Brand href="#home">Portafolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#features">Habilidades</Nav.Link>
          <Nav.Link href="#pricing">Proyectos</Nav.Link>
          <Nav.Link href="#pricing">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header