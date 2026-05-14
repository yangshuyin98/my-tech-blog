---
title: "更新日志"
description: "简单日志的变更"
descriptionHTML: '
<span style="color:var(--description-font-color);">日志版本</span>
<pre style="background-color: #292b30; padding: 15px; border-radius: 10px;" class="shiki material-theme-palenight"><code>
    <span class="line"><span style="color:#FFCB6B;">更新日志管理</span></span>
</code>
</pre>'
---

# Changelog

## 1.3.0 (2026-05-14)

### Features

* **Arry 部分**: 新增前端学习笔记模块
  - `html标签属性` — HTML/HTML5 常用标签和属性最佳实践
  - `CSS标签属性` — CSS/CSS3 系统学习（15 篇）
  - `Flex弹性、Grid网格布局` — 弹性布局与网格布局实战
  - `综合PC端项目开发` — PC 端项目开发实践
  - `移动端、响应式项目开发` — 移动端与响应式开发
  - `服务器部署` — 服务器部署相关知识
  - `知识点` — 前端核心知识点梳理

### Chores

* 版本由 1.2.0 升级至 1.3.0

## 1.2.0 (2025-04-09)

### Bug Fixes

* **nav**: 修复导航栏"教程"下拉菜单中各分组标题（Vitepress教程、markdown修复等）无法点击跳转的问题
  - **原因**: VitePress 嵌套 `items` 中的二级分组标题（仅有 `text` 无 `link`）不支持 `link` 属性，导致点击无响应
  - **修复**: 将嵌套二级结构拍平为一级，每个教程项直接带 `link` 指向对应系列 index 页，同时添加 emoji 前缀区分

| 修改前 | 修改后 |
|--------|--------|
| `Vitepress教程` → 嵌套 `items` → `📖 概览` (link) | `📘 Vitepress教程` (link → index) |
| `markdown修复` → 嵌套 `items` → `📖 概览` (link) | `🔧 Markdown嵌入修复` (link → index) |
| `🍬 sugar-blog 搭建教程` → 嵌套 `items` → `📖 概览` (link) | `🍬 sugar-blog 搭建教程` (link → index) |
| `🔧 博客深度运维与运营` → 嵌套 `items` → `📖 概览` (link) | `⚙️ 博客深度运维与运营` (link → index) |
| `🧬 从源码看 sugar-blog` → 嵌套 `items` → `📖 概览` (link) | `🧬 从源码看 sugar-blog` (link → index) |

### Chores

* 版本由 1.1.0 升级至 1.2.0

## 1.1.0 (2025-04-08)

### Features

* **vitepress-tutorial**: 11 篇文章全部添加 `order` frontmatter，index 页替换为 `<PageList />` 自动生成文章列表
* **markdown嵌入式内容修复**: 3 篇文章添加 `order` frontmatter，index 页替换为 `<PageList />`
* **blog-ops**: 确认已有 `order` + `<PageList />`，统一三栏索引模式

### Chores

* 版本由 1.0.0 升级至 1.1.0
# v1.0.1 — 通用组件化重构

## 发布日期

2024-xx-xx

## 新增功能

### 1. `<PageList />` 通用文章列表组件

**文件：** `docs/.vitepress/theme/components/PageList.vue`

自动扫描 `pagesData` 中指定前缀下的所有页面并展示，支持：

* `prefix` — 按路由前缀过滤（如 `/guide/blog-ops`）
* `sortBy` — 排序字段（`order` / `date`）
* `sortOrder` — 排序方向（`asc` / `desc`）

效果：新增文章只需写文件 + 声明 `order` ，列表自动出现，不再需要手动编辑 `index.md` 。

### 2. 全局注册

**文件：** `docs/.vitepress/theme/index.ts`

注册 `PageList` 为全局组件，所有 Markdown 文件均可直接使用。

## 变更

| 文件 | 变更类型 | 说明 |
|------|----------|------|
| `docs/.vitepress/theme/components/PageList.vue` | 新增 | 通用文章列表组件 |
| `docs/.vitepress/theme/index.ts` | 修改 | 注册 PageList 组件 |
| `docs/guide/blog-ops/index.md` | 修改 | 手动链接列表替换为 `<PageList />` |

## 使用方式

**在系列概览页中：**

```md
<PageList prefix="/guide/blog-ops" />
```

**按日期排序（如归档）：**

```md
<PageList prefix="/guide/some-series" sortBy="date" sortOrder="desc" />
```

# v1.0.0 — 初始版本

## 发布日期

之前

## 功能概述

* 基于 [@sugarat/theme](https://theme.sugarat.top/) 搭建博客
* 自定义 Archives 归档组件
* 自定义主题样式与配色
* RSS 订阅支持
* Pagefind 全文搜索

## 目录结构

```
docs/
├── .vitepress/theme/      # 自定义主题
│   ├── components/
│   │   └── Archives.vue   # 归档页面组件
│   ├── index.ts           # 主题入口
│   ├── style.css          # 样式覆盖
│   └── user-theme.css     # 主题色
├── guide/                 # 教程文档
│   ├── blog-ops/          # 博客运维系列
│   ├── sugar-blog-source/ # 主题源码系列
│   └── sugar-blog-tutorial/ # 搭建教程系列
└── versions/              # 版本记录
```
