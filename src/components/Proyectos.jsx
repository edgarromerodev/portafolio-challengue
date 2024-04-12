import React from 'react'
import encriptador from "../assets/encriptador.png"
import farmacia from "../assets/farmacia.png"
import pagina from "../assets/pagina.png"
const Proyectos = () => {
  return (
    <div className="container">
        <section className='hero_container_proyectos'>
    <div className="hero_proyectos">
    <h1 className='titulo_sobremi'> Mis proyectos</h1>
    <div className="cards_proyectos">
      <div className="card_proyecto">
        <div className="imagen_proyectos">
        <img className='' src={encriptador} alt=""/>
        </div>
        <div className="description_proyecto">
          <h2 className='subtitulo_imagen'>Encriptador de Palabras</h2>
          <p className='description_imagen'>Challenge de Alura</p>
          <div className="button_imagen">
            <a className='btn1' href="https://github.com/edgarromero1994/challenge" target='_blank'>Repositorio</a>
            <a className='btn2' href="https://bright-squirrel-4e568d.netlify.app/" target='_blank'>Ver Demo</a>
          </div>
        </div>
      </div>
      <hr class="separator" />
      <div className="card_proyecto">
        <div className="imagen_proyectos">
        <img className='' src={farmacia} alt=""/>
        </div>
        <div className="description_proyecto">
          <h2 className='subtitulo_imagen'>APP Web</h2>
          <p className='description_imagen'>App  web para una farmacia</p>
          <div className="button_imagen">
            <a className='btn1' href="https://github.com/edgarromero1994/farmacia" target='_blank'>Repositorio</a>
            <a className='btn2' href="https://whimsical-biscochitos-e21d33.netlify.app/" target='_blank'>Ver Demo</a>
          </div>
        </div>
      </div>
      <hr class="separator" />
      <div className="card_proyecto">
        <div className="imagen_proyectos">
        <img className='' src={pagina} alt=""/>
        </div>
        <div className="description_proyecto">
          <h2 className='subtitulo_imagen'>Página Web</h2>
          <p className='description_imagen'>Pagina web para una centro de estudio</p>
          <div className="button_imagen">
            <a className='btn1' href="https://github.com/edgarromero1994/Curso_JavaScript" target='_blank'>Repositorio</a>
            <a className='btn2' href="https://starlit-valkyrie-6e94ab.netlify.app/" target='_blank'>Ver Demo</a>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
    </div>
  )
}

export default Proyectos