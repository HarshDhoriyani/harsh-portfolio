/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#0A0F0F",
        slate: "#111A1A",
        slate2: "#1A2525",
        cyan: "#00F0FF",
        magenta: "#FF2D78",
        grayText: "#8A9A9A",
      },
      fontFamily: {
        sans: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};