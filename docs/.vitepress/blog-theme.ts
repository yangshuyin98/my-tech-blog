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
  // ====== 首页配置 ======
  home: {
    name: '我的技术博客',
    motto: '记录学习，分享成长',
    inspiring: [
      '代码改变世界',
      '保持好奇心，保持学习',
      '今天也是元气满满的一天'
    ],
    pageSize: 6,          // 首页每页文章数
    blogInfoCollapsible: true,   //移动端信息卡片折叠
  },
  // ====== 关闭侧边栏推荐 ======
  // recommend: undefined,       //  false |undefined  即默认生效配置，无需再设置   通过 recommend 配置就能控制显示/隐藏、标题、数量、样式。
  recommend: {
    title: '🔍 相关文章',                          //   '📌 推荐阅读' |🔍 相关文章
    nextText: '下一组',                            // '下一组'  
    pageSize: 20,
    style: 'card',                                 //   "card" | "sidebar" 类似默认主题的侧边栏
    empty: '暂无相关文章',
    sort: 'date',                          // 可以自定义排序规则 默认'date'|  filename
    showDate: true,
    showNum: true
  },
  // ====== 精选文章 ======
  // hotArticle: false   //设置为 false 时，不展示

  hotArticle: {
    title: '🔥 精选文章',
    nextText: '下一页',
    pageSize: 8,
    // empty: false // false 时无精选文章不展示此模块
    empty: '暂无精选内容'

  },
  // ====== 首页标签 ======
  //     homeTags: false //设置为 false 时，不展示
  homeTags: {
    title: '🏷 标签',
    limit: 30,            // 超出部分折叠
    showCount: true,       // 显示文章数量    false  true 
    sort: 'desc',          // 按数量降序  'desc' | 'asc' | 'normal'

  },
  // ====== 文章默认配置 ======
  article: {
    readingTime: true,      // 显示预计阅读时间
    hiddenCover: false,     // 是否默认隐藏封面
    readingTimePosition: 'inline',//阅读时间分析展示位置 top|	newLine|inline
    /**自定义一系列文案标题  */
    analyzeTitles: {
      inlineWordCount: '{{value}} word counts',
      inlineReadTime: '{{value}} min read time',
      wordCount: 'Total word count',
      readTime: 'Total read time',
      author: 'Author',
      publishDate: 'Published on',
      lastUpdated: 'Last updated on',
      tag: 'Tags',
    }
  },
  //设置一个全局的提示弹窗 (由 el-alert 驱动)
  // alert: {
  //   type: 'success',
  //   title: 'xx功能上新啦🎉',
  //   duration: 3000
  // },

  // 开启RSS支持
  RSS,

  // ====== 搜索 ======
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // search: false,
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
      inputPosition: 'top',
    },
    // 自定义展示内容
    label: '发表意见',
    icon: `<svg width="512" height="512" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fbbf67" d="M63.962 31.979c0 17.665-14.318 31.979-31.981 31.979C14.319 63.958 0 49.644 0 31.979C0 14.315 14.319 0 31.981 0c17.663 0 31.981 14.315 31.981 31.979"/>
      <path fill="#633d19" d="M39.512 47.925c-.624-1.461-1.959-2.202-3.97-2.202c-1.568 0-3.271.45-4.515.78l-.727.185c-.32.079-1.979 1.012-1.868 1.914l.193.727h.671c.111 0 .229-.016.37-.049l.602-.152c1.361-.342 2.643-.666 3.983-.666c.788 0 1.46.305 2 .905c.442.487.371.773.348.868c-.118.494-.889 1.085-1.916 1.476c0 0-1.594.658-1.663 1.574l.052.622l.415.237c2.326 1.333 2.278 2.194 1.979 2.796c-.332.664-1.275.805-2.01.805c-1.019 0-2.121-.273-2.765-.542l-.427-.083c-.806 0-2.105.97-2.248 1.673l-.071.716l.573.238a8.03 8.03 0 0 0 3.128.628h.004c1.896 0 3.831-.663 5.442-1.866c1.431-1.066 1.713-2.18 1.699-2.929c-.02-.938-.506-1.882-1.391-2.728c2.23-1.332 2.939-2.986 2.112-4.927"/>
      <ellipse cx="11.242" cy="42.42" fill="#ed307c" opacity=".48" rx="7.928" ry="6.462"/>
      <path fill="#ed307c" d="M60.65 43.24c0 3.571-3.549 6.462-7.927 6.462c-4.379 0-7.93-2.891-7.93-6.462c0-3.572 3.551-6.466 7.93-6.466c4.378 0 7.927 2.894 7.927 6.466" opacity=".48"/>
      <path fill="#633d19" d="M25.23 12.968c-5.951-.411-11.346 2.028-15.08 6.66c-1.622 2.01 1.223 4.89 2.86 2.86c3.134-3.887 7.215-5.822 12.221-5.475c2.605.179 2.588-3.867 0-4.045m14.079 0c5.95-.411 11.346 2.028 15.08 6.66c1.621 2.01-1.223 4.89-2.86 2.86c-3.134-3.887-7.215-5.822-12.221-5.475c-2.605.179-2.587-3.867 0-4.045M28.886 32.33c-.225 0-4.333-1.576-8.48-1.576c-3.705 0-7.442 1.576-8.481 1.576c-.9 0-1.236-1.043-.691-1.667c4.961-5.728 13.378-5.728 18.344 0c.541.624.205 1.667-.692 1.667m25.019 0c-.226 0-4.333-1.576-8.48-1.576c-3.705 0-7.441 1.576-8.48 1.576c-.9 0-1.236-1.043-.691-1.667c4.961-5.728 13.379-5.728 18.344 0c.54.624.204 1.667-.693 1.667"/>
  </svg>`,
    mobileMinify: false,
  },

  //用于设置图片预览插件的配置项
  imagePreview: {
    showProgress: true,
    infinite: true,
    hideOnClickModal: true,
  },

  // 默认关闭 markdown 图表支持（开启会增加一定的构建耗时）
  mermaid: false,

  // 页脚
  footer: {
    // version: true,
    version: false,  //不想显示主题版本也可主动关闭
    // copyright: 'MIT License | shuyin',
    copyright: {
      message: 'MIT License | shuyin',
      icon: `<svg width="128" height="128" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g fill="none">
          <path fill="#FF822D" d="M13.638 3.202a2.936 2.936 0 0 1 4.724 0a2.936 2.936 0 0 0 3.25 1.055a2.936 2.936 0 0 1 3.822 2.778a2.936 2.936 0 0 0 2.008 2.763a2.936 2.936 0 0 1 1.46 4.494a2.936 2.936 0 0 0 0 3.416a2.936 2.936 0 0 1-1.46 4.494a2.936 2.936 0 0 0-2.008 2.763a2.936 2.936 0 0 1-3.823 2.778a2.936 2.936 0 0 0-3.249 1.055a2.936 2.936 0 0 1-4.724 0a2.936 2.936 0 0 0-3.25-1.055a2.936 2.936 0 0 1-3.822-2.778a2.936 2.936 0 0 0-2.008-2.763a2.936 2.936 0 0 1-1.46-4.494a2.936 2.936 0 0 0 0-3.416a2.936 2.936 0 0 1 1.46-4.494a2.936 2.936 0 0 0 2.008-2.763a2.936 2.936 0 0 1 3.823-2.778a2.936 2.936 0 0 0 3.249-1.055Z"/>
          <path fill="#FCD53F" d="M25.062 21.232c-2.89 5.005-9.29 6.72-14.294 3.83c-5.005-2.89-6.72-9.29-3.83-14.294c2.89-5.005 9.29-6.72 14.294-3.83c5.005 2.89 6.72 9.29 3.83 14.294Z"/>
      </g>  </svg>`
    },

    icpRecord: {
      name: '豫ICP备19011724号',
      link: 'https://beian.miit.gov.cn/'
    },
    securityRecord: {
      name: '公网安备xxxxx',
      link: 'https://www.beian.gov.cn/portal/index.do'
    },
  },


  // 主题色修改
  themeColor: 'el-blue',            //'vp-default'  |  vp-green   |  el-blue

  //设置回到顶部，默认开启
  backToTop: {
    // 自定义触发高度
    top: 450,
    // 自定义图标
    icon: '🚀'
  },

  //是否开启深色模式过渡动画     默认开启    
  darkTransition: true,

  //用于控制文章底部按钮，点击按钮会在按钮下方渲染一个自定义的html内容
  // buttonAfterArticle: false   //设置为 false 时，不展示
  buttonAfterArticle: {
    openTitle: '赞赏',
    closeTitle: '下次一定',
    content: '<img src="/weixin.png">',
    icon: 'aliPay'
  },

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
    title: '📢 广而周知 📢',
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
        link: '#',
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
    duration: -1,       //-1   0
    mobileMinify: false,
  },
})

export { blogTheme }

