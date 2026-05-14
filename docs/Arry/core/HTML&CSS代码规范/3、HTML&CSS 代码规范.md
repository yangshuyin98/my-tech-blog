---
title: "HTML&CSS代码规范"
source: "https://www.arryblog.com/guide/standard/htmlcss-code-specification.html"
category: "规范"
order: 3
---

# HTML/CSS 代码规范

重要性

- 优雅的代码风格和规范是一位优秀程序员的必备素质，每家企业都有自己的一套代码规范和标准，当然行业和社区也有很多约定俗成的规范。
- 优秀的代码规范不仅仅能提高代码的可阅读性、可维护性，项目代码的迭代和传承，对于 Web 前端 HTML、CSS 代码更有利于 SEO 搜索引擎优化。
- 以规范、合理的设计写出更高质量的代码，以技术解决技术问题。
- 写下一行代码只要 1 分钟，但未来会被一代代工程师读很多次、改很多次。代码的可读性与可维护性，是我心中好代码的第一标准。

## 1、HTML 标签使用规范

标签使用规范

- 标签必须合法且闭合、嵌套正确、`标签名需小写`
- 标签语法无错误，需要符合语义化
- 标签的自定义属性以`data-`开头，如：`<a href="#" data-num='18'></a>`
- 除非有特定的功能、组件要求等，禁止随意使用`id`来定义元素样式

## 2、超链接规范

a 标签规范

- 给 `<a>` 标签加上 title 属性
- `<a>`标签的`href`属性必须写上链接地址，暂无的加上`javascript:alert('敬请期待！')`
- 非本页面间跳转，采用打开新窗口模式：`target="_blank"`

## 3、https 协议自适应规范

https 规范

- 将调用静态域名的外部请求，写法上一律去掉协议`http:`部分，采用自适应的写法。
- 具体方法如下：以京东、小米或任意大厂网站为例都一样

