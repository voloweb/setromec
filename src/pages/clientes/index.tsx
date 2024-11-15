import React from 'react';
import Marcas from '../../components/marcas';

const Page = () => {
  return (
    <div className="py-10 lg:py-20 mx-auto max-w-7xl">
      <div className="p-5">
        <span className="block font-bold text-3xl lg:text-4xl pb-2">
          Nosso clientes
        </span>
        <span className="text-sm text-setromec-gray-3">
          O que dizem nossos clientes sobre o nosso trabalho
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-5 order-last lg:order-first">
          <div className="relative">
            <div className="absolute bg-setromec-blue-1 top-0 left-0 w-2/5 h-2 lg:h-5"></div>
            <div className="absolute bg-setromec-blue-1 top-0 left-0 h-2/5 w-2 lg:w-5"></div>

            <div className="p-2 lg:p-5">
              <img
                src="assets/clientes/estacao-bh.png"
                alt="Estação BH"
                className="h-auto z-10 teste"
              />
            </div>

            <div className="absolute bg-setromec-blue-1 bottom-0 right-0 w-2/5 h-2 lg:h-5"></div>
            <div className="absolute bg-setromec-blue-1 bottom-0 right-0 h-2/5 w-2 lg:w-5"></div>
          </div>

          <div className="px-4 lg:px-5">
            <div className="bg-white mt-[-80px] max-w-full lg:max-w-[80%] shadow-md relative p-5 z-20">
              <span>
                &quot;Sem dúvida, recomendamos a Setromec a qualquer pessoa ou
                empresa que busca serviços de alta qualidade. Sua habilidade em
                oferecer soluções sob medida e seu compromisso é
                impressionante.&quot;
              </span>
            </div>
          </div>
        </div>

        <div className="p-5">
          <span className="block font-bold text-3xl lg:text-4xl">
            Estação BH
          </span>
          <p className="py-5">
            Estamos extremamente satisfeitos com os serviços prestados pela.
            Desde o primeiro contato, sua equipe demonstrou profissionalismo e
            expertise inigualáveis. Ao longo de nosso projeto, a empresa não
            apenas atendeu, mas superou nossas expectativas em todos os
            aspectos. A Setromec não se limitou a simplesmente fornecer
            soluções; eles entenderam nossas necessidades específicas e
            adaptaram suas soluções de forma inteligente e eficaz. Seja na
            instalação, manutenção ou consultoria, a dedicação e o
            comprometimento da equipe que são evidentes em cada etapa do
            processo. Além disso, gostaríamos de destacar a pontualidade e a
            transparência em todas as comunicações. Fomos mantidos informados
            durante todo o projeto, o que nos proporcionou uma sensação de
            confiança e tranquilidade.
          </p>

          <ul className="flex flex-col gap-2 pl-5 list-disc">
            <li>Suporte Pós-Serviço Excepcional</li>
            <li>Comunicação Transparente e Pontualidade</li>
            <li>Soluções Inteligentes</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-20">
        <div className="p-5">
          <span className="block font-bold text-3xl lg:text-4xl">Sebrae</span>
          <p className="py-5">
            “Estou extremamente satisfeito com a parceria que estabelecemos com
            a Setromec. Durante todo o processo, desde o planejamento até a
            implementação, sua equipe demonstrou um compromisso com a qualidade
            e a excelência, ainda mais se tratando de uma questão tão central e
            importante em qualquer empresa”
          </p>

          <ul className="flex flex-col gap-2 pl-5 list-disc">
            <li>Compromisso com a Segurança</li>
            <li>Flexibilidade e Adaptabilidade</li>
            <li>Profissionalismo Exemplar</li>
          </ul>
        </div>

        <div className="p-5">
          <div className="relative">
            <div className="absolute bg-setromec-blue-1 top-0 left-0 w-2/5 h-2 lg:h-5"></div>
            <div className="absolute bg-setromec-blue-1 top-0 left-0 h-2/5 w-2 lg:w-5"></div>

            <div className="p-2 lg:p-5">
              <img
                src="assets/clientes/estacao-bh.png"
                alt="Estação BH"
                className="h-auto z-10 teste"
              />
            </div>

            <div className="absolute bg-setromec-blue-1 bottom-0 right-0 w-2/5 h-2 lg:h-5"></div>
            <div className="absolute bg-setromec-blue-1 bottom-0 right-0 h-2/5 w-2 lg:w-5"></div>
          </div>

          <div className="px-4 lg:px-5">
            <div className="bg-white mt-[-80px] max-w-full lg:max-w-[80%] shadow-md relative p-5 z-20">
              <span>
                &quot;Sem dúvida, recomendamos a Setromec a qualquer pessoa ou
                empresa que busca serviços de alta qualidade. Sua habilidade em
                oferecer soluções sob medida e seu compromisso é
                impressionante.&quot;
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mt-20">
        <span className="block font-bold text-center text-3xl lg:text-4xl p-5 lg:mb-5">
          Confiam na Setromec
        </span>

        <Marcas />
      </div>
    </div>
  );
};

export default Page;
