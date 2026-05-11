---
# ====== 基本信息 ======

title: VitePress + sugar-blog 搭建技术博客
date: 2024-03-15 10:00:00
author: yang

# ====== 展示控制 ======

description: 将「教程」提升为独立顶层导航项，修复导航入口缺失问题
cover: ./赛里斯.jpg
hiddenCover: false
hidden: false

# ====== 分类 ======

tags: ["VitePress", "导航", "修复"]

categories: ["前端"]

# ====== 排序与展示 ======

sticky: 1
top: 1
recommend: 1

# ====== 功能开关 ======

readingTime: true
comment: true
publish: true

# ====== 文章底部按钮 ======

buttonAfterArticle:
  openTitle: 投币
  closeTitle: 下次一定
  content: '<img src="/reward.png">'
  icon: aliPay
---

# 将「教程」提升为独立顶层导航项

## 问题描述

导航栏中原有的结构为：

```
首页 | 指南 | 关于 | 版本 | 归档
```

「教程」相关的文章（Vitepress 教程系列、Markdown 嵌入式内容修复系列）被放在了「指南」的子菜单中：

```
指南
├── 快速开始
└── 配置
    └── (教程内容被压缩在这里，无法直接访问)
```

这导致：
- 用户无法在导航栏中直接看到并点击「教程」入口
- 教程内容藏在「指南」下，与"快速开始/配置"混在一起，结构混乱
- 教程系列文章展开后层级过深，导航体验差

## 修复方案

在 `docs/.vitepress/config.mts` 的 `themeConfig.nav` 中，将「教程」提升为独立的顶层导航项，配置两级嵌套结构。

### 配置代码

```typescript
nav: [
  { text: '首页', link: '/' },
  {
    text: '指南',
    items: [
      { text: '快速开始', link: '/guide/getting-started' },
      { text: '配置', link: '/guide/configuration' },
    ]
  },
  // ====== 🆕 新增独立入口 ======
  {
    text: '教程',
    items: [
      {
        text: 'Vitepress教程',    // 第一组
        items: [
          { text: '📖 概览', link: '/guide/vitepress-tutorial/' },
          // 其余子项会在后续迭代中按需补充
        ]
      },
      {
        text: 'markdown修复',    // 第二组
        items: [
          { text: '📖 概览', link: '/guide/markdown嵌入式内容修复/' },
          { text: '代码块内 include 转义', link: '/guide/markdown嵌入式内容修复/code-block-include' },
          { text: '图片路径修复', link: '/guide/markdown嵌入式内容修复/image-path-fix' },
          { text: 'Vue 组件嵌入问题', link: '/guide/markdown嵌入式内容修复/vue-component-embed' },
        ]
      }
    ]
  },
  // ==========================
  { text: '关于', link: '/about' },
  { text: '版本', items: [...] },
  { text: '归档', link: '/archives' },
]
```

### 修复后的导航结构

```
首页 │ 指南 │ 教程 │ 关于 │ 版本 │ 归档
                  ↓ 点击展开
            ┌─ Vitepress教程 ─┐
            │   📖 概览       │
            └────────────────┘
            ┌─ markdown修复 ──┐
            │   📖 概览       │
            │   代码块内 include│
            │   图片路径修复    │
            │   Vue 组件嵌入   │
            └────────────────┘
```

## 要点说明

- 第一级 `{ text: '教程' }` 没有 `link` 属性，点击展开下拉菜单
- 第二级使用 `{ text: 'Vitepress教程', items: [...] }` 实现分组标题
- 各组之间会自动显示分割线，视觉上区分两个系列
- 采用 VitePress 原生的嵌套导航配置，无需额外插件或样式修改
