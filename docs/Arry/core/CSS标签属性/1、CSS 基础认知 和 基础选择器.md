---
title: "CSS 基础认知和基础选择器"
source: "https://www.arryblog.com/guide/css3/css-text-font-list-properties.html"
category: "css3"
order: 1
---

# CSS 基础认知 和 基础选择器

从本节开始，我们来学习 CSS 样式。首先我们来了解下什么是 CSS 和 CSS3 ！

## 一、CSS/CSS3 基础认知

CSS、CSS3 简介，基础语法，CSS 样式的两种书写方式，CSS 注释，CSS 的 4 种书写位置，优先级

### 1、CSS 简介

CSS（Cascading Style Sheets）层叠样式表

- CSS 是用来控制 HTML 元素呈现样式的**样式表语言**
- 他可以设置 HTML 页面中元素的`文字大小`，`颜色`，`对齐方式`、`宽高`，`位置`等样式。

**CSS 与 CSS3 是什么关系 ？**

- CSS3 是 CSS 的最新版本，在原有基础上增加了大量的样式、动画、3D 特效和移动端特性等等

### 2、CSS 的基本语法

如何通过 CSS 控制页面中 HTML 元素的样式。

假设我现在要通过 CSS 样式来控制 `h1` 标签文字的颜色和大小，那该如何书写 CSS 样式呢 ？

> 我们来学习下 **CSS 规则集**

