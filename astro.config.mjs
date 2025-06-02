// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    base: '/myWebPortfolio', // added base path for deployment
    site: 'https://aimaneyousr.github.io/myWebPortfolio',
    vite: {
      plugins: [tailwindcss()],
    },
  });