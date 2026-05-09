---
description: Run an editorial review on a docs page using the psx-content-reviewer skill
argument-hint: "<docs/NN-category/file.md>"
---

Run an editorial review on this file:

$ARGUMENTS

Use the **psx-content-reviewer** skill. Output a structured report (not a rewrite) covering:

- **Build-blocking issues** — frontmatter YAML mistakes, broken internal links (the build has `onBrokenLinks: 'throw'`)
- **Editorial issues** — undefined jargon, sentence length, missing Pakistani context, generic American examples, advice-shaped phrasing, unsourced numeric claims
- **Suggestions (optional)** — missed Callout opportunities, useful cross-links the draft could add
- **Checklist** — pass/fail every item from sections A-G of the skill (frontmatter, structure, tone, components, cross-links, TODOs, category-specific extras)

Verify every internal `/docs/...` link by checking that the target file actually exists in the tree. Use file:line references in the report so the user can locate each issue.

Do not rewrite the file as part of the review. The user decides which issues to fix afterward — if they follow up with "fix them", apply the fixes; otherwise the review stays a report.
