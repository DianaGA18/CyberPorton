import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuUsuario from './MenuUsuario';

function DetalleCompra() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <MenuUsuario/>
      <div className="flex w-full justify-center">
        <div className="bg-gray-200 w-3/5 ml-10 mr-4 p-5 flex items-center justify-between">
          <div>
            <p className="ml-4">Motorola Edge 40 Neo 128 GB ROM 6 GB RAM</p>
          </div>
          <img
            className="w-20 ml-5 md:ml-10"
            src={`${process.env.PUBLIC_URL}/static/img/celular.png`}
            alt="Celular Motorola"
          />
        </div>
        <div className="bg-gray-200 w-2/5 ml-4 mr-8 p-5 flex flex-col justify-start items-start">
          <div className="flex w-full justify-between">
            <p className='mt-2'>Producto (s)</p>
            <p className='mt-2'>$5000.00</p>
          </div>
          <p className='mt-5 font-extrabold'>__________________________________________________________</p>
          <div className="flex w-full justify-between mt-3">  
            <p className='mt-2'>Total</p>
            <p className='mt-2'>$5000.00</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 w-3/5 ml-10 mr-4 mt-5 p-5 flex flex-col items-center justify-center">
        <p>Llegó el 18 de Mayo del 2024</p>
        <button className='bg-green-500 rounded-md text-white p-3 mt-5'
        onClick={() => navigate('/productos')}>Volver a Comprar</button>
      </div>
    </div>
  );
}

export default DetalleCompra;
