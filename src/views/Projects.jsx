import { React, useContext} from 'react'
import { motion } from 'framer-motion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MyContext from '../MyContext';

function Projects() {
  const { data } = useContext(MyContext)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className='mt-5 text-center'>Projects</h1>

      <Card bg="black" text="light" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{data[0].name}</Card.Title>
          <Card.Text>
            {data[0].description}
          </Card.Text>
          <Button variant="outline-light">Go somewhere</Button>
        </Card.Body>
      </Card>

    </motion.div>
  )
}

export default Projects