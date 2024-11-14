module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': '"DM Sans", sans-serif',
        'inter': '"Inter", sans-serif'
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
