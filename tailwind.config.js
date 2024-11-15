// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.{png,svg}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': '"DM Sans", sans-serif',
        'inter': '"Inter", sans-serif'
      },
      backgroundImage: {
        'home-banner': "url('/public/assets/home/home-bg.png')",
        'home-banner-overlay': "url('/public/assets/home/home-shadow.svg')",
        // home-areas-atuacao
        'home-areas-atuacao-1': "url('/public/assets/home/home-areas-atuacao/1.png')",
        'home-areas-atuacao-2': "url('/public/assets/home/home-areas-atuacao/2.png')",
        'home-areas-atuacao-3': "url('/public/assets/home/home-areas-atuacao/3.png')",
        // sibre
        'sobre-resultados-1': "url('/public/assets/sobre/resultados-1.png')",
        'sobre-resultados-2': "url('/public/assets/sobre/resultados-2.png')",
        //servicos-swiper
        'sw-projeto-laudos': "url('/public/assets/servicos-swiper/projeto_e_laudos.png')",
        'sw-instalacaoes-obras': "url('/public/assets/servicos-swiper/instalacaoes_e_obras.png')",
        'sw-manutencao-eletrica': "url('/public/assets/servicos-swiper/manutencao_eletrica.png')",
        'sw-sistemas-fotovoltaicos': "url('/public/assets/servicos-swiper/sistemas_fotovoltaicos.png')",
      },
      colors: {
        setromec: {
          blue: {
            1: '#3653AA',
            2: '#2F4B6B',

            '1-opacity-25': 'rgba(54, 83, 170, 0.25)'
          },
          dark: {
            1: '#212529'
          },
          light: {
            1: '#F2F2F2'
          },
          gray: {
            1: '#1E2833',
            2: '#374351',
            3: '#495057',
            4: '#343A40'
          }
        },
      }
    }
  },
  plugins: [],
}
