import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://ravindra-dev07.vercel.app',
      dynamicRoutes: [
        '/projects',
        '/services',
        '/about',
        '/contact',
        '/help',
        '/privacy',
        '/terms'
      ],
      changefreq: 'weekly',
      priority: 0.8,
      generateRobotsTxt: true,
      robots: [
        {
          userAgent: '*',
          allow: '/'
        },
        {
          userAgent: 'Googlebot',
          allow: '/'
        },
        {
          userAgent: 'Bingbot',
          allow: '/'
        }
      ]
    }),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'inline',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        maximumFileSizeToCacheInBytes: 5000000,
        navigateFallbackDenylist: [/^\/sitemap\.xml$/, /^\/robots\.txt$/, /^\/ai-catalog\.json$/, /^\/llms\.txt$/]
      },
      manifest: {
        name: 'Ravindra Kumar — Senior Frontend Engineer Portfolio',
        short_name: 'Ravindra',
        description: 'Senior Frontend Engineer & React Architect Portfolio',
        theme_color: '#09090b',
        background_color: '#09090b',
        icons: [
          {
            src: 'favicon.svg',
            sizes: '192x192 512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-animation';
            }
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1200
  }
});
