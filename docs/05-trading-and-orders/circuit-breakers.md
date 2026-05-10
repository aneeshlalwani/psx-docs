---
id: "circuit-breakers"
title: "Circuit Breakers and Lower Lock"
sidebar_position: 4
description: "How PSX uses stock-level and market-wide circuit breakers to halt extreme price moves."
---

# Circuit Breakers and Lower Lock

If you have ever logged in to your broker app on a panicked day and noticed that a stock you wanted to sell would not let you submit an order, or that the entire market suddenly stopped trading for 45 minutes, you have run into a **circuit breaker**. Circuit breakers are automatic safeguards that PSX uses to prevent extreme price moves from spiralling into full-blown panic. Understanding how they work makes the difference between confusion and clarity on volatile days.

## What you'll learn

- The role circuit breakers play in market stability
- The stock-level daily price limit (the "upper lock" and "lower lock")
- The market-wide halt rule based on the KSE-30 Index
- The exception that excludes the last hour from the market-wide halt
- What you can and cannot do when a circuit breaker triggers
- A practical mental framing for circuit-breaker days

## Why circuit breakers exist

Markets are emotional. Bad news, panic selling, manipulation attempts, and feedback loops between leveraged positions can all push prices well beyond what fundamentals justify, in either direction. Circuit breakers are a regulatory speed bump. They give participants a forced pause to gather information, calm down, and reassess.

The exchange's job is not to prevent prices from moving. It is to prevent disorderly movement that destroys the integrity of price discovery. Circuit breakers are the main mechanism PSX uses to do that.

## Stock-level circuit breakers (daily price limit)

Each individual PSX-listed stock has a **daily price band** that limits how much its price can move in a single trading session.

According to PSX's regulatory framework, the standard limit on most equities is **plus or minus 10 percent of the previous closing price, or PKR 1, whichever is higher**.

In plain language:

- If a stock closed yesterday at PKR 100, today's price cannot exceed PKR 110 ("**upper cap**") or fall below PKR 90 ("**lower cap**").
- If a stock closed yesterday at PKR 5, the rupee floor of PKR 1 is higher than 10 percent of PKR 5, so the daily band is at least PKR 1 in either direction (a wider relative move is permitted on cheap stocks).

When a stock hits the upper limit and stays there with buyers stacked up but no sellers, traders call it an **upper lock** or **upper circuit**. When it hits the lower limit with sellers stacked up but no buyers, it is a **lower lock** or **lower circuit**.

### What "lower lock" feels like in practice

If a stock you own goes lower lock, you may find that:

- Your sell order has been queued but is not filling because there are no buyers at the lower cap or above.
- The bid side of the order book is empty.
- The price is shown as the lower cap with size on the offer but nothing on the bid.

The order will sit in the queue. If a buyer appears at the lower cap, your order can still execute. Otherwise the order continues into the next day, where the daily band resets to plus or minus 10 percent of today's closing price (which is the lower cap, so the band is now lower again). Lower-lock streaks of multiple days do happen on extreme bad news.

### Why the rupee floor exists

The PKR 1 floor matters because percentage moves on cheap stocks are otherwise too small. A 10 percent move on a PKR 2 stock is only 20 paisa, which can be hit by routine intraday trading. Allowing at least a PKR 1 daily band keeps cheap stocks meaningfully tradable.

## Market-wide circuit breakers

Beyond individual stock limits, PSX has a market-wide halt mechanism that pauses the entire market when the **KSE-30 Index** moves sharply.

According to PSX's published regulations, the market-wide halt rule, in summary form, is:

- If the **KSE-30 Index moves by 5 percent or more** from the previous day's closing index level, **and that movement is sustained for at least 5 minutes**, trading in the entire equity market halts.
- The halt lasts **45 minutes**.
- After the halt, the market resumes with a brief pre-open session, and trading continues normally for the rest of the day.

The trigger applies in either direction (up or down 5 percent), although in practice market-wide halts are most often triggered by sharp downward moves driven by macroeconomic or political shocks.

### The exception: not in the last hour

There is one important carve-out. **The market-wide halt rule does not apply during the last hour of trading**. If the KSE-30 moves 5 percent during the last 60 minutes of the regular session, the market continues to operate normally.

The reasoning is that halting the market in the closing hour creates more disruption than it prevents. Settlement, end-of-day price discovery, and corporate-action-cutoff timing all depend on the close happening when scheduled.

## What you can and cannot do during a halt

When a market-wide halt is in effect:

- You cannot place new orders that would execute. The matching engine is paused.
- You can typically still **view your positions**, **view live orders**, and **cancel pending orders** through your broker's platform.
- Sometimes you can **queue new orders** that will be processed when the market reopens, but this depends on the broker's platform.

When an individual stock is locked at its upper or lower cap:

- You can place orders on either side, but only orders at or beyond the cap can match.
- Limit sell orders at the lower cap will execute if a buyer appears at that price. Otherwise they wait.

## A practical framing

Circuit-breaker days are stressful but rarely require immediate action. A few practical points:

- **Do not panic-sell at the lower cap.** Many lower-lock days are driven by short-term sentiment, not by long-term fundamentals. Selling into a forced floor often locks in a worse price than what would have been available a few weeks later.
- **Do not chase upper locks.** Stocks at the upper cap usually open even higher the next day if the news is real, but they also often gap back down within a few days if the move was speculative.
- **Wait for the halt to end before deciding.** A 45-minute pause is long enough to read three news articles and think clearly. Use it.
- **Check the news, not the screen.** A market-wide halt almost always coincides with a specific external event. Understanding the event matters more than watching the order book.

The pages on [Investor Psychology](/docs/investing-101/investor-psychology) and [Bull and Bear Markets](/docs/pakistan-stock-market/bull-and-bear-markets) cover the broader context for thinking through volatile days.

<Callout type="warning" title="Circuit-breaker stops are not a guarantee">
  Circuit breakers slow the speed of bad moves; they do not prevent
  them. A stock that hits a lower lock can hit another lower lock
  the next day, and another the day after that. Treat circuit
  breakers as time to think, not as a floor that protects you from
  losses.
</Callout>

## Key takeaways

- Circuit breakers are automatic price-band safeguards that PSX uses to slow extreme price moves.
- Individual stocks have a daily price band of plus or minus 10 percent (or PKR 1, whichever is higher) of the previous close. Hitting it is called an upper or lower lock.
- A market-wide halt triggers when the KSE-30 Index moves at least 5 percent from the previous close and the move is sustained for 5 minutes. The halt lasts 45 minutes.
- The market-wide halt rule does not apply during the last hour of trading.
- Use halt time to gather information, not to react. Lower locks on a single day rarely require panic action.

## Sources used on this page

- Pakistan Stock Exchange, [Equity Market Operations and Regulations](https://www.psx.com.pk/). Stock-level price band and market-wide halt mechanism.

<Disclaimer />
