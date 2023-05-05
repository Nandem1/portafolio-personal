import React from 'react'
import { motion } from 'framer-motion';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Row, Col, Container, Image } from 'react-bootstrap'
import { FaHtml5, FaCss3, FaReact, FaBootstrap, FaGitSquare } from "react-icons/fa";
import { SiJavascript, SiPostgresql } from "react-icons/si";

function Skills() {
  // Nivel de habilidad en HTML
  const nowHTML5 = 80
  // Nivel de habilidad en CSS
  const nowCSS3 = 75
  // Nivel de habilidad en Bootstrap
  const nowBootstrap = 90
  // Nivel de habilidad en Javascript
  const nowJS = 70
  // Nivel de habilidad en React
  const nowReact = 80
  // Nivel de habilidad en Postgresql
  const nowPostgresql = 65
  // Nivel de habilidad en Git
  const nowGit = 80

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container className='text-white mt-5 bg-black bg-opacity-50 rounded-4'>
        <Row>
          <Col>
            <div className='mb-5'>
              <h2 className='fw-medium fs-5 d-flex align-items-center'><FaHtml5 className='me-1' />HTML5</h2>
              <ProgressBar className='border border-secondary' variant='dark' now={nowHTML5} label={`${nowHTML5}%`} />
            </div>
            <div className='mb-5'>
              <h2 className='fw-medium fs-5 d-flex align-items-center'><FaCss3 className='me-1' />CSS3</h2>
              <ProgressBar className='border border-secondary' variant='dark' now={nowCSS3} label={`${nowCSS3}%`} />
            </div>
            <div className='mb-5'>
              <h2 className='fw-medium fs-5 d-flex align-items-center'><FaBootstrap className='me-1' />Bootstrap</h2>
              <ProgressBar className='border border-secondary' variant='dark' now={nowBootstrap} label={`${nowBootstrap}%`} />
            </div>
            <div className='mb-5'>
              <h2 className='fw-medium fs-5 d-flex align-items-center'><SiJavascript className='me-1' />Javascript</h2>
              <ProgressBar className='border border-secondary' variant='dark' now={nowJS} label={`${nowJS}%`} />
            </div>
            <div className='mb-5'>
              <h2 className='fw-medium fs-5 d-flex align-items-center'><FaReact className='me-1' />React</h2>
              <ProgressBar className='border border-secondary' variant='dark' now={nowReact} label={`${nowReact}%`} />
            </div>
            <div className='mb-5'>
              <h2 className='fw-medium fs-5 d-flex align-items-center'><SiPostgresql className='me-1' />Postgresql</h2>
              <ProgressBar className='border border-secondary' variant='dark' now={nowPostgresql} label={`${nowPostgresql}%`} />
            </div>
            <div className='mb-5'>
              <h2 className='fw-medium fs-5 d-flex align-items-center'><FaGitSquare className='me-1' />Git</h2>
              <ProgressBar className='border border-secondary' variant='dark' now={nowGit} label={`${nowGit}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  )
}

export default Skills