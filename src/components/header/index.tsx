import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { NavigationType, navigation } from './navigation';

const Header = () => {
  const location = useLocation();
  const [currentMenu, setCurrentMenu] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  window.addEventListener('resize', () => setMobileMenuOpen(false));

  useEffect(() => {
    window.scrollTo(0, 0);
    const route = navigation.find((nav: NavigationType) => nav.href === location.pathname);
    setCurrentMenu(route ? route.name : '');
  }, [location]);

  const toogleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  }

  return (
    <nav className="bg-white shadow-md h-20 z-50">
      <div className="flex items-center justify-between h-full px-5 md:p-0">
        <div className="flex flex-1 items-center justify-center lg:justify-between">
          <div className="flex flex-1 items-center p-0 gap-0 md:p-5 md:gap-5 mx-auto max-w-7xl">
            <Link to="/" className="flex items-center">
              <img alt="Logo Setromec" src="assets/logo.png" className="h-8 md:h-10 w-auto" />
            </Link>
            <div className="hidden md:flex flex-1 md:justify-end lg:justify-start xl:justify-center gap-8">
              {navigation.map((item: NavigationType) => (
                <Link key={item.name} to={item.href} aria-current={currentMenu === item.name ? 'page' : undefined}
                  className={`
                    font-medium font-dm-sans px-1 pt-1 border-b-2 hover:text-setromec-blue-2 hover:border-b-2
                    ${currentMenu === item.name ? 'text-setromec-blue-2 border-setromec-blue-2' : 'border-transparent'}
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/contato" className="hidden absolute lg:flex right-0 items-center justify-center gap-2 w-80 h-20 bg-setromec-blue-1">
            <span className="text-white">Falar com especialista</span>
            <ArrowRightIcon aria-hidden="true" className="text-white size-4" />
          </Link>
        </div>

        <div className="flex items-center md:hidden">
          <button className="group inline-flex items-center justify-center" onClick={toogleMobileMenu}>
            <span className="sr-only">Open main menu</span>
            { mobileMenuOpen ? (
              <XMarkIcon aria-hidden="true" className="size-8" />
            ): (
              <Bars3Icon aria-hidden="true" className="size-8" />
            )}
          </button>
        </div>
      </div>

      <Transition
        show={mobileMenuOpen}
        as="div"
        enter="transform transition ease-in-out duration-500 sm:duration-700"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-500 sm:duration-700"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        className="shadow-md fixed w-screen h-[calc(100%-80px)] bg-white p-3"
      >
        {navigation.map((item: NavigationType) => (
          <Link
            key={item.name}
            to={item.href}
            aria-current={currentMenu === item.name ? 'page' : undefined}
            className={`
              block font-medium font-dm-sans rounded p-2 mb-2 hover:bg-setromec-blue-1 hover:text-white
              ${currentMenu === item.name && 'bg-setromec-blue-1 text-white'}
            `}
          >
            {item.name}
          </Link>
        ))}
      </Transition>

    </nav>
  )
}

export default Header
