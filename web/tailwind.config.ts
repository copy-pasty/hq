import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pattern: {
          50: "hsl(171, 41%, 97%)",
          100: "hsl(172, 53%, 89%)",
          200: "hsl(173, 51%, 78%)",
          300: "hsl(174, 47%, 64%)",
          400: "hsl(176, 40%, 50%)",
          500: "hsl(178, 49%, 40%)",
          600: "hsl(179, 52%, 32%)",
          700: "hsl(179, 47%, 26%)",
          800: "hsl(180, 42%, 22%)",
          900: "hsl(180, 36%, 19%)",
          950: "hsl(182, 53%, 10%)",
        },
        guide: {
          50: "#FFD4B8",
          100: "#FFC8A3",
          200: "#FFB07A",
          300: "#FF9852",
          400: "#FF7F29",
          500: "#FF6700",
          600: "#C75000",
          700: "#8F3A00",
          800: "#572300",
          900: "#1F0C00",
          950: "#030100",
        },
      },
    },
  },
  plugins: [],
};

export default config;
