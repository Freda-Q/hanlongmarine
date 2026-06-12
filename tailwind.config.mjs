/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        abyss: 'oklch(0.12 0.02 240)',
        abyss2: 'oklch(0.17 0.025 240)',
        cyan: 'oklch(0.75 0.18 185)',
        silver: 'oklch(0.92 0.01 240)',
        muted: 'oklch(0.72 0.025 240)',
        steel: 'oklch(0.35 0.025 240)'
      },
      fontFamily: {
        display: ['Rajdhani', 'Orbitron', 'sans-serif'],
        body: ['Sora', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 36px rgba(41, 242, 255, 0.16)',
        insetline: 'inset 0 0 0 1px rgba(120, 248, 255, 0.15)'
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(120,248,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(120,248,255,.08) 1px, transparent 1px)',
        radial: 'radial-gradient(circle at 20% 20%, rgba(41,242,255,.2), transparent 32%), radial-gradient(circle at 80% 0%, rgba(180,202,220,.12), transparent 28%)'
      }
    }
  },
  plugins: []
};
