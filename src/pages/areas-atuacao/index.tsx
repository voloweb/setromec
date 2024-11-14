import React from 'react';
import ServicosSwiper from '../../components/servicosSwiper';

const Page = () => {
  return (
    <div className="py-10 lg:py-20 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <span className="block lg:col-span-12 lg:col-start-5 font-bold text-3xl lg:text-4xl p-5 pb-0">
          Serviços Prestados
        </span>
        <div className="lg:col-span-4 p-5">
          <span className="block font-bold text-xl lg:text-2xl pb-5">
            O que fazemos e com o que trabalhamos
          </span>
          <p>
            Áreas de atuação e serviços prestados. Garantimos o pronto
            atendimento e a confiabilidade do sistema elétrico de potência de
            nossos clientes.
          </p>
        </div>
        <div className="lg:col-span-8 p-5 pt-0 lg:p-5">
          <p>
            Somos sua fonte confiável para soluções de engenharia elétrica em
            Belo Horizonte. Como especialistas em energia, estamos comprometidos
            em fornecer serviços de alta qualidade que atendam às necessidades
            específicas de nossos clientes, seja para projetos residenciais,
            comerciais ou industriais. Nossa equipe experiente de engenheiros
            elétricos utiliza tecnologia de ponta e práticas sustentáveis para
            projetar, instalar e manter sistemas elétricos seguros, eficientes e
            confiáveis. Desde o planejamento inicial até a conclusão do projeto,
            priorizamos a excelência e a satisfação do cliente. Na Energia Nova,
            estamos energizados para fazer a diferença em sua infraestrutura
            elétrica.
          </p>
        </div>
      </div>

      <img
        src="assets/area-atuacao/banner.png"
        alt="Área atuação banner"
        className="p-5 w-full rounded-3xl"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <span className="block font-bold text-3xl lg:text-4xl p-5 pb-0">
          Entregamos os melhores resultados desde 1988
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-5 pb-0 lg:pb-5">
          <ul className="flex flex-col gap-2 pl-5 list-disc">
            <li>
              Engenharia Elétrica: Planejamento, projeto e execução de sistemas
              elétricos para diversos fins, desde residenciais até industriais.
            </li>
            <li>
              Alta Tensão e Média Tensão: Instalação, manutenção e reparo de
              sistemas elétricos de alta e média tensão, garantindo segurança e
              eficiência.
            </li>
            <li>
              Manutenção Preventiva e Corretiva: Procedimentos regulares para
              prevenir falhas e intervenções rápidas para corrigir problemas em
              sistemas elétricos.
            </li>
            <li>
              Instalações Elétricas: Instalação profissional de sistemas
              elétricos em novas construções ou para atualização de instalações
              existentes.
            </li>
            <li>
              Serviços Industriais e Prediais: Soluções elétricas adaptadas às
              necessidades específicas de indústrias e edifícios comerciais e
              residenciais.
            </li>
            <li>
              Subestações: Projeto, instalação e manutenção de subestações
              elétricas para distribuição segura e eficiente de energia.
            </li>
            <li>
              Projetos Elétricos: Desenvolvimento de projetos personalizados
              para atender aos requisitos específicos de cada cliente.
            </li>
          </ul>
        </div>

        <div className="p-5 pt-2 lg:pb-5">
          <ul className="flex flex-col gap-2 pl-5 list-disc">
            <li>
              SPDA (Sistema de Proteção contra Descargas Atmosféricas):
              Implementação de sistemas para proteger edifícios e estruturas
              contra danos causados por raios.
            </li>
            <li>
              Laudos Técnicos: Emissão de laudos técnicos para avaliação e
              conformidade de sistemas elétricos com normas e regulamentos.
            </li>
            <li>
              Coordenogramas, Seletividade e Curto Circuito: Análise e
              otimização de sistemas elétricos para garantir eficiência e
              segurança.
            </li>
            <li>
              Banco de Capacitores: Instalação de bancos de capacitores para
              correção do fator de potência e economia de energia.
            </li>
            <li>
              Energia Solar Fotovoltaica: Projeto e instalação de sistemas de
              energia solar para redução de custos e sustentabilidade ambiental.
            </li>
            <li>
              Termografia: Inspeções termográficas para identificar e resolver
              problemas em sistemas elétricos de forma não invasiva.
            </li>
          </ul>
        </div>
      </div>

      <div className="p-5">
        <span className="block font-bold text-3xl lg:text-4xl pb-10">
          Serviços
        </span>

        <ServicosSwiper />
      </div>
    </div>
  );
};

export default Page;
