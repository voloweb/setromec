import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// componets
import Header from './components/Header';
import Footer from './components/Footer';
// pages
import Home from './pages/home';
import Sobre from './pages/sobre';
import AreasAtuacao from './pages/areas-atuacao';
import Clientes from './pages/clientes';
import Contato from './pages/contato';

const AppRoutes = () => {
  return (
    <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/sobre" Component={Sobre} />
          <Route path="/areas-atuacao" Component={AreasAtuacao} />
          <Route path="/clietes" Component={Clientes} />
          <Route path="/contato" Component={Contato} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
