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
            2: '#2F4B6B'
          },
          dark: {
            1: '#212529'
          }
        },
        footer: {
          1: '#1E2833',
          2: '#374351',
        }
      }
    }
  },
  plugins: [],
}
