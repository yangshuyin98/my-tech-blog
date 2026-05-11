---
title: sugar-blog 博客搭建系列
description: 从零开始，基于 @sugarat/theme 主题搭建个人技术博客的完整教程
---

# 🎯 sugar-blog 博客搭建系列

## 系列简介

本系列教程记录了我从零开始，使用 **VitePress + @sugarat/theme（sugar-blog）** 搭建个人技术博客的完整过程。

> **sugar-blog** 是一款基于 VitePress 的博客主题，由 [粥里有勺糖](https://sugarat.top) 开发。它保留了 VitePress 的所有能力，同时内置了博客常用的功能：标签分类、搜索、评论、RSS、精选文章等，开箱即用。

::: tip 适合读者
- 想搭建个人博客但不想从零写前端项目的开发者
- 对 VitePress 感兴趣，想要一个更美观的博客主题的同学
- 正在寻找一款「写作体验好 + 部署方便」的博客方案的人
:::

## 文章目录

<PageList prefix="/guide/sugar-blog-tutorial/" />

## 前置要求

- 🟢 **Node.js** v18+（推荐 v20）
- 🟢 **pnpm** 包管理器（推荐使用）
- 🟢 **Git** 版本控制
- 🟢 **GitHub** 账号（用于部署）

## 技术栈

```
VitePress 2.x (构建框架)
    └── @sugarat/theme 0.5.x (博客主题)
        ├── Pagefind (离线全文搜索)
        ├── Giscus (评论系统)
        └── RSS 支持
```

## 快速体验

```bash
# 1. 创建项目
pnpm create @sugarat/theme my-blog

# 2. 进入目录
cd my-blog

# 3. 安装依赖
pnpm install

# 4. 启动开发服务器
pnpm dev
```

打开浏览器访问 `http://localhost:5173` 即可看到效果。

## 系列导航

👉 **第一篇文章**：[项目初始化](./01-项目初始化)

---

*本系列基于实际搭建经验编写，版本信息：@sugarat/theme@0.5.19，VitePress@2.0.0-alpha.17*
