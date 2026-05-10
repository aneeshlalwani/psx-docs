---
name: psx-doc-writer
description: Drafts a complete Pakistan Stock Exchange (PSX) investor-education documentation page that fits this project's MDX conventions, frontmatter, structure, and beginner-friendly tone. Trigger this skill whenever the user asks Claude to write, draft, author, fill in, or expand a page under docs/, including casual phrasing like "write the dividends page", "draft content for stocks.md", "author the CDC account doc", "write a beginner explainer about KMI-30", or "expand intro.md". Use it even if the user does not explicitly say "skill" or "doc-writer". Always read /writing-instructions.md first; it sets project-wide style (no em-dashes, "lacs" not "lakhs", engaging openers, sourced claims, no assumed information). Never invent specific numbers (broker fees, tax rates, returns); leave clearly-labeled TODO placeholders or web-search and cite the source.
---

# psx-doc-writer

A skill for drafting documentation pages for the PSX investing-education site that lives in this repository. The site teaches Pakistani retail investors how to invest on the Pakistan Stock Exchange, from the basics of "what is a stock" through Shariah-compliant investing, taxes, and zakat.

## When to use this skill

Trigger when the user asks for content for a specific page or topic. Common phrasings:

- "Write the [page-name] page"
- "Draft content for `docs/02-investment-basics/etfs.md`"
- "Author the dividends doc"
- "Fill in `intro.md`"
- "Expand the KMI-30 page"
- "Add a beginner explainer for capital gains tax"
- Anything similar. Even when the user does not name the file path explicitly, if they identify a topic that maps to one of the doc categories below, use this skill.

Do **not** trigger this skill for:

- Adding a glossary term (use `psx-glossary-entry` instead)
- Reviewing or critiquing an existing draft (use `psx-content-reviewer`)
- Producing a learning roadmap or prerequisite chain (use `psx-learning-roadmap`)
- Generating broker comparison tables (use `psx-broker-comparison`)

## Project writing rules (authoritative)

Always read [`/writing-instructions.md`](/writing-instructions.md) at the start of every drafting task. That file is the project-wide writing-style source of truth and may evolve. The current rules are mirrored here for visibility:

1. **No em-dashes (—) or en-dashes (–) in prose.** Use commas, periods, parentheses, semicolons, or restructured sentences. Standard hyphens in compound adjectives (`long-term`, `well-known`, `chart-reading`) are part of standard English and may stay where they aid clarity.

2. **Do not generate information from assumptions.** Every specific factual claim (rates, fees, dates, broker minimums, index values, regulations, historical performance figures, company financials) must either be cited from a primary source or marked with a `<TODO: verify …>` placeholder. If you are not certain, treat it as unknown.

3. **Always cite references.** When a page makes a specific factual claim, link to the primary source inline and add a "Sources used on this page" section above the `<Disclaimer />`. Prefer official Pakistani sources: psx.com.pk, secp.gov.pk, fbr.gov.pk, nccpl.com.pk, cdcpakistan.com.

4. **Web-search to validate.** Before stating any specific number or claim, run a web search to confirm it. If web search is not available, mark the claim as a TODO rather than asserting it.

5. **Pakistani English conventions.** Use "lacs", not "lakhs". Use "Rs." or "PKR" for currency. Reference Pakistani institutions (PSX, CDC, NCCPL, SECP, FBR, KMI-30, KSE-100), not American equivalents (NYSE, SEC, IRA, 401k).

6. **Engaging, reader-addressing openers.** Do not start a page with "This site teaches…", "This page covers…", "In this article we will discuss…" or any other descriptive third-person opener. Open by addressing the reader directly. Examples: "If you have ever thought about…", "If you are considering…", "Imagine you…", "Most Pakistani investors…", "When you place your first…". The first sentence should make the reader feel the page was written for them.

7. **Tone.** Short sentences (average 15-20 words). Define jargon on first use. Use concrete PKR examples over abstract math. Friendly second-person voice. No buy/sell advice ("you should buy", "this is a good investment" are off-limits). No certainty about future returns ("stocks will return X%" is wrong; "stocks have historically returned X%, per [source]" is acceptable when sourced).

## Project context the page must fit

### File location

