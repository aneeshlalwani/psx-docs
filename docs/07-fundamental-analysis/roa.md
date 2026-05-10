---
id: "roa"
title: "Return on Assets (ROA)"
sidebar_position: 18
description: "How efficiently a company turns its total assets into profit — Buffett's other favourite efficiency ratio, with a useful caveat about expansion years."
---

# Return on Assets (ROA)

Warren Buffett once said: "A good business is one that earns a high rate of return on assets, and a *very* good business is one that does that *and* grows." **Return on Assets (ROA)** is exactly the metric he was talking about. Where [ROE](/docs/fundamental-analysis/roe) measures return on equity and [ROCE](/docs/fundamental-analysis/roce) measures return on capital employed, ROA measures return on the company's full asset base, regardless of how those assets are financed.

## What you'll learn

- The ROA formula and a Pakistani worked example
- What ROA tells you that ROE and ROCE do not
- The expansion-year caveat
- Industry context for typical ROA ranges
- How to interpret ROA alongside ROE and ROCE

## The formula

```
ROA = PAT / Total assets
```

Sometimes computed using net income (PAT). Sometimes using EBIT for a more operating-focused view. The simpler PAT version is more common.

A worked example. Two Pakistani textile companies, AB and DC, both with PKR 5 crore in total assets.

- **Company AB**: PAT of PKR 1 crore.
- **Company DC**: PAT of PKR 70 lakh.

```
ROA(AB) = 1 / 5 = 20%
ROA(DC) = 0.70 / 5 = 14%
```

Both companies have the same asset base, but AB extracts more profit from those assets. AB is using its resources more efficiently.

## What ROA captures

ROA tells you how much profit the company generates on each rupee of total assets. It is conceptually similar to ROCE but uses **total assets** in the denominator rather than capital employed.

- **Total assets** includes everything on the asset side of the balance sheet: PP&E, intangibles, inventory, receivables, cash, and so on.
- **Capital employed** typically excludes some non-interest-bearing items.

For most retail-oriented analyses, ROA is more straightforward to compute (just look at PAT and total assets) and roughly comparable to ROCE in interpretation.

### How it differs from ROE and ROCE

| | ROE | ROCE | ROA |
|---|---|---|---|
| Numerator | PAT | EBIT | PAT (or EBIT) |
| Denominator | Equity | Equity + debt | Total assets |
| Effect of leverage | Inflates | Neutralises | Reduces (because total assets is the largest denominator) |

A company funded entirely by equity will have ROE = ROA. As debt rises, ROE rises above ROA. The gap between ROE and ROA is essentially a leverage signature.

## A practical Pakistani comparison

Three Pakistani companies in the same industry, same size, same EBIT.

| | Co A | Co B | Co C |
|---|---|---|---|
| Total assets | PKR 100 crore | PKR 100 crore | PKR 100 crore |
| Total debt | 0 | PKR 30 crore | PKR 60 crore |
| Total equity | PKR 100 crore | PKR 70 crore | PKR 40 crore |
| EBIT | PKR 15 crore | PKR 15 crore | PKR 15 crore |
| Interest | 0 | PKR 3 crore | PKR 6 crore |
| PAT (assume 25% tax on PBT) | PKR 11.25 crore | PKR 9 crore | PKR 6.75 crore |
| ROA (PAT-based) | 11.25% | 9% | 6.75% |
| ROE | 11.25% | 12.86% | 16.88% |

Notice how:

- **ROA falls** as debt rises. This is because PAT is reduced by interest expense, while total assets stay the same.
- **ROE rises** as debt rises. Equity shrinks faster than PAT does.

Company C has the highest ROE but the lowest ROA. Company A has the lowest ROE but the highest ROA. Buffett would point to Company A as the most efficient operating business, since it generates the most profit per rupee of total assets. Company C looks impressive on ROE only because of leverage.

This kind of comparison is exactly why ROA is a useful complement to ROE.

## The expansion-year caveat

A real-world wrinkle. If a Pakistani company's ROA suddenly drops sharply, do not panic immediately. Investigate why first.

A common pattern: a fast-growing company has just made a major acquisition or built a large new factory. Its assets jumped from PKR 5 crore to PKR 35 crore (a 7x increase). Profit from the new assets has not yet caught up. ROA for this year drops.

This is not bad. It is actually a positive signal: the company is investing in growth. The new assets will produce profit over the next few years, and ROA will return to normal levels (or higher) once they are fully productive.

The flag is when ROA drops without a corresponding investment story, or when it stays low for many years after a build-out. That suggests the company invested in unproductive assets.

When you see an ROA drop:

1. **Read the directors' report** for any major investments.
2. **Look at PP&E** in the balance sheet. Did total PP&E jump?
3. **Look at the cash flow statement's investing activities**. Major capex outflow?
4. **Check capacity utilisation** in the directors' report. Is the new capacity actually being used?

If the answer is yes to investment in productive capacity, treat the ROA dip as temporary. If not, treat it as a problem.

## Industry context

Approximate ROA ranges by Pakistani sector. ROA is much more sensitive to industry capital intensity than ROE.

| Sector | Typical ROA range |
|---|---|
| Consumer goods (FMCG) | 15 to 30% |
| Pharmaceutical | 8 to 15% |
| Banks | 0.8 to 1.5% (different reference standards) |
| Cement | 4 to 12% |
| Fertiliser | 8 to 18% |
| Power generation | 4 to 8% |
| Textiles | 3 to 8% |
| Heavy industry | 5 to 12% |

The big ranges across sectors reflect capital intensity. Asset-heavy industries (banks, power, cement) have low ROA. Asset-light industries (consumer goods, services) have high ROA. Both can be excellent businesses if compared appropriately.

## Reading ROE, ROCE, and ROA together

A combined framework.

| Pattern | Likely interpretation |
|---|---|
| High ROA + High ROCE + High ROE | Genuinely excellent business with strong operating efficiency |
| Low ROA + Low ROCE + High ROE | Business returns are low; ROE is propped up by leverage. Risky |
| High ROA + Low ROE | Conservatively financed; lots of equity cushion. Stable but maybe sub-optimal capital structure |
| Low ROA + Low ROCE + Low ROE | Underperforming business. Avoid |
| Falling ROA, stable ROE | Likely an expansion year. Investigate further |

The richest analysis comes from looking at all three together over time. A company that is consistently strong on all three across a full cycle is the kind of compounder that deserves further fundamental work.

<Callout type="tip" title="ROA matters more for asset-heavy industries">
  For Pakistani consumer-goods or service businesses, ROA is high
  almost by definition because assets are light. The metric is more
  discriminating in asset-heavy sectors like cement, power, textiles,
  and banks. Use it to find the most-efficient asset deployers in
  capital-intensive industries.
</Callout>

## Key takeaways

- ROA = PAT divided by total assets. Tells you how efficiently the company uses its assets to generate profit.
- ROA falls as leverage rises (because interest expense reduces PAT) while ROE rises as leverage rises.
- The gap between ROE and ROA reflects the company's leverage.
- A sudden ROA drop after major investment is usually temporary; investigate before declaring it a problem.
- Compare against industry peers; capital-intensive sectors have low ROA, capital-light sectors high.
- Read ROA alongside ROE and ROCE for a complete efficiency picture.

## Sources used on this page

- Source notes from `/resources/notes/youtube-T1Q61e_K0xk.en.md` (Episode 27: ROA). Buffett quote, two-textile-companies example, expansion-year caveat.
- Source notes from `/resources/notes/Introduction to Fundamental Analysis.md` (Profitability Ratios). Definitional structure.

<Disclaimer />
