import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo_dark from "../assets/logo-black.png";
import icon_dark from "../assets/night.png";
import icono_abierto from "../assets/menu.svg";
import icono_cerrar from "../assets/menu_closed.svg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className='cabecera_container'>
      <Link to="/"><img className='logo-item' src={logo_dark} alt="" /></Link>

      <div className='cabecera_icons_item'>
        <ul className='menu'>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/sobremi" onClick={closeMenu}>Sobre mí</Link></li>
          <li><Link to="/habilidades" onClick={closeMenu}>Habilidades</Link></li>
          <li><Link to="/formacion" onClick={closeMenu}>Estudios</Link></li>
          <li><Link to="/proyectos" onClick={closeMenu}>Proyectos</Link></li>
          <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
        </ul>
      </div>

      <div className="menu_movil">
        {menuOpen ? (
          <img src={icono_cerrar} className='menu_cerrar' alt="" onClick={toggleMenu} />
        ) : (
          <img src={icono_abierto} className='menu_abierto' alt="" onClick={toggleMenu} />
        )}
        {menuOpen && (
          <ul className='menu_movil1'>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/sobremi" onClick={closeMenu}>Sobre mí</Link></li>
            <li><Link to="/habilidades" onClick={closeMenu}>Habilidades</Link></li>
            <li><Link to="/formacion" onClick={closeMenu}>Estudios</Link></li>
            <li><Link to="/proyectos" onClick={closeMenu}>Proyectos</Link></li>
            <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
          </ul>
        )}
      </div>

      <img src={icon_dark} alt="" className='toggle-icon'/>
    </nav>
  );
}

export default Nav;