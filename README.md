<h2 align="center">
Brian Shen's personal blog
</h2><br>

<pre align="center">
 Build with 🦖<a href="https://docusaurus.io/">Docusaurus</a> 
</pre>

<p align="center">
<br>
<a href="https://brianshen.cc/">🖥 Online Preview</a>

## 👋 Introduction

Here, I will share the problems encountered with various technology stacks and their solutions, take you to understand the latest technology stacks and how to apply them in actual development, and hope that my development experience will inspire you.

If you want to build a similar website [Fork](https://github.com/HaoxiangShen/blog/fork) Use this repository

Run this project online [StackBlitz](https://stackblitz.com/github/HaoxiangShen/blog)

## ✨ Features

- ✍️ **Markdown** - Convenient for writing
- 🎨 **Beautiful** - Clean and aesthetic
- 🖥️ **PWA** - Supports PWA, installable, available offline
- 🏞️ **i18n** - Supports internationalization
- 💯 **SEO** - Search Engine Optimized, easy to index
- 📊 **Google Analytics** - Support Google Analytics
- 🔎 **全文搜索** - Supports [Algolia DocSearch](https://github.com/algolia/docsearch)
- 🗃️ **博文视图** - Different blog views, list, grid, card
- 🌈 **资源导航** - Collect and share useful and interesting resources
- 📦 **项目展示** - Display your projects

## 📊 Catalogue

```bash
├── blog                           # Blo
│   ├── first-blog.md
├── docs                           # Blog/Note
│   └── doc.md
├── data                           # 项目/导航/友链数据
│   ├── friend.ts                  # 友链
│   ├── project.ts                 # Projects
│   └── resource.ts                # 资源导航
├── i18n                           # Internationalization
├── src
│   ├── components                 # Components
│   ├── css                        # Customize CSS
│   ├── pages                      # Customize Pages
│   ├── plugin                     # Plugins
│   └── theme                      # Theme Components
├── static                         # Static files
│   └── img                        # Image
├── docusaurus.config.js           # Docusaurus Config
├── sidebars.js                    # 文档的侧边栏
├── package.json
├── tsconfig.json
└── pnpm-lock.yaml
```

## 📥 Start

```sh
git clone https://github.com/HaoxiangShen/blog.git
cd blog
pnpm install
pnpm start
```

Build

```sh
pnpm build
```

## 📝License

[MIT](./LICENSE)
