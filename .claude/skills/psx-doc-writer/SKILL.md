---
name: psx-doc-writer
description: Drafts a complete Pakistan Stock Exchange (PSX) investor-education documentation page that fits this project's existing MDX conventions, frontmatter, structure, and beginner-friendly tone. Trigger this skill whenever the user asks Claude to write, draft, author, fill in, or expand a page under docs/ — including casual phrasing like "write the dividends page", "draft content for stocks.md", "author the CDC account doc", "write a beginner explainer about KMI-30", "expand intro.md", or any request to produce real content for a specific topic in the PSX docs site. Use it even if the user does not explicitly say "skill" or "doc-writer". Do NOT invent specific numbers (broker fees, tax rates, returns) — leave clearly-labeled TODO placeholders the user can verify.
---

# psx-doc-writer

A skill for drafting documentation pages for the PSX investing-education site that lives in this repository. The site teaches Pakistani retail investors how to invest on the Pakistan Stock Exchange — from "what is a stock" through Shariah-compliant investing, taxes, and zakat.

## When to use this skill

Trigger when the user asks for content for a specific page or topic. Common phrasings:

- "Write the [page-name] page"
- "Draft content for `docs/02-investment-basics/etfs.md`"
- "Author the dividends doc"
- "Fill in `intro.md`"
- "Expand the KMI-30 page"
- "Add a beginner explainer for capital gains tax"
- Anything similar — even when the user does not name the file path explicitly, if they identify a topic that maps to one of the doc categories below, use this skill.

Do **not** trigger this skill for:

- Adding a glossary term (use `psx-glossary-entry` instead)
- Reviewing or critiquing an existing draft (use `psx-content-reviewer`)
- Producing a learning roadmap or prerequisite chain (use `psx-learning-roadmap`)
- Generating broker comparison tables (use `psx-broker-comparison`)

## Project context the page must fit

### File location

Pages live at `docs/<NN-category>/<slug>.md` where `NN-category` is one of:

| Folder                        | Topics                                                        |
| ----------------------------- | ------------------------------------------------------------- |
| `00-personal-finance`         | Personal finance, budgeting, saving, compounding, TVM         |
| `01-investing-101`            | Investing fundamentals: what is investing, why invest, risk/return |
| `02-investment-basics`        | Stocks, bonds, mutual funds, ETFs                             |
| `03-pakistan-stock-market`    | PSX overview, indices (KSE-100, KSE-30, KMI-30), participants |
| `04-getting-started-with-psx` | Account opening, CDC, brokers, first trade                    |
| `05-trading-and-orders`       | Order types, trading hours, settlement (T+2)                  |
| `06-corporate-actions`        | Dividends, bonus shares, rights issues, book closure          |
| `07-fundamental-analysis`     | Financial statements, ratios, intrinsic value                 |
| `08-technical-analysis`       | Charts, candlesticks, indicators                              |
| `09-taxes-and-zakat`          | CGT, dividend tax, zakat on stocks                            |
| `10-shariah-investing`        | Shariah investing, KMI-30, screening, purification            |
| `11-glossary`                 | Reference glossary                                            |

If the user does not say which folder, infer it from the topic. If genuinely ambiguous, ask one short clarifying question before drafting.

### Frontmatter shape (required)

The build is YAML-strict, and any unquoted value containing a colon will break the build. Always quote string values.

```yaml
---
id: '<slug-matching-filename>'
title: '<Title Case Title>'
sidebar_position: <integer>
description: '<one sentence, SEO-friendly, ~120-160 chars>'
---
```

For the landing intro at `docs/intro.md`, also include `slug: "/intro"`.

### Globally available MDX components

These are wired through `src/theme/MDXComponents.tsx` and need **no import**:

```mdx
<Callout type="info" title="Optional title">
  Body text. Types: info, tip, warning, danger, note.
</Callout>

<AdUnit slot="article-mid" format="leaderboard" />
{/* formats: rectangle (default), leaderboard, sidebar */}

<Disclaimer />
{/* renders the standard "educational only, not financial advice" block */}
```

Use them when they genuinely add value, not for decoration. A page with no callout is fine. A page bristling with five callouts is not.

## Page structure

The full page skeleton lives in [assets/page-template.mdx](assets/page-template.mdx). Read it once at the start of a drafting task and use it as the structural blueprint. Skip a section in the template only when it would be filler.

