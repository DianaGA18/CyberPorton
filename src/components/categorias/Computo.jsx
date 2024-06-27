import React from 'react';
import Menu from '../Menu';
import './Categorias.css'; // Import the CSS file for styling

const Computo = () => {
  // Datos de ejemplo de productos
  const productos = [
    {
      id: 1,
      nombre: 'Samsung Newsrooom',
      descripcion: 'Descripción del Producto 1.',
      precio: 100,
      imagen: 'https://img.global.news.samsung.com/mx/wp-content/uploads/2019/01/Notebook-9-Pro-3.jpg',
    },
    {
      id: 2,
      nombre: 'Samsung ',
      descripcion: 'Descripción del Producto 2.',
      precio: 150,
      imagen: 'https://img.global.news.samsung.com/latin/wp-content/uploads/2019/01/Notebook-9-Pro-KV-3-e1546961581944.jpg',
    },
    {
      id: 3,
      nombre: 'Notebook ',
      descripcion: 'Descripción del Producto 3.',
      precio: 200,
      imagen: 'https://image-us.samsung.com/SamsungUS/home/computing/windows-laptops/pdp/np750xbe-notebook7-15in/gallery-v1/012_PDP_Gallery_Images_Stella15_07-3-2019.jpg?$product-details-jpg$',
    },
    // Agrega más productos según sea necesario
  ];

  return (
    <div className='fondo'>
      <Menu />
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Buscar..." />
        <button className="search-button">Buscar</button> 
        <h1 className='computo'> C O M P U T O</h1>
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

export default Computo;
