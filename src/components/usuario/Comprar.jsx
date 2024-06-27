import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Menu from './MenuUsuario';

const Comprar = () => {
  const { id } = useParams();

  const producto = {
    id: id,
    nombre: `Producto ${id}`,
    descripcion: 'Descripción detallada del producto',
    precio: 100, 
    imagenUrl: 'https://resources.sears.com.mx/medios-plazavip/mkt/630f86afdd934_image_166196186026jpg.jpg?scale=500&qlty=75', 
  };

  const [cantidad, setCantidad] = useState(1);

  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [showZoom, setShowZoom] = useState(false);

  const handleChangeCantidad = (event) => {
    const nuevaCantidad = parseInt(event.target.value, 10);
    setCantidad(nuevaCantidad);
  };

  const handleMouseEnter = (event) => {
    setShowZoom(true);
    updateZoomPosition(event);
  };

  const handleMouseMove = (event) => {
    updateZoomPosition(event);
  };

  const handleMouseLeave = () => {
    setShowZoom(false);
  };

  const updateZoomPosition = (event) => {
    const rect = event.target.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    setZoomPosition({
      x: offsetX,
      y: offsetY,
    });
  };

  const totalCompra = producto.precio * cantidad;

  return (
    <div className="flex flex-col">
      <Menu />

      <div className="max-w-4xl mt-8 p-8 flex items-center border border-blue-500 rounded bg-blue-200 shadow">
        <div
          className="flex-shrink-0 w-1/2 border border-blue-500 rounded bg-blue-200 shadow relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img src={producto.imagenUrl} alt={producto.nombre} className="w-full rounded-lg" />

          { }
          {showZoom && (
            <div
              className="absolute border border-blue-500 rounded bg-blue-200 shadow"
              style={{
                width: '200%',
                height: '200%',
                transform: 'scale(2)',
                transformOrigin: `${zoomPosition.x}px ${zoomPosition.y}px`,
                left: `-${zoomPosition.x}px`,
                top: `-${zoomPosition.y}px`,
              }}
            >
              <img src={producto.imagenUrl} alt={producto.nombre} className="w-full rounded-lg" />
            </div>
          )}
        </div>
        <div className="ml-4 w-1/2">
          <h2 className="text-2xl font-bold">{producto.nombre}</h2>
          <p className="text-lg text-gray-600">{producto.descripcion}</p>
          <p className="text-lg font-bold mt-4">${producto.precio.toFixed(2)}</p>

          {}
          <form className="mt-4">
            <label htmlFor="cantidad" className="block text-sm font-medium text-gray-700">
              Cantidad:
            </label>
            <input
              type="number"
              id="cantidad"
              name="cantidad"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={cantidad}
              onChange={handleChangeCantidad}
            />

            <p className="text-lg font-bold mt-4">Total: ${totalCompra.toFixed(2)}</p>

            {}

            <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded font-bold">
              Comprar Ahora
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comprar;
