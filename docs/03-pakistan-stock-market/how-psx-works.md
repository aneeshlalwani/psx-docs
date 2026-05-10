---
id: "how-psx-works"
title: "How PSX Works"
sidebar_position: 2
description: "The mechanics behind every trade: orders, matching, execution, and settlement on PSX."
---

# How PSX Works

When you press "buy" on your broker's app, a lot happens between that click and the moment the shares appear in your CDC account. Most of it is invisible to retail investors, which is fine when it works and confusing when it does not. This page lifts the lid on the four-step process that runs every PSX trade, so you know what is happening on the other side of the screen.

## What you'll learn

- The four-step lifecycle of a single trade
- How the Karachi Automated Trading System (KATS) matches orders
- The two market sessions and the price-discovery role each one plays
- The T+1 settlement cycle that became the standard on 9 February 2026
- The four organisations whose hand-offs make a trade legally complete

## The four steps of a single trade

Every PSX trade goes through the same four steps:

1. **Order placement.** You submit a buy or sell order to your broker.
2. **Order matching.** The exchange's electronic matching engine finds an opposite order at a compatible price.
3. **Trade execution.** The match becomes a binding trade, prices update for everyone to see, and your account is updated.
4. **Settlement.** Money and shares actually change hands a fixed number of business days later.

Each step has its own machinery and its own organisation behind it. Understanding that machinery helps you make sense of why an order sometimes does not fill, why prices sometimes look stale, and why the shares do not arrive in your CDC account immediately.

## Order placement

When you place an order, you specify three things at minimum: which share, how many, and at what price (or just "at market"). Your broker forwards the order to PSX through their dedicated trading terminal. The order enters the **order book**, a live list of all outstanding buy and sell offers for that share.

Common order types covered in detail in [Order Types](/docs/trading-and-orders/order-types):

- **Market order:** buy or sell at the best currently available price.
- **Limit order:** buy or sell only at a specified price or better.

## Order matching: KATS

PSX runs a single electronic matching engine called the **Karachi Automated Trading System (KATS)**. KATS matches incoming orders against the order book according to two rules:

- **Price priority.** The buyer offering the highest price and the seller asking the lowest price match first.
- **Time priority.** When two orders have the same price, the one entered earlier matches first.

This produces a fair, deterministic outcome. No human at the exchange decides whose order fills first.

Most retail orders are filled in milliseconds. Larger orders can take longer because they need to find enough opposite-side volume at the right price.

## Trading sessions

A normal PSX trading day is divided into segments, including a **pre-open session** for price discovery before continuous trading begins, and a continuous **regular trading session** during the main hours of the day. The page on [Trading Hours](/docs/trading-and-orders/trading-hours) covers the exact times.

The point of having a pre-open session is to let buyers and sellers express their intentions before live trading starts, producing a single opening price that is fairer than chaotic first-second-of-the-day moves.

## Trade execution

The instant KATS matches your order with an opposite order, a binding trade exists. PSX records the match. The price tape ticks. Both you and the counterparty receive electronic confirmation through your respective brokers. Your trading-account balance reflects the trade, although the actual shares and cash do not change hands yet.

The reason for the delay is settlement, the next step.

## Settlement: T+1

PSX runs on a **T+1 settlement cycle** for regular and leverage market equity trades, [in effect since 9 February 2026](https://www.nccpl.com.pk/transition-to-t1-settlement-cycle).

What that means concretely:

- **Trade Date (T):** The day you buy or sell. The trade is matched and recorded.
- **T+1 (one business day later):** Money moves from buyer to seller, shares move from seller's CDC account to buyer's CDC account, and the trade is fully settled.

Before 9 February 2026, the cycle was T+2 (two business days). Older sources, including the contributed video transcripts in this site's source notes, still describe T+2.

If a holiday falls between trade and settlement, the cycle slides accordingly. A Friday trade settles on Monday in a normal week; a holiday on Monday pushes settlement to Tuesday.

## The four organisations behind one trade

Behind a single PSX trade, four organisations have to coordinate.

| Organisation | Role |
|---|---|
| **PSX** | Runs KATS and the order book. Records the trade. Front-line market regulator. |
| **NCCPL** (National Clearing Company of Pakistan Limited) | Handles the money side. Acts as the central counterparty so neither buyer nor seller has to trust the other directly. |
| **CDC** (Central Depository Company) | Holds shares electronically. Records every change of ownership. |
| **SECP** (Securities and Exchange Commission of Pakistan) | Apex regulator overseeing PSX, brokers, listed companies, and the integrity of the market overall. |

Your broker is the intermediary that links you to all four. You never deal with NCCPL or CDC directly; your broker handles the cash flow with NCCPL and the share movement with CDC, on your behalf.

The page on [Market Participants](/docs/pakistan-stock-market/market-participants) covers each of these in more detail, and the [Settlement](/docs/trading-and-orders/settlement) page walks through the day-by-day mechanics with a worked example.

## Key takeaways

- A trade has four steps: order placement, matching, execution, and settlement.
- Orders match in PSX's electronic engine (KATS) by price priority, then time priority.
- Money and shares actually change hands on T+1, one business day after the trade date, since 9 February 2026.
- Four organisations coordinate behind every trade: PSX, NCCPL, CDC, and SECP.
- Your broker is the intermediary linking you to all of them.

## Sources used on this page

- National Clearing Company of Pakistan, [Transition to T+1 Settlement Cycle](https://www.nccpl.com.pk/transition-to-t1-settlement-cycle). T+1 effective date and scope.

<Disclaimer />
