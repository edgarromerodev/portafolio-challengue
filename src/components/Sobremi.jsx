import React from 'react'
import sobremi from "../assets/sobremi.jpg"
const Sobremi = () => {
  return (
    <div className="container">
<section className='hero_container_sobremi'>
  <div className="hero_sobremi">
    <div className="text-container">
      <h1 className='titulo_sobremi'> Sobre Mí</h1>
      <p className='parrafo_sobremi'>
        Durante mi trayectoria profesional, he invertido tiempo y esfuerzo 
        en mi formación continua. En el año 2022, completé cursos de JavaScript 
        en la plataforma educativa Platzi, donde adquirí conocimientos 
        fundamentales sobre el lenguaje y sus aplicaciones en el desarrollo web. 
        En el año 2023, amplié mis habilidades al recibir clases en Levelup, 
        donde me sumergí en el mundo de ReactJS, Bootstrap, Node.js, MongoDB y Express.js. 
      </p>
      <p className='parrafo_sobremi'>
         Actualmente, sigo dedicando tiempo a la práctica 
        y el aprendizaje autodidacta, con el objetivo de convertirme en un profesional 
        altamente competente y versátil en el manejo de la tecnología.
      </p>
    </div>
    <img src={sobremi} className='image_sobremi' alt="" />
  </div>
</section>
    </div>
  )
}

export default Sobremi