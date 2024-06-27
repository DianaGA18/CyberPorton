import React from 'react';
import MenuUsuario from './MenuUsuario';

const Micuenta = () => {
  return (
    <div className="flex flex-col h-screen">
      <MenuUsuario />
      <div className="flex flex-1 justify-center items-center">
        <div className="flex flex-col lg:flex-row gap-4 max-w-4xl items-center">
          <div className="flex-1 mr-20">
            <div className="bg-blue-200 p-4 mb-5 border border-blue-900 rounded flex items-center justify-between ml-6">
              <div>
                <h1 className="font-bold">Alexis Hernandez Martinez</h1>
                <h2>alexhdzmtz@gmail.com</h2>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded font-bold">Editar</button>
            </div>

            <div className="bg-blue-200 p-4 mb-5 border border-blue-900 rounded ml-6">
              <h1 className="font-bold">Informacion</h1>
              <h2>Usaremos el reconocimiento facial para confirmar que eres tú. Tendrás que usar la cámara de tu computadora para ver tu rostro.</h2>
            </div>

            <div className="bg-blue-200 p-4 mb-5 border border-blue-900 rounded ml-6 grid grid-cols-2 items-center">
              <div>
                <h1 className="font-bold">Datos de tu cuenta</h1>
                <h2>Email: alexhdzmtz@gmail.com</h2>
                <h2>Telefono: 5534211221</h2>
                <h2>Nombre de usuario: Alex123</h2>
              </div>
              <div className="text-right">
                <button className="bg-blue-500 text-white px-4 py-2 rounded font-bold">Editar</button>
              </div>
            </div>

            <div className="bg-blue-200 p-4 mb-5 border border-blue-900 rounded flex items-center ml-6">
              <h1 className="font-bold">Tarjetas</h1>
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ml-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyfWEiwoyZbrvOn4uNudc3BxItekkpa27y0g&s"
                  alt="Tarjeta"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex items-center ml-4 flex-grow">
                <h2 className="text-lg">Banco Azteca S.A. de C.V.</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded ml-auto mr-2 font-bold">Editar</button>
              </div>
            </div>

            <div className="bg-blue-200 p-4 mb-5 border border-blue-900 rounded ml-6 flex flex-col">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="font-bold">Direcciones</h1>
                  <h2>Codigo postal 54240 Estado de Mexico</h2>
                  <h2>Jilotepec Alexis Hernandez 5530816247</h2>
                </div>
                <div className="flex">
                  <button className="bg-blue-500 text-white px-2 py-2 rounded mr-2 font-bold">Agregar datos y horarios</button>
                  <button className="bg-blue-500 text-white px-2 py-2 rounded font-bold">Agregar Direccion</button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 lg:w-auto flex justify-center items-center lg:justify-center">
            <div className="bg-blue-200 p-10 border border-blue-900 rounded-lg lg:ml-0">
              <img
                src="https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png"
                alt="Imagen grande"
                className="w-44 md:w-full lg:w-64 h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Micuenta;
