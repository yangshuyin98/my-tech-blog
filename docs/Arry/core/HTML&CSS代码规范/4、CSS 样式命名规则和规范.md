---
title: "CSS 样式命名规则和规范"
source: "https://www.arryblog.com/guide/standard/css-naming-convention.html"
category: "规范"
order: 4
---

# CSS 样式命名规则和规范

CSS 命名规范

- class、id 都需小写
- 命名使用英文，禁止使用特殊字符
- 样式名不能包含`ad`、`guanggao`、`ads`、`gg`是广告含义的关键词，避免元素被网页拓展、插件屏蔽
- 名称间隔使用`-`符号
- 涉及数据、交互等需要联调的部分，禁止通过 id 选择器定义样式，以免开发过程中 id 名变化，引起页局错乱

## 1、类名命名需要语义化

参考下面的示例：

```css
/* 外层容器 */
.wrap {
}
/* 模块容器 */
.mod-box {
}
/* 开始 */
.btn-start {
}
/* ios下载 */
.btn-download-ios {
}
/* 安卓下载 */
.btn-download-andriod {
}
/* 头部导航链接1 */
.btn-head-nav1 {
}
/* 更多新闻 */
.btn-news-more {
}
/* 播放视频 */
.btn-play {
}
/* 按钮ico */
.btn-ico {
}
/* 开始抽奖 */
.btn-lottery {
}
/* 侧栏导航 */
.side-nav {
}
/* 侧栏导航-链接1 */
.side-nav-btn1 {
}
/* 更多 */
.btn-more {
}
```

## 2、页面主结构命名

| 命名                | 意义     | 命名        | 意义                                 |
| :------------------ | :------- | :---------- | :----------------------------------- |
| `header`            | 页头，头 | `container` | 容器                                 |
| `nav`               | 导航栏   | `wrapper`   | 面外围控制整体布局宽度，用于最外层   |
| `main`              | 页面主体 | `wrap`      | 外套，将所有元素包在一起的一个外围包 |
| `content/container` | 内容     | `column`    | 栏目                                 |
| `main-content`      | 主要内容 | `sidebar`   | 侧栏                                 |
| `footer`            | 页脚     |             |                                      |

## 3、导航命名

| 命名                                   | 意义                         | 命名       | 意义                             |
| :------------------------------------- | :--------------------------- | :--------- | :------------------------------- |
| `nav、navbar、navigation、nav-wrapper` | 导航条或导航包，代表横向导航 | `title`    | 标题                             |
| `topnav`                               | 顶部导航                     | `summary`  | 摘要                             |
| `mainnav`                              | 主导航                       | `menu`     | 菜单（区域包含一般的链接和菜单） |
| `subnav`                               | 子导航                       | `submenu`  | 子菜单                           |
| `sidebar`                              | 边导航                       | `drop`     | 下拉                             |
| `leftsidebar 或 sidebar-left`          | 左导航                       | `dorpmenu` | 下拉菜单                         |
| `rightsidebar 或 sidebar-right`        | 右导航                       | `links`    | 链接菜单                         |

## 4、功能点命名

| 命名             | 意义                                     | 命名               | 意义           |
| :--------------- | :--------------------------------------- | :----------------- | :------------- |
| `logo`           | 标记网站 logo 标志                       | `searchbar`        | 搜索条         |
| `banner`         | 标语、广告条、顶部广告条                 | `searchlnput`      | 搜索输入框     |
| `login`          | 登陆，（例如登录表单：form-login）       | `icon`             | 小图标         |
| `loginbar`       | 登录条                                   | `label`            | 商标           |
| `regsiter`       | 注册                                     | `homepage`         | 首页           |
| `ool、toolbar`   | 工具条                                   | `subpage`          | 二级页面子页面 |
| `search`         | 搜索                                     | `hot`              | 热门热点       |
| `list`           | 文章列表，（例如新闻列表：list-news）    | `scroll`           | 滚动           |
| `tab`            | 标签                                     | `sitemap`          | 网站地图       |
| `msg 或 message` | 提示信息                                 | `current`          | 当前的         |
| `joinus`         | 加入                                     | `status`           | 状态           |
| `btn`            | 按钮，（例如搜索按钮可写成：btn-search） | `tips`             | 小技巧         |
| `note`           | 注释                                     | `guild`            | 指南           |
| `arr、arrow`     | 标记箭头                                 | `service`          | 服务           |
| `breadcrumb`     | 页面所处位置导航提示                     | `download`         | 下载           |
| `vote`           | 投票                                     | `siteinfo`         | 网站信息       |
| `partner`        | 合作伙伴                                 | `link、friendlink` | 友情链接       |
| `copyright`      | 版权信息                                 | `siteinfoCredits`  | 信誉           |
| `siteinfoLegal`  | 法律信息                                 |                    |                |

## 5、CSS 样式文件表命名

| 文件命名      | 意义                                                         |
| :------------ | :----------------------------------------------------------- |
| `index.css`   | 单独为首页建立样式                                           |
| `head.css`    | 头部样式，多个页面头部设计风格相同时使用                     |
| `base.css`    | 基本的共用样式                                               |
| `style.css`   | 独立页面所使用的样式文件                                     |
| `global.css`  | 面样式基础，全局公用样式，页面中必须包含                     |
| `layout.css`  | 布局、版面样式，公用类型较多时使用，一般用在首页级页面和产品类页面中 |
| `module.css`  | 模块，用于产品类页，也可与其它样式配合使用                   |
| `master.css`  | 主要的样式表                                                 |
| `columns.css` | 专栏样式                                                     |
| `themes.css`  | 主体样式                                                     |
| `forms.css`   | 表单样式                                                     |
| `mend.css`    | 补丁，基于以上样式进行的私有化修补                           |
| `print.css`   | 打印                                                         |

## 6、图片命名



- 图片名称必须小写，禁止使用特殊字符、中文
- 使用英文或拼音缩写，禁止特殊字符
- 名称间隔使用`-`符号
- 命名需要能体现图片的大概用途
- 禁止文件名和实际图片内容不符

常见示例：

```text
 bg.jpg          // 背景图片
 mod-bg.jpg      // 模块背景
 sprites.png     // 精灵图
 btn-start.png   // 开始按钮
 ico-play.png    // 修饰性图片
```

## 7、图片优化



- 图片体积不能超过 300K
- JPG 图片必须压缩，一般 80%品质即可，保证文字清晰
- JPG 图片必须使用渐进式图片：使用 Photoshop 的“存储为 web 所用格式”时候，勾选“连续”
- 透明 PNG 图片必须使用压缩工具压缩后提供 。
- 推荐压缩图片工具网址：[https://tinypng.com/(opens new window)](https://tinypng.com/)

![image-20220329003848069](https://www.arryblog.com/assets/img/image-20220329003848069.0fe6f894.png)

## 8、图片标签规范



- PC 端 img 图片必须填写`width`、`height`、`alt`属性
- 移动端必须填写`alt`属性
- alt 不能为无意义字符，需要能表现出图片的含义，如图片为道具图，则应该为道具的名称

## 9、合理切图



- 需要**变动的文字**禁止切到图片中，如果不确定是否需要变动，请**咨询接口人**
- 需要程序后台**动态生成的图片**，如头像、奖品，必须单独切割出来
- **装饰性图片**合并成精灵图，减少页面请求

