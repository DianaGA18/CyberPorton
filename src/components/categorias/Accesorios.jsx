import React from 'react'
import Menu from '../Menu';
import './Categorias.css';

const Accesorios = () => {
 // Datos de ejemplo de productos
 const productos = [
    {
      id: 1,
      nombre: 'Cargado de Laptop',
      descripcion: 'Descripción del Producto 1.',
      precio: 100,
      imagen: 'https://img.joinet.com/wp-content/uploads/2022/03/cargador-1.jpg',
    },
    {
      id: 2,
      nombre: 'Pasta termica alta temperatura',
      descripcion: 'Descripción del Producto 2.',
      precio: 150,
      imagen: 'https://compuaccesorios.com/images/virtuemart/product/pasta_termica30gramos.jpg',
    },
    {
      id: 3,
      nombre: 'Funda reversible Easy',
      descripcion: 'Descripción del Producto 3.',
      precio: 200,
      imagen: 'https://www.officedepot.com.mx/medias/100049442.jpg-1200ftw?context=bWFzdGVyfHJvb3R8MjE1ODAyfGltYWdlL2pwZWd8YURZMkwyZzVaQzh4TVRJeE5UZzFOVEU1TURBME5pOHhNREF3TkRrME5ESXVhbkJuWHpFeU1EQm1kSGN8NjUxYWEwOTJjZDc5ZjM0MWI0ZTkxYzZjZGFhYmE1ZGI5YTMxNzRlYTliMDNlOWQ5NTU3NGY3NGI4NzFjODUwOA',
    },
    // Agrega más productos según sea necesario
  ];

  return (
    <div className='fondo'>
      <Menu />
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Buscar..." />
        <button className="search-button">Buscar</button> 
        <h1 className="computo">A C C E S O R I O S</h1>
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
export default Accesorios