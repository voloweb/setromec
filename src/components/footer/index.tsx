import { ArrowUpIcon } from '@heroicons/react/24/outline'
import { navigation, NavigationType } from '../header/navigation';
import { Link } from 'react-router-dom';

const scrollToTop = () => {
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo (0, currentScroll - (currentScroll / 10));
    }
}

const Footer = () => {
  return (
    <footer>
      <div className="bg-footer-1">
        <div className="grid grid-cols-5 mx-auto max-w-7xl">
          <div className="col-span-2 text-white px-4 py-10">
            <img alt="Logo Setromec" src="assets/logo-white.png" className="h-8 md:h-10 w-auto mb-8" />
            <p className="mb-8">
              Somos uma empresa privada de capital nacional, fundada em junho de
              1988 na cidade de Belo Horizonte – MG e atuamos na área de
              engenharia elétrica.
            </p>
            <div className="flex gap-8">
              <a href="tel:+55 038 99998-8888" className="hover:opacity-80">(00) 99998-8888</a>
              <span>29.783.930/0001-40</span>
            </div>
          </div>

          <div className="flex flex-col gap-5 text-white px-4 py-10">
            {navigation.map((item: NavigationType) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium font-dm-sans px-1 pt-1 hover:opacity-80`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="text-white px-4 py-10">
            <a href="mailto:setromec@stromec.com.br" className="hover:opacity-80">setromec@stromec.com.br</a>
          </div>

          <div className="flex justify-end px-4 py-10">
            <button onClick={scrollToTop} className="flex justify-center items-center rounded-full bg-setromec-blue-1 shadow-md size-12">
              <ArrowUpIcon aria-hidden="true" className="size-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      <p className="bg-footer-2 text-sm text-white text-center py-1">
        Desenvolvido ❤ pela{' '}
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
  )
}

export default Footer;