A complete worked example of a good draft (the dividends page) is in [assets/example-page.mdx](assets/example-page.mdx). Look at it when you want to calibrate the right depth, voice, and TODO placement for a beginner-friendly page.

## Tone and voice

Why this tone matters: the audience often has no prior exposure to formal markets. Industry shorthand (e.g., "T+2", "book closure", "ex-dividend") shuts them out. The goal is to make a 25-year-old in Lahore who has never owned a stock feel that this site was written for them.

Concrete rules:

- **Short sentences.** Aim for an average of 15-20 words. Break long sentences in two.
- **Define jargon on first use.** "Capital gains tax (the tax you pay on profit when you sell a share at a higher price than you bought it)…"
- **Prefer concrete examples over abstract math.** "If you bought 100 shares of XYZ at PKR 250 and sold them at PKR 280, your gain is PKR 3,000" beats a formula.
- **Use PKR, not USD.** All money examples are in Pakistani rupees unless the topic specifically requires another currency.
- **Use Pakistani context.** Reference CDC, NCCPL, SECP, and PSX where they belong. Don't translate American examples (NYSE, IRA, 401k) — use local equivalents.
- **Second person, friendly.** "When you place a market order…" not "When the investor places a market order…"
- **Never give buy/sell advice.** Phrases like "you should buy" or "this is a good investment" are off-limits. Stick to mechanics and education.
- **Never claim certainty about returns.** "Stocks have historically returned X%" is okay with sourcing TODO; "stocks will return X%" is not.

## What to never invent

These change frequently and are easy to get wrong. Leave a placeholder for the user to verify against current sources:

- **Tax rates** (CGT %, dividend withholding %, filer vs. non-filer differential)
- **Broker fees and commission rates**
- **Zakat nisab (current PKR threshold)**
- **Specific company financials**
- **Index levels or returns**
- **CDC fees, custody charges**
- **Trading hours** (mostly stable, but verify)

Format placeholders so they're impossible to miss in a final read-through:

```mdx
The current capital gains tax rate for filers is **<TODO: verify current
CGT rate for filers — check FBR or PSX site>%**.
```

## What to do step by step

1. **Identify the target file.** Either the user named it, or you can infer the path from the topic (e.g., "dividends" → `docs/06-corporate-actions/dividends.md`). If ambiguous, ask one clarifying question.
2. **Read the existing file** if one is there. Most pages currently contain a placeholder paragraph. Preserve the existing frontmatter values (`id`, `sidebar_position`, often the `description`) unless they are clearly wrong — those are wired into the sidebar order and should not change incidentally.
3. **Read [assets/page-template.mdx](assets/page-template.mdx)** for the structural blueprint, and skim [assets/example-page.mdx](assets/example-page.mdx) for voice/depth calibration.
4. **Read 1-2 sibling pages** in the same category to match voice and depth. The reading level should be consistent across a category.
5. **Draft the page** using the template structure. Length target: 400-900 words for typical pages, 200-400 for short pages like trading hours or book closure, longer for foundational topics.
6. **Add a Callout** only when there's a genuine "watch out" or "useful tip" moment. Do not pad.
7. **Add `<Disclaimer />`** at the end of any page that touches taxes, zakat, Shariah rulings, or specific securities. (For tax/zakat-heavy pages, also use the `psx-tax-zakat-helper` skill in addition — it provides the topical Callout that goes above the `<Disclaimer />`.)
8. **Mark every uncertain number with a TODO** in the format above.
9. **Cross-link** to other pages where it helps, using relative links like `[dividends](/docs/06-corporate-actions/dividends)`. Don't link a term in every paragraph — once per page is usually enough.
10. **Write the file.** Use the `Write` tool. Do not run the build automatically; let the user do that when they're ready to review.
11. **Report back** with: file path written, word count, list of TODOs the user needs to verify, list of cross-links you added.

## Final notes

The build is strict (`onBrokenLinks: 'throw'`). Any link to a non-existent doc will fail the build, so only cross-link to pages that already exist. If you want to recommend a future link, write the term in plain text and append `<!-- TODO: link to [page] when written -->` so the user catches it.

The goal of every page is the same: a Pakistani reader who started not knowing the topic finishes the page knowing exactly what it means, with one or two concrete examples in their head and a clear sense of what to learn next.
