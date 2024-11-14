import ServicosSwiper from "../../../../components/ServicosSwiper";

const AtuacoesServicos = () => {
  return (
    <div className="lg:py-20 mx-auto max-w-7xl py-5">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <h2 className="px-5 pt-5 font-bold text-3xl lg:text-4xl">Áreas de atuação e serviços prestados</h2>
        <p className="p-5">
          Trabalhamos com processos confiáveis, que garantem consistência e
          excelência nos resultados, independentemente do tamanho ou
          complexidade do projeto. Além disso, atuamos com ética e
          transparência e respeito com nossos parceiros e clientes
        </p>
      </div>

      <ServicosSwiper />
    </div>
  )
}

export default AtuacoesServicos;
