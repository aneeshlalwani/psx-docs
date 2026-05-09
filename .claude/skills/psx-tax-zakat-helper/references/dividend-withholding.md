# Dividend withholding tax

Substantive scaffolding for any section, paragraph, or full page about Pakistani withholding tax on PSX dividends.

## What to explain

- Dividends are taxed **at source** before they hit the investor's account.
- The bank or broker subtracts the tax automatically; the investor does not write a separate cheque to FBR for it.
- The rate differs for **filer vs. non-filer**. Non-filers pay materially more — this is the strongest practical argument for becoming a filer for retail investors.
- Some dividends (e.g., from companies in specific sectors, or from REITs / mutual funds) historically have different rates. Mark sector-specific differentials as TODOs.
- Whether the dividend is treated as **"final tax"** (settled at source, no further reconciliation on the annual return) or whether it interacts with the annual return depends on the latest rules — flag as TODO.

## Worked-example skeleton

```mdx
You own 500 shares of XYZ Ltd. The company declares a cash dividend of
PKR 6 per share. Gross dividend: 500 × 6 = PKR 3,000.

If the current dividend withholding rate for filers is **<TODO: verify
filer rate>%**, the broker deducts PKR <TODO> and credits the rest
to your account.

If you are a non-filer, the rate is **<TODO: verify non-filer rate>%**
— meaningfully higher than the filer rate. This is one of the
strongest arguments for becoming a filer.
```

## TODOs to leave for the user

- `<TODO: verify current filer dividend withholding rate>`
- `<TODO: verify current non-filer dividend withholding rate>`
- `<TODO: verify whether dividend tax is "final tax" for retail investors in the current rules>`
- `<TODO: verify any sector-specific differentials (e.g., IPP, REIT, mutual fund) the topic touches>`

## Adjacent topics to cross-link

- The dividends page itself — see `/docs/06-corporate-actions/dividends`. The corporate-actions page covers what a dividend is; the tax page covers what's deducted. Don't duplicate; link.
- Filer/non-filer mechanics — see [filer-non-filer.md](filer-non-filer.md).
