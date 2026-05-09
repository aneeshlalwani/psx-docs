# Project: PSX Learning Documentation Site

## Goal

Build a Docusaurus-based documentation website that teaches Pakistan Stock Exchange (PSX) investing to beginners and intermediate investors. The site will cover investing fundamentals, stocks, mutual funds, ETFs, PSX-specific knowledge, and Shariah-compliant investing in Pakistan.

## Tech Stack

- Docusaurus 3.x (latest stable)
- TypeScript (preferred over plain JS)
- MDX for content (Markdown + React components)
- Local search plugin: @easyops-cn/docusaurus-search-local
- Deployment target: Vercel (later)

## Initial Tasks (in order)

### 1. Project Setup

- Initialize a fresh Docusaurus 3.x project with TypeScript template
- Use `classic` preset
- Set up clean folder structure
- Configure `docusaurus.config.ts` with placeholder values for site name, tagline, URL (I'll update later)

### 2. Folder Structure

Create the following content structure under `/docs`:

```
docs/
├── intro.md                          # Landing intro
├── 01-getting-started/
│   ├── what-is-investing.md
│   ├── why-invest.md
│   └── risk-and-return.md
├── 02-investment-basics/
│   ├── stocks.md
│   ├── bonds.md
│   ├── mutual-funds.md
│   └── etfs.md
├── 03-pakistan-stock-market/
│   ├── what-is-psx.md
│   ├── how-psx-works.md
│   ├── psx-indices.md
│   └── market-participants.md
├── 04-getting-started-with-psx/
│   ├── opening-an-account.md
│   ├── cdc-account.md
│   ├── choosing-a-broker.md
│   └── first-trade.md
├── 05-trading-and-orders/
│   ├── order-types.md
│   ├── trading-hours.md
│   └── settlement.md
├── 06-corporate-actions/
│   ├── dividends.md
│   ├── bonus-shares.md
│   ├── rights-issues.md
│   └── book-closure.md
├── 07-taxes-and-zakat/
│   ├── capital-gains-tax.md
│   ├── dividend-tax.md
│   └── zakat-on-stocks.md
├── 08-shariah-investing/
│   ├── what-is-shariah-investing.md
│   ├── kmi-30-index.md
│   ├── shariah-screening.md
│   └── purification.md
└── 09-glossary/
    └── glossary.md
```

For each file: create with proper frontmatter (title, sidebar_position, description) and a single placeholder paragraph. I'll fill in real content later.

### 3. Sidebar Configuration

Configure `sidebars.ts` with auto-generated sidebar based on the folder structure. Use category labels like "Getting Started", "Investment Basics", etc.

### 4. Custom Components Setup

Create a `/src/components/` directory with stubs for components I'll need later:

- `AdUnit.tsx` — placeholder component for AdSense slots (just renders a styled div for now with text "Ad Slot")
- `Callout.tsx` — info/warning/tip callout boxes
- `Disclaimer.tsx` — legal/risk disclaimer block

Make these importable in MDX.

### 5. Theme & Branding Stubs

- Replace default Docusaurus logo references with placeholder paths (`/img/logo.svg`)
- Set a clean color scheme in `src/css/custom.css` — neutral, readable, professional (think Stripe docs / Mintlify aesthetic)
- Enable dark mode toggle

### 6. SEO Foundation

- Configure metadata defaults in `docusaurus.config.ts`
- Ensure sitemap plugin is enabled (default in classic preset)
- Add `robots.txt` to `/static/`

### 7. Search

Install and configure `@easyops-cn/docusaurus-search-local` for local search. Skip Algolia for now.

### 8. Cleanup

- Remove the default blog feature (we're not using it for v1)
- Remove default tutorial pages
- Remove default React landing page sections; replace `src/pages/index.tsx` with a clean hero section that has:
  - Site name placeholder
  - Tagline placeholder
  - Single CTA button linking to `/docs/intro`

### 9. Documentation

Create a `README.md` in the project root with:

- How to run locally (`npm start`)
- How to build (`npm run build`)
- Folder structure explanation
- How to add new docs pages

## What NOT to do

- Do NOT write actual investing content — only placeholders. I'll write content myself.
- Do NOT add AdSense scripts yet — just the component stub.
- Do NOT configure deployment — I'll handle Vercel setup separately.
- Do NOT add analytics yet.
- Do NOT install Algolia search.
