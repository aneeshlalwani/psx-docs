---
description: Generate a PSX broker comparison table using the psx-broker-comparison skill
argument-hint: "[broker1, broker2, ... | sahulat | docs/04-getting-started-with-psx/file.md]"
---

Generate a broker comparison table for:

$ARGUMENTS

Use the **psx-broker-comparison** skill. It enforces the **canonical column set**, in this exact order, every time:

| Broker | Type | Account opening fee | Brokerage commission | Minimum balance | Trading platform | Mobile app | Customer service | Notable features |

The whole point of the skill is consistency — every comparison on the site reads the same way. Do not deviate from the column order or set unless the user explicitly asks.

Rules:

- **Every numeric cell is a TODO.** Account opening fees, commissions, and minimum balances change without notice. Mark each with `<TODO: verify …>` so the user fills in real values from the broker's published rate sheet or the PSX broker directory.
- **Note filer/non-filer differential** in the commission cell where applicable.
- **No external links in cells** — broker websites go stale and broken links fail the build (`onBrokenLinks: 'throw'`).
- **Append the verification footer** — the standard "all numeric values are placeholders, verify before publishing" blockquote.
- **Append `<Disclaimer />`** if writing the table into a docs page (almost always).

If the argument is empty or asks for "the major brokers", pick 4-6 well-known names (AKD, Topline, MCB Arif Habib, Arif Habib Limited, BMA, JS Global, etc.) but mark the broker list itself as TODO since some have merged or stopped offering retail accounts. If asked specifically for "Sahulat", produce a Sahulat-only table preceded by a short paragraph explaining what a Sahulat account is.

Report back with the brokers included and the count of TODOs the user needs to fill in.
