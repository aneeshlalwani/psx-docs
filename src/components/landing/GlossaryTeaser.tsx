import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import content from '@site/src/content/landing/glossary-teaser.json';

const BookmarkIcon = (): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-8 w-8"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
    />
  </svg>
);

export default function GlossaryTeaser(): ReactNode {
  return (
    <section className="bg-[var(--ifm-background-surface-color)] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-8 rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-color)] p-10 md:flex-row md:p-12">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-psx-green/10 text-psx-green-darkest dark:text-psx-green-light">
            <BookmarkIcon />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-[var(--ifm-heading-color)] md:text-3xl">
              {content.heading}
            </h2>
            <p className="text-base leading-relaxed text-[var(--ifm-color-emphasis-700)]">
              {content.body}
            </p>
          </div>

          <Link
            to={content.cta.to}
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-md bg-psx-green px-7 text-base font-semibold text-white no-underline shadow-sm transition hover:bg-psx-green-dark hover:text-white hover:no-underline"
          >
            {content.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
