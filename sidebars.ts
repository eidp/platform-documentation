import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  platform: [
    {
      type: 'doc',
      id: 'index',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Platform',
      collapsed: false,
      items: ['platform/overview', 'platform/features', 'platform/security'],
    },
    {
      type: 'category',
      label: 'CI/CD',
      collapsed: false,
      items: [
        'cicd/introduction',
        'cicd/philosophy',
        {
          type: 'category',
          label: 'Supported Platforms',
          collapsed: true,
          items: [
            'cicd/supported-platforms/introduction',
            'cicd/supported-platforms/github-actions',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
