import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';

type Topic = {
  label: string;
  slug: string;
  pages: number;
  description: string;
};

const topics: Topic[] = [
  {
    label: 'Personal Finance',
    slug: 'personal-finance',
    pages: 7,
    description:
      'Budget, save, and understand compounding before you put any money in the market.',
  },
  {
    label: 'Investing 101',
    slug: 'investing-101',
    pages: 7,
    description:
      'What investing actually is, why it matters, and how to think about risk and return.',
  },
  {
    label: 'Investment Basics',
    slug: 'investment-basics',
    pages: 8,
    description: 'Stocks, bonds, mutual funds, ETFs, equity vs. debt.',
  },
  {
    label: 'Pakistan Stock Market',
    slug: 'pakistan-stock-market',
    pages: 9,
    description:
      'How PSX works, its indices, and the key participants like CDC, NCCPL, and SECP.',
  },
  {
    label: 'Getting Started with PSX',
    slug: 'getting-started-with-psx',
    pages: 5,
    description:
      'Open an account, choose a broker, and place your very first trade.',
  },
  {
    label: 'Trading & Orders',
    slug: 'trading--orders',
    pages: 4,
    description: 'Order types, trading hours, T+1 settlement, circuit breakers.',
  },
  {
    label: 'Corporate Actions',
    slug: 'corporate-actions',
    pages: 5,
    description: 'Dividends, bonus shares, stock splits, rights issues, book closure.',
  },
  {
    label: 'Fundamental Analysis',
    slug: 'fundamental-analysis',
    pages: 24,
    description:
      'Read financial statements and calculate the ratios that tell you whether a stock is worth buying.',
  },
  {
    label: 'Technical Analysis',
    slug: 'technical-analysis',
    pages: 4,
    description:
      'Read price charts, candlesticks, and indicators for short-term price moves.',
  },
  {
    label: 'Taxes & Zakat',
    slug: 'taxes--zakat',
    pages: 4,
    description:
      'Capital gains tax, dividend tax, filer vs. non-filer status, zakat on stocks.',
  },
  {
    label: 'Shariah Investing',
    slug: 'shariah-investing',
    pages: 4,
    description:
      'KMI-30, Shariah screening, and purification of non-compliant income.',
  },
  {
    label: 'Glossary',
    slug: 'glossary',
    pages: 1,
    description: 'Quick reference for the PSX and investing terms you will encounter.',
  },
];

function TopicCard({topic, index}: {topic: Topic; index: number}): ReactNode {
  return (
    <Link
      to={`/docs/category/${topic.slug}`}
      className="group flex flex-col rounded-lg border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-color)] p-6 no-underline transition hover:border-psx-green hover:no-underline hover:shadow-sm"
    >
      <span className="mb-3 font-mono text-xs font-semibold tracking-wider text-psx-green">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="mb-2 text-base font-bold text-[var(--ifm-heading-color)] group-hover:text-psx-green">
        {topic.label}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--ifm-color-emphasis-700)]">
        {topic.description}
      </p>
      <span className="text-xs font-medium uppercase tracking-wider text-[var(--ifm-color-emphasis-600)]">
        {topic.pages} {topic.pages === 1 ? 'page' : 'pages'}
      </span>
    </Link>
  );
}

export default function TopicGrid(): ReactNode {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-[var(--ifm-heading-color)] md:text-4xl">
            What you'll learn
          </h2>
          <p className="text-lg text-[var(--ifm-color-emphasis-700)]">
            Twelve categories, 82 pages, one structured path. Read in order or
            jump to whatever you need today.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topics.map((topic, index) => (
            <TopicCard key={topic.slug} topic={topic} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
