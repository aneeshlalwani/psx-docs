import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import content from '@site/src/content/footer.json';

type FooterLink = {
  label: string;
  to?: string;
  href?: string;
};

function FooterLinkItem({item}: {item: FooterLink}): ReactNode {
  const className =
    'text-sm text-[var(--ifm-color-emphasis-800)] no-underline transition hover:text-psx-green hover:no-underline';

  if (item.href) {
    return (
      <a
        href={item.href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.label}
      </a>
    );
  }
  return (
    <Link to={item.to ?? '#'} className={className}>
      {item.label}
    </Link>
  );
}

export default function Footer(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const logoUrl = useBaseUrl('/img/logo.svg');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-color)] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="mb-4 inline-flex items-center gap-2 no-underline hover:no-underline"
            >
              <img src={logoUrl} alt="" className="h-8 w-8" />
              <span className="text-lg font-bold tracking-tight text-[var(--ifm-heading-color)]">
                {siteConfig.title}
              </span>
            </Link>
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-[var(--ifm-color-emphasis-700)]">
              {content.tagline}
            </p>
            <a
              href={content.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-psx-green no-underline transition hover:text-psx-green-dark hover:no-underline"
            >
              {content.github.label}
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {content.linkGroups.map((group) => (
            <div key={group.title} className="lg:col-span-1">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[var(--ifm-color-emphasis-600)]">
                {group.title}
              </h3>
              <ul className="m-0 list-none space-y-3 p-0">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <FooterLinkItem item={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--ifm-color-emphasis-200)] pt-6 text-xs text-[var(--ifm-color-emphasis-600)] md:flex-row md:items-center md:justify-between">
          <p className="m-0">
            © {year} {siteConfig.title}. {content.legal.rightsReserved}
          </p>
          <p className="m-0">{content.legal.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
