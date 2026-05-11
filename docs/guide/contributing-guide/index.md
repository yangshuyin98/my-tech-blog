---
title: 内容编写完整规范
description: 博客内容目录结构、文件夹创建、frontmatter 标头编写、图片引用等完整规范
order: 1
---

# 📖 内容编写完整规范

本文档是博客内容编写的**唯一参考**，涵盖从新建文件夹到发布文章的全部流程。

---

## 一、目录结构与内容类型

```
docs/
├── posts/                     # 📝 博客文章（首页自动展示）
│   └── my-article.md          #   单文件即可，无需子文件夹
├── guide/                     # 📘 教程系列（每个系列一个子文件夹）
│   ├── my-series/             #   系列文件夹
│   │   ├── index.md           #     系列概览页（必需）
│   │   ├── 01-第一篇.md        #     系列文章
│   │   └── 02-第二篇.md
│   └── another-series/
│       ├── index.md
│       └── ...
├── sop/                       # 📋 SOP 文档
├── versions/                  # 📦 版本记录
├── about.md                   # 关于页面
├── archives.md                # 归档页面
├── CHANGELOG.md               # 更新日志
└── index.md                   # 首页
```

**三种内容类型**：

| 类型 | 目录 | 是否出现在首页 | 是否需要文件夹 |
|------|------|----------------|----------------|
| 博客文章 | `posts/` | ✅ 自动展示 | ❌ 单文件即可 |
| 教程系列 | `guide/` | ❌ | ✅ 每个系列一个子文件夹 |
| 独立页面 | `docs/` 根目录 | ❌ | ❌ 单文件即可 |

---

## 二、添加博客文章（posts/）

### 步骤

1. 在 `docs/posts/` 下新建 `.md` 文件
2. 编写 frontmatter 标头
3. 编写正文
4. **无需修改任何配置文件**，首页自动展示

### 文件命名

- 使用有意义的英文名或中文，如 `vitepress-deploy.md`、`我的第一篇博客.md`
- 文件名不影响页面标题，标题由 frontmatter `title` 决定

### frontmatter 标头

**最简格式**（大多数文章只需这些）：

```yaml
---
title: 我的文章标题
date: 2024-03-15
tags: ["标签1", "标签2"]
---
```

**完整格式**（所有可用字段）：

```yaml
---
# ====== 基本信息（必填） ======
title: 文章标题
date: 2024-03-15 10:00:00      # 日期或日期+时间
author: yang                    # 不填则取 blog-theme.ts 的 author

# ====== 展示控制 ======
description: 文章摘要，用于 SEO 和首页展示
cover: ./cover.jpg              # 封面图（不设置则取文章第一张图）
hiddenCover: false              # 文章页是否隐藏封面
hidden: false                   # 是否在首页列表隐藏

# ====== 分类 ======
tags: ["标签1", "标签2"]        # 标签数组
categories: ["分类名"]          # 分类数组

# ====== 排序与展示 ======
sticky: 1                       # 精选文章（值越大越靠前）
top: 1                          # 首页置顶（值越小越靠前）
recommend: 1                    # 侧边推荐列表排序

# ====== 功能开关 ======
readingTime: true               # 显示阅读时间
comment: true                   # 开启评论
publish: true                   # 是否发布（false 则完全隐藏）

# ====== 文章底部按钮（可选） ======
buttonAfterArticle:
  openTitle: 投币
  closeTitle: 下次一定
  content: '<img src="/reward.png">'
  icon: aliPay                  # aliPay | wechatPay | 自定义 SVG
---
```

### 字段速查

| 字段 | 必填 | 类型 | 默认值 | 说明 |
|------|------|------|--------|------|
| `title` | ✅ | `string` | — | 文章标题，显示在页面和列表中 |
| `date` | ✅ | `string` | — | 发布日期，`YYYY-MM-DD` 或 `YYYY-MM-DD HH:mm:ss` |
| `tags` | ✅ | `string[]` | — | 标签，用于首页标签栏过滤 |
| `description` | 推荐 | `string` | 自动截取正文 | SEO 摘要和列表展示 |
| `author` | 可选 | `string` | `blog-theme.ts` 配置 | 作者名 |
| `categories` | 可选 | `string[]` | — | 分类 |
| `cover` | 可选 | `string` | 文章第一张图 | 封面图路径 |
| `hiddenCover` | 可选 | `boolean` | `false` | 文章页隐藏封面 |
| `hidden` | 可选 | `boolean` | `false` | 首页列表隐藏 |
| `publish` | 可选 | `boolean` | `true` | 设为 `false` 完全隐藏 |
| `sticky` | 可选 | `number` | — | 精选文章排序，值越大越靠前 |
| `top` | 可选 | `number` | — | 首页置顶排序，值越小越靠前 |
| `recommend` | 可选 | `number` | — | 侧边推荐排序 |
| `readingTime` | 可选 | `boolean` | `true` | 显示阅读时间 |
| `comment` | 可选 | `boolean` | `true` | 开启评论 |
| `buttonAfterArticle` | 可选 | `object` | — | 打赏按钮配置 |

