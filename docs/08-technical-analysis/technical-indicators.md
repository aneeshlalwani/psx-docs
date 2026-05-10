---
id: "technical-indicators"
title: "Technical Indicators"
sidebar_position: 4
description: "Moving averages, RSI, MACD, Bollinger Bands, and volume indicators — the mathematical tools traders apply to price data to extract trend and momentum signals."
---

# Technical Indicators

Where [chart patterns](/docs/technical-analysis/chart-patterns) require visual interpretation that two analysts can disagree about, **technical indicators** are mathematical formulas applied to price (and sometimes volume) to produce a clean numerical output. There is no ambiguity about whether a 50-day moving average is above or below the price; there is no ambiguity about whether RSI is above 70 or below 30. This page covers the most-used indicators on PSX retail platforms, their formulas, and their typical interpretations.

## What you'll learn

- Moving averages (SMA and EMA)
- Relative Strength Index (RSI)
- Moving Average Convergence Divergence (MACD)
- Bollinger Bands
- Volume indicators
- The classification of indicators into trend, momentum, and volatility families

## Indicator families

Technical indicators broadly fall into three categories.

- **Trend indicators**: tell you the direction the price is moving (or whether it is moving at all). Examples: moving averages, MACD's signal line.
- **Momentum / oscillators**: tell you how fast the price is moving and whether the move is overextended. Examples: RSI, Stochastics.
- **Volatility indicators**: tell you how widely price is fluctuating around its mean. Examples: Bollinger Bands, Average True Range (ATR).

Most serious technical analysts combine indicators from at least two families to avoid relying on a single signal type.

## Moving averages

The most-used trend indicator. A **moving average** computes the average price over a specific number of recent periods.

### Simple Moving Average (SMA)

```
SMA(N) = (P1 + P2 + ... + PN) / N
```

A 20-day SMA is the average of the last 20 daily closing prices. As each new day closes, the oldest price drops off and the newest is added.

The SMA "smooths out" daily noise and reveals the underlying trend. Common SMA periods on PSX:

- **20-day SMA**: short-term trend.
- **50-day SMA**: intermediate-term trend.
- **200-day SMA**: long-term trend.

### Exponential Moving Average (EMA)

A weighted version that gives more weight to recent prices.

```
EMA(today) = α × Price(today) + (1 - α) × EMA(yesterday)

where α = 2 / (N + 1) for an N-period EMA
```

EMAs respond faster to recent price changes than SMAs. A 20-day EMA reacts to a sudden price jump more quickly than a 20-day SMA does.

Most traders use EMAs for short-term signals and SMAs for longer-term trend identification.

### Reading moving averages

Common interpretations:

- **Price above the moving average**: the trend is up. Above multiple moving averages (e.g., price above 20, 50, and 200-day SMAs simultaneously) is a strong bullish alignment.
- **Price below the moving average**: the trend is down.
- **Moving average crossover**: a shorter-period MA crossing above a longer-period MA (the **golden cross**, e.g., 50-day SMA crossing above 200-day SMA) is interpreted as bullish. The opposite (the **death cross**) is bearish.
- **The moving average itself acts as support or resistance**. In an uptrend, price often pulls back to the 50-day or 200-day SMA before bouncing.

## Relative Strength Index (RSI)

The most-used momentum indicator. RSI measures the speed and magnitude of recent price changes to identify overbought or oversold conditions.

```
RSI = 100 - (100 / (1 + RS))

where RS = Average gain over N periods / Average loss over N periods
```

The default period is **14**. RSI ranges from 0 to 100.

### Reading RSI

Standard interpretation:

- **RSI above 70**: overbought. The price has risen too fast and may be due for a pullback.
- **RSI below 30**: oversold. The price has fallen too fast and may be due for a bounce.
- **RSI between 30 and 70**: no extreme signal.

Caveats:

- **In strong trends**, RSI can stay above 70 (or below 30) for extended periods. Selling just because RSI hits 70 in a strong uptrend often means selling too early.
- **Divergence** (covered below) is often a more reliable RSI signal than absolute level.

### RSI divergence

A more sophisticated use. **Bullish divergence** occurs when:

- Price is making **lower lows** (still falling).
- RSI is making **higher lows** (showing momentum is weakening on the downside).

This combination suggests the downtrend is exhausting even though price has not yet reversed. Often interpreted as an early bullish signal.

**Bearish divergence** is the mirror image: price making higher highs, RSI making lower highs, suggesting the uptrend is exhausting.

## Moving Average Convergence Divergence (MACD)

A combination trend-and-momentum indicator built from EMAs.

```
MACD line = EMA(12) - EMA(26)
Signal line = EMA(9) of MACD line
Histogram = MACD line - Signal line
```

Three components plotted together:

- The **MACD line** itself.
- The **signal line** (a smoothed version of the MACD line).
- The **histogram** showing the difference between the two.

### Reading MACD

Common interpretations:

