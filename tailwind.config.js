/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0197E6",
        secondary: "#1F84BB",
        white: "#fff",
        black: "#333A3D",
      },
      fontSize: {
        sm: "12px",
        md: "24px",
        lg: "30px",
        xl: "36px",
        "2xl": "72px",
      },
      fontWeight: {
        thin: "300",
        medium: "500",
        bold: "600",
      },
    },
  },
  plugins: [],
};
