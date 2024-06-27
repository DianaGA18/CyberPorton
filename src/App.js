import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Registrarse from './components/Registrarse';
import CarroLink from './components/CarroLink';
import InicioUsuario from './components/usuario/InicioUsuario';
import Pedidos from './components/usuario/Pedidos';
import VerCompra from './components/usuario/VerCompra';
import DetalleCompra from './components/usuario/DetalleCompra';
import Quiensoy from './components/centroInform/Quiensoy';
import Informacion from './components/centroInform/Informacion';
import Computo from './components/categorias/Computo';
import Audiovideo from './components/categorias/Audiovideo';
import Accesorios from './components/categorias/Accesorios';
import Telcel from './components/categorias/Telcel';
import InicioAdmin from './components/administrador/InicioAdmin';
import ComprasAdmin from './components/administrador/ComprasAdmin';
import IniciaSesion from './components/IniciaSesion';
import MiCuenta from './components/usuario/MiCuenta';
import Usuarios from './components/administrador/Usuarios';

import Comprar from './components/usuario/Comprar';
import Productos from './components/usuario/Productos';
import ProductosAdmin from './components/administrador/ProductosAdmin';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/registrarme" element={<Registrarse />} />
          <Route path="/carrito" element={<CarroLink />} />
          <Route path="/inicio-usuario" element={<InicioUsuario />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/ver-compra" element={<VerCompra />} />
          <Route path="/detalle-compra" element={<DetalleCompra />} />
          <Route path="/inicia-sesion" element={<IniciaSesion />} />
          <Route path="/quienes-somos" element={<Quiensoy />} />
          <Route path="/informacion" element={<Informacion />} />
          <Route path="/computo" element={<Computo />} />
          <Route path="/audio-video" element={<Audiovideo />} />
          <Route path="/accesorios" element={<Accesorios />} />
          <Route path="/telcel" element={<Telcel />} />
          <Route path="/mi-cuenta" element={<MiCuenta />} />

          <Route path="/inicio-admin" element={<InicioAdmin />}/>
          <Route path="/compras-admin" element={<ComprasAdmin />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/productos-admin" element={<ProductosAdmin />} />

          <Route path='/productos' element={<Productos/>}/> 
          <Route path='/users' element={<Usuarios/>}/> 
          <Route path="/comprar/:id" element={<Comprar/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
