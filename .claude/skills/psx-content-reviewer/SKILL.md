---
name: psx-content-reviewer
description: Reviews a PSX docs page draft against the project's editorial checklist before commit — flags undefined jargon, missing Pakistani context, missing disclaimers on tax/zakat/Shariah/securities pages, frontmatter mistakes, broken or missing cross-links, missed Callout opportunities, tone inconsistencies, and unverified TODOs. Trigger this skill whenever the user asks Claude to review, audit, critique, polish, edit-pass, "look over", check-before-merge, sanity-check, or feedback on a docs page or draft — including casual phrasing like "review the dividends page", "is this ready to publish?", "audit my draft", "check this content for issues", "give me feedback on stocks.md", or "do an editorial pass on intro.md". Use it even when the user does not explicitly say the word "skill". Output is a structured report, not a rewritten file.
---

# psx-content-reviewer

A skill for reviewing existing draft content in this project against a fixed editorial checklist. The output is a **report**, not a rewrite. The user decides which issues to act on.

## When to use this skill

Trigger when the user asks for evaluation, feedback, or quality-checking of an existing draft. Examples:

- "Review the dividends page"
- "Audit my draft of stocks.md"
- "Is this ready to publish?"
- "Check this content for issues"
- "Polish-pass this"
- "Anything I missed in the KMI-30 page?"
- "Give me feedback before I commit"

Do **not** trigger this skill for:
- Drafting a new page or filling in a placeholder (use `psx-doc-writer`)
- Adding glossary terms (use `psx-glossary-entry`)
- Generating broker comparisons (use `psx-broker-comparison`)
- Building learning roadmaps or prerequisite chains (use `psx-learning-roadmap`)

If a review surfaces issues the user wants you to fix, apply the fixes after the review — but the review itself stays a report.

## Review philosophy

This is an **editorial review**, not an investing-correctness review. You are not the legal-accuracy authority on Pakistani tax law or Shariah rulings. You **are** the authority on:

- Whether the page reads as if written for someone who knows nothing about investing
- Whether the project's frontmatter, structure, and component conventions are followed
- Whether the language has unexplained jargon
- Whether disclaimers and TODOs are in the right places
- Whether the build will pass

Where you spot something that looks substantively wrong (e.g., "this is the wrong settlement cycle for PSX"), flag it as a **factual claim to verify** rather than asserting it is wrong. Push the actual fact-checking back to the user.

## Inputs

The user usually identifies the file by name or topic. If they paste a draft inline without saying which file it's for, ask once which file path it belongs in (the issues list depends on the file's category — a tax page has different requirements than a glossary page).

## Output format (strict)

Always return the report in this exact structure. Do not omit empty sections — write `_None._` so the user can see you checked.

```markdown
# Review: <file-path>

## Summary

<One paragraph, 2-4 sentences. State the file's category, what it tries
to do, and the overall verdict: "ready to publish", "needs fixes before
publishing", or "needs significant rework". Be honest but kind.>

## Build-blocking issues

<Things that will fail `npm run build`. These are must-fix before commit.>

## Editorial issues

<Things that hurt the reader experience but don't break the build.>

## Suggestions (optional)

<Improvements that aren't strictly issues — e.g., a Callout would
strengthen a section. Mark as optional.>

## Checklist

<A compact pass/fail list of every item from the checklist below, so the
user can see what was verified.>
```

Inside each section, list issues as bullets with **file:line** references where possible:

```markdown
- **L23** `description: A worker's guide: investing basics` — unquoted
  YAML value containing a colon will fail the build. Wrap in double
  quotes.
```

## The checklist

Run through every item, every review.

### A. Frontmatter

1. Frontmatter exists, opens with `---`, closes with `---`.
2. Required fields present: `id`, `title`, `sidebar_position`, `description`.
3. **All string values are quoted** (`"…"`). Unquoted values containing `:` will break the build.
4. `id` matches the filename's slug (without extension).
5. `sidebar_position` is an integer that doesn't collide with siblings in the same folder.
6. `description` is one sentence, ~120-160 characters, not just a duplicate of the title.
7. For `docs/intro.md` only: `slug: "/intro"` is also present.

### B. Structure

1. Page opens with a 2-3 sentence intro that anchors locally (mentions Pakistan / PSX / Pakistani context).
2. `## What you'll learn` section is present with 3-5 bullets (or a clear reason it isn't, e.g., a glossary page).
3. Core concept sections use `##` headings, in a logical order.
4. At least one worked example with PKR amounts where the topic is quantitative.
5. `## Key takeaways` section is present with 3-5 bullets.
6. Heading hierarchy is clean: no skipped levels (e.g., `##` then `####`).

### C. Tone and language

1. Average sentence length is short (rough heuristic: most sentences ≤ 25 words).
2. Jargon is defined on first use — every acronym (CDC, NCCPL, SECP, FBR, T+2, KMI-30) introduced inline.
3. Money examples use PKR, not USD or generic "$".
4. Pakistani-context where the topic invites it — flag generic American-style examples.
5. No buy/sell advice. Phrases like "you should buy", "this is a good investment", "this stock will rise" are red flags.
6. No certainty about returns. "Stocks have returned" → must be cited or marked TODO; "stocks will return" is wrong tone.
7. Friendly second-person voice ("you"), not third-person ("the investor").

### D. Components

1. `<Callout>` is used where there's a genuine "watch out" or "useful tip" — flag missed obvious opportunities.
2. `<Callout>` is **not** used decoratively; if there are 4+ on a single page, flag overuse.
3. `<Disclaimer />` is present at the end of any page touching: taxes, zakat, Shariah rulings, specific securities, or anything that could be mistaken for advice.
4. `<AdUnit>` is used (if at all) at natural break points, not jammed between consecutive paragraphs of the same idea.

