---
# ====== 基本信息 ======

title: VitePress + sugar-blog 搭建技术博客
date: 2024-03-15 10:00:00
author: yang

# ====== 展示控制 ======

description: 从零开始搭建一个功能完善的技术博客
cover: ./赛里斯.jpg    # 封面图（不设置则取文章第一张图）
hiddenCover: false                       # 文章页是否隐藏封面
hidden: false                            # 是否在首页列表隐藏

# ====== 分类 ======

tags: ["VitePress", "博客", "教程"]

categories: ["前端"]

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

# 教程有侧边栏，指南为什么没有？

## 现象

在本博客中观察到：教程页面（如 `vitepress-tutorial/` 下的文章）右侧有一个自动生成的目录（大纲），而指南页面（如 `getting-started.md`、`configuration.md`）没有。

看起来像是教程"有侧边栏"，指南"没有侧边栏"。

## 原因

### 1. 所有页面使用同一个侧边栏配置

在 sugarat 主题中，侧边栏是通过 `patchDefaultThemeSideBar()` 统一设置的，代码位于 `node_modules/@sugarat/theme/node.mjs`：

```javascript
function patchDefaultThemeSideBar(cfg) {
  return cfg?.blog !== false && cfg?.recommend !== false ? {
    sidebar: [{ text: "", items: [] }]
  } : void 0;
}
```

只要 blog 模式和推荐功能开启，所有页面共享同一个空的侧边栏配置 `[{ text: "", items: [] }]`，并不会为不同目录单独配置侧边栏。

### 2. "侧边栏"实际上是右侧大纲（outline）

用户实际感受到的"侧边栏"是 VitePress 的**右侧大纲（Aside/Outline）**，它会自动提取页面中的 Markdown 标题（`#`、`##`、`###`）生成目录索引。

这个功能的开启条件只有一个：**页面内容中有真实的标题结构**。

### 3. 指南页面是空占位文件

| 对比项 | 教程页面 | 指南页面 |
|--------|---------|---------|
| 文件位置 | `docs/guide/vitepress-tutorial/① 首页 + 导航栏.md` | `docs/guide/getting-started.md` |
| 实际内容 | 完整的 Markdown，有 `#` 标题、段落、代码块 | 仅重复占位文本，无标题结构 |
| 右侧大纲 | 自动生成标题索引 | **无法生成（无标题）** |

指南页面（`getting-started.md`、`configuration.md`）实际写入的内容是：
- `getting-startedgetting-startedgetting-started...`
- `configuration.md configuration.md...`

这些不是有效的 Markdown 标题格式，VitePress 无法从中提取任何标题，右侧大纲自然为空。

### 4. 结论

**这并不是手册的侧边栏配置有问题，而是指南页面本身没有真实内容。**

要让指南页面显示右侧目录，只需写入真实的 Markdown 内容即可。
