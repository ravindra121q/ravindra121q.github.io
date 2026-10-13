import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import ScrollToTop from './components/layout/ScrollToTop';
import SEO from './components/ui/SEO';
import Loader from './components/ui/Loader';
import { ThemeProvider } from './context/ThemeContext';
import { Analytics } from '@vercel/analytics/react';
import { PROFILE } from './data/profileData';

const lazyWithRetry = (componentImport) => {
  return lazy(async () => {
    const hasReloaded = sessionStorage.getItem('chunk_retry_reload');
    try {
      const component = await componentImport();
      sessionStorage.removeItem('chunk_retry_reload');
      return component;
    } catch (error) {
      const isChunkLoadFailed = error.name === 'TypeError' || 
                                /failed to fetch/i.test(error.message) ||
                                /loading chunk/i.test(error.message);
      if (isChunkLoadFailed && !hasReloaded) {
        console.warn('Dynamic chunk fetch failed. Triggering page reload to load fresh assets...', error);
        sessionStorage.setItem('chunk_retry_reload', 'true');
        window.location.reload();
        return { default: () => null };
      }
      throw error;
    }
  });
};

import Home from './pages/Home';
const Services = lazyWithRetry(() => import('./pages/Services'));
const Projects = lazyWithRetry(() => import('./pages/Projects'));
const About = lazyWithRetry(() => import('./pages/About'));
const Contact = lazyWithRetry(() => import('./pages/Contact'));
const Help = lazyWithRetry(() => import('./pages/Help'));
const Terms = lazyWithRetry(() => import('./pages/Terms'));
const Privacy = lazyWithRetry(() => import('./pages/Privacy'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
    <Loader size={40} />
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname.split('/')[1] || '/'}>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
          <Route path="/projects" element={<MainLayout><Projects /></MainLayout>} />
          <Route path="/about" element={<MainLayout><About /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/contact/:serviceSlug" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/help" element={<MainLayout><Help /></MainLayout>} />
          <Route path="/terms" element={<MainLayout><Terms /></MainLayout>} />
          <Route path="/privacy" element={<MainLayout><Privacy /></MainLayout>} />
          <Route path="*" element={<MainLayout><Home /></MainLayout>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HelmetProvider>
      <SEO 
        title={`${PROFILE.name} | ${PROFILE.role}`} 
        description={`${PROFILE.bio} 3+ years of experience building production-grade React interfaces, Vite applications, Tailwind CSS design systems, and REST API architectures.`} 
      />
      <ThemeProvider>
        <LazyMotion features={domAnimation}>
          <Toaster 
            position="bottom-right"
            containerStyle={{
              zIndex: 999999
            }}
            toastOptions={{
              duration: 4000,
              className: "custom-saas-toast"
            }}
          />
          <Router>
            <ScrollToTop />
            <AnimatedRoutes />
          </Router>
          <Analytics />
        </LazyMotion>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
