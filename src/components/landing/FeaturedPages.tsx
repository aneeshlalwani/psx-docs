import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import content from '@site/src/content/landing/featured-pages.json';

type Featured = (typeof content.items)[number];

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
            {content.heading}
          </h2>
          <p className="text-lg text-[var(--ifm-color-emphasis-700)]">
            {content.subhead}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {content.items.map((item) => (
            <FeaturedCard key={item.href} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
