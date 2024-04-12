import React from 'react'

const Formacion = () => {
  return (
    <div className="container">
        <section className='hero_container_academia'>
    <div className="hero-formacion">
    <h1 className='titulo_sobremi'> Formación Académica</h1>
    <div className="cards-formacion">
      <div className="card-formacion">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Platzi.jpg/1200px-Platzi.jpg" className='imagen-card' alt="" />
        <p>Curso recibidos de Javascript desde 0 en el año 2022</p>
      </div>

      <div className="card-formacion">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4M21v6P7V-CriTJUkUuOoSjvaw4hZmZGkPDG2y2D6&s"className='imagen-card' alt="" />
        <p>Cursos recibidos de ReactJS, Bootstrap, Node.js, MongoDB y Express.js. 2023</p>
      </div>

      <div className="card-formacion">
        <img src= "https://raw.githubusercontent.com/joshuaFrias95/Encriptador-Alura-Oracle-ONE/main/img/readme/aluraoracle.png" className='imagen-card' alt="" />
        <p>Curso de Html Css, Lógica de programación año 2024</p>
      </div>
    </div>
    </div>
</section>
    </div>
  )
}

export default Formacion