import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        tutu: {
          purple: "#3B0B58",
          ivory: "#F8F6FA",
          gold: "#D4AF37",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      lineHeight: {
        tightest: "0.9",
      },
      letterSpacing: {
        luxury: "0.4em",
      },
    },
  },
  plugins: [],
};
export default config;
