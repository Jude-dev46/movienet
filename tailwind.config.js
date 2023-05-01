/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      hero: "url('/images/john_wick.jpg')",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      slate: {
        50: "#f8fafc",
        300: "#e2e8f0",
        900: "#0f172a",
      },
      red: {
        600: "#dc2626",
        900: "#991b1b",
      },
      white: "#fafafa",
      black: "#171717",
    },
    spacing: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
      7: "52px",
      8: "64px",
      9: "72px",
      10: "84px",
      11: "96px",
      12: "108px",
      13: "112px",
      14: "128px",
      15: "144px",
      16: "152px",
      17: "168px",
      18: "172px",
      19: "184px",
      20: "196px",
    },
  },
  extend: {},
  plugins: [],
};
