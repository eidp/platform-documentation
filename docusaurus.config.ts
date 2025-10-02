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
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://docs.eidp.com',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Organization',
        name: 'EIDP Service B.V.',
        url: 'https://eidp.com/',
        logo: 'https://docs.eidp.com/img/logo-icon.svg',
      }),
    },
  ],
  scripts: [
    {
      id: 'runllm-widget-script',
      type: 'module',
      src: 'https://widget.runllm.com',
      crossorigin: 'true',
      'runllm-name': 'EIDP AI assistant',
      'runllm-assistant-id': '1458',
      'runllm-position': 'BOTTOM_RIGHT',
      'runllm-keyboard-shortcut': 'Mod+j',
      'runllm-preset': 'docusaurus',
      'runllm-brand-logo': 'https://docs.eidp.com/img/logo-icon.svg',
      'runllm-theme-color': '#0067b2',
      'runllm-support-email': 'support@eidp.com',
      'runllm-per-user-usage-limit': '20',
      'runllm-usage-limit-effective-days': '5',
      async: true,
    },
  ],
};

export default config;
