import React from 'react'
import instagram from "../assets/instagram.svg"
import facebook from "../assets/facebook.svg"
import tiktok from "../assets/tiktok.svg"
import linkedin from "../assets/linkedin.svg"
import youtube from "../assets/youtube.svg"
import whatsapp from "../assets/whatsapp.svg"

const Footer = () => {
  return (
    <div className="container-footer">
        <section className='hero-footer'>
        <div className="redes_sociales">
            <a href="https://www.instagram.com/edgarromero_123/" target='_blank'><img src={instagram} alt="" /></a>
            <a href="https://www.facebook.com/profile.php?id=100082536101229" target='_blank'><img src={facebook} alt="" /></a>
            <a href="https://www.tiktok.com/@edukuk1" target='_blank'><img src={tiktok} alt="" /></a>
            <a href="https://www.linkedin.com/in/edgar-romero-cuc-chocoj-ba1897272" target='_blank'><img src={linkedin} alt="" /></a>
            <a href="https://www.youtube.com/channel/UCQLV4bIw__DiplHJ7gNmt0A" target='_blank'><img src= {youtube} alt="" /></a>
            <a href="https://wa.me/50245984577" target='_blank'><img src={whatsapp} alt="" /></a>
        </div>
        <p className='parrafo-foot'>© 2024 Edgar Romero Cuc Chocoj - Portafolio</p>
        </section>
    </div>
  )
}

export default Footer