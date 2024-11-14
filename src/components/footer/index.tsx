import React from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { navigation, NavigationType } from '../header/navigation';
import ButtonFalarEspecialista from '../ButtonFalarEspecialista';

const scrollToTop = () => {
  const doc = document;
  const currentScroll = doc.documentElement.scrollTop || doc.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentScroll - currentScroll / 5);
  }
};

const Footer = () => {
  return (
    <footer>
      <div className="relative bg-setromec-gray-1 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 mx-auto max-w-7xl">
          <div className="lg:col-span-4 text-white px-5 py-5 md:py-10">
            <img
              alt="Logo Setromec"
              src="assets/logo-white.png"
              className="h-8 md:h-10 w-auto mb-8"
            />
            <p className="mb-8">
              Somos uma empresa privada de capital nacional, fundada em junho de
              1988 na cidade de Belo Horizonte – MG e atuamos na área de
              engenharia elétrica.
            </p>
            <div className="flex gap-8">
              <a href="tel:031 3567 0001" className="hover:opacity-80">
                (00) 99998-8888
              </a>
              <span>29.783.930/0001-40</span>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-5 text-white p-5 md:py-10">
            {navigation.map((item: NavigationType) => (
              <Link
                key={item.name}
                to={item.href}
                className="font-medium font-dm-sans px-1 pt-1 hover:opacity-80"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-5 lg:col-span-4 text-white px-5 py-5 md:py-10">
            <ButtonFalarEspecialista />
            <a
              href="mailto:setromec@stromec.com.br"
              className="hover:opacity-80"
            >
              setromec@stromec.com.br
            </a>
          </div>

          <div className="flex justify-end px-5 py-5 md:py-10 absolute bottom-0 right-0 lg:relative">
            <button
              onClick={scrollToTop}
              type="button"
              className="flex justify-center items-center rounded-full bg-setromec-blue-1 shadow-md size-9 md:size-12"
            >
              <ArrowUpIcon aria-hidden="true" className="size-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      <p className="bg-setromec-gray-2 text-sm text-white text-center py-1">
        <span>Desenvolvido ❤ pela </span>
        <a
          href="https://voloweb.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          Volo Agência Digital
        </a>
      </p>
    </footer>
  );
};

export default Footer;
