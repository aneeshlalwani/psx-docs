import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

type FooterLink = {
  label: string;
  to?: string;
  href?: string;
};

type LinkGroup = {
  title: string;
  items: FooterLink[];
};

const linkGroups: LinkGroup[] = [
  {
    title: 'Learn',
    items: [
      {label: 'Introduction', to: '/docs/intro'},
      {label: 'Personal Finance', to: '/docs/category/personal-finance'},
      {label: 'Investing 101', to: '/docs/category/investing-101'},
      {label: 'Investment Basics', to: '/docs/category/investment-basics'},
    ],
  },
  {
    title: 'Pakistan Stock Exchange',
    items: [
      {
        label: 'Pakistan Stock Market',
        to: '/docs/category/pakistan-stock-market',
      },
      {
        label: 'Getting Started',
        to: '/docs/category/getting-started-with-psx',
      },
      {label: 'Trading & Orders', to: '/docs/category/trading--orders'},
      {label: 'Corporate Actions', to: '/docs/category/corporate-actions'},
    ],
  },
  {
    title: 'Reference',
    items: [
      {
        label: 'Fundamental Analysis',
        to: '/docs/category/fundamental-analysis',
      },
      {label: 'Taxes & Zakat', to: '/docs/category/taxes--zakat'},
      {label: 'Shariah Investing', to: '/docs/category/shariah-investing'},
      {label: 'Glossary', to: '/docs/category/glossary'},
    ],
  },
];

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
              Free investor education for the Pakistan Stock Exchange. No
              affiliations, no commissions, no advice. Just a structured path
              to understanding the market.
            </p>
            <a
              href="https://github.com/psx-learn/psx-docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-psx-green no-underline transition hover:text-psx-green-dark hover:no-underline"
            >
              View on GitHub
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {linkGroups.map((group) => (
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
            © {year} {siteConfig.title}. All rights reserved.
          </p>
          <p className="m-0">
            Educational content only. Not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
