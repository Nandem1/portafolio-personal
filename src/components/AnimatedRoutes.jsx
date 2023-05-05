import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from "../views/Home"
import Skills from "../views/Skills"
import Projects from "../views/Projects"
import Contact from "../views/Contact"
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/portafolio-personal/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes