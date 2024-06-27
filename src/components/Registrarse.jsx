import React, { useState } from 'react';

const Registrarse = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    // Aquí puedes añadir la lógica para el registro
    alert('¡Registro exitoso!');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          X
        </button>
        <h2 className="text-2xl mb-4">Registrarse</h2>
        <label className="block mb-2">
          Usuario:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
          />
        </label>
        <label className="block mb-4">
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
          />
        </label>
        <button
          onClick={handleRegister}
          className="w-full bg-[#1c78a7] text-white py-2 rounded-md hover:bg-[#0066BB] mb-2"
        >
          Registrarse
        </button>
        <button
          onClick={onClose}
          className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Registrarse;
