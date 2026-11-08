# Gradastra — Independent Student Advisory Platform

> **Honest, kickback-free higher education advisory.** Connecting prospective applicants directly with verified senior students currently attending target campuses worldwide.

---

## 🌟 Overview

**Gradastra** is a next-generation peer-to-peer university advisory platform built to disrupt traditional education agents. Unlike commercial consultants who collect 10%–25% university recruitment commissions, Gradastra operates on a 0% commission model with zero commercial university partnerships—providing transparent, verified student experiences, cutoff analyses, and median placement realities.

### Key Capabilities

* **0% Commission Advisory**: Zero university partnerships or recruiter bias.
* **Verified Senior Mentors**: Direct intelligence from 3rd and 4th-year students actively studying on campus.
* **Factual Comparison Engine**: Side-by-side transparent comparisons highlighting true placement figures, hidden fee structures, and campus workload.
* **Integrated Contact & Booking**: Form submission powered by Web3Forms with custom animated envelope confirmations.
* **Comprehensive SEO, AEO & GEO**:
  * Semantic HTML5 with strict single-H1 topic hierarchy.
  * Schema.org structured data (Organization, WebSite, EducationalOrganization, FAQPage, BreadcrumbList).
  * Optimized metadata for AI search engines (ChatGPT Search, Perplexity, Google Gemini, Claude).
  * Dynamic `sitemap.xml`, `robots.txt`, and `llms.txt`.
* **Fluid Motion & Design System**:
  * Lenis smooth scrolling with cubic bezier easing.
  * Framer Motion interactive widgets, 3D testimonial cube, and blur-text reveal effects.
  * Mobile-first responsive layouts.

---

## 📁 Repository & Folder Structure

```text
Gradastra/
├── .env.example            # Environment configuration template
├── .gitignore              # Strict ignore rules (ignores .env, build output, etc.)
├── index.html              # Entry HTML with meta, OpenGraph, JSON-LD schemas
├── package.json            # Project dependencies and script definitions
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build and development configuration
├── docs/                   # Specifications and technical requirements
│   ├── Gradastra_PRD_v1.docx
│   ├── Gradastra_TRD_v1.docx
│   ├── prd_dump.txt
│   ├── trd_dump.txt
│   └── references/         # Visual and architectural references
├── public/                 # Static public assets
│   ├── favicon.ico
│   ├── robots.txt          # Crawler instructions for Google, Perplexity, GPTBot, etc.
│   ├── sitemap.xml         # XML sitemap for search engines
│   └── ...                 # Optimized webp/svg imagery
└── src/                    # Source code
    ├── App.tsx             # Root application orchestrator and routing
    ├── main.tsx            # React application entry point
    ├── index.css           # Global typography, color variables, and styling
    ├── components/         # Reusable UI and section components
    │   ├── Navbar.tsx
    │   ├── HeroSection.tsx
    │   ├── ComparisonSection.tsx
    │   ├── ContactPage.tsx
    │   ├── EnvelopeFeedbackCard.tsx
    │   ├── AdviestButton.tsx
    │   ├── FaqSection.tsx
    │   ├── Footer.tsx
    │   ├── SeoHead.tsx
    │   └── ...
    ├── framer/             # Interactive Framer motion components
    └── types/              # TypeScript interface and type declarations
```

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (version 18.0.0 or higher recommended)
* `npm` or `pnpm` / `yarn`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ankitpaul6201/gradastra.git
   cd gradastra
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Copy `.env.example` to `.env` and supply your keys:
   ```bash
   cp .env.example .env
   ```

   In `.env`:
   ```env
   # Web3Forms API Key for inquiries
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

---

## 🔒 Security & Environment Variables

* **Secret Keys & API Tokens**: Secrets and keys are strictly excluded from git tracking via `.gitignore`.
* **Client-side Environment Variables**: Only non-sensitive variables prefixed with `VITE_` are exposed to the browser.
* Always check that `.env` files are not staged prior to committing:
  ```bash
  git status --ignored
  ```

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
