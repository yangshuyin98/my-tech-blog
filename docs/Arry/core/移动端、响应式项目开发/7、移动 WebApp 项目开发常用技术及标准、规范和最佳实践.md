---
title: "移动WebApp项目开发常用技术及标准、规范和最佳实践"
source: "https://www.arryblog.com/guide/webapp/mobile-webapp-project-development.html"
category: "移动Web"
order: 7
---

# 移动 WebApp 项目开发常用技术及标准、规范和最佳实践

在项目实战开始前，我们先来学习以下三方面知识

- 移动端与 PC 端有哪些不同 ？
- 移动端常见的布局处理技术有哪些 ？
- 移动设计稿的标准与规范 ？

### 1、移动端与 PC 端有哪些不同？



在上一章节，我们讲过，移动端与 PC 端有以下 4 点大的区别

- **屏幕大小不同**
- 交互方式不同
- 网络环境和设备性能不同
- 兼容性不同

因为屏幕大小的不同，所以造成我们在实际的移动端布局时，不能和 PC 端一样采用固定大小来布局，而需要自适应屏幕的宽。

移动端屏幕的常见可视区大小为`320-480px`之间，也就意味着我们在实际开发代码时，我们的页面宽在`320-480px`之间。

所以移动端开发，元素的**宽**肯定不能用 px 绝对定位写死，我们得采用相对单位来做开发。

