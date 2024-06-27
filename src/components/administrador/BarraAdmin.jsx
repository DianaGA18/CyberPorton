import React from 'react';

function BarraAdmin() {
  return (
    <div>
      <div className='bg-[#0066BB]'>
        <h2 className='text-white font-bold text-center p-6 text-2xl md:text-3xl'>
          El producto más vendido es: Motorola Edge 40 Neo
        </h2>
      </div>
      <div className='flex justify-start'>
        <div className='w-4/5'>
          <img
            className="pl-2 pr-2 md:pl-20 md:pr-20 w-full"
            src={`${process.env.PUBLIC_URL}/static/img/grafica.png`}
            alt="Cyber Porton"
          />
        </div>
        <div className='bg-gray-200 w-1/5 md:p-14 p-4 m-3 md:text-2xl text-base'>
          <p className='font-semibold'>Se está acabando el stock!!!</p>
          <br />
          <p>- 4 Laptop Thinkpad E15 2Gen 16GB RAM</p>
          <p>- 3 Hisense Smart TV LED A6H 55", 4K Ultra HD, Negro</p>
          <p>- 1 Mouse Gamer Logitech Óptico G305, Inalámbrico, USB, 12.000DPI, Azul</p>
        </div>
      </div>
    </div>
  );
}

export default BarraAdmin;
