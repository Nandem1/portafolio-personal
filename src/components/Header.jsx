import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="black">
      <Container>
        <Navbar.Brand className='text-white m-auto fs-3'>Portafolio</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header