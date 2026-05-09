# Capital gains tax (CGT)

Substantive scaffolding for any section, paragraph, or full page about Pakistani CGT on PSX trades.

## What to explain

- CGT is a tax on **profit**, not on the trade itself. If you sell at a loss, you do not owe CGT.
- The rate often depends on the **holding period**. Short holds (e.g., recently bought, sold quickly) are typically taxed higher than long holds. The exact thresholds and rates change with each Finance Act.
- For PSX trades, CGT is typically deducted by **NCCPL** at the time of sale, at source — the user does not write a separate cheque to FBR for it.
- **Filer vs. non-filer matters.** Non-filers pay a higher rate in most cases.
- **Loss carry-forward.** Realised losses can sometimes offset future gains within a defined window. Mark the carry-forward window as TODO.

## Worked-example skeleton

Fill in numbers as TODOs:

```mdx
Suppose you bought 1,000 shares of XYZ at PKR 200 per share and sold
them 8 months later at PKR 240 per share. Your gross profit is:

(240 − 200) × 1,000 = PKR 40,000

If the current CGT rate for an 8-month hold is **<TODO: verify rate>%**
and you are a filer, NCCPL would deduct **PKR <TODO: rate × 40,000>**
at the time of sale. The remainder lands in your account.
```

## TODOs to leave for the user

Every CGT section should leave at minimum these placeholders:

- `<TODO: verify current CGT rate for filers — check the latest Finance Act or FBR notification>`
- `<TODO: verify current CGT rate for non-filers>`
- `<TODO: verify holding-period brackets (e.g. ≤12 months, 12-24 months, >24 months) and the rate at each>`
- `<TODO: verify loss carry-forward window>`

## Adjacent topics to cross-link

- The filer/non-filer concept itself — see [filer-non-filer.md](filer-non-filer.md) so the user understands why the rate differs before they encounter the CGT rate.
- Dividend withholding — see [dividend-withholding.md](dividend-withholding.md). Often readers conflate "tax on the trade" with "tax on the dividend"; clarify.
