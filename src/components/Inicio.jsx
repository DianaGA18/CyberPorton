import React, { useState } from 'react';
import './index.css';
import Menu from './Menu';
import Carrusel from './Carrusel';
import Barra from './Barra';
import ProductosDest from './ProductosDest';
import IniciaSesion from './IniciaSesion';
import Registrarse from './Registrarse';

function Inicio() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const toggleLoginPopup = () => {
    setLoginOpen(!isLoginOpen);
  };

  const toggleRegisterPopup = () => {
    setRegisterOpen(!isRegisterOpen);
  };

  return (
    <div>
      <Menu onLoginClick={toggleLoginPopup} onRegisterClick={toggleRegisterPopup} />
      <div>
        <Carrusel />
      </div>
      <Barra />
      <ProductosDest />
      {isLoginOpen && <IniciaSesion isOpen={isLoginOpen} onClose={toggleLoginPopup} />}
      {isRegisterOpen && <Registrarse isOpen={isRegisterOpen} onClose={toggleRegisterPopup} />}
    </div>
  );
}

export default Inicio;
