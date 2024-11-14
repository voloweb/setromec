import Banner from './components/Banner';
import Marcas from '../../components/Marcas';
import AtuacoesServicos from './components/AtuacoesServicos';
import SistemasFotovoltaicos from './components/SistemasFotovoltaicos';
import AreasAtuacao from './components/AreasAtuacao';

import './index.css';

const Page = () => {
  return (
    <div className="home">
      <Banner />
      <Marcas />
      <AtuacoesServicos />
      <SistemasFotovoltaicos />
      <AreasAtuacao />

      <div className="py-5 mx-auto max-w-7xl">
        <div className="text-center font-semibold">
          <h2 className="text-5xl text-setromec-gray-4 mx-auto max-w-screen-md">
            Entre em contato e descubra como podemos <span className="text-setromec-blue-1">ajudar você!</span>
          </h2>
          <p className="text-sm text-setromec-gray-3 mx-auto max-w-md py-5">
            Entre em contato e agende uma visita para que possamos analisar e identificar a melhor solução para seu negócio.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page;
