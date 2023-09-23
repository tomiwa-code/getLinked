import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purp: "#903AFF",
        pinnk: "#D434FE",
        lightPink: "#FE34B9",
        dark: "#150E28;",
        glass: "rgba(217, 217, 217, 0.03)",
      },
      fontFamily: {
        sans: ["var(--clash-display)"],
        uniOne: "Unica One",
      },
    },
  },
  plugins: [],
};
export default config;
