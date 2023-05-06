import React from 'react'
import { motion } from 'framer-motion';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Row, Col, Container } from 'react-bootstrap'
import { FaHtml5, FaCss3, FaReact, FaBootstrap, FaGitSquare } from "react-icons/fa";
import { SiJavascript, SiPostgresql } from "react-icons/si";
import AnimateComponents from '../components/AnimateComponents';

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
    <AnimateComponents>
      <Container className='text-white mt-5 bg-black bg-opacity-50 rounded-4'>
        <Row>
          <Col>
            <div className='mb-5'>
              <h2 className='fw-medium fs-4 d-flex align-items-center'><FaHtml5 style={{color: "#f06529"}} className='me-1' />HTML5</h2>
              <ProgressBar className='border border-light' variant='dark' now={nowHTML5} label={`${nowHTML5}%`} />
            </div>
            <div className='mb-5'>
              <h2 className='fw-medium fs-4 d-flex align-items-center'><FaCss3 style={{color: "lightblue"}} className='me-1' />CSS3</h2>
              <ProgressBar className='border border-light' variant='dark' now={nowCSS3} label={`${nowCSS3}%`} />
            </div>
            <div className='mb-5'>
              <h2 className='fw-medium fs-4 d-flex align-items-center'><FaBootstrap style={{color: "#563d7c"}} className='me-1' />Bootstrap</h2>
              <ProgressBar className='border border-light' variant='dark' now={nowBootstrap} label={`${nowBootstrap}%`} />
            </div>
            <div className='mb-5'>
              <h2 className='fw-medium fs-4 d-flex align-items-center'><SiJavascript style={{color: "#F0DB4F"}} className='me-1' />Javascript</h2>
              <ProgressBar className='border border-light' variant='dark' now={nowJS} label={`${nowJS}%`} />
            </div>
            <div className='mb-5'>
              <h2 className='fw-medium fs-4 d-flex align-items-center'><FaReact style={{color: "#61DBFB"}} className='me-1' />React</h2>
              <ProgressBar className='border border-light' variant='dark' now={nowReact} label={`${nowReact}%`} />
            </div>
            <div className='mb-5'>
              <h2 className='fw-medium fs-4 d-flex align-items-center'><SiPostgresql style={{color: "#0064a5"}} className='me-1' />Postgresql</h2>
              <ProgressBar className='border border-light' variant='dark' now={nowPostgresql} label={`${nowPostgresql}%`} />
            </div>
            <div className='mb-5'>
              <h2 className='fw-medium fs-4 d-flex align-items-center'><FaGitSquare style={{color: "#F1502F"}} className='me-1' />Git</h2>
              <ProgressBar className='border border-light' variant='dark' now={nowGit} label={`${nowGit}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </AnimateComponents>
  )
}

export default Skills