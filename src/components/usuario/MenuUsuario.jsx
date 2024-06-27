import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MenuUsuario({ onLoginClick, onRegisterClick }) {
  const [openIngresar, setOpenIngresar] = useState(false);
  const [openCategoria, setOpenCategoria] = useState(false);
  const [openCentroInfo, setOpenCentroInfo] = useState(false);
  const navigate = useNavigate();

  const MenuIngresar = [
    { name: 'Mi Cuenta', path: '/mi-cuenta', action: onLoginClick },
    { name: 'Mis Pedidos', path: '/pedidos', action: onRegisterClick },
    { name: 'Cerrar Sesion', path: '/', action: onRegisterClick }
  ];

  const MenuCategorias = [
    { name: 'Cómputo', path: '/computo' },
    { name: 'Audio y Video', path: '/audio-video' },
    { name: 'Accesorios', path: '/accesorios' },
    { name: 'Celulares y Telefonía', path: '/telcel' }
  ];

  const MenuCentroInf = [
    { name: 'Quiénes Somos', path: '/quienes-somos' }
  ];

  const menuIngRef = useRef();
  const btnIngRef = useRef();
  const menuCatRef = useRef();
  const btnCatRef = useRef();
  const menuCentInRef = useRef();
  const btnCentInRef = useRef();

  window.addEventListener('click', (e) => {
    if (e.target !== menuIngRef.current && e.target !== btnIngRef.current) {
      setOpenIngresar(false);
    }
    if (e.target !== menuCatRef.current && e.target !== btnCatRef.current) {
      setOpenCategoria(false);
    }
    if (e.target !== menuCentInRef.current && e.target !== btnCentInRef.current) {
      setOpenCentroInfo(false);
    }
  });

  const handleMenuClick = (menuItem) => {
    if (menuItem.action) {
      menuItem.action();
    } else {
      navigate(menuItem.path);
    }
    setOpenIngresar(false);
    setOpenCategoria(false);
  };

  const handleCarritoClick = () => {
    navigate('/carrito');
  };

  return (
    <div>
      <header className="bg-[#27A3DF] p-2 mb-1 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col ml-64 md:ml-28 max-w-full">
          <div className="flex items-center  space-x-2">
            <p className="text-[#FFFFFF] font-bold text-2xl">CYBER</p>
            <Link to="/inicio-usuario">
            <img
              className="mt-3 w-16"
              src={`${process.env.PUBLIC_URL}/static/img/cybrporton.png`}
              alt="Cyber Porton"
            />
            </Link>
            <p className="text-[#FFFFFF] ml-3 font-bold text-2xl">PORTÓN</p>
          </div>
        </div>
        <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="flex items-center space-x-8 mt-0 md:mt-0">
            <button
              className="text-white font-bold px-4 py-2 rounded-lg hover:bg-[#2288ba]"
              onClick={() => setOpenIngresar(!openIngresar)}
              ref={btnIngRef}
            >
              Mi Cuenta
            </button>
            <button
              className="text-white font-bold px-4 py-2 rounded-lg hover:bg-[#2288ba]"
              onClick={() => setOpenCategoria(!openCategoria)}
              ref={btnCatRef}
            >
              Categoria
            </button>
            <button
              className="text-white font-bold px-4 py-2 rounded-lg hover:bg-[#2288ba]"
              onClick={() => setOpenCentroInfo(!openCentroInfo)}
              ref={btnCentInRef}
            >
              Centro de Información
            </button>
          </div>

          {openIngresar && (
            <div className="bg-white p-4 w-52 ml-36 md:ml-1 shadow-lg absolute top-10 md:top-16 left-0 mt-2 z-20" ref={menuIngRef}>
              <ul>
                <p className='ml-12 mb-2'>Hola Alexis!</p>
                {MenuIngresar.map((menuing) => (
                  <li
                    onClick={() => handleMenuClick(menuing)}
                    className="text-lg p-2 cursor-pointer rounded hover:bg-blue-100"
                    key={menuing.name}
                  >
                    {menuing.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {openCategoria && (
            <div className="bg-white p-4 w-52 ml-64 md:ml-32 shadow-lg absolute top-10 md:top-16 left-0 mt-2 z-20" ref={menuCatRef}>
              <ul>
                {MenuCategorias.map((menucat) => (
                  <li
                    onClick={() => handleMenuClick(menucat)}
                    className="text-lg p-2 cursor-pointer rounded hover:bg-blue-100"
                    key={menucat.name}
                  >
                    {menucat.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {openCentroInfo && (
            <div className="bg-white p-4 w-52 ml-96 md:ml-64 shadow-lg absolute top-10 md:top-16 left-0 mt-2 z-20" ref={menuCentInRef}>
              <ul>
                {MenuCentroInf.map((menucent) => (
                  <li
                    onClick={() => handleMenuClick(menucent)}
                    className="text-lg p-2 cursor-pointer rounded hover:bg-blue-100"
                    key={menucent.name}
                  >
                    {menucent.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4 md:mt-0">
          <input className="p-2 border border-gray-300 rounded-md w-full md:w-auto" type="text" placeholder="Buscar..." />
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-full md:w-auto">Buscar</button>
          <img
            className="w-10 cursor-pointer"
            src={`${process.env.PUBLIC_URL}/static/img/carrito.png`}
            alt="Carrito de Compras"
            onClick={handleCarritoClick}
          />
          <p className="text-[#FFFFFF] font-bold text-xl md:text-2xl">$0.00</p>
        </div>
      </header>
    </div>
  );
}

export default MenuUsuario;