![image-20220328221012610](https://www.arryblog.com/assets/img/image-20220328221012610.405428ee.png)

```html
<!-- 外部css样式 -->
<link
  href="//misc.360buyimg.com/mtd/pc/index_2019/1.0.0/static/css/first-screen.chunk.css"
  rel="stylesheet"
/>
<style>
  /* CSS背景图片 */
  .bg {
    background: url(//misc.360buyimg.com/mtd/pc/img/4a15d8883775742e3efbb850ae14def7.png)
      no-repeat;
  }
</style>

<!-- 链接URL -->
<a href="//www.jd.com">进入官网</a>
<!-- 图片SRC -->
<img src="//img12.360buyimg.com/60c06387E40d7008f/5568d4689c3a33eb.jpg.webp" />
<!-- JS链接 -->
<script src="//misc.360buyimg.com/mtd/pc/index_2019/1.0.0/static/js/core1.chunk.js"></script>
```

## 4、有关 flash

注：

页面`禁止使用flash`，动画使用 video、CSS3、canvas 等方式实现，低版本浏览器使用背景图片降级处理

## 5、CSS 选择器规范

### ① 禁止使用层级过深的选择器，最多 3 级

```html
<!--错误示范：-->
<style>
  .without-animation .book-body .book-header .dropdown .dropdown-menu .buttons {
  }
  .without-animation
    .book-body
    .book-header
    .pull-left
    .dropdown-menu
    .buttons {
  }
  .without-animation
    .book-body
    .book-header
    .font-settings
    .dropdown-menu
    .buttons {
  }
  .without-animation
    .book-body
    .book-header
    .js-toolbar-action
    .dropdown-menu.buttons {
  }
</style>
```

### ② 禁止随意使用 id

禁止使用

除非有特定的功能、组件要求等，禁止随意使用 id 来定义元素样式

### ③ 除非是样式 reset 需要，禁止对纯元素选择器设置特定样式，避免样式污染

```html
<style>
  /* 会导致页面所有的a标签都被加上背景 */
  a {
    background: url(xxx);
  }
  /* 后期修改可能会添加一些span标签，如果刚好在div里面，会被污染；不利于后期维护 */
  div span {
    display: block;
  }
</style>
```

## 6、reset 重置样式示例

PC 端

Yahoo 的 YUI reset.css

```css
/*
YUI 3.5.0 (build 5089)
Copyright 2012 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
html {
  color: #000;
  background: #fff;
}
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
fieldset,
img {
  border: 0;
}
address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
  font-style: normal;
  font-weight: normal;
}
ol,
ul {
  list-style: none;
}
caption,
th {
  text-align: left;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}
q:before,
q:after {
  content: "";
}
abbr,
acronym {
  border: 0;
  font-variant: normal;
}
sup {
  vertical-align: text-top;
}
sub {
  vertical-align: text-bottom;
}
input,
textarea,
select {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
}
input,
textarea,
select {
  *font-size: 100%;
}
legend {
  color: #000;
}
```

移动端

有较多文字的文章类页面

```css
/* 移动端常用reset.css (文字版本) */
/* reset */
html,
body,
div,
p,
ul,
li,
dl,
dt,
dd,
em,
i,
span,
a,
img,
input,
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  padding: 0;
}
a,
img,
input {
  border: none;
}
body {
  font: 14px/1.75 -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
a {
  text-decoration: none;
}
ul,
li {
  list-style: none;
}
```

移动端

如果页面无文字，或者不希望文字被长按选中，可使用下面的 reset；

**适合于大多数专题页面**

```css
/* 移动端常用reset.css (无文字版本) */
/* reset */
html,
body,
div,
p,
ul,
li,
dl,
dt,
dd,
em,
i,
span,
a,
img,
input,
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  padding: 0;
}
a,
img,
input {
  border: none;
}
body {
  font: 14px/1.75 -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
a {
  text-decoration: none;
}
ul,
li {
  list-style: none;
}
a,
img {
  -webkit-touch-callout: none; /* 禁止长按链接与图片弹出菜单 */
}
html,
body {
  -webkit-user-select: none; /* 禁止选中文本（如无文本选中需求，此为必选项） */
  user-select: none;
}
```

提示：

移动端页面不需要设置微软雅黑、宋体等字体，终端浏览器字体取决于设备上的系统字体

## 7、CSS 样式属性书写顺序

建议遵循以下顺序：



- 布局定位属性：display / position / float / clear / visibility / overflow
- 自身属性：width / height / margin / padding / border / background
- 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
- 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …

**事例代码如下：**

```css
.box {
  display: block;
  position: relative;
  float: left;
  width: 100px;
  height: 100px;
  margin: 0 10px;
  padding: 20px 0;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  color: #333;
  background: rgba(0, 0, 0, 0.5);
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -o-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```

## 8、CSS3 浏览器私有前缀写法

前缀

CSS3 浏览器私有前缀在前，标准前缀在后

```css
.box {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -o-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```

## 9、页面注释规范

提示：

可通过编辑器的语法高亮功能，确保 HTML、CSS、JS 文件中注释语法正确：

- 禁止注释中出现制作者的个人信息，如姓名、QQ 号、邮箱等。
- 合理的注释有助于后期维护。
- 较长的的 HTML 文件，请在板块之间加入注释，使得结构更清晰

```html
...
<!-- 活动板块 开始 -->
<div class="part-act">...</div>
<!-- 活动板块 结束 -->
...
```

前后端联调

- 如果是需要和后台开发联调的自定义函数。
- 请注明函数的调用方式，包括函数的用途、参数类型等。

```js
// 转盘初始化
// 参数1：是奖品的个数，数字类型
// 参数2：用来旋转的圆盘元素，可为dom元素 或 选择器字符串
var panel = new PanelLotery({
  length: 8,
  el: "#ltpanel",
});
```

上
