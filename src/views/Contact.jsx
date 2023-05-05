import { React, useState, useContext } from 'react'
import { motion } from 'framer-motion';
import { Container, Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import MyContext from '../MyContext';

function Contact() {
  const { onSubmit, validated } = useContext(MyContext)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='text-light'>
        <Container>
          <h1 className='text-center mt-5'>Contacto</h1>
          <div>
            <Form className='bg-black bg-opacity-100 rounded-4' noValidate validated={validated} onSubmit={onSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="name"
                    placeholder="Nombre"
                  />
                  <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className='mb-3'>
                <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                  <Form.Label>Correo Electronico</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="Correo Electronico"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Debes ingresar un correo electronico.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label>Comentarios</Form.Label>
                  <Form.Control name="message" type="text" placeholder="Comentarios" required />
                  <Form.Control.Feedback type="invalid">
                    Debes ingresar un comentario.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Button variant='outline-light' type="submit">Enviar</Button>
            </Form>
          </div>
        </Container>
      </div >
    </motion.div >
  )
}

export default Contact