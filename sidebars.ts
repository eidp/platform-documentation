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
    // {
    //   type: 'category',
    //   label: 'Guides',
    //   collapsed: false,
    //   items: [
    //     'guides/getting-started',
    //     'guides/deploying-first-app'
    //   ]
    // },
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
    // {
    //   type: 'category',
    //   label: 'Operations',
    //   items: [
    //     'operations/environments',
    //     'operations/monitoring-logging'
    //   ]
    // },
    // {
    //   type: 'category',
    //   label: 'Reference',
    //   items: [
    //     'reference/cli'
    //   ]
    // }
  ],
};

export default sidebars;
