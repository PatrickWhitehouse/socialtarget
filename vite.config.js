import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  root: '_site',
  build: {
    outDir: '../dist',
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
            src: 'pwa.png',
            sizes: '1000x1000',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