不同手机的详细配置，[可点击查看详细参数 (opens new window)](http://shijuechuanda.com/screen/index.htm)👆

![image-20220815134327670](https://www.arryblog.com/assets/img/image-20220815134327670.fa357871.png)

![image-20220815134217152](https://www.arryblog.com/assets/img/image-20220815134217152.25a9402b.png)

### 2、移动端常见的布局处理技术

移动端常见的 5 种布局技术如下：

- 流体（100% 百分比）布局
- rem 和 vw 布局
- 响应式布局
- Flex 弹性布局（工具）
- Grid 网格布局（工具）

> 其中的流体布局、rem/vw 布局、响应式布局是可以独立实现移动端页面的开发
>
> Flex 弹性和 Grid 网格布局，并不能独立实现移动端布局的开发，他们更像是工具，配合流体布局、rem/vw 布局、响应式布局来实现移动端页面的开发。
>
> 在实际开发中，以提高开发速度，达到最佳效果为目的，通常会在一个项目中混合使用以上 5 种布局。

具体的每一种技术，我们会通过一个个单独的项目来讲解。

### 3、移动设计稿的标准



在实际的开发中，为了保证最终效果在手机的高清屏上能清淅可见，设计稿会采用 `750px` 的宽来设计 `1080px` 。

## 一、流体布局



所谓的流体布局，也叫百分比%布局，本质上就是通过 **%（百分比）和 怪异盒子模型** 结合来实现元素的 **宽** 相对视口缩放 。

在采用流体布局时，结合 Flex 弹性 和 Grid 网格布局，则会达到事半功倍的效果。

> 接下来我们就利用流体布局来实现以下效果图的页面开发

![2022-8-15-index](https://www.arryblog.com/assets/img/2022-8-15-index.6c469f59.png)

### 1、搭建本项目的目录结构



- 首先新建项目文件夹 WebApp
- 在 WebApp 中新建 `css`、`js`、`images` 文件夹，分别用来存放 CSS、JS 文件和图片内容
- 在 CSS 中新建 `reset.css`、`global.css`、`index.css` 文件，分别用来存放重置默认样式、全局通用样式，首页样式

**reset.css 样式文件的内容**

> 可参考博客：[标签默认博客地址 (opens new window)](https://www.arryblog.com/guide/project/#三、标签默认样式及清除)👆 中如下截图内容

![image-20220815153351605](https://www.arryblog.com/assets/img/image-20220815153351605.d1880d52.png)

**其它相关重要的重置样式介绍**

```css
/* 去掉点击的高亮显示效果 */
-webkit-tap-highlight-color: transparent;
/* 在移动端浏览器默认的外观 在ios上加上这个属性才能给按扭和输入框自定义样式 */
-webkit-appearance: none;

/* 禁用长按页面时的弹出菜单 */
img,
a {
  -webkit-touch-callout: none;
}
/* 表单会有外轮廓 */
input {
  outline: none;
}
```

注：

建议在一开始学习时，不要引用 reset.css 文件，这样就可以在学习过程中把所有问题暴露，对于为什么要重置这个默认样式，会有更深的理解。

在实际开发中，我们直接引用 reset.css 文件就好。

> 进到蓝湖，打开设计稿，点击设计稿，按以下截图操作，下载所有切图，然后放到 images 文件夹，修改好名字。

![image-20220816134708722](https://www.arryblog.com/assets/img/image-20220816134708722.751c5c09.png)

### 2、了解设计稿的整体标准和规范



设计稿采用的标准色（如下图）

![颜色](https://www.arryblog.com/assets/img/webapp-color.af32a5ed.jpg)

字体大小、行间距、字体颜色、字体类型

- 字体大小（12px、14px、16px)
- 行间距为字体大小的 1.5 倍
- 字体类型，以微软雅黑为主，数字是 Arial 类型
- 字体颜色主要以 #101010 黑色为主

通过以上数据最后得到如下代码，添加到 global.css 文件中

```css
font: 12px/1.5 Microsoft YaHei;
color: #101010;
```

具体的设计标准，每个公司都有自己的规范，在实际开发中，以公司规范为主。

### 3、新建 index.html 网页，进行首页开发



- 在当前根目录下新建 index.html 网页
- 做好 viewport 视口配置

```css
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

- 引用相关的 CSS 文件，注意引入文件的顺序

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
<link rel="stylesheet" href="./css/reset.css">
<link rel="stylesheet" href="./css/global.css" />
<link rel="stylesheet" href="./css/index.css" />
```

### 4、网站整体（html）结构划分



通过对整个设计稿页面的分析，我们可以用 html 来将整个页面划分成以下几个部分

```html
<!-- header start -->
<header class="header"></header>
<!-- end header-->
<!-- menu start-->
<nav class="menu"></nav>
<!-- end menu -->
<!-- main start -->
<main class="main">
  <!-- cheap start-->
  <section class="cheap"></section>
  <!-- end start-->
  <!-- recommend start -->
  <section class="recommend"></section>
  <!-- end recommend -->
  <!-- product-category start -->
  <section class="product-category"></section>
  <!-- end product-category  -->
</main>
<!-- end main -->
<!-- tabbar start -->
<footer class="tabbar"></footer>
<!-- end tabbar  -->
```

### 5、每个版块开发



本次项目我们采用的是流体布局（%百分比 + 怪异盒子模型布局），所以整个页面中会用到的所有元素，在最开始都需要设置为怪异盒子模型 。

由于一开始，我们并不清楚，页面可能会用到那些 html 元素，所以我们一开始可以用`*`来处理，等页面开发完，再把`*`换成对应的 html 标签。

```css
* {
  /*  怪异盒子模型 ，不过在移动端开发，我们一般会以怪异盒子模型为主 */
  box-sizing: border-box;
}
```

页面开发完，把`*`替换页面用到的 html 元素

```css
ul,
li,
div,
p,
a,
span,
i,
input,
img {
  /* 怪异盒子模型 */
  box-sizing: border-box;
}
```

### 6、iOS 下 tabbar 底部留白与黑线遮挡问题

| ----                                                         | ---                                                          | ---                                                          |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20250710183440338](https://www.arryblog.com/assets/img/image-20250710183440338.39e00482.png) | ![image-20250710183429944](https://www.arryblog.com/assets/img/image-20250710183429944.19a3aac3.png) | ![image-20250710183422258](https://www.arryblog.com/assets/img/image-20250710183422258.26100b2f.png) |



要解决 IOS 下 tabbar 底部留白问题，我们需要先了解两个概念，安全区域和刘海区

我们来看一个简单的案例，代码如下：

```html
<style>
  html,
  body {
    margin: 0;
  }
  .tabbar {
    width: 100%;
    height: 100px;
    background-color: red;
    position: fixed;
    z-index: 222;
    bottom: 0;
  }
</style>
<body>
  <footer class="tabbar"></footer>
</body>
```

> 以上代码显示效果如下：

![img](https://www.arryblog.com/assets/img/image-20220815161359944.a9f69c7f.png)

> 页面默认填宽的是安全区域的高度，并不包括刘海区

那如何让页面高度填充到刘海区呢？

- 在`viewport`中添加`viewport-fit=cover`

```html
<meta
  name="viewport"
  content="width=device-width,viewport-fit=cover,initial-scale=1.0"
/>
```

- 高度填充到刘海区后，tabbar 的内容就会被底下的黑线给遮挡一小部分。

**如何解决底部被黑线遮挡问题 ？**

我们只需要给 tabbar 加下如下代码

**方法一：**

添加以下代码的元素，不能是怪异盒子模型，否则元素自身高度会减少

```css
/* 兼容 IOS<11.2 */
padding-bottom: constant(safe-area-inset-bottom);
/* 兼容 IOS>11.2 */
padding-bottom: env(safe-area-inset-bottom);
```

**方法二：**

100px 是 tabbar 原来的高度

```css
/* 兼容 IOS>11.2 */
height: calc(50px+ constant(safe-area-inset-bottom));
/* 兼容 IOS>11.2 */
height: calc(50px + env(safe-area-inset-bottom));
```

> 在实际开发中，我们一般是先 constant，再 env

针对其它一些机型，不支持上面两种写法的，可以选择用 CSS 的@supports

```css
@supports not (constant(safe-area-inset-bottom)) {
  .tabbar {
    padding-bottom: 30px;
  }
}
```

### 7、流体布局的布局思路与缺陷

（1） 流体布局思路

- 通过计算每个子元素占容器的比例，来平分父容器的整体大小。
- 所有子元素宽的百分比% 加起来要等于 100%。
- 然后通过给子元素设置对应的内边距来实现元素间的空隙。
- 为了保证给子元素添加内边距实现空隙时，不会造成元素宽度变宽，所有元素都设为 `box-sizing: border-box`;

**（2） 流体布局缺陷**

- 只能实现图片和容器的宽高等比缩放，没有办法实现间距，字体大小的等比缩放
- 如果想实现对应的字体和间距在不同尺寸下，有所变化，可以与`@media`媒体询结合来实现微调。

## 二、移动端 rem 布局原理



在学习 rem 布局前，首先我们先来学习 rem 适配的原理

### 1、rem 实现适配的原理

假设我们现在要实现一个 `宽 * 高 = 750px * 400px`的 `div`，代码如下

```css
/* px固定位 */
div {
  width: 750px;
  height: 400px;
}
```

现在我们改用 rem 单位来实现，已知 `1rem=10px` ，则代码如下

```css
/* 改用 rem 单 */
html {
  font-size: 10px; /* 表示 1rem =10px  */
}
div {
  /* 相当于将整个页面分成 75份  每一份1rem 大小为 10px */
  width: 75rem;
  height: 40rem;
}
```

如果以上 CSS 代码不变（将页面分成 75 份），要实现在不同大小屏幕上能等比缩放，我们来看下，对应的 rem 要设置为多少？

| 设备可视宽    | 750px      | 375px      | 540px      |
| :------------ | :--------- | :--------- | :--------- |
| 1rem 计算过程 | 750px / 10 | 375px / 75 | 540px / 75 |
| 1rem 大小     | 10px       | 5px        | 7.2px      |

通过上面的表格，我们知道，要计算不同设备下对应 `1rem` 的大小，我们需要思考将整个页面分成多少份。

然后通过公式：`1rem= 设备可视宽 / 对应份数。`

假设我们现在将页面分成**10 份**，那不同设备下`1rem`的大小具体如下表

| 设备可视宽    | 750px | 375px  | 540px |
| :------------ | :---- | :----- | :---- |
| **1rem 大小** | 75px  | 37.5px | 54px  |

所以我们要用 rem 来开发移动端之前，需要思考，先将页面分成多少份？然后通过以下公式

- 1rem = 设备可视宽 / 对应份数
- 得到不同设备下 1rem 的大小

> 在实际开发中，不同尺寸的手机屏幕下 `1rem` 的大小，是通过 js 来动态获取当前**设备可视宽 / 对应份数来实现**

### 2、JS 动态实现不同设备下 1rem 的大小



`1rem` =html 中 font-size 的大小，则我们只需要动态修改 html 的 font-size 的大小就可以

以下 js 代码，假设将页面分成 `10` 份来计算 `font-size` 大小的

```html
<script>
  // 页面初时化时调用
  initPage();
  function initPage() {
    // 获取html元素
    var html = document.documentElement;
    // 获取屏幕可视区宽
    var clientWidth = html.clientWidth;
    // 限止最大宽为 480
    clientWidth = Math.min(html.clientWidth, 480);
    // 动态设置 html 的font-size大小 (将页面分成 10份 )
    html.style.fontSize = clientWidth / 10 + "px";
  }
  // 当窗口发生改变时调用
  window.addEventListener("resize", initPage);
</script>
```

### 3、px 单位如何转换为 rem



在实际开发的时候，我们是以 750px 的设计稿为标准来开发的

- 现在假设我将页面分成 10 份，那`1rem = 750px / 10 = 75px`
- 那对应的 px 单位，转换成对应的 rem 单，计算公式：`?rem = 元素对应的px单位大小 / 1rem 大小`

我们来看下面这个例子，在 750px 设计稿下对应的 px 单位大小

```css
.box {
  width: 750px;
  height: 500px;
  font-size: 20px;
  padding: 10px;
  background-color: red;
}
```

转换成 rem 单位, 就是用 **px 单位 / 75 ** 得到

```css
.box {
  /* 750 / 75= 10 */
  width: 10rem;
  /* 500 /75 = 6.666*/
  height: 6.666rem;
  font-size: 0.2666rem;
  padding: 0.1333rem;
  background-color: red;
}
```

> 实际开发中我们并不会手动将`px`转换成对应`rem`单位，我们会用`vscode`的 `px to rem`插件来实现。

### 4、px to rem 插件使用

> 第一步：打开 Vscode，然后搜索 px to rem 插件，具体操作如下图

![image-20220823215311224](https://www.arryblog.com/assets/img/image-20220823215311224.d44262e0.png)

> 第二步：安装 px to rem 插件

![image-20220823215533525](https://www.arryblog.com/assets/img/image-20220823215533525.a854cc50.png)

> 第三步：参数配置

![image-20220823220214300](https://www.arryblog.com/assets/img/image-20220823220214300.1aa83942.png)

![image-20220823220059478](https://www.arryblog.com/assets/img/image-20220823220059478.e9b60d47.png)

> 第四步：查看 px to rem 转换的快捷键

![image-20220823220440884](https://www.arryblog.com/assets/img/image-20220823220440884.0bc07bc2.png)

> 第五步：回到 html 页面，ctrl+A 选中所有 CSS 样式，然后按 Alt+Z，就会自动将 px 转成 rem 单位。

![image-20220823220958169](https://www.arryblog.com/assets/img/image-20220823220958169.a07822e3.png)

### 5、利用 rem 实现元素宽高等比缩放



- 将页面分成 `10` 份，通过 JS 来实现不同视口下 1rem 的大小
- 利用 px to rem 插件，将 `px` 单位转换成对应 `rem` 单位
- px to rem 插件中，`1rem` 大小设置为 `75` （以 750px 设计稿开发）

```html
<style>
  body {
    margin: 0;
  }
  .box {
    width: 9.3333rem;
    height: 6.666rem;
    font-size: 0.2666rem;
    padding: 0.1333rem;
    background-color: red;
  }
</style>

<div class="box"></div>
<script>
  // 页面初时化时调用
  initPage();
  function initPage() {
    // 获取html元素
    var html = document.documentElement;
    // 获取屏幕可视区宽
    var clientWidth = html.clientWidth;
    // 限止最大宽为 480
    clientWidth = Math.min(html.clientWidth, 480);
    // 动态设置 html 的font-size大小 (将页面分成 10份 )
    html.style.fontSize = clientWidth / 10 + "px";
  }
  // 当窗口发生改变时调用
  window.addEventListener("resize", initPage);
</script>
```

### 6、总结：实际开发如何用 rem 做适配



在实际开发中，我们会按以下步骤来实现开发

**1、要求设计师以 750px 宽，来设计移动端的设计稿；**
**2、我们按正常的 750px 的设计稿，以 px 单位来开发；**
**3、我们会假定将页面分成对应的份数，然后求得不同份数下的 1rem 的大小；**

- 如果在 750px 设备下，将页面分成 75 份，则 html 的 font-size 大小=设备可视宽 `(750) / 75 = 10px`
- 如果在 750px 设备下，将页面分成 10 份，则 html 的 font-size 大小=设备可视宽 `(750) / 10 = 75px`

**4、将 px 单位转换为对应的 rem 单位**

- 将 px 像素转换 rem 单,公式：`?rem = px值 / 1rem大小`得到最对应 rem 单位值
- 我们并不会手动一个一个去计算，而是利用 vscode 中的插件`px to rem`一次搞定
- 假定将页面分成 75 份，那就把`px to rem`插件中对应 1rem 大小设为 10
- 假定将页面分成 10 份，那就把`px to rem`插件中对应 1rem 大小设为 75
- 最后切换到 CSS 代码，`ctrl+A`选中所有代码，然后`Alt+Z`之后，就会自动把所有`px`单位，转换成对应`vw`单位。

> 在实际开发中，我们是以 750px 的设计稿来开发，假定将页面分成 10 份，每 `1rem = 75px`

## 三、rem 布局项目实战



接下来我们就利用 rem 布局来实现以下设计稿的开发，在 rem 中我们会结合之前学会的 flex 弹性和 Grid 网格 布局一起来实现。

![WebApp02](https://www.arryblog.com/assets/img/WebApp02.d3c58530.png)

### 1、搭建本项目的目录结构



- 首先新建项目文件夹 WebApp
- 在 WebApp 中新建 css、js、images 文件夹，分别用来存放 CSS、JS 文件和图片内容
- 在 CSS 中新建 reset.css、global.css、index.css 文件，分别用来存放重置默认样式、全局通用样式，首页样式

**reset.css 样式文件的内容**

> 可参考博客：[标签默认博客地址 (opens new window)](https://www.arryblog.com/guide/project/#三、标签默认样式及清除)👆 中如下截图内容

![image-20220815153351605](https://www.arryblog.com/assets/img/image-20220815153351605.d1880d52.png)

**其它相关重要的重置样式介绍**

```css
/* 去掉点击的高亮显示效果 */
-webkit-tap-highlight-color: transparent;
/* 在移动端浏览器默认的外观在ios上加上这个属性才能给按扭和输入框自定义样式 */
-webkit-appearance: none;
/* 禁用长按页面时的弹出菜单 */
img,
a {
  -webkit-touch-callout: none;
}
/* 表单会有外轮廓 */
input {
  outline: none;
}
/* 去掉图片下面的空隙 */
vertical-align: top;
```

注：

建议在一开始学习时，不要引用 reset.css 文件，这样就可以在学习过程中把所有问题暴露，对于为什么要重置这个默认样式，会有更深的理解。

在实际开发中，我们直接引用 reset.css 文件就好。

> 进到蓝湖，打开设计稿，点击设计稿，按以下截图操作，下载所有切图，然后放到 images 文件夹，修改好名字。

![image-20220815171606533](https://www.arryblog.com/assets/img/image-20220815171606533.901a1710.png)

### 2、了解设计稿的整体标准与规范

![2022080822222](https://www.arryblog.com/assets/img/2022080822222.bd979006.jpg)

字体大小、行间距、字体颜色、字体类型

- 字体大小（24px、28px、32px)
- 行间距为字体大小的 1.5 倍
- 字体类型，以微软雅黑为主，数字是 Arial 类型
- 字体颜色主要以 #000 黑色为主

> 通过以上数据最后得到如下代码，添加到 global.css 文件中

```css
font: 24px/1.5 Microsoft YaHei;
color: #000;
```

具体的设计标准，每个公司都有自己的规范，在实际开发中，以公司规范为主。

### 3、新建 index.html 网页，进行首页开发



- 在当前根目录下新建 index.html 网页
- 做好 viewport 视口配置

```css
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

- 引用相关的 CSS 文件，注意引入文件的顺序

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
<link rel="stylesheet" href="./css/reset.css">
<link rel="stylesheet" href="./css/global.css" />
<link rel="stylesheet" href="./css/index.css" />
```

### 4、网站整体 html 结构划分

```html
<!-- m-header start -->
<header class="m-header"></header>
<!-- end m-header -->
<!-- m-menu start -->
<nav class="m-menu"></nav>
<!-- end m-menu -->
<!-- m-banner start -->
<section class="m-banner"></section>
<!-- end m-banner -->
<!-- m-main start-->
<main class="m-main">
  <!-- m-nav start -->
  <nav class="m-nav"></nav>
  <!-- end m-nav -->
  <!-- m-recommend start -->
  <section class="m-recommend"></section>
  <!-- end m-recommend -->
  <!-- m-hot start -->
  <section class="m-hot"></section>
  <!-- end m-hot -->
  <!-- m-focus start -->
  <section class="m-focus"></section>
  <!-- end m-focus  -->
  <!-- view-list start -->
  <section class="view-list"></section>
  <!-- end view-list -->
</main>
<!-- footer start -->
<footer class="tabbar"></footer>
<!--end footer  -->
```

### 5、每个版块开发



本次项目我们采用的是 `rem + Flex` 弹性布局技术来实现

**多行文本显示省略号**

```css
/* 超出部分隐藏 */
overflow: hidden;
/* 超出部分显示省略号 */
text-overflow: ellipsis;
/* 对象做为弹性盒子模型显示 */
display: -webkit-box;
/* 块容器 中的内容限制为指定的行数。 */
-webkit-line-clamp: 2;
/* 弹性盒子对象的子元素排列方式为竖排 */
-webkit-box-orient: vertical;
```

## 四、移动端 vw 项目实战

TIP

在学习 vw 项目实战前，我们现在学习下 vw 的适配原理。

### 1、vw 的适配原理



我们知道 100vw = 视口宽，相当于把整个屏幕分成了 100 份，所以不同屏幕尺寸下，1vw 的大小如下

| 设备可视宽（屏幕宽） | 1vw 大小 |
| :------------------- | :------- |
| 750px                | 7.5px    |
| 680px                | 6.8px    |
| 480px                | 4.8px    |
| 375px                | 3.75px   |

- 上面表格中，不同屏幕尺寸下 1vw 的大小，不需要我们手动或通过 js 来计算，而是浏览自动会帮我转换
- 其实你可以理解，如果用 rem 来实现，把页面分 100 份，不同屏幕下 1rem 的大小与对应的 1vw 的大小时一样。
- 唯 一的区别，1vw 的大小是浏览器自动转换，而 1rem 的大小，需要通过 **js 获取屏幕大小 / 100** 来得到。

### 2、px 如何转换成对应 vw 单位



我们同样以 750px 的设计稿为例，那 `1vw = 7.5px` ，则转换成对应 vw 单位，公式如下：

> ? vw = 元素 px 大小 / 7.5

如下代码

```css
.box {
  width: 750px;
  height: 400px;
  background-color: skyblue;
}
```

转换成 vw

```css
.box {
  /* 750 / 7.5 =100vw */
  width: 100vw;
  /* 400 / 7.5 = 53.3333 */
  height: 53.3333;
}
```

注：

我们不需要一个个手动将`px`转成`vw`，我们可以借助`VScode`的插件`px to vw`来实现。

`px to vw`的使用方法和上面讲到的`px to rem`是一样，唯 一的区别，就是在扩展设置时不一样

![image-20220823222142164](https://www.arryblog.com/assets/img/image-20220823222142164.a7dece95.png) ![image-20220823222421678](https://www.arryblog.com/assets/img/image-20220823222421678.15444aae.png)

### 3、实际开发如何用 vw 做适配



在实际开发中，我们会按以下步骤来实现开发

**1、要求设计师以 750px 宽，来设计移动端的设计稿**
**2、我们按正常的 750px 的设计稿，以 px 单位来开发**
**3、将 px 单位转换为对应的 vw 单位**

- 将 px 像素转换 vw 单位，对应公式：`?vw = px值 / 7.5`
- 我们并不会手动一个一个去计算，而是利用 vscode 中的插件`px to vw`一次搞定
- 在 VSCode 中安装 px to vw 软件中，然后将“扩展设置” 中 Viewport Width 值设为 750
- 切换到 CSS 代码，`ctrl+A`选中所有代码，然后`Alt+Z`之后，就会自动把所有 px 单位，转换成对应 vw 单

### 4、项目实战



- 我们只需将上一个项目对应的 px 代码，转换成对应的 vw 单位，就可以了。
- 所以你会发现，vw 本质上就是 rem 的一种特殊情况（将页面分成 100 份），而不同屏屏幕尺寸下，1vw 是浏览自动计算。所以有了 vw，rem 这种方式几乎可以淘汰了。
- 但是，vw 还存在一定的兼容问题，除此之外，我们之前开发的所有项目，都是用的 rem，如果我们需要对原项做相关修改，我们还是需要会 rem 的。所以本质上还是需要 rem，只是说淘汰是个时间问题。
- 相关兼容型查询地址：[https://caniuse.com/?search=rem (opens new window)](https://caniuse.com/?search=rem)👆

**rem 兼容，全部支持**

![image-20220816143422149](https://www.arryblog.com/assets/img/image-20220816143422149.2fbc07ba.png)

**vw 兼容，少部分不支持**

![image-20220816143509802](https://www.arryblog.com/assets/img/image-20220816143509802.42dd01bc.png)

### 5、rem+vw 混合方式

::: info 如果

公司项目不需要考虑不同浏览器兼容性（公司做 B 端业务，会指定客户使用指定浏览器来访问 WebApp），你需要在原来的代码上修改，就可以采用 rem+vw 混合的方式，修改部分，可以采用 vw 来实现，原有的 rem 方案不做更改

:::