![css](https://www.arryblog.com/assets/img/css.1d711872.png)

> 注：
>
> - CSS 规则集由两个主要的部分构成：**选择器** 和 **声明块**组成；
> - 选择器：选择器指向需要改变样式的 HTML 元素，通过选择器，我们知道是给那个元素添加样式
> - 声明块：包含一条或多条声明，每条声明用分号 **`;`** 结束，声明大括号`{}`括起来；
> - 每条声明都包含一个 CSS 属性名称和一个值，以冒号分隔。

**案例：控制 h1 标签字体大小和颜色**

CSS 书写位置

在 `<head></head>`标签对中写 `<style></style>` 标签对，然后在里边书写 CSS 规则集

```html
<head>
  <!--此处省略了部分html结构-->
  <style>
    h1 {
      color: red; /*颜色:红色;*/
      font-size: 14px; /*字体大小:14像素;*/
    }
    p {
      color: turquoise; /* 颜色淡绿;  */
    }
  </style>
</head>
<body>
  <h1>我是h1标题标签</h1>
  <p>p标签内容</p>
</body>
```

### 3、CSS 样式的两种书写方式

方式一：

每行只描述一个属性，每一条声明与选择器之间会有一个 tab 的间距。（或更多间距也不会有问题，但不建议）

```css
p {
  color: red;
  font-size: 14px;
}
/* 在VSCode上安装：prettier 格式化代码插件，ctrl+s 保存代码时，会自动帮我们格式化代码 */
```

> 温馨提示： [prettier 格式化代码插件安装和使用教程(opens new window)](https://www.arryblog.com/guide/vscode.html#vscode-常见插件安装)

方式二：

CSS 中的样式声明，直接写在一行

```css
/* 样式声明写在一行 */
p {
  font-size: 14px;
  color: red;
}
```

以上两种方式都可以，不过第一种方式更方便阅读和后期修改，则我们约定后期以第一种方式来书写 CSS 样式。

> 注：
>
> 在实际项目开发完成上线时，我们会把 CSS 样式进行代码压缩，压缩后就其实就是第二种样式的写法。

### 4、CSS 注释

- 注释只是给自己或其他开发者查看的，网页中不显示
- 提高代码阅读性
- 注释快捷键：Vscode 中按 `Ctrl + /` ，即可快速注释内容

```css
/* 这里书写注释内容 */

/* h1 标签的样式*/
h1 {
  /* 设置文字的颜色值 */
  color: skyblue;
  /* 设置文字的大小 */
  font-size: 30px;
}
```

这里要注意区分之前讲的 HTML 注释，HTML 注释内容写在 HTML 标签中，并使用 `<!-- 注释内容 -->`

```html
<body>
  <!--html的注释-->
</body>
```

### 5、CSS 样式的 3 种书写位置

CSS 样式的书写位置一共有 3 种

#### 5.1、方式一：内嵌样式

又俗称：“内部样式”

- 内嵌在 HTML 文件中
- 在 `<head></head>`标签对中写 `<style type="text/css"></style>` 标签对，然后在里边书写 CSS 语句
- `style` ：为样式风格的意思
- `type` ：类型，当前样式的类型是 `text/css`
- 在 HTML5 中，type 属性变为可选，我们经常在项目看到会直接使用 `<style></style>`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS基础入门 - 清心老师</title>

    <!-- 内嵌样式 -->
    <style>
      /* h1 标签 */
      h1 {
        color: skyblue; /* 颜色:蓝色; */
        font-size: 30px;
      }
      p {
        background-color: red; /* 背景色:红色;*/
        color: yellow; /* 颜色:黄色;*/
      }
    </style>
  </head>
  <body>
    <h1>CSS基础入门</h1>
    <p>CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明</p>
  </body>
</html>
```

#### 5.2、方式二：外链样式

又俗称：“外部样式”

- 将 CSS 单独存为 `.css` 文件，然后使用 `<link>`标签引入到页面中
- 优点：多个 HTML 网页，可以共用一个 CSS 样式表文件

```html
<!-- 
    rel ：关系
    stylesheet ：样式表
    href ：路径和文件名
   -->
<link rel="stylesheet" href="css/index.css" />
```

**代码示例**

```js
/* 文件目录结构 */
icod
├─ css
│  └─ basic.css // css
└─ index.html  // 网页文件
```

- `index.html` 文件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!--此处省略部分html结构-->
    <title>Document</title>
    <!-- 
            rel ：关联
            stylesheet ：样式表
            href ：路径和文件名
		-->
    <link rel="stylesheet" href="./css/basic.css" />
  </head>
  <body>
    <h3>网站标题</h3>
    <p>p标签内容</p>
    <div>span标签内容</div>
  </body>
</html>
```

- `css/basic.css` 文件

```css
h3 {
  color: tomato;
}
p {
  color: turquoise;
}
div {
  color: violet;
}
```

#### 5.3、方式三：行内样式

样式写在 HTML 标签的 `style`属性上

- 行内样式只能作用于当前标签上，不具有通用性
- 这种写法样式和结构混为一起，通常配合 JS 使用
- 优先级最高

```html
<h2 style="color:skyblue">行内样式</h2>
```

总结：

企业开项目发中，常用的样式有 `内嵌式`和`外链式` ，`行内样式` 主要用于与 JS 打交道的场景

#### 5.4、3 种样式的优先级

- 行内样式优先级最高
- 内联样式和外部样式在书写时，如果样式发生冲突，
  - 在优先级相同的情况下，以写在后面的为主
  - 如果优先级不相同，则以优先级高的为主。

> 如下案例所示：

`basic.css` 创建外部连接样式文件，代码如下

```css
/* 找到 div 元素 */
div {
  color: red;
}
/* 找到 body 下面的 div 元素，优先级高于直接找到 div 元素 */
body div {
  font-size: 40px;
}
```

`index.html`代码如下

```html
<head>
  <link rel="stylesheet" href="basic.css" />
  <style>
    div {
      color: blue; /* 颜色：蓝色;*/
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div style="color: green">我是div</div>
  <!-- 按CSS优先级判断，该文字为 green 绿色 -->
</body>

<!--
	以上代码解读：
	- 默认以上文字的颜色为 green 绿色
	- 去掉 style="color: green"文字颜色为 blue 蓝色
	- 去掉 style="color: green"把link与style标签互换位置，文字颜色为 red 红色
-->
```

| 原效果 | 去掉 style 行内样式后效果 | 去掉 style 行内样式，再将 link 与 style 内联样式调换位置后效果 |
| :----- | :------------------------ | :----------------------------------------------------------- |
|        |                           |                                                              |

### 6、总结：CSS 3 种书写位置特点与区别

| 引入方式 | 书写位置                                        | 作用范围 | 优先级                             | 使用场景                                                     |
| :------- | :---------------------------------------------- | :------- | :--------------------------------- | :----------------------------------------------------------- |
| 内嵌样式 | 写在`<style>`标签中                             | 当前页面 | 由书写位置和选择器优先级来共同决定 | 小案例 对网站首页首次打开速度要求很高的网页需要  如：百度、腾讯首页 |
| 行内样式 | css 样式写在标签的 style 属性中                 | 当前标签 | 最高                               | 配合 JS 或特殊需求                                           |
| 外链样式 | css 样式写在单独 css 文件中，通过 link 标签引入 | 多个页面 | 由书写位置和选择器优先级来共同决定 | 项目开发中高频使用                                           |

## 二、CSS 基础选择器

传统 CSS2.1 选择器和 CSS3 新增选择器

### 1、什么是选择器及作用

选择器主要是用来选中我们想要选中的元素，选中后，我们就可以为这个元素添加 CSS 样式了。

> 比如：要选中 `h1` 标签，为其添加样式

```html
<h1>网站标题</h1>
```

![css](https://www.arryblog.com/assets/img/css-17348007704192.1d711872.png)

> 注：
>
> - h1 在这里称为标签选择器，他是根据标签的名字来选中元素。
> - 在 css 中，选中元素的方式有很多种，这些不同的方式就是不同的选择器。

### 2、选择器分类

CSS 选择器非常之多，主要分为

**①、基础选择器**

- 1、标签选择器
- 2、id 选择器
- 3、class 选择器
- 4、通配符选择器

**②、复合选择器**

- 1、交集选择器
- 2、并集（分组）选择器
- 3、后代选择器
- 4、子代选择器
- 5、相邻兄弟选择器
- 6、通用兄弟选择器（css3）
- 7、伪类选择器
- 8、伪元素选择器
- 9、属性选择器
- 10、:first-child 和:last-child 选择器
- 11、:nth-child(n)和:nth-last-child(n)选择器
- 12、:nth-of-type(n)和:nth-last-of-type(n)选择器
- 13、:root 选择器
- 14、:empty 选择器
- 15、:only-child 选择器

.......等几十种。

> 我们先来了解基础选择器，往后有了更多基础后，再来了解复合选择器

### 3、标签选择器

标签选择器称之为：元素选择器、类型选择器

- 他直接使用元素的标签名当做选择器，将选择页面上所有该种标签
- 标签选择器将选择页面上所有该种标签，无论标签所处位置的深浅

**语法**

```css
element {
  /* ....样式声明.... */
}
p{  }
div{  }
h3{ }
....
```

**代码演示**

```html
<style>
  /* 选中当前页面上所有的 h2标签和p标签 */
  h2 {
    color: red; /* 文字颜色：红色 */
  }
  p {
    background-color: blue; /* 背景：蓝色 */
  }
</style>

<body>
  <h2>文字颜色：红色</h2>
  <p>背景蓝色</p>
</body>
```

**标签选择器的作用：** 标签选择器的 "覆盖面" 非常大，通常用于**标签样式的初始化**

```css
ul {
  /* 去掉所有无序列表的小圆点 */
  list-style: none;
}
a {
  /* 去掉所有超级链接的下划线 */
  text-decoration: none;
}
```

### 4、id 选择器

id 选择器是使用 HTML 元素的 id 属性来选择特定元素

- 元素的 id 在页面中是唯一的，因此 id 选择器用于选择一个唯一的元素
- 要选择具有特定 id 的元素，请写一个井号（＃），后跟该元素的 id。

**语法**

```css
#id {
  /* ...样式声明... */
}
#box {
}
#container {
}
#top {
}
```

**案例**

```html
<style type="text/css">
  #top {
    color: red;
  }
  #header {
    color: blue;
  }
</style>

<body>
  <div id="top">top为红色</div>
  <div id="header">header为蓝色</div>
</body>
```

### 5、class 选择器

- HTML 元素以 class 属性来设置
- CSS 中 class 选择器以 `"." + class`命来定义。

**语法**

```css
.class {
  /* ...样式声明... */
}
.box {
}
.item {
}
```

**案例**

```html
<style type="text/css">
  .box {
    font-size: 20px; /* 字体大小 20 像素*/
    color: red; /* 文字颜色:红色; */
  }
</style>

<body>
  <div class="box">文本内容</div>
</body>
```

#### 5.1、 class 选择器用法

- 一个元素可以有多个 class 名,类命间用空格隔开

```html
<div class="box1 box2"></div>
```

- 多个标签可以定义相同的类名 （**注意和 id 选择器做区分**：元素的 id 是唯一的，一个页面相同的 id 只有一个）

```html
<div class='box1 box2'></div>
<p class='box1'></div>
<h3 class='box2'></div>
```

- 不同标签的相同样式放在同一类名中，可以减少代码量

```html
<style>
  .box {
    width: 100px;
    height: 100px;
  }
  .bg-color1 {
    background-color: red;
  }
  .bg-color2 {
    background-color: yellow;
  }
</style>
<body>
  <div class="box bg-color1">box bg-color1</div>
  <div class="box bg-color2">box bg-color2</div>
</body>
```

渲染效果：

![image-20220704173831474](data:image/png;base64,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)

#### 5.2、原子类

- 在网页项目前，可以将所有的常用字号、文字、颜色、行高、外边距、内边距等等都设置为单独的类
- HTML 标签就可以 “按需选择” 它的类名了，这样就可以快速添加一些常见的样式

> 应用场景：组件化开发，目前比较经典的 [CSS 框架 - Tailwindcss(opens new window)](https://tailwindcss.com/)

```html
<style>
  .fs12 {
    font-size: 12px;
  }
  .fs14 {
    font-size: 14px;
  }
  .fs16 {
    font-size: 16px;
  }
  .fs18 {
    font-size: 18px;
  }
  .fs20 {
    font-size: 20px;
  }
  .fs22 {
    font-size: 22px;
  }

  .color-red {
    color: red;
  }
  .color-black {
    color: black;
  }
  .color-green {
    color: green;
  }
  .color-blue {
    color: blue;
  }
</style>

<body>
  <h2 class="fs22 color-red">原子类</h2>
  <p class="fs18 color-green">
    在网页项目前，可以将所有的常用字号、文字、颜色、行高、外边距、内边距等等都设置为单独的类
  </p>
  <p class="fs14 color-blue">
    HTML标签就可以 “按需选择” 它的类名了，这样就可以快速添加一些常见的样式
  </p>
</body>
```

#### 5.3、 id 和 class 的命名规则

- 只能由 字母、数字、下划线、短横线 构成

```html
<div id='a'></a>
<div id='a1'></a>
<div id='a-b_c'></a>
<!--这些命名都可以，但是都不是好的命名，因为通过名字没法知道个div里的内容-->
```

- 不能以数字开头

```html
<div id='1a'></a><!--这个是错误的命名-->
```

- 字母区分大小写，但习惯上一般为 小写字母

```html
<style>
  .box {
    color: red;
  }
  .Box {
    font-size: 30px; /*这个样式并不会作用于class='box'的标签上*/
  }
</style>
<body>
  <div class="box">字体为红色</div>
</body>
```

- 名字最好见名知意，多个英文单词可以用 - 隔开

```html
<div class="menu"></div>
<div class="sidebar"></div>
<div id="top-nav"></div>
```

命名规则 和 规范

[详细查阅，CSS 样式命名规则 和 规范(opens new window)](https://www.arryblog.com/guide/standard/css-naming-convention.html)

### 6、 通配符选择器

- 代表页面当中所有的元素
- 基本不用，对性能消耗过大

```css
* {
  color: red;
} /* 页面当中所有元素的字体颜色为红色 */
```

### 7、基础选择器的权重优先级

- 权重从高到低依次是：行内样式 > id 选择器 > 类选择器 > 标签选择器 > *通配符

```html
<style>
  * {
    color: red; /* 红色 */
  }
  div {
    color: skyblue; /* 天蓝色 */
  }
  .box {
    color: green; /* 绿色 */
  }
  #box {
    color: blue; /* 蓝色 */
  }
</style>

<body>
  <div id="box" class="box">id与class</div>
  <div class="box">class</div>
  <div>div本身</div>
  <p>p</p>
</body>
```

- 如果选择器级别相同，后面的会覆盖前面的

```html
<style>
  .wrap {
    background: red;
  }
  .wrap {
    background: yellow;
  }
</style>
<body>
  <div class="wrap">wrap</div>
</body>
```

### 8、测试题

以下最终显示的 CSS 样式是 ?

**做题步骤：**

- 首先，找到控制当前元素的所有 css 选择器
- 然后，从这些选择器中，找到优先级最高的选择器，最终显示的样式为这些选择器控制的样式。
- 如果多个选择器的优先级一样，则按就近原则来判断，离元素最近的选择器样式最终为生效样式。

```css
/* basic.css 文件 */
#box {
  color: orange; /* 橘色 */
}
.col1 {
  color: pink; /* 粉色 */
}
<link rel="stylesheet" href="basic.css" />
<style>
  p {
    color: blue; /* 蓝色 */
  }
  .col1 {
    color: red; /* 红色 */
  }
  .col2 {
    color: green; /* 绿色 */
  }
</style>

<body>
  <div id="box" class="col1">1</div>
  <p>2</p>
  <p class="col2 col1">3</p>
  <p style="color: red" id="box">4</p>
</body>
```

### 9、总结： CSS 基础选择器

| 选择器       | 说明                                                | 实例                                             | 优先级排名 |
| :----------- | :-------------------------------------------------- | :----------------------------------------------- | :--------- |
| id 选择器    | id 是唯一的，一个页面相同的 id 只能有一个           | `<div id='box'></div>` `#box { color: red; }`    | 1          |
| class 选择器 | 一个标签可以有多个 class 类，一个类可以应用多个标签 | `<div class='box'></div>` `.box { color: red; }` | 2          |
| 标签选择器   | 通过标签名来选中元素，不管元素多深，都能选择到      | `<div></div>` `div { color: red; }`              | 3          |
| 通配符选择器 | 选择页面中所有元素，几乎不用                        | `* { color: red;}`                               | 4          |

### 10、后代选择器

为什么我要在这里讲后代选择器呢 ？是因为后面的作业中要用到

- 在 CSS 中，使用 `空格`表示 “后代”
- 后代 并不一定是 “儿子”，子孙都可以
- 后代选择器可以有很多空格，隔开好几代

**语法**

```css
element element {
  /* ...样式声明.... */
}
div p span {
}
div p {
}
div span {
}
```

**案例**

```html
<style>
  .box h3 span {
    color: tomato;
  }
  .box p {
    color: #666;
  }
  .box p span {
    color: tomato;
  }
</style>
<body>
  <div class="box">
    <h3>什么是CSS选择器?</h3>
    <p>
      <span>选择器:</span>
      主要是用来选中我们想要选中的元素，选中后，我们就可以为这个元素添加CSS样式了。
    </p>
  </div>
</body>
```

## 三、练习题

自我测试：在不看答案的前提下，看看自己是否真正掌握了本节所学内容。

### 1、关于外部样式表下列说法正确的是 ？

> 选择两项

- A、外部样式表的引入标签是 style
- B、外部样式表的引入标签是 link
- C、外部样式表的引入标签要放在 head 标签中
- D、外部文件的路径地址要放在 rel 属性中

<details class="custom-block details" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer; color: rgb(62, 175, 124);">自己先分析，再点击查看正确答案</summary><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">正确答案： B C</p></details>

### 2、以下代码最终的显示效果

```css
/* basic.css 文件 */
div {
  color: yellow; /* 蓝色 */
}
.box {
  font-size: 24px; /* 字体大小 14像素 */
}
<style>
  #box {
    font-size: 30px; /* 字体大小 30像素 */
  }
  div {
    color: red; /* 红色 */
  }
  div {
    color: blue; /* 蓝色 */
  }
  .box {
    font-size: 14px; /* 字体大小 14像素 */
  }
</style>

<link rel="stylesheet" href="./css/index.css" />

<body>
  <div class="box">文本内容</div>
</body>
```

### 3、编程题

用 3 种 CSS 引入方式，将 div 中的文字大小设置为 30px，字体颜色为绿色

```html
<div></div>
```

## 四、案例

运用本节所学知识，完成以下效果布局

### 1、利用 CSS 来实现如下效果

```html
<style>
  /* 清除默认样式，采用标签选择 */
  ul {
    list-style: none; /* 去掉圆点 */
  }
  a {
    text-decoration: none; /* 去掉下划线*/
  }

  ul li {
    color: #666; /* 字体颜色 灰色 */
  }
  /* ul li .text-red {
    color: red;
    }
    ul li .text-orange {
    color: orange;
    } */
  .text-red {
    color: red; /* 字体颜色红色*/
  }
  .text-orange {
    color: orange; /* 字体颜色橘色*/
  }
  ul li span {
    color: #000;
  }
</style>

<h3>本章CSS重点如下</h3>
<ul>
  <li><span class="text-red">1、</span>区分css注释和html注释</li>
  <li><span class="text-orange">2、</span>css样式的3种书写位</li>
  <li><span>3、</span>id与class 选择器的命名规则</li>
  <li>
    <span> 4、</span
    >id选择器，class类选择器、标签选择器、通配符选择四种选择和行内样式的用法和优先级
  </li>
  <li><span>5、</span>首屏优化策略：首屏样式会考虑采用内联样式书写</li>
  <li><span>6、</span>原子化类：把css样式细化成原子类，一个类只写一类样式</li>
</ul>
<p>本节课大家把以上6个点重点掌握</p>
<p>
  本节课教案文档以上传到
  <a href="https://www.arryblog.com" class="text-red">arry老师博客</a>
  ，点击跳转到博客去查看。
</p>
```

## 五、总结：本章重点难点

- [ ] 区分 css 注释和 html 注释
- [ ] css 样式的 3 种书写位置
- [ ] id 与 class 选择器的命名规则
- [ ] `标签`、`id`、`class 类`、`*` 4 种选择器 和 `行内样式` 的用法和优先级
- [ ] 首屏优化策略：首屏样式采用内联样式
- [ ] 了解原子化类：把 css 样式细化成原子类，一个类只写一种样式
