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
      items: [
        'platform/overview',
        'platform/features',
        'platform/architecture',
        'platform/infrastructure',
        'platform/security',
      ],
    },
    {
      type: 'category',
      label: 'CI/CD',
      items: [
        'cicd/introduction',
        'cicd/philosophy',
        'cicd/supported-platforms',
        'cicd/github-actions',
      ],
    },
  ],
};

export default sidebars;
