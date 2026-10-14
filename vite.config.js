import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
import Sitemap from 'vite-plugin-sitemap';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SPA_ROUTES = [
  'projects',
  'services',
  'about',
  'contact',
  'help',
  'privacy',
  'terms'
];

function githubPagesSpaPlugin() {
  return {
    name: 'github-pages-spa',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(indexPath)) return;

      // 1. Ensure .nojekyll exists in dist
      fs.writeFileSync(path.join(distDir, '.nojekyll'), '');

      // 2. Ensure 404.html exists in dist for GitHub Pages SPA client-side routing
      fs.copyFileSync(indexPath, path.join(distDir, '404.html'));

      // 3. Pre-generate sub-routes with index.html so direct URLs return 200 OK
      for (const route of SPA_ROUTES) {
        const routeDir = path.join(distDir, route);
        fs.mkdirSync(routeDir, { recursive: true });
        fs.copyFileSync(indexPath, path.join(routeDir, 'index.html'));
      }

      // 4. Ensure complete crawler-optimized robots.txt from public is preserved
      const publicRobots = path.resolve(__dirname, 'public/robots.txt');
      if (fs.existsSync(publicRobots)) {
        fs.copyFileSync(publicRobots, path.join(distDir, 'robots.txt'));
      }

      console.log('✓ GitHub Pages SPA bundle prepared (.nojekyll, 404.html, multi-route index fallbacks)');
    }
  };
}

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://ravindra121q.github.io',
      dynamicRoutes: SPA_ROUTES.map(route => `/${route}`),
      changefreq: 'weekly',
      priority: 0.8,
      generateRobotsTxt: false
    }),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'inline',
      includeAssets: ['favicon.svg', 'robots.txt', 'profile.jpg'],
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
    }),
    githubPagesSpaPlugin()
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
