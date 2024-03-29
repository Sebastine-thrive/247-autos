import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "280px",

      xs: "360px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "769px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... },
    },
    extend: {
      colors: {
        customGray: "#828282", // Custom gray color
        customRed: "#d21108", // Custom red color
        customYellow: "#cb9f5c" // Custom yellow color
      },
    },
  },

  plugins: [],
};
export default config;
