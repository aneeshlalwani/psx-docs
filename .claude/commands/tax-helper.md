---
description: Draft Pakistan-specific tax or zakat content using the psx-tax-zakat-helper skill
argument-hint: "<cgt | dividend-tax | filer-non-filer | zakat | docs/09-taxes-and-zakat/file.md>"
---

Draft Pakistan-specific tax or zakat content for:

$ARGUMENTS

Use the **psx-tax-zakat-helper** skill. It encodes the cardinal rule for this site: **never quote specific current rates or thresholds** — they change with each Federal Budget (for tax) or annually (for zakat nisab). Use `<TODO: verify …>` placeholders the user fills in from primary sources.

Load only the relevant deep-dive reference for the topic at hand:

| Topic | Reference file |
|---|---|
| Capital gains tax | `.claude/skills/psx-tax-zakat-helper/references/cgt.md` |
| Dividend withholding | `.claude/skills/psx-tax-zakat-helper/references/dividend-withholding.md` |
| Filer / non-filer mechanics | `.claude/skills/psx-tax-zakat-helper/references/filer-non-filer.md` |
| Zakat on stocks (and purification) | `.claude/skills/psx-tax-zakat-helper/references/zakat-on-stocks.md` |

If the user's task spans multiple topics (e.g., "draft the dividend-tax page including the filer/non-filer comparison"), load both relevant files. Otherwise stay narrow.

If drafting a full page, also use the **psx-doc-writer** skill for the page skeleton (frontmatter, sections, "Key takeaways") and slot the tax/zakat content into the body.

Always end the target page with the topical Callout (volatile rates / scholarly difference) plus the `<Disclaimer />` component on a line of its own. Both are mandatory for tax/zakat pages.

Report back with: file written/edited, every TODO inserted (so the user has a full punch list of values to verify), and any scholar-difference flags raised.
