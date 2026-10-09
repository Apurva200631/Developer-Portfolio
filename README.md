# Apurv Nimbarge — Developer Portfolio

> **AI/ML Student • Developer • CTO at Orbion Technologies**

Official, production-quality developer portfolio of **Apurv Nimbarge**, undergraduate Artificial Intelligence and Machine Learning student at **MIT Vishwaprayag University** and Chief Technology Officer at **Orbion Technologies**.

Built with an intentional, minimalist Apple-inspired light-theme aesthetic, deterministic type safety, sub-second render performance, and verified project data.

---

## 🚀 Key Highlights & Architectural Features

- **Apple-Inspired Design System:** Crisp typography (Geist), restrained monochrome palette with Apple system blue accents (`#0071E3`), subtle borders (`#E5E5EA`), and ergonomic prose containers.
- **Strictly Grounded & Truthful:** Zero fabricated metrics, awards, clients, or company URLs. Every detail is grounded in verified public GitHub codebases ([@Apurva200631](https://github.com/Apurva200631)) and academic coursework at MIT Vishwaprayag University.
- **Core Sections:**
  - **Hero:** Primary positioning, executive role indicators, and quick action routes.
  - **Overview (About):** Core pillars bridging theoretical machine learning, software development, and executive technology stewardship.
  - **Featured Projects:** Prominent showcase of the *Autonomous Attendance System* (biometric computer vision with `face-api.js` and `@google/genai`), *Solapur Tourism Web Portal*, *Visit Tuljapur Pilgrim Portal*, and *Orbion Technologies Platform Architecture*.
  - **Technical Skills:** 4-category taxonomy (AI & ML, Programming Languages, Web & Full-Stack, Tools & Platforms) without arbitrary percentages or ratings.
  - **Orbion Technologies:** CTO leadership section focused on architecture stewardship, stability, and product alignment.
  - **Professional Journey:** Confirmed chronological milestones across education and leadership.
  - **Contact Hub:** 6 verified contact channels with recognizable service logos (LinkedIn, GitHub, Personal Gmail, Yahoo Mail, X, and Orbion Company Email).
- **Accessibility (a11y):** WCAG AA compliance, semantic HTML5 structure, skip-to-content landmark, 44px minimum mobile touch targets, `:focus-visible` keyboard rings, and strict `prefers-reduced-motion` support.
- **Search Engine Optimization (SEO):** OpenGraph, Twitter Cards (`summary_large_image`), Schema.org `Person` JSON-LD structured data, native `robots.txt`, and XML `sitemap.xml`.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router with Turbopack) |
| **Language** | TypeScript 5 (Strict Mode) |
| **UI & Styling** | React 19, Tailwind CSS v4 |
| **Typography** | Geist Sans & Geist Mono (`next/font`) |
| **Icons** | Lucide React + Bespoke Accessible Brand SVGs |
| **Deployment Target** | Vercel, Netlify, Render, or Node.js SSR |

---

## 📁 Project Directory Structure

```
.
├── src/
│   ├── app/
│   │   ├── globals.css         # Design tokens, Apple-inspired styles, a11y focus, keyframes
│   │   ├── layout.tsx          # Root layout with SEO metadata, viewport, JSON-LD
│   │   ├── page.tsx            # Main assembled portfolio homepage
│   │   ├── robots.ts           # Native crawler directives (/robots.txt)
│   │   └── sitemap.ts          # Native XML sitemap (/sitemap.xml)
│   ├── components/
│   │   ├── common/
│   │   │   ├── Badge.tsx       # Restrained pill badges
│   │   │   ├── Button.tsx      # Multi-variant button/link with WCAG 44px targets
│   │   │   ├── Container.tsx   # Fluid multi-tier responsive container
│   │   │   ├── Icons.tsx       # Recognizable brand SVGs (GitHub, LinkedIn, X, Gmail, Yahoo)
│   │   │   └── SectionHeading.tsx # Eyebrow, bold title, and narrow narrative
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Responsive header, wordmark, mobile drawer, Escape key close
│   │   │   └── Footer.tsx      # 6 verified contact destinations, wordmark, and legal
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx # Editorial project showcase card
│   │   │   ├── ProjectVisual.tsx # Original vector UI/system schematics (no stock photos)
│   │   │   └── RepositoryList.tsx # Compact verified GitHub repositories directory
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── OverviewSection.tsx
│   │       ├── FeaturedProjectsSection.tsx
│   │       ├── SkillsSection.tsx
│   │       ├── JourneySection.tsx
│   │       ├── OrbionSection.tsx
│   │       └── ContactCtaSection.tsx
│   ├── content/
│   │   ├── portfolio-data.ts   # Centralized personal details, bio, and contact destinations
│   │   ├── projects-data.ts    # Verified GitHub projects and repository lists
│   │   └── skills-data.ts      # 4-category verified technical competencies
│   └── types/
│       └── index.ts            # Strict TypeScript interfaces
├── .env.example                # Zero-secret environment template
├── .gitignore                  # Git exclusion rules
├── .nvmrc                      # Node.js LTS version declaration (v20)
├── netlify.toml                # Netlify build configuration & security headers
├── render.yaml                 # Render Blueprint specification
├── package.json
└── tsconfig.json
```

---

## 💻 Getting Started (Local Development)

### Prerequisites
- **Node.js:** v18.18.0 or later (Node.js v20 LTS recommended, declared in `.nvmrc`)
- **npm:** v9.0.0 or later

### Installation
```bash
# Clone the repository
git clone https://github.com/Apurva200631/DEV-portfolio.git
cd DEV-portfolio

# Install dependencies
npm install
```

### Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Verification & Quality Checks

```bash
# Run TypeScript compilation check
npx tsc --noEmit

# Run ESLint validation
npm run lint

# Build optimized production bundle
npm run build

# Start local production server
npm run start
```

---

## 🌐 Production Deployment Guides

### 1. Vercel (Recommended — Zero-Config)
The repository is natively configured for Vercel with zero additional configuration files required:
1. Push your repository to GitHub (`Apurva200631/DEV-portfolio`).
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Framework Preset will auto-detect as **Next.js**.
5. Build Command: `npm run build`
6. Output Directory: `.next`
7. Node.js Version: Auto-detected as **20.x** via `.nvmrc`.
8. *(Optional)* Set Environment Variable: `NEXT_PUBLIC_SITE_URL` = `https://your-domain.vercel.app` (or your custom domain).
9. Click **Deploy**.

### 2. Netlify
The repository includes a dedicated `netlify.toml` file pre-configured for Netlify:
1. Log into [netlify.com](https://netlify.com) and click **"Add new site" > "Import an existing project"**.
2. Connect your GitHub repository (`Apurva200631/DEV-portfolio`).
3. Netlify will read `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node.js runtime: Node 20 via `.nvmrc`
4. Under **Site Configuration > Environment Variables**, optionally add:
   - `NEXT_PUBLIC_SITE_URL`: `https://your-site.netlify.app`
5. Click **Deploy site**.

### 3. Render
The repository includes a pre-configured `render.yaml` Blueprint specification for a Node.js Web Service:
- **Blueprint Deployment:**
  1. In the Render Dashboard, click **New > Blueprint**.
  2. Connect `Apurva200631/DEV-portfolio`.
  3. Render detects `render.yaml` and provisions the Web Service automatically.
- **Manual Web Service Setup:**
  1. Click **New > Web Service**.
  2. Runtime: **Node**.
  3. Build Command: `npm install && npm run build` (or `npm ci && npm run build`).
  4. Start Command: `npm run start` (Next.js automatically binds to Render's injected `$PORT`).
  5. Environment Variables:
     - `NODE_ENV`: `production`
     - *(Optional)* `NEXT_PUBLIC_SITE_URL`: `https://your-service.onrender.com`
  6. Click **Create Web Service**.

### 4. GitHub Source Control & Publishing
1. Ensure your local branch is clean:
   ```bash
   git status
   ```
2. Link your remote repository and push to GitHub:
   ```bash
   git remote add origin https://github.com/Apurva200631/DEV-portfolio.git
   git branch -M master
   git push -u origin master
   ```
3. Connecting this repository to Vercel, Netlify, or Render will configure automatic CI/CD preview builds on every `git push`.

---

## 🔒 Security & Privacy Audit

- **Zero Exposed Secrets:** No API keys, credentials, or personal secrets are committed.
- **Safe Browser Navigation:** All external links enforce `target="_blank"` with `rel="noopener noreferrer"`.
- **Verified Identity:** 100% of names, emails, roles, and profiles correspond to **Apurv Nimbarge**.

---

## 📄 License & Attribution

Copyright © 2026 **Apurv Nimbarge**. All rights reserved.  
Chief Technology Officer at Orbion Technologies • Undergraduate B.Tech AI/ML at MIT Vishwaprayag University.
