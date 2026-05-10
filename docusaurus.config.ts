import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Placeholder values — replace these as the project takes its real shape.
const SITE_NAME = 'PSX Learn';
const SITE_TAGLINE = 'Learn investing on the Pakistan Stock Exchange';
const SITE_URL = 'https://example.com';
const SITE_DESCRIPTION =
  'A beginner-friendly guide to investing on the Pakistan Stock Exchange (PSX) — stocks, mutual funds, ETFs, taxes, zakat, and Shariah-compliant investing.';

const config: Config = {
  title: SITE_NAME,
  tagline: SITE_TAGLINE,
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: SITE_URL,
  baseUrl: '/',

  // Replace with your real GitHub org/repo when deploying.
  organizationName: 'psx-learn',
  projectName: 'psx-docs',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Default <head> metadata applied site-wide.
  headTags: [
    {
      tagName: 'meta',
      attributes: {name: 'description', content: SITE_DESCRIPTION},
    },
    {
      tagName: 'meta',
      attributes: {property: 'og:type', content: 'website'},
    },
    {
      tagName: 'meta',
      attributes: {property: 'og:site_name', content: SITE_NAME},
    },
    {
      tagName: 'meta',
      attributes: {name: 'twitter:card', content: 'summary_large_image'},
    },
  ],

  plugins: [
    function tailwindPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          // showLastUpdateTime requires git history — re-enable once the repo has commits.
          // editUrl can be enabled once a real GitHub repo URL is set.
        },
        // Blog disabled for v1 — re-enable by changing `false` to a config object.
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css', './src/css/tailwind.css'],
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      // Local search via @easyops-cn/docusaurus-search-local
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    metadata: [
      {name: 'keywords', content: 'PSX, Pakistan Stock Exchange, investing, stocks, mutual funds, ETF, KMI-30, KSE-100, Shariah investing'},
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: SITE_NAME,
      logo: {
        alt: `${SITE_NAME} logo`,
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/psx-learn/psx-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
