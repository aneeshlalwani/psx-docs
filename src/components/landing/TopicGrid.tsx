import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import content from '@site/src/content/landing/topic-grid.json';

type Topic = (typeof content.topics)[number];

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
            {content.heading}
          </h2>
          <p className="text-lg text-[var(--ifm-color-emphasis-700)]">
            {content.subhead}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {content.topics.map((topic, index) => (
            <TopicCard key={topic.slug} topic={topic} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
