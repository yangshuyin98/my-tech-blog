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

### 关键文件

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
  // ====== 作者信息 ======
  author: '你的名字',

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
  },

  // ====== 精选文章 ======
  hotArticle: {
    title: '🔥 精选文章',
    nextText: '换一组',
    pageSize: 9,
  },

  // ====== 首页标签 ======
  homeTags: {
    title: '🏷 标签',
    limit: 20,            // 超出部分折叠
    showCount: true,       // 显示文章数量
    sort: 'desc',          // 按数量降序
  },

  // ====== 搜索 ======
  search: {
    btnPlaceholder: '搜索',
    placeholder: '搜索文章...',
    emptyText: '没有找到相关内容',
    heading: '共 {{searchResult}} 条搜索结果',
  },

  // ====== 评论（可选） ======
  // comment: {
  //   type: 'giscus',
  //   options: {
  //     repo: 'your/repo',
  //     repoId: 'xxx',
  //     category: 'Announcements',
  //     categoryId: 'xxx',
  //   }
  // },

  // ====== 文章默认配置 ======
  article: {
    readingTime: true,      // 显示预计阅读时间
    hiddenCover: false,     // 是否默认隐藏封面
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
