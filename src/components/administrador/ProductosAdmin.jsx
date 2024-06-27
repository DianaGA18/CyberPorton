// Productos.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuAdmin from './MenuAdmin';

const productos = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Breve descripción del producto 1',
    price: '$100',
    shipping: 'Envío gratis',
    image: 'https://resources.sears.com.mx/medios-plazavip/mkt/630f86afdd934_image_166196186026jpg.jpg?scale=500&qlty=75'
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Breve descripción del producto 2',
    price: '$200',
    shipping: 'Envío gratis',
    image: 'https://www.sony.com.mx/image/b789488955522f13ffb4778bd08465c6?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF'
  },
];

const Productos = () => {
  const navigate = useNavigate();

  const handleComprarClick = (id) => {
    navigate(`/comprar/${id}`);
  };

  return (
    <div className="relative">
      <MenuAdmin className="z-10" />
      <h1 className="text-4xl font-bold mb-4 p-2 ml-10">Productos</h1>
      <div className="overflow-y-scroll max-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 px-4 md:px-8 ml-10">
          <div className="md:col-span-1 space-y-4">
            <div className="p-4 border border-blue-500 rounded bg-blue-200 shadow">
              <h2 className="text-lg font-bold">Envío</h2>
              <p>Detalles sobre el envío</p>
            </div>
            <div className="p-4 border border-blue-500 rounded bg-blue-200 shadow">
              <h2 className="text-lg font-bold">Costo de Envío</h2>
              <p>Detalles sobre el costo de envío</p>
            </div>
            <div className="p-4 border border-blue-500 rounded bg-blue-200 shadow">
              <h2 className="text-lg font-bold">Tiempo de Entrega</h2>
              <p>Detalles sobre el tiempo de entrega</p>
            </div>
            <div className="p-4 border border-blue-500 rounded bg-blue-200 shadow">
              <h2 className="text-lg font-bold">Condición</h2>
              <p>Detalles sobre la condición del producto</p>
            </div>
            <div className="p-4 border border-blue-500 rounded bg-blue-200 shadow">
              <h2 className="text-lg font-bold">Detalles de la Publicación</h2>
              <p>Detalles sobre la publicación del producto</p>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 gap-4">
              {productos.map(producto => (
                <div key={producto.id} className="p-4 border border-blue-500 rounded bg-blue-200 shadow flex">
                  <img src={producto.image} alt={producto.name} className="w-40 h-40 object-cover mr-4 mt-9" />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-semibold">{producto.name}</h2>
                      <p>{producto.description}</p>
                      <p className="text-lg font-bold">{producto.price}</p>
                      <p>{producto.shipping}</p>
                    </div>
                    <div className="self-end mt-4">
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
