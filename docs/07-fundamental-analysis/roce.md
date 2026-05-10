---
id: "roce"
title: "Return on Capital Employed (ROCE)"
sidebar_position: 17
description: "Operating return on the full capital base (equity plus debt) — a cleaner efficiency signal than ROE because it removes the effects of leverage."
---

# Return on Capital Employed (ROCE)

The previous page on [Return on Equity](/docs/fundamental-analysis/roe) flagged a problem: ROE can be inflated by leverage. A company that takes on lots of debt can post higher ROE than a similar company with conservative financing, even if the underlying business is no more efficient. **Return on Capital Employed (ROCE)** is the answer to that problem. By measuring operating return on the full capital base (equity plus debt), ROCE strips out the leverage distortion and gives a cleaner read on how well management is using *all* the money entrusted to them.

## What you'll learn

- The ROCE formula and a Pakistani worked example
- Why ROCE uses EBIT instead of PAT
- The three common ways to compute capital employed
- Why ROCE is a better cross-company comparison than ROE
- Industry context and rule-of-thumb ranges

## The formula

```
ROCE = EBIT / Capital employed
```

Where:

- **EBIT** is Earnings Before Interest and Taxes, also called operating profit.
- **Capital employed** is the total long-term capital deployed in the business: equity plus long-term debt (with variations covered below).

A worked example. A Pakistani business needs PKR 1 crore of capital to operate.

- The owners contributed PKR 40 lakh.
- The company borrowed PKR 60 lakh.
- Total capital employed: PKR 1 crore.

The income statement shows:

- Revenue: PKR 1 crore.
- After cost of sales and operating expenses: EBIT of PKR 28 lakh.

```
ROCE = 28,00,000 / 1,00,00,000 = 0.28 = 28%
```

The interpretation: the business is generating 28 percent operating return on every rupee of total capital deployed, regardless of whether that capital came from owners or lenders.

## Why EBIT and not PAT

This is the cleverest part of ROCE.

**EBIT excludes interest expense and tax**.

Why exclude interest? Because interest expense is a function of how the company is financed. Two identical operating businesses can have very different interest costs depending on how much debt they carry. If you used PAT (which is after interest), the more leveraged business would look worse on a return-on-total-capital basis even though its operating performance is the same. Using EBIT cancels out that distortion.

Why exclude tax? Because tax expense reflects jurisdiction, timing differences, and one-off items that have nothing to do with operating efficiency. EBIT is the cleanest measure of how well the operating business itself is performing.

The walk down the income statement:

```
Revenue
- Cost of sales
= Gross profit
- Operating expenses
= EBIT (used in ROCE)
- Interest
= Profit Before Tax (PBT)
- Tax
= Profit After Tax (PAT, used in ROE)
```

ROCE catches the company at the EBIT line. ROE catches it after both interest and tax. The business itself looks the same; the difference is what is in the denominator and what financing-related items have been deducted.

## Three ways to compute capital employed

There is no single accepted formula for capital employed. The three common approaches.

### Method 1: Equity plus long-term liabilities

```
Capital employed = Total equity + Total non-current liabilities
```

Includes everything outside current liabilities. Wider than just debt; captures deferred tax, provisions, employee benefits, etc.

### Method 2: Equity plus long-term loans

```
Capital employed = Total equity + Long-term loans
```

Strict version. Only the explicitly interest-bearing long-term debt is added to equity.

### Method 3: Equity plus all loans (short-term plus long-term)

```
Capital employed = Total equity + Long-term loans + Short-term borrowings
```

Captures all interest-bearing capital, including working-capital lines that the business runs on year-round. Many practitioners (including the source notes for this site) prefer this method because it captures the *real* money the business is actually using.

For the same Pakistani company, the three methods can give different ROCE values:

- Method 1: ROCE = 22% (broader denominator)
- Method 2: ROCE = 30% (narrower denominator)
- Method 3: ROCE = 28% (medium denominator)

**Pick one method and stick with it.** Comparing ROCE values computed with different methods gives misleading conclusions. If you are comparing a Pakistani textile company computed Method 3 to a Pakistani fertiliser company computed Method 1, the comparison is broken from the start.

The source notes for this site recommend **Method 3** because it best captures the real working capital the business uses, and that is the convention this guide follows.

