module.exports = {

  content: ['./pages/**/*.{html,js,jsx}',
  './components/**/*.{html,js,jsx}',
],
  theme: {
    extend: {
      screens:{
        "3xl": "2000px",
      },
    },
  },
  plugins: [require ('tailwind-scrollbar-hide')],
};
