const { themes } = require('prism-react-renderer')

const path = require('path')

export default async function createConfigAsync() {
  /** @type {import('@docusaurus/types').Config} */
  return {
    title: 'Brian Shen',
    url: 'https://brianshen.cc',
    baseUrl: '/',
    favicon: 'img/logo.webp',
    organizationName: 'Brian Shen',
    projectName: 'blog',
    tagline: 'The road is obstructed and long, travel it and you will arrive.',
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    themeConfig: {
      // announcementBar: {
      //   id: 'announcementBar-3',
      //   content: announcementBarContent,
      // },
      metadata: [
        {
          name: 'keywords',
          content: 'Brian Shen',
        },
        {
          name: 'keywords',
          content: 'blog, javascript, typescript, node, react, angular, web',
        },
        {
          name: 'keywords',
          content: 'typescript full stack developer',
        },
      ],
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      headTags: [
        {
          tagName: 'meta',
          attributes: {
            name: 'description',
            content: 'Brian Shen‘s Personal Blog',
          },
        },
      ],
      navbar: {
        logo: {
          alt: 'Brian Shen',
          src: 'img/logo.webp',
          srcDark: 'img/logo.webp',
        },
        hideOnScroll: true,
        items: [
          {
            label: 'Blog',
            position: 'right',
            to: 'blog',
          },
          {
            label: 'Project',
            position: 'right',
            to: 'project',
          },
          {
            label: 'More',
            position: 'right',
            items: [
              { label: 'Archive Blog', to: 'blog/archive' },
              { label: 'Technical Notes', to: 'docs/skill' },
              { label: 'Resource', to: 'resource' },
              { label: 'Recommend Tools', to: 'docs/tools' },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: "What's New",
            items: [
              { label: 'Blog', to: 'blog' },
              { label: 'Archive Blog', to: 'blog/archive' },
              { label: 'Technical Notes', to: 'docs/skill' },
              { label: 'Project', to: 'project' },
            ],
          },
          {
            title: 'Social Media',
            items: [
              { label: 'About', to: '/about' },
              { label: 'GitHub', href: 'https://github.com/BrianShenCC' },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/brian-shen-0b0716245',
              },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Resource', position: 'right', to: 'resource' },
              {
                html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`,
              },
            ],
          },
        ],
        copyright: `<p>Copyright © 2020 - PRESENT Brian Built with Docusaurus.</p>`,
      },
      algolia: {
        appId: 'A4M5OCLKX8',
        apiKey: 'e52babc5aa3806da0fc1b08adb0b1cfd',
        indexName: 'BrianBlog',
      },
      // giscus: {
      //   repo: 'Brian/blog',
      //   repoId: '=',
      //   category: '',
      //   categoryId: '',
      //   theme: 'light',
      //   darkTheme: 'dark',
      // },
      socials: {
        github: 'https://github.com/BrianShenCC',
        linkedin: 'https://www.linkedin.com/in/brian-shen-0b0716245',
        email: 'mailto:shenhaoxiang1990@gmail.com',
      },
      prism: {
        theme: themes.oneLight,
        darkTheme: themes.oneDark,
        additionalLanguages: ['bash', 'json', 'java', 'php', 'rust', 'toml'],
        defaultLanguage: 'javascript',
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
          },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      liveCodeBlock: {
        playgroundPosition: 'top',
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
      },
    },
    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: {
            path: 'docs',
            sidebarPath: 'sidebars.js',
          },
          blog: false,
          theme: {
            customCss: ['./src/css/custom.scss'],
          },
          sitemap: {
            changefreq: 'daily',
            priority: 0.5,
          },
          gtag: {
            trackingID: 'G-S4SD5NXWXF',
            anonymizeIP: true,
          },
          // debug: true,
        },
      ],
    ],
    plugins: [
      'docusaurus-plugin-image-zoom',
      'docusaurus-plugin-sass',
      path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
      path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
      [
        path.resolve(__dirname, './src/plugin/plugin-content-blog'), // 为了实现全局 blog 数据，必须改写 plugin-content-blog 插件
        {
          path: 'blog',
          editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
            `https://github.com/BrianShenCC/blog/edit/main/${blogDirPath}/${blogPath}`,
          editLocalizedFiles: false,
          blogDescription: "Brian Shen's Personal Blog",
          blogSidebarCount: 10,
          blogSidebarTitle: 'Blogs',
          postsPerPage: 10,
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          feedOptions: {
            type: 'all',
            title: 'Brian Shen',
          },
        },
      ],
      ['@docusaurus/plugin-ideal-image', { disableInDev: false }],
      [
        '@docusaurus/plugin-pwa',
        {
          debug: true,
          offlineModeActivationStrategies: [
            'appInstalled',
            'standalone',
            'queryString',
          ],
          pwaHead: [
            { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
            { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
            { tagName: 'meta', name: 'theme-color', content: '#12affa' },
          ],
        },
      ],
    ],
    stylesheets: [],
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
      localeConfigs: {
        en: {
          htmlLang: 'en-GB',
        },
      },
    },
  }
}
