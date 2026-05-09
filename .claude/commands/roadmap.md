---
description: Generate a learning roadmap using the psx-learning-roadmap skill
argument-hint: "<audience | page-prerequisites | curriculum>"
---

Generate a learning roadmap for:

$ARGUMENTS

Use the **psx-learning-roadmap** skill. Pick the output format that matches the user's actual ask:

- **Format A — prerequisite tree**: when the request is about a specific page (e.g., "what comes before the dividends page", "prerequisites for KMI-30")
- **Format B — audience reading track**: when the request names an audience (e.g., "complete-beginner", "Shariah-only investor", "tax-season refresher", "fundamentals stock-picker", "first-time PSX investor")
- **Format C — site-level curriculum graph**: when the request is about the whole site flow ("design the curriculum", "how should categories flow")

Steps:

1. Glob `docs/**/*.md` first so the roadmap reflects pages that actually exist, not assumptions. The site currently has 12 categories: `00-personal-finance` through `11-glossary`.
2. Read enough of each relevant page to know what it assumes and what it covers — for a single-page prerequisite tree, 5-10 files is usually enough; for a full curriculum, skim everything.
3. Build the prerequisite graph as a directed acyclic graph (no cycles).
4. Write learning objectives using action verbs (`identify`, `apply`, `compare`, `calculate`, `recognize`, `avoid`) — never `understand`, `know`, `be familiar with`.
5. Output the report in the chosen format. The skill's format templates live in `.claude/skills/psx-learning-roadmap/references/output-formats.md` and the audience cheatsheet in `audience-templates.md`.
6. Cross-link only to pages currently in the docs tree — broken links fail the build.

Do not edit any docs pages as a side effect. The roadmap is a plan, not a rewrite. If the user wants the output embedded into a specific page (as a "Read this first" callout, etc.), they'll ask explicitly.
