/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0B192C",
        foreground: "#E2E8F0",
        primary: "#00D2FF",
        surface: "#1E3E62",
        panel: "#243B55",
        muted: "#94A3B8",
        line: "rgba(0, 210, 255, 0.18)"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      boxShadow: {
        tech: "0 18px 40px rgba(0, 0, 0, 0.28)"
      }
    }
  },
  plugins: []
};
