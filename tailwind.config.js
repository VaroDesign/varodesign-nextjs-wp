module.exports = {
  content: [    
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkGrey' : '#181818',
        'container' : '#121212',
        'mainColor' : '#93824e',
        'hover' : '#c6a841',
        'greyText' : 'rgba(255,255,255,0.5)',
      },
    },
  },
  plugins: [],
}
