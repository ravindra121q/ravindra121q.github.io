import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
import Sitemap from 'vite-plugin-sitemap';

function githubPagesEntryPlugin() {
  return {
    name: 'github-pages-entry',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        if (!html.includes('/src/main.jsx')) {
          return html
            .replace(/\s*<script type="module" crossorigin src="\/assets\/[^"]+"><\/script>/g, '')
            .replace(/\s*<link rel="modulepreload" crossorigin href="\/assets\/[^"]+">/g, '')
            .replace(/\s*<link rel="stylesheet" crossorigin href="\/assets\/[^"]+">/g, '')
            .replace(/\s*<link rel="sitemap"[^>]*>/g, '')
            .replace(/\s*<link rel="manifest"[^>]*><script id="vite-plugin-pwa:inline-sw">.*?<\/script>/g, '')
            .replace('<div id="root"></div>', '<div id="root"></div>\n    <script type="module" src="/src/main.jsx"></script>');
        }
        return html;
      }
    }
  };
}

export default defineConfig({
  base: '/',
  plugins: [
    githubPagesEntryPlugin(),
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
      generateRobotsTxt: false
    }),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'inline',
      includeAssets: ['robots.txt', 'profile.jpg'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        globIgnores: ['**/404.html'],
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
