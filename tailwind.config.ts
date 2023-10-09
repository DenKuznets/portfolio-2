import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    fontFamily: {
      sans: ["var(--font-raleway)", "sans-serif"],
      serif: ["var(--font-merriweather)"],
      body: ["var(--font-leaguespartan)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        violet: "#6344C6",
        darkViolet: "#262439",
        yellow: "#FFC448",
        almostBlack: "#11141D",
        orange: "#F26440",
        pTextColor: "grey",
        aTextColor: "grey",
      },
      screens: {
        uhd: "2560px",
        laptopL: "1400px",
        laptop: "1024px",
        tablet: "768px",
        mobileL: "425px",
        mobileM: "375px",
        mobileS: "320px",
      },
    },
  },
  plugins: [],
};
export default config;
