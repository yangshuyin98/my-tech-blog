# VitePress Markdown 进阶技巧

> 你只用了 Markdown 10% 的能力。这篇把剩下 90% 补上。

---

## 目录

1. [自定义容器](#自定义容器)
2. [GitHub-flavored Alerts](#github-flavored-alerts)
3. [代码块进阶](#代码块进阶)
4. [代码组](#代码组)
5. [导入代码片段](#导入代码片段)
6. [文件嵌入](#文件嵌入)
7. [目录与锚点](#目录与锚点)
8. [数学公式](#数学公式)
9. [Emoji 与特殊语法](#emoji-与特殊语法)
10. [Frontmatter 完整参考](#frontmatter-完整参考)
11. [Markdown-it 插件扩展](#markdown-it-插件扩展)

---

## 自定义容器

### 基础容器

```markdown
::: info
信息提示框
:::

::: tip
小贴士
:::

::: warning
警告信息
:::

::: danger
危险操作警告
:::
```

效果：

> **INFO** 信息提示框
>
> **TIP** 小贴士
>
> **WARNING** 警告信息
>
> **DANGER** 危险操作警告

### 自定义标题

```markdown
::: danger 注意
这个操作不可逆！
:::

::: tip 小技巧
你可以自定义容器标题
:::
```

### 可折叠容器

```markdown
::: details 点击展开详情
这里是可以折叠的内容。
代码块也可以放进去：

```js
console.log('Hello!')
```
:::
```

默认展开：

```markdown
::: details 默认展开 {open}
这个容器默认是展开状态
:::
```

### 中文化容器标题

```ts
// config.ts
export default defineConfig({
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  }
})
```

---

## GitHub-flavored Alerts

VitePress 支持 GitHub 风格的提示框，写法更简洁：

```markdown
> [!NOTE]
> 需要注意的信息

> [!TIP]
> 有用的建议

> [!IMPORTANT]
> 关键信息

> [!WARNING]
> 需要立即关注的警告

> [!CAUTION]
> 可能的负面后果
```

### 容器 vs Alerts 对比

| 写法 | 适用场景 |
|------|---------|
| `::: tip` | 需要自定义标题、嵌套复杂内容 |
| `> [!TIP]` | 快速提示、简短内容、GitHub 兼容 |

---

## 代码块进阶

### 行高亮

````markdown
```js{2,4-5}
const a = 1      // 不高亮
const b = 2      // 高亮第 2 行
const c = 3      // 不高亮
const d = 4      // 高亮第 4-5 行
const e = 5      // 高亮
```
````

效果：第 2 行和第 4-5 行会有高亮背景。

### 行号

````markdown
```js {1,3-5}
// 显示行号，在 config 中全局开启：
// markdown: { lineNumbers: true }

const x = 1
const y = 2
const z = 3
```
````

全局开启行号：

```ts
// config.ts
export default defineConfig({
  markdown: {
    lineNumbers: true   // 所有代码块显示行号
  }
})
```

### 聚焦（Focus）

````markdown
```js
const a = 1
const b = 2  // [!code focus]
const c = 3
```
````

效果：`const b = 2` 高亮，其他行变暗。

### 差异高亮

````markdown
```diff
  const a = 1
- const b = 2  // 删除
+ const b = 3  // 新增
```
````

也可以用 `highlight` 语法：

````markdown
```js
const a = 1
const b = 2  // [!code --]
const b = 3  // [!code ++]
```
````

### 错误与警告标注

````markdown
```js
const a = 1
const b = 2  // [!code error]
const c = 3  // [!code warning]
```
````

### 语言标识

支持的语言很多，常用的：

```markdown
```js       JavaScript
```ts       TypeScript
```vue      Vue
```jsx      JSX
```tsx      TSX
```css      CSS
```scss     SCSS
```html     HTML
```md       Markdown
```json     JSON
```yaml     YAML
```bash     Bash / Shell
```sh       Shell
```python   Python
```go       Go
```rust     Rust
```sql      SQL
```docker   Dockerfile
```

---

## 代码组

多个代码块并排展示，适合多语言/多包管理器对比：

````markdown
::: code-group

```sh [pnpm]
pnpm add vitepress
```

```sh [yarn]
yarn add -D vitepress
```

```sh [npm]
npm install -D vitepress
```

```sh [bun]
bun add -D vitepress
```

:::
````

效果：Tab 切换不同包管理器的安装命令。

### 嵌套在其他容器中

```markdown
::: tip 安装方式
选择你的包管理器：

::: code-group
```sh [pnpm]
pnpm add vitepress
```
```sh [npm]
npm install -D vitepress
```
:::

:::
```

---

## 导入代码片段

从项目中导入代码文件，保持文档与代码同步：

### 基础用法

```markdown
<<< @/path/to/code.js
```

### 指定行范围

```markdown
<<< @/path/to/code.js{1-10}       // 第 1-10 行
<<< @/path/to/code.js{1,3-5,7}    // 第 1、3-5、7 行
<<< @/path/to/code.js{1-10:15-20} // 两个范围
```

### 高亮特定行

```markdown
<<< @/path/to/code.js{2}          // 高亮第 2 行
<<< @/path/to/code.js{2,4-6}      // 高亮第 2、4-6 行
```

### 指定语言

```markdown
<<< @/path/to/code{ts}            // 指定为 TypeScript
<<< @/path/to/config.json{json}   // 指定为 JSON
```

### 嵌入代码片段

```markdown
<!-- 嵌入文件的一部分 -->
<<< @/path/to/code.js#snippet-name
```

在代码文件中用注释标记片段：

```js
// @start: snippet-name
const important = '这部分会被嵌入'
// @end: snippet-name
```

### 实际应用

```markdown
## 配置示例

完整的配置文件：

<<< @/.vitepress/config.ts

其中搜索配置部分：

<<< @/.vitepress/config.ts{5-12}
```

### 导入远程代码

```markdown
<<< https://raw.githubusercontent.com/user/repo/main/file.js
```

---

## 文件嵌入

### 嵌入另一个 Markdown 文件

```
<!-- 完全嵌入 -->

&#60;!--@include: ./parts/intro.md--&#62;

<!-- 嵌入指定行 -->
&#60;!--@include: ./parts/intro.md{3-10}--&#62;

<!-- 嵌入区域 -->
&#60;!--@include: ./parts/intro.md#region--&#62;
```

在被嵌入文件中定义区域：

```markdown
<!-- #region intro -->
这部分内容会被嵌入
<!-- #endregion intro -->
```

### 实际应用

```
docs/
├── guide/
│   ├── index.md
│   └── shared/
│       ├── install.md      # 安装步骤（多处复用）
│       └── config.md       # 配置说明（多处复用）
└── api/
    └── index.md
```

```markdown
<!-- guide/index.md -->
# 快速开始

&#60;!--@include: ./shared/install.md--&#62;

## 配置

&#60;!--@include: ./shared/config.md--&#62;
```

---

## 目录与锚点

### 自动生成目录

```markdown
[[toc]]
```

在当前页面生成目录，基于 h2-h4 标题。

### 自定义锚点

```markdown
## 这是一个很长的标题 {#short-anchor}

点击这里 → [跳转](#short-anchor)
```

### 标题级别配置

```ts
// config.ts
export default defineConfig({
  markdown: {
    toc: { level: [2, 3] }   // 只显示 h2 和 h3
  }
})
```

---

## 数学公式

需要先安装插件：

```bash
pnpm add -D markdown-it-mathjax3
```

```ts
// config.ts
export default defineConfig({
  markdown: {
    math: true
  }
})
```

### 行内公式

```markdown
质能方程 $E = mc^2$ 是物理学中最著名的公式。
```

### 块级公式

```markdown
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

### 复杂公式

```markdown
$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}
\end{aligned}
$$
```

---

## Emoji 与特殊语法

### Emoji

```markdown
:tada: → 🎉
:100: → 💯
:rocket: → 🚀
:heart: → ❤️
:warning: → ⚠️
```

完整列表：[GitHub Emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs)

### 图片懒加载

```markdown
![图片](./image.png){loading=lazy}
```

### 自定义属性（markdown-it-attrs）

```markdown
这是一段 **加粗文字**{.custom-class}

一个 [链接](https://example.com){target=_blank}

一张 ![图片](./img.png){width=300}
```

### 目录结构展示

````markdown
```text
docs/
├── .vitepress/
│   └── config.ts
├── guide/
│   └── index.md
└── index.md
```
````

---

## Frontmatter 完整参考

### 页面级配置

```yaml
---
# 页面标题
title: 文章标题
description: 页面描述（用于 meta）

# 布局
layout: doc          # doc | home | page

# 页面元信息
lang: zh-CN
head:
  - - meta
    - name: keywords
      content: 关键词1,关键词2
  - - meta
    - property: og:title
      content: Open Graph 标题

# 导航与侧边栏
outline: [2, 3]      # 右侧目录显示 h2-h3
outlineTitle: '目录'  # 目录标题
aside: true           # 是否显示右侧栏
editLink: true        # 是否显示编辑链接
lastUpdated: true     # 是否显示最后更新时间
prev: 上一篇链接
next: 下一篇链接

# 搜索
search: true          # 是否出现在搜索结果中

# 样式
pageClass: custom-page
---
```

### 首页专用

```yaml
---
layout: home
hero:
  name: 名字
  text: 文字
  tagline: 标语
  actions:
    - theme: brand
      text: 开始
      link: /guide/
features:
  - title: 特性
    details: 描述
---
```

---

## Markdown-it 插件扩展

VitePress 基于 markdown-it，可以安装任何 markdown-it 插件：

### 常用插件列表

| 插件 | 功能 | 安装 |
|------|------|------|
| `markdown-it-mathjax3` | 数学公式 | 已内置 |
| `markdown-it-attrs` | 自定义属性 | 已内置 |
| `markdown-it-emoji` | Emoji | 已内置 |
| `markdown-it-footnote` | 脚注 | `pnpm add -D markdown-it-footnote` |
| `markdown-it-task-lists` | 任务列表 | `pnpm add -D markdown-it-task-lists` |
| `markdown-it-mark` | 高亮标记 | `pnpm add -D markdown-it-mark` |
| `markdown-it-toc-done-right` | 高级目录 | `pnpm add -D markdown-it-toc-done-right` |

### 接入插件

```ts
// config.ts
import footnote from 'markdown-it-footnote'
import taskLists from 'markdown-it-task-lists'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(footnote)
      md.use(taskLists)
    }
  }
})
```

### 脚注示例

```markdown
这是一段文字[^1]，还有另一个脚注[^note]。

[^1]: 这是第一个脚注。
[^note]: 这是命名脚注。
```

### 任务列表

```markdown
- [x] 已完成的任务
- [ ] 待完成的任务
- [ ] 另一个待完成
```

---

## 下一步

- 👉 [主教程：首页 + 导航栏](./index.md)
- 👉 [Vue 组件在 Markdown 中](./vue-in-markdown.md)
- 👉 [自定义主题开发](./custom-theme.md)
