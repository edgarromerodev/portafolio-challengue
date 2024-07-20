import React from 'react'
import portada from "../assets/edgar-portada.png"
import Contacto from './Contacto'
import Proyectos from './Proyectos'
import Formacion from './Formacion'
import Habilidades from './Habilidades'
import Sobremi from './Sobremi'
import curriculum from "../assets/CV_EDGAR.pdf"
import { useTheme } from '../provider/ThemeProvider'


const Home = () => {
  const {theme} = useTheme();
  return (

     <div className= {`container ${theme}`}>
      <section className='hero_container'>
        <div className="hero_description">
          <h1 className='hero_title'>Hola, Soy Edgar Romero Cuc Chocoj</h1>
          <p className='hero__paragraph'>
          Mi pasión por la programación web se refleja en mi dominio de JavaScript, 
          CSS, ReactJS, MongoDB y Node.js. Utilizo esta amplia gama de herramientas 
          para construir páginas web atractivas, funcionales y eficaces.
           Me entusiasma continuar explorando este emocionante campo y materializar 
           ideas innovadoras en el mundo digital
          </p>
          <a href={curriculum} download="CV_EDGAR.pdf" className="cta">Descargar CV</a>
        </div>
        <img src={portada} alt=""/>
      </section>
      <Sobremi/>
  <Habilidades/>
    <Formacion/>
    <Proyectos/>
    <Contacto/>
    </div>

  )
}

export default Home