---
description: Add term(s) to the PSX glossary using the psx-glossary-entry skill
argument-hint: "<term> | term1, term2, term3"
---

Add the following term(s) to `docs/11-glossary/glossary.md`:

$ARGUMENTS

Use the **psx-glossary-entry** skill. It enforces this strict per-entry format:

```markdown
### {Term}

{1-3 sentence plain-English definition.}

**Example:** {one short, concrete Pakistani example with PKR if relevant}.

**See also:** [{related glossary term}](#anchor) · [{related doc page}](path)
```

Steps:

1. Read `docs/11-glossary/glossary.md` first — every time. Respect existing entries, alphabetical order, and any category headings already in the file.
2. For each term: write the definition (1-3 sentences), one short concrete example (PKR amounts where useful), and see-also links (other glossary terms or existing doc pages — never link to a page that doesn't exist; the build has `onBrokenLinks: 'throw'`).
3. Insert each entry at the correct alphabetical position. Do not append blindly to the end. Do not reorganize existing entries.
4. Mark any specific PKR amounts, tax rates, or zakat thresholds as `<TODO: verify …>` placeholders.
5. Report back with: each term added, the see-also links you created, and any TODOs the user needs to verify.

If a term already exists, do not duplicate it. Either improve the existing entry (if the user's request is clearly an improvement) or quote the existing entry back and ask which they want.
