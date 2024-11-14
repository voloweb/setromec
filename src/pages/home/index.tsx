import Banner from './components/Banner';
import Marcas from '../../components/Marcas';
import AtuacoesServicos from './components/AtuacoesServicos';
import SistemasFotovoltaicos from './components/SistemasFotovoltaicos';
import AreasAtuacao from './components/AreasAtuacao';
import Contato from './components/Contato';

const Page = () => {
  return (
    <div className="home">
      <Banner />
      <Marcas />
      <AtuacoesServicos />
      <SistemasFotovoltaicos />
      <AreasAtuacao />
      <Contato />
    </div>
  )
}

export default Page;
