import React from 'react';

function DetalleCompraAdmin() {
  return (
    <div className='mt-2'>
      <div className='flex justify-start'>
        <div className='w-4/5 mt-3 bg-gray-200'>
          <p>Registrar Nueva Compra</p>
        </div>
        <div className='bg-gray-200 w-1/5 md:p-8 p-4 m-3 md:text-2xl text-base'>
          <p className='font-semibold'>Proveedores</p>
          <br />
          <p>- Mercado Libre</p>
          <p>- Amazon</p>
          <p>- Cyber Puerta</p>
        </div>
      </div>
    </div>
  );
}

export default DetalleCompraAdmin;
