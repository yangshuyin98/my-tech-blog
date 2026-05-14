---
title: "Web 前端项目开发规范和最佳实践"
source: "https://www.arryblog.com/guide/project/"
category: "规范"
order: 1
---

# Web 前端项目开发规范和最佳实践

综合系统性复习和研究企业级项目开发的方法论

> 从以下几个方面进行：

- CSS 发展史与 CSS 模块划分：HTML 的诞生，CSS 的诞生，CSS 的版本，CSS 的研究方向
- CSS 文件划分及功能分类
- CSS 方法论及样式规范
- 使用 Git 对项目进行版本管理
- CSS 还原 UI 设计
- PC 端布局和移动端布局开发等

## 一、CSS 发展史与 CSS 模块划分

从 HTML/CSS 的诞生，CSS 的版本迭代，到 CSS 的研究方向了解本质，看清方向，明确出处，方便遇到问题随时可查阅。

### 1、HTML 的诞生

1991 年 8 月 6 日，诞生了人类有史以来的第一个网站（即：[http://info.cern.ch (opens new window)](http://info.cern.ch/)），作者是万维网之父[蒂姆·伯纳斯·李 (opens new window)](https://baike.baidu.com/item/蒂姆·伯纳斯·李)。当然网站的形态跟现在完全不一样，因为它没有样式，简单地说，它只有文字和图像两种，并没有其他的信息元素。

![img](https://www.arryblog.com/assets/img/9407011_31-A4-at-144-dpi.d054bd8e.jpg)

![img](https://www.arryblog.com/assets/img/9001001_01-A4-at-144-dpi.0c94a383.jpg)

早期的HTML网页

### 2、CSS 的诞生

在那个遥远的年代，人们也渴望 web 网页变得更漂亮，于是在 1994 年[哈肯·维姆·莱 (opens new window)](https://baike.baidu.com/item/哈肯·维姆·莱)和[伯特·波斯 (opens new window)](https://baike.baidu.com/item/伯特·波斯)共同提出了层叠样式表（Cascading Style Sheets，即 CSS）的概念。

- CSS 从此成为了网页开发的标准之一，对于网页排版印刷、美感以及亲和力有着深远的影响和意义。
- 在这两年之后，[W3C (opens new window)](https://baike.baidu.com/item/w3c)的 CSS 工作小组(即哈肯·维姆·莱团队)推出了 CSS1.0 规范，后来陆续发布了 CSS2.1 规范和 CSS3.0 规范草案及其他迭代版本。

![image-20220726182540542](https://www.arryblog.com/assets/img/image-20220726182540542.c36956b3.png)

[W3C CSS2.1规范文档](https://www.w3.org/TR/2011/REC-CSS2-20110607/)

### 3、CSS 的版本

CSS2.1 规范和 CSS3.0 规范草案指导 Web 开发者写了很多年的 CSS。直到后来，大概 2015 年左右，W3C 的 CSS 工作小组发现 CSS 发展的越来越快，有关于 CSS 方面的特性增加了不少，而且不同的特性推进速度都有所不同。

- 也就这个时候，W3C 的 CSS 工作小组为了能更好的维护和管理 CSS 的特性，该组织决定不在以 CSS 的版本号，比如我们熟悉的 CSS1.0、CSS2.1、CSS3.0 这样的方式来管理 CSS。而是将每个 CSS 功能特性拆分成独立的功能模块，并且以 Level 1, Level2，Level 3 等方式来管理 CSS 规范中的特性。
- 也就是说以后不会再出现 CSS4.0 的版本，而是具体指向某个模块的 Level 版本，例如：CSS 选择器模块已经发展到 Level 4 了。
- 可以通过 W3C 官网查看到 CSS 模块的各种 Level 版本，或查看[https://drafts.csswg.org/(opens new window)](https://drafts.csswg.org/)

![image-20220726183254703](https://www.arryblog.com/assets/img/image-20220726183254703.8efaca6f.png)

CSS模块的划分

### 4、CSS 的研究方向

大体上 CSS 的学习可以朝着三个方向进行研究，分别是：

- 特效 （可以学习动画、3D、渐变等）
- 工程化 （可以学习 sass、less、postcss 等）
- 布局（可以学习 flex、grid、响应式等）

本次 30 天学习计划主要围绕 CSS 布局和特效方向展开学习，从入门、精通到实战，学以致用，完成工作中大部分的需求，后期再学习工程化。

## 二、CSS 文件划分及功能分类

深入了解，中大型项目中关于文件目录的划分和功能分类

### 1、CSS 文件划分

在中大型项目中，一般会对 CSS 进行文件划分，根据文件的性质与用途，大概会分成：

- 公共型样式
- 特殊型样式
- 皮肤型样式

公共型样式可命名为`global.css`或`common.css`等名字，主要包括网站通用样式编写。例如：重置默认样式 reset、网站通用布局、通用模块和元件、通用响应式系统等

```css
/* 重置样式 */
css代码...

/* 网站通用布局 */
css代码...

/* 通用模块 */
css代码...

/* 通用元件 */
css代码...

/* 通用响应式系统 */
css代码...
```

::: info 注：

特殊型样式主要是根据当前页面来决定的文件，只针对当前页面做出特殊处理的样式，例如只在首页中用到的样式可放置到`index.css`中，在登录页中用到的样式可放置到`login.css`中

皮肤型样式是针对网站需要皮肤功能时，把颜色、背景等抽离出来放到文件中的形式，例如`theme-orange.css`、`theme-skyblue.css`等。

:::

**CSS 文件的引入顺序如下：**

```html
<link href="./assets/css/global.css" rel="stylesheet" type="text/css" />
<link href="./assets/css/index.css" rel="stylesheet" type="text/css" />
<link href="./assets/css/theme.css" rel="stylesheet" type="text/css" />
```

### 2、CSS 功能分类

上面提到了公共型样式，在文件中具体包括哪些常见的功能呢？大概可分为如下几类：

- 重置样式
- 网站通用布局
- 通用模块
- 通用元件
- 通用响应式系统

### 3、重置样式

重置样式，主要是去除默认样式和统一不同设备下的表现形态。通常为`Reset CSS`代码和`Normalize CSS`代码的结合版本。

我们将在接下来的项目开发中把二者结合成为了一个`reset.css`文件，并在项目中进行使用。

> 后边会有章节详细解读

### 4、网站通用布局

网站通用布局主要指的是对网站中出现的大块结构进行排版

**如：** PC 端中的菜单、内容的左右布局方案；移动端中的头部、列表、尾部的上中下布局方案等。

![image-20220726185844094](data:image/png;base64,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VkdERL+Y1urHYneC1+L5/x17I6J7XHZ+2xeno63GHWnpkzue/2tXnghwir1au+uFrQcjIvp8aOjAdn397q+t/re6iIjC3v84uOCMzjw7oJVuvfjvQjFDJ1PMAPAu0lDM1mMGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAjGIGAICMYgYAgIxiBgCAzGlHjhw51ecAAABvX64xAwBA5v8D1CJNZypiDeQAAAAASUVORK5CYII=)

菜单、内容的左右布局

![image-20220726190601205](data:image/png;base64,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vwAAJCJ/AQBIRP4CAJCI/AUAIBH5CwBAIvIXAIBE5C8AAInIXwAAEpG/AAAkIn8BAEhE/gIAkIj8BQAgEfkLAEAi8hcAgETkLwAAichfAAASkb8AACQifwEASET+AgCQiPwFACAR+QsAQCLyFwCAROQvAACJyF8AABKRvwAAJCJ/AQBIRP4CAJCI/AUAIBH5CwBAIvIXAIBE5C8AAInIXwAAEpG/AAAkIn8BAEhE/gIAkIj8BQAgEfkLAEAi8hcAgETkLwAAichfAAASkb8AACQifwEASET+AgCQiPwFACAR+QsAQCLyFwCAROQvAACJyF8AABKRvwAAJCJ/AQBIRP4CAJCI/AUAIBH5CwBAIvIXAIBE5C8AAInIXwAAEpG/AAAkIn8BAEhE/gIAkIj8BQAgEfkLAEAi8hcAgETkLwAAichfAAASkb8AACQifwEASET+AgCQiPwFACAR+QsAQCLyFwCAROQvAACJyF8AABKRvwAAJCJ/AQBIRP4CAJCI/AUAIBH5CwBAIvIXAIBE5C8AAInIXwAAEpG/AAAkIn8BAEhE/gIAkIj8BQAgEfkLAEAi8hcAgETkLwAAichfAAASkb8AACQifwEASET+AgCQiPwFACAR+QsAQCLyFwCAROQvAACJyF8AABKRvwAAJCJ/AQBIRP4CAJCI/AUAIBH5CwBAIvIXAIBE5C8AAInIXwAAEpG/AAAkIn8BAEhE/gIAkIj8BQAgEfkLAEAi8hcAgETkLwAAichfAAASkb8AACQifwEASET+AgCQiPwFACAR+QsAQCLyFwCAROQvAACJyF8AABKRvwAAJCJ/AQBIRP4CAJCI/AUAIBH5CwBAIvIXAIBE5C8AAInIXwAAEpG/AAAkIn8BAEhE/gIAkIj8BQAgEfkLAEAi8hcAgETkLwAAichfAAASkb8AACQifwEASET+AgCQiPwFACAR+QsAQCLyFwCAROQvAACJyF8AABKRvwAAJCJ/AQBIRP4CAJCI/AUAIBH5CwBAIvIXAIBE5C8AAInIXwAAEpG/AAAkIn8BAEhE/gIAkIj8BQAgEfkLAEAi8hcAgETkLwAAichfAAASkb8AACQifwEASET+AgCQiPwFACAR+QsAQCLyFwCAROQvAACJyF8AABKRvwAAJCJ/AQBIRP4CAJCI/AUAIBH5CwBAIvIXAIBE5C8AAInIXwAA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)

头部、列表、尾部的上中下布局

::: tip注：

[点击查看，实现 CSS 布局的几种策略 👆(opens new window)](https://www.arryblog.com/guide/css3/css-float-clear.html)

:::

### 5、通用模块

通用模块指的是网页中可以重复使用的较大的整体。比如：

- 导航
- 登录
- 注册
- 各种列表
- 评论
- 搜索等

### 6、通用原件

通用原件指的是不可再分的较为小巧的个体，通常被重复用于各种模块中。比如：

- 按钮
- 输入框
- loading
- 图标等

### 7、通用响应式系统

通用响应式系统指的是在不同设备下要实现响应式布局，当满足了某个断点设定后调用的相应变化样式。比如：

- 浮动添加
- 栅格生效
- 显示隐藏
- 版心宽度等

## 三、标签默认样式及清除

深入了解目前全球大厂 Web 开发者常用的清除默认样式不同解决方案及最佳实践。

### 1、标签默认样式

一些 HTML 标签在浏览器中会有默认样式。例如：

- body 标签会有`margin: 8px;`
- ul 标签会有`margin: 16px 0;`及 `padding-left: 40px`

当我们在切图软件中进行尺寸或位置测量的时候，把测量出来的数值设置到对应的标签上时，可能会受到当前标签默认样式的影响，从而页面显示效果跟设计图效果不符。

- 开发时浏览器的默认样式可能会给我们带来多浏览器兼容性问题，影响开发效率。所以解决的方法就是一开始就将浏览器的默认样式全部去掉，更准确说就是通过重新定义标签样式。
- “覆盖”浏览器的 CSS 默认属性。最最简单的说法就是把浏览器提供的默认样式覆盖掉，这就是 CSS reset

```css
* {
  margin: 0;
  padding: 0;
}
```

注：

以上这也是一种 CSS Reset 的方法，让所有的选择器的 padding、margin 都设置成 0

这是一种强大的方法，也是最简单，最安全的方法，不过，也是最占用资源的方法。对于小型的网站来说，用这个并不会带来大的资源浪费。

但如果是像淘宝，YouTube 这种架构非常大的网站，刚需要有选择地进行 CSS 重设，以减少资源浪费。推荐以下 3 种 Reset CSS 学习：

- 雅虎 [YUI Reset CSS(opens new window)](https://clarle.github.io/yui3/yui/docs/cssreset/)
- [CSS Tools：Reset CSS(opens new window)](https://meyerweb.com/eric/tools/css/reset/)
- [Normalize CSS(opens new window)](https://github.com/necolas/normalize.css/blob/master/normalize.css)

### 2、清除默认样式 - YUI Reset CSS

雅虎 Yui Reset CSS，可参考 [Yui Reset CSS(opens new window)](https://clarle.github.io/yui3/yui/docs/cssreset/)



::: details  点击查看完整源代码

```css
/*
YUI 3.18.1 (build f7e7bcb)
Copyright 2014 Yahoo! Inc. All rights reserved.
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
  *font-size: 100%;
}
legend {
  color: #000;
}
```

:::

### 3、清除默认样式 - CSS Tools: Reset CSS

通常在网页开发中，要去掉这些影响尺寸和位置的默认样式及其他影响布局的默认值。可以参考 [CSS Tools: Reset CSS (opens new window)](https://meyerweb.com/eric/tools/css/reset/)方案

::: details  点击查看完整源代码

```css
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
```


:::

### 4、清除默认样式 - Normalize CSS

由于 Reset CSS 相对“暴力”，不管你有没有用，统统重置成一样的效果，且影响的范围很大，所以更加“平和”的一种方式 [Normalize CSS (opens new window)](https://github.com/necolas/normalize.css/blob/master/normalize.css)诞生了。

Normalize CSS 可以看成是一种 Reset CSS 的替代方案，创造 Normalize CSS 有下面这几个目的：

- 保护有用的浏览器默认样式而不是完全去掉它们
- 一般化的样式：为大部分 HTML 元素提供
- 修复浏览器自身的 bug 并保证各浏览器的一致性
- 优化 CSS 可用性：用一些小技巧
- 解释代码：用注释和详细的文档来

::: details  点击查看完整源代码

```css
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}
body {
  margin: 0;
}
main {
  display: block;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}
pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}
a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}
button,
input {
  /* 1 */
  overflow: visible;
}
button,
select {
  /* 1 */
  text-transform: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}
progress {
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}
details {
  display: block;
}
summary {
  display: list-item;
}
template {
  display: none;
}
[hidden] {
  display: none;
}
```

:::




### 5、CSS 重置样式最佳实践

在接下来的项目开发中，我们会采用`Normalize CSS`和`Reset CSS`结合代码，形成一个更加强大的方案。

::: details  点击查看完整源代码

```css
@charset "utf-8";

/* --------------------重置样式-------------------------------- */

body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
}

/* 设置默认字体 */
body {
  font-size: 14px;
  font-style: normal;
  font-family: -apple-system, BlinkMacSystemFont, segoe ui, Roboto, helvetica
      neue, Arial, noto sans, sans-serif, apple color emoji, segoe ui emoji, segoe
      ui symbol, noto color emoji;
}

/* 字体太小用户体检不好，让small恢复12px */
small {
  font-size: 12px;
}

h1 {
  font-size: 18px;
}

h2 {
  font-size: 16px;
}

h3 {
  font-size: 14px;
}

h4,
h5,
h6 {
  font-size: 100%;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
  background-color: transparent;
}

a:hover,
a:active {
  outline-width: 0;
  text-decoration: none;
}

/* 重置表格 */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* 重置hr */
hr {
  border: 0;
  height: 1px;
}

/* 图形图片 */
img {
  border-style: none;
}

img:not([src]) {
  display: none;
}

svg:not(:root) {
  overflow: hidden;
}

/* 下面的操作是针对于html5页面布局准备的，不支持ie6~8以及其他低版本的浏览器 */
html {
  /* 禁用系统默认菜单 */
  -webkit-touch-callout: none;
  /* 关闭iphone & Android的浏览器纵向和横向模式中自动调整字体大小的功能 */
  -webkit-text-size-adjust: 100%;
}

input,
textarea,
button,
a {
  /* 表单或者a标签在手机点击时会出现边框或彩色的背景区域，意思是去除点击背景框 */
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/* 重置html5元素的默认样式 */
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}

audio,
canvas,
progress,
video {
  display: inline-block;
}

audio:not([controls]),
video:not([controls]) {
  display: none;
  height: 0;
}

progress {
  vertical-align: baseline;
}

mark {
  background-color: #ff0;
  color: #000;
}

sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

button,
input,
select,
textarea {
  font-size: 100%;
  outline: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

textarea {
  overflow: auto;
}

button,
html [type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
```

:::



## 四、CSS 方法论及样式规范

深入研究和学习 CSS 方法论 和 规范

### 1、CSS 方法论

方法论是一个哲学术语，会对一系列具体的方法进行分析研究、系统总结并最终提出较为一般性的原则。

- CSS 方法论是一种面向 CSS、由个人和组织设计、已被诸多项目检验且公认有效的最佳实践。
- 这些方法论都会涉及结构化的命名约定，并且在组织 CSS 时可提供相应的指南，从而提升代码的性能、可读性以及可维护性。

### 2、常见的 CSS 方法论

- OOCSS
- BEM
- SMACSS
- Atomic CSS

### 3、OOCSS

[OOCSS (opens new window)](http://oocss.org/)（Object-Oriented CSS）是指面向对象的 CSS，由 Nicole Sullivan 在 2009 年提出，借鉴了面向对象编程的抽象思维。

- 其核心概念是采用模块化的实现方式，将 CSS 分解成可复用和继承的对象，也就是将关注点从页面转移到页面内的组件。
- OOCSS 包含两条核心原则，如下所列，每条原则下都给出了相应的示例。

**① 结构与皮肤分离，即不要将位置、尺寸等结构属性和字体、颜色等皮肤属性写在一个选择器中。**

```html
<style>
  .col {
    float: left;
    width: 200px;
  }
  .line {
    background: #f60;
  }
</style>
<div class="line col"></div>
```

**② 内容与容器分离，即让对象的行为可预测，避免对位置的依赖，子元素即使离开了容器也应该能正确显示。**

```html
<style>
  .line {
    background: #f60;
  }
  .unit {
    width: 50%;
  }
</style>
<div class="line">
  <div class="unit"></div>
</div>
```

::: info 命名约定

在 OOCSS 中，类名既要能传递对象的用途，也要有通用性，例如 mod、complex、pop 等。

- 如果将 CSS 类命名的太语义化，例如 navigation-bar，那么就会将其限制在导航栏，无法应用到网页的其它位置。

**缺点**

OOCSS 的缺点也很明显，如下所列：

- （1）虽然样式的粒度变小了，但同时会产生许多充满类的 HTML 元素。
- （2）在避免特殊性冲突时，OOCSS 选择的方案是放弃层叠，这样就无法最大程度地利用关系选择器的优势。
- （3）为了让类能更通用，在命名时就得弱化语义。

:::

### 4、BEM

国内的很多大厂主要采用 BEM + SMACSS 这两种方法论的结合命名约定，所以下面对这两种方法论进行简单介绍（天猫、京东 ....）

**BEM（Block Element Modifier）是指块级元素修饰符，BEM 分为三部分：**

- 块（Block）是一个独立实体，最高级抽象，例如菜单、文本框等
- 元素（Element）是块的组成部分，被包含在块中，无法自成一体，例如菜单项、标题等
- 修饰符（Modifier）是块或元素的状态，可更改它们的外观或行为，例如高亮、选中等

**BEM 中的块、元素和修饰符需要全部小写**

- 名称中的单词用连字符（-）分隔
- 元素由双下划线（__）分隔
- 修饰符由双连字符（--）分隔
- 注意，块和元素都既不能是 HTML 元素名或 ID，也不依赖其它块或元素。

```html
<style>
  .form {
  }
  .form--theme-xmas {
  }
  .form__input {
  }
  .form__submit {
  }
  .form__submit--disabled {
  }
</style>
<form class="form form--theme-xmas">
  <input class="form__input" type="text" />
  <input class="form__submit form__submit--disabled" type="submit" />
</form>
```

上面代码中

- `.form` 是块，表示一个独立实体
- `.form__input` 和 `.form__submit` 是其元素
- `.form--theme-xmas` 是其修饰符
- 而 `.form__submit--disabled` 是 `.form__submit` 的修饰符

BEM 的核心思想就是用这种命名约定来清晰的表达出类的含义以及与其它类之间的关系。

**BEM 的缺点如下：**

- （1）BEM 与 OOCSS 一样，也抛弃了层叠，因此也不能完全挖掘出关系选择器的潜力。
- （2）CSS 类名可能会比较长而且复杂。
- （3）需要完善规则说明文档，否则 HTML 结构将难以阅读。

### 5、SMACSS

SMACSS（Scalable and Modular Architecture for CSS）是指可伸缩及模块化的 CSS 架构

由 Jonathan Snook 在 2011 年雅虎工作时提出。他在 OOCSS 和 BEM 的基础上添加了五种类别的组件的处理规则，具体如下所列：

- 1、**基础（Base）** 是为 HTML 元素定义默认样式，可以包含属性、伪类等选择器
- 2、**布局（Layout）** 会将页面分为几部分，可作为高级容器包含一个或多个模块，例如左右分栏、栅格系统等
- 3、**模块（Module）** 又名对象或块，是可重用的模块化部分，例如导航栏、产品列表等
- 4、**状态（State）** 描述的是任一模块或布局在特定状态下的外观，例如隐藏、激活等
- 5、**主题（Theme）** 也就是换肤，描述了页面的外观，它可修改前面四个类别的样式，例如链接颜色、布局方式等

**命名约定：推荐使用前缀来区分布局、模块、状态和主题，如下所列**

- `l-`或`layout-`用作布局的前缀，例如：`.l-inline`、`.layout-grid`等；
- `m-`或模块自身的命名用作其前缀，例如：`.m-profile`、`.field`等；
- `is-`用作状态的前缀，例如：`.is-collapsed`、`.is-active`等；
- `theme-`用作主题的前缀，例如：`.theme-a-background`、`.theme-l-grid`等。
- 注意，由于基础规则是直接作用于元素的，因此不需要前缀

**共享**

在实际工作中，不需要局限于某一个 CSS 方法论，很多时候可以结合使用，共享模块化 CSS 的规则。例如遵循 OOCSS 的第一条分离原则，BEM 的命名约定，以及 SMACSS 的分类前缀，具体如下所列:

- （1）基础仍旧沿用 SMACSS 的规则，布局和模块使用 SMACSS 的前缀。
- （2）子元素用双下划线（`__`）分隔，其状态前缀沿用`“is-”`。
- （3）修饰符也以`“is-”`为前缀，与模块组合时用双连字符（`--`）分隔。
- （4）适当层叠，最好保持在一层。

在下面的示例中，`.m-notice__img` 和 `.m-notice__content`是模块的子元素，`.is-important`是子元素 h6 的状态，`.m-notice--is-active`是模块的修饰符。

```html
<style>
  .l-notice {
  }
  .m-notice {
  }
  .m-notice--is-active {
  }
  .m-notice__img {
  }
  .m-notice__content h6 {
  }
  .is-important {
  }
</style>
<div class="m-notice l-notice">
  <img class="m-notice__img" />
  <div class="m-notice__content">
    <h6>......</h6>
    <h6 class="is-important">......</h6>
  </div>
</div>
```

::: tip 注：

- 任何软件设计都存在不完美的地方，CSS 方法论也是一样。比如：命名过长不易维护，HTML 不够简洁等。
- 但是它带来的巨大优势也是非常明显的，比如：样式不容易冲突，尤其是复杂的样式结构；
- 清晰的 CSS 架构，对大型 CSS 项目管理维护非常重要等。

:::

## 五、样式规范

- **使用类选择器，放弃 ID 选择器：** ID 在一个页面中的唯一性导致了如果以 ID 为选择器来写 CSS，就无法重用。
- **命名应简约而不失语义：** 反对过长命名和没有语义的命名，如：`.m-navigation`、`.m-abc`，推荐`.m-nav`。
- **相同语义的不同类命名：** 直接加数字或字母区分即可（如：`.m-list`、`.m-list2`、`.m-list3`等，都是列表模块，但是是完全不一样的模块）。
- **防止污染和被污染：** 为了防止后代选择器污染，尽量采用 `>` 方式，例如：`-m-nav>li`，而不是`-m-nav li`。
- **最后一个值也以分号结尾：** 通常在大括号结束前的值可以省略分号，但是这样做会对修改、添加和维护工作带来不必要的失误和麻烦。
- **省略值为 0 时的单位：** 为节省不必要的字节同时也使阅读方便，我们将 0px、0em、0%等值缩写为 0。
- **根据属性的重要性按顺序书写：** 先显示定位布局类属性，后盒模型等自身属性，最后是文本类及修饰类属性。例如：

```css
.m-box {
  position: relative;
  width: 600px;
  margin: 0 auto 10px;
  text-align: center;
  color: #000;
}
```

- **CSS 需要进行格式化和对齐处理：** 推荐 vsCode 插件：`formate: CSS/LESS/SCSS formatter`

::: info 注：

[点击查看，更多 HTML/CSS 代码规范 (opens new window)](https://www.arryblog.com/guide/standard/htmlcss-code-specification.html)👆

:::

## 六、CSS 命名规范

[点击查看，CSS 样式命名规则和规范 (opens new window)](https://www.arryblog.com/guide/standard/css-naming-convention.html)👆

## 七、Git 初始化项目

此次项目实战，我们将使用 Git 进行项目代码的管理

### 1、Git 的基础配置

Git 的安装配置

- Git 各平台安装包下载地址为：[http://git-scm.com/downloads(opens new window)](http://git-scm.com/downloads)
- 当安装完 Git 该做的第一件事就是设置你的用户名称与邮件地址。
- 这样做很重要，因为每一个 Git 的提交都会使用这些信息，并且它会写入到你的每一次提交中，不可更改：

```shell
# 设置提交代码时的用户信息，开始前我们需要先设置提交的用户信息，包括用户名和邮箱：
# 如果去掉 --global 参数只对当前仓库有效。

git config --global user.name "你的名字（一定要是英文的）"
git config --global user.email "你的邮箱"

# 查看用用户名和邮箱信息是否配置成功
git config --global --list
```

- 因为 Git 是分布式版本控制系统，所以，每个机器都必须自报家门：你的名字和 Email 地址。
- 你也许会担心，如果有人故意冒充别人怎么办？这个不必担心，首先我们相信大家都是善良的群众，其次，真的有冒充的也是有办法可查的。

注意：

git config 命令的 --global 参数，用了这个参数，表示你这台机器上所有的 Git 仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和 Email 地址

### 2、创建 Git 本地版本库

首先，选择一个合适的地方，创建一个空目录（确保目录名和父目录，不能包含中文）：

![image-20220727020503390](https://www.arryblog.com/assets/img/image-20220727020503390.924843dd.png)

### 3、获取 Git 仓库

有两种取得 Git 项目仓库的方法

- 第一种是在现有项目或目录下导入所有文件到 Git 中；
- 第二种是从一个服务器克隆一个现有的 Git 仓库。

**在现有目录中初始化仓库**

使用 Git 来对现有的项目进行管理，你只需要进入该项目目录并输入：

```shell
# 通过git init命令把这个目录变成Git可以管理的仓库：
git init
```

> 生成的`.git` 隐藏文件夹，即：Git 本地仓库

瞬间 Git 就把仓库建好了，而且告诉你是一个空的仓库（empty Git repository），细心的你可以发现当前目录下多了一个 `.git` 的目录

- 这个目录是 Git 来跟踪管理版本库的，没事千万不要手动修改这个目录里面的文件，不然改乱了，就把 Git 仓库给破坏了。
- 如果你没有看到 .git 目录，那是因为这个目录默认是隐藏的，用`ls -ah`命令就可以看见。

![image-20220727022351353](https://www.arryblog.com/assets/img/image-20220727022351353.5c93f300.png)

### 4、初始化项目基础配置

在 vscode 新建 .gitignore 文件

> `.gitignore` 文件用于过滤需要上传的文件

创建 `README.md` 文件

> 用于编写项目说明文档

![image-20220727024131073](https://www.arryblog.com/assets/img/image-20220727024131073.7bd04355.png)

### 5、新建远程仓库，使用 Gitee

![image-20220727023455853](https://www.arryblog.com/assets/img/image-20220727023455853.3f722eaf.png)

> 创建远程仓库，成功后如下：

![image-20220727023821611](https://www.arryblog.com/assets/img/image-20220727023821611.8f6e1425.png)

### 6、添加远程仓库提交地址

```shell
# 在vscode的控制台输入以上复制的命令：运行命令，即可添加远程仓库提交地址
git remote add origin https://gitee.com/aicodingedu/icoding.git
```

![image-20220727025127118](https://www.arryblog.com/assets/img/image-20220727025127118.7cfec524.png)

### 7、Git 提交、创建分支

在 vscode 中提交项目文件到本地仓库

![image-20220727192836327](https://www.arryblog.com/assets/img/image-20220727192836327.9a58823d.png)

推送 Git 主分支 master 至远程仓库

![image-20220727135244139](https://www.arryblog.com/assets/img/image-20220727135244139.914fc3e2.png)

> 如果是第一次提交，需要输入 Gitee 的用户名和密码

![image-20220709191838273](https://www.arryblog.com/assets/img/image-20220709191838273.eb2392c9.png)

> 创建 Git 分支

![image-20220727031030288](https://www.arryblog.com/assets/img/image-20220727031030288.94db3ef1.png)

> 添加 Git 分支备注信息

![image-20220727031236794](https://www.arryblog.com/assets/img/image-20220727031236794.cddfb024.png)

> 推送 Git 分支至远程仓库

![image-20220727031506579](https://www.arryblog.com/assets/img/image-20220727031506579.2c91440a.png)

SUCCESS

远程仓库推送成功后，查看效果

![image-20220727182214402](https://www.arryblog.com/assets/img/image-20220727182214402.d84507ef.png)

> 查看远程仓库的分支

![image-20220727182510802](https://www.arryblog.com/assets/img/image-20220727182510802.633b6be0.png)

### 8、关于 Git 详细图文版教程

[点击查看，完整系统版 Git 快速入门教程 👆(opens new window)](https://www.arryblog.com/guide/html5/git-introduction.html)

