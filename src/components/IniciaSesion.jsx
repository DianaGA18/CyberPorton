import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IniciaSesion = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [apiResponse] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const url = `http://172.168.1.60:3000/usuarioRol?usu=${encodeURIComponent(email)}&pas=${encodeURIComponent(password)}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Respuesta de la API:', data);

      if (data.length > 0 && data[0].rol) {
        const userRole = data[0].rol.toLowerCase(); // Acceder al campo 'rol' y convertir a minúsculas
        if (userRole === 'admin') {
          navigate('/inicio-admin');
        } else {
          navigate('/inicio-usuario');
        }
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Hubo un error al intentar iniciar sesión. Por favor, intenta de nuevo.');
    }
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
        <h2 className="text-2xl mb-4">Inicio de Sesión</h2>
        <label className="block mb-2">
          Correo:
          <input
            type="text"
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
          onClick={handleLogin}
          className="w-full bg-[#1c78a7] text-white py-2 rounded-md hover:bg-[#0066BB] mb-2"
        >
          Iniciar Sesión
        </button>
        <button
          onClick={onClose}
          className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600"
        >
          Cerrar
        </button>
        {apiResponse && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Respuesta de la API:</h3>
            <pre>{apiResponse}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default IniciaSesion;