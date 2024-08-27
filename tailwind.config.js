/** @type {import('tailwindcss').Config} */
export default {
  content: [
	"./src/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bukhari: "Bukhari", // logo only
        archivo: "Archivo"
      }
    },
  },
  plugins: [],
}

