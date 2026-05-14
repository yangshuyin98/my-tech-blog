---
title: "PC 端项目开发前的准备工作"
source: "https://www.arryblog.com/guide/project/pc-preparation.html"
category: ""
order: 4
---

# PC 端项目开发前的准备工作



从本节开始我们就正式进入 PC 端项目开发的基础准备工作，按照企业项目开发流程一步步完成

- 创建 Git 仓库，进行项目代码的管理
- 搭建项目基础架构
- 按照一线互联网大厂的标准 和 规范布局开发

## 一、创建远程仓库



目前使用比较广泛的远程仓库服务器有`GitHub`与`Gitee`。`Gitee`基本是模仿`Github`开发的，相当于是国内版的`GitHub`，所以两者在操作上几乎是一样的。

- GitHub 官网：[https://github.com/(opens new window)](https://github.com/)
- Gitee 官网：[https://gitee.com/(opens new window)](https://gitee.com/)

因为`GitHub`在国外，所以不使用代理是打不开了，而`Gitee`在国内，打开速度非常快。所以我们选择以`Gitee`作为教学，教大家学习如何创建远程仓库和操作远程仓库。

> **接下来，我们按下面的步骤在`Gitee`上创建一个远程仓库**

### 1、注册 Gitee 远程仓库账号



进入 [Gitee 官网 (opens new window)](https://gitee.com/)，在右上角，点击注册按扭，注册 Gitee 账号

![image-20231127184240336](https://www.arryblog.com/assets/img/image-20231127184240336.b0bdecfb.png)

> 根据上面填写的信息，注册好的 Gitee 账号，访问`https://gitee.com/qxin905`地址可以进到我的 Gitee 主页

### 2、新建项目远程仓库



以上步骤注册好账号后，就可以登录 Gitee 账号，登录账号后就会进到你的个人主页。然后按下图所示，新建仓库。

![image-20231127184712894](https://www.arryblog.com/assets/img/image-20231127184712894.9c36a480.png)

点击新建仓库，就会跳转到如下截图所在页面，然后按下图所示填写好对应信息

![image-20231127185654865](https://www.arryblog.com/assets/img/image-20231127185654865.a2dde64f.png)

以上信息填写好后，点击创建按扭，就会跳转到如下所示页面，说明仓库创建成功。

![image-20231127191024411](https://www.arryblog.com/assets/img/image-20231127191024411.85e4a86c.png)

注：

此时，仓库还是空的，什么内容也没有，所以显示了以上截图所示内容。如果仓库有内容，该页面就会显示仓库内容。

如果需要仓库有内容，我们可以在线创建内容，也可以把本地仓库的内容推送到这个 test 远程仓库。我们一般不会在线创建内容，而是选择把本地仓库的内容推送到远程仓库。

## 二、利用 Git 管理项目



利用 Git 管理我们的项目，需要执行以下步骤：

- 新建项目文件夹
- 创建本地仓库
- 新建 `.gitignore` 文件
- 新建 `README.md` 文件
- 添加远程仓库
- 创建项目第一个版本，并推送远程仓库

### 1、新建项目文件夹



在电脑某个位置新建 `pc-project` 文件夹，用来存放开发的项目。

### 2、创建本地仓库



在上一步创建的`pc-project` 文件夹目录下打开 `cmd` 命令窗口，执行如下命名创建本地仓库

```shell
# 通过git init命令把这个目录变成Git可以管理的仓库 （俗称本地仓库）
git init
```

> 生成的`.git` 隐藏文件夹，即：Git 本地仓库

### 3、新建 .gitignore 文件



一般我们总会有些文件无需纳入 `Git` 的管理，也不希望它们总出现在未跟踪文件列表。 通常都是些自动生成的文件，比如日志文件，或者编译过程中创建的临时文件等。

> 在这种情况下，我们可以创建一个名为 `.gitignore` 的文件，列出要忽略的文件的模式。

- 新建 `.gitignore` 添加如下内容

```text
# 忽略所有以test.开头的文件，不需Git管理
test.*

# 忽略当前项目中所有 demo 开头的文件
demo.*

# Git 忽略所有以 .o 或 .a 结尾的文件
*.[oa]

# Git忽略以 a.tmp 或b.tmp等 .tmp前面只有一个字符的tmp文件
?.tmp

# 只忽略 doc的直接子目录下的任意pdf文件，比如：doc/a.b.pdf，但不能忽略doc/a/b/c.pdf
doc/*/*.pdf

# 忽略 doc/ 目录及其所有子目录下的 .pdf 文件   如 doc/a/b.pdf  doc/a/b/c.pdf
doc/**/*.pdf



# 忽略 任何目录下名为 node_modules目录下的所有文件 （git管理的是文件不是目录，所以该文件下要有内容，否则会自动忽略）
node_modules/
```

### 4、新建 `README.md` 文件



在 Git 项目管理中，`README.md` 是一个**核心的说明文档**，通常作为项目的“门户”或“使用手册”，帮助用户和协作者快速理解项目的内容、功能和使用方式

**核心作用**

- **项目介绍**：用简洁的语言说明项目的**目的、功能、适用场景**。
- **快速上手**：提供安装、配置和运行的**基础步骤**，降低使用门槛。
- **协作指南**：告知贡献者如何参与开发（如代码提交规范、测试要求等）。
- **文档入口**：链接到更详细的文档（如 Wiki、API 说明等）。

**文件特点**

- **格式**：使用 Markdown 语法（`.md` 后缀），兼容 GitHub/Gitee 等平台的渲染。
- **可见性**：默认显示在代码仓库的根目录下，平台会直接将其展示在项目首页。
- **必备性**：是开源项目的“第一印象”，也是团队内部项目的标准文档。

### 5、添加远程仓库



这个项目新建的远程仓库名为 `pc-project`

![image-20250627183934284](https://www.arryblog.com/assets/img/image-20250627183934284.e6301cd2.png)

执行以下命令，添加本地仓库对应的远程仓库

```shell
# 在vscode的控制台输入以上复制的命令：运行命令，即可添加远程仓库提交地址
git remote add origin https://gitee.com/aicodingedu/pc-project.git
```

### 6、生成项目第一个版本，并推送远程仓库



具体操作参考：[Git 提交、创建分支(opens new window)](https://www.arryblog.com/guide/project/#_7、git-提交、创建分支)

## 三、搭建项目基础架构



正式进入项目开发前，需要先按以步骤，把项目基础架构搭建好

- 1、创建项目目录结构
- 2、下载项目需要用到的所有图片
- 3、准备项目需要用到的 `iconfont` 字体图标
- 4、添加重置样式文件 `reset.css`
- 5、分析设计稿（或与设计师沟通），提取项目的公共样式
- 6、编写主题样式文件（`theme.css` 文件）
- 7、创建项目首页
- 8、在首页引入 css 文件

> 以上工作都准备好之后，就可以正式项目的开发了。

### 1、创建项目目录结构



创建如下项目目录结构

```js
pc-project
├─ index.html
├─ README.md
└─ src  // src 文件夹
   ├─ css  // css 文件夹，存放css
   ├─ images // images 文件夹，存放图片
   ├─ js  // js文件夹，存放JS
   ├─ fonts  // fonts文件夹，存放 iconfont图标源文件和 字体文件
   └─ index.html // 项目首页
```

注：

在项目开发中，**`src` 目录**（即 "source" 的缩写）是**核心源代码的存放位置**，通常用于存放项目的**可执行代码、模块、组件等原始文件**，与配置文件、文档、构建脚本等非源码文件分离

### 2、下载项目需要用到的所有图片

第一步：

将项目的 PSD （或其它格式）设计稿，标注切图后上传到蓝湖。（这一步通常在企业是设计师需要做的）

- 在学习阶段，需要同学们自己应在 PS 软件中做好标注切图，然后上传到蓝湖。
- 如果不知道 PS 与 蓝湖配合标注切图的同学，可以观看 钉钉群里面提供的视频教程。

![image-20250628181032914](https://www.arryblog.com/assets/img/image-20250628181032914.b7d7ef7e.png)

第二步：

程序员进到蓝湖，将项目需要用到的所有标注切图全部下载下来，并且统一命名好。然后复制保存到当前项目的 `images` 文件夹下面。

![image-20250628160347858](https://www.arryblog.com/assets/img/image-20250628160347858.2805703f.png)

### 3、准备项目需要用到 iconfont 字体图标



如果项目中有用到对应的字体图标，设计师一开始在 `iconfont` 平台就创建好了，只需要给你的 `iconfont` 账号添加权限即可自行下载。

![image-20250628162416023](https://www.arryblog.com/assets/img/image-20250628162416023.47ece389.png)

将下载的 `iconfont` 字体图标源文件，全部都放到当前项目的 `fonts` 目录下

![image-20250628162712141](https://www.arryblog.com/assets/img/image-20250628162712141.dad0b6dc.png)

### 4、添加重置默认样式文件 `reset.css`



在 `css` 文件夹中新建 `reset.css` 重置默认样式文件，并添加以下样式代码

> 点击 [标签默认样式及清除 (opens new window)](https://www.arryblog.com/guide/project/#三、标签默认样式及清除)了解 重置默认样式相关内容和最佳解决方案

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

### 5、分析设计稿，提取项目的公共样式



以下所讲到的公共样式，全部写到 `global.css` 文件中

- 引入项目需要用到的字体文件

```css
/* 自定义字体 */
@font-face {
  font-family: "PingFangSCRegular";
  src: url("../fonts/PingFangSCRegular.ttf") format("truetype");
}
```

- 分析设计稿的版心，确定框架布局样式

> "版心"（也称为内容区域或容器宽度）是指页面主要内容所在的固定宽度区域，通常居中显示。

分析设计稿的版心后，我们可以通过以下方式实现框架布局样式

```css
.container {
  width: 1226px;
  margin: 0 auto;
}

/* 或 */
.layout-center {
  width: 1226px;
  margin: 0 auto;
}
```

- 定义项目的通用字体样式（大小，行高，颜色，字体类型）、背景色、最小宽

```css
/* 使用继承性，给body标签设置字体 */
body {
  font: 14px/1.5 "PingFangSCRegular", Arial, "Microsoft YaHei";
  color: #333;
  background-color: #fff;
  min-width: 1226px;
}
```

- 常见通用样式书写
  - 单行 和 多行（2 行）文字显示省略号
  - 图片等比缩放到正好覆盖父容器大小
  - 块级元素水平垂直居中代码

> 如果还有其它公共样式，往后继续添加即可

```css
/* 单行文字显示省略号 */
.ellipsis-single-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 多行文字显示省略号,常用 2行 */
.ellipsis-multi-line2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 控制显示的行数 */
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 图片等比缩放正好覆盖父容器（等比裁剪） */
.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 块级元素水平垂直居中 - 方法1: Flex布局 */
.center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 块级元素水平垂直居中 - 方法2: 绝对定位 + transform */
.center-absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### 6、编写主题样式



创建页面主题样式文件 `theme.css` ，编写对应的主题。

> 如果项目有主题切换需求，则需要考虑，否则不需要。当前项目不需要，则不用创建

```css
/* 默认主题色 */
:root {
  --primary-color: #ff6a00;
  /* ..... */
}

/* 黑色主题 */
.dark {
  --primary-color: #000;
  /* ..... */
}
```

注：

当大家学完 JS 后，可以听这个[兼容多终端的响应式项目 (opens new window)](https://www.arryblog.com/web/project/responsive/show.html)， 里面会讲到页面主题切换。

### 7、创建项目首页



- 新建项目首页 `index.html` 文件
- 在`css` 文件夹中，新建首页对应的样式文件 `index.css`

### 8、在首页引入 css 文件



按一定顺序在`index.html` 页面引入 css 样式文件。

> 如果不知道 css 文件应该按何种顺序引入，可以查看 [CSS 文件划分(opens new window)](https://www.arryblog.com/guide/project/#_1、css-文件划分)

```html
<!-- 重置默认样式 -->
<link rel="stylesheet" href="./css/reset.css" />
<!-- iconfont 阿里图标库css样式 -->
<link rel="stylesheet" href="./fonts/iconfont.css" />
<!-- 可以在 global.css中统一重写 iconfont 图标的默认颜色和大小 -->
<link rel="stylesheet" href="./css/global.css" />
<!-- 首页样式 -->
<link rel="stylesheet" href="./css/index.css" />
```



以上工作都准备好之后，就可以正式项目的开发了。

> 以下是最终创建好的项目目录结构

```js
src
├─ css
│  ├─ global.css
│  ├─ index.css
│  └─ rest.css
├─ fonts
│  ├─ demo.css  // 这个文件项目开发后可删除
│  ├─ demo_index.html // 这个文件项目开发后可删除
│  ├─ iconfont.css
│  ├─ iconfont.js
│  ├─ iconfont.json
│  ├─ iconfont.ttf
│  ├─ iconfont.woff
│  ├─ iconfont.woff2
│  └─ PingFangSCRegular.ttf  // 平方字体文件
├─ images
│  ├─ banner-1.png
│  ├─ banner-2.png
│  ├─ banner-3.png
│  ├─ ...... // 更多图片，此处省略.....
├─ index.html
└─ js
```

## 四、网站页面 和 功能开发



详细开发步骤 和 具体开发细节，见 钉钉直播群视频回放中，可查看

> 可联系助理老师获取

