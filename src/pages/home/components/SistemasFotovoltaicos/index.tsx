import ButtonFalarEspecialista from "../../../../components/ButtonFalarEspecialista";

const SistemasFotovoltaicos = () => {
  return (
    <div className="bg-setromec-blue-1">
      <div className="py-5 lg:py-20 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block p-5">
            <img src="/assets/sistemas-fotovoltaicos.png" alt="Sistemas Fotovoltaicos" />
          </div>
          <div className="flex flex-col justify-center text-white px-5">
            <h2 className="font-bold text-4xl pt-5">Sistemas Fotovoltaicos</h2>
            <div className="py-5">
              <p>
                Nossa divisão de energia solar fotovoltaica é preparada para
                projetar e instalar sistemas de geração de energia produzida por
                meio da radiação solar.
              </p>
              <p>
                Seja qual for o tamanho da sua necessidade, estamos prontos para
                atender você!
              </p>

              <ButtonFalarEspecialista secondary className="mt-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SistemasFotovoltaicos;