---

## 三、添加教程系列（guide/）

### 步骤

1. **创建系列文件夹**：在 `docs/guide/` 下新建文件夹
2. **创建概览页**：新建 `index.md`，使用 `<PageList />` 自动生成文章列表
3. **创建系列文章**：文件名按序号排列
4. **添加导航入口**：编辑 `config.mts` 的 `nav` 数组

### 3.1 创建系列文件夹

```
docs/guide/
└── my-new-series/          ← 新建文件夹
    ├── index.md            ← 概览页（必需）
    ├── 01-第一篇.md         ← 系列文章
    ├── 02-第二篇.md
    └── 03-第三篇.md
```

**文件夹命名规则**：
- 使用小写英文 + 短横线，如 `vitepress-tutorial`、`blog-ops`
- 也可以使用中文，如 `markdown嵌入式内容修复`
- 文件夹名会出现在 URL 中：`/guide/my-new-series/`

### 3.2 编写概览页（index.md）

```yaml
---
title: 我的系列标题
description: 系列简介
---

# 我的系列标题

系列介绍文字...

## 文章列表

<PageList prefix="/guide/my-new-series" />
```

**`<PageList />` 组件参数**：

| 参数 | 必填 | 说明 | 示例 |
|------|------|------|------|
| `prefix` | ✅ | 系列路由前缀，对应文件夹路径 | `"/guide/my-series"` |
| `sortBy` | 可选 | 排序字段，默认 `order` | `"date"` |
| `sortOrder` | 可选 | 排序方向，默认 `asc` | `"desc"` |

> **注意**：`prefix` 路径末尾**不加** `/`，写 `/guide/my-series` 而非 `/guide/my-series/`。

按日期倒序排列的示例：

```markdown
<PageList prefix="/guide/my-series" sortBy="date" sortOrder="desc" />
```

### 3.3 编写系列文章

**标准模板**：

```yaml
---
order: 1
title: ① 第一篇文章标题
description: 文章摘要
date: 2024-03-15
---

# ① 第一篇文章标题

正文内容...
```

**frontmatter 字段**：

| 字段 | 必填 | 类型 | 说明 |
|------|------|------|------|
| `order` | ✅ | `number` | 排序序号，控制 `<PageList />` 展示顺序，从小到大 |
| `title` | ✅ | `string` | 文章标题，建议加序号前缀如 `①` `②` |
| `description` | 推荐 | `string` | 文章摘要 |
| `date` | 可选 | `string` | 发布日期 |
| `tag` | 可选 | `string[]` | 标签（⚠️ 教程用 `tag`，博客用 `tags`） |

> ⚠️ **重要**：教程文章用 `tag`（单数），博客文章用 `tags`（复数），不要混淆。

### 3.4 添加导航栏入口

编辑 `docs/.vitepress/config.mts`，在 `themeConfig.nav` 中添加：

```typescript
nav: [
  // ... 已有导航项
  {
    text: '教程',
    items: [
      // 已有系列...
      { text: '📗 我的系列', link: '/guide/my-new-series/' },  // ← 新增
    ]
  },
]
```

**命名规范**：emoji 前缀 + 系列名称，与其他系列保持风格一致。

---

## 四、添加独立页面

### 步骤

1. 在 `docs/` 下新建 `.md` 文件
2. 编写 frontmatter
3. 在 `config.mts` 导航栏添加链接

### 模板

**普通页面**（无博客侧边栏）：

```yaml
---
layout: page
title: 页面标题
sidebar: false
---

# 页面标题

内容...
```

**带侧边栏的页面**：

```yaml
---
title: 页面标题
---

# 页面标题

内容...
```

**首页布局**：

```yaml
---
layout: home
blog:
  name: '博客名称'
  motto: '座右铭'
  inspiring:
    - 格言1
    - 格言2
  pageSize: 6
---
```

### 字段说明

| 字段 | 类型 | 说明 |
|------|------|------|
| `layout` | `string` | `page`（普通页面）、`home`（首页布局） |
| `title` | `string` | 页面标题 |
| `sidebar` | `boolean` | 是否显示侧边栏，默认 `true` |
| `sticky` | `number` | 精选排序 |

---

## 五、图片引用规范

### 三种方式

| 方式 | 路径 | 适用场景 |
|------|------|----------|
| 全局静态图 | `/image.png` | 放在 `docs/public/` 下的公共图片 |
| 文章同目录相对路径 | `./image.png` | 文章专属图片，放在文章同目录下 |
| 外部链接 | `https://...` | 引用外部 CDN 图片 |

### 具体做法

**1. 全局静态图片**（logo、favicon、打赏码等）

```
docs/public/
├── logo.png          ← 引用: /logo.png
├── favicon.ico       ← 引用: /favicon.ico
└── reward.png        ← 引用: /reward.png
```

**2. 文章专属图片**

```
docs/posts/
└── my-article/
    ├── index.md      ← 引用: ./cover.jpg
    └── cover.jpg
```

或者文章和图片平级：

```
docs/posts/
├── my-article.md     ← 引用: ./my-article-cover.jpg
└── my-article-cover.jpg
```

**3. 封面图**

通过 frontmatter `cover` 字段指定：

```yaml
---
cover: ./cover.jpg      # 相对路径
# 或
cover: /images/cover.jpg  # 全局路径
---
```

---

## 六、文件命名规范

| 位置 | 规范 | 示例 |
|------|------|------|
| 博客文章文件名 | 任意英文/中文 | `vitepress-deploy.md`、`我的随笔.md` |
| 教程系列文件夹 | 小写英文+短横线 | `blog-ops`、`sugar-blog-tutorial` |
| 教程文章文件名 | 序号前缀+标题 | `01-项目初始化.md`、`② 侧边栏指南.md` |
| 概览页 | 固定 `index.md` | `index.md` |
| 独立页面 | 英文小写 | `about.md`、`links.md` |
| 图片文件 | 小写英文+短横线 | `cover.jpg`、`architecture-diagram.png` |

---

## 七、完整操作清单

### 新增博客文章

- [ ] 在 `docs/posts/` 下创建 `.md` 文件
- [ ] 编写 `title`、`date`、`tags` 三个必填 frontmatter 字段
- [ ] （推荐）添加 `description` 字段
- [ ] 编写正文
- [ ] 本地预览 `pnpm dev` 确认展示效果

### 新增教程系列

- [ ] 在 `docs/guide/` 下创建系列文件夹
- [ ] 创建 `index.md` 概览页，包含 `<PageList prefix="/guide/xxx" />`
- [ ] 创建系列文章，每篇设置 `order` + `title` + `description`
- [ ] 在 `config.mts` 的 `nav` 中添加导航入口
- [ ] 本地预览确认

### 新增独立页面

- [ ] 在 `docs/` 下创建 `.md` 文件
- [ ] 设置 `layout: page` + `sidebar: false`（如不需要侧边栏）
- [ ] 在 `config.mts` 的 `nav` 中添加链接
- [ ] 本地预览确认

### 发布前检查

- [ ] `pnpm build` 构建无报错
- [ ] 文章 frontmatter 格式正确（YAML 语法、数组用 `["a", "b"]`）
- [ ] 图片路径正确（相对/绝对路径无误）
- [ ] 导航链接指向正确
- [ ] `publish: false` 的草稿文章不会出现在线上

---

## 八、常见问题

### Q: frontmatter 的 `tags` 和 `tag` 有什么区别？

**博客文章**（`posts/`）用 **`tags`**（复数，数组）：
```yaml
tags: ["VitePress", "教程"]
```

**教程文章**（`guide/`）用 **`tag`**（单数，数组）：
```yaml
tag:
  - sugar-blog
  - 源码分析
```

两者都是数组格式，只是字段名不同，由 sugar-blog 主题决定。

### Q: 文章不在首页显示怎么办？

检查以下几项：
1. 文件是否放在 `docs/posts/` 目录下
2. `publish` 是否设为 `false`（改为 `true`）
3. `hidden` 是否设为 `true`（改为 `false`）
4. `date` 格式是否正确

### Q: `<PageList />` 没有显示文章？

1. 检查 `prefix` 路径是否正确（不带末尾 `/`）
2. 确认文章有 `order` 字段
3. 确认文章和 `index.md` 在同一文件夹下

### Q: 图片显示 404？

1. 全局图片：确认放在 `docs/public/` 下，用 `/` 开头的绝对路径引用
2. 文章图片：确认图片与 `.md` 文件在同目录，用 `./` 相对路径引用
3. 构建后检查 `docs/.vitepress/dist/` 下是否有对应图片

### Q: 导航链接 404？

1. 确认 `link` 路径与文件路径对应（`/guide/my-series/` → `docs/guide/my-series/index.md`）
2. 本项目 `cleanUrls: false`，链接不需要加 `.html` 后缀，VitePress 会自动处理
3. `pnpm build` 后检查 `dist` 目录下是否有对应的 `.html` 文件
