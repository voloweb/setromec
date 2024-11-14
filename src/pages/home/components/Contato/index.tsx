import React from 'react';
import FormContato from '../../../../components/formContato';

const Contato = () => {
  return (
    <div className="px-5 pb-10 lg:pb-20 mx-auto max-w-7xl">
      <div className="text-center font-semibold">
        <h2 className="text-3xl lg:text-4xl text-setromec-gray-4 mx-auto max-w-screen-sm">
          <span>Entre em contato e descubra como podemos </span>
          <span className="text-setromec-blue-1">ajudar você!</span>
        </h2>
        <p className="text-sm text-setromec-gray-3 mx-auto max-w-md py-5">
          Entre em contato e agende uma visita para que possamos analisar e
          identificar a melhor solução para seu negócio.
        </p>
      </div>

      <div className="mx-auto max-w-screen-sm">
        <FormContato />
      </div>
    </div>
  );
};

export default Contato;
