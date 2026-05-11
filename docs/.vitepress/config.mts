import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
const base = process.env.GITHUB_ACTIONS === 'true' ? '/my-tech-blog/' : '/'
//   ? '/vitepress-blog-sugar-template/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({

  // 继承博客主题(@sugarat/theme)  使用@sugarat/theme构建的博客
  extends: blogTheme,
  base,
  lang: 'zh-cn',
  title: '我的博客',
  description: 'shuyin的博客',
  ignoreDeadLinks: true,
  // lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录'
    },

    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    // 设置logo
    logo: '/logo.png',
    // editLink: {
    //   pattern:
    //     'https://github.com/yangshuyin98/my-tech-blog.git',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '教程',
        items: [
          {
            text: 'Vitepress教程',
            items: [
              { text: '📖 概览', link: '/guide/vitepress-tutorial/' },

            ]
          },
          {
            text: 'markdown修复',
            items: [
              { text: '📖 概览', link: '/guide/markdown嵌入式内容修复/' },
            ]
          },
          {
            text: '🍬 sugar-blog 搭建教程',
            items: [
              { text: '📖 概览', link: '/guide/sugar-blog-tutorial/' },
            ]
          },
          {
            text: '🔧 博客深度运维与运营',
            items: [
              { text: '📖 概览', link: '/guide/blog-ops/' },
            ]
          },
          {
            text: '🧬 从源码看 sugar-blog',
            items: [
              { text: '📖 概览', link: '/guide/sugar-blog-source/' },
            ]
          }
        ]
      },
      {
        text: 'sop',
        items: [
          { text: '快速开始', link: '/sop/component.md' },
          { text: '配置', link: '/sop/more' },
        ]
      },


      { text: '关于', link: '/about' },
      {
        text: '版本',
        items: [
          {
            text: '当前版本',
            items: [
              { text: 'v2.0.0 (最新)', link: '/versions/v2' },
              { text: 'v1.x', link: '/versions/v1' }
            ]
          },
          {
            text: '变更日志',
            link: '/versions/changelog'
          }
        ]
      },
      { text: '归档', link: '/archives' },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/yangshuyin98/my-tech-blog.git'
      }
    ]
  },
})
