import { React, useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter } from "react-router-dom"
import AnimatedRoutes from "./components/AnimatedRoutes"
import MyContext from "./MyContext"

function App() {
  // Estados para almacenar la data que se obtiene de la funcion getData
  const [data, setData] = useState([])
  // Funcion para hacer el llamado y almacenado de la data en el estado
  const getData = async () => {
    try {
      const req = await fetch("../../data.json")
      const res = await req.json()
      setData(res)
    } catch (error) {
      console.log(error)
    }
  }
  // La web espera a que la data este cargada para renderizar
  useEffect(() => {
    getData()
  }, [])
  // Comparto la data en un Contexto y asi poder utilizarlo en los demas componentes
  const globalContext = { data }

  return (
    <div className="App">
      <MyContext.Provider value={globalContext}>
        <BrowserRouter>
          <Navbar />
          {/* Los routes se encuentran en /components/AnimatedRoutes.jsx */}
          <AnimatedRoutes />
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  )
}

export default App
