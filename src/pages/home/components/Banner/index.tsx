import ButtonFalarEspecialista from '../../../../components/ButtonFalarEspecialista';

const Banner = () => {
  return (
    <div className="home-banner relative lg:h-[calc(100vh_-_80px)]">
      <div className="overlay-banner bg-[90%_30%] md:bg-[right_30%] lg:bg-left-top">
        <div className="grid md:grid-cols-2 h-full mx-auto max-w-7xl">
          <div className='flex flex-col justify-center p-5 py-10 gap-8'>
            <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-semibold">Soluções Inteligentes e Inovação para um Futuro Sustentável</h1>
            <p className="text-white lg:max-w-lg">
              A SETROMEC Engenharia Elétrica é especializada em soluções inovadoras
              para sistemas elétricos, oferecendo serviços de alta qualidade em
              projetos, instalação e manutenção.
            </p>

            <ButtonFalarEspecialista />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
