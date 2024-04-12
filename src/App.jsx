import {} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Nav from './nav/Nav';
import Contacto from './components/Contacto';
import Proyectos from './components/Proyectos';
import Formacion from './components/Formacion';
import Habilidades from './components/Habilidades';
import Sobremi from './components/Sobremi';
import Footer from './footer/Footer';
import ThemeProvider from './provider/ThemeProvider';

function App() {
  return (
    <ThemeProvider> 
    <Router>
    <Nav/> 
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sobremi" element={<Sobremi/>} />
      <Route path="/habilidades" element={<Habilidades/>} />
      <Route path="/formacion" element={<Formacion/>} />
      <Route path="/contacto" element={<Contacto/>} />
      <Route path="/proyectos" element={<Proyectos/>} />
    </Routes>
    <Footer/>
  </Router>
  </ThemeProvider> 
  )
}

export default App
