import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const RutaProtegidaUsuario = ({ element, ...rest }) => {
    const { user } = useAuth();

    return user ? (
        <Route {...rest} element={element} />
    ) : (
        <Navigate to="/" replace />
    );
};

export default RutaProtegidaUsuario;
