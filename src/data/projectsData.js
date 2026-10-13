export const PROJECTS = [
  {
    id: 'digital-benchers',
    slug: 'digital-benchers',
    title: 'Digital Benchers — AI EdTech Platform',
    category: 'EdTech & AI Platform',
    tagline: 'AI-powered learning platform with interactive mock tests, quizzes, and real-time performance analytics.',
    summary: 'An AI-powered EdTech web application designed to boost student learning through adaptive quizzes, mock exam engines, and performance analytics. Delivered a 40% increase in student engagement.',
    featured: true,
    techStack: ['React', 'Tailwind CSS', 'Axios', 'Node.js', 'Vite'],
    metrics: [
      { label: 'User Engagement', value: '+40%' },
      { label: 'Platform Type', value: 'EdTech SPA' },
      { label: 'Performance Score', value: '95+' }
    ],
    highlights: [
      'Engineered interactive mock test & quiz engine handling real-time score calculations and dynamic timer states.',
      'Designed responsive student dashboard displaying performance trends and topic weakness analysis.',
      'Integrated RESTful API endpoints with Axios for automated result processing and instant feedback.'
    ],
    architecture: {
      problem: 'Traditional test preparation portals were static, slow to load, and lacked interactive performance tracking.',
      solution: 'Built a lightweight React single-page application with Vite and Tailwind CSS, featuring instantaneous quiz score computation.',
      challenges: 'Preventing state loss and handling smooth page re-renders during timed exam sessions.'
    },
    liveUrl: 'https://digitalbenchers.com/',
    githubUrl: null,
    image: '/images/website-img-1.jpg'
  },
  {
    id: 'oasisnotes',
    slug: 'oasisnotes',
    title: 'OasisNotes — HIPAA-Compliant EHR System',
    category: 'Healthcare & Enterprise System',
    tagline: 'Secure HIPAA-compliant Electronic Health Record (EHR) platform for clinical record management.',
    summary: 'A HIPAA-compliant clinical documentation platform built for healthcare professionals and therapists to manage notes, treatment plans, and patient medical records securely in real-time.',
    featured: true,
    techStack: ['React', 'Vite', 'Tailwind CSS', 'TanStack Query', 'REST APIs'],
    metrics: [
      { label: 'Compliance', value: 'HIPAA Standard' },
      { label: 'Data Latency', value: '< 100ms' },
      { label: 'State Sync', value: 'TanStack Query' }
    ],
    highlights: [
      'Implemented secure form workflows for clinical note entries, treatment plans, and patient data management.',
      'Utilized TanStack Query for optimistic updates and real-time cache invalidation across healthcare dashboard views.',
      'Optimized table rendering performance for processing large patient record lists cleanly.'
    ],
    architecture: {
      problem: 'Healthcare providers required a fast, clutter-free electronic health record interface to minimize paperwork overhead.',
      solution: 'Architected a modular React SPA with Vite and Tailwind CSS focused on rapid clinical entry and strict data integrity.',
      challenges: 'Ensuring session token expiry and secure local data state clearing upon user sign-out.'
    },
    liveUrl: 'https://oasisnotes.com/',
    allowIframe: false,
    githubUrl: null,
    image: '/images/website-img-2.jpg'
  },
  {
    id: 'build-corp',
    slug: 'build-corp-platform',
    title: 'Build Corp — Corporate Platform & Visual CMS',
    category: 'Corporate Platform & Admin Panel',
    tagline: 'High-ticket corporate web application featuring a bespoke visual admin CMS and MERN architecture.',
    summary: 'A corporate web platform engineered for enterprise clients. Features a decoupled React admin dashboard with a Visual CMS, JWT authentication, obsidian dark theme, and high-contrast typography.',
    featured: true,
    techStack: ['React', 'MERN Stack', 'Framer Motion', 'JWT Auth', 'Node.js'],
    metrics: [
      { label: 'Architecture', value: 'MERN Stack' },
      { label: 'Admin CMS', value: 'Custom Visual CMS' },
      { label: 'Security', value: 'JWT + RBAC' }
    ],
    highlights: [
      'Built a proprietary React admin panel allowing non-technical client admins to manage portfolio items and site content.',
      'Created cinematic UI layouts with Framer Motion scroll animations and custom dark/gold design tokens.',
      'Implemented role-based access control (RBAC) and JWT authentication securing backend API routes.'
    ],
    architecture: {
      problem: 'Enterprise clients needed a bespoke, luxury web application with full content management capabilities without heavy CMS dependencies.',
      solution: 'Developed a decoupled React client paired with a custom Node.js/Express admin dashboard API.',
      challenges: 'Optimizing image upload workflows and live CMS preview rendering in real time.'
    },
    liveUrl: 'https://build-corp-chi.vercel.app/',
    githubUrl: null,
    image: '/images/website-img-5.jpg'
  },
  {
    id: 'prokinesia',
    slug: 'prokinesia',
    title: 'Prokinesia — Healthcare & Therapy Platform',
    category: 'Healthcare & Wellness',
    tagline: 'Physical therapy platform with evidence-based treatment plans and custom patient onboarding.',
    summary: 'A healthcare and wellness platform designed to provide evidence-based physical therapy treatments, digital patient onboarding workflows, and customized rehabilitation tracking.',
    featured: true,
    techStack: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    metrics: [
      { label: 'Mobile Optimization', value: '100% Touch Safe' },
      { label: 'Lighthouse Score', value: '96/100' },
      { label: 'UX Design', value: 'Custom Animations' }
    ],
    highlights: [
      'Designed responsive patient onboarding flows and therapy selection modules.',
      'Leveraged Framer Motion for smooth section reveal transitions and interactive card hover states.',
      'Ensured full mobile screen responsiveness and fast asset loading.'
    ],
    architecture: {
      problem: 'Patients needed a clear, encouraging digital experience to review therapy options and book appointments.',
      solution: 'Built a clean React interface highlighting treatment specialties, clinic locations, and direct contact options.',
      challenges: 'Structuring smooth animation sequences that perform fluidly on low-powered mobile devices.'
    },
    liveUrl: 'https://prokinesia.com/',
    githubUrl: null,
    image: '/images/website-img-3.jpg'
  },
  {
    id: 'rumpuree-studio',
    slug: 'rumpuree-dance-studio',
    title: 'Rumpuree Dance Studio — Editorial Web App',
    category: 'Luxury Modernization & Design System',
    tagline: 'High-contrast editorial monochrome web application for a premier dance studio.',
    summary: 'A visual modernization project delivering a high-contrast editorial monochrome aesthetic, high-fps micro-animations, mobile optimization, and top-tier SEO.',
    featured: false,
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'SEO'],
    metrics: [
      { label: 'Aesthetic', value: 'Editorial Monochrome' },
      { label: 'Page Speed', value: 'Sub-1.2s' },
      { label: 'SEO Rank', value: 'Top Tier' }
    ],
    highlights: [
      'Crafted a high-contrast monochrome design system with responsive typography scales.',
      'Optimized media assets and image galleries for ultra-fast initial page loads.',
      'Integrated responsive navigation drawers and interactive schedule viewports.'
    ],
    architecture: {
      problem: 'The legacy dance studio website suffered from slow page loads and outdated visual styling.',
      solution: 'Redesigned the entire web app with React 18 and Tailwind CSS, focusing on visual elegance and rapid asset delivery.',
      challenges: 'Maintaining crisp typography and image sharpness across high-DPI Retina screens.'
    },
    liveUrl: 'https://rumpuree-dance-studio.vercel.app/',
    githubUrl: null,
    image: '/images/website-img-6.jpg'
  },
  {
    id: 'atlo-platform',
    slug: 'atlo-manpower-platform',
    title: 'Atlo — Manpower Coordination Engine',
    category: 'Hospitality & Manpower Platform',
    tagline: 'Hospitality manpower coordination platform connecting staffing solutions with enterprises.',
    summary: 'A web application engineered to coordinate manpower solutions across hospitality venues, featuring real-time data integration and clean responsive UI views.',
    featured: false,
    techStack: ['React', 'React Router', 'Firebase', 'Tailwind CSS'],
    metrics: [
      { label: 'Database', value: 'Firebase Realtime' },
      { label: 'Industry', value: 'Hospitality Staffing' },
      { label: 'UX Focus', value: 'Mobile-First' }
    ],
    highlights: [
      'Built reactive frontend views connected to Firebase backend services.',
      'Designed mobile-first candidate listing cards and staffing request forms.',
      'Implemented clean client-side routing using React Router.'
    ],
    architecture: {
      problem: 'Hospitality managers needed a simple mobile-friendly web app to view available staff profiles quickly.',
      solution: 'Created a lightweight React app powered by Firebase real-time listeners.',
      challenges: 'Handling offline state caching for field staff.'
    },
    liveUrl: 'https://atlo.in/',
    githubUrl: null,
    image: '/images/website-img-4.jpg'
  },
  {
    id: 'brifly-news',
    slug: 'brifly-news-platform',
    title: 'Brifly — AI-Powered News Engine',
    category: 'AI Platform & Real-Time Engine',
    tagline: 'Production-grade AI platform aggregating and summarizing trending news in real-time.',
    summary: 'An AI-powered news aggregation platform utilizing React 18, Vite, WebSockets, and AI models to rank, summarize, and deliver breaking news updates in real time.',
    featured: false,
    techStack: ['React 18', 'Vite', 'Node.js', 'MongoDB', 'Socket.IO', 'AI Integration'],
    metrics: [
      { label: 'Framework', value: 'React 18 & Vite SPA' },
      { label: 'Realtime Engine', value: 'Socket.IO' },
      { label: 'AI Summaries', value: 'Automated' }
    ],
    highlights: [
      'Integrated AI API pipelines to summarize incoming news articles automatically.',
      'Implemented WebSockets for instant live topic feed updates.',
      'Engineered an advanced admin moderation panel.'
    ],
    architecture: {
      problem: 'News readers are overwhelmed by verbose articles and duplicate coverage.',
      solution: 'Built an AI aggregator summarizing articles into quick bite-sized updates delivered over WebSockets.',
      challenges: 'Handling high-volume incoming RSS feeds and deduplicating news items dynamically.'
    },
    liveUrl: null,
    githubUrl: null,
    image: '/images/website-img-7.jpg'
  },
  {
    id: 'general-maintenance',
    slug: 'general-maintenance-dubai',
    title: 'General Maintenance — Fit-Out & Estimation Engine',
    category: 'Corporate Platform & Admin Panel',
    tagline: 'High-performance React fit-out platform with dynamic cost estimation and EmailJS integration.',
    summary: 'A production frontend web application built for architectural fit-out and technical maintenance services. Features an instant square-footage pricing calculator, PWA support, EmailJS inquiry workflow, and full Schema.org structured data automation.',
    featured: true,
    techStack: ['React 18', 'Vite 8', 'Tailwind CSS v4', 'Framer Motion', 'EmailJS', 'PWA'],
    metrics: [
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Bundle Load Time', value: '< 1.4s' },
      { label: 'Form Conversion', value: '+35%' }
    ],
    highlights: [
      'Engineered interactive pricing calculator computing budgetary bounds dynamically based on sq.ft and property type.',
      'Implemented top-tier SEO URL normalization seamlessly redirecting query parameters to canonical kebab-case slugs.',
      'Integrated dynamic Schema.org JSON-LD structured data generator boosting search engine snippet visibility.'
    ],
    architecture: {
      problem: 'The client needed a fast, high-converting web application to capture luxury villa and commercial fit-out inquiries.',
      solution: 'Designed a lightweight, client-side React SPA with Vite 8 and Tailwind CSS v4, featuring direct EmailJS lead dispatch.',
      challenges: 'Handling dynamic route aliasing without breaking back-button browser history.'
    },
    liveUrl: 'https://kgn-maintenance-dubai.vercel.app/',
    githubUrl: null,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'rajratan-website',
    slug: 'rajratan-luxury-fashion',
    title: 'Raj Ratan — Luxury Fashion Platform',
    category: 'Luxury Modernization & Design System',
    tagline: 'High-performance luxury apparel e-commerce web application with custom design system primitives.',
    summary: 'A modern luxury fashion e-commerce application engineered with React 18, Vite, and Tailwind CSS. Features dynamic product catalog filtering, responsive image carousels, custom design system primitives, and fast SPA page transitions.',
    featured: true,
    techStack: ['React 18', 'Vite 8', 'Tailwind CSS v4', 'Framer Motion', 'Swiper', 'REST APIs'],
    metrics: [
      { label: 'Core Web Vitals', value: '95+' },
      { label: 'Catalog Load Time', value: '< 1.2s' },
      { label: 'Mobile UX Score', value: '100%' }
    ],
    highlights: [
      'Architected luxury apparel design system with responsive typography, dark/light theme accents, and custom UI components.',
      'Implemented dynamic catalog filtering with smooth state synchronization and instant search capabilities.',
      'Optimized image assets and touch-friendly gallery carousels for fast mobile browsing.'
    ],
    architecture: {
      problem: 'The client needed a modern, elegant web experience to showcase high-end couture and luxury apparel with minimal load latency.',
      solution: 'Built a lightweight, responsive React 18 single-page application with Vite 8 and Tailwind CSS v4.',
      challenges: 'Ensuring fluid image gallery transitions and crisp typography rendering across desktop and mobile viewports.'
    },
    liveUrl: 'https://rajratana-website.vercel.app/',
    githubUrl: null,
    image: '/images/website-img-5.jpg'
  },
  {
    id: 'marketplace-platform',
    slug: 'marketplace-ecommerce-ecosystem',
    title: 'Marketplace — Multi-Vendor E-Commerce Platform',
    category: 'Corporate Platform & Admin Panel',
    tagline: 'Scalable multi-vendor e-commerce marketplace platform with seller dashboards and real-time inventory management.',
    summary: 'A multi-vendor e-commerce marketplace web application built with React 18, Vite, and Tailwind CSS. Features seller storefront management, real-time order tracking, stateful cart synchronization, and an intuitive admin control panel.',
    featured: true,
    techStack: ['React 18', 'Vite 8', 'Tailwind CSS v4', 'Zustand', 'TanStack Query', 'REST APIs'],
    metrics: [
      { label: 'Inventory Latency', value: '< 80ms' },
      { label: 'State Sync', value: 'Zustand Engine' },
      { label: 'Checkout Success', value: '99.2%' }
    ],
    highlights: [
      'Engineered multi-vendor product catalog with dynamic seller filtering, price range sliders, and real-time stock updates.',
      'Implemented persistent cart management and checkout state handling using Zustand state stores.',
      'Designed responsive seller dashboard for product listing management, order status updates, and revenue metrics.'
    ],
    architecture: {
      problem: 'E-commerce vendors required a unified marketplace platform to manage independent storefronts and multi-item orders efficiently.',
      solution: 'Architected a modular React 18 SPA with Zustand global state management and optimistic query updates using TanStack Query.',
      challenges: 'Handling concurrent cart mutations and multi-seller order splitting without latency lag.'
    },
    liveUrl: 'https://marketplace-two-ashen.vercel.app/',
    githubUrl: null,
    image: '/images/marketplace-preview.jpg'
  },
  {
    id: 'cricinnings',
    slug: 'cricinnings-cricket-scores-news',
    title: 'CricInnings — Live Cricket Scores & Sports Portal',
    category: 'High-Throughput Sports & Real-Time Engine',
    tagline: 'High-traffic live cricket score platform featuring ball-by-ball updates, match schedules, and real-time commentary.',
    summary: 'A high-throughput live cricket platform built with Next.js, React, Tailwind CSS, and real-time sports API streams. Features ball-by-ball score tracking, dynamic tournament fixtures, player analytics, and responsive sports news delivery.',
    featured: true,
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'REST APIs', 'WebSockets', 'SEO Engine'],
    metrics: [
      { label: 'Live Latency', value: '< 200ms' },
      { label: 'Framework', value: 'Next.js App Router' },
      { label: 'Audience Scale', value: 'High-Throughput' }
    ],
    highlights: [
      'Engineered real-time match scorecard feeds with live status pills, ball-by-ball updates, and tournament schedules.',
      'Designed responsive sports portal interface handling high-volume concurrent user traffic during peak matches.',
      'Implemented structured JSON-LD sports metadata and automated news feed categorization for top search engine indexing.'
    ],
    architecture: {
      problem: 'Sports fans need sub-second cricket score updates, ball-by-ball commentary, and match schedules with zero buffering on mobile networks.',
      solution: 'Developed a high-performance Next.js application with edge caching, automated API polling, and lightweight mobile-first UI components.',
      challenges: 'Managing rapid state synchronization during high-frequency live ball events without causing unnecessary DOM re-renders.'
    },
    liveUrl: 'https://cricinnings.in/',
    allowIframe: false,
    githubUrl: null,
    image: '/images/cricinnings-preview.jpg'
  },
  {
    id: 'flipbook-viewer-pro',
    slug: 'flipbook-viewer-pro',
    title: 'Flipbook Viewer Pro — 3D Canvas Document Engine',
    category: 'Luxury Modernization & Design System',
    tagline: 'Interactive 3D PDF & document flipbook reader powered by HTML5 Canvas, PDF.js, and React.',
    summary: 'A high-performance web application engineered for realistic 3D document flipbook visualization. Features smooth page-curl physics, PDF rendering engines, responsive zoom controls, and custom presentation toolbar primitives.',
    featured: true,
    techStack: ['React 18', 'Vite', 'HTML5 Canvas', 'PDF.js', 'Tailwind CSS', 'Framer Motion'],
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Rendering Engine', value: 'Canvas 2D/3D' },
      { label: 'PDF Load Time', value: '< 1.1s' }
    ],
    highlights: [
      'Engineered 60 FPS page-turn physics engine with smooth touch gestures and mouse drag handling.',
      'Integrated PDF.js rendering pipeline for multi-page document parsing and instant thumbnail generation.',
      'Designed full-screen presentation controls with zoom, page jumps, single/double page layout toggles, and print options.'
    ],
    architecture: {
      problem: 'Standard web PDF viewers are static, clunky, and lack natural page-flipping tactile feedback for digital catalogs and books.',
      solution: 'Architected a modular React 18 single-page app utilizing HTML5 Canvas matrix math for smooth page mesh distortion and fast GPU-accelerated rendering.',
      challenges: 'Managing memory allocation during high-resolution PDF page caching to prevent browser memory leaks on mobile viewports.'
    },
    liveUrl: 'https://flipbook-viewer-pro.vercel.app/',
    allowIframe: false,
    githubUrl: null,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80'
  }
];
