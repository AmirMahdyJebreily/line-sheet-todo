/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            fontFamily: {
                'vazir': ['Vazirmatn-Regular', 'Calibri', 'Arial Narrow',],
                'vazir-black': ['Vazirmatn-Black', 'Calibri', 'Arial Narrow',],
                'vazir-bold': ['Vazirmatn-Bold', 'Calibri', 'Arial Narrow',],
                'vazir-medium': ['Vazirmatn-Medium', 'Calibri', 'Arial Narrow',],
                'vazir-light': ['Vazirmatn-Light', 'Calibri', 'Arial Narrow',],
                'vazir-thin': ['Vazirmatn-Thin', 'Calibri', 'Arial Narrow',],
            },
    },
  },
  plugins: [],
}

