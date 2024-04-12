import React from 'react'
import html from "../assets/html.svg"
import javascrpt from "../assets/javascript.svg"
import css from "../assets/css.svg"
import react_icon from "../assets/react.svg"
import node_icon from "../assets/node.svg"
import mongodb_icon from "../assets/mongo.svg"

const Habilidades = () => {
  return (
    <div className="container">
        <section className='hero_container_habilidades'>
    <div className="hero-habilidades">
    <h1 className='titulo_sobremi'> Mis Habilidades</h1>
    <div className="cards-habilidades">
      <div className="card">
        <img src={html} className='imagen-card' alt="" />
        <h2 className='subtitle-card'>HTML</h2>
      </div>
      <div className="card">
        <img src={javascrpt} className='imagen-card' alt="" />
        <h2 className='subtitle-card'>JAVASCRIPT</h2>
      </div>

      <div className="card">
        <img src={css} className='imagen-card' alt="" />
        <h2 className='subtitle-card'>CSS</h2>
      </div>

      <div className="card">
        <img src={react_icon} className='imagen-card' alt="" />
        <h2 className='subtitle-card'>REACTJS</h2>
      </div>

      <div className="card">
        <img src={node_icon} className='imagen-card' alt="" />
        <h2 className='subtitle-card'>NODEJS</h2>
      </div>

      <div className="card">
        <img src={mongodb_icon} className='imagen-card' alt="" />
        <h2 className='subtitle-card'>MONGODB</h2>
      </div>

    </div>
    </div>
</section>
    </div>
  )
}

export default Habilidades