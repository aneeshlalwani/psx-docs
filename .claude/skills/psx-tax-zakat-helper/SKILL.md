---
name: psx-tax-zakat-helper
description: Drafts Pakistan-specific tax and zakat content for the PSX docs site (capital gains tax, dividend withholding, filer vs. non-filer status, zakat on stocks) with the mandatory "verify with current law / consult a scholar" disclaimer block, never inventing specific rates. Trigger whenever the user asks for content, sections, or worked examples involving Pakistani CGT, dividend tax, withholding tax on PSX trades, FBR rules, filer/non-filer status, zakat on shares or mutual funds, nisab calculations, or purification of haram income — including phrasing like "draft the CGT section", "explain dividend withholding", "write a zakat-on-stocks worked example", "expand the filer/non-filer paragraph", or "what tax disclaimer should this page have?". Use TODO placeholders for every specific number; never fabricate current rates.
---

# psx-tax-zakat-helper

A specialized companion to `psx-doc-writer` for content under `docs/09-taxes-and-zakat/`. Tax law and zakat rulings change. Specific PKR thresholds and percentages drift year to year. This skill is built around that fact: it provides the *structure and explanatory scaffolding* for these topics while refusing to commit to specific current values.

## When to use this skill

Trigger when the user asks for content involving Pakistani investing tax rules or zakat on financial assets. Examples:

- "Draft the capital gains tax section"
- "Explain dividend withholding for filers vs. non-filers"
- "Write a worked example for zakat on shares"
- "How should the zakat-on-stocks page handle nisab?"
- "Write the filer/non-filer paragraph"
- "What tax disclaimer should this page have?"
- "Expand `docs/09-taxes-and-zakat/dividend-tax.md`"

Use this skill **in addition to** (not instead of) `psx-doc-writer` when drafting a full tax/zakat page — `psx-doc-writer` provides the page skeleton, this skill provides the substantive tax/zakat content scaffolding to drop into the body.

Do **not** trigger this skill for:

- General investing concepts unrelated to tax/zakat (use `psx-doc-writer`)
- Glossary entries for tax terms (use `psx-glossary-entry`)

## The cardinal rule: never commit to current values

Tax rates change with each Federal Budget. Withholding rates differ by category. Filer/non-filer differentials shift. Zakat nisab is recalculated yearly. The user is the authority on what's currently in force — your job is to write the *explanation* and leave the *number* as a TODO.

**Do not** quote specific current numbers for any of:

- CGT percentage (whether held >12 months, >24 months, etc.)
- Dividend withholding percentage (filer vs. non-filer)
- Tax on bonus shares
- Stamp duty / FED on trades
- CDC fees
- Zakat nisab in PKR
- Zakat percentage (this is a religious constant — 2.5% is fine to state)

**Do** explain:

- The *concept* of CGT (you pay tax on profit, not on principal)
- The *concept* of withholding tax (deducted at source)
- The *structure* of filer vs. non-filer (non-filers pay a higher rate as a nudge to file)
- The *mechanics* of zakat (lunar-year holding, on the value at the date of zakat, at 2.5%)
- The *categories* of shares for zakat (trading vs. long-term holding can be treated differently in some scholarly opinions)

### Placeholder format

Every specific number gets a TODO that's impossible to miss:

```mdx
The current capital gains tax rate for filers is **<TODO: verify
current CGT rate for filers — check the latest Finance Act or FBR
notification>%**.
```

```mdx
Zakat is owed at 2.5% on assets held above the *nisab* threshold for
one full lunar year. The nisab in PKR is recalculated each year based
on the gold/silver standard — **<TODO: verify the current PKR nisab
value (most scholars in Pakistan publish the figure annually)>**.
```

## Topic deep-dives — load only what the task needs

The substantive scaffolding for each topic lives in a dedicated reference file. Read only the one(s) that match the user's ask — don't preload everything.

| Topic | When to read it | File |
|---|---|---|
| Capital gains tax (CGT) | Drafting `docs/09-taxes-and-zakat/capital-gains-tax.md` or any section about tax-on-sale-profit | [references/cgt.md](references/cgt.md) |
| Dividend withholding | Drafting `docs/09-taxes-and-zakat/dividend-tax.md` or any section about tax-on-dividend | [references/dividend-withholding.md](references/dividend-withholding.md) |
| Filer vs. non-filer | Any "what does filer mean" paragraph — relevant on every tax page | [references/filer-non-filer.md](references/filer-non-filer.md) |
| Zakat on stocks (and purification) | Drafting `docs/09-taxes-and-zakat/zakat-on-stocks.md` or `docs/10-shariah-investing/purification.md` | [references/zakat-on-stocks.md](references/zakat-on-stocks.md) |

If the user's task spans multiple topics (e.g., "draft the dividend-tax page including the filer/non-filer comparison"), load both relevant files. Otherwise, stay narrow — each reference file is self-contained.

## Mandatory disclaimer block

Every tax or zakat page must end with a `<Disclaimer />` component. The default disclaimer the project ships with covers the educational-only and not-financial-advice angles. For tax and zakat pages, also add a paragraph above the `<Disclaimer />` that calls out the two specific volatility sources:

```mdx
<Callout type="warning" title="Verify before you act">
  Pakistani tax rates and rules change with each Federal Budget. The
  numbers above are illustrative — check the latest Finance Act, FBR
  notifications, or your tax advisor for current values.

  Zakat rulings differ between schools of thought. The treatment shown
  here reflects mainstream practice in Pakistan, but for your specific
  situation, consult a qualified scholar or a recognised Shariah board.
</Callout>

<Disclaimer />
```

The Callout above is the *topical* disclaimer (volatile rates, scholarly difference). The `<Disclaimer />` below it is the *boilerplate* legal disclaimer. Both should be present.

## What to do step by step

1. **Identify the topic and target file.** Most asks land in `docs/09-taxes-and-zakat/{capital-gains-tax,dividend-tax,zakat-on-stocks}.md`. If it's a section *within* a page from another category that touches tax/zakat (e.g., the dividends page mentioning withholding), the same rules apply to that section.
2. **Load the matching reference file(s)** from the table above. Read only what you need — that's the whole point of progressive disclosure.
3. **Pull the right concept scaffolding** from the reference file (what to explain + worked-example skeleton + the TODOs to leave).
4. **Write the explanation** in plain English. Use second person ("you"). Anchor in PKR amounts in worked examples.
5. **Mark every specific number** with `<TODO: verify …>`. Be liberal — a TODO that turns out unnecessary costs nothing; a fabricated number costs the user's credibility.
6. **Append the topical Callout + `<Disclaimer />`** at the end of the page (not just the section, the page).
7. **Report back** with: file written/edited, every TODO inserted (so the user has a punch list of values to verify), and which scholar-difference flags you raised (if any).

## What never to do

- Never state a current CGT, dividend withholding, or other rate as a fact. Even if it's correct today, it may not be by next budget. TODO it.
- Never assert one zakat opinion as "the correct" treatment. Present the conservative default, mention the alternative, and defer to the reader's scholar.
- Never give specific tax-planning advice ("you should defer the sale to next year to fall under the long-term rate"). Stick to mechanics.
- Never omit the topical Callout + `<Disclaimer />` on tax/zakat pages.
- Never use US tax terminology (e.g., "wash sale", "Roth IRA") as analogies — Pakistani readers will be confused. If a comparison helps, use Pakistani analogues.
