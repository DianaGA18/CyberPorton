import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MenuAdmin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Limpiar token del localStorage
    localStorage.removeItem('token');
  
    // Redirigir a la página de inicio
    navigate('/');
  };
  

  return (
    <div>
      <header className="bg-[#27A3DF] p-2 mb-1 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col ml-64 md:ml-28 max-w-full">
          <div className="flex items-center space-x-2">
            <p className="text-[#FFFFFF] font-bold text-2xl">CYBER</p>
            <Link to="/inicio-admin">
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
              onClick={() => navigate('/compras-admin')}
            >
              Compras
            </button>
            <button
              className="text-white font-bold px-4 py-2 rounded-lg hover:bg-[#2288ba]"
              onClick={() => navigate('/productos-admin')}
            >
              Productos
            </button>
            <button
              className="text-white font-bold px-4 py-2 rounded-lg hover:bg-[#2288ba]"
              onClick={() => navigate('/usuarios')}
            >
              Usuarios
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4 md:mt-0">
          <input className="p-2 border border-gray-300 rounded-md w-full md:w-auto" type="text" placeholder="Buscar..." />
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-full md:w-auto">Buscar</button>
          <button
            className="text-white font-bold px-4 py-2 rounded-lg hover:bg-[#2288ba] border-2"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </div>
      </header>
    </div>
  );
}

export default MenuAdmin;
