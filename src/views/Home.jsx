import { React } from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import './Home.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';

function Body() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <Container fluid className='text-white main mt-4'>
                <Container fluid className='main-box'>
                    <Row xs={1} sm={1} md={2} className='maininfo'>
                        <Col order={{ md: 2 }}>
                            <div className='d-flex justify-content-center align-items-center h-75 head-box'>
                                <div className='head-box bg-black bg-opacity-50 rounded-4'>
                                    <h1 className='mb-1'>¡Hola!, Bienvenidos a mi Portafolio</h1>
                                    <p className='fs-4'>Web Developer Trainee</p>
                                    <p className='mt-4 fs-4'>Mi nombre es Vicente Aguirre, tengo 24 años, soy estudiante de la carrera Fullstack Javascript en la academia Desafío LATAM, día a día me doy cuenta que el código me hace muy feliz.</p>
                                    <div className='mt-5'>
                                        <a href='https://www.linkedin.com/in/vicente-ignacio-aguirre-caroca-1b6598231/' target='_blank' className='btn btn-outline-light'><FaLinkedin className='fs-5 me-1 mb-1' />Linkedin</a>
                                        <a href='https://github.com/Nandem1' target='_blank' className='btn btn-outline-light ms-2'><FaGithub className='fs-5 me-1 mb-1' />Github</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className='alien'>
                        <Image className='img-fluid' src='https://i.gifer.com/Vp3M.gif' />
                    </div>
                </Container>
            </Container>
        </motion.div>
    )
}

export default Body