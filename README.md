# 我的博客

基于 [VitePress](https://vitepress.dev/) + [@sugarat/theme](https://theme.sugarat.top/) 搭建的技术博客。

## 快速开始

```bash
# 安装 pnpm（如未安装）
npm i -g pnpm

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建
pnpm build

# 预览产物
pnpm serve
```

## 目录结构

```
my-tech-blog/
├── docs/                          # 博客内容目录
│   ├── .vitepress/                # 配置文件目录
│   │   ├── config.mts             # VitePress 核心配置（导航、侧边栏、base 路径）
│   │   ├── blog-theme.ts          # sugar-blog 主题配置（作者、评论、搜索、RSS）
│   │   └── theme/                 # 自定义主题样式与组件
│   ├── public/                    # 静态资源（图片、favicon 等，原样输出到构建产物）
│   ├── posts/                     # 博客文章目录（首页自动展示）
│   ├── guide/                     # 教程文档目录
│   │   ├── vitepress-tutorial/    #   VitePress 教程系列
│   │   ├── markdown嵌入式内容修复/  #   Markdown 嵌入修复系列
│   │   ├── sugar-blog-tutorial/   #   sugar-blog 搭建系列
│   │   ├── blog-ops/              #   博客深度运维系列
│   │   └── sugar-blog-source/     #   源码分析系列
│   ├── sop/                       # SOP 文档目录
│   ├── versions/                  # 版本记录
│   ├── index.md                   # 首页
│   ├── about.md                   # 关于页面
│   ├── archives.md                # 归档页面
│   └── CHANGELOG.md               # 更新日志
├── .github/workflows/deploy.yml   # GitHub Actions 部署配置
├── package.json
└── pnpm-lock.yaml
```

## 新增内容指南

### 添加博客文章

博客文章放在 `docs/posts/` 目录下，首页会自动展示。

1. 在 `docs/posts/` 下新建 `.md` 文件
2. 按规范编写 [frontmatter 标头](#frontmatter-标头规范)
3. 写正文内容

**完整标头示例：**

```yaml
---
# ====== 基本信息 ======
title: 文章标题
date: 2024-03-15 10:00:00
author: yang

# ====== 展示控制 ======
description: 文章摘要（用于 SEO 和首页展示）
cover: ./cover.jpg          # 封面图路径（不设置则取文章第一张图）
hiddenCover: false          # 文章页是否隐藏封面
hidden: false               # 是否在首页列表隐藏

# ====== 分类 ======
tags: ["标签1", "标签2"]
categories: ["分类名"]

# ====== 排序与展示 ======
sticky: 1                   # 精选文章（值越大越靠前）
top: 1                      # 首页置顶（值越小越靠前）
recommend: 1                # 侧边推荐列表排序

# ====== 功能开关 ======
readingTime: true           # 显示阅读时间
comment: true               # 开启评论
publish: true               # 是否发布（false 则完全隐藏）

# ====== 文章底部按钮 ======
buttonAfterArticle:
  openTitle: 投币
  closeTitle: 下次一定
  content: '<img src="/reward.png">'
  icon: aliPay              # aliPay | wechatPay | 自定义 SVG
---

# 文章正文标题

正文内容...
```

**最简标头（博客文章）：**

```yaml
---
title: 我的文章
date: 2024-03-15
tags: ["随笔"]
---

# 正文标题

内容...
```

### 添加教程系列

教程文档放在 `docs/guide/` 下，每个系列一个子文件夹。

1. 在 `docs/guide/` 下新建文件夹，如 `docs/guide/my-series/`
2. 创建 `index.md` 概览页，使用 `<PageList />` 自动生成文章列表
3. 创建系列文章，文件名按序号排列
4. 在 `docs/.vitepress/config.mts` 的 `nav` 中添加导航入口

**index.md 概览页模板：**

```markdown
---
title: 系列标题
description: 系列简介
---

# 系列标题

系列介绍文字...

## 文章列表

<PageList prefix="/guide/my-series" />
```

**系列文章模板：**

```markdown
---
order: 1
title: ① 第一篇文章
description: 文章摘要
date: 2024-03-15
---

# ① 第一篇文章

正文内容...
```

> `order` 字段控制 `<PageList />` 中的显示顺序，从小到大排列。

### 添加导航栏入口

编辑 `docs/.vitepress/config.mts`，在 `themeConfig.nav` 数组中添加：

```typescript
// 单个链接
{ text: '关于', link: '/about' }

// 下拉菜单
{
  text: '教程',
  items: [
    { text: '📘 系列A', link: '/guide/series-a/' },
    { text: '🔧 系列B', link: '/guide/series-b/' },
  ]
}
```

### 添加独立页面

1. 在 `docs/` 下新建 `.md` 文件（如 `docs/links.md`）
2. 按规范编写 frontmatter
3. 在导航栏添加对应链接

**独立页面模板：**

```markdown
---
layout: page
title: 页面标题
sidebar: false
---

# 页面标题

内容...
```

## Frontmatter 标头规范

### 博客文章（posts/）

| 字段 | 必填 | 类型 | 说明 |
|------|------|------|------|
| `title` | ✅ | `string` | 文章标题 |
| `date` | ✅ | `string` | 发布日期，格式 `YYYY-MM-DD` 或 `YYYY-MM-DD HH:mm:ss` |
| `tags` | ✅ | `string[]` | 标签，用于首页标签栏和文章分类 |
| `description` | 推荐 | `string` | 文章摘要，用于 SEO 和列表展示 |
| `cover` | 可选 | `string` | 封面图路径，不设置取文章第一张图 |
| `author` | 可选 | `string` | 作者名，默认取 `blog-theme.ts` 中的 `author` |
| `categories` | 可选 | `string[]` | 分类 |
| `sticky` | 可选 | `number` | 精选文章排序（值越大越靠前） |
| `top` | 可选 | `number` | 首页置顶排序（值越小越靠前） |
| `recommend` | 可选 | `number` | 侧边推荐排序 |
| `hiddenCover` | 可选 | `boolean` | 文章页隐藏封面，默认 `false` |
| `hidden` | 可选 | `boolean` | 首页列表隐藏，默认 `false` |
| `publish` | 可选 | `boolean` | 是否发布，`false` 完全隐藏，默认 `true` |
| `readingTime` | 可选 | `boolean` | 显示阅读时间，默认 `true` |
| `comment` | 可选 | `boolean` | 开启评论，默认 `true` |
| `buttonAfterArticle` | 可选 | `object` | 文章底部打赏按钮 |

### 教程文章（guide/）

| 字段 | 必填 | 类型 | 说明 |
|------|------|------|------|
| `title` | ✅ | `string` | 文章标题 |
| `order` | ✅ | `number` | 排序序号，控制 `<PageList />` 展示顺序 |
| `description` | 推荐 | `string` | 文章摘要 |
| `date` | 可选 | `string` | 发布日期 |
| `tag` | 可选 | `string[]` | 标签（注意：教程系列用 `tag`，博客用 `tags`） |

### 系列概览页（guide/*/index.md）

| 字段 | 必填 | 类型 | 说明 |
|------|------|------|------|
| `title` | ✅ | `string` | 系列标题 |
| `description` | 推荐 | `string` | 系列简介 |
| `icon` | 可选 | `string` | 图标名 |
| `order` | 可选 | `number` | 系列间排序 |

### 独立页面

| 字段 | 必填 | 类型 | 说明 |
|------|------|------|------|
| `title` | ✅ | `string` | 页面标题 |
| `layout` | 可选 | `string` | 布局类型：`page`（无博客侧边栏）、`home`（首页） |
| `sidebar` | 可选 | `boolean` | 是否显示侧边栏，默认 `true` |

## 图片使用规范

- 静态图片放在 `docs/public/` 目录下，引用时用绝对路径 `/image.png`
- 文章专属图片放在文章同目录下，引用时用相对路径 `./image.png`
- 封面图通过 frontmatter `cover` 字段指定

## GitHub Pages 部署

① 开启 GitHub Pages 的 GitHub Actions 部署支持

② 项目已包含 `.github/workflows/deploy.yml`

③ `docs/.vitepress/config.mts` 中的 `base` 配置：

- 项目名为 `username.github.io` → 保持默认 `/`
- 其他项目 → 改为 `"/仓库名/"`

④ 推送到 `master` 分支即可自动部署

> 部署配置已包含 `.nojekyll` 步骤，防止 Jekyll 处理改变文件结构导致链接 404。

## 更多文档

- 📖 [内容编写完整规范](/guide/contributing-guide/) — 详细的目录结构、frontmatter 字段、图片规范等
- 📘 [VitePress 教程](/guide/vitepress-tutorial/) — VitePress 从入门到实战
- 🍬 [sugar-blog 搭建教程](/guide/sugar-blog-tutorial/) — 博客搭建全流程
- 🔧 [博客深度运维与运营](/guide/blog-ops/) — SEO、评论、统计等运维指南
