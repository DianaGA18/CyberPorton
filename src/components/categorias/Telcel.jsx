import React from 'react'
import Menu from '../Menu';
import './Categorias.css';

const Telcel = () => {
   // Datos de ejemplo de productos
   const productos = [
    {
      id: 1,
      nombre: 'Xiaomi Redmi Note 13Pro',
      descripcion: 'Descripción del Producto 1.',
      precio: 100,
      imagen: 'https://www.gonzalezgimenez.com.py/storage/sku/xiaomi-celulares-celular-xiaomi-redmi-note-13-pro-2568gb-fgreen-1-1-1710357685.png',
    },
    {
      id: 2,
      nombre: 'Apple iphone 15 Pro',
      descripcion: 'Descripción del Producto 2.',
      precio: 150,
      imagen: 'https://cdn1.coppel.com/images/catalog/pm/2405423-1.jpg',
    },
    {
      id: 3,
      nombre: 'Samsung Galaxy S23 Ultra',
      descripcion: 'Descripción del Producto 3.',
      precio: 200,
      imagen: 'https://a-static.mlcdn.com.br/450x450/celular-samsung-galaxy-s23-ultra-5g-1tb-12gb-ram-tela-infinita-de-6-8-dual-chip/samsung/4004/055f2d5dca21a4944f61c99fdffbe627.jpeg',
    },
    // Agrega más productos según sea necesario
  ];

  return (
    <div className='fondo'>
      <Menu />
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Buscar..." />
        <button className="search-button">Buscar</button> 
        <h1 className="computo">C E L U L A R E S -  T E L E F O N I A</h1>
      </div>
      <div className="ordenar">
        <select className="dropdown-select">
          <option value="opcion1">Ordenar por ...</option>
          <option value="opcion1">Más relevante</option>
          <option value="opcion2">Menor precio</option>
          <option value="opcion3">Mayor precio</option>
        </select>
      </div>

      {/* Renderización de productos */}
      {productos.map((producto) => (
        <div className="producto" key={producto.id}>
          <div className="imagen">
            <img src={producto.imagen} alt={producto.nombre} />
          </div>
          <div className="detalle">
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <div className="precio">
              <span>${producto.precio}</span>
              <button className="comprar-button">Comprar</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Telcel