import { React } from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter } from "react-router-dom"
import AnimatedRoutes from "./components/AnimatedRoutes"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* Los routes se encuentran en /components/AnimatedRoutes.jsx */}
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
