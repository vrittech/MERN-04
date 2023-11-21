/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        danger: "#e11b22",
      },
      margin: {
        50: "50px",
        200: "200px",
      },
      padding: {
        15: "15px",
      },
    },
  },
  plugins: [],
};
