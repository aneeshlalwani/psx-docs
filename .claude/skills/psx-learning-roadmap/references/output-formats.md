# Output formats

Three canonical templates for roadmap output. Pick the one the user actually asked for. If the request doesn't fit, blend or improvise — these are templates, not a rigid contract. The principle is: **always lead with reading order or prerequisite logic, never a rewrite of page content**.

## Format A — Prerequisite tree for a specific page

Use when the user asks "what comes before X" or "what does the dividends page assume".

```markdown
# Prerequisites: <page>

## Direct prerequisites
- [<page>](path) — <one-line reason>
- [<page>](path) — <one-line reason>

## Indirect prerequisites
(things you should ideally know but not strictly required)
- [<page>](path) — <one-line reason>

## Best read alongside
- [<page>](path) — <one-line reason>

## What this unlocks (read after)
- [<page>](path)
- [<page>](path)
```

## Format B — Reading track for an audience

Use when the user asks for a curated path: "complete beginner", "Shariah-only investor", "tax-season refresher", "returning trader who already understands stocks", etc.

```markdown
# Reading track: <audience name>

**Who this is for:** <2-3 sentence audience description>

**Estimated reading time:** <e.g., "~90 minutes" or "1 page per day for 2 weeks">

**By the end you will be able to:** <3-5 concrete outcomes>

## The path

### 1. <Page title> ([link](path))
<2-3 sentences on why this is here, what to focus on, and what to skim.>

### 2. <Page title> ([link](path))
<…>

…

## Optional next steps
- <links to deeper pages outside the track>
```

A complete example output for "design a complete-beginner reading track" lives in [assets/example-beginner-track.md](../assets/example-beginner-track.md).

## Format C — Site-level curriculum graph

Use when the user asks "how should the whole site flow" or "design the curriculum".

```markdown
# Site curriculum

## Tier 1 — Foundations (read in any order)
- <page> — <one-line learning objective>
- <page> — <one-line learning objective>

## Tier 2 — PSX-specific (depends on Tier 1)
- <page> — <one-line learning objective>

## Tier 3 — Doing it (depends on Tier 2)
- <page> — <one-line learning objective>

## Tier 4 — Specialized tracks (parallel, pick one)
### Tax-aware investor
- <page>
- <page>

### Shariah investor
- <page>
- <page>

## Reference (consult as needed)
- Glossary
```

## Embedding a roadmap into a docs page

Sometimes the user will ask the roadmap to be embedded into a page (e.g., as a "Read this first" callout at the top, or a "Read this next" section at the bottom). Use these formats:

```mdx
<Callout type="info" title="Read this first">
  This page assumes you've read [order types](/docs/05-trading-and-orders/order-types)
  and [settlement](/docs/05-trading-and-orders/settlement). If you haven't, start there.
</Callout>
```

```markdown
## Read next

- [Dividends](/docs/06-corporate-actions/dividends) — how the cash side of holding shares works
- [Capital gains tax](/docs/09-taxes-and-zakat/capital-gains-tax) — what you owe when you sell at a profit
```

This skill produces the **content** of these embeds. Whether to actually edit the page is the user's call — only do the edit if the user explicitly asked for it.
