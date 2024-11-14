import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Slide = {
  id: number;
  classBg: string;
  title: string;
  lista: string[]
}

const slides: Slide[] = [
  {
    id: 1,
    classBg: "bg-sw-projeto-laudos",
    title: "Projetos e laudos",
    lista: [
      "Subestações Elétricas",
      "Quadros Elétricos",
      "Banco de capacitores para correção do FP",
      "Usina fotovoltaica (solar)",
      "Comissionamento de SE"
    ]
  },
  {
    id: 2,
    classBg: "bg-sw-instalacaoes-obras",
    title: "Instalações e obras",
    lista: [
      "Subestações Elétricas",
      "Quadros Elétricos",
      "Banco de capacitores para correção do FP",
      "Usina fotovoltaica (solar)",
      "Comissionamento de SE",
    ]
  },
  {
    id: 3,
    classBg: "bg-sw-manutencao-eletrica",
    title: "Manutenção elétrica",
    lista: [
      "Subestações Elétricas",
      "Quadros Elétricos",
      "Banco de capacitores para correção do FP",
      "Usina fotovoltaica (solar)",
      "Comissionamento de SE",
    ]
  },
  {
    id: 4,
    classBg: "bg-sw-sistemas-fotovoltaicos",
    title: "Sistemas fotovoltaicos",
    lista: [
      "Subestações Elétricas",
      "Quadros Elétricos",
      "Banco de capacitores para correção do FP",
      "Usina fotovoltaica (solar)",
      "Comissionamento de SE"
    ]
  }
]

const ServicosSwiper = () => {
  const [slidesPerView, setSlidesPerView] = useState(0);
  const [idSlideOpen, setIdSlideOpen] = useState<number | null>(null);
  window.addEventListener('resize', () => getSlidesPerView());
  useEffect(() => getSlidesPerView(), []);

  const getSlidesPerView = () => {
    if (window.innerWidth <= 640) setSlidesPerView(1.2);
    if (window.innerWidth > 640 && window.innerWidth <= 1024) setSlidesPerView(2.2);
    if (window.innerWidth > 1024) setSlidesPerView(3.2);
  }

  return (
    <div className="p-5 lg:pt-10">
      {!!slidesPerView && (
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          grabCursor={true}
        >
          {slides.map((item: Slide) => (
            <SwiperSlide key={item.id}>
              <div
                className={`flex flex-col justify-end min-h-[350px] lg:min-h-[450px] rounded bg-no-repeat bg-cover bg-top ${item.classBg}`}
                onMouseEnter={() => setIdSlideOpen(item.id)}
                onMouseLeave={() => setIdSlideOpen(null)}
              >
                <div className={`
                  bg-setromec-blue-1 rounded transition-all duration-500 delay-100 p-5
                  ${idSlideOpen && idSlideOpen === item.id ? 'h-[320px] lg:h-[400px]' : 'h-16'}
                `}>
                  <span className="block text-white text-center font-bold">
                    {item.title}
                  </span>

                  <ul className="text-white list-disc p-5">
                    {item.lista.map((li: string) => (
                      <li key={li} className="py-0.5">{li}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default ServicosSwiper;
