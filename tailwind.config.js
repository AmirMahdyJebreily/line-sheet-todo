/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "head-mono":"'Share Tech Mono', monospace",
        "mono" : "'Ubuntu Mono', monospace"
      }
    },
  },
  plugins: [],
}

