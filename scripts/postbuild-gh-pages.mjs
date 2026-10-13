import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');

const SPA_ROUTES = [
  'projects',
  'services',
  'about',
  'contact',
  'help',
  'privacy',
  'terms'
];

// 1. Preserve custom robots.txt and sitemap.xml from public/
for (const seoFile of ['robots.txt', 'sitemap.xml']) {
  const srcPath = path.join(publicDir, seoFile);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, path.join(distDir, seoFile));
  }
}

// 2. Ensure .nojekyll exists in dist/
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');

// 3. Create 404.html in dist/ from dist/index.html for SPA fallback on GitHub Pages
const distIndexHtml = path.join(distDir, 'index.html');
if (fs.existsSync(distIndexHtml)) {
  fs.copyFileSync(distIndexHtml, path.join(distDir, '404.html'));

  // 4. Create route-specific index.html in dist/ so GitHub Pages serves 200 OK for all primary routes
  for (const route of SPA_ROUTES) {
    const routeDir = path.join(distDir, route);
    fs.mkdirSync(routeDir, { recursive: true });
    fs.copyFileSync(distIndexHtml, path.join(routeDir, 'index.html'));
  }
}

// 5. Sync built production output to repository root so GitHub Pages branch deployment (master / root) works directly
if (process.env.CI_SKIP_ROOT_SYNC !== 'true') {
  // Remove old root assets/ and workbox-*.js
  const rootAssetsDir = path.join(rootDir, 'assets');
  if (fs.existsSync(rootAssetsDir)) {
    fs.rmSync(rootAssetsDir, { recursive: true, force: true });
  }
  for (const entry of fs.readdirSync(rootDir)) {
    if (/^workbox-.*\.js$/.test(entry)) {
      fs.rmSync(path.join(rootDir, entry), { force: true });
    }
  }

  // Copy built files and directories to root
  const itemsToSync = [
    'index.html',
    '404.html',
    '.nojekyll',
    'assets',
    'images',
    'profile.jpg',
    'favicon.svg',
    'icons.svg',
    'manifest.webmanifest',
    'sw.js',
    'sitemap.xml',
    'robots.txt',
    'llms.txt',
    'ai-catalog.json'
  ];

  for (const entry of fs.readdirSync(distDir)) {
    if (/^workbox-.*\.js$/.test(entry)) {
      itemsToSync.push(entry);
    }
  }

  for (const item of itemsToSync) {
    const src = path.join(distDir, item);
    const dest = path.join(rootDir, item);
    if (fs.existsSync(src)) {
      fs.cpSync(src, dest, { recursive: true, force: true });
    }
  }
}

console.log('✓ GitHub Pages post-build complete (404.html, .nojekyll, SPA routes, and root bundle synced).');
