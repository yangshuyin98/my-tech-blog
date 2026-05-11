---
title: SEO 全面优化
icon: search
order: 2
---

# SEO 全面优化

博客写好了，没人看到等于白写。这篇文章讲如何让你的博客**被搜索引擎发现、在社交分享中展示好看**。

---

## 1. 基础 SEO 配置

### 1.1 全局 SEO

在 `.vitepress/config.mts` 中配置基础 SEO 标签：

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '我的博客',
  description: '分享技术、生活与思考的个人博客',

  head: [
    // 编码与视口
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],

    // SEO
    ['meta', { name: 'keywords', content: '前端开发,Vue,VitePress,博客' }],
    ['meta', { name: 'author', content: '你的名字' }],
    ['meta', { name: 'robots', content: 'index, follow' }],

    // Google Search Console 验证
    ['meta', { name: 'google-site-verification', content: '你的验证码' }],
  ],
})
```

### 1.2 文章级 SEO

每篇文章的 frontmatter 直接影响搜索引擎排名：

```yaml
---
title: 文章标题（最重要的 SEO 因素）
description: 150-160字的描述，会展示在搜索结果中
icon: vue
order: 1
tags:
  - Vue
  - VitePress
  - 教程
---
```

- **title**：控制在 60 字以内，把核心关键词放前面
- **description**：每个页面必须写，不写的话搜索引擎会随机截取
- **tags**：帮助内部搜索和标签页分类

---

## 2. Sitemap 自动生成

### 2.1 使用 VitePress 内置 sitemap

安装插件：

```bash
npm install -D @vuepress/plugin-sitemap
```

在 `config.mts` 中配置：

```typescript
import { sitemapPlugin } from '@vuepress/plugin-sitemap'

export default defineConfig({
  // ...
  vite: {
    plugins: [
      sitemapPlugin({
        hostname: 'https://你的域名.com',
        // 排除不需要收录的页面
        exclude: ['/404.html'],
      }),
    ],
  },
})
```

### 2.2 手动生成 Sitemap

如果不想用插件，也可以用一个脚本在构建时生成：

创建 `scripts/generate-sitemap.mjs`：

```javascript
import { readdirSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const SITE_URL = 'https://你的域名.com'
const docsDir = resolve('docs')

// 递归获取所有 .md 文件
function getMdFiles(dir, basePath = '') {
  const entries = readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue
    const fullPath = resolve(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...getMdFiles(fullPath, `${basePath}/${entry.name}`))
    } else if (entry.name.endsWith('.md') && entry.name !== 'index.md') {
      const urlPath = `/posts/${basePath}/${entry.name.replace('.md', '')}`.replace(/\/+/g, '/')
      files.push(urlPath)
    }
  }
  return files
}

const urls = getMdFiles(resolve(docsDir, 'posts'))

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`

writeFileSync(resolve('dist/sitemap.xml'), sitemap)
console.log(`✓ Generated sitemap.xml with ${urls.length} URLs`)
```

---

## 3. Open Graph / 社交分享卡片

当你的文章被分享到微信、Twitter、Discord 时，展示的卡片信息由 OG 标签控制。

### 3.1 全局 OG 配置

```typescript
head: [
  // Open Graph
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:site_name', content: '我的博客' }],
  ['meta', { property: 'og:locale', content: 'zh_CN' }],

  // Twitter Card
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@你的Twitter' }],
],
```

### 3.2 自动生成文章分享卡片

可以用自定义组件实现动态 OG 图片生成。在 `.vitepress/theme/components/` 下创建 `OgImage.vue`：

```vue
<script setup>
import { useData } from 'vitepress'
const { page } = useData()
</script>

<template>
  <div class="og-image">
    <div class="og-title">{{ page.title }}</div>
    <div class="og-description">{{ page.description }}</div>
    <div class="og-site">我的博客</div>
  </div>
</template>

<style scoped>
.og-image {
  width: 1200px;
  height: 630px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Noto Sans SC', sans-serif;
}
.og-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  padding: 0 60px;
}
.og-description {
  font-size: 24px;
  opacity: 0.9;
}
.og-site {
  position: absolute;
  bottom: 30px;
  right: 40px;
  font-size: 20px;
  opacity: 0.7;
}
</style>
```

然后用 Puppeteer 或 Vercel OG Image 在构建时生成每篇文章的封面图。

### 3.3 每篇文章的 OG 标签

更好的方式是在文章 frontmatter 中指定封面图：

```yaml
---
title: 我的文章
image: /images/covers/my-article.png
description: 这篇文章讲了...
---
```

然后在构建时自动注入到 `<head>` 中：

```typescript
// config.mts
function injectOgTags(pageTitle: string, pageDesc: string, pageImage?: string) {
  const image = pageImage || '/images/default-og.png'
  return [
    ['meta', { property: 'og:title', content: pageTitle }],
    ['meta', { property: 'og:description', content: pageDesc }],
    ['meta', { property: 'og:image', content: `https://你的域名.com${image}` }],
  ]
}
```

---

## 4. 结构化数据（Schema.org）

结构化数据帮助搜索引擎理解你的内容，并在搜索结果中展示**富媒体片段**（如评分、日期、作者头像）。

在主题中注入文章 Schema：

```typescript
// .vitepress/theme/index.ts
import { watchEffect } from 'vue'
import { useData, useRouter } from 'vitepress'

export default {
  enhanceApp({ app }) {
    const router = useRouter()
    const { page } = useData()

    router.onAfterRouteChanged = () => {
      watchEffect(() => {
        const schema = {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: page.value.title,
          description: page.value.description,
          datePublished: page.value.frontmatter.date,
          author: {
            '@type': 'Person',
            name: '你的名字',
          },
        }
        let el = document.getElementById('ld-json')
        if (!el) {
          el = document.createElement('script')
          el.id = 'ld-json'
          el.type = 'application/ld+json'
          document.head.appendChild(el)
        }
        el.textContent = JSON.stringify(schema)
      })
    }
  }
}
```

---

## 5. 提交到搜索引擎

### Google Search Console

1. 在 config 中添加验证 meta tag（见前文）
2. 访问 [search.google.com/search-console](https://search.google.com/search-console)
3. 添加你的域名，验证所有权
4. 提交 sitemap URL：`https://你的域名.com/sitemap.xml`

### 百度搜索资源平台

1. 访问 [ziyuan.baidu.com](https://ziyuan.baidu.com)
2. 添加站点，验证所有权（推荐用文件验证）
3. 提交 sitemap
4. 使用自动推送脚本：

在主题的 `<head>` 中添加：

```typescript
head: [
  ['script', {},
    `(function() {
      var bp = document.createElement('script');
      bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(bp, s);
    })();`
  ],
],
```

---

## 6. 检查工具

部署前用这些工具检查 SEO 状况：

| 工具 | 用途 | 链接 |
|------|------|------|
| Google PageSpeed Insights | 速度 + SEO 评分 | https://pagespeed.web.dev/ |
| Rich Results Test | 测试结构化数据 | https://search.google.com/test/rich-results |
| Facebook Sharing Debugger | 测试 OG 卡片 | https://developers.facebook.com/tools/debug/ |
| Twitter Card Validator | 测试 Twitter 卡片 | https://cards-dev.twitter.com/validator |

## 总结

SEO 不是一蹴而就的事，但**基础配置做一次就能长期受益**：

1. ✅ 全局 SEO meta + 每篇文章 `description`
2. ✅ Sitemap 自动生成并提交
3. ✅ OG 标签让分享好看
4. ✅ 结构化数据提升搜索展示
5. ✅ 提交到 Google 和百度
