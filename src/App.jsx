import { React, useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter } from "react-router-dom"
import AnimatedRoutes from "./components/AnimatedRoutes"
import MyContext from "./MyContext"

function App() {
  // Estados para almacenar la data que se obtiene de la funcion getData
  const [data, setData] = useState([])
  const [result, setResult] = useState("");
  const [validated, setValidated] = useState(false);
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
  // Comparto la data en un Contexto y asi poder utilizarlo en los demas componentes
  const globalContext = { data, onSubmit, result, validated }

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
