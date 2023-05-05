import React from 'react'
import { motion } from 'framer-motion';

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Skills</h1>
    </motion.div>
  )
}

export default Skills