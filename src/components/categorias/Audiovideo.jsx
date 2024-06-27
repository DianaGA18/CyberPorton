import React from 'react'
import Menu from '../Menu';
import './Categorias.css';

const Audiovideo = () => {
  // Datos de ejemplo de productos
  const productos = [
    {
      id: 1,
      nombre: 'Sony',
      descripcion: 'Descripción del Producto 1.',
      precio: 100,
      imagen: 'https://www.radioshack.com.mx/store/medias/100065493.jpg-515ftw?context=bWFzdGVyfHJvb3R8NzI2MDV8aW1hZ2UvanBlZ3xhRGhsTDJnM055ODVNRFExTURNNE1EY3hPRE00THpFd01EQTJOVFE1TXk1cWNHZGZOVEUxWm5SM3wxOWY4NzQyMWJiMzlhNTc0ZWYzMDVjMTQ4MDU0MDBhMTYyZjk3NWEyMzQyYjcwYzQ1ZTdjNGVjMjA1MTJiZDBj',
    },
    {
      id: 2,
      nombre: 'Ultra HD SMART',
      descripcion: 'Descripción del Producto 2.',
      precio: 150,
      imagen: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/7eee42e6-d049-4a48-a94a-50dfcf812372.addf4c5d8d0b7181ec3bdb498f710385.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    },
    {
      id: 3,
      nombre: 'Mini componente Bluetooth ',
      descripcion: 'Descripción del Producto 3.',
      precio: 200,
      imagen: 'https://images.pcel.com/1600/Electronica-Minicomponentes-LG-CJ42-152472-6uAPf5X5fitvWOKy.jpg',
    },
    // Agrega más productos según sea necesario
  ];

  return (
    <div className='fondo'>
      <Menu />
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Buscar..." />
        <button className="search-button">Buscar</button> 
        <h1 className="computo">A U D I O - V I D E O</h1>
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

export default Audiovideo