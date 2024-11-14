import React, { ReactElement } from 'react';
import {
  PhoneArrowUpRightIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import FormContato from '../../components/formContato';

type Contato = {
  id: number;
  icone: ReactElement;
  text: string;
  link: string;
};

const cotatos: Contato[] = [
  {
    id: 1,
    icone: (
      <PhoneArrowUpRightIcon
        aria-hidden="true"
        className="size-5 text-setromec-blue-1"
      />
    ),
    text: '(31) 3567 0001',
    link: 'tel:031 3567 0001',
  },
  {
    id: 1,
    icone: (
      <EnvelopeIcon
        aria-hidden="true"
        className="size-5 text-setromec-blue-1"
      />
    ),
    text: 'setromec@setromec.com.br',
    link: 'mailto:setromec@setromec.com.br',
  },
];

const Page = () => {
  return (
    <div className="py-10 lg:py-20 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="font-semibold px-5 pt-5">
          <h2 className="text-3xl lg:text-4xl text-setromec-gray-4 mx-auto max-w-screen-sm">
            <span>Entre em contato e descubra como podemos </span>
            <span className="text-setromec-blue-1">ajudar você!</span>
          </h2>
          <p className="text-sm text-setromec-gray-3 max-w-md py-5">
            Entre em contato e agende uma visita para que possamos analisar e
            identificar a melhor solução para seu negócio.
          </p>
          <div className="flex flex-col gap-2">
            {cotatos.map((item: Contato) => (
              <a
                key={item.id}
                href={item.link}
                className="flex items-center gap-4"
              >
                <div className="flex items-center justify-center bg-setromec-blue-1-opacity-25 rounded-full h-10 w-10">
                  {item.icone}
                </div>
                <span className="font-bold">{item.text}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="p-5">
          <FormContato />
        </div>
      </div>
    </div>
  );
};

export default Page;
