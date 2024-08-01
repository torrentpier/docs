// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'TorrentPier',
    tagline: 'Bull-powered BitTorrent tracker engine',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://torrentpier.com/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'torrentpier', // Usually your GitHub org/user name.
    projectName: 'torrentpier', // Usually your repo name.

    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'ru',
        locales: ['ru', 'en'],
        localeConfigs: {
            en: {
                label: 'English',
            },
            ru: {
                label: 'Русский',
            }
        }
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarCollapsible: false,
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/torrentpier/docs/tree/master/',
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'TorrentPier',
                logo: {
                    alt: 'TorrentPier Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Docs',
                    },
                    {
                        href: 'https://torrentpier.duckdns.org',
                        label: 'Demo version',
                        position: 'right'
                    },
                    {
                        href: 'https://get-torrentpier.duckdns.org',
                        label: 'Get TorrentPier',
                        position: 'right'
                    },
                    {
                        href: 'https://torrentpier.com',
                        label: 'Our Forum',
                        position: 'right'
                    },
                    {
                        href: 'https://github.com/torrentpier/torrentpier',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'light',
                copyright: `Copyright © ${new Date().getFullYear()} TorrentPier. Built with ❤️ and Docusaurus 🦖.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
