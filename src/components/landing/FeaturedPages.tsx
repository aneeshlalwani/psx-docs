import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';

type Featured = {
  category: string;
  title: string;
  excerpt: string;
  href: string;
  readTime: string;
};

const featured: Featured[] = [
  {
    category: 'Personal Finance',
    title: 'The Power of Compounding',
    excerpt:
      'The single idea that does most of the heavy lifting in personal finance. Small consistent savings, given enough time, can become surprisingly large sums.',
    href: '/docs/personal-finance/power-of-compounding',
    readTime: '8 min read',
  },
  {
    category: 'Investing 101',
    title: 'Why Invest?',
    excerpt:
      'Two Pakistanis with the same salary. One keeps savings in a bank, the other invests on PSX. After twenty years, in real terms, their wealth gap is enormous.',
    href: '/docs/investing-101/why-invest',
    readTime: '6 min read',
  },
  {
    category: 'Investing 101',
    title: 'Risk and Return',
    excerpt:
      'Higher returns require higher risk. There is no investment that delivers high returns with no risk. Once you understand this, half the dubious schemes become easy to spot.',
    href: '/docs/investing-101/risk-and-return',
    readTime: '7 min read',
  },
];

function FeaturedCard({item}: {item: Featured}): ReactNode {
  return (
    <Link
      to={item.href}
      className="group flex flex-col rounded-xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-color)] p-7 no-underline transition hover:border-psx-green hover:no-underline hover:shadow-md"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-psx-green">
        {item.category}
      </p>
      <h3 className="mb-3 text-xl font-bold leading-snug text-[var(--ifm-heading-color)] group-hover:text-psx-green">
        {item.title}
      </h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--ifm-color-emphasis-700)]">
        {item.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-[var(--ifm-color-emphasis-600)]">
          {item.readTime}
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-psx-green transition group-hover:gap-2">
          Read
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}

export default function FeaturedPages(): ReactNode {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-[var(--ifm-heading-color)] md:text-4xl">
            Hand-picked starting points
          </h2>
          <p className="text-lg text-[var(--ifm-color-emphasis-700)]">
            Three pages worth reading even if you read nothing else on the
            site.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((item) => (
            <FeaturedCard key={item.href} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
