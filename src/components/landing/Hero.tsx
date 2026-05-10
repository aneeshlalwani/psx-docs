import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';

export default function Hero(): ReactNode {
  return (
    <header className="relative overflow-hidden border-b border-[var(--ifm-color-emphasis-200)]">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-[-220px] h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-psx-green/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-psx-green-darkest dark:text-psx-green-light">
          Free Investor Education · Pakistan Stock Exchange
        </p>

        <h1 className="mb-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-[var(--ifm-heading-color)] md:text-6xl lg:text-7xl">
          Stop guessing.
          <br />
          <span className="text-psx-green">Start understanding</span> the PSX.
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[var(--ifm-color-emphasis-700)] md:text-xl">
          A structured, beginner-friendly path through stocks, mutual funds,
          ETFs, taxes, zakat, and Shariah investing in Pakistan. Read at your
          own pace.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/docs/intro"
            className="inline-flex h-12 items-center justify-center rounded-md bg-psx-green px-7 text-base font-semibold text-white no-underline shadow-sm transition hover:bg-psx-green-dark hover:text-white hover:no-underline"
          >
            Start with the basics
          </Link>
          <Link
            to="/docs/intro#what-you-will-find-here"
            className="inline-flex h-12 items-center justify-center rounded-md border border-[var(--ifm-color-emphasis-300)] bg-transparent px-6 text-base font-semibold text-[var(--ifm-color-emphasis-900)] no-underline transition hover:border-psx-green hover:text-psx-green hover:no-underline"
          >
            Browse all topics →
          </Link>
        </div>
      </div>
    </header>
  );
}
