import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'EIDP Platform Docs',
  tagline: 'Thé European Internal Developer Platform',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://docs.eidp.com',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'eidp',
  projectName: 'platform-documentation',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editCurrentVersion: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['en'],
      },
    ],
    'docusaurus-plugin-llms',
    'docusaurus-plugin-sass',
    'plugin-image-zoom',
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'EIDP Logo',
        src: 'img/logo-light.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        // { href: 'https://status.eidp.com', label: 'Status', position: 'right' },
        { href: 'https://eidp.com', label: 'eidp.com', position: 'right' },
        { type: 'search', position: 'right' },
        {
          type: 'html',
          position: 'right',
          value:
            '<img src="/img/applications-you-control.svg" alt="applications you control"/>',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              label: 'Github',
              href: 'https://github.com/eidp',
              position: 'left',
              prependBaseUrlToHref: false,
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/eidp-cloud',
              prependBaseUrlToHref: false,
              position: 'left',
            },
          ],
          title: 'Social',
        },
        {
          items: [
            {
              label: 'Contact',
              href: 'https://eidp.com/contact',
              prependBaseUrlToHref: false,
            },
          ],
          title: 'Resources',
        },
        {
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/eidp',
              prependBaseUrlToHref: false,
            },
          ],
          title: 'Resources',
        },
      ],
      copyright:
        'Copyright © ' + new Date().getFullYear() + ' EIDP License B.V.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  scripts: [
    {
      id: 'ragpi-widget',
      type: 'module',
      src: 'https://cdn.jsdelivr.net/gh/ragpi/ragpi-web-widget@v0.1.1/dist/ragpi-widget.js',
      crossorigin: 'true',
      'data-recaptcha-site-key': '6LdPANwrAAAAAM-cNpR156AEDJeEYmevnJzWkBS_',
      'data-ragpi-gateway-url': 'https://recaptcha.ragpi.eidp.com',
      'data-primary-color': '#0067b2',
      'data-secondary-color': '#2b2e34',
      'data-logo-url': '/img/logo-icon.svg',
      async: true,
    },
  ],
};

export default config;