### E. Cross-links

1. Internal links use absolute paths under `/docs/` (e.g., `/docs/06-corporate-actions/dividends`).
2. **Every internal link points to a file that exists.** Use the `Read`/`Bash` tools to verify each link target. The build has `onBrokenLinks: 'throw'`, so broken links fail CI.
3. Glossary anchors use Docusaurus's slug rules: lowercase, spaces → hyphens, punctuation removed.
4. Flag missed cross-link opportunities: terms mentioned in passing that exist as their own dedicated pages and are not linked.

### F. TODOs and unverified claims

1. Every numeric claim that's regulation-dependent (tax rates, zakat nisab, broker fees, lot sizes) is **either** sourced **or** marked with a clearly-labeled `<TODO: verify …>` placeholder.
2. List every remaining TODO in the report, so the user has a complete to-verify list.

### G. Category-specific extras

- **`docs/00-personal-finance/*`** — Flag any specific PKR amount or interest rate stated as fact (e.g., savings-account rates, inflation rates) that should be a TODO.
- **`docs/06-corporate-actions/*`** — Ensure book-closure / T+2 timing is correctly described where it matters.
- **`docs/07-fundamental-analysis/*`** — Flag any specific company financials or ratios stated as current (e.g., "ABC Ltd's P/E is 12") — they go stale fast and should be illustrative only or marked TODO.
- **`docs/08-technical-analysis/*`** — Flag predictive claims about specific securities. Technical analysis content should describe patterns and indicators, never prescribe trades.
- **`docs/09-taxes-and-zakat/*`** — `<Disclaimer />` is mandatory. Flag any specific PKR-amount example that looks like advice. Ensure both filer and non-filer context is at least mentioned where relevant.
- **`docs/10-shariah-investing/*`** — `<Disclaimer />` is mandatory. Flag any claim presented as definitive Shariah ruling. Distinguish between KMI-30, KMI All-Share, and "PSX Shariah Index" — these are different.
- **`docs/04-getting-started-with-psx/*`** — Account-opening processes change; flag any hard-coded "you'll need form X" that should be marked TODO.
- **`docs/11-glossary/glossary.md`** — Defer to the `psx-glossary-entry` format. Flag any entry that doesn't match.

## Verifying claims you can actually verify

Some checks are programmatic. Always do them:

- **Broken internal links.** Extract every `[…](/docs/…)` and confirm the target file exists in the repo.
- **Frontmatter YAML parse.** Mentally validate that every value containing `:`, `#`, `[`, `]`, `{`, or `}` is quoted.
- **Sibling sidebar_position collisions.** Read sibling files in the same folder and check for duplicates.
- **Missing `<Disclaimer />`** on tax / zakat / Shariah / securities pages.
- **Globally registered components used correctly** (`Callout`, `AdUnit`, `Disclaimer` — case-sensitive, correct prop names).

## What never to do

- Never silently rewrite the user's draft as part of the review. The review is a report.
- Never assert legal or religious correctness. Flag claims; don't adjudicate them.
- Never invent fixes for "issues" that are actually stylistic preferences. If there's no clear rule, it's not an issue.
- Never report a problem without a file:line reference (or a clear unambiguous quote of the offending text) — the user has to be able to find it.

## Worked example of a good report

For input "review docs/06-corporate-actions/dividends.md":

```markdown
# Review: docs/06-corporate-actions/dividends.md

## Summary

A solid first draft of the dividends page. Tone is appropriate, the
worked example uses PKR, and the disclaimer is present. Two
build-blocking issues and three editorial issues need fixing before
this is ready to publish.

## Build-blocking issues

- **L5** `description: How dividends work: cash, bonus, and rights` —
  unquoted YAML containing a colon will fail the build. Wrap in `"…"`.
- **L42** `[settlement](/docs/05-trading-and-orders/settlment)` —
  typo in target path. Should be `/docs/05-trading-and-orders/settlement`.

## Editorial issues

- **L8** "T+2" used without definition. Define on first use, e.g.,
  "T+2 (the trade settles two business days after the trade date)".
- **L19** Sentence length: "When a Pakistani company that you own
  shares in declares a profit and decides to share that profit with
  shareholders, the way it does that is called a dividend." — 32
  words. Split into two.
- **L31** "5% dividend tax" stated as fact. Either cite a source or
  replace with `<TODO: verify current dividend withholding rate>`.

## Suggestions (optional)

- A `<Callout type="warning">` near the book-closure paragraph would
  draw attention to the timing trap (a beginner is likely to miss it).
- Consider linking "ex-dividend" to the glossary if you add it there.

## Checklist

- [x] Frontmatter complete
- [ ] Frontmatter YAML safe (issue at L5)
- [x] Intro present
- [x] "What you'll learn" present
- [x] Worked example present
- [x] "Key takeaways" present
- [x] PKR amounts used
- [ ] Jargon defined on first use (T+2 at L8)
- [x] No buy/sell advice
- [ ] All internal links resolve (broken at L42)
- [x] `<Disclaimer />` present (required for this category)
- [x] Components syntactically correct
- [ ] Numeric claims sourced or TODO'd (L31)
```

## What to do step by step

1. **Read the file.** Note the file's category (`docs/0N-…/`) — checklist items differ by category.
2. **Read sibling files** in the same folder to check for `sidebar_position` collisions and to compare voice/depth.
3. **Verify each internal link** by reading the target file path or globbing for it.
4. **Run through every checklist item** in order — A through G.
5. **Write the structured report** in the exact format above. Use file:line references everywhere possible.
6. **Wait** for the user to decide which issues to fix. Don't preemptively edit. If they say "fix them", then apply the fixes; the review remains the report.
