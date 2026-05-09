---
name: psx-glossary-entry
description: Adds one or more glossary terms to docs/11-glossary/glossary.md in a strictly consistent format — term, plain-English definition, Pakistani-context example, and see-also cross-links — kept in alphabetical order. Trigger this skill whenever the user asks to add to the glossary, define a term, expand the glossary, write a glossary entry, or include a definition for any investing/PSX term — including casual phrasing like "add 'book closure' to glossary", "define KMI-30 in the glossary", "add these terms to the glossary: …", "what does NCCPL mean, also add to glossary", or "expand glossary with bonds-related terms". Use it even when the user does not explicitly say the word "skill". Do NOT invent specific numbers (rates, thresholds) — leave clearly-labeled TODO placeholders.
---

# psx-glossary-entry

A skill for adding terms to the project's glossary file in a way that stays consistent over time, so the glossary reads as a single coherent reference rather than a pile of inconsistent fragments.

## When to use this skill

Trigger when the user asks for one or more terms to be added to the glossary. Examples:

- "Add 'book closure' to the glossary"
- "Define KMI-30 in the glossary"
- "Add these to the glossary: market order, limit order, stop order"
- "What does NCCPL mean? Also add it"
- "Expand the glossary with all the corporate-action terms"

Do **not** trigger this skill for:
- Drafting a full doc page (use `psx-doc-writer`)
- Reviewing existing glossary content for accuracy (use `psx-content-reviewer`)
- Defining a term *inline* in another doc page — that belongs in the page itself, not in the glossary

## File location

The glossary file is `docs/11-glossary/glossary.md`. There is exactly one glossary file. Always edit this file — never create a second glossary.

## Entry format (strict)

Use this template **for every entry, every time**, with no variations:

```markdown
### {Term}

{1-3 sentences in plain English. If the term has a Pakistani/PSX-specific
meaning, use that meaning. Define jargon-within-jargon inline.}

**Example:** {one short, concrete example. Use PKR amounts and Pakistani
context where it helps. One line.}

**See also:** [{related glossary term}](#{anchor-of-that-term}) · [{related doc page name}]({path-to-doc})
```

Why the format is strict: the glossary is a reference document. A reader scanning it should be able to predict where the example sits and where the cross-links sit on every entry without re-learning the layout.

### Field rules

**Heading (`###`)**
- Level-3 heading (`###`), one term per heading. This is what produces the page anchor.
- Sentence case for ordinary terms: `### Bull market`, `### Book closure`.
- Preserve uppercase for acronyms and proper nouns: `### CDC`, `### KSE-100`, `### KMI-30`, `### NCCPL`, `### SECP`, `### T+2 settlement`.
- For an acronym whose expansion is itself the term, prefer the form readers will look up. Use `### CDC` (with the expansion in the body) rather than `### Central Depository Company`.

**Definition (1-3 sentences)**
- Plain English. Avoid defining a term using another undefined term. If you must, link the second term inline: `### Dividend tax\n\nThe withholding tax deducted on [dividends](#dividend) before they are paid to the shareholder.`
- Lead with the meaning, not the etymology. The reader needs the answer first.
- Use Pakistani context when relevant — the glossary should disambiguate Pakistan-specific meanings (e.g., "filer" status with FBR).
- For terms whose value depends on regulation that changes (tax rates, zakat nisab, lot sizes), do **not** quote the current number. Say what the term is and mark `<TODO: verify current value>` if a number is essential.

**Example line**
- Always present, on its own paragraph, prefixed with `**Example:** ` (bold, colon, single space).
- One short concrete example. Use PKR. One line.
- If a worked example would be too long, instead write `**Example:** See [Worked example on the dividends page](/docs/06-corporate-actions/dividends#a-worked-example).`
- Skip this line **only** for terms where any example would be artificial (rare — and even then, prefer to find a way).

**See also line**
- Optional but strongly preferred. Skip only when there are no relevant adjacent terms or pages.
- Use a `·` (middle dot, U+00B7) as the separator between links — not `|`, `,`, or em dashes.
- Order: glossary cross-references first, then doc-page cross-references.
- Anchor links to other glossary terms use the slug Docusaurus generates: lowercase, spaces → hyphens, punctuation removed (`KSE-100` → `#kse-100`, `Book closure` → `#book-closure`).
- Doc links use the absolute path under `/docs/`, no trailing slash, e.g. `/docs/06-corporate-actions/dividends`.

## Alphabetical order

Entries are sorted **alphabetically by the heading text**, ignoring case and ignoring leading non-letter characters.

- `### KMI-30` sorts under K.
- `### T+2 settlement` sorts under T.
- `### "Filer" status` sorts under F (the leading quote is ignored).

When inserting a new term, find the correct alphabetical position and place the entry there. Do **not** append to the end of the file unless the term is alphabetically last.

If the file currently uses categorical sections (e.g., `## Trading terms`, `## Corporate actions`), keep that structure and insert the term in the correct alphabetical position **within the right section**. If the file is a flat alphabetical list, keep it flat. Do not reorganize the file's overall structure as a side effect of adding a term — that is a separate, larger change.

## Adding multiple terms at once

If the user provides several terms in one request:
1. Resolve each term independently — definition, example, see-also.
2. Insert each one in its correct alphabetical position.
3. Cross-link them to each other in the see-also lines where it makes sense (e.g., "market order" should reference "limit order" and vice versa).
4. Report all of them at the end as one summary.

## Pakistani / PSX context cheatsheet

Use these conventions when they apply — they make the glossary feel local instead of translated.

| Concept | Pakistani specifics to mention |
|---|---|
| Tax rates | Note filer vs. non-filer differential exists; mark the actual rate as TODO |
| Zakat | Reference the lunar-year nisab; mark the current PKR value as TODO |
| Settlement | T+2 cycle on PSX, NCCPL is the clearing house |
| Custody | CDC (Central Depository Company) holds shares electronically |
| Regulator | SECP (Securities and Exchange Commission of Pakistan) |
| Indices | KSE-100, KSE-30, KMI-30 (Shariah), KMI All-Share |
| Currency | All amounts in PKR unless the term specifically refers to another currency |

## Worked example of a good entry

Input: "add 'book closure' to glossary"

Output added in the correct alphabetical slot:

```markdown
### Book closure

The date a company sets to identify which shareholders are eligible to
receive an upcoming dividend, bonus, or rights issue. If you do not own
the share before this date (accounting for T+2 settlement), you do not
qualify.

**Example:** XYZ Ltd. announces a PKR 4 per-share cash dividend with a
book closure date of 15 March. To receive the dividend you must have
bought the share at least two trading days earlier.

**See also:** [Dividend](#dividend) · [T+2 settlement](#t2-settlement) · [Book closure on the corporate actions page](/docs/06-corporate-actions/book-closure)
```

## What to do step by step

1. **Read** `docs/11-glossary/glossary.md` first — every time. The skill must respect what's already there (existing entries, alphabetical structure, any category headings).
2. **Resolve** each new term: write the definition, the example, and figure out the see-also targets (check existing glossary anchors and the docs tree for relevant pages).
3. **Find the insertion point** in the file. Use the `Edit` tool with a unique surrounding `old_string` (typically the heading just before and just after where the new entry belongs) so the insertion lands precisely.
4. **Insert in alphabetical order.** When in doubt, ignore case and leading punctuation when sorting.
5. **Do not** restructure the file (no section renames, no reordering existing entries) unless the user explicitly asks for that.
6. **Mark unverifiable specifics** with `<TODO: verify …>` rather than guessing.
7. **Report** to the user: which terms were added, what see-also links were created, and any TODOs the user needs to verify.

## Edge cases

- **Term already exists.** If the user asks to add a term that already has an entry, do not duplicate it. Either improve the existing entry (if the user's request was clearly an improvement), or tell the user the entry already exists and quote it back so they can decide.
- **Term spans multiple meanings.** If a term has distinct meanings in different contexts (e.g., "spread" can mean bid-ask spread or a derivatives spread), write a single entry that distinguishes both numbered or as a short list inside the entry — do not create two glossary headings for the same term.
- **No relevant cross-link exists yet.** Skip the See also line entirely rather than fabricating a link to a non-existent page. Docusaurus has `onBrokenLinks: 'throw'`, so a broken link will fail the build.

## What never to do

- Never append a new entry to the end without checking alphabetical position.
- Never cross-link to a doc page that does not exist.
- Never invent specific tax rates, zakat thresholds, broker fees, or other regulation-dependent numbers.
- Never give buy/sell advice in an example. Examples teach the term, not investment decisions.
- Never change another entry's wording as a side effect of adding a new one. Edit only the slice you are inserting.
