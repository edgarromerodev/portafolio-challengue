import React from 'react'
import platzi from "../assets/Platzi.png"
import level from "../assets/levelup.png"
import alura from "../assets/alura.png"
const Formacion = () => {
  return (
    <div className="container">
        <section className='hero_container_academia'>
    <div className="hero-formacion">
    <h1 className='titulo_sobremi'> Formación Académica</h1>
    <div className="cards-formacion">
      <div className="card-formacion">
        <img src={platzi} className='imagen-card' alt="" />
        <p>Curso recibidos de Javascript desde 0 en el año 2023</p>
      </div>

      <div className="card-formacion">
        <img src={level}  className='imagen-card' alt="" />
        <p>Cursos recibidos de ReactJS, Bootstrap, Node.js, MongoDB y Express.js. 2023</p>
      </div>

      <div className="card-formacion">
        <img src={alura} className='imagen-card' alt="" />
        <p>Curso de Html Css, Lógica de programación año 2024</p>
      </div>
    </div>
    </div>
</section>
    </div>
  )
}

export default Formacion
