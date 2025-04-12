/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f4ff",
          100: "#e0e9ff",
          200: "#c7d5ff",
          300: "#a4b8ff",
          400: "#8293ff",
          500: "#0d3d83", // Main navy blue
          600: "#0b3470",
          700: "#092b5d",
          800: "#07224a",
          900: "#051937",
        },
        secondary: {
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#111827", // Main black
          600: "#0f1523",
          700: "#0d121e",
          800: "#0b0f1a",
          900: "#090c15",
        },
      },
      fontSize: {
        // Golden ratio-based typography scale
        xs: ["0.75rem", { lineHeight: "1.5" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.5" }], // 14px
        base: ["1rem", { lineHeight: "1.5" }], // 16px
        lg: ["1.618rem", { lineHeight: "1.5" }], // 25.89px
        xl: ["2.618rem", { lineHeight: "1.5" }], // 41.89px
        "2xl": ["4.236rem", { lineHeight: "1.5" }], // 67.77px
        "3xl": ["6.854rem", { lineHeight: "1.5" }], // 109.66px
        "4xl": ["11.089rem", { lineHeight: "1.5" }], // 177.43px
        "5xl": ["17.942rem", { lineHeight: "1.5" }], // 287.09px
      },
      screens: {
        // Responsive breakpoints
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  // tailwind.config.js
  plugins: [require("@tailwindcss/aspect-ratio")],
};
