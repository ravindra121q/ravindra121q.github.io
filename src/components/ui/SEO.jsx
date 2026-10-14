import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PROFILE } from '../../data/profileData';

const DEFAULT_SITE_TITLE = `${PROFILE.name} — Senior Frontend Engineer & Website Developer | React.js Architect`;
const DEFAULT_SITE_URL = 'https://ravindra121q.github.io';
const DEFAULT_OG_IMAGE = 'https://ravindra121q.github.io/profile.jpg';
const DEFAULT_DESCRIPTION = `Hire ${PROFILE.name} — Senior Frontend Engineer and Professional Website Developer with 3+ years experience. Specializing in high-performance React.js web applications, responsive websites, custom CMS, e-commerce, and 100% Core Web Vitals.`;
const DEFAULT_KEYWORDS = 'Website Development, Website Developer, Web Developer, Hire Web Developer, React Developer, Frontend Engineer, React Architect, Web Application Development, React.js, Next.js, Vite, Tailwind CSS, Responsive Web Design, Core Web Vitals, Full Stack UI, UI/UX Engineering, Freelance Web Developer, Ravindra Kumar';

const BASE_GRAPH_SCHEMA = [
  {
    "@type": "Person",
    "@id": `${DEFAULT_SITE_URL}/#person`,
    "name": "Ravindra Kumar",
    "givenName": "Ravindra",
    "familyName": "Kumar",
    "jobTitle": ["Senior Frontend Engineer", "Website Developer", "React Architect", "Full Stack UI Engineer"],
    "description": PROFILE.bio,
    "url": DEFAULT_SITE_URL,
    "image": `${DEFAULT_SITE_URL}/profile.jpg`,
    "sameAs": [
      PROFILE.github,
      PROFILE.linkedin
    ],
    "email": `mailto:${PROFILE.email}`,
    "telephone": PROFILE.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "DLF Cyber City, Sector 24",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122002",
      "addressCountry": "IN"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Masai School"
      }
    ],
    "knowsAbout": [
      "Website Development",
      "Web Development",
      "Frontend Engineering",
      "React.js",
      "JavaScript ES2024",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Vite",
      "Web Performance Optimization",
      "Core Web Vitals",
      "Search Engine Optimization (SEO)",
      "Web Accessibility (WCAG 2.1 AA)",
      "Responsive Web Design",
      "REST API Integration",
      "Single Page Applications",
      "E-Commerce Web Development"
    ]
  },
  {
    "@type": "ProfessionalService",
    "@id": `${DEFAULT_SITE_URL}/#service`,
    "name": "Ravindra Kumar — Website Development & Frontend Engineering Services",
    "description": "Full-lifecycle website development, custom React 18 web applications, responsive UI engineering, and web performance optimization.",
    "url": DEFAULT_SITE_URL,
    "image": `${DEFAULT_SITE_URL}/profile.jpg`,
    "telephone": PROFILE.phone,
    "priceRange": "$$$",
    "currenciesAccepted": "USD, EUR, INR",
    "paymentAccepted": "Wire Transfer, Credit Card, PayPal",
    "areaServed": "Worldwide",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "DLF Cyber City, Sector 24",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122002",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "serviceType": [
      "Website Development",
      "Frontend Engineering",
      "Custom Web Application Development",
      "React.js Development",
      "Core Web Vitals & Performance Optimization",
      "Responsive Web Design"
    ],
    "provider": {
      "@id": `${DEFAULT_SITE_URL}/#person`
    }
  },
  {
    "@type": "WebSite",
    "@id": `${DEFAULT_SITE_URL}/#website`,
    "url": DEFAULT_SITE_URL,
    "name": "Ravindra Kumar Portfolio — Website Developer & Frontend Engineer",
    "description": DEFAULT_DESCRIPTION,
    "publisher": {
      "@id": `${DEFAULT_SITE_URL}/#person`
    },
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${DEFAULT_SITE_URL}/projects?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@type": "ProfilePage",
    "@id": `${DEFAULT_SITE_URL}/#profilepage`,
    "url": DEFAULT_SITE_URL,
    "name": "Ravindra Kumar - Website Developer & Frontend Engineer Portfolio",
    "mainEntity": {
      "@id": `${DEFAULT_SITE_URL}/#person`
    }
  }
];

export default function SEO({ 
  title, 
  description = DEFAULT_DESCRIPTION, 
  canonicalUrl, 
  keywords = DEFAULT_KEYWORDS,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  schema,
  faq,
  breadcrumbs
}) {
  const fullTitle = !title 
    ? DEFAULT_SITE_TITLE 
    : title.includes('Ravindra')
      ? title 
      : `${title} | Ravindra Kumar`;

  const resolvedCanonical = canonicalUrl || DEFAULT_SITE_URL;
  const isRootPath = resolvedCanonical === DEFAULT_SITE_URL || resolvedCanonical === `${DEFAULT_SITE_URL}/`;

  // Build schema graph dynamically
  // If on root path and no custom schema provided, static index.html already carries the base graph
  const schemaGraph = schema 
    ? (Array.isArray(schema) ? schema : [schema])
    : (isRootPath ? [] : [...BASE_GRAPH_SCHEMA]);

  if (breadcrumbs && Array.isArray(breadcrumbs) && breadcrumbs.length > 0) {
    schemaGraph.push({
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": crumb.name,
        "item": crumb.url.startsWith('http') ? crumb.url : `${DEFAULT_SITE_URL}${crumb.url}`
      }))
    });
  }

  if (faq && Array.isArray(faq) && faq.length > 0) {
    schemaGraph.push({
      "@type": "FAQPage",
      "mainEntity": faq.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    });
  }

  const activeSchema = {
    "@context": "https://schema.org",
    "@graph": schemaGraph
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={PROFILE.name} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="Bangalore, India" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="google-site-verification" content="_FyuQpLuGtvLBtr5EN2hk_l7R9h0RV17tu-7hVrGhgY" />
      <meta name="google-site-verification" content="u-xBXYGiQ0tSCVS0YG41L6q54LD5wlMPMjaADBX3AnA" />
      <link rel="canonical" href={resolvedCanonical} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={`${PROFILE.name} — Website Developer & Frontend Engineer`} />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:alt" content={`${PROFILE.name} - Website Developer & Frontend Engineer`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={resolvedCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) - Render only when activeSchema has graph entries */}
      {schemaGraph.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(activeSchema).replace(/</g, '\\u003c')}
        </script>
      )}
    </Helmet>
  );
}
