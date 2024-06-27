import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const RutaProtegida = ({ element, isAuthenticated, ...rest }) => {
  if (isAuthenticated) {
    return <Routes><Route {...rest} element={element} /></Routes>;
  } else {
    // Redirigir o mostrar un mensaje de error si el usuario no está autenticado
    return <Navigate to='/' />;
  }
};

export default RutaProtegida;
