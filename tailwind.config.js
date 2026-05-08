/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: "#556B2F",
        forest: "#2F4F2F",
        gold: "#D4AF37",
        beige: "#F5F0E6",
        offwhite: "#FAFAFA",
        cream: "#FDFBF7",
        charcoal: "#333333",
        darkbrown: "#3E2723",
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
