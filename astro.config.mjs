// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      https: {
        cert: 'localhost+1.pem', 
        key: 'localhost+1-key.pem',
      },
      host: true,
      allowedHosts: true,
    },
  },
});
