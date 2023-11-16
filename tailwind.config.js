/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        '50': '#f7f3ff',
        '100': '#f1e9fe',
        '200': '#e5d6fe',
        '300': '#d0b5fd',
        '400': '#b48bfa',
        '500': '#955cf6',
        '600': '#7c3aed',
        '700': '#6928d9',
        '800': '#5821b6',
        '900': '#491d95',
        '950': '#2f1065',
      },
    }
  },
  plugins: [],
}