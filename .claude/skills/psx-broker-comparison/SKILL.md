---
name: psx-broker-comparison
description: Generates structured Markdown comparison tables for Pakistani PSX brokers — using a fixed canonical column set (account-opening fee, brokerage commission, platform, mobile app, customer service, minimum balance, notable features) so every comparison on the site is shaped the same way. Trigger this skill whenever the user asks Claude to build, compare, generate, or update a broker comparison — including casual phrasing like "make a broker comparison table", "compare AKD, MCB, and Topline", "add a brokers table to choose-a-broker.md", "build a sahulat-broker comparison", "make a Sahulat-vs-traditional table", or "what should the broker comparison look like?". Use it even when the user does not explicitly say the word "skill". Every per-broker numeric or specific cell must be a clearly-labeled TODO — never invent broker fees, commission rates, or feature claims.
---

# psx-broker-comparison

A skill for producing broker comparison tables on the PSX docs site that all share the same column structure, so a reader who learned how to read one table can read any other on the site without recalibrating. The actual per-broker data lives in TODOs that the user fills in from primary sources (the broker's own published rate sheet, the PSX broker directory, or PSX's own data).

## When to use this skill

Trigger when the user asks for a comparison of brokers or a broker-comparison table. Examples:

- "Make a broker comparison table"
- "Compare AKD, MCB Arif Habib, and Topline"
- "Add a brokers table to `docs/04-getting-started-with-psx/choosing-a-broker.md`"
- "Build a Sahulat-broker comparison"
- "Make a Sahulat-vs-traditional table"
- "What should the broker comparison look like?"

Do **not** trigger this skill for:
- General prose explaining what a broker is (use `psx-doc-writer`)
- A glossary entry for "broker" (use `psx-glossary-entry`)
- Reviewing an existing broker page (use `psx-content-reviewer`)

## Canonical column set

Every broker comparison on this site uses the **same columns, in the same order**. This is non-negotiable — consistency is the entire point of the skill. Add columns only when the user explicitly asks for them.

| Column | What goes in it |
|---|---|
| **Broker** | The broker's commercial name, no qualifiers ("AKD Securities", "Topline Securities", "MCB Arif Habib"). Add a footnote marker for special cases (e.g., Sahulat). |
| **Type** | "Traditional" or "Sahulat" — Sahulat brokers have a regulator-imposed simplified-account model with capped fees. |
| **Account opening fee** | Initial cost in PKR. Always TODO. |
| **Brokerage commission** | Per-trade rate (typically a % of trade value with a minimum). Always TODO. Include filer/non-filer note if rates differ. |
| **Minimum balance** | Required initial deposit. Always TODO. |
| **Trading platform** | Desktop/web platform name (e.g., NEXT, KTrade, etc.). |
| **Mobile app** | App name + a note on iOS/Android availability. |
| **Customer service** | Channels (phone / chat / branch / WhatsApp), hours, and a one-phrase reputation note marked TODO. |
| **Notable features** | 1-3 short bullets distinguishing this broker (e.g., research reports, robo-advisor, IPO access, Shariah-only). |

## Output template

Use this exact Markdown table shape, padded to look readable in plaintext:

```markdown
| Broker | Type | Account opening fee | Brokerage commission | Minimum balance | Trading platform | Mobile app | Customer service | Notable features |
|---|---|---|---|---|---|---|---|---|
| <Broker A> | <Traditional / Sahulat> | <TODO: opening fee in PKR> | <TODO: commission rate; note filer/non-filer if applicable> | <TODO: minimum balance in PKR> | <Platform name> | <App name + iOS/Android> | <TODO: channels and hours> | • <feature 1><br/>• <feature 2> |
| <Broker B> | … | … | … | … | … | … | … | … |
```

Below the table, always include this footer:

```markdown
> **All numeric values above are placeholders.** Verify each broker's
> account-opening fee, commission rate, and minimum balance against the
> broker's own published rate sheet or the PSX broker directory before
> publishing — fees change without notice. Filer and non-filer rates
> often differ; ask the broker explicitly which rate applies to you.
```

If the page is going under `docs/04-getting-started-with-psx/` (which it usually is), end the section with a `<Disclaimer />` component on a line of its own.

## What to do step by step

1. **Identify which brokers** to include. The user usually names them; if they say "the major Pakistani brokers" or similar, pick 4-6 well-known names (AKD Securities, Topline Securities, MCB Arif Habib, Arif Habib Limited, BMA Capital, JS Global, Foundation Securities, IGI Securities) — but **mark the broker list itself as TODO** because some of these change names, merge, or stop offering retail accounts.
2. **Resolve type** for each (Traditional vs. Sahulat). When uncertain, mark as TODO.
3. **Build the table** using the canonical column order. Keep the platform/mobile-app names in plaintext (not links) unless the user asks for links — broker websites are flaky.
4. **Mark every fee, commission, and balance as TODO** with a description of what to verify.
5. **Add the footer** quoting the verification reminder.
6. **Append `<Disclaimer />`** if this is part of a docs page (almost always).
7. **Report** which brokers you included, which fields are TODOs, and where the table was placed.

## Worked example

Input: "make a broker comparison table for the choose-a-broker page with AKD, Topline, MCB Arif Habib"

Output:

```markdown
## At-a-glance comparison

| Broker | Type | Account opening fee | Brokerage commission | Minimum balance | Trading platform | Mobile app | Customer service | Notable features |
|---|---|---|---|---|---|---|---|---|
| AKD Securities | Traditional | <TODO: AKD opening fee> | <TODO: AKD commission rate; check filer / non-filer differential> | <TODO: AKD minimum balance> | AKD Trade | AKD Trade (iOS, Android) | <TODO: channels + hours> | • Long-running research desk<br/>• Online account opening |
| Topline Securities | Traditional | <TODO: Topline opening fee> | <TODO: Topline commission rate; check filer / non-filer differential> | <TODO: Topline minimum balance> | NEXT | Topline NEXT (iOS, Android) | <TODO: channels + hours> | • Strong research coverage<br/>• English + Urdu interface |
| MCB Arif Habib (MCB-AH) | Traditional | <TODO: MCB-AH opening fee> | <TODO: MCB-AH commission rate; check filer / non-filer differential> | <TODO: MCB-AH minimum balance> | KTrade | KTrade (iOS, Android) | <TODO: channels + hours> | • Backed by MCB Bank<br/>• Branch-network reach |

> **All numeric values above are placeholders.** Verify each broker's
> account-opening fee, commission rate, and minimum balance against the
> broker's own published rate sheet or the PSX broker directory before
> publishing — fees change without notice. Filer and non-filer rates
> often differ; ask the broker explicitly which rate applies to you.

<Disclaimer />
```

## Sahulat-account note

The PSX/SECP **Sahulat Account** is a regulator-defined retail-friendly product that's worth its own short paragraph above any comparison that includes Sahulat brokers — it's not a separate broker, it's a *type of account* offered by participating brokers, and readers conflate the two.

If the user asks for "Sahulat broker comparison", produce two tables:
1. A **Sahulat-only** table listing brokers that offer Sahulat accounts.
2. A short paragraph above it explaining what a Sahulat account is and why a beginner might prefer one (lower minimums, simpler KYC, capped fees) — mark the *current* fee cap and minimum as TODO.

## What never to do

- Never invent or estimate a fee, commission, or minimum balance. All such cells are TODOs.
- Never claim a broker has "the best" anything. The table presents data; the reader chooses.
- Never include a broker without verifying it still exists and offers retail PSX accounts. If unsure, mark the broker name itself as TODO.
- Never deviate from the canonical column order without explicit user instruction. Sites that change column orders between tables are unusable.
- Never link to broker websites in the table cells — they go stale, change domains, and break the build (`onBrokenLinks: 'throw'`). If you must link, link only to the broker's PSX directory listing or the PSX broker page (and verify it exists first).
- Never make the table so wide it breaks Docusaurus's content column. The 9-column canonical layout already pushes the limits — adding more without explicit user instruction is a no.
