/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  darkMode: 'selector', // Tailwind v4 uses 'selector' instead of 'class'
  theme: {
    extend: {},
  },
  plugins: [],
}
