# Gradastra — Independent Student Advisory Platform

> **Honest, kickback-free higher education advisory.** Connecting prospective applicants directly with verified senior students currently attending target campuses worldwide.

---

## 🌟 What is Gradastra?

**Gradastra** is a modern higher education intelligence platform designed to bring absolute transparency to college admissions, campus life, and career outcomes. 

Traditional study-abroad and college recruitment agencies operate on a commissioned broker model—earning **10% to 25% kickbacks per student** from partner colleges. As a result, students are routinely steered toward institutions that maximize agency profit rather than what best serves the student's academic and career aspirations.

Gradastra fundamentally disrupts this model:
* **0% University Commission**: No commercial partnerships with universities, colleges, or admission recruiters.
* **100% Student-Centric**: Pure, unfiltered guidance directly from verified senior students (3rd & 4th year undergraduates and graduate students) currently enrolled on campus.
* **Radical Transparency**: Unvarnished truths on median placement numbers, actual living expenses, professor workloads, and visa hurdles—free of marketing brochure spin.

---

## 🎯 What Does Gradastra Do?

Gradastra provides prospective students and parents with complete clarity across the entire higher education journey:

### 1. Direct Peer-to-Peer Campus Intelligence
* Connects applicants with verified senior mentors across leading engineering, design, and business institutions in India and abroad.
* Provides firsthand insights into genuine campus culture, problem sets (P-sets), grading curves, and faculty accessibility.

### 2. Institutional Comparison & Placement Realities
* Compares colleges side-by-side using real student-reported data.
* Distinguishes between top 1% outlier brochure packages and realistic median campus compensation.
* Uncovers hidden tuition escalations, compulsory meal plan costs, and true accommodation expenses.

### 3. Cutoff, Choice Filling & Strategy Support
* Offers data-driven college shortlisting and cutoff matrices tailored to student ranks and percentiles.
* Provides unbiased guidance during counseling choice filling without steering toward sponsored partner universities.

### 4. Interactive Exploration & Digital Experience
* **Interactive University Explorer**: Filter colleges by region, cutoff range, fees, and specialization.
* **Factual Comparison Engine**: Clear side-by-side evaluation contrasting Gradastra’s peer model with traditional agency incentives.
* **3D Student Testimonial Viewport**: Interactive perspectives from enrolled students sharing verified campus reviews.
* **Direct Inquiry & Consultation Dispatch**: Seamless contact workflow with animated envelope verification and guaranteed senior response.

### 5. Engineered for Search & Answer Engines (SEO • AEO • GEO)
* **Search Engine Optimisation (SEO)**: Clean semantic HTML5 hierarchy, high-performance Core Web Vitals, and responsive mobile architecture.
* **Answer Engine Optimisation (AEO)**: Answer-first factual definitions and structured data tailored for direct extraction by AI search engines (ChatGPT Search, Perplexity, Google Gemini, Claude).
* **Generative Engine Optimisation (GEO)**: Machine-readable JSON-LD schemas (`Organization`, `EducationalOrganization`, `FAQPage`, `BreadcrumbList`) and dynamic `llms.txt` enabling citation in generative AI summaries.

---

## 📁 Repository & Folder Structure

```text
Gradastra/
├── .gitignore              # Environment and build exclusion rules
├── LICENSE                 # Open source license
├── README.md               # Platform overview and architectural documentation
├── index.html              # Semantic HTML5 entrypoint with SEO/AEO JSON-LD schemas
├── package.json            # Project dependencies and script declarations
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── docs/                   # Specifications, PRDs, and architecture documents
│   ├── Gradastra_PRD_v1.docx
│   ├── Gradastra_TRD_v1.docx
│   ├── prd_dump.txt
│   ├── trd_dump.txt
│   └── references/         # Visual and architectural references
├── public/                 # Static assets, web manifests, and crawler directives
│   ├── favicon.ico
│   ├── robots.txt          # Crawler instructions for Google, Perplexity, GPTBot, etc.
│   ├── sitemap.xml         # XML sitemap for search engines
│   └── illustrations/      # Editorial visuals and university emblems
└── src/                    # Source code
    ├── App.tsx             # Main view state and route orchestrator
    ├── main.tsx            # React application entry point
    ├── index.css           # Global typography and design system tokens
    ├── components/         # Modular section and modal components
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
    ├── framer/             # Component animation layers
    └── types/              # Domain data contracts and TypeScript definitions
```

---

## 🛠️ Technology Stack

* **Frontend Framework**: React 18 with TypeScript
* **Build Tool**: Vite
* **Styling & Design System**: Custom CSS Design Tokens with CSS custom properties
* **Smooth Motion & Physics**: Lenis smooth scroll + Framer Motion
* **Type Safety**: TypeScript with strict null checks
* **Form & Communication Layer**: Asynchronous submission with Web3Forms API

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
