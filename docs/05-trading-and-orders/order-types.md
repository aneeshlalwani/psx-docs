---
id: "order-types"
title: "Order Types"
sidebar_position: 1
description: "Market, limit, stop, and other order types available on PSX."
---

# Order Types

When you place a buy or sell order on PSX, you are not just telling your broker "I want to trade this stock". You are giving precise instructions about **what price** you are willing to accept, **when** the order should be active, and **what should happen** if the market moves against you. The right order type for a given trade depends on what you care about more: certainty of execution, certainty of price, or protection against a sudden move. This page covers the order types Pakistani retail investors will encounter on most broker platforms.

## What you'll learn

- The two basic order types: market and limit
- Stop orders for risk management
- Order validity options (day vs good-till-cancelled)
- A practical decision framework for which order to use when
- Common order-placement mistakes

## The two basic order types

Almost every retail trade is placed using one of these two.

### Market order

A **market order** says: "buy or sell at the best price currently available". The order goes to PSX's KATS engine and matches against the best opposite-side order in the book at that instant.

- **Pros:** virtually guaranteed to execute, usually within seconds.
- **Cons:** the actual fill price can be slightly different from the last quoted price, especially in thin markets or volatile moments. This is called **slippage**.
- **Best for:** large, liquid PSX stocks (KSE-100 constituents) during normal trading hours, when you want certainty of execution and the price difference of a paisa or two does not matter.

### Limit order

A **limit order** says: "buy at this price or lower" (for a buy), or "sell at this price or higher" (for a sell). The order sits in the order book until either a matching opposite-side order arrives, or the order expires, or you cancel it.

- **Pros:** you control the price exactly. No slippage.
- **Cons:** the order may not fill at all if the market never reaches your price.
- **Best for:** less liquid stocks where slippage on a market order can be meaningful, situations where you want to enter or exit at a specific price, and any trade large enough that you care about a few rupees of price difference.

A practical example. Say a stock last traded at PKR 200. You want to buy 500 shares.

- **Market order:** the order fills immediately, but at whatever the best ask is right now. Could be PKR 200.50, could be PKR 201, could be PKR 199.50.
- **Limit order at PKR 200:** the order fills only if a seller is willing to accept PKR 200. If the market moves up to PKR 202 and never returns, your order does not fill.
- **Limit order at PKR 201:** the order fills as soon as a seller accepts PKR 201 or less. You give up some price control in exchange for higher fill probability.

## Stop orders for risk management

Stop orders are used to **limit losses** or **lock in gains** without you having to watch the market.

### Stop-loss order

A **stop-loss order** is an instruction to sell automatically if the price falls to a specified level. You set the stop level when you place the order, and the order activates only if the market hits that level.

Example: you bought a share at PKR 200. You want to limit your loss if it falls. You place a stop-loss order at PKR 180. If the price ever reaches PKR 180, your order activates automatically and a sell order is placed.

Two flavours exist:

- **Stop-loss market:** when the stop is triggered, a market order is placed. Execution is virtually guaranteed but the fill price can be below the stop level in a fast-moving market.
- **Stop-loss limit:** when the stop is triggered, a limit order is placed at the stop price (or whatever price you specify). Better price discipline, but the order might not fill at all if the market gaps below your limit.

Whether stop-loss orders are supported on a given Pakistani broker's platform varies. Confirm before relying on them.

### Trailing stop

A **trailing stop** moves with the price. As the share price rises, the stop level rises with it (at a fixed offset). If the price falls back, the stop stays where it was, locking in some of the gain.

Trailing stops are a more advanced product and are not universally available on Pakistani broker platforms.

## Order validity

Independent of the order type, you choose how long the order should stay active.

### Day order

A **day order** is valid only for the current trading day. If it does not fill by market close, it is cancelled automatically. This is the default on most platforms.

### Good-till-cancelled (GTC)

A **good-till-cancelled** order remains active across multiple trading days until either it fills or you cancel it manually. Most Pakistani brokers cap GTC orders at a fixed maximum duration (often 30 days, varying by broker). After that, the order is auto-cancelled and must be re-entered.

GTC is useful for limit orders at prices that the market may not reach for several days but that you are willing to wait for.

## A practical decision framework

For a typical retail trade on PSX, the choice usually narrows to two questions.

1. **How liquid is the stock?**
   - Highly liquid (KSE-100 large cap): market order is fine.
   - Less liquid (small-cap, lightly traded): limit order to avoid slippage.

2. **How much do you care about exact price vs guaranteed execution?**
   - Care more about execution: market order.
   - Care more about price: limit order.

For long-term investors buying a position they intend to hold for years, a few paisa of slippage on a market order is genuinely irrelevant. For short-term traders, it can matter.

## Common order-placement mistakes

Three errors that show up repeatedly.

1. **Wrong direction.** Buying when you meant to sell, or vice versa. Read the order before you confirm.
2. **Wrong quantity.** Typing 5,000 shares when you meant 500. The trading account is ruthless about typos.
3. **Wrong symbol.** PSX has hundreds of tickers and many companies have similar names. The symbol is what matters, not the long name. Verify it.

The strongest practical defence against these is to read the confirmation screen carefully before pressing the final button. Most platforms show a summary screen. Use it.

## Key takeaways

- Two basic order types: **market** (executes immediately at the best price) and **limit** (executes only at your specified price or better).
- Use market orders for liquid stocks where execution certainty matters; use limit orders for price discipline or thin markets.
- Stop-loss orders limit downside without you having to watch; availability varies by broker.
- Day orders expire at market close; GTC orders persist until filled or manually cancelled (subject to broker limits).
- Always read the confirmation screen before submitting. Wrong direction, wrong quantity, and wrong symbol are the three common, expensive mistakes.

<Disclaimer />
