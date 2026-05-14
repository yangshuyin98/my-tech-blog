---
title: "CSS 文本和字体属性、列表属性"
source: "https://www.arryblog.com/guide/css3/css-text-font-list-properties.html"
category: "css3"
order: 2
---

# CSS 文本和字体属性、列表属性

本节关于常用 CSS 文本样式属性、段落和行相关属性、列表属性

## 一、常用文本样式属性

|属性 | 描述  
---|---  
| `color` 英文单词表示法 | `color: red;` |
| `color` 十六进制表示法 | `color: #ff0000;` |
| `color` rgb() 表示法 | `color: rgb(255,0,0);` |
| `color` rgba() 表示法 | `color: rgba(255,0,0,.35)` |
| `font-size` 字体大小 | `font-size: 20px;` |
| `font-weight` 字体粗细程度 | `font-weight: bold;` |
| `font-style` 字体倾斜 | `font-style: italic;` |
| `text-decoration` 文本修饰线 | `text-decoration:none;` |

### 1、color 属性

  + color 属性可设置文本内容的字体颜色
  + color 属性颜色值可以用 **英语单词** 、**十六进制** 、**rgb()** 、**rgba()** 等表示法

#### 1.1、color 属性-英文单词颜色值

    color: red;
    color: skyblue;

> 温馨提示
>
> 英语单词表示法，仅用于学习或测试使用，工作中基本不用这样的形式，工作实际需要按效果图来获取更精准的颜色。

#### 1.2、color 属性 - 十六进制表示法

  + 十六进制表示法是所有设计软件中都通用的颜色表示法
  + 设计师会给我们在设计图上标注的颜色，通常为十六进制表示       
    color: #cc0066;
    color: #000;

  + 如果颜色值是两两相同，并且能有三对，则可以简写。如`#aabbcc` 的形式，可以简写为 `#abc`

​    
​    

    color:#cc0066      可以简写成       color:#c06;
    color:#ff43dd       不能写成        color:f43d;

常用的十六进制表示法

色值 | 描述  
---|---  
`#000` | 黑色  
`#fff` | 白色  
`#ccc` 、 `#333` 、 `#2f2f2f` 、 `#666` 、 `#ddd` | 灰色  

#### 1.3、color 属性 - rgb() 表示法

  + rgb 是光学显示器三原色：红（red ）、绿（green）、 蓝（blue） 三个单词的缩写
  + rgb 中三个数字的范围是 0-255 之间
  + 通过不同强度的红、绿、蓝光叠加来产生各种颜色    ​    

```css
/*
	rgb()三个值分别表示：红色,绿色,蓝色
	最小值：0 
	最大值：255 （红色）
*/
color: rgb(255, 0, 0);

/* 白色 */
color: rgb(255, 255, 255);

/* 黑色 */
color: rgb(0, 0, 0);
```

#### 1.4、color 属性 - rgba() 表示法

  + 颜色也可以用 rgba() 表示法，rgba 中前三个数字的范围是 0-255 之间，表示的是颜色
  + 最后一个参数表示颜色透明度介于 0 到 1 之间
  + 0 表示纯透明，1 表示纯实心（不透明），从 0-1 值越大，透明度越低
  + rgba() 表示法从 IE9 开始兼容        

```css
color: rgba(255, 0, 0, 0.35);
```

### 2、font-size 属性，字体大小

  + font-size 属性用来设置文字的字号大小，单位通常为 px（像素）、%百分比
  + 移动端还会学习 em、rem、vw、vh 单位

#### 2.1、px（像素）单位.

```css
font-size: 20px;
/* 字体大小 20px */
```

  + 网页文字正文字号通常是 16px，网页默认字体大小通常为 16px
  + 部分浏览器最小支持 12px 字号（比如旧版本的 Edge 浏览器和 Chrome 浏览器） ，也就是你设置的字体小于 12px，默认都会以 12px 大小显示

#### 2.2、%（百分比）单位

百分比相对于父元素的 font-size 大小而言

```css
<style>p {
    font-size: 20px;
    /*字体大小*/
}

p span {
    font-size: 200%;
    /*相当于 40px*/
}

</style><body><p><span>字体</span>大小以百分比为单位，相对的是父元素font-size大小</p></body>
```

#### 2.3、em 单位

1em 相对于父元素的 `font-size` 大小

```css
<style>p {
    font-size: 20px;
    /*字体大小*/
}

p span {
    font-size: 2em;
    /* 2 * 20px =40px */
}

</style><body><p><span>字体</span>大小以百分比为单位，相对的是父元素font-size大小</p></body>
```

### 3、font-weight 属性

  + font-weight 属性设置字体的粗细程度
  + 通常用 normal 和 bold 两个值，或 对应数字 400 与 700 来表示

属性 | 描述  
---|---  
`normal` | 正常粗细，与 400 等值  
`bold` | 加粗，与 700 等值  
`lighter` | 更细，大多数中文字体不支持。<br />比从父元素继承来的值更细 （处在字体可行的粗细值范围内） 
`bolder` | 更粗，大多数中文字体不支持。<br />比从父元素继承来的值更粗（处在字体可行的粗细值范围内） 

### [相对粗细值的解析(opens new window)](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight#%E7%9B%B8%E5%AF%B9%E7%B2%97%E7%BB%86%E5%80%BC%E7%9A%84%E8%A7%A3%E6%9E%90>)

当指定的是相对粗细值 `lighter` 或 `bolder` 时，将使用如下图表来决定元素渲染时的绝对粗细值：

 | 继承值（Inherited value） | `bolder` | `lighter` |
 | ---|---|---  |  
 | 100 | 400 | 100 |   
 | 200 | 400 | 100 |   
 | 300 | 400 | 100 |   
 | 400 | 700 | 100 |   
 | 500 | 700 | 100 |   
 | 600 | 900 | 400  |  
 | 700 | 900 | 400 |   
 | 800 | 900 | 700 |  
 | 900 | 900 | 700 |   

```css
font-weight: normal;
/* 正常粗细 与 font-weight:400; 效果相同*/
font-weight: bold;
/* 加粗 与 font-weight:700; 效果相同*/
```

当我们使用 数字 来表示粗细时

  + 数字大小介于 1-1000（包含）之间，更大的数字比更小的数字表示的字体要相对粗些
  + 最终的粗细要在当前字体可行的精细范围之内

```css
<style>div {
    font-weight: 400;
    /*正常粗细*/
}

div span {
    font-weight: lighter;
}

div .bold {
    font-weight: bold;
}

</style><body><div><span class="bold">我是加粗过的</span>我正常粗细， <span>我比父级字体细？</span></div></body>
```

### 4、font-style 字体样式

font-style 属性设置字体的倾斜

属性 | 描述  
---|---  
`normal` | 取消倾斜，如：把天生倾斜的 i、em 等标签设置为 不倾斜  
`italic` | 设置为倾斜字体（常用）<br />如果当前字体没有可用的斜体版本，会选用（ `oblique` ）替代 
`oblique` | 设置为倾斜字体（用常规字体模拟，不常用）  

```css
<style>p i {
    font-style: normal;
    /*取消倾斜*/
}

.line1 {
    font-style: italic;
    /*倾斜字体*/
}

.line2 {
    font-style: oblique;
    /*倾斜字体*/
}

</style><body><p><i>我是normal下修正过来的,
不倾斜</i></p><p class="line1">倾斜?</p><p class="line2">倾斜?</p></body>
```

### 5、font-family 字体类型

font-family 属性用于设置字体类型。    

```css
font-family: ”微软雅黑“;
/* 中文的微软雅黑 */
font-family: "Microsoft Yahei";
/*英文的微软雅黑 */
```

**默认字体类型**

当我们没有设置时，会显示浏览器的默认字体类型。不同浏览器默认字体不一样

  + 旧版本的 Edge 和 Chrome 浏览器 默认字体为 ”微软雅黑“
  + 新版本 Edge 和 Chrome 浏览器字体为 "Noto Sans SC" （ **思源黑体** ）

