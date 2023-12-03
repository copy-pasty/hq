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
          "50": "hsl(171, 41%, 97%)",
          "100": "hsl(172, 53%, 89%)",
          "200": "hsl(173, 51%, 78%)",
          "300": "hsl(174, 47%, 64%)",
          "400": "hsl(176, 40%, 50%)",
          "500": "hsl(178, 49%, 40%)",
          "600": "hsl(179, 52%, 32%)",
          "700": "hsl(179, 47%, 26%)",
          "800": "hsl(180, 42%, 22%)",
          "900": "hsl(180, 36%, 19%)",
          "950": "hsl(182, 53%, 10%)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