## ROCE vs ROE: when each matters

Both metrics measure efficiency, but they capture different things.

| Aspect | ROE | ROCE |
|---|---|---|
| Numerator | PAT (after interest and tax) | EBIT (before interest and tax) |
| Denominator | Equity only | Equity + debt |
| Effect of leverage | Inflates ROE | Neutralised |
| Best for | Comparing within similar capital structures | Comparing across capital structures |
| Best read | Time series of one company | Cross-company comparison |
| Buffett's favourite | Yes | But ROCE is closer to true business efficiency |

**Use ROE** when comparing a company to its own history (where capital structure is roughly constant) or to peers with similar leverage.

**Use ROCE** when comparing companies with different leverage levels, or when you specifically want to measure operating-business efficiency without financing noise.

For a complete view, look at both.

## Why ROCE matters: a worked comparison

Two companies in the same industry with identical PAT and identical revenue.

| | Company A | Company B |
|---|---|---|
| Revenue | PKR 1 crore | PKR 1 crore |
| EBIT | PKR 35 lakh | PKR 35 lakh |
| Interest expense | 0 (no debt) | PKR 5 lakh |
| PAT | PKR 28 lakh | PKR 24 lakh |
| Equity | PKR 60 lakh | PKR 50 lakh |
| Long-term loans | 0 | PKR 10 lakh |
| Capital employed | PKR 60 lakh | PKR 60 lakh |
| ROE | 47% | 48% |
| ROCE | 58% | 58% |

ROE shows them as roughly equal (with B slightly higher because of its smaller equity base). ROCE shows them as identical, which is the truer picture: the underlying operating businesses are equally efficient. Company B just happens to use some debt, which inflates ROE without changing operating reality.

This is the value of ROCE: it sees through the financing structure to the operating engine.

## Industry context

Approximate ROCE ranges by Pakistani sector. Like all ratios, these shift with cycle and conditions.

| Sector | Typical ROCE range |
|---|---|
| Consumer goods (FMCG) | 30 to 70% |
| Pharmaceutical | 20 to 35% |
| Cement (peak) | 20 to 40% |
| Fertiliser | 20 to 40% |
| Power generation | 12 to 20% |
| Banks (different metrics generally used) | n/a |
| Textiles | 8 to 18% |
| Heavy engineering | 12 to 25% |

A company posting 30 percent ROCE consistently is generating excellent operating returns. One posting under 10 percent is running an operating business that may not even cover its cost of capital.

## A management-quality signal

A bonus interpretation. ROCE is not just a number; it is a hint about management quality.

A company with consistently high ROCE has management that:

- Allocates capital to projects with strong operating returns.
- Avoids low-return capex even when growth is available.
- Runs working capital efficiently.
- Picks businesses where operating economics are favourable.

A company with consistently low ROCE has management that does not seem to grasp these things. The page on [Qualitative Analysis](/docs/fundamental-analysis/qualitative-analysis) covers how to evaluate management directly. ROCE is one of the better quantitative shortcuts.

<Callout type="tip" title="Track ROCE over a full cycle">
  Pakistani cyclical sectors (cement, steel, fertiliser, automobiles)
  have ROCE that can swing from 5 percent to 40 percent across a
  cycle. To judge whether a company is genuinely efficient, look at
  average ROCE over a full cycle (5 to 7 years), not just at one
  year. Companies with high mid-cycle ROCE compound very well.
</Callout>

## Key takeaways

- ROCE = EBIT divided by capital employed (equity plus debt).
- Excluding interest and tax in the numerator strips out financing and tax distortions.
- Three common methods to compute capital employed; pick one and stick with it. Method 3 (equity plus all loans) is the convention this guide uses.
- ROCE is a cleaner cross-company comparison than ROE because it neutralises leverage effects.
- Use both ROE and ROCE for a complete picture.
- High and stable ROCE is a strong management-quality signal.

## Sources used on this page

- Source notes from `/resources/notes/youtube-T1Q61e_K0xk.en.md` (Episode 26: Return on Capital Employed). Formula, three methods of computing capital employed, EBIT explanation, management-quality framing.
- Source notes from `/resources/notes/Introduction to Fundamental Analysis.md` (Profitability Ratios). Definitional structure.

<Disclaimer />