**添加后备字体类型**

  + 我们可以一次设置多个字体类型，后面的字体为前面字体的“后备”字体。

  + 字体间用`，逗号`隔开，如果第一个字体浏览器不支持，就会往后找，直到找到支持的为主，如果设置的字体都不支持，就会以浏览器默认的字体显示。    ​    

```css
font-family: "Times New Roman",Times,serif;
```

注意点：

  + 中文字体要用`双号号包裹`，英文字体如果字体名称中有空格，也需要用引号包裹（不加也可以）
  + 字体通常必须是用户计算机中已经安装好的字体，所以一般设置为 "微软雅黑" 和 "宋体" 较多，设置成其他的较少
  + 特殊字体，一般极用图片代替，或使用自定义字体方式实现。

**中文字体也可以称呼他们的英文名字**

|中文字体名 | 英文字体名  |
|---|--- | 
| `font-family: "微软雅黑";` | `font-family: "Microsoft Yahei";` |
| `font-family: "宋体"` | `font-family: "SimSun";` |

**案例**

```css
<style>.title {
    font-family: "Microsoft YaHei", "宋体";
    /* 显示 Microsoft YaHei */
}

.desc {
    font-family: "宋体", "Microsoft YaHei";
    /* 显示 宋体 */
}

</style><div class="title">我是标题</div><div class="desc">我是描述文字</div>
```

### 6、@font-face 自定义字体

设置用户电脑中没有的字体

`@font-face` 可以消除对用户电脑字体的依赖，如果用户电脑中没有我们想要的字体，那用户在浏览网页时就会下载相关字体，然后显示字体效果。

#### 6.1、定义字体前准备工作

  + 必须自己定义新的字体 ，同时需要有对应字体文件，因为用户加载网页时，会同时下载这些字体文件
  + 字体文件根据操作系统和浏览器不同，有 `eot`、`woff2`、`woff`、`ttf`、`svg` 等文件格式。
  + 浏览器对字体类型的支持性 
    - 目前所有浏览器都几乎都支持 `woff`格式
    - 目前现代浏览器都支持`woff2`格式。**WOFF2 是当前最优选择，压缩率更高、加载更快。**
    - 目前所有浏览器都支持`ttf` 格式 ，但`ttf` 文件通常较大，影响页面加载速度，性能不如 WOFF 格式。
    - **EOT** ：主要用于兼容旧版 IE 浏览器，现代浏览器都支持 woff 和 woff2 了。
    - **SVG** ：虽然具有可缩放性和清晰度等优点，但在字体呈现方面不是首选格式。

最佳实践

  + WOFF2 覆盖约 **98%** 的全球浏览器（排除 IE）。
  + WOFF + WOFF2 组合覆盖近 **100%** 的现代浏览器。

所以，在实际开发中优先选择 `woff2` 格式，然后以 `woff` 格式作为向下兼容格式（后备方案）

#### 6.2、如何定义字体

```css
@font-face {
  font-family: ; /*字体类型*/
  src: url(); /*引入字体文件*/
}

@font-face {
  font-family: "webfont";
  src: url("webfont.eot"); /* IE9 */
  src: url("webfont.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
      url("webfont.woff2") format("woff2"), url("webfont.woff") format("woff"), /* chrome、firefox */
      url("webfont.ttf") format("truetype"),
    /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
      url("webfont.svg#webfont") format("svg"); /* iOS 4.1- */
  font-display: swap;
}
```

注：

  + 当我们拥有字体文件后，就可以用 `@font-face` 定义字体
  + 字体有很多是有版权的，不能随便商业使用。
  + 阿里巴巴提供了一套免费商业授权的字体：<https://www.iconfont.cn/fonts>[(opens new window)](<https://www.iconfont.cn/fonts>)
  + 学习时，可以采用阿里巴巴的字体。字体，可以下载，也可以在线使用，也省去了下载字体的麻烦
  + 实际应用场景：指定特定文字设置样式，比如：标题 ...

