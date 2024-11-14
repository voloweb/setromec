import { HomeIcon, BuildingStorefrontIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import ButtonFalarEspecialista from "../../../../components/ButtonFalarEspecialista";
import { ReactElement } from 'react';

type Area = {
  id: number;
  icone: ReactElement;
  text: string;
}

const areas: Area[] = [
  { id: 1, icone: <HomeIcon aria-hidden="true" className="size-5 text-setromec-blue-1" />, text: 'Condomínios verticais e horizontais' },
  { id: 2, icone: <BuildingStorefrontIcon aria-hidden="true" className="size-5 text-setromec-blue-1" />, text: 'Comércios' },
  { id: 3, icone: <BuildingOfficeIcon aria-hidden="true" className="size-5 text-setromec-blue-1" />, text: 'Indústrias' },
]

const AreasAtuacao = () => {
  return (
    <div className="py-5 lg:py-20 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-5 my-auto">
          <div className="grid grid-cols-3 gap-5 h-80 lg:h-[450px] w-full">
            <div className="col-span-2 row-span-2 bg-home-areas-atuacao-1 bg-no-repeat bg-cover rounded"></div>
            <div className="bg-home-areas-atuacao-2 bg-no-repeat bg-cover rounded"></div>
            <div className="bg-home-areas-atuacao-3 bg-no-repeat bg-cover rounded"></div>
          </div>
        </div>

        <div className="flex flex-col justify-center p-5">
          <h2 className="font-bold text-3xl lg:text-4xl">Quais nossas áreas de atuação?</h2>
          <p className="py-5">
            Trabalhamos com processos confiáveis, que garantem consistência e
            excelência nos resultados, independentemente do tamanho ou
            complexidade do projeto. Além disso, atuamos com ética e
            transparência e respeito com nossos parceiros e clientes
          </p>

          <div className="flex flex-col gap-2">
            {areas.map((item: Area) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="flex items-center justify-center bg-setromec-blue-1-opacity-25 rounded-full h-10 w-10">
                 {item.icone}
                </div>
                <span className="font-bold">{item.text}</span>
              </div>
            ))}
          </div>

          <ButtonFalarEspecialista className="mt-5" />
        </div>
      </div>
    </div>
  )
}

export default AreasAtuacao;