- **MACD line crossing above signal line**: bullish signal.
- **MACD line crossing below signal line**: bearish signal.
- **MACD above zero**: short-term EMA is above long-term EMA. Bullish trend.
- **MACD below zero**: short-term EMA is below long-term EMA. Bearish trend.
- **Histogram expanding**: momentum is accelerating in the current direction.
- **Histogram contracting**: momentum is decelerating, possibly preceding a crossover.

MACD is considered most useful in trending markets and less reliable in choppy sideways ranges.

## Bollinger Bands

A volatility indicator. Bollinger Bands consist of three lines:

- **Middle band**: typically a 20-day SMA.
- **Upper band**: middle band + (2 × standard deviation of price over 20 days).
- **Lower band**: middle band - (2 × standard deviation of price over 20 days).

The bands widen when volatility is high and narrow when volatility is low.

### Reading Bollinger Bands

Common interpretations:

- **Price touching the upper band**: short-term overbought; could pull back.
- **Price touching the lower band**: short-term oversold; could bounce.
- **Bands narrowing ("Bollinger squeeze")**: low volatility, often preceding a sharp move (direction undetermined).
- **Bands widening**: volatility expanding.
- **Price walking up the upper band**: very strong uptrend; the price is pressing against the upper band repeatedly. Not a sell signal but a strength signal.

Bollinger Bands work best as a context indicator (telling you about volatility regime) rather than as a standalone trade trigger.

## Volume indicators

Volume itself is the simplest indicator. Beyond raw volume, two derived metrics are common.

### Volume moving average

A 20-day or 50-day average of daily volume, plotted alongside daily volume bars. Daily volume meaningfully above the moving average indicates unusual activity worth noticing.

### On-Balance Volume (OBV)

A running total that adds the day's volume to a cumulative sum on up days and subtracts it on down days.

```
OBV(today) = OBV(yesterday) + Volume(today)  if Close(today) > Close(yesterday)
OBV(today) = OBV(yesterday) - Volume(today)  if Close(today) < Close(yesterday)
OBV(today) = OBV(yesterday)                  if Close(today) = Close(yesterday)
```

OBV is interpreted as a sentiment indicator. If OBV is rising while price is sideways, accumulation is happening (smart money is buying without pushing price). If OBV is falling while price is rising, distribution is happening (smart money is selling into strength).

OBV divergence with price is one of the more-watched signals among institutional traders.

## Combining indicators

A common practical approach is to combine indicators from different families to avoid false signals from any single one.

A simple combination:

- **Trend**: 50-day SMA (price above or below).
- **Momentum**: RSI 14 (above 70, below 30, or between).
- **Confirmation**: volume.

A bullish setup: price crosses above 50-day SMA, RSI rises out of the 30-50 range, and the move happens on above-average volume. All three aligning is more reliable than any one alone.

A bearish setup: price falls below 50-day SMA, RSI drops below 50, and the move happens on above-average volume.

Many traders also overlay these signals on candlestick and chart-pattern context from the previous pages.

## PSX-specific notes

A few practical points for Pakistani retail investors.

### Most broker platforms support these indicators

Major Pakistani broker terminals (KASB Direct, EFG Hermes, AKD Trade, Topline ProTrade, JS Online, Foundation Online, etc.) include moving averages, RSI, MACD, and Bollinger Bands as standard chart overlays. You do not need a separate technical-analysis subscription for the basics.

### Default parameters

Default indicator parameters (14-period RSI, 20-day SMA, 12-26-9 MACD, 20-day Bollinger Bands with 2 standard deviations) work fine on PSX charts. There is no special Pakistani parameter set.

### Lower-liquidity stocks

For thinly traded PSX stocks, indicators can produce noisy signals. Some practical adjustments:

- Use longer-period moving averages (50-day and 200-day) rather than short-period ones.
- Look for confirmation from volume; many low-volume signals are spurious.
- Avoid indicators that require frequent intraday data on stocks that barely trade intraday.

### Backtesting

Several free or low-cost services let you backtest simple indicator-based strategies on PSX data. Results from backtests should be treated with the usual caveat that past performance does not guarantee future results, and that overfitting (tuning a strategy to historical data so that it fails out of sample) is a real risk.

<Callout type="warning" title="No indicator is a holy grail">
  Every retail trader who has spent significant time on technical
  analysis has gone through a phase of looking for "the perfect
  indicator". It does not exist. Indicators are tools that help
  organise information; they do not produce reliable predictions
  on their own. The goal is to combine simple, well-understood
  indicators with disciplined risk management, not to find a
  magic formula.
</Callout>

## Key takeaways

- Technical indicators fall into three families: trend, momentum, volatility.
- Moving averages (SMA, EMA) are the foundational trend indicators.
- RSI is the most-used momentum oscillator, with overbought / oversold thresholds at 70 / 30.
- MACD combines two EMAs for trend-and-momentum signals.
- Bollinger Bands measure volatility around a moving average.
- Volume is the most-overlooked but most-important confirmation tool.
- Combine indicators from different families to reduce false signals.
- Pakistani broker platforms support all the standard indicators with default parameters that work fine.

<Disclaimer />
