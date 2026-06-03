/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0f1a",
        foreground: "#c5d8ed",
        primary: "#00d4b4",
        surface: "#0d1525",
        panel: "#111d30",
        muted: "#8fa8c4",
        line: "rgba(0, 212, 180, 0.18)"
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
        display: ["Barlow Condensed", "sans-serif"],
        mono: ["Share Tech Mono", "monospace"]
      },
      boxShadow: {
        tech: "0 18px 40px rgba(0, 0, 0, 0.28)"
      }
    }
  },
  plugins: []
};
