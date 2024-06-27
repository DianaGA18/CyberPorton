import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from './MenuUsuario';

const Pedidos = () => {
  const navigate = useNavigate();

  const productos = [
    {
      id: 1,
      nombre: 'Producto 1',
      entregado: true,
      fecha: '2024-06-28',
      caracteristicas: 'Descripción del producto 1',
      imagenUrl: 'https://www.radioshack.com.mx/store/medias/100112384.jpg-515ftw?context=bWFzdGVyfHJvb3R8MTA4OTg2fGltYWdlL2pwZWd8YURFNUwyaGtNaTg1TVRBNU56a3lPRGd5TnpFNEx6RXdNREV4TWpNNE5DNXFjR2RmTlRFMVpuUjN8N2QyYTEwMmNiZTQ0ODM1ZDQ5ZGI1OTEzNTRmMjQ0NmI4ZTRjYTA4YWYzNDYzYjczNTUxYzkwZjUxYmY0ZTBhMw'
    },
    {
      id: 2,
      nombre: 'Producto 2',
      entregado: false,
      fecha: '2024-06-25',
      caracteristicas: 'Descripción del producto 2',
      imagenUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Uno_-_R3.jpg'
    },
    {
      id: 3,
      nombre: 'Producto 3',
      entregado: true,
      fecha: '2024-06-28',
      caracteristicas: 'Descripción del producto 3',
      imagenUrl: 'https://img.joinet.com/wp-content/uploads/2022/03/cargador-1.jpg'
    },
    {
      id: 4,
      nombre: 'Producto 4',
      entregado: false,
      fecha: '2024-06-25',
      caracteristicas: 'Descripción del producto 4',
      imagenUrl: 'https://perfectchoice.me/cdn/shop/products/PC-240747_05A_1.jpg?v=1678383590'
    }
  ];

  return (
    <div className="flex flex-col h-screen">
      <Menu />
      <div className="flex flex-col items-center flex-grow">
        <div className="w-full p-4 md:w-2/3">
          <h1 className="text-4xl font-bold mb-4 ml-8">Mis Compras</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {productos.map((producto) => (
              <div key={producto.id} className="bg-blue-200 p-6 rounded-lg flex items-center mb-6 ml-9 md:ml-0">
                <div className="w-32 h-32 flex-shrink-0 mr-4">
                  <img src={producto.imagenUrl} alt={producto.nombre} className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-lg">{producto.nombre}</h2>
                  <p className="text-sm">{producto.entregado ? 'Entregado' : 'Pendiente de entrega'}</p>
                  <p className="text-sm">Fecha: {producto.fecha}</p>
                  <p className="text-sm">{producto.caracteristicas}</p>
                </div>
                <div className="ml-auto flex flex-col space-y-2">
                  <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded font-bold"
                    onClick={() => navigate('/productos')}
                  >
                    Volver a comprar
                  </button> 
                  <button className="bg-blue-500 text-white px-4 py-2 rounded font-bold"
                  onClick={() => navigate('/detalle-compra')}>Ver compra</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pedidos;
