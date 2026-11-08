import React, { useEffect } from 'react';
import { AppDocPage } from '../App';

interface SeoHeadProps {
  currentPage: AppDocPage;
}

interface PageMetaConfig {
  title: string;
  description: string;
  canonical: string;
  robots: string;
}

const PAGE_METAS: Record<AppDocPage, PageMetaConfig> = {
  home: {
    title: 'Gradastra — Independent Global College Intelligence & Senior Student Advisory',
    description: 'Get independent college insights and 1-on-1 guidance from verified senior university students worldwide. 0% university commission, zero bias, always free.',
    canonical: 'https://gradastra.com/',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  },
  contact: {
    title: 'Contact Advisory Desk — Gradastra Independent College Intelligence',
    description: 'Connect with the Gradastra independent student advisory desk. Submit queries about global admissions, peer mentorship, and university evaluations.',
    canonical: 'https://gradastra.com/contact',
    robots: 'index, follow, max-image-preview:large'
  },
  privacy: {
    title: 'Privacy Policy & Data Ethics — Gradastra Independent Intelligence',
    description: 'Read the Gradastra privacy policy. Learn how student information and mentor credentials are authenticated and protected with zero data selling.',
    canonical: 'https://gradastra.com/privacy',
    robots: 'index, follow'
  },
  terms: {
    title: 'Terms of Service & Advisory Charter — Gradastra',
    description: 'Terms of Service and independent advisory charter of Gradastra. Review our zero-commission guarantee, fair use, and student mentorship guidelines.',
    canonical: 'https://gradastra.com/terms',
    robots: 'index, follow'
  },
  '404': {
    title: 'Page Not Found — Gradastra Global College Advisory',
    description: 'The requested college advisory resource or document could not be located. Return to Gradastra homepage for verified university intelligence.',
    canonical: 'https://gradastra.com/404',
    robots: 'noindex, follow'
  }
};

export const SeoHead: React.FC<SeoHeadProps> = ({ currentPage }) => {
  useEffect(() => {
    const meta = PAGE_METAS[currentPage] || PAGE_METAS.home;

    // 1. Title tag (50-60 chars, keyword front-loaded)
    document.title = meta.title;

    // 2. Meta description (140-160 chars)
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', meta.description);

    // 3. Open Graph title and description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', meta.canonical);

    // 4. Canonical tag (Self-referencing canonical per route)
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', meta.canonical);

    // 5. Meta robots (Indexing control)
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', meta.robots);
  }, [currentPage]);

  return null;
};

