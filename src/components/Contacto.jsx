import React, { useState, useEffect} from 'react';
import usuario from "../assets/usuario.svg";
import correo from "../assets/email.svg";
import telefono from "../assets/movil.svg";

const Contacto = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.asunto || !formData.mensaje) {
      alert('Por favor, complete todos los campos del formulario.');
      return;
    }

    // Crear el enlace de WhatsApp con los datos del formulario
    const mensajeWhatsApp = `Nombre: ${formData.nombre}%0AEmail: ${formData.email}%0AAsunto: ${formData.asunto}%0AMensaje: ${formData.mensaje}`;
    const enlaceWhatsApp = `https://wa.me/50245984577?text=${encodeURIComponent(mensajeWhatsApp)}`;

    // Abrir el enlace en una nueva pestaña
    window.open(enlaceWhatsApp, '_blank');

    setFormData({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    });
    setShowSuccessModal(true);
  };

  useEffect(() => {
    let timeoutId;

    if (showSuccessModal) {
      timeoutId = setTimeout(() => {
        setShowSuccessModal(false);
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [showSuccessModal]);


  return (
    <div className='container'>
      <section className='hero_containeter_contacto'>
        <div className="hero_contacto">
          <h1 className='titulo_sobremi'>Contacto</h1>
          {showSuccessModal && (
            <div className="success-modal">
              <p>¡Formulario enviado con éxito!</p>
            </div>
          )}
          <div className="container_card_contacto">
            <div className="card_contacto">
              <div className="card_description_contacto">
                <h1>Información de Contacto</h1>
                <img className='icon_usuario' src={usuario} alt="" />
                <div className="description_contacto">
                  <div className="correo-icon">
                    <img src={correo} className='icon_email' alt="" />
                    <p className='descript_contacto'>edgarromerocuc94@gmail.com</p>
                  </div>
                  <div className="correo-icon">
                    <img className='icon_phone' src={telefono} alt="" />
                    <p className='descript_contacto'>+502 45984577</p>
                  </div>
                </div>
              </div>
              <div className="form_contacto">
                <form onSubmit={handleSubmit}>
                  <h3 className='texto_contacto'>¿Quieres Contactarme?</h3>
                  <p className='texto_contacto-1'>Complete el siguiente formulario y me pondré en contacto con usted lo antes posible. </p>
                  <input type="text" className='' placeholder='Nombre' name='nombre' value={formData.nombre} onChange={handleChange}/>
                  <input type="email" name='email' placeholder='Correo' value={formData.email} onChange={handleChange}/>
                  <input type="text" name='asunto'  placeholder='Asunto' value={formData.asunto} onChange={handleChange}/>
                  <textarea name="mensaje" id="" cols="30" rows="10" placeholder='Mensaje' value={formData.mensaje} onChange={handleChange}></textarea>
                  <button type="submit" className="formcontato__botao">Enviar mensaje</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacto;