import { React, useState, useEffect } from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'
import profile from '../assets/profile.jpg'
import '../components/Body.css'
import reactlogo from '../assets/reactlogo.png'
import jslogo from '../assets/jslogo2.png'
import htmlcss from '../assets/htmlcss1.png'
import bootstraplogo from '../assets/bootstrap-logo-vector.svg'
import { FaLinkedin, FaGithub, FaChrome, FaArrowUp } from "react-icons/fa";
import reapi from '../assets/reapi.png'
import conversorjs from '../assets/conversorjs.png'
import galeriareact from '../assets/galeriareact1.png'
import fe1dh from '../assets/fe1dh.png'
import desafiogrid from '../assets/desafiogrid.png'
import desafio7introweb from '../assets/desafio7introweb.png'
import profilereal from '../assets/profilereal.jpg'

function Body() {
    const [showButton, setShowButton] = useState(false)


    useEffect(() => {
        const botonArriba = document.querySelector("#boton-arriba")

        botonArriba.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        })

    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    })


    return (
        <>
            <Container fluid className='text-white main'>
                <Container>
                    <Row xs={1} sm={1} md={2} className='maininfo py-4'>
                        <Col>
                            <div className='d-flex justify-content-center align-items-center h-100 w-100'>
                                <img className='shadow-lg border border-2 border-dark profile' src={profilereal} />
                            </div>
                        </Col>
                        <Col>
                            <div className='d-flex justify-content-center align-items-center w-100 h-100 head-box mt-2'>
                                <div className='head-box border bg-black bg-opacity-75 p-4 rounded-4'>
                                    <h1>¡Hola!, Bienvenidos a mi Portafolio</h1>
                                    <p className='fs-3'>Web Developer Trainee</p>
                                    <p>Mi nombre es Vicente Aguirre, tengo 24 años, soy estudiante de la carrera Fullstack Javascript en la academia Desafío LATAM y Certified Tech Developer en la academia Digital House, día a día me doy cuenta que el código me hace muy feliz.</p>
                                    <a href='https://www.linkedin.com/in/vicente-ignacio-aguirre-caroca-1b6598231/' target='_blank' className='btn btn-outline-light'><FaLinkedin className='fs-5 me-1 mb-1' />Linkedin</a>
                                    <a href='https://github.com/Nandem1' target='_blank' className='btn btn-outline-light ms-2'><FaGithub className='fs-5 me-1 mb-1' />Github</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='bg-black text-white'>
                <div>
                    <h2 className='text-center fs-1 py-5'>Mi stack</h2>
                </div>
                <Row xs={2} sm={2} md={4} className='pb-5 g-4'>
                    <Col>
                        <div className='d-flex flex-column align-items-center w-75 m-auto'>
                            <img src={reactlogo} className='img-fluid stack-img mb-3' />
                            <h3>Reactjs</h3>
                        </div>
                    </Col>
                    <Col>
                        <div className='d-flex flex-column align-items-center w-75 m-auto'>
                            <img src={jslogo} className='img-fluid stack-img mb-3' />
                            <h3>Javascript</h3>
                        </div>
                    </Col>
                    <Col>
                        <div className='d-flex flex-column align-items-center w-75 m-auto'>
                            <img src={bootstraplogo} className='img-fluid stack-img mb-3' />
                            <h3>Bootstrap</h3>
                        </div>
                    </Col>
                    <Col>
                        <div className='d-flex flex-column align-items-center w-75 m-auto'>
                            <img src={htmlcss} className='img-fluid stack-img mb-3' />
                            <h3>HTML5 & CSS3</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='text-white'>
                <div>
                    <h2 className='text-center py-4'>Mis proyectos</h2>
                </div>
                <Row xs={1} md={2}>
                    <Col>
                        <Card className='shadow-lg m-auto card-custom mb-5' bg='black' text='light'>
                            <Card.Img variant="top" className='img-fluid' src={reapi} />
                            <Card.Body>
                                <Card.Title>Resident Evil API</Card.Title>
                                <Card.Text>
                                    Examen final de React para la academia Desafio LATAM, contiene una API creada por mi hosteada en Github y consumida con promises async await. Finalmente el diseño fue realizado con Bootstrap.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link target='_blank' href="https://github.com/Nandem1/desafio-4-examenFinalReact1" className='btn btn-outline-light'><FaGithub className='fs-5 me-1 mb-1' />Repositorio</Card.Link>
                                <Card.Link target='_blank' href="https://nandem1.github.io/desafio-4-examenFinalReact1/" className='btn btn-outline-light'><FaChrome className='fs-5 me-1 mb-1' />Web</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow-lg m-auto card-custom mb-5' bg='black' text='light'>
                            <Card.Img variant="top" className='img-fluid' src={conversorjs} />
                            <Card.Body>
                                <Card.Title>Conversor de Monedas API</Card.Title>
                                <Card.Text>
                                    Desafio 6 del modulo Javascript para la Web de la academia Desafio LATAM, se consume la API de monedas con promises async await y se elabora el maquetado y diseño con Bootstrap.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link target='_blank' href="https://github.com/Nandem1/desafio-6-conversordemonedas" className='btn btn-outline-light'><FaGithub className='fs-5 me-1 mb-1' />Repositorio</Card.Link>
                                <Card.Link target='_blank' href="https://nandem1.github.io/desafio-6-conversordemonedas/" className='btn btn-outline-light'><FaChrome className='fs-5 me-1 mb-1' />Web</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow-lg m-auto card-custom mb-5' bg='black' text='light'>
                            <Card.Img variant="top" className='img-fluid' src={galeriareact} />
                            <Card.Body>
                                <Card.Title>Galeria de Imagenes con React</Card.Title>
                                <Card.Text>
                                    Desafio 1 del modulo React I de la academia Desafio LATAM, se construye una galeria basica de imagenes utilizando componentes de React y React-Bootstrap.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link target='_blank' href="https://github.com/Nandem1/desafio-1-galeriareact" className='btn btn-outline-light'><FaGithub className='fs-5 me-1 mb-1' />Repositorio</Card.Link>
                                <Card.Link target='_blank' href="https://nandem1.github.io/desafio-1-galeriareact/" className='btn btn-outline-light'><FaChrome className='fs-5 me-1 mb-1' />Web</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow-lg m-auto card-custom mb-5' bg='black' text='light'>
                            <Card.Img variant="top" className='img-fluid' src={fe1dh} />
                            <Card.Body>
                                <Card.Title>Landing Page HTML5 & CSS3</Card.Title>
                                <Card.Text>
                                    Examen final de Front-End I de la academia Digital House, se realiza un Landing Page responsive desde una maqueta en Figma solamente con HTML5 y CSS3.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link target='_blank' href="https://github.com/Nandem1/examenFinal-Frontend1" className='btn btn-outline-light'><FaGithub className='fs-5 me-1 mb-1' />Repositorio</Card.Link>
                                <Card.Link target='_blank' href="https://nandem1.github.io/examenFinal-Frontend1/" className='btn btn-outline-light'><FaChrome className='fs-5 me-1 mb-1' />Web</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow-lg m-auto card-custom mb-5' bg='black' text='light'>
                            <Card.Img variant="top" className='img-fluid' src={desafiogrid} />
                            <Card.Body>
                                <Card.Title>Layout Responsive con CSS Grid</Card.Title>
                                <Card.Text>
                                    Desafio 3 del modulo CSS Avanzado de la academia Desafio LATAM, se realiza un layout responsive utilizando solamente CSS y se realiza el deploy a Github Pages.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link target='_blank' href="https://github.com/Nandem1/desafio-3-REstore" className='btn btn-outline-light'><FaGithub className='fs-5 me-1 mb-1' />Repositorio</Card.Link>
                                <Card.Link target='_blank' href="https://nandem1.github.io/desafio-3-REstore/" className='btn btn-outline-light'><FaChrome className='fs-5 me-1 mb-1' />Web</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow-lg m-auto card-custom mb-5' bg='black' text='light'>
                            <Card.Img variant="top" className='img-fluid' src={desafio7introweb} />
                            <Card.Body>
                                <Card.Title>Primer CV con HTML5, CSS3 y Bootstrap</Card.Title>
                                <Card.Text>
                                    Desafio 7 del modulo Introduccion al Desarrollo Web de la academia Desafio LATAM, se realiza un CV con los conocimientos adquiridos del modulo, se realiza deploy a Github Pages.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link target='_blank' href="https://github.com/Nandem1/desafio-7-cv" className='btn btn-outline-light'><FaGithub className='fs-5 me-1 mb-1' />Repositorio</Card.Link>
                                <Card.Link target='_blank' href="https://nandem1.github.io/desafio-7-cv/" className='btn btn-outline-light'><FaChrome className='fs-5 me-1 mb-1' />Web</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <button className='btn btn-outline-light mb-4' id='boton-arriba' style={{ display: showButton ? 'block' : 'none' }}><FaArrowUp className='fs-1 mb-1' /></button>
        </>
    )
}

export default Body