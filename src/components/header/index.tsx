import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { NavigationType, navigation } from './navigation';

const Header = () => {
  const location = useLocation();
  const [currentMenu, setCurrentMenu] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const route = navigation.find((nav: NavigationType) => nav.href === location.pathname);
    setCurrentMenu(route ? route.name : '');
  }, [location]);

  return (
    <Disclosure as="nav" className="bg-white shadow-md h-20">
      <div className="flex items-center justify-between h-full px-5 md:p-0">
        <div className="flex flex-1 items-center justify-between h-full">
          <div className="flex flex-1 items-center p-0 gap-0 md:p-5 md:gap-5 mx-auto max-w-7xl">
            <Link to="/" className="flex items-center">
              <img alt="Logo Setromec" src="assets/logo.png" className="h-8 md:h-10 w-auto" />
            </Link>
            <div className="hidden md:flex flex-1 justify-center gap-8">
              {navigation.map((item: NavigationType) => (
                <Link key={item.name} to={item.href} aria-current={currentMenu === item.name ? 'page' : undefined}
                  className={`
                    font-medium font-dm-sans px-1 pt-1 border-setromec-blue-2 hover:text-setromec-blue-2 hover:border-b-2
                    ${currentMenu === item.name && 'text-setromec-blue-2 border-b-2'}
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/contato" className="hidden lg:flex items-center justify-center gap-2 px-16 h-full bg-setromec-blue-1">
            <span className="text-white">Falar com especialista</span>
            <ArrowRightIcon aria-hidden="true" className="text-white size-4" />
          </Link>
        </div>

        <div className="flex items-center md:hidden">
          <DisclosureButton className="group inline-flex items-center justify-center">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="block size-8 group-data-[open]:hidden" />
            <XMarkIcon aria-hidden="true" className="hidden size-8 group-data-[open]:block" />
          </DisclosureButton>
        </div>
      </div>

      <DisclosurePanel className="md:hidden absolute shadow-md w-full bg-white p-3">
        {navigation.map((item: NavigationType) => (
          <DisclosureButton
            key={item.name}
            as={Link}
            to={item.href}
            aria-current={currentMenu === item.name ? 'page' : undefined}
            className={`
              block font-medium font-dm-sans px-1 mb-4 hover:text-setromec-blue-2 hover:border-b-2
              ${currentMenu === item.name && 'text-setromec-blue-2'}
            `}
          >
            {item.name}
          </DisclosureButton>
        ))}
      </DisclosurePanel>
    </Disclosure>
  )
}

export default Header
