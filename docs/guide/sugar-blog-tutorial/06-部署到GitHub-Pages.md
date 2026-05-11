---
order: 6
title: ⑥ 部署到 GitHub Pages
description: 配置 GitHub Actions 实现推送代码自动部署到 GitHub Pages
---

# ⑥ 部署到 GitHub Pages

## 准备工作

### 1. 创建 GitHub 仓库

在 GitHub 上创建一个仓库，名称格式为 `<用户名>.github.io` 或任意名称。

```
用户名: yangshuyin98
仓库名: my-tech-blog
```

### 2. 配置 Pages 服务

进入仓库 → **Settings** → **Pages**：

| 设置项 | 值 |
|--------|-----|
| Source | **GitHub Actions** |

选择 `GitHub Actions` 即可，后续部署由 Workflow 自动完成。

### 3. 配置 base 路径

在 `config.mts` 中配置 base 路径：

```typescript
const base = process.env.GITHUB_ACTIONS === 'true' 
  ? '/my-tech-blog'    // 部署时使用仓库名
  : '/'                 // 本地开发使用根路径
```

**路径规则：**
- 仓库名为 `username.github.io` → `base: '/'`
- 仓库名为 `my-repo` → `base: '/my-repo'`

::: tip
利用 `GITHUB_ACTIONS` 环境变量区分本地和部署环境，本地开发不受影响。
:::

## 编写 GitHub Actions 工作流

在项目根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy Pages

# 触发条件
on:
  push:
    branches: [master]        # master 分支推送时触发
  pull_request:
    branches: [master]
  workflow_dispatch:          # 支持手动触发

# 设置时区
env:
  TZ: Asia/Shanghai

# 权限设置
permissions:
  contents: read
  pages: write
  id-token: write

# 并发控制
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建任务
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [20]

    steps:
      # 1. 拉取代码
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0       # 保留 Git 信息

      # 2. 设置 Node.js
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}

      # 3. 安装 pnpm
      - uses: pnpm/action-setup@v4
        name: Install pnpm
        with:
          version: latest
          run_install: false

      # 4. 安装依赖
      - name: Install dependencies
        run: pnpm install --no-frozen-lockfile

      # 5. 构建项目
      - name: Build blog project
        run: pnpm build

      # 6. 准备部署资源
      - name: Build with Jekyll
        uses: actions/jekyll-build-pages@v1
        with:
          source: ./docs/.vitepress/dist
          destination: ./_site

      # 7. 上传构建产物
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3

  # 部署任务
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Workflow 说明

| 步骤 | 作用 |
|------|------|
| `Checkout` | 拉取仓库代码 |
| `Setup Node.js` | 配置 Node.js 运行环境 |
| `Install pnpm` | 安装 pnpm 包管理器 |
| `Install dependencies` | 安装项目依赖 |
| `Build` | 执行 `pnpm build` 构建静态文件 |
| `Upload artifact` | 上传构建产物 |
| `Deploy` | 部署到 GitHub Pages |

## 提交并推送

```bash
# 添加所有文件
git add .

# 提交
git commit -m "初始化博客"

# 推送到 GitHub
git push origin master
```

## 验证部署

1. 推送后，进入 GitHub 仓库 → **Actions** 标签页
2. 可以看到正在运行的工作流
3. 等待约 2-3 分钟，工作流显示绿色 ✅ 表示部署成功
4. 访问 `https://<用户名>.github.io/<仓库名>/` 查看博客

![部署成功](https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030)

## 常见问题

### ❌ 部署后页面空白

**原因**：`base` 路径配置不正确

**解决**：确认 `config.mts` 中的 base 路径和仓库名一致

```typescript
// 仓库名是 my-tech-blog
const base = '/my-tech-blog'

// 如果仓库名是 username.github.io
// const base = '/'
```

### ❌ 资源 404

**原因**：图片、CSS 等资源路径需要带 base 前缀

**解决**：在 `config.mts` 的 `head` 中使用动态 base：

```typescript
head: [
  ['link', { rel: 'icon', href: `${base}favicon.ico` }]
]
```

### ❌ Giscus 评论不显示

**原因**：GitHub Discussions 未启用，或仓库信息配置错误

**解决**：检查仓库的 Settings → Discussions 是否启用

### ❌ 工作流执行失败

**原因**：分支名不匹配

**解决**：检查 `deploy.yml` 中的分支名：

```yaml
on:
  push:
    branches: [master]   # 确认与你的默认分支一致
```

::: tip 下一步
部署完成后，探索更多高级功能 👉 [高级功能](./07-高级功能)
:::
