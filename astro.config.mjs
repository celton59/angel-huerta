import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://angelhuerta.es',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
