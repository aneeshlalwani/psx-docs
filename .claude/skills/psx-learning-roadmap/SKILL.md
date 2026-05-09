---
name: psx-learning-roadmap
description: Designs the learning structure for the PSX docs site — prerequisite chains, learning objectives, recommended reading order across the 12 categories (personal finance through fundamental/technical analysis, taxes, Shariah, glossary), "what to read next" pointers, and curriculum-level path designs (e.g., "complete-beginner track", "Shariah-only track", "tax-season refresher", "fundamentals stock-picker track"). Trigger this skill whenever the user asks Claude to build, design, plan, sequence, or structure the learning path for the site — including casual phrasing like "what's the prerequisite chain for KMI-30?", "design a beginner roadmap", "what should someone read first?", "build a path for fundamentals investors", "how should categories flow?", "create a curriculum", "what comes before the dividends page?", or "give me a 7-day reading plan". Output is a reading-order plan, not a rewritten page.
---

# psx-learning-roadmap

A skill for designing the *progression* through the PSX docs site — what someone should read in what order to build understanding, what each page assumes the reader already knows, and how to assemble curated tracks for different audiences (complete beginner, Shariah-focused investor, tax-season refresher, returning trader, etc.).

The site already has a sidebar order, but a sidebar is just one linear path. This skill produces curriculum-level plans that go beyond that — including diagonal paths across categories, prerequisite trees, and per-page "what to read first / what to read next" pointers that can be embedded into pages.

## When to use this skill

Trigger when the user asks for sequencing, structuring, prerequisites, or curriculum design. Examples:

- "What should a complete beginner read first?"
- "Build a learning roadmap"
- "What are the prerequisites for the KMI-30 page?"
- "Design a Shariah-only reading track"
- "Plan a 7-day reading plan for someone opening their first PSX account"
- "What should each category link to as its prerequisite?"
- "How should the categories flow?"
- "Make a curriculum structure"

Do **not** trigger this skill for:

- Drafting the actual page content (use `psx-doc-writer`)
- Reviewing a written page (use `psx-content-reviewer`)
- Adding a glossary entry (use `psx-glossary-entry`)

## The site's existing structure

The site has twelve categories, in this default order:

0. `00-personal-finance` — Pre-investing foundations: budgeting, saving, compounding, TVM
1. `01-investing-101` — Investing fundamentals: what / why / risk
2. `02-investment-basics` — Stocks, bonds, mutual funds, ETFs
3. `03-pakistan-stock-market` — PSX overview, indices, participants
4. `04-getting-started-with-psx` — Account opening, CDC, brokers, first trade
5. `05-trading-and-orders` — Order types, hours, settlement
6. `06-corporate-actions` — Dividends, bonus, rights, book closure
7. `07-fundamental-analysis` — Financial statements, ratios, intrinsic value
8. `08-technical-analysis` — Charts, candlesticks, indicators
9. `09-taxes-and-zakat` — CGT, dividend tax, zakat
10. `10-shariah-investing` — KMI-30, screening, purification
11. `11-glossary` — Reference

Always read the docs tree before producing a roadmap, because pages get added and removed. Use `Glob` / `ls docs/` so the roadmap reflects what actually exists, not what existed when this skill was written.

## Output format selection

There are three canonical output templates, plus a recipe for embedding roadmaps back into docs pages. Read the file for the format(s) the user's request actually calls for — don't preload all three.

| Format | Use when the user is asking… | Where it lives |
|---|---|---|
| **A. Prerequisite tree** | "what comes before X", "what does the dividends page assume" | [references/output-formats.md](references/output-formats.md) |
| **B. Reading track for an audience** | "complete beginner track", "Shariah-only path", "tax-season refresher" | [references/output-formats.md](references/output-formats.md) — example output in [assets/example-beginner-track.md](assets/example-beginner-track.md) |
| **C. Site-level curriculum graph** | "design the whole curriculum", "how should the site flow" | [references/output-formats.md](references/output-formats.md) |
| **Embed into page** | "add a 'read this first' callout to the KMI-30 page" | [references/output-formats.md](references/output-formats.md) |

For the audience-template cheatsheet (anchor questions, reading lengths, diagonal-path notes), see [references/audience-templates.md](references/audience-templates.md). Read it whenever the user names an audience type — most asks do.

## Learning objectives — how to write them

A learning objective is a one-sentence statement of what the reader will be able to **do** after a page. Use action verbs: *explain*, *identify*, *compare*, *calculate*, *recognize*, *apply*, *avoid*. Don't use squishy verbs like *understand*, *know*, *be familiar with* — they're untestable.

Good: "After reading this page, you'll be able to **identify** the three key dates that determine dividend eligibility, and **apply** them to a sample trade."

Bad: "After reading this page, you'll **understand** dividends."

When you produce a curriculum (Format C) or a track (Format B), every page in it gets one explicit learning objective. The user can lift these directly into the page's `## What you'll learn` section.

## Prerequisite logic — how to derive it

For any page X, ask:

1. **What jargon does X use that the reader needs to already know?** Each piece of unfamiliar jargon points to a prerequisite page (or a glossary entry). For example, the dividends page uses "T+2 settlement" and "book closure" — the dividends page therefore depends on `05-trading-and-orders/settlement` and the book-closure page.
2. **What concept does X build on?** ETFs build on mutual funds and stocks. The first-trade page builds on order types. Capital gains tax builds on a basic understanding of buying and selling.
3. **What knowledge from outside the docs is assumed?** PKR, basic arithmetic, "you have a bank account" — flag these only if they're load-bearing for that specific page.

Treat prerequisites as a **directed acyclic graph**, not a tree. Two pages can share a prerequisite. The same page can be a prerequisite to many later pages. Never produce a roadmap with cycles.

## What to do step by step

1. **List the existing pages.** Use `Glob` for `docs/**/*.md` so the roadmap reflects the actual file tree, not assumptions.
2. **Pick the output format** based on the user's actual question. Read [references/output-formats.md](references/output-formats.md) for the matching template.
3. **If the user named an audience**, read [references/audience-templates.md](references/audience-templates.md) for the anchor question and the reading-length goldilocks zone.
4. **Read enough of each relevant page** to know what it assumes and what it covers. For a one-page prerequisite tree, you may only need to read 5-10 files. For a site-level curriculum, skim everything.
5. **Build the prerequisite graph** for the relevant slice. Reject cycles.
6. **Write learning objectives** for every page in the output, using action verbs.
7. **Produce the report** in the chosen format.
8. **Offer to embed** it into specific pages if that fits the user's flow — but only edit pages when explicitly asked.

## What never to do

- Never invent pages that don't exist. Cross-link only to pages currently in the docs tree.
- Never produce a roadmap with cycles (page A requires B, B requires C, C requires A).
- Never use untestable verbs (*understand*, *be aware of*) in learning objectives.
- Never restructure the sidebar order or the underlying folder structure as a side effect — `sidebars.ts` and `_category_.json` files are out of scope here.
- Never quote durations as facts (e.g., "this takes exactly 12 minutes"). Use rough ranges and frame them as estimates.
