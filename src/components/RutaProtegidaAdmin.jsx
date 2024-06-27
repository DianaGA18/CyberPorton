import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const RutaProtegidaAdmin = ({ element, ...rest }) => {
  // Lógica para verificar si el usuario es administrador
  const isAdmin = localStorage.getItem('userRole') === 'admin'; // Verifica si el rol almacenado es 'admin'

  return isAdmin ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/inicio-usuario" replace /> // Redirige a la página de inicio de usuario si no es administrador
  );
};

export default RutaProtegidaAdmin;
