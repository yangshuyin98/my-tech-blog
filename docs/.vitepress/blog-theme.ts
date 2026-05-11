// 主题独有配置
import { getThemeConfig } from '@sugarat/theme/node'

// 开启RSS支持（RSS配置）
import type { Theme } from '@sugarat/theme'

const baseUrl = 'https://yangshuyin98.github.io/my-tech-blog'
const RSS: Theme.RSSOptions = {
  title: 'shuyin的技术博客',
  baseUrl,
  copyright: 'Copyright (c) 2026-present, shuyin',
  description: 'shuyin的技术博客，记录前端学习与实践',
  language: 'zh-cn',
  image: '/logo.png',
  favicon: '/favicon.ico',
}

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  // 文章默认作者
  author: '杨树银',

  // ====== 关闭侧边栏推荐 ======
  // recommend: undefined,       //   Theme.RecommendArticle : false |undefined     通过 recommend 配置就能控制显示/隐藏、标题、数量、样式。
  recommend: {
    title: '📌 推荐阅读',                          //  '🔥 精选文章'|  '📌 推荐阅读'
    nextText: '下一组',                            // '下一组'  | '换一组',
    pageSize: 20,
    style: 'card'                                 //   "card" | "sidebar" | undefined
  },
  // ====== 精选文章 ======
  hotArticle: {
    title: '🔥 精选文章',
    nextText: '换一组',
    pageSize: 9,
  },
  // ====== 首页标签 ======
  homeTags: {
    title: '🏷 标签',
    limit: 30,            // 超出部分折叠
    showCount: true,       // 显示文章数量
    sort: 'desc',          // 按数量降序
  },
  // ====== 文章默认配置 ======
  article: {
    readingTime: true,      // 显示预计阅读时间
    hiddenCover: false,     // 是否默认隐藏封面
  },


  // 开启RSS支持
  RSS,

  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // search: false,
  // ====== 搜索 ======
  search: {
    btnPlaceholder: '搜索',
    placeholder: '搜索文章...',
    emptyText: '没有找到相关内容',
    heading: '共 {{searchResult}} 条搜索结果',
  },
  // ====== 评论（可选） ======
  comment: {
    type: 'giscus',
    options: {
      repo: 'yangshuyin98/my-tech-blog',
      repoId: 'R_kgDOSaDZJw',
      category: 'Announcements',
      categoryId: 'DIC_kwDOSaDZJ84C8xHF',
    }
  },


  // 默认关闭 markdown 图表支持（开启会增加一定的构建耗时）
  mermaid: false,

  // 页脚
  footer: {
    // message 字段支持配置为HTML内容，配置多条可以配置为数组
    // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
    // copyright: 'MIT License | shuyin',
    // icpRecord: {
    //   name: '豫ICP备19011724号',
    //   link: 'https://beian.miit.gov.cn/'
    // },
    // securityRecord: {
    //   name: '公网安备xxxxx',
    //   link: 'https://www.beian.gov.cn/portal/index.do'
    // },
  },

  // 主题色修改
  themeColor: 'el-blue',



  // 友链
  friend: [
    {
      nickname: '粥里有勺糖',
      des: '你的指尖用于改变世界的力量',
      avatar:
        'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030~fmt.webp',
      url: 'https://sugarat.top',
    },
    {
      nickname: 'Vitepress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar:
        'https://vitepress.dev/vitepress-logo-large.webp',
      url: 'https://vitepress.dev/',
    },
  ],

  // 公告
  popover: {
    title: '公告',
    body: [
      { type: 'text', content: '👇公众号👇---👇 微信 👇' },
      {
        type: 'image',
        src: '/weixin.png',
        alt: '杨树银微信二维码'
      },
      {
        type: 'text',
        content: '欢迎大家加群&私信交流'
      },
      {
        type: 'text',
        content: '文章首/文尾有群二维码',
        style: 'padding-top:0'
      },
      {
        type: 'button',
        content: '作者博客',
        link: '#'
      },
      {
        type: 'button',
        content: '加群交流',
        props: {
          type: 'success'
        },
        link: '#',
      }
    ],
    duration: 0
  },
})

export { blogTheme }
