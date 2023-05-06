import { React, useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyContext from "./MyContext"
import Home from "./views/Home"
import Skills from "./views/Skills"
import Projects from "./views/Projects"
import Contact from "./views/Contact"
import Alien from "./components/Alien"
import "./index.css"

function App() {
  // Estados para almacenar la data que se obtiene de la funcion getData
  const [data, setData] = useState([])
  // Estados del formulario
  const [result, setResult] = useState("");
  const [validated, setValidated] = useState(false);
  // Funcion para hacer el llamado y almacenado de la data en el estado
  const getData = async () => {
    try {
      const req = await fetch("https://raw.githubusercontent.com/Nandem1/portafolio-personal/main/data.json")
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
  // Funcion onSubmit para el formulario de Contact.jsx, cuenta con validacion y consumo de la API web3forms
  const onSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    if (validated == true) {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "bf129f37-dfbd-4ceb-a41f-2bc2f277c975");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setResult(res.message);
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    }
  }
  // Comparto la data, la funcion onSubmit, result y validated en un Contexto y asi poder utilizarlo en los demas componentes
  const globalContext = { data, onSubmit, result, validated }

  return (
    <div className="App">
      <MyContext.Provider value={globalContext}>
        <BrowserRouter>
          <Navbar />
          <Alien />
          <Routes>
            <Route path="/portafolio-personal/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  )
}

export default App
