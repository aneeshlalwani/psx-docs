---
id: "settlement"
title: "Settlement"
sidebar_position: 3
description: "How trade settlement works on PSX, the T+1 cycle, and the role of NCCPL."
---

# Settlement

When you press buy on PSX, the trade is matched in milliseconds, but the actual money and shares do not change hands at that exact moment. They move on a fixed schedule called the **settlement cycle**, currently **T+1** for Pakistani equities. The settlement cycle is what makes anonymous large-scale trading possible: it gives the system a defined window to verify the trade, move the cash, move the shares, and confirm everything has cleared. This page walks through what happens in that window and why it matters.

## What you'll learn

- What "settlement" actually means
- The T+1 settlement cycle that became standard on 9 February 2026
- The roles of NCCPL and CDC in every trade
- A worked example of a Monday trade settling on Tuesday
- What can go wrong and how the system handles it

## What "settlement" means

A trade has two halves. There is a **trade** (an agreement to buy and sell at a price) and there is a **settlement** (the actual transfer of cash and shares to fulfil that agreement).

When KATS matches your order with an opposite order, the trade exists. Both you and the counterparty are now legally obligated to follow through. Your trading account immediately reflects the trade. But the cash has not actually moved yet, and the shares are still in the seller's CDC account.

Settlement is the process that closes that gap. On a defined business day after the trade, the cash flows, the shares transfer, and the trade becomes fully complete.

## T+1: the current PSX cycle

The Pakistani equity market transitioned from a **T+2** to a **T+1** settlement cycle on **9 February 2026**, [per NCCPL's official announcement](https://www.nccpl.com.pk/transition-to-t1-settlement-cycle).

In plain language:

- **T (Trade Date):** the day the trade is matched and recorded.
- **T+1:** **one business day later**, the actual settlement happens. Money flows from buyer to seller, shares flow from seller to buyer.

The transition was a coordinated effort across NCCPL, PSX, CDC, and SECP, designed to bring Pakistani settlement timing into line with leading global markets and to reduce the risk associated with carrying open positions for two business days.

## NCCPL: the central counterparty for cash

The **National Clearing Company of Pakistan Limited (NCCPL)** sits between every buyer and every seller as a **central counterparty**. When your trade matches:

- Legally, you no longer face the original seller. You face NCCPL.
- The original seller no longer faces you. They face NCCPL.
- NCCPL guarantees that the buyer will receive the shares and the seller will receive the cash, even if one of the parties subsequently defaults.

This is what makes anonymous large-scale trading possible. You do not need to know who you are buying from; you just need to trust NCCPL.

On the settlement day, NCCPL collects cash from buyers' broker accounts and delivers it to sellers' broker accounts, after netting (so that brokers only need to settle their net obligations rather than every individual trade gross).

## CDC: the central depository for shares

The **Central Depository Company (CDC)** is the corresponding central infrastructure for shares. CDC holds every PSX-listed share electronically and records every change of ownership.

On the settlement day, CDC moves the shares from the seller's account to the buyer's account, mirroring NCCPL's cash movement. By end of T+1, both sides of the trade are complete: cash has moved, shares have moved, ownership has officially changed.

For details on Sub-Account vs Investor Account custody, see [CDC Account](/docs/getting-started-with-psx/cdc-account).

## A worked example

Consider a typical Monday trade on a normal week.

| Date | What happens |
|---|---|
| **Monday (T)** | At 11:00 AM, your buy order for 100 shares at PKR 250 each (total PKR 25,000) matches with a seller. The trade is recorded. Your trading account shows the trade; PKR 25,000 plus brokerage and tax is reserved. The seller's account shows the same. |
| **Monday evening** | NCCPL and CDC issue the **list of obligations**: your broker is told it owes PKR 25,000 to the system; the seller's broker is told it is due PKR 25,000. CDC tells the seller's broker to transfer the 100 shares from its dedicated pool, and tells your broker to be ready to receive. |
| **Tuesday (T+1)** | NCCPL collects the cash from your broker's clearing bank account and credits it to the seller's broker. CDC moves the shares from the seller's pool to your broker's pool, then from your broker's pool to your CDC sub-account. Both sides of the trade are now complete. |

The trade is fully settled at end of T+1. If you log in to your CDC Sub-Account on Tuesday evening, the 100 shares will be there.

## Holidays change the timing

Settlement runs on **business days**, not calendar days. If a holiday falls between your trade and settlement, the cycle slides accordingly.

| Trade date | Holiday in the way? | Settlement date |
|---|---|---|
| Monday | None | Tuesday |
| Tuesday | None | Wednesday |
| Wednesday | None | Thursday |
| Thursday | None | Friday |
| Friday | None | Monday (next business day) |
| Any day | Public holiday on T+1 | T+2 (one extra business day) |

This is why the page on [Trading Hours](/docs/trading-and-orders/trading-hours) recommends checking the PSX holiday calendar before placing time-sensitive orders.

## What about older sources saying T+2?

Many sources, including the contributed video transcripts in the source notes for this site, still describe the previous **T+2** cycle. T+2 was Pakistan's standard from before 9 February 2026 and any source produced before that date will use T+2 for current trades.

For trades executed today, T+1 applies.

## What can go wrong

Settlement is designed to be robust, but rare failures do happen. The system's defences:

- **NCCPL guarantee.** As the central counterparty, NCCPL guarantees both sides of the trade. If your broker defaults on the cash, NCCPL covers the obligation through margin and clearing-fund arrangements. The retail investor on the other side of the trade is protected.
- **CDC custody.** Shares held in your CDC account (especially a [CDC Investor Account](/docs/getting-started-with-psx/cdc-account)) cannot be moved out without your written authorisation, so even broker fraud cannot reach them.
- **Margin requirements.** Brokers post margin to NCCPL covering their open obligations, which mostly prevents the cascading defaults that have caused settlement crises in other markets historically.

For retail investors, the practical implication is that settlement risk on individual trades is very low. The risks worth worrying about are at the broker level (the page on [Choosing a Broker](/docs/getting-started-with-psx/choosing-a-broker) covers how to evaluate that).

## Key takeaways

- A PSX trade has two halves: the trade itself (matched on KATS) and the settlement (cash and shares actually changing hands).
- Pakistan's settlement cycle is **T+1** since 9 February 2026, down from the previous T+2.
- NCCPL acts as the central counterparty, guaranteeing both sides of the trade. CDC moves the shares.
- A Monday trade settles on Tuesday. Holidays slide the schedule by one extra business day each.
- Older sources still describing T+2 are out of date for current trades.
- Settlement risk on individual trades is low because of NCCPL's guarantee and CDC's custody. Broker-level risk is what to evaluate carefully.

## Sources used on this page

- National Clearing Company of Pakistan, [Transition to T+1 Settlement Cycle](https://www.nccpl.com.pk/transition-to-t1-settlement-cycle). T+1 effective date and scope.

<Disclaimer />
