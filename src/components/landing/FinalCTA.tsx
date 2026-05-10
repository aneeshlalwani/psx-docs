import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';

export default function FinalCTA(): ReactNode {
  return (
    <section className="relative overflow-hidden border-t border-[var(--ifm-color-emphasis-200)] py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-psx-green/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-[var(--ifm-heading-color)] md:text-5xl">
          Ready to start?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-[var(--ifm-color-emphasis-700)]">
          The intro takes about ten minutes. The full beginner track is a few
          weeks of evening reading. Either way, you will be better prepared
          than most people opening their first PSX account.
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

        <p className="mt-10 text-sm text-[var(--ifm-color-emphasis-600)]">
          Educational content only. Not financial advice.
        </p>
      </div>
    </section>
  );
}
