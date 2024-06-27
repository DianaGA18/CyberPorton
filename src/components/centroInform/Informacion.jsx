import React from 'react';
import './Informacion.css';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

function Informacion() {
  return (
    <div className="informacion-container">
      <div className="left-section">
        <img className="image" src={`${process.env.PUBLIC_URL}/static/img/cybrporton.png`} alt="Cyber Porton" />
      </div>
      <div className="right-section">
        <h3 className='vm'>EMPRESA SOCIALMENTE RESPONSABLE</h3>
        <br />
        <br />
        <h3 className='vm'>VISION</h3>
        <br />
        <p>Ser la plataforma líder en comercio electrónico
           en América Latina, ofreciendo una experiencia 
           de compra inigualable, con una amplia variedad 
           de productos, entregas rápidas y un servicio al 
           cliente excepcional.</p>
           <br />
           <br />
           <h3 className='vm'>MISION</h3>
           <br />
        <p>Facilitar y mejorar la vida 
          de nuestros clientes mediante una plataforma
          de comercio electrónico segura. Nos esforzamos por ofrecer la mayor
          selección de productos al mejor precio, garantizando
          entregas rápidas y eficientes, y proporcionando
          un servicio sobresaliente.</p>
        <br />
        <br />
        <br />
        <div className="contactanos-container">
          <h2 className='text2'>Contáctanos</h2>
          <div className="icons-container">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon" />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Informacion;
