/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "760px",
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        purple: {
          DEFAULT: '#A445ED',
          light: '#E9D5FF', // for light backgrounds (e.g. button)
        },
        gray: {
          DEFAULT: '#666666',   // main body text
          light: '#F4F4F4',     // input bg or card bg
          medium: '#757575',    // muted descriptions
        },
      },
    },
  },
  plugins: [],
}


