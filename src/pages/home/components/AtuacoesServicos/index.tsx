import React from 'react';
import ServicosSwiper from '../../../../components/servicosSwiper';

const AtuacoesServicos = () => {
  return (
    <div className="px-5 py-10 lg:py-20 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <h2 className="font-bold text-3xl lg:text-4xl py-5">
          Áreas de atuação e serviços prestados
        </h2>
        <p className="pt-0 lg:py-5">
          Trabalhamos com processos confiáveis, que garantem consistência e
          excelência nos resultados, independentemente do tamanho ou
          complexidade do projeto. Além disso, atuamos com ética e transparência
          e respeito com nossos parceiros e clientes
        </p>
      </div>

      <ServicosSwiper className="py-5 lg:pt-10" />
    </div>
  );
};

export default AtuacoesServicos;