Pages live at `docs/<NN-category>/<slug>.md` where `NN-category` is one of:

| Folder                        | Topics                                                        |
| ----------------------------- | ------------------------------------------------------------- |
| `00-personal-finance`         | Personal finance, budgeting, saving, compounding, TVM         |
| `01-investing-101`            | Investing fundamentals: what is investing, why invest, risk/return |
| `02-investment-basics`        | Stocks, bonds, mutual funds, ETFs, equity vs. debt            |
| `03-pakistan-stock-market`    | PSX overview, indices (KSE-100, KSE-30, KMI-30), participants |
| `04-getting-started-with-psx` | Account opening, CDC, brokers, first trade                    |
| `05-trading-and-orders`       | Order types, trading hours, settlement (T+1), circuit breakers |
| `06-corporate-actions`        | Dividends, bonus shares, stock splits, rights issues, book closure |
| `07-fundamental-analysis`     | Financial statements, ratios, intrinsic value (24 pages)      |
| `08-technical-analysis`       | Charts, candlesticks, indicators                              |
| `09-taxes-and-zakat`          | Filer status, CGT, dividend tax, zakat on stocks             |
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

A complete worked example of a good draft (the dividends page) is in [assets/example-page.mdx](assets/example-page.mdx). Look at it when you want to calibrate the right depth, voice, opener style, source-citation style, and TODO placement.

## What to never invent

These change frequently and are easy to get wrong. Either web-search and cite, or leave a clearly-labeled TODO placeholder for the user to verify:

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
CGT rate for filers via FBR or PSX site>%**.
```

## What to do step by step

1. **Read [`/writing-instructions.md`](/writing-instructions.md) first.** It is the source of truth and may have changed.
2. **Identify the target file.** Either the user named it, or you can infer the path from the topic (e.g., "dividends" maps to `docs/06-corporate-actions/dividends.md`). If ambiguous, ask one clarifying question.
3. **Read the existing file** if one is there. Most pages currently contain a placeholder paragraph. Preserve the existing frontmatter values (`id`, `sidebar_position`, often the `description`) unless they are clearly wrong; those values are wired into the sidebar order.
4. **Read [assets/page-template.mdx](assets/page-template.mdx)** for the structural blueprint, and skim [assets/example-page.mdx](assets/example-page.mdx) for voice and depth calibration.
5. **Read 1-2 sibling pages** in the same category to match voice. The reading level should be consistent across a category.
6. **Web-search any specific factual claim** before drafting (rates, fees, account minimums, regulations, historical figures). Capture the source URLs as you go.
7. **Draft the page** using the template structure. Length target: 400-900 words for typical pages, 200-400 for short pages like trading hours or book closure, longer for foundational topics.
8. **Open with reader-addressing phrasing**, not a descriptive third-person sentence. See rule 6 in "Project writing rules" above.
9. **Add a Callout** only when there's a genuine "watch out" or "useful tip" moment. Do not pad.
10. **Mark every uncertain number with a TODO** in the format above.
11. **Add a "Sources used on this page" section** above the `<Disclaimer />` listing every primary source you cited. Use markdown-link format.
12. **Add `<Disclaimer />`** at the end of any page that touches taxes, zakat, Shariah rulings, or specific securities. (For tax/zakat-heavy pages, also use the `psx-tax-zakat-helper` skill alongside; it provides the topical Callout that goes above the `<Disclaimer />`.)
13. **Cross-link** to other pages where it helps, using absolute paths like `[dividends](/docs/06-corporate-actions/dividends)`. Don't link a term in every paragraph; once per page is usually enough.
14. **Write the file.** Use the `Write` tool. Do not run the build automatically; let the user do that when they're ready to review.
15. **Report back** with: file path written, word count, list of TODOs the user needs to verify, list of cross-links you added, list of sources cited.

## Final notes

The build is strict (`onBrokenLinks: 'throw'`). Any internal link to a non-existent doc will fail the build, so only cross-link to pages that already exist. If you want to recommend a future link, write the term in plain text and append `<!-- TODO: link to [page] when written -->` so the user catches it.

The goal of every page is the same: a Pakistani reader who started not knowing the topic finishes the page knowing exactly what it means, with one or two concrete examples in their head and a clear sense of what to learn next.