#### 6.3、使用阿里妈妈·智造字，字体步骤

**第一步：进入字体网站，选择对应字体**

点击网址 <https://www.iconfont.cn/fonts>[(opens new window)](<https://www.iconfont.cn/fonts>) 进入 , 这里我们选择 阿里妈妈东方大楷，来作为教学

**第一步：输入想要使用的该字体类型的文字内容**



**第三步：下载字体包**

一般为了使代码的体积更小，我们会选择 **下载子集** ，而不是所有字体包

![image-20241222174303046](https://www.arryblog.com/assets/img/image-20241222174303046.70df4ecf.png)

**第四步：在网页中使用该字体**

  + 在当前项目根目录下，新建 `webfont` 文件夹，把下载的字体文件放入文件夹中
  + 复制代码引用，放在 CSS 文件内容的最顶部

![image-20241222172403056](https://www.arryblog.com/assets/img/image-20241222172403056.2462bc53.png)

  + 修改引用字体文件的地址，以免费线上字体文件加载失败或其它问题，造成字体不能用

```css
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "阿里妈妈东方大楷 Regular";
  font-weight: 400;
  src: url("./webfont/QYorMMK0ZI7T.woff2") format("woff2"), url("./webfont/QYorMMK0ZI7T.woff")
      format("woff"); /* chrome、firefox、opera、Safari,*/
  font-display: swap;
}
```

  + 定义`.iconfont` 样式，用来声明字体的类型

```css
.iconfont {
  font-family: "阿里妈妈东方大楷 Regular";
}
```

  + 为文字加上对应的样式

```css
<div class="iconfont">
</div>
```

## 二、CSS 文本属性

> 包含内容
>
> 修饰线，首行缩进，行高，font 属性复合写法，内容水平居中，字间距，字符间距

### 1、text-decoration 修饰线

修饰线：用于设置文本的修饰线（下划线、上划线、贯穿线/删除线 或 闪烁）外观的

> 常用的属性值有以下三种

属性 | 描述  
---|---  
`none` | 没有修饰线  
`underline` | 下划线  
`line-through` | 删除线  

```css
<style>
  a {
    /* 去掉下划线 */
    text-decoration: none;
  }
  p {
    /* 下划线 */
    text-decoration: underline;
  }
  div {
    /* 删除线 */
    text-decoration: line-through;
  }
</style>
<body>
  <p>为每个互联网人提供高质量的终身学习平台</p>
  <div>删除线</div>
</body>

```

渲染效果：

![image-20220705223416158](https://www.arryblog.com/assets/img/image-20220705223416158.b6104ab8.png)

> 扩展延伸：
>
> text-decoration 它是以下四个属性的简写
>
> | 属性                 | 描述                                                         |
> | -------------------- | ------------------------------------------------------------ |
> | text-decoration-line | 文本修饰的位置，如下划线 `underline` ，删除线 `line-through` |
>
> text-decoration-color | 文本修饰的颜色  
>
> text-decoration-style | 文本修饰的样式，如波浪线 `wavy` 实线 `solid` 虚线 `dashed`
>
> text-decoration-thickness | 文本修饰线的粗细

  

```css
<style>
  .wavy {
    /* text-decoration-line: underline;
        text-decoration-color: red;
        text-decoration-thickness: 5px;
        text-decoration-style: wavy; */

    /* 以下属性等同于上面 4个属性的简写 */
    text-decoration: underline red 5px wavy; /*下划线  红色 粗细 波浪线 */
  }
</style>
<body>
</body>

```

渲染效果：

![image-20220705224218275](https://www.arryblog.com/assets/img/image-20220705224218275.2765c3d2.png)

### 2、text-indent 首行缩进

首行缩进

  + `text-indent` 属性定义**首行** 文本内容之前的缩进量
  + 比如：一般段落文字的第一行，会向内 **缩进两个字的间距大小**
  + 常用单位是`em`，`em` 是 CSS 中一个相对长度单位，`1em` 相对于当前元素的字体大小（`font-size`）；如果当前元素无 `font-size`属性，则相当于父元素的`font-size` 大小。
  + `1em`是一个字符的宽度,     `2em`表示 2 个字符的宽度

```css
<style>
  body {
    font-size: 12px;
  }
  p {
    font-size: 20px;
  }
  .title {
    /* 首行缩进为 2个字符大小 2*20=40px */
    text-indent: 2em;
  }
  .em {
    /* 行缩进为 2个字符大小 2 * 12=24px */
    text-indent: 2em;
  }
</style>

<body>
</body>

```

![image-20250527184656135](https://www.arryblog.com/assets/img/image-20250527184656135.806259e3.png)

### 3、line-height 行高

行高

`line-height` 是 CSS 中用于控制行间距的属性，但它也常被用来实现单行文本在容器内的垂直居中效果

```css

<style>
  .line {
    border: 1px solid red;
    line-height: 50px;
  }
</style>
<p class="line">文字在高度为 50px 的容器中垂直居中</p>

```

![image-20250516150245908](https://www.arryblog.com/assets/img/image-20250516150245908.88044a16.png)

**如何测量行高**

如何测量行高，有很多种方式，比如：从一行文字的最顶部到下一行文字的最顶部之间的距离，就是行高。

> 具体测量方式可以看下图

![image-20211126231413734](https://www.arryblog.com/assets/img/image-20211126231413734.45966ec4.png)

注意

  + ①② 是行高测量上的定义，③ 是行高的真实定义。
  + 我们通常说的行高，是指一行文字所占的空间高度，然后文字在这个高度的垂直方向居中显示。

#### 3.1、line-height 行高值的 4 种写法

单位 | 实例 | 说明  
---|---|---  
px | `line-height:30px;` | 行高为 30px  
数值表示法 | `line-height:2;` | 行高为 font-size 的倍数，如果 `font-size:20px;` 则 `line-height:2;` 表示行高为 40px  
百分比表示法 | `line-height:200%;` | 行高为 font-size 的百分比，如果 `font-size:20px` ，则 `line-height:40px;`

normal | `line-height:normal;` | 默认值 , 大约为 `line-height:1.2` . 但具体是多少, 取决于元素的 `font-family` 。实际开发中, 一般不会用这个值  

[官方详细解读 .......(opens new window)](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height>)

```css

<style>
  div {
    border: 1px solid red; /*边框线:1像素 实线  红色*/
    font-size: 20px; /*字体大小*/
  }
  .line1 {
    line-height: 30px; /*行高为30px*/
  }
  .line2 {
    line-height: 2; /*行高为字体2倍*/
  }
  .line3 {
    line-height: 300%; /*行高为字体3倍*/
  }
</style>
<body>
  <div class="line1">行高为30px</div>
  <div class="line2">行高为数值2</div>
  <div class="line3">行高为300%</div>
</body>

```

#### 3.2、行高最佳实践

  + 推荐在 body 中设置 line-height 时使用无单位数值，比如 1.5 ，来控制整个页面的文字默认行高
  + 主段落内容的 `line-height` 至少应为 `1.5`
  + 实际工作中行高：`1.25 , 1.5 , 1.75` 都是常用的倍数设置
  + 如果文字的大小要随页面的缩放而变化，请使用无单位的值，以确保行高也会等比例缩放。(移动端或响应式网站常用)

```css

<style>
  p {
    font-size: 20px;
  }
  /* 当页面大于等于800px时，p标签字体大小为 20px */
  @media screen and (min-width: 800px) {
    p {
      font-size: 40px;
    }
  }
  p {
    margin: 0;
    /* 将值改成 1.5 才能支持响应式，
        所以这里的最佳值为 1.，而非固定值 30px */
    line-height: 30px;
  }
</style>

<body>
</body>

```

说明：

  + 正常情况下 字体大小为 20px，行高为 30px。
  + 当页面宽度 >= 800px 时，字体大小为 40px，行高还为 30px，就造成文字因为行高不够，文字在垂直方向上挤到一起了。
  + 如果把行高值改为 1.5，则行高在页面宽度 >=800px 时，行高被计算为 `40 * 1.5 = 60px`。这样才是合理的（文字变大，行间距理应也变大）

![GIF2025-5-2719-10-42](https://www.arryblog.com/assets/img/GIF2025-5-2719-10-42.7e770751.gif)

### 4、font 属性 - 复合写法

font 属性可以用来作为 `font-style` ， `font-weight` ， `font-size` ， `line-height` 和 `font-family` 属性的合写

​    

```css
/*
    italic  字体倾斜，
    bold  加粗，
    20px 表示字体大小
    1.5 表示行高是字体大小的1.5倍
    "微软雅黑" Arial, 表示字体类型微软雅黑，后备字体 Arial
*/
font: italic bold 20px/1.5 "微软雅黑", Arial;
```

  + `font-style`和`font-weight` 必须写在 `font-size` 之前
        
        /*正确写法*/
        font: bold italic 20px/1.5 "宋体";
        font: 20px/1.5 "宋体";
      
        /*错误写法*/
        font: italic 20px/1.5 bold;
        font: 20px/1.5 bold "宋体";
      
  + 任何未指定的值都将设置为其对应的初始值（会覆盖先前使用非简写属性设置的值

```css

/* 
    20px 表示字体大小
    1.5 表示行高是字体大小的1.5倍
    "微软雅黑" Arial, 表示字体类型微软雅黑，后备字体 Arial 
*/
font: 20px/1.5 "微软雅黑" ，Arial;

<style>
  p {
    border: 1px solid red;
    /* 此行高不生效，因为font连写时，30px/行高 ，这里默认有行高了 */
    /* line-height: 40px; */
    font: bold 30px "宋体";
    /* line-height 写在 font 下边，即可生效，此时 是覆盖了font默认的行高 */
    line-height: 50px;
  }
</style>
<body>
  <p>连写时，即时没有写行高，本质上他也是采用了默认的行高</p>
</body>

```

渲染效果：

![image-20220712122954654](https://www.arryblog.com/assets/img/image-20220712122954654.2daa56df.png)

  + font 属性连写时，必须设置 `font-size` 和 `font-family` 才能生效

​    
​    

```css
font: bold 30px; /* 这种写法是错的，不会生效 因为没有 font-family */
```

#### 4.1、最佳实践

在项目开发中，一般都会在 body 选择器中，统一控制页面的默认字体大小，行高，字体类型，文字颜色。

```css
body {
  font: 14px/1.5 "微软雅黑";
  color: #000;
}

```

注：

应用场景：（小米，京东 等等 一线互联网企业都这么用）

渲染效果：

![image-20241222183342303](https://www.arryblog.com/assets/img/image-20241222183342303.bf490924.png)

### 5、text-align 行内内容水平位置

定义 **`行内内容（例如文字、图片、行内块级元素）`** 相对它的块父元素的水平对齐方式

**text-align 常用属性值**

属性值 | 描述  
---|---  
left | 水平居左  
right | 水平居右  
center | 水平居中  

**案例**

```css

<style>
  div.left {
    text-align: left;
  }
  div.center {
    text-align: center;
  }
  div.right {
    text-align: right;
  }
</style>
<body>
  <div class="left">左边</div>
  <div class="center">中间</div>
  <div class="right">右边</div>
</body>
```



### 6、word-spacing 字间距

word-spacing 表示字间距，对中文是无效的，仅对英文字单词起作用

属性值 | 描述  
---|---  
normal | 正常的单词间距，由当前字体和/或浏览器定义。  
长度 | 通过指定具体的额外间距来增加字体的单词间距  

```css
  

<style>
  .spacing {
    word-spacing: 50px; /*英文单词间间距*/
  }
</style>

<body>
  <h3 class="spacing">注意观察，汉字与英文之间的显示区别</h3>
  <h3 class="spacing">display is different</h3>
</body>

```

渲染效果：

![image-20220705235229227](https://www.arryblog.com/assets/img/image-20220705235229227-17348659334636.7f7fdad2.png)

### 7、letter-spacing 字符间距

`letter-spacing` 属性用于设置文本字符的间距表现

属性值 | 描述  
---|---  
normal | 此间距是按照当前字体的正常间距确定的  
长度 | 指定文字间的间距以替代默认间距。可以是负值 如-10px，负值很大时，文字会被聚扰到一起。  

```css
  

<style>
  .spacing {
    letter-spacing: 30px; /*字简距*/
  }
</style>
<body>
  <h3 class="spacing">注意观察，汉字与英文之间的显示区别</h3>
  <h3 class="spacing">display is different</h3>
</body>

```

渲染效果：

![image-20220705235400370](https://www.arryblog.com/assets/img/image-20220705235400370-17348659954328.7cecc5f6.png)

## 三、列表样式

深入浅出 CSS 列表样式（list-style）属性详解

### 1、list-style-type

list-style-type 属性设置列表项标记的类型

值 | 描述  
---|---  
none | 无标记。  
disc | 默认。标记是实心圆。  
circle | 标记是空心圆。  
square | 标记是实心方块。  
decimal | 标记是数字。  
decimal-leading-zero | 0 开头的数字标记。(01, 02, 03, 等。)  
lower-alpha | 小写英文字母 The marker is lower-alpha (a, b, c, d, e, 等。)  
upper-alpha | 大写英文字母 The marker is upper-alpha (A, B, C, D, E, 等。)  

最佳实践：

  + 标记的类型多在 20 多项，以上只列出了部分，但实际开发中几乎不用。
  + 在实际开发中，一般会把前面的标记类型去掉
  + 如果需要相关标记类型，用做好的小图标来代替
  + 所以我们只需要掌握如何去掉标记就好，去掉标记代码 **`list-style-type:none;`**

```css

<style type="text/css">
  ul {
    list-style-type: none; /*去掉标记*/
  }
</style>
<body>
  <ul>
    <li>前端</li>
    <li>java</li>
    <li>大数据</li>
  </ul>
</body>

```

### 2、list-style-image

用来指定列表中的列表标记图像，几乎不用，了解就好

值 | 描述  
---|---  
 _URL_ | 图像的路径。  
none | 默认。无图形被显示。  
inherit | 规定应该从父元素继承 list-style-image 属性的值。  

```css
  

ul li {
  /* 去掉默认小黑圆点 */
  list-style-type: none;
  list-style-image: url(images/dot.png);
}

```

### 3、list-style-position

规定列表中列表项目标记的位置 ，几乎不用，了解就好

值 | 描述  
---|---  
inside | 列表项目标记放置在文本以内，且环绕文本根据标记对齐。  
outside | 默认值。保持标记位于文本的左侧。列表项目标记放置在文本以外，且环绕文本不根据标记对齐。  
inherit | 规定应该从父元素继承 list-style-position 属性的值。  

```css
  

ul li {
  border: 1px solid red; /*边框线*/
  list-style-type: none; /*去掉圆点*/
  list-style-position: outside; /*圆点位置*/
  list-style-image: url(images/dot.png); /*圆点图标*/
}

```

outside 效果 | inside 效果  
---|---  

### 4、list-style

  + list-style 是 list-style-type 、 list-type-position 、list-style-image 的三个的综合写法。
  + 但在实际开发中，用的最多的是 `list-style:none;` 和 `list-style-type:none`用来去掉标记。

## 四、应用实践

将所学 CSS 文本样式属性用于实践

### 1、单行文本水平垂直居中

```css
<style>
  .box {
    width: 200px; /*宽 200px*/
    height: 50px; /*宽 50px*/
    border: 1px solid red; /*边框线：1像素  实线 红色;*/
    text-align: center; /*文字水平居中*/
    line-height: 50px; /*文字垂直居中*/
  }
</style>
<body>
  <div class="box">单行文本水平垂直居中</div>
</body>
```



### 2、设置中英文混合间距

把 word-spacing 与 letter-spacing 两者结合使用

```css

<style>
  h3 {
    word-spacing: 20px; /*英文单词间距*/
  }
  h3 span {
    letter-spacing: 20px; /*span标签中汉字间距*/
  }
</style>
<body>
  <h3>I love you<span>&nbsp;我的宝贝！</span></h3>
</body>
```

### 3、新闻排版

![image-20241222192544985](https://www.arryblog.com/assets/img/image-20241222192544985.5ee7cd7b.png)

```css

<style>
  h1 {
    font-size: 30px;
    text-align: center;
  }
  .desc {
    text-align: center;
    font-size: 14px;
    color: #666;
  }
  .desc span {
    color: red;
    background-color: #ddd;
  }
  .desc a {
    text-decoration: none;
    color: red;
  }
  p {
    text-indent: 2em;
    line-height: 2;
  }
  .img {
    text-indent: 0;
    text-align: center;
  }
</style>
<body>
  <h1>本次15天挑战计划，升级为30天挑战计划</h1>
  <p class="desc">
  </p>
  <p>
    考虑到部分学员的基础水平不扎实，所以重启计划，花15天的时间系统全面讲解 CSS
    。
  </p>
  <p class="img"><img src="images/pic.jpg" alt="" /></p>
  <p>本些 CSS课程，会配套 30个精挑细选的css 案例和88个 CSS 布局技巧。</p>
  <p>
    这88个CSS案例并非随意凑出来的，而是从实际开发场景中精挑细选，提炼出来的。几乎涵盖了99%
    的 CSS 布局场景，能扫除你布局路上的一切障碍，让你精通CSS 布局。
  </p>
  <p>
    如果你html+css
    基础都学完了，面对布局仍然没有思路，学完这88个案例，你将成为CSS高手。
    [哇R]你学习的不仅仅是88个 CSS 案例，而是上百种CSS
    的布局思路和技巧。能让你真真吃透每个CSS知识点，并对CSS 运用自如。
  </p>

</body>

```

## 五、练习题

深入浅出 CSS 文本样式属性，完成以下练习题。

### 1、关于 font 属性的简写，下列选项中哪个语法正确 ？

> 选择一项

  + A、font: italic bold 12px "黑体"; 
  + B、font: italic, bold, 12px, "黑体"; 
  + C、font: "黑体" 12px italic bold; 
  + D、font: 12px "黑体" italic bold; 

<details class="custom-block details" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); "><summary style="outline: none; cursor: pointer; color: rgb(62, 175, 124); ">自己先分析，再点击查看正确答案</summary><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px; ">正确答案：A</p></details>

### 2、p 标签的 font-size:20px; 给 p 标签设置行高属性， 行高是文字大小的 2 倍，下列哪个代码不可以实现 ？

> 选择一项

  + A、line-height:40px; 
  + B、line-height:2em; 
  + C、line-height:200%; 
  + D、line-height:20%; 

<details class="custom-block details" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); "><summary style="outline: none; cursor: pointer; color: rgb(62, 175, 124); ">自己先分析，再点击查看正确答案</summary><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px; ">正确答案：D</p></details>

## 六、总结：本章重难点

  + [ ] 掌握 color 、fon-size 、font-weight 、font-style、font-family 文本样式属性
  + [ ] 掌握@font-face 自定义字体
  + [ ] 掌握 text-decoration、text-indent 、line-height、 font、text-align、word-spacing、 letter-spacing 文本属性
  + [ ] 掌握课程中讲到的@font-face 、line-height、 font 三个属性的最佳实践
  + [ ] 掌握 list-style-type 和 list-style 属性去掉列表前圆点
  + [ ] 掌握如何控制单行文本水平垂直居中及本章应用实践
