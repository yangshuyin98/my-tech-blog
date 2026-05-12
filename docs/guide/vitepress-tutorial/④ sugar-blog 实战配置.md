---
title: sugar-blog 实战配置教程
order: 4
---

# sugar-blog 实战配置教程

> 基于 `@sugarat/theme`，从零搭建一个功能完整的技术博客。

---

## 目录

1. [快速创建项目](#快速创建项目)
2. [项目结构解读](#项目结构解读)
3. [全局配置详解](#全局配置详解)
4. [首页配置](#首页配置)
5. [文章写作规范](#文章写作规范)
6. [标签与分类系统](#标签与分类系统)
7. [搜索功能](#搜索功能)
8. [评论系统](#评论系统)
9. [部署到 GitHub Pages](#部署到-github-pages)
10. [常见问题](#常见问题)

---

## 快速创建项目

### 前置条件

- Node.js >= 18
- 推荐使用 pnpm（不推荐 yarn）

```bash
# 安装 pnpm（如果没有）
npm install -g pnpm
```

### 一键创建

```bash
pnpm create @sugarat/theme@latest my-blog
```

按提示操作：
```
✔ Project name: my-blog
✔ Select a template: Default
```

### 启动开发

```bash
cd my-blog
pnpm install
pnpm dev
```

浏览器打开 `http://localhost:5173`，你会看到一个完整的博客首页。

---

## 项目结构解读

```
my-blog/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts           # VitePress 主配置
│   │   └── blog-theme.ts       # 博客主题配置（核心）
│   ├── index.md                # 首页
│   ├── about.md                # 关于页
│   ├── changelog.md            # 更新日志
│   ├── posts/                  # 文章目录
│   │   ├── frontEnd/
│   │   │   └── xxx.md
│   │   └── template/
│   │       └── xxx.md
│   └── public/                 # 静态资源
│       └── logo.png
├── package.json
└── tsconfig.json
```

## 全局配置关键文件

**`docs/.vitepress/config.ts`** — VitePress 标准配置：

```ts
import { defineConfig } from 'vitepress'
import { blogTheme } from './blog-theme'

export default defineConfig({
  extends: blogTheme,
  lang: 'zh-CN',
  title: '我的博客',
  description: '一个技术博客',
  // ... 其他 VitePress 配置
})
```

#### outline

设置文章自动生成的目录，和 [config.themeConfig.outline](https://vitepress.dev/reference/default-theme-config#outline) 表现一样，文章里单独设置的优先级更高



```js
---
# 取二三级标题生成目录
outline: [2,3]
---
```





```js
import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'
import { defineLocaleConfig } from '@sugarat/theme/node'
// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
const base = process.env.GITHUB_ACTIONS === 'true' ? '/my-tech-blog/' : '/'
//   ? '/vitepress-blog-sugar-template/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({

  // 继承博客主题(@sugarat/theme)  使用@sugarat/theme构建的博客
  extends: blogTheme,
  base,
  lang: 'zh-cn',
  title: '我的博客',
  description: 'shuyin的博客',
  ignoreDeadLinks: true,
  // GitHub Pages 不支持服务端 URL 重写，禁用 cleanUrls 确保链接带 .html 后缀可直达
  cleanUrls: false,
  // lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    search: {
      provider: 'local'  //官方VitePress内置的离线全文搜索
    },
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录'
    },

    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    // 设置logo
    logo: '/logo.png',
    // editLink: {
    //   pattern:
    //     'https://github.com/yangshuyin98/my-tech-blog.git',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '教程',
        items: [
          { text: '📘 Vitepress教程', link: '/guide/vitepress-tutorial/' },
          { text: '编写规范文档', link: '/guide/contributing-guide/' },
          { text: '🔧 Markdown嵌入修复', link: '/guide/markdown嵌入式内容修复/' },
          { text: '🍬 sugar-blog 搭建教程', link: '/guide/sugar-blog-tutorial/' },
          { text: '⚙️ 博客深度运维与运营', link: '/guide/blog-ops/' },
          { text: '🧬 从源码看 sugar-blog', link: '/guide/sugar-blog-source/' },
          { text: '📖 内容编写规范', link: '/guide/contributing-guide/' },
        ]
      },
      {
        text: 'sop',
        items: [
          { text: '快速开始', link: '/sop/component.md' },
          { text: '配置', link: '/sop/more' },
        ]
      },
      { text: '关于', link: '/about' },
      { text: '版本', link: '/CHANGELOG' },
      { text: '归档', link: '/archives' },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/yangshuyin98/my-tech-blog.git'
      }
    ]
  },
})
```



### 全局配置详解

**`docs/.vitepress/blog-theme.ts`** — 博客主题配置（核心文件）：

```ts
import { getThemeConfig } from '@sugarat/theme/node'

const blogTheme = getThemeConfig({
  // 在这里配置博客功能
})

export { blogTheme }
```

---

## 全局配置详解

所有博客功能配置都在 `getThemeConfig()` 中。

### 完整配置示例

```ts
// docs/.vitepress/blog-theme.ts
import { getThemeConfig } from '@sugarat/theme/node'

const blogTheme = getThemeConfig({
  // 文章默认作者
  author: '杨树银',
  // ====== 首页配置 ======
  home: {
    name: '我的技术博客',
    motto: '记录学习，分享成长',
    inspiring: [
      '代码改变世界',
      '保持好奇心，保持学习',
      '今天也是元气满满的一天'
    ],
    pageSize: 6,          // 首页每页文章数
    blogInfoCollapsible: true,   //移动端信息卡片折叠
  },
  // ====== 关闭侧边栏推荐 ======
  // recommend: undefined,       //  false |undefined  即默认生效配置，无需再设置   通过 recommend 配置就能控制显示/隐藏、标题、数量、样式。
  recommend: {
    title: '🔍 相关文章',                          //   '📌 推荐阅读' |🔍 相关文章
    nextText: '下一组',                            // '下一组'  
    pageSize: 20,
    style: 'card',                                 //   "card" | "sidebar" 类似默认主题的侧边栏
    empty: '暂无相关文章',
    sort: 'date',                          // 可以自定义排序规则 默认'date'|  filename
    showDate: true,
    showNum: true
  },
  // ====== 精选文章 ======
  // hotArticle: false   //设置为 false 时，不展示

  hotArticle: {
    title: '🔥 精选文章',
    nextText: '下一页',
    pageSize: 8,
    // empty: false // false 时无精选文章不展示此模块
    empty: '暂无精选内容'

  },
  // ====== 首页标签 ======
  //     homeTags: false //设置为 false 时，不展示
  homeTags: {
    title: '🏷 标签',
    limit: 30,            // 超出部分折叠
    showCount: true,       // 显示文章数量    false  true 
    sort: 'desc',          // 按数量降序  'desc' | 'asc' | 'normal'

  },
  // ====== 文章默认配置 ======
  article: {
    readingTime: true,      // 显示预计阅读时间
    hiddenCover: false,     // 是否默认隐藏封面
    readingTimePosition: 'inline',//阅读时间分析展示位置 top|	newLine|inline
    /**自定义一系列文案标题  */
    analyzeTitles: {
      inlineWordCount: '{{value}} word counts',
      inlineReadTime: '{{value}} min read time',
      wordCount: 'Total word count',
      readTime: 'Total read time',
      author: 'Author',
      publishDate: 'Published on',
      lastUpdated: 'Last updated on',
      tag: 'Tags',
    }
  },
  //设置一个全局的提示弹窗 (由 el-alert 驱动)
  alert: {
    type: 'success',
    title: 'xx功能上新啦🎉',
    duration: 3000
  },

  // 开启RSS支持
  RSS,

  // ====== 搜索 ======
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // search: false,
  search: {
    btnPlaceholder: '搜索',
    placeholder: '搜索文章...',
    emptyText: '没有找到相关内容',
    heading: '共 {{searchResult}} 条搜索结果',
  },

  // ====== 评论（可选） ======

    comment: {
        type: 'giscus',
        options: {
            repo: 'your/sugar-blog',
            repoId:  'MDEwOlJlcG9zaXRvcnkyNDEyNDUyOTk',
            category: 'Announcements',
            categoryId:  'DIC_kwDODmEcc84COVc6',
            inputPosition: 'top',
    },
    // 自定义展示内容
    label: '发表意见',
    icon: `<svg width="512" height="512" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fbbf67" d="M63.962 31.979c0 17.665-14.318 31.979-31.981 31.979C14.319 63.958 0 49.644 0 31.979C0 14.315 14.319 0 31.981 0c17.663 0 31.981 14.315 31.981 31.979"/>
      <path fill="#633d19" d="M39.512 47.925c-.624-1.461-1.959-2.202-3.97-2.202c-1.568 0-3.271.45-4.515.78l-.727.185c-.32.079-1.979 1.012-1.868 1.914l.193.727h.671c.111 0 .229-.016.37-.049l.602-.152c1.361-.342 2.643-.666 3.983-.666c.788 0 1.46.305 2 .905c.442.487.371.773.348.868c-.118.494-.889 1.085-1.916 1.476c0 0-1.594.658-1.663 1.574l.052.622l.415.237c2.326 1.333 2.278 2.194 1.979 2.796c-.332.664-1.275.805-2.01.805c-1.019 0-2.121-.273-2.765-.542l-.427-.083c-.806 0-2.105.97-2.248 1.673l-.071.716l.573.238a8.03 8.03 0 0 0 3.128.628h.004c1.896 0 3.831-.663 5.442-1.866c1.431-1.066 1.713-2.18 1.699-2.929c-.02-.938-.506-1.882-1.391-2.728c2.23-1.332 2.939-2.986 2.112-4.927"/>
      <ellipse cx="11.242" cy="42.42" fill="#ed307c" opacity=".48" rx="7.928" ry="6.462"/>
      <path fill="#ed307c" d="M60.65 43.24c0 3.571-3.549 6.462-7.927 6.462c-4.379 0-7.93-2.891-7.93-6.462c0-3.572 3.551-6.466 7.93-6.466c4.378 0 7.927 2.894 7.927 6.466" opacity=".48"/>
      <path fill="#633d19" d="M25.23 12.968c-5.951-.411-11.346 2.028-15.08 6.66c-1.622 2.01 1.223 4.89 2.86 2.86c3.134-3.887 7.215-5.822 12.221-5.475c2.605.179 2.588-3.867 0-4.045m14.079 0c5.95-.411 11.346 2.028 15.08 6.66c1.621 2.01-1.223 4.89-2.86 2.86c-3.134-3.887-7.215-5.822-12.221-5.475c-2.605.179-2.587-3.867 0-4.045M28.886 32.33c-.225 0-4.333-1.576-8.48-1.576c-3.705 0-7.442 1.576-8.481 1.576c-.9 0-1.236-1.043-.691-1.667c4.961-5.728 13.378-5.728 18.344 0c.541.624.205 1.667-.692 1.667m25.019 0c-.226 0-4.333-1.576-8.48-1.576c-3.705 0-7.441 1.576-8.48 1.576c-.9 0-1.236-1.043-.691-1.667c4.961-5.728 13.379-5.728 18.344 0c.54.624.204 1.667-.693 1.667"/>
  </svg>`,
    mobileMinify: false,

 },
  //用于设置图片预览插件的配置项
  imagePreview: {
    showProgress: true,
    infinite: true,
    hideOnClickModal: true,
  },

  // 默认关闭 markdown 图表支持（开启会增加一定的构建耗时）
  mermaid: false,

  // 页脚
  footer: [
    // version: true,
    // version: false,  //不想显示主题版本也可主动关闭
    // copyright: 'MIT License | shuyin', 
    {
      version: false,
      copyright: {
        message: 'MIT License | shuyin',
        icon: `<svg width="128" height="128" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g fill="none">
          <path fill="#FF822D" d="M13.638 3.202a2.936 2.936 0 0 1 4.724 0a2.936 2.936 0 0 0 3.25 1.055a2.936 2.936 0 0 1 3.822 2.778a2.936 2.936 0 0 0 2.008 2.763a2.936 2.936 0 0 1 1.46 4.494a2.936 2.936 0 0 0 0 3.416a2.936 2.936 0 0 1-1.46 4.494a2.936 2.936 0 0 0-2.008 2.763a2.936 2.936 0 0 1-3.823 2.778a2.936 2.936 0 0 0-3.249 1.055a2.936 2.936 0 0 1-4.724 0a2.936 2.936 0 0 0-3.25-1.055a2.936 2.936 0 0 1-3.822-2.778a2.936 2.936 0 0 0-2.008-2.763a2.936 2.936 0 0 1-1.46-4.494a2.936 2.936 0 0 0 0-3.416a2.936 2.936 0 0 1 1.46-4.494a2.936 2.936 0 0 0 2.008-2.763a2.936 2.936 0 0 1 3.823-2.778a2.936 2.936 0 0 0 3.249-1.055Z"/>
          <path fill="#FCD53F" d="M25.062 21.232c-2.89 5.005-9.29 6.72-14.294 3.83c-5.005-2.89-6.72-9.29-3.83-14.294c2.89-5.005 9.29-6.72 14.294-3.83c5.005 2.89 6.72 9.29 3.83 14.294Z"/>
      </g>  </svg>`
      },

      icpRecord: {
        name: '豫ICP备19011724号',
        link: 'https://beian.miit.gov.cn/'
      },
      securityRecord: {
        name: '公网安备xxxxx',
        link: 'https://www.beian.gov.cn/portal/index.do'
      },
    }],


  // 主题色修改
  themeColor: 'el-blue',            //'vp-default'  |  vp-green   |  el-blue

  //设置回到顶部，默认开启
  backToTop: {
    // 自定义触发高度
    top: 450,
    // 自定义图标
    icon: '🚀'
  },

  //是否开启深色模式过渡动画     默认开启    
  darkTransition: true,

  //用于控制文章底部按钮，点击按钮会在按钮下方渲染一个自定义的html内容
  // buttonAfterArticle: false   //设置为 false 时，不展示
  buttonAfterArticle: {
    openTitle: '赞赏',
    closeTitle: '下次一定',
    content: '<img src="./wiexin">',
    icon: 'aliPay'
  },

  // 友链
  friend: [
    {
      nickname: '粥里有勺糖',
      des: '你的指尖用于改变世界的力量',
      avatar:
        'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030~fmt.webp',
      url: 'https://sugarat.top',
    },
    {
      nickname: 'Vitepress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar:
        'https://vitepress.dev/vitepress-logo-large.webp',
      url: 'https://vitepress.dev/',
    },
  ],
  // 公告
  popover: {
    title: '📢 广而周知 📢',
    body: [
      { type: 'text', content: '👇公众号👇---👇 微信 👇' },
      {
        type: 'image',
        src: '/weixin.png',
        alt: '杨树银微信二维码'
      },
      {
        type: 'text',
        content: '欢迎大家加群&私信交流'
      },
      {
        type: 'text',
        content: '文章首/文尾有群二维码',
        style: 'padding-top:0'
      },
      {
        type: 'button',
        content: '作者博客',
        link: '#',
      },
      {
        type: 'button',
        content: '加群交流',
        props: {
          type: 'success'
        },
        link: '#',
      }
    ],
    duration: -1,       //-1   0
    mobileMinify: false,
  },
})

export { blogTheme }
```

---

## 首页配置

首页由 `docs/index.md` 的 frontmatter 控制。

### 完整首页示例

```markdown
---
layout: home
blog:
  name: '我的技术博客'
  motto: 记录学习，分享成长
  inspiring:
    - 代码改变世界
    - 保持好奇心
    - 每天进步一点点
  pageSize: 6
  avatarMode: card         # card | split
  minScreenAvatar: true    # 移动端显示头像
  analysis:
    articles:
      title: ['博客文章', '月更新', '周更新']
---

这里写首页下方的自定义内容（可选）
```

### 首页各区域说明

```
┌─────────────────────────────────────────┐
│  头像 |  名字                            │
│        |  座右铭                         │
│        |  灵感语录（自动切换）             │
├─────────────────────────────────────────┤
│  文章数 | 月更新 | 周更新   │  精选文章   │
├─────────────────────────────────────────┤
│  文章列表（分页）           │  标签云     │
│  - 标题 + 描述 + 封面 + 日期 │            │
│  - ...                      │            │
└─────────────────────────────────────────┘
```

### avatarMode 对比

| 模式 | 效果 |
|------|------|
| `card`（默认） | 头像在信息卡片内，紧凑布局 |
| `split` | 头像与文字分离，更宽敞 |

---

## 文章写作规范

### 文件存放

文章放在 `docs/posts/` 下，按分类建子目录：

```
docs/posts/
├── frontEnd/
│   ├── 2024-01-vue3.md
│   └── 2024-02-react.md
├── backEnd/
│   └── 2024-03-nodejs.md
└── devOps/
    └── 2024-04-docker.md
```

### 完整 frontmatter 参考

```markdown
---
# ====== 基本信息 ======
title: VitePress + sugar-blog 搭建技术博客
date: 2024-03-15 10:00:00
author: 你的名字

# ====== 展示控制 ======
description: 从零开始搭建一个功能完善的技术博客
cover: https://example.com/cover.png    # 封面图（不设置则取文章第一张图）
hiddenCover: false                       # 文章页是否隐藏封面
hidden: false                            # 是否在首页列表隐藏

# ====== 分类 ======
tags:
  - VitePress
  - 博客
  - 教程
categories:
  - 前端

# ====== 排序与展示 ======
sticky: 1           # 精选文章（值越大越靠前）
top: 1              # 首页置顶（值越小越靠前）
recommend: 1        # 侧边推荐列表排序

# ====== 功能开关 ======
readingTime: true   # 显示阅读时间
comment: true       # 开启评论
publish: true       # 是否发布（false 则完全隐藏）

# ====== 文章底部按钮 ======
buttonAfterArticle:
  openTitle: 投币
  closeTitle: 下次一定
  content: '<img src="/reward.png">'
  icon: aliPay       # aliPay | wechatPay | 自定义 SVG
---

# 文章正文标题

正文内容...
```

### 各字段效果对照

| 字段 | 首页列表 | 文章页 | 侧边栏 |
|------|---------|--------|--------|
| `title` | ✅ 显示标题 | ✅ | ✅ |
| `description` | ✅ 显示描述 | — | — |
| `cover` | ✅ 显示封面 | ✅ 头部封面 | — |
| `hidden: true` | ❌ 不显示 | ✅ 正常访问 | ✅ |
| `publish: false` | ❌ 不显示 | ✅ 正常访问 | ❌ |
| `sticky` | ✅ 精选区 | — | — |
| `top` | ✅ 置顶 | — | — |

---

## 标签与分类系统

### 在文章中设置

```markdown
---
tags:
  - JavaScript
  - TypeScript
  - 前端
categories:
  - 编程语言
---
```

### 标签自动聚合

sugar-blog 会自动：
1. 在首页右侧生成**标签云**
2. 点击标签跳转到对应文章列表
3. 标签数量越多，显示越大

### 自定义标签展示

```ts
// blog-theme.ts
const blogTheme = getThemeConfig({
  homeTags: {
    title: '🏷️ 热门标签',
    limit: 15,              // 最多显示 15 个
    showCount: true,         // 显示每标签文章数
    sort: 'desc',            // desc 降序 / asc 升序 / normal 不排序
  }
})
```

### 建议的标签体系

```
技术标签：JavaScript, TypeScript, Vue, React, Node.js, Docker...
主题标签：教程, 笔记, 面试, 源码, 性能优化, 架构...
状态标签：进行中, 已完结, 草稿
```

---

## 搜索功能

sugar-blog 内置基于 [pagefind](https://pagefind.app/) 的离线全文搜索，**默认开启**。

### 配置选项

```ts
// blog-theme.ts
const blogTheme = getThemeConfig({
  // 方式一：使用 pagefind（默认）
  search: {
    btnPlaceholder: '搜索',
    placeholder: '搜索文章...',
    emptyText: '没有找到相关内容',
    heading: '共 {{searchResult}} 条搜索结果',
    showDate: true,           // 搜索结果显示日期
  },

  // 方式二：关闭搜索
  // search: false,

  // 方式三：使用 VitePress 内置搜索（minisearch）
  // 需要在 config.ts 中配置：
  // themeConfig: { search: { provider: 'local' } }
})
```

### 搜索方案对比

| 方案 | 优点 | 缺点 |
|------|------|------|
| **pagefind**（默认） | 离线可用，中文支持好 | 构建时生成索引 |
| **minisearch**（官方） | 无需额外依赖 | 中文分词较弱 |
| **algolia** | 搜索体验最好 | 需申请，依赖外部服务 |

### 接入 Algolia（可选）

```ts
// config.ts
export default defineConfig({
  themeConfig: {
    search: {
      provider: 'algolia',
      options: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_API_KEY',
        indexName: 'YOUR_INDEX_NAME',
        placeholder: '搜索文档',
      }
    }
  }
})
```

---

## 评论系统

sugar-blog 支持 Giscus 和 Artalk 两种评论系统。

### 方式一：Giscus（推荐，基于 GitHub Discussions）

**前置步骤：**
1. 去 [giscus.app](https://giscus.app/) 生成配置
2. 确保仓库开启了 Discussions 功能
3. 安装 Giscus GitHub App

**配置：**

```ts
// blog-theme.ts
const blogTheme = getThemeConfig({
  comment: {
    type: 'giscus',
    options: {
      repo: 'your-username/your-repo',
      repoId: 'R_xxxxx',
      category: 'Announcements',
      categoryId: 'DIC_xxxxx',
      mapping: 'pathname',
      inputPosition: 'top',
      lang: 'zh-CN',
    },
    // 可选配置
    label: '评论',
    mobileMinify: true,       # 移动端最小化按钮
  }
})
```

### 方式二：Artalk（自托管）

```ts
const blogTheme = getThemeConfig({
  comment: {
    type: 'artalk',
    options: {
      server: 'https://your-artalk-server.com',
      site: '你的博客',
    }
  }
})
```

### 单篇文章控制评论

```markdown
---
comment: false    # 这篇文章关闭评论
---
```

---

## 部署到 GitHub Pages

### 方式一：GitHub Actions（推荐）

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy Blog

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: pnpm/action-setup@v4
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
      - run: pnpm install
      - run: pnpm build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### 配置 base 路径

如果部署到 `https://username.github.io/repo-name/`：

```ts
// config.ts
export default defineConfig({
  base: '/repo-name/',    // 仓库名
  // ...
})
```

如果是 `https://username.github.io/`（用户主页仓库），则不需要设置 base。

### 部署步骤

```bash
# 1. 创建 GitHub 仓库
# 2. 推送代码
git init
git add .
git commit -m "init blog"
git remote add origin https://github.com/username/blog.git
git push -u origin main

# 3. 去仓库 Settings → Pages → Source 选择 "GitHub Actions"
# 4. 推送后自动部署
```

---

## 常见问题

### Q: 如何新建文章？

```bash
# 直接在 posts/ 下创建 md 文件
touch docs/posts/frontend/2024-05-new-post.md
```

添加 frontmatter：

```markdown
---
title: 文章标题
date: 2024-05-11
tags:
  - 标签1
  - 标签2
---

# 文章标题

正文...
```

### Q: 如何隐藏某篇文章？

```markdown
---
hidden: true        # 首页不显示，但可通过链接访问
# 或
publish: false      # 首页 + 侧边栏都不显示
---
```

### Q: 如何置顶文章？

```markdown
---
top: 1              # 置顶，值越小越靠前
# 或
sticky: 1           # 精选文章，显示在首页右侧
---
```

### Q: 文章日期不显示或显示错误？

默认从 Git 提交时间取，手动指定：

```markdown
---
date: 2024-05-11 10:00:00
---
```

### Q: 如何自定义主题样式？

创建 `docs/.vitepress/theme/index.ts`：

```ts
import Theme from '@sugarat/theme'
import './custom.css'

export default Theme
```

创建 `docs/.vitepress/theme/custom.css`：

```css
/* 覆盖主题变量 */
:root {
  --blog-theme-color: #1e90ff;
  /* 更多变量见主题文档 */
}
```

### Q: 如何升级主题？

```bash
pnpm add @sugarat/theme@latest
pnpm add vitepress@latest
```

### Q: pagefind 搜索构建太慢？

手动安装 pagefind 依赖：

```bash
pnpm add pagefind -D
```

或关闭 pagefind，改用官方搜索：

```ts
// blog-theme.ts
const blogTheme = getThemeConfig({
  search: false
})

// config.ts
export default defineConfig({
  themeConfig: {
    search: { provider: 'local' }
  }
})
```

---

## 下一步

- 👉 [主教程：首页设置 + 导航栏](./index.md)
- 👉 [侧边导航完全指南](./sidebar-guide.md)
- 👉 [博客方案对比](./blog-comparison.md)
- 📖 [sugar-blog 官方文档](https://theme.sugarat.top/)
- 📦 [sugar-blog GitHub](https://github.com/ATQQ/sugar-blog)
