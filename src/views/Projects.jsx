import { React, useContext } from 'react'
import { motion } from 'framer-motion';
import Card from 'react-bootstrap/Card';
import MyContext from '../MyContext';
import { Row, Col, Container } from 'react-bootstrap'
import './Projects.css'

function Projects() {
  const { data } = useContext(MyContext)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className='mt-5 text-center'>Proyectos</h1>

      <Container fluid className='mt-5 main-projects'>
        <Row lg={4} md={2} xs={1} sm={2}>
          {data.map(item => {
            return (
              <Col key={item.name}>
                <Card className='cards-projects m-auto my-3' bg="black" text="light">
                  <div className='overflow-hidden'>
                    <Card.Img className='cards-img img-fluid' variant="top" src={item.src} />
                  </div>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.desc}</Card.Text>
                    <a className="btn btn-outline-light">Github</a>
                    <a className="btn btn-outline-light ms-2">Web</a>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>

    </motion.div>
  )
}

export default Projects