---
description: Draft a complete PSX docs page using the psx-doc-writer skill
argument-hint: "<topic | docs/NN-category/file.md>"
---

Draft a complete PSX investor-education documentation page for the following topic or file path:

$ARGUMENTS

Use the **psx-doc-writer** skill. It already encodes:

- The project's strict frontmatter shape (quoted YAML strings; `id`, `title`, `sidebar_position`, `description`)
- The standard page structure (intro → "What you'll learn" → core concept sections → worked example with PKR amounts → "Key takeaways" → optional `<Callout>` → `<Disclaimer />` when the topic warrants it)
- The Pakistani-context tone rules (short sentences, jargon defined on first use, PKR not USD, second-person voice, never give buy/sell advice)
- Where to leave `<TODO: verify …>` placeholders (tax rates, broker fees, zakat nisab, index levels, CDC/NCCPL fees — never invent specifics)

Before drafting, read `.claude/skills/psx-doc-writer/assets/page-template.mdx` for the structural blueprint and `.claude/skills/psx-doc-writer/assets/example-page.mdx` for voice/depth calibration. Also read 1-2 sibling pages in the same category to match tone consistency.

If the argument is ambiguous (e.g., a topic that could fit multiple categories), ask one clarifying question before drafting. Otherwise infer the target file path from the topic, write the file with the `Write` tool, and report back with: file path written, word count, list of TODOs the user needs to verify, and cross-links added. Do not run the build automatically — that's the user's call.
