import React from 'react';
import MenuAdmin from './MenuAdmin';

const Usuarios = () => {

  const usuarios = [
    { id: 1, nombre: 'Juan Pérez', rol: 'Vendedor', imagenUrl: 'https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg' },
    { id: 2, nombre: 'María García', rol: 'Cajero', imagenUrl: 'https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg' },
    { id: 3, nombre: 'Carlos López', rol: 'Gerente', imagenUrl: 'https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg' },
    
  ];

  const handleEliminarUsuario = (id) => {
    
  };

  const handleAgregarUsuario = () => {
    
    console.log('Agregar nuevo usuario');
  };

  return (
    <div className="">
      <MenuAdmin />

      <div className="mt-4 p-8">
        <h1 className="text-4xl font-bold mb-4 p-4">Usuarios</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-7 mr-7">
          {usuarios.map((usuario) => (
            <div key={usuario.id} className="bg-blue-200 p-4 rounded-lg flex items-center">
              { }
              <div className="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden mr-4">
                <img src={usuario.imagenUrl} alt={usuario.nombre} className="w-full h-full object-cover" />
              </div>
              { }
              <div className="flex-1">
                <h2 className="font-bold">{usuario.nombre}</h2>
                <p>Rol: {usuario.rol}</p>
                { }
              </div>
              { }
              <div className="ml-auto flex space-x-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded font-bold" onClick={() => handleEliminarUsuario(usuario.id)}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      { }
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded font-bold ml-10 " onClick={handleAgregarUsuario}>Agregar Usuario</button>
      </div>
    </div>
  );
};

export default Usuarios;