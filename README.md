# PSX Learn — Documentation Site

A Docusaurus 3.x documentation site that teaches investing on the Pakistan Stock Exchange (PSX) — covering investing fundamentals, stocks, mutual funds, ETFs, PSX-specific knowledge, taxes, zakat, and Shariah-compliant investing.

## Stack

- **Docusaurus 3.x** (classic preset, TypeScript)
- **React 19** + **MDX** for content
- **@easyops-cn/docusaurus-search-local** for client-side search

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm start
```

The dev server runs on http://localhost:3000 with hot reload.

## Common scripts

| Command | What it does |
|--------|--------------|
| `npm start` | Start the dev server with hot reload |
| `npm run build` | Build the static production site into `build/` |
| `npm run serve` | Serve the production build locally to verify |
| `npm run typecheck` | Run TypeScript without emitting |
| `npm run clear` | Clear the Docusaurus build cache |

## Folder structure

```
.
├── docs/                          # All documentation content (MDX/MD)
│   ├── intro.md                   # Landing intro
│   ├── 00-personal-finance/       # Budgeting, saving, compounding, TVM
│   ├── 01-investing-101/          # Fundamentals: investing, risk, diversification, psychology
│   ├── 02-investment-basics/      # Equity vs debt, share types, stocks, bonds, mutual funds, ETFs, strategies
│   ├── 03-pakistan-stock-market/  # PSX, indices, participants, regulations, prices, indicators
│   ├── 04-getting-started-with-psx/ # Account, broker, CDC, first trade, portfolio manager
│   ├── 05-trading-and-orders/     # Order types, hours, settlement, circuit breakers
│   ├── 06-corporate-actions/      # Dividends, bonus, splits, rights, book closure
│   ├── 07-fundamental-analysis/   # FA framework, statements, ratios, valuation (~24 pages)
│   ├── 08-technical-analysis/     # Charts, candlesticks, indicators
│   ├── 09-taxes-and-zakat/        # CGT, dividend tax, zakat
│   ├── 10-shariah-investing/      # KMI-30, screening, purification
│   └── 11-glossary/               # Reference glossary
├── src/
│   ├── components/                # Reusable React components for MDX
│   │   ├── AdUnit/                # AdSense slot placeholder
│   │   ├── Callout/               # Info / tip / warning / danger boxes
│   │   └── Disclaimer/            # Legal/risk disclaimer block
│   ├── theme/
│   │   └── MDXComponents.tsx      # Registers components for global MDX use
│   ├── pages/                     # Custom React pages (homepage lives here)
│   └── css/custom.css             # Global theme variables (PSX brand colors)
├── static/                        # Files copied verbatim to /
│   ├── img/                       # Logo, favicon, social card
│   └── robots.txt
├── docusaurus.config.ts           # Site config
├── sidebars.ts                    # Auto-generated sidebar from /docs
└── tsconfig.json
```

## Adding a new docs page

1. Pick the right category folder under `docs/` (or create one with a `_category_.json` file inside).
2. Create a new `.md` (or `.mdx`) file with frontmatter:

   ```md
   ---
   id: my-new-page
   title: My New Page
   sidebar_position: 3
   description: One-sentence description used for SEO and category indexes.
   ---

   # My New Page

   Content goes here.
   ```

3. The sidebar updates automatically — no `sidebars.ts` edit required.

## Using the custom MDX components

The `AdUnit`, `Callout`, and `Disclaimer` components are registered globally so you can use them in any `.md` / `.mdx` file **without an import**:

```mdx
<Callout type="warning" title="Risk warning">
  Investing carries risk. You can lose your principal.
</Callout>

<AdUnit slot="article-mid" format="leaderboard" />

<Disclaimer />
```

`Callout` types: `info` · `tip` · `warning` · `danger` · `note`.
`AdUnit` formats: `rectangle` (default) · `leaderboard` · `sidebar`.

## Theming

The brand palette (in `src/css/custom.css`) is built from the actual PSX brand colors extracted from psx.com.pk:

- Primary: `#5AB946` (PSX green)
- Accent: `#78B82A` (lime), `#337AB7` (link blue), `#D1A851` (gold)

Dark mode is enabled and respects the user's system preference.

## What's not configured yet

These are intentionally deferred:

- **Deployment** — Vercel will be wired up separately.
- **Analytics / AdSense** — only stub component is in place.
- **Algolia** — local search is used instead.
- **Real content** — every doc page is a placeholder waiting for real content.

## License

Educational content, all rights reserved. Not financial advice.
