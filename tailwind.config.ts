import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        mono: ["Lucida Console", "Courier New", "monospace"],
      },
      colors: {
        theme: {
          bg: "var(--bg-color)",
          "bg-black": "var(--black-color)",
          "bg-second": "var(--second-bg-color)",
          text: "var(--text-color)",
          main: "var(--main-color)",
          "main-box": "var(--main-box-color)",
          lang: "var(--lang-color)",
          "lang-yel": "var(--lang-color-yel)",
          "transparent-bg": "var(--transparent-bg-color)",
          grey: "var(--grey-color)",
          "projects-grey": "var(--projects-grey-color)",
          "contact-hover": "var(--contact-input-hover)",
          animation: "var(--animation-color)",
          "grad-animation": "var(--grad-animation-color)",
          "grad1-animation": "var(--grad1-animation-color)",
          "color-box": "var(--color-box-effect)",
        },
      },
      keyframes: {
        homeBgText: {
          "0%, 10%, 100%": { backgroundPosition: "-33rem 0" },
          "65%, 85%": { backgroundPosition: "0 0" },
        },
        homeCursorText: {
          "0%, 10%, 100%": { width: "0" },
          "65%, 78%, 85%": { width: "100%", opacity: "1" },
          "75%, 81%": { opacity: "0" },
        },
        aboutSpinner: {
          "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
        showRight: {
          "100%": { width: "0" },
        },
        rotate360: {
          "0%": { rotate: "0deg" },
          "100%": { rotate: "360deg" },
        },
        rotateReverse: {
          "0%": { rotate: "360deg" },
          "100%": { rotate: "0deg" },
        },
        animBack: {
          "0%": { top: "-300px" },
          "100%": { top: "120%" },
        },
      },
      animation: {
        homeBgText: "homeBgText 6s linear infinite 2s",
        homeCursorText: "homeCursorText 6s linear infinite 2s",
        aboutSpinner: "aboutSpinner 8s linear infinite",
        rotate360: "rotate360 5s linear infinite",
        rotateReverse: "rotateReverse 2.5s linear infinite",
        animBack: "animBack 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
