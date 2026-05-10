---
id: "capital-gains-tax"
title: "Capital Gains Tax"
sidebar_position: 2
description: "How capital gains tax (CGT) on PSX trades works in Pakistan: holding-period brackets, filer vs non-filer rates, NCCPL deduction at source, and loss carry-forward."
---

# Capital Gains Tax

When you sell a PSX-listed share for more than you paid for it, the profit is a **capital gain**, and it is taxable. The mechanics of how that tax is computed and collected are stable; the specific percentages move with each Federal Budget. This page covers the structure so you know how the system works, with TODO markers everywhere a current rate would otherwise sit.

## What you'll learn

- What CGT taxes (and what it does not)
- How holding period affects the rate
- The filer vs non-filer differential
- How NCCPL deducts CGT at source for PSX trades
- Loss carry-forward
- A worked example

## What CGT taxes

CGT is a tax on **profit**, not on the trade itself. If you buy a share at PKR 200 and sell it at PKR 250, the PKR 50 per-share profit is what is taxable. If you sell at PKR 200 (no profit) or at PKR 180 (a loss), there is no capital gain to tax.

This is fundamentally different from a stamp duty or transaction tax, which would apply regardless of profit. CGT applies only when there is a realised gain.

### Realised vs unrealised

A subtle but important distinction. CGT applies only when you **realise** a gain by actually selling. If your shares appreciate in value but you keep holding them, there is no taxable event yet.

This creates a real benefit: you can let positions run for years without tax drag, and CGT only kicks in when you decide to take profits.

## Holding-period brackets

Pakistani CGT rates often depend on **how long you held the share** before selling. The general structure (with specific bracket cutoffs and rates that change every Finance Act):

- **Short holding** (recently bought, sold quickly): typically taxed at the highest rate.
- **Medium holding**: taxed at an intermediate rate.
- **Long holding**: taxed at the lowest rate, sometimes zero in historical Pakistani policy.

The current bracket structure and rates are **`<TODO: verify holding-period brackets (e.g. ≤12 months, 12-24 months, over 24 months) and the rate at each, check the latest Finance Act>`**.

The economic intent of holding-period brackets is to encourage long-term investment by making short-term trading more expensive on tax. This is broadly consistent across most countries' CGT regimes.

## Filer vs non-filer

As covered on the page on [Filer vs Non-Filer](/docs/taxes-and-zakat/filer-vs-non-filer), Pakistan applies higher withholding tax to people not on the FBR's Active Taxpayer List. CGT is no exception.

- **Filer rate**: **`<TODO: verify current CGT rate for filers, check the latest Finance Act or FBR notification>`%**.
- **Non-filer rate**: **`<TODO: verify current CGT rate for non-filers, typically materially higher>`%**.

The differential is usually meaningful enough that the filer-status arithmetic on the [Filer vs Non-Filer](/docs/taxes-and-zakat/filer-vs-non-filer) page applies here too.

## How NCCPL collects CGT

For PSX trades, you do not write a separate cheque to FBR for capital gains. The **National Clearing Company of Pakistan (NCCPL)** computes and deducts CGT at source.

The mechanics:

1. You sell shares through your broker.
2. NCCPL, which clears all PSX trades, computes the capital gain on the trade based on your cost basis and the sale price.
3. NCCPL deducts the applicable CGT rate from the sale proceeds before they reach your broker account.
4. The remainder lands in your trading account as net proceeds.
5. NCCPL forwards the deducted tax to FBR on your behalf.

You receive a quarterly or annual CGT statement from NCCPL or your broker showing the gross gains, the tax deducted, and the net. This statement is what you reference when filing your annual income-tax return.

The NCCPL collection mechanism is described in detail on the [NCCPL CGT page](https://www.nccpl.com.pk/cgt) and in their published rate cards.

## Loss carry-forward

Realised losses can offset future gains within a defined window. If you sell a share at a loss in one year, the loss can be carried forward and used to reduce taxable gains in subsequent years.

The current carry-forward window is **`<TODO: verify the loss carry-forward window, typically a few years, check the latest Finance Act>`**.

This matters more than it sounds. Active investors who occasionally take losses on bad picks can use those losses to offset gains on winners over time, materially reducing the effective tax rate on their portfolio.

NCCPL tracks losses and gains across the year for each investor, so the offsetting often happens automatically within a tax year. Carry-forward across years requires the loss to be reflected on your tax return.

## A worked example

Suppose you bought 1,000 shares of XYZ Ltd at PKR 200 per share and sold them 8 months later at PKR 240 per share.

```
Gross profit per share = 240 - 200 = PKR 40
Total gross profit = 40 × 1,000 = PKR 40,000
```

If the current CGT rate for an 8-month hold is **`<TODO: verify rate>`%** and you are a filer, NCCPL would deduct **PKR `<TODO: rate × 40,000>`** from the sale proceeds at the time of sale. The remainder lands in your trading account.

If you were a non-filer, the rate would be **`<TODO: verify non-filer rate>`%**, deducting **PKR `<TODO: non-filer rate × 40,000>`** instead.

If you had previously realised a loss of, say, PKR 15,000 in the same tax year, that loss could offset some of this gain, reducing the net taxable amount to PKR 25,000 and the tax accordingly.

## Adjacent tax-related items

A quick note on items that sometimes get confused with CGT.

- **CGT applies to the capital gain on the trade**. The page you are reading.
- **Dividend withholding tax** applies to dividends received from holding shares. Different mechanism, different rate. Covered on the [Dividend Tax page](/docs/taxes-and-zakat/dividend-tax).
- **Brokerage commission** is what the broker charges per trade. Not a tax; it is the broker's fee. Covered on the [Choosing a Broker page](/docs/getting-started-with-psx/choosing-a-broker).
- **CDC charges** are custody fees passed through from the Central Depository Company. Covered on the [CDC Account page](/docs/getting-started-with-psx/cdc-account).
- **Federal Excise Duty (FED)** historically applied on broker commissions in some periods. Mark as **`<TODO: verify whether FED currently applies to broker commissions on PSX trades>`**.

## Practical action list

For a Pakistani retail investor:

1. **Track your cost basis** for every position. NCCPL and your broker do this automatically, but keep your own records as backup.
2. **Save quarterly and annual CGT statements** from NCCPL or your broker.
3. **File your annual income-tax return** to maintain filer status; the lower CGT rate compounds with the lower dividend rate to make a clear case for filing.
4. **Time your sales carefully** if a holding-period bracket is near. Crossing into a longer-hold bracket can save meaningfully on tax.
5. **Use loss carry-forward** if you took losses; report them on your annual return.

<Callout type="warning" title="Verify before you act">
  Pakistani tax rates and rules change with each Federal Budget. The
  numbers above are illustrative; the specific bracket cutoffs,
  rates, and carry-forward windows shift year to year. Check the
  latest Finance Act, FBR notifications, or a Pakistani tax
  practitioner for current values.

  Zakat rulings differ between schools of thought. The treatment shown
  on related zakat pages reflects mainstream practice in Pakistan, but
  for your specific situation, consult a qualified scholar or a
  recognised Shariah board.
</Callout>

<Disclaimer />
