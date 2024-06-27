import React from 'react';
import { useNavigate } from 'react-router-dom';

function ContenedorPed() {
  const navigate = useNavigate();

  const handleVerCompraClick = () => {
    navigate('/ver-compra');
  };

  return (
    <div>
      <h3 className="ml-8 mt-8">18 de Mayo</h3>
      <div className="bg-gray-200 ml-8 mt-3 mr-8 p-5 flex items-center justify-between">
        <img
          className="w-32 ml-5 md:ml-10"
          src={`${process.env.PUBLIC_URL}/static/img/celular.png`}
          alt="Celular Motorola"
        />
        <div className="ml-10 flex-1">
          <p>Llegó el 10 de Mayo del 2024</p>
          <p>Motorola Edge 40 Neo 128 GB ROM 6 GB RAM</p>
        </div>
        <div className="flex flex-col ml-10 md:mr-10">
          <button
            className="bg-green-500 text-white p-3 rounded-lg mb-5 w-full"
            onClick={handleVerCompraClick}
          >
            Ver Compra
          </button>
          <button className="bg-green-500 text-white p-3 rounded-lg w-full">
            Volver a Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContenedorPed;
