import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const { resolve } = require('path');

export default defineConfig({
  root: '_site',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        404: resolve(__dirname, '_site', '404.html'),
        main: resolve(__dirname, '_site', 'index.html'),
        about: resolve(__dirname, '_site', 'about', 'index.html'),
      },
    },
    emptyOutDir: true,
  },
  plugins: [
    VitePWA({
      includeAssets: [
        'favicon.png',
        'pwa.png',
        'robots.txt',
        'apple-touch-icon.png',
      ],
      manifest: {
        name: 'Social Target',
        short_name: 'Social Target',
        description: 'Social Target, freelance social media consultant.',
        scope: '/',
        start_url: '/',
        display: 'standalone',
        theme_color: '#4a5568',
        background_color: '#fff',
        icons: [
          {
            src: 'apple-touch-icon.png',
            sizes: '1000x1000',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
