// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Polygon ID',
  tagline: 'Zero knowledge proof identity wizard',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/js-sdk-tutorials/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '0xpolygonid', // Usually your GitHub org/user name.
  projectName: 'js-sdk-tutorials', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    require.resolve('@cmfcmf/docusaurus-search-local')
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SDK',
        logo: {
          alt: 'SDK Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            type: 'docSidebar',
            activeBasePath: 'docs',
            sidebarId: 'tutorialSidebar',
            label: 'Docs',
            position: 'left',
          },
          {
            type: 'docSidebar',
            position: 'left',
            activeBasePath: 'docs', 
            sidebarId: 'api',
            label: 'API',
          },
          {
            href: 'https://github.com/0xPolygonID/js-sdk',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Web Site',
                href: 'https://polygon.technology/polygon-id/',
              },
              {
                label: 'Wiki',
                href: 'https://wiki.polygon.technology/docs/polygonid/overview',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/0xPolygonID/',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/0xPolygon',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/0xPolygonID',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Polygon. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
