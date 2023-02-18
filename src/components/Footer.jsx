import React from 'react'
import { Container } from 'react-bootstrap'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import '../components/Footer.css'

function Footer() {
  return (
    <Container fluid className='bg-black text-light'>
        <Container className='p-5'>
            <h1 className='text-center'>Me puedes encontrar aqui</h1>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='fs-1 d-flex justify-content-between align-items-center icon-box'>
                <a href='https://github.com/Nandem1' target='_blank'><FaGithub/></a>
                <a href='https://www.linkedin.com/in/vicente-ignacio-aguirre-caroca-1b6598231/' target='_blank'><FaLinkedin/></a>
                <a href='https://twitter.com/Nandemonaiya22' target='_blank'><FaTwitter/></a>
                <a href='https://www.instagram.com/_.nnd1/' target='_blank'><FaInstagram/></a>
                <a href='mailto:vicenteignacioac22@gmail.com'><FaMailBulk/></a>
                <a href='https://api.whatsapp.com/send/?phone=56964562320' target='_blank'><FaWhatsapp/></a>
              </div>
            </div>
        </Container>
    </Container>
  )
}

export default Footer