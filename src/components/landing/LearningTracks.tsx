import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';

type Track = {
  title: string;
  description: string;
  meta: string;
  href: string;
  cta: string;
  Icon: () => ReactNode;
};

const AcademicCapIcon = (): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
    />
  </svg>
);

const TrendingUpIcon = (): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
    />
  </svg>
);

const ShieldCheckIcon = (): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
    />
  </svg>
);

const tracks: Track[] = [
  {
    title: 'Complete beginner',
    description:
      'Never invested before. Start with budgeting and saving, then build up step by step until you can confidently buy your first PSX stock.',
    meta: 'Full curriculum · 82 pages',
    href: '/docs/intro',
    cta: 'Start from the basics',
    Icon: AcademicCapIcon,
  },
  {
    title: 'Already invest, new to PSX',
    description:
      'Skip the foundations. Jump straight to how PSX works, opening a CDC account, placing your first trade, and the Pakistan-specific tax rules.',
    meta: 'PSX fast track · ~27 pages',
    href: '/docs/category/pakistan-stock-market',
    cta: 'Jump into PSX',
    Icon: TrendingUpIcon,
  },
  {
    title: 'Shariah-only investor',
    description:
      'Stay within KMI-30 territory. Learn Shariah screening, purification of non-compliant income, and how to identify compliant PSX stocks.',
    meta: 'Focused track · 4 pages',
    href: '/docs/category/shariah-investing',
    cta: 'Start Shariah track',
    Icon: ShieldCheckIcon,
  },
];

function TrackCard({track}: {track: Track}): ReactNode {
  const {Icon} = track;
  return (
    <Link
      to={track.href}
      className="group flex flex-col rounded-xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-color)] p-7 no-underline transition hover:border-psx-green hover:no-underline hover:shadow-md"
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-psx-green/10 text-psx-green-darkest dark:text-psx-green-light">
        <Icon />
      </div>
      <h3 className="mb-2 text-xl font-bold text-[var(--ifm-heading-color)]">
        {track.title}
      </h3>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-[var(--ifm-color-emphasis-700)]">
        {track.description}
      </p>
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--ifm-color-emphasis-600)]">
        {track.meta}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-psx-green transition group-hover:gap-2">
        {track.cta}
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}

export default function LearningTracks(): ReactNode {
  return (
    <section className="bg-[var(--ifm-background-surface-color)] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-[var(--ifm-heading-color)] md:text-4xl">
            Where do I start?
          </h2>
          <p className="text-lg text-[var(--ifm-color-emphasis-700)]">
            Pick the path that matches your situation. You can switch tracks
            any time.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tracks.map((track) => (
            <TrackCard key={track.title} track={track} />
          ))}
        </div>
      </div>
    </section>
  );
}
