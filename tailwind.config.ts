import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: {
        100: "#FFFFFF",
        200: "#F5F5F5",
        300: "#D8D8D8",
      },
      black: {
        100: "#000000",
        200: "#19191A",
        300: "#272b29",
        400: "#212623",
      },
      red: {
        100: "#F40009",
      },
      blue: {
        100: "#EDF2F6",
        200: "#1F3250",
      },
      green: {
        100: "#415245",
        200: "#747C16",
      },
      orange: {
        100: "#EF3E1D",
      },
      yellow: {
        100: "#CDC8BC",
      },
    },
  },
  plugins: [],
};
export default config;
