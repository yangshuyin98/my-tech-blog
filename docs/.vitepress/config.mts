import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'
import { defineLocaleConfig } from '@sugarat/theme/node'
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
  // GitHub Pages 不支持服务端 URL 重写，禁用 cleanUrls 确保链接带 .html 后缀可直达
  //要使用 VitePress 提供干净的 URL，需要服务器端支持。
  cleanUrls: false,
  lastUpdated: true,

  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    // search: {
    //   provider: 'local'  //官方VitePress内置的离线全文搜索
    // },
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
        text: 'Arry',

        items: [
          {
            text: 'core',
            items: [
              { text: 'html标签属性', link: '/Arry/core/html标签属性/' },
              { text: 'CSS标签属性', link: '/Arry/core/CSS标签属性/' },
              { text: 'Flex弹性、Grid网格布局', link: '/Arry/core/Flex弹性、Grid网格布局/' },
              { text: '综合PC端项目开发', link: '/Arry/core/综合PC端项目开发/' },
              { text: '移动端、响应式项目开发', link: '/Arry/core/移动端、响应式项目开发/' },
              { text: '服务器部署', link: '/Arry/core/服务器部署/' },
              { text: 'HTML&CSS代码规范', link: '/Arry/core/HTML&CSS代码规范/' },
              { text: 'JavaScript核心', link: '/Arry/core/JavaScript核心/' },



              { text: '知识点', link: '/Arry/core/knowledge/' },
            ]
          },
          { text: 'Arry', link: '/Arry/core/' },
          { text: 'Git', link: '/Arry/git/' },
          { text: 'Markdown', link: '/Arry/markdown/' },
        ]
      },
      {
        text: '教程',
        items: [
          { text: '📘 Vitepress教程', link: '/guide/vitepress-tutorial/' },
          { text: '🔧 Markdown嵌入修复', link: '/guide/markdown嵌入式内容修复/' },
          { text: '🍬 sugar-blog 搭建教程', link: '/guide/sugar-blog-tutorial/' },
          { text: '⚙️ 博客深度运维与运营', link: '/guide/blog-ops/' },
          { text: '🧬 从源码看 sugar-blog', link: '/guide/sugar-blog-source/' },
          { text: '📖 内容编写规范', link: '/guide/contributing-guide/' },
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
      { text: '版本', link: '/CHANGELOG' },
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



