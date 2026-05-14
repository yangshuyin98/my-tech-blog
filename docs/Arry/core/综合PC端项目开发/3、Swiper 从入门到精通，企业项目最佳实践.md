---
title: "Swiper 从入门到精通，企业项目最佳实践"
source: "https://www.arryblog.com/guide/project/swiper.html"
category: ""
order: 3
---

# Swiper 从入门到精通，企业项目最佳实践

TIP

Swiper 是一款开源、免费、强大的触摸滑动插件。简单的配置即可实现手机、电脑网页大部分滑动功能，焦点图、tab、触摸导航等。

> Swiper 的中文官网地址：https://www.swiper.com.cn/

我们可以通过网站项部菜单项中的**在线演示**来查看 `Swiper` 的相关案例演示效果

![image-20220804164448226](data:image/png;base64,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)

我们来看下 **`Swiper` 基础演示** 这个页面，看有哪些常用的简单效果，可以拿来就能用的。

![image-20220804165331692](https://www.arryblog.com/assets/img/image-20220804165331692.8e79b76e.png)

## 一、Swiper 使用方法

TIP

深入浅出 swiper 的使用方法

- 基础理解
- 关于 `swiper` 容器宽高问题
- 分析 Swiper 插件 HTML 结构和轮播原理
- 重置 Swiper 插件 CSS 样式
- 调整 `导航按扭` 的位置

### 1、基础使用

TIP

我们通过网站导航 **中文教程** 下面的 **[Swiper 使用方法 (opens new window)](https://www.swiper.com.cn/usage/index.html)**点击进入，在这里官方提供了非常详细的使用教程。只需要按上面的流程一步一步操作就可以简单使用 `Swiper` 插件来做滑动效果。

![image-20250625191951984](https://www.arryblog.com/assets/img/image-20250625191951984.25812363.png)

TIP

关于 Swiper 的使用，我按官方使用方法，给你梳理了如下步骤

- 点击[ Swiper 版本 (opens new window)](https://www.swiper.com.cn/about/us/index.html#version-different)，了解各版本之间的区别
- 点击 [Swiper 文件 (opens new window)](https://www.swiper.com.cn/download/index.html#file1)下载对应版本的 Swiper （可以选择最新稳定版 Swiper11)
- 在页面引用需要用到 `swiper-bundle.min.js` 和 `swiper-bundle.min.css` 文件。（针对不同版本，可能引用的文件名不同，具体参考[ Swiper 版本 (opens new window)](https://www.swiper.com.cn/about/us/index.html#version-different)中的介绍

```html
<!DOCTYPE html>
<html>
  <head>
    ...
    <link rel="stylesheet" href="dist/css/swiper-bundle.min.css" />
  </head>
  <body>
    ...
    <script src="dist/js/swiper-bundle.min.js"></script>
    ...
  </body>
</html>
```

> ......往后具体使用步骤，参考官方 **[Swiper 使用方法(opens new window)](https://www.swiper.com.cn/usage/index.html)**

温馨提示：

Swiper 插件随着不版本不断的迭代升级，可能使用方式上会有所微调。所以不管任何时候，对于 `Swiper` 的基础使用方法都以官方为主。

### 2、关于 `swiper` 容器宽高问题

TIP

你可能想要给 `Swiper` 定义一个大小

> 如下

```css
.swiper {
  width: 600px;
  height: 300px;
}
<script>
  var mySwiper = new Swiper(".swiper", {
    direction: "vertical", // vertical 垂直切换选项   horizontal 水平切换
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
      el: ".swiper-pagination",
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // 如果需要滚动条
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
</script>
```

![GIF2025-6-2519-58-12](https://www.arryblog.com/assets/img/GIF2025-6-2519-58-12.535a646b.gif)

- 如果最开始是**垂直方向滑动轮播**，`swiper`没有添加高度 ，则会出现滚动高度问题。
- 要想实现**全屏的垂直轮播**，需要添加以下 CSS 代码控制

```css
html,
body {
  margin: 0;
  height: 100%;
}
.swiper {
  height: 100%;
}
```

注：

如果最开始是 **水平方向滑动轮播** ，不给 `swiper` 容器指定宽高，则宽度默认等于 `swiper` 父容器的宽，高度默认等于内容高。

### 3、分析 Swiper 插件 HTML 结构和轮播原理

TIP

以下分析是站在水平轮播图的角度来分析`Swiper` 插件。

- `.swiper` 为一个相对定位元素，**分页器**、 **导航按扭**、**滚动条** 都是相对于 `.swiper` 来绝对定位的。
- `.swiper-wrapper` 元素宽高默认与 `.swiper` 一样大小，同时采用 `flex` 布局。下图效果（我在代码中，重写了 `.swiper-wrapper` 的宽度所致）
- 默认情况下（一页只显示一项），所有的`.swiper-slide` 元素宽高 与 `.swiper` 容器宽高一样大小。默认是不缩放的（即 `flex-shrink:0` )

![image-20250625202601543](https://www.arryblog.com/assets/img/image-20250625202601543.cd1fda82.png)

- 轮播图在水平方向切换时，其实是在改变 `.swiper-wrapper` 元素在水平方向上的位移。如 `transform: translate3d(-150px, 0px, 0px);` 移走 `slide1`，显示 `slide2`

![GIF2025-6-2520-31-07](https://www.arryblog.com/assets/img/GIF2025-6-2520-31-07.892949db.gif)

```html
<style>
    .swiper {
        width: 150px;
        height: 100px;
        border: 2px solid blue;
        padding: 10px 0px; /* 添加上下内边距，放便看到效果 */
        overflow: visible;
    }
    .swiper .swiper-wrapper {
        border: 2px solid red;
        width: 400%; /* 默认宽为 100% */
    }
    .swiper .swiper-slide:nth-child(2n) {
        background-color: rgba(240, 230, 140, 0.5);
    }
    .swiper .swiper-slide:nth-child(2n + 1) {
        background-color: rgb(135, 206, 235, 0.5);
    }
</style>
<div class="swiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
</div>
<script src="./js/swiper-bundle.min.js"></script>
<script>
  var mySwiper = new Swiper(".swiper", {
    direction: "horizontal", // 垂直切换选项  horizontal
    // loop: true,  循环模式选项

    // 如果需要分页器
    pagination: {
      el: ".swiper-pagination",
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // 如果需要滚动条
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
</script>
```

### 4、重置 Swiper 插件 CSS 样式

TIP

我们可以重置 `分页器`、`导航按扭` 、`滚动条` 的 CSS 样式，来修改他们的颜色、大小、位置。

**修改方法**

- 在页面选中对应的元素，然后审查元素，找到控制当前元素的选择器。
- 复制选择器，然后在选择器中修改对应 CSS 属性即可。如果 CSS 属性值为自定义属性，我们也可以在选择器中重新定义同名的自定义属性。

> 以下演示如何修改分页器样式

![image-20250625210618091](https://www.arryblog.com/assets/img/image-20250625210618091.f50bda64.png)

```css
.swiper-pagination-bullet {
  background-color: tomato; /* 将分页器颜色修改为 tomato */
}
```

或根据 swiper 官网提供的方式，如下：

```css
.swiper {
  --swiper-theme-color: #ff6600;
  --swiper-pagination-color: #00ff33; /* 两种都可以 */
}
```

### 5、调整 `导航按扭` 的位置

![GIF2025-6-2522-11-23](https://www.arryblog.com/assets/img/GIF2025-6-2522-11-23.a8126c53.gif)

TIP

因为左右按扭是相对于 `.swiper` 绝对定位的，而 `.swiper` 设置了 `overflow:hidden` ，所以想要让按扭能在 `.swiper` 容器外面的两侧显示，则需要改变左右按扭的 `html` 结构。

> 将 **左右按扭** 从 `.swiper` 的子元素移出，变为与 `.swiper`同级的兄弟元素。然后 左右按扭相对于新的父元素绝对定位

温馨提示：

`html` 结构中左右按扭的类名要与 `Swiper` JS 配置的类名始终保持一致。

```html
<style>
  .my-swiper {
    width: 300px;
    height: 200px;
    margin: 50px auto;
    position: relative;
  }
  .swiper {
    width: 300px;
    height: 200px;
  }

  .swiper-slide:nth-child(2n) {
    background-color: khaki;
  }
  .swiper-slide:nth-child(2n + 1) {
    background-color: skyblue;
  }

  /* 定义按扭的位置 */
  .swiper-button-next1,
  .swiper-button-prev1 {
    position: absolute;
    top: 50%;
    width: 48px;
    height: 48px;
    transform: translateY(-50%);
    cursor: pointer;
  }
  /* 按扭位置和背景图 */
  .swiper-button-prev1 {
    left: -50px;
    background-image: url(./images/arrow-active.png);
  }
  .swiper-button-next1 {
    right: -50px;
    background-image: url(./images/arrow-active.png);
    transform: translateY(-50%) rotate(180deg);
  }
  /* 按扭禁用时的背景图 */
  .swiper-button-next1.swiper-button-disabled,
  .swiper-button-prev1.swiper-button-disabled {
    background-image: url(./images/arrow.png);
  }
</style>
<div class="my-swiper">
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
<div class="swiper-button-next"></div> 
-->

    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
  <!-- 如果需要导航按钮 -->
  <div class="swiper-button-prev1"></div>
  <div class="swiper-button-next1"></div>
</div>

<script src="./js/swiper-bundle.min.js"></script>
<script>
  var mySwiper = new Swiper(".swiper", {
    direction: "horizontal", // 垂直切换选项  horizontal
    // loop: true,  循环模式选项

    // 如果需要分页器
    pagination: {
      el: ".swiper-pagination",
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },

    // 如果需要滚动条
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
</script>
```

## 三、Swiper 基础配置

TIP

Swiper 的常用 API 详细文档参考官网 [API 文档(opens new window)](https://www.swiper.com.cn/api/index.html)

![image-20220804205445461](data:image/png;base64,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)

### 1、Swiper 初始化

TIP

- 一个页面中引用多个 Swiper，可以给每个容器加上 `ID` 或 `Class` 区分
- 一定要保留默认的类名`.swiper`或`.swiper-container`，因为 `Swiper` 的默认样式是施加在该类名上的。

> 具体使用，参考官方教程

![image-20220804205524335](https://www.arryblog.com/assets/img/image-20220804205524335.9177af3d.png)

### 2、Basic-Swiper 一般选项

| 配置项       | 说明                                                         |
| :----------- | :----------------------------------------------------------- |
| initialSlide | 设定初始化时 slide 的索引，即页面刚打开，显示的是第几张轮播图 默认值 0 ，表示第一张 |
| direction    | Swiper 的滑动方向，可设置为水平方向切换 `horizontal` 或垂直方向切换 `vertical` 。 |
| speed        | 切换速度，即 `slider` 自动滑动开始到结束的时间（单位 ms 毫秒），也是触摸滑动时释放至贴合的时间。 |
| grabCursor   | 值为 true 时，鼠标覆盖 `Swiper` 时指针会变成手掌形状，拖动时指针会变成抓手形状 默认值：false |
| breakpoints  | 断点设定，允许为不同的响应断点（屏幕尺寸）设置不同的参数 经常与 Carousel(旋转木马)中的（`slidesPerView`、`spaceBetween` ）配合使用 （放到后面演示） |

```html
<script>
  var mySwiper = new Swiper("#swiper1", {
    // horizontal 水平切换   vertical  垂直切换
    direction: "horizontal",
    // 刚开始打开页面显示 第3张
    initialSlide: 2,
    /* 一张轮播图切换的时间 */
    speed: 3000,
    /* 鼠标样式-手掌 或抓手 */
    grabCursor: true,
    // .......
  });
</script>
```

### 3、Autoplay (自动切换)

| 配置项   | ---                                              |
| :------- | :----------------------------------------------- |
| atuoplay | 设置为 true 启动自动切换，并使用默认的切换设置。 |

### 4、Loop（无限循环）

| 配置项 | 说明                                 |
| :----- | :----------------------------------- |
| loop   | 设置为 `true` 则开启循环(loop)模式。 |

### 5、Pagination 分页器

TIP

分页器相关配置和效果演示，具体参考官方 [Pagination 分页器(opens new window)](https://www.swiper.com.cn/api/pagination/362.html)

| 配置项             | 说明                                                         |
| :----------------- | :----------------------------------------------------------- |
| pagination         | 使用分页器导航                                               |
| el                 | 指定分页器容器的 css 选择器。分页器可以置于 container 之外   |
| type               | 分页器样式类型，可选 bullets 圆点（默认） fraction 分式 progressbar 进度条 custom 自定义 （与 Pagination 分页器下的 `renderCustom()` 配合使用） |
| dynamicBullets     | 动态分页器，当你的 slide 很多时，开启后，分页器小点的数量会部分隐藏。 (只对圆点有效) |
| dynamicMainBullets | 动态分页器的主指示点的数量                                   |
| clickable          | 此参数设置为 true 时，点击分页器的指示点分页器会控制 Swiper 切换。 |

### 6、Navigation Buttons（前进后退按扭）

TIP

前进后退按扭相关配置和效果演示，具体参考官方 [Navigation Buttons(opens new window)](https://www.swiper.com.cn/api/navigation/355.html)

| 配置项     | 说明                                                         |
| :--------- | :----------------------------------------------------------- |
| navigation | 使用前进后退按钮来控制 Swiper 切换。对应的按扭 html 标签可以移到 `.swiper` 容器外面，但需要自已定义样式 |
| nextEl     | 设置前进按钮的 css 选择器或 HTML 元素                        |
| prevEl     | 设置后退按钮的 css 选择器或 HTML 元素                        |

```js
//滑到最后一个隐藏前进按钮
on: {
    slideChangeTransitionEnd: function () {
        if (this.isEnd) {
            this.navigation.nextEl[0].style.display = "none";
        } else {
            this.navigation.nextEl[0].style.display = "block";
        }
    },
},
```

### 7、Scollbar（滚动条）

| 配置项        | 说明                                                       |
| :------------ | :--------------------------------------------------------- |
| scrollbar     | 为 Swiper 增加滚动条                                       |
| el            | Scrollbar 容器的 css 选择器                                |
| hide          | 滚动条是否自动隐藏。默认：false，不会自动隐藏。            |
| draggable     | 该参数设置为 true 时允许拖动滚动条。                       |
| snapOnRelease | 如果设置为 false，释放滚动条时 slide 不会自动贴合。        |
| dragSize      | 设置滚动条指示的尺寸。默认'auto': 自动，或者设置 num(px)。 |

### 8、Mousewheel(鼠标)

| 配置项     | 说明                                                         |
| :--------- | :----------------------------------------------------------- |
| mousewheel | 开启鼠标滚轮控制 Swiper 切换。可设置鼠标选项，或 true 使用默认值。 |
| invert     | 这个参数会使鼠标滚轮控制方向反转。(反转滚动方向（向上滚动=下一页）) |
| .....      | 更多配置自己测试下                                           |

```js
 mousewheel: {
    enabled: true,
    sensitivity: 2,  // 滚动更灵敏
    invert: true,    // 反转滚动方向（向上滚动=下一页）
  },
```

### 9、Keyboard(键盘)

| 配置项         | 说明                                                         |
| :------------- | :----------------------------------------------------------- |
| keyboard       | 设置开启键盘来控制 Swiper 切换。设为 true 时，能使用键盘的方向键控制 slide 切换。(水平左右箭头) |
| enabled        | 开启后可以使用键盘切换                                       |
| onlyInViewport | 默认仅控制当前窗口内的 swiper 切换。当 swiper 离开可视区域则无法切换。 |

### 10、Carousel(旋转木马)

| 配置项               | 说明                                                         |
| :------------------- | :----------------------------------------------------------- |
| slidesPerView        | 设置 slider 容器能够同时显示的 slides 数量(carousel 模式) 可以设置为数字（可为小数，小数不可 loop） 或者 'auto' 则自动根据 slides 的宽度来设定数量 (可以用 css 单独控制 slides 的宽度) |
| spaceBetween         | 在 slide 之间设置距离（单位 px）。                           |
| centeredSlides       | 居中幻灯片。设定为 true 时，当前的 active slide 会居中，而不是默认状态下的居左。 |
| centeredSlidesBounds | 居中幻灯片无缺口。当你通过设置 `centeredSlides: true` 使得幻灯片居中后，还可以配合设置此参数，使得第一个和最后一个 slide 始终贴合边缘而不会出现缺口。 |
| slidesPerGroup       | 在 carousel mode 下定义 slides 的数量多少为一组。(一次切多少个 slides， 注意与 centeredSlides 和 centeredSlidesBounds 属性一起用时的区别 ) |

### 11、Free Mode(自由模式/撞击反弹)

| 配置项   | 说明                                                         |
| :------- | :----------------------------------------------------------- |
| freeMode | 启用自由模式功能。默认值为 false 可设置具体参数或`true`来使用默认设置。 默认情况下 Swiper 每次滑动时只滑动一个 Slide，并且会自动贴合 Wrapper。开启自由模式后，Swiper 会根据惯性滑动可能不止一格且不会贴合。 |
| ....     | 其它配置项自己可以测试下                                     |

### 12、Effects 切换效果

| 配置项     | 说明                                                         |
| :--------- | :----------------------------------------------------------- |
| effect     | 设置 Slide 的切换效果，默认为"slide"（普通位移切换） 还可设置为"fade"（淡入）、"cube"（方块）、"coverflow"（3d 流） "flip"（3d 翻转）、"cards"(卡片式)、"creative"（创意性） |
| fadeEffect | 配合 effect 属性的 fade 效果，实现淡出淡入                   |
| ....       | 自已研究                                                     |

### 13、Swiping /No swiping（禁止切换）

| 配置项    | 说明                                                         |
| :-------- | :----------------------------------------------------------- |
| noSwiping | 设为 true 时，可以在 slide 上（或其他元素）增加类名`'swiper-no-swiping'`，使该 slide 无法拖动 |

### 14、 锚导航

| 配置           | 说明                                                         |
| :------------- | :----------------------------------------------------------- |
| hashNavigation | 设置散列导航选项，或 true 使用默认值。为每个 slide 增加散列导航（有点像锚链接）。 还需要在每个 slide 处增加 data-hash 属性。 这样当你的 swiper 切换时你的页面 url 就会加上这个属性的值了，你也可以通过进入页面时修改页面 url 让 swiper 在初始化时切换到指定的 slide。 |
| watchState     | 开启后观察浏览器窗口的的 hashchange 状态变化。可通过浏览器历史记录（页面前进后退按钮）或者 URL 的锚链接改变控制 slide 切换。 |

### 15、Controller 双向控制

| 配置       | 说明                                                         |
| :--------- | :----------------------------------------------------------- |
| controller | 设置双向控制的参数，或者 true 使用默认设置 还需要设置 control 为 swiper 实例，控制该 swiper，而不是被该 swiper 控制 |
| control    | 设置为另外一个 Swiper 实例开始控制该 Swiper。                |
| By         | 设定 Swiper 相互控制时的控制方式。当两个 swiper 的 slide 数量不一致时可用。 默认为'slide'，自身切换一个 slide 时，被控制方也切换一个 slide。 可选：'container'，按自身 slide 在 container 中的位置比例进行控制。 |

### 16 、 Thumbs 缩略图

| 配置                  | 说明                                                         |
| :-------------------- | :----------------------------------------------------------- |
| thumbs                | thumbs 组件专门用于制作带缩略图的 swiper，比使用 controller 组件更为简便，且在 loop 状态下更友好。 |
| swiper                | 设置作为缩略图的 swiper 对象。                               |
| slideThumbActiveClass | 设置缩略图 Swiper 的活动块的附加类名。 banner Swiper 切换时，缩略图 Swiper 的原活动块类名 swiper-slide-active 不会切换，而缩略图 Swiper 的附加类名 swiper-slide-thumb-active 会切换。 |

![GIF2025-6-2614-06-15](https://www.arryblog.com/assets/img/GIF2025-6-2614-06-15.b618508a.gif)

```html
<link rel="stylesheet" href="./css/swiper-bundle.min.css" />
<style>
  body {
    background-color: #000;
  }
  .swiper1 {
    width: 600px;
    height: 300px;
  }
  .swiper .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper2 {
    width: 600px;
    height: 100px;
  }

  .swiper2 .swiper-slide {
    opacity: 0.4;
  }

  .swiper2 .swiper-slide-thumb-active {
    opacity: 1;
  }
</style>

<!-- 大图轮播 -->
<div class="swiper swiper1">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><img src="./images/01.png" /></div>
    <div class="swiper-slide"><img src="./images/02.png" /></div>
    <div class="swiper-slide"><img src="./images/03.png" /></div>
    <div class="swiper-slide"><img src="./images/04.png" /></div>
    <div class="swiper-slide"><img src="./images/05.png" /></div>
  </div>
  <!-- 如果需要导航按钮 -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div>

<!-- 小缩略图 -->
<div class="swiper swiper2">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><img src="./images/01.png" /></div>
    <div class="swiper-slide"><img src="./images/02.png" /></div>
    <div class="swiper-slide"><img src="./images/03.png" /></div>
    <div class="swiper-slide"><img src="./images/04.png" /></div>
    <div class="swiper-slide"><img src="./images/05.png" /></div>
  </div>
</div>

<script src="./js/swiper-bundle.min.js"></script>
<script>
  // 缩略图轮播  一定要在 大图轮播图前初始化
  var thumbsSwiper = new Swiper(".swiper2", {
    direction: "horizontal", // 垂直切换选项
    spaceBetween: 10,
    slidesPerView: 4,
    watchSlidesVisibility: true /*避免出现bug*/,
  });

  //   大图轮播
  var mySwiper = new Swiper(".swiper1", {
    direction: "horizontal", // 垂直切换选项
    // loop: true, // 循环模式选项
    spaceBetween: 10,
    thumbs: {
      swiper: thumbsSwiper,
    },
    slideThumbActiveClass: "my-slide-thumb-active",

    // 如果需要分页器
    pagination: {
      el: ".swiper-pagination",
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
</script>
```

### 16.1、实战应用：双向控制 Tab 选项卡

![GIF2025-6-2617-44-43](https://www.arryblog.com/assets/img/GIF2025-6-2617-44-43.0ffa192d.gif)

```html
<link rel="stylesheet" href="./css/swiper-bundle.min.css" />
<style>
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .tab {
    width: 500px;
    /* min-height: 400px; */
    /* border: 2px solid red; */
    margin: 0 auto;
  }
  .tab .swiper-btn {
    height: 40px;
    width: 400px;
    margin-left: 0;
  }
  .swiper-btn .swiper-slide {
    line-height: 40px;
    background-color: #ddd;
    cursor: pointer;
    text-align: center;
  }
  .swiper-btn .swiper-slide.swiper-slide-thumb-active {
    background-color: skyblue;
    color: #fff;
  }
  .swiper {
    height: 200px;
  }
  .swiper1 .swiper-slide:nth-child(2n) {
    background-color: khaki;
  }
  .swiper1 .swiper-slide:nth-child(2n + 1) {
    background-color: skyblue;
  }
</style>
<body>
  <div class="tab">
    <div class="swiper swiper-btn">
      <div class="swiper-wrapper">
        <div class="swiper-slide">选项一</div>
        <div class="swiper-slide">选项二</div>
        <div class="swiper-slide">选项三</div>
        <div class="swiper-slide">选项四</div>
        <div class="swiper-slide">选项五</div>
      </div>
    </div>

    <!-- 选项卡内容 -->
    <div class="swiper swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
      </div>
    </div>
  </div>

  <script src="./js/swiper-bundle.min.js"></script>
  <script>
    var Swiper2 = new Swiper(".swiper-btn", {
      direction: "horizontal", // 水平切换选项
      slidesPerView: 5,
      spaceBetween: 5,

      on: {
        // 滑动结束后回调,
        slideChangeTransitionEnd: function () {
          // 当切换到下一张后, 修改对应tab标签样式
          updateLiClass(this.realIndex);
        },
      },
    });

    var Swiper1 = new Swiper(".swiper1", {
      direction: "horizontal", // 水平切换选项
      autoplay: true,
      loop: true,
      on: {
        // 滑动结束后回调,
        slideChangeTransitionEnd: function () {
          // 当切换到下一张后, 修改对应tab标签样式
          updateLiClass(this.realIndex);
        },
      },
      thumbs: {
        swiper: Swiper2,
      },
    });
  </script>
</body>
```

## 四、Swiper 事件

| 事件配置项                         | 说明                                                         |
| :--------------------------------- | :----------------------------------------------------------- |
| init                               | 用来表示，当你创建一个 Swiper 实例时是否立即初始化。如果禁止了，可以稍后使用 `mySwiper.init()` 来初始化。 |
| on                                 | `on` (在 Basic Swiper 一般选项中 ) 配置，用来注册事件，Swiper4.0 开始使用关键词 `this` 指代 `Swiper` 实例。 |
| slideChangeTransitionStart(swiper) | 回调函数，swiper 从当前 slide 开始过渡到另一个 slide 时执行。 |
| slideChangeTransitionEnd(swiper)   | 回调函数，swiper 从一个 slide 过渡到另一个 slide 结束时执行。 可选 Swiper 实例作为参数。 |

**init 初始化 Swiper**

```html
<script>
  var mySwiper = new Swiper(".swiper", {
    direction: "horizontal", // 垂直切换选项
    init: false,
  });
  /* html中添加一个id="btn" 的元素，点击元素后初始化Swiper */
  const btn = document.getElementById("btn");
  btn.onclick = function () {
    mySwiper.init();
  };
</script>
<script>
  var mySwiper = new Swiper(".swiper", {
    direction: "horizontal", // 垂直切换选项
    // init: false,
    on: {
      slideChangeTransitionStart: function () {
        alert(this.activeIndex);
      },
      slideChangeTransitionEnd: function () {
        alert(this.activeIndex + "ss"); //切换结束时，告诉我现在是第几个slide
      },
    },
  });
</script>
```

## 五、Swiper 属性

| 属性          | 说明                                                         |
| :------------ | :----------------------------------------------------------- |
| activeIndex   | 返回当前活动块(激活块)的索引。loop 模式下注意该值会被加上复制的 slide 数。 |
| previousIndex | 返回上一个活动块的索引，切换前的索引。                       |
| realIndex     | 当前活动块的索引，与 activeIndex 不同的是，在 loop 模式下不会将[复制的块 (opens new window)](https://swiper.com.cn/api/Loop/2014/1215/23.html)的数量计算在内。 |
| isEnd         | 如果 Swiper 位于最右/下，这个值为 true，否则为 false         |
| width         | 获取 swiper 容器的宽度。                                     |
| height        | 获取 swiper 容器的高度。                                     |

```html
<script>
  var mySwiper = new Swiper(".swiper", {
    direction: "horizontal", // 垂直切换选项
    // init: false,
    loop: true,
    on: {
      slideChangeTransitionStart: function () {
        console.log("activeIndex", this.activeIndex);
        console.log("realIndex", this.realIndex);
        console.log("previousIndex", this.previousIndex);
      },
      slideChangeTransitionEnd: function () {
        // console.log(this.activeIndex + "ss"); //切换结束时，告诉我现在是第几个slide
      },
    },
  });
</script>
```

## 六、Swiper 方法

| 方法名                              |                                |
| :---------------------------------- | :----------------------------- |
| slideNext(speed, runCallbacks)      | 滑动到下一个滑块               |
| slidePrev(speed,runCallbacks)       | 滑动到上一个滑块               |
| slideTo(index, speed, runCallbacks) | 控制 Swiper 切换到指定 slide。 |

### 1、slideNext(speed, runCallbacks)

TIP

滑动到下一个滑块。

| 参数名       | 类型    | 是否必填 | 描述                                        |
| :----------- | :------ | :------- | :------------------------------------------ |
| speed        | num     | 可选     | 切换速度(单位 ms)                           |
| runCallbacks | boolean | 可选     | 设置为 false 时不会触发 transition 回调函数 |

关于`mySwiper.slideTo(index,speed,runCallbacks);` `mySwiper.slidePrev(speed ,runCallbacks)`; `mySwiper.slideNext(speed,runCallbacks)` 中的回调函数，指的就是`slideChangeTransitionStart` 事件和 `slideChangeTransitionEnd` 事件触发的回调

```html
<style>
  .swiper,
  .container {
    width: 600px;
    height: 300px;
  }
  .swiper-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

<div class="container">
  <div class="swiper swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="./images/01.png" />
      </div>
      <div class="swiper-slide">
        <img src="./images/02.png" />
      </div>
      <div class="swiper-slide">
        <img src="./images/03.png" />
      </div>
      <div class="swiper-slide">
        <img src="./images/04.png" />
      </div>
      <div class="swiper-slide">
        <img src="./images/05.png" />
      </div>
      <div class="swiper-slide">
        <img src="./images/06.png" />
      </div>
      <div class="swiper-slide">
        <img src="./images/07.png" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
  <button id="prev">上一张</button>
  <button id="next">下一张</button>
  <button id="three">第3张</button>
</div>
<script>
  var mySwiper = new Swiper(".swiper", {
    direction: "horizontal", // 垂直切换选项
    // init: false,
    loop: true,
    on: {
      slideChangeTransitionStart: function () {
        console.log("realIndex", this.realIndex);
      },
      slideChangeTransitionEnd: function () {
        console.log(this.realIndex + "ss"); //切换结束时，告诉我现在是第几个slide
      },
    },
  });

  /*
    	html结构中添加三个按扭
    	  <button id="prev">上一张</button>
            <button id="next">下一张</button>
            <button id="three">第3张</button>
         以代码获取三个按扭，并添加点击事件
    */
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const three = document.getElementById("three");

  prev.onclick = function () {
    mySwiper.slidePrev(300, true);
  };
  next.onclick = function () {
    mySwiper.slideNext(300, true);
  };
  three.onclick = function () {
    mySwiper.slideTo(2, 300, false);
  };
</script>
```

## 七、Swiper 实战

TIP

当我们想要实现某种轮播效果时，我们可以先到 [Swiper 基础演示 (opens new window)](https://swiper.com.cn/demo/index.html)这个页面去找类似的，看他是如何配置的，然后根据他的配置到 [Api 文档 (opens new window)](https://swiper.com.cn/api/index.html)页面，了解对应的配置是什么意思，然后针对自己的需要来修改配置。

### 1、一行多列滑动效果

![GIF 2022-8-10 18-59-12](https://www.arryblog.com/assets/img/GIF2022-8-1018-59-12.de3a9a85.gif)

```html
<style>
  .swiper-container {
    width: 800px;
    height: 400px;
  }
  .swiper-slide {
    font-size: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-slide:nth-child(n) {
    background-color: khaki;
  }
  .swiper-slide:nth-child(2n) {
    background-color: skyblue;
  }
  .swiper-slide:nth-child(3n) {
    background-color: tomato;
  }
</style>
<body>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">1</div>
      <div class="swiper-slide">2</div>
      <div class="swiper-slide">3</div>
      <div class="swiper-slide">4</div>
      <div class="swiper-slide">5</div>
      <div class="swiper-slide">6</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
  <script src="./js/swiper-bundle.js"></script>
  <script>
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      slidesPerView: 3,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  </script>
</body>
```

### 2、Tab 选项卡双向切换效果

![GIF2025-6-2617-44-43](https://www.arryblog.com/assets/img/GIF2025-6-2617-44-43.0ffa192d.gif)

```html
<link rel="stylesheet" href="./css/swiper-bundle.min.css" />
<style>
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .tab {
    width: 600px;
    margin: 0 auto;
  }
  .tab ul.tablist {
    height: 40px;
    display: flex;
  }
  .tab ul.tablist li {
    line-height: 40px;
    padding: 0px 15px;
    margin-right: 5px;
    background-color: #ddd;
    cursor: pointer;
  }
  .tab ul.tablist li.active {
    background-color: skyblue;
    color: #fff;
  }
  .swiper {
    height: 200px;
  }
  .swiper-slide:nth-child(2n) {
    background-color: khaki;
  }
  .swiper-slide:nth-child(2n + 1) {
    background-color: skyblue;
  }
</style>

<div class="tab">
  <!-- 选项卡标签 -->
  <ul class="tablist">
    <li class="active">选项一</li>
    <li>选项二</li>
    <li>选项三</li>
    <li>选项四</li>
    <li>选项五</li>
  </ul>
  <!-- 选项卡内容 -->
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
    </div>
  </div>
</div>

<script src="./js/swiper-bundle.min.js"></script>
<script>
  var mySwiper = new Swiper(".swiper", {
    direction: "horizontal", // 水平切换选项
    on: {
      // 滑动结束后回调,
      slideChangeTransitionEnd: function () {
        // 当切换到下一张后, 修改对应tab标签样式
        updateLiClass(this.realIndex);
      },
    },
  });

  // 点击选项卡,控制轮播图切换
  // 获取所有选项卡
  const list = document.querySelectorAll(".tab .tablist li");
  // 便利所有选项卡,给每一个选项卡添加点击事件
  for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
      updateLiClass(i);
      // 将轮播图切换到对应选项
      mySwiper.slideTo(i, 300, false);
    };
  }

  // 更新li的 calss
  function updateLiClass(index) {
    // 先将所有li的 class='active' 移除,再级当前点击的li添加 class='active'
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove("active");
    }
    list[index].classList.add("active");
  }
</script>
```

### 3、带时间轴的响应式多列轮播

TIP

参考案例网址：[https://yrhr.com/(opens new window)](https://yrhr.com/)

![GIF2025-6-2716-21-30](https://www.arryblog.com/assets/img/GIF2025-6-2716-21-30.23f7632a.gif)

```html
<link rel="stylesheet" href="./css/swiper-bundle.min.css" />
<style>
  .container {
    max-width: 1600px;
    margin: 50px auto;
  }
  .swiper1 {
    height: 400px;
    padding: 10px 0px;
    /* background-color: khaki; */
  }
  .swiper2 {
    height: 100px;
    width: 90%;
    /* background-color: skyblue; */
  }
  .swiper1 .swiper-slide {
    box-sizing: border-box;
    padding: 10px;
    /* background-color: red; */
  }
  .swiper1 .slide-content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    box-shadow: 0 0 10px #ddd;
  }
  .timeline {
    /* border: 1px solid red; */
    position: relative;
  }
  .timeline .swiper-button-prev1,
  .timeline .swiper-button-next1 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    /* background-color: khaki; */
    background-image: url(./images/arrow-active.png);
  }
  .timeline .swiper-button-prev1 {
    left: 0;
  }
  .timeline .swiper-button-next1 {
    right: 0;
    transform: translateY(-50%) rotate(180deg);
  }
  .timeline .swiper-button-prev1.swiper-button-disabled,
  .timeline .swiper-button-next1.swiper-button-disabled {
    opacity: 0.4;
  }
  .timeline .swiper-slide {
    text-align: center;
  }
  .timeline .swiper-slide::before {
    content: "";
    height: 2px;
    background-color: #ddd;
    width: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .timeline .swiper-slide::after {
    content: "";
    width: 7px;
    height: 7px;
    border: 5px solid #ddd;
    position: absolute;
    background-color: #ddd;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
  .timeline .swiper-slide.swiper-slide-thumb-active::after {
    background-color: #fff;
    border-color: skyblue;
  }
  @media screen and (max-width: 1280px) {
    .hidden {
      display: none;
    }
  }
</style>
<div class="container">
  <!-- 历史记录列表 -->
  <div class="swiper swiper1" id="swiper1">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><div class="slide-content">2024</div></div>
      <div class="swiper-slide"><div class="slide-content">2023</div></div>
      <div class="swiper-slide"><div class="slide-content">2022</div></div>
      <div class="swiper-slide"><div class="slide-content">2021</div></div>
      <div class="swiper-slide"><div class="slide-content">2020</div></div>
      <div class="swiper-slide"><div class="slide-content">2019</div></div>
      <div class="swiper-slide"><div class="slide-content">2018</div></div>
      <div class="swiper-slide"></div>
      <div class="swiper-slide hidden"></div>
    </div>
  </div>
  <!-- 时间轴 -->
  <div class="timeline">
    <div class="swiper swiper2" id="swiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide">2024</div>
        <div class="swiper-slide">2023</div>
        <div class="swiper-slide">2022</div>
        <div class="swiper-slide">2021</div>
        <div class="swiper-slide">2020</div>
        <div class="swiper-slide">2019</div>
        <div class="swiper-slide">2018</div>
      </div>
    </div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev1"></div>
    <div class="swiper-button-next1"></div>
  </div>
</div>

<script src="./js/swiper-bundle.min.js"></script>
<script>
  //   时间轴-对应缩略图
  var mySwiper2 = new Swiper("#swiper2", {
    direction: "horizontal", // 垂直切换选项
    slidesPerView: 5,
    breakpoints: {
      1280: {
        //当屏幕宽度大于等于1280
        slidesPerView: 6,
      },
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
  });
  //   历史记录列表
  var mySwiper1 = new Swiper("#swiper1", {
    direction: "horizontal", // 垂直切换选项
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      1280: {
        //当屏幕宽度大于等于1280
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    thumbs: {
      swiper: mySwiper2,
      /* 默认情况下缩略图swiper 拥有复数的active 索引，设置为false则只有一个索引 */
      multipleActiveThumbs: false,
    },
  });
</script>
```

## 八、Swiper Animate 使用方法

TIP

Swiper Animate 是 Swiper 中文网提供的用于在 Swiper 内快速制作 CSS3 动画效果的小插件。

> 具体使用教程参考官方 [Swiper Animate 使用方法 (opens new window)](https://swiper.com.cn/usage/animate/index.html)。

![image-20250626182412171](https://www.arryblog.com/assets/img/image-20250626182412171.19878fc5.png)

### 1、基础使用示例

![GIF2025-6-2618-33-08](https://www.arryblog.com/assets/img/GIF2025-6-2618-33-08.c8bd9b17.gif)

```html
<link rel="stylesheet" href="./css/swiper-bundle.min.css" />
<link rel="stylesheet" href="./css/animate.min.css" />
<style>
  .swiper {
    width: 600px;
    height: 300px;
  }
  .swiper-slide p {
    font-size: 50px;
    text-align: center;
  }
  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-slide .img1 {
    width: 400px;
  }
  .swiper-slide .text-top {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<body>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <p class="ani" swiper-animate-effect="fadeInLeft">
          左边出来的文字哈哈!!
        </p>
        <p class="ani" swiper-animate-effect="fadeInRight">
          右边出来的文字哈哈!!!
        </p>
      </div>
      <div class="swiper-slide">
        <img
          src="./images/01.png"
          class="ani img1"
          swiper-animate-effect="zoomIn"
        />
        <p class="ani text-top" swiper-animate-effect="zoomIn">
          我是文字上面的描述内容
        </p>
      </div>
      <div class="swiper-slide">
        <img src="./images/02.png" class="ani" swiper-animate-effect="rollIn" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>

  <script src="./js/swiper-bundle.min.js"></script>
  <script src="./js/swiper.animate1.0.3.min.js"></script>
  <script>
    //Swiper5
    var mySwiper = new Swiper(".swiper", {
      autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        init: function () {
          swiperAnimateCache(this); //隐藏动画元素
          swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function () {
          swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
        },
      },
    });
  </script>
</body>
```

### 2、自定义动画

TIP

如果 `Swiper` 官方提供的动画不能满足你的需求，你可以仿照 [animate.css (opens new window)](https://swiper.com.cn/download/index.html#file10)的格式制作一些其他效果，加到你自己的 `css` 文件。

- 自定义 CSS 动画

```css
/* 调用自定义动画类 */
.ibc-slideInUp {
  -webkit-animation-name: slideInUp;
  animation-name: slideInUp;
}

/* 自定义动画 */
@keyframes slideInUp {
  0% {
    -webkit-transform: translate3d(0, 500%, 0);
    transform: translate3d(0, 500%, 0);
    opacity: 0;
  }

  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
```

- 应用上面自定义的动画

```html
<div class="swiper-slide">
  <h3
    class="ani"
    swiper-animate-effect="ibc-slideInUp"
    swiper-animate-duration="1s"
    swiper-animate-delay="0s"
  >
    我是一段文字应用了自定义动画ibc-slideInUp
  </h3>
</div>
```

### 3、H5 全屏滑动动画

TIP

- H5 动画制作网站，易企秀：[https://www.eqxiu.com/(opens new window)](https://www.eqxiu.com/)
- 搞定：[https://www.gaoding.com/(opens new window)](https://www.gaoding.com/)

![GIF2025-6-2717-45-44](https://www.arryblog.com/assets/img/GIF2025-6-2717-45-44.7428866a.gif)

```html
<link rel="stylesheet" href="./css/swiper-bundle.min.css" />
<link rel="stylesheet" href="./css/animate.min.css" />
<style>
  p {
    margin: 0;
  }
  img {
    display: block;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  .img-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .mobile,
  .swiper {
    width: 100%;
    height: 100%;
    /* background-color: khaki; */
  }
  /* 第一页样式 */
  .page1-img1 {
    height: 50%;
  }

  .page1-text1 {
    position: absolute;
    right: 10px;
    top: 50px;
    color: #fff;
    font-size: 16px;
    display: flex;
  }
  .page1-text1 p {
    width: 20px;
    padding: 0px 5px;
    text-shadow: 0 0 2px #000;
  }
  .page1-img2 {
    height: 30%;
    width: 90%;
    margin: 0px auto;
    /* background-color: skyblue; */
  }
  .page1-text2 {
    width: 100%;
    text-align: center;
  }
  .page1-text2 p {
    line-height: 35px;
    font-size: 18px;
  }

  /* 第二页样式 */
  .page2-img1 {
    height: 60%;
  }
  .page2-img2 img {
    width: 100%;
  }
  .page2-text1 {
    background-color: skyblue;
    padding: 10px;
    font-size: 14px;
    color: #fff;
    line-height: 25px;
    margin-top: 3%;
  }
  .page2-text2 {
    font-size: 14px;
    text-align: center;
    line-height: 55px;
  }

  /* 第三页 */
  .page3-img1 {
    height: 70%;
  }
  .page3-img2 {
    width: 60%;
    /* background-color: khaki; */
    position: absolute;
    right: 20px;
    top: 0;
  }
  .page3-img2 img {
    transform: rotate(10deg) translateY(-15%);
  }
  .page3-img3 {
    box-sizing: border-box;
    width: 40%;
    border: 1px solid #ddd;
    padding: 5px;
    position: absolute;
    top: 63%;
    background-color: #fff;
  }
  .page3-img3 img {
    width: 100%;
  }
  .page3-text1 {
    box-sizing: border-box;
    width: 60%;
    position: absolute;
    top: 70%;
    right: 0;
    padding: 20px;
    font-size: 16px;
    line-height: 30px;
  }
  /* 第四页样式 */
  .page4-img1 {
    height: 60%;
  }

  .page4-text1 {
    display: flex;
    margin-top: 50px;
  }
  .page4-text1 p {
    font-size: 16px;
    width: 18px;
    margin: 0px 10px;
  }

  .page4-img2 {
    width: 60%;
    height: 45%;
    position: absolute;
    right: 0;
    bottom: 0;
    border: 1px solid #ddd;
    padding: 5px;
    background-color: #fff;
  }
</style>
<div class="mobile">
  <div class="swiper">
    <div class="swiper-wrapper">
      <!-- 第一页 -->
      <div class="swiper-slide">
        <div
          class="page1-img1 ani"
          swiper-animate-effect="bounceInDown"
          swiper-animate-duration="1s"
        >
          <img src="./pic/01-1.webp" class="img-cover" />
        </div>

        <div
          class="page1-text1 ani"
          swiper-animate-effect="bounceInRight"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.5s"
        >
          <p>遇见你</p>
          <p>是最美丽的意外</p>
        </div>

        <div
          class="page1-img2 ani"
          swiper-animate-effect="zoomIn"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.5s"
        >
          <img src="./pic/01-2.webp" class="img-cover" />
        </div>
        <div
          class="page1-text2 ani"
          swiper-animate-effect="fadeInUp"
          swiper-animate-duration="1s"
          swiper-animate-delay="1s"
        >
          <p>天淡银河垂地，相思无计回避</p>
          <p>纵然千山万里，寄我心中情语</p>
        </div>
      </div>
      <!-- 第二页 -->
      <div class="swiper-slide">
        <div
          class="page2-img1 ani"
          swiper-animate-effect="zoomIn"
          swiper-animate-duration="1s"
        >
          <img src="./pic/02-1.webp" class="img-cover" />
        </div>
        <div
          class="page2-img2 ani"
          swiper-animate-effect="fadeInUp"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.3s"
        >
          <img src="./pic/02-2.jpg" />
        </div>
        <div
          class="page2-text1 ani"
          swiper-animate-effect="lightSpeedIn"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.5s"
        >
          <p>
            依然能清晰记得，和你初次见面的场景我真的有点小小的紧张。
            我和你的初次见面，还是在别人的引荐下见的。
          </p>
        </div>
        <div
          class="page2-text2 ani"
          swiper-animate-effect="flipInY"
          swiper-animate-duration="1s"
          swiper-animate-delay="1s"
        >
          Your gentle smile，drive away the haze in my heart
        </div>
      </div>
      <div class="swiper-slide">
        <div
          class="page3-img1 ani"
          swiper-animate-effect="fadeInDown"
          swiper-animate-duration=".5s"
        >
          <img src="./pic/03-2.webp" class="img-cover" />
        </div>
        <div
          class="page3-img2 ani"
          swiper-animate-effect="zoomIn"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.3s"
        >
          <img src="./pic/03-1.webp" class="img-cover" />
        </div>
        <div
          class="page3-img3 ani"
          swiper-animate-effect="rotateIn"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.3s"
        >
          <img src="./pic/03-3.webp" />
        </div>
        <div
          class="page3-text1 ani"
          swiper-animate-effect="fadeInUp"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.3s"
        >
          我把思念告诉风，它轻轻吹过，带着温柔;我把思念告诉了水，流水潺潺，那份清甜你可还记得？我用整个真心，思念你。
        </div>
      </div>
      <!-- 第四页 -->
      <div class="swiper-slide">
        <div
          class="page4-img1 ani"
          swiper-animate-effect="fadeInDown"
          swiper-animate-duration="1s"
        >
          <img src="./pic/04-1.webp" class="img-cover" />
        </div>
        <div
          class="page4-text1 ani"
          swiper-animate-effect="fadeInUp"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.3s"
        >
          <p>山无陵</p>
          <p>天地合</p>
          <p>乃敢与君绝！</p>
        </div>

        <div
          class="page4-img2 ani"
          swiper-animate-effect="fadeInRight"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.3s"
        >
          <img src="./pic/04-3.webp" class="img-cover" />
        </div>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</div>

<script src="./js/swiper-bundle.min.js"></script>
<script src="./js/swiper.animate1.0.3.min.js"></script>
<script>
  var mySwiper = new Swiper(".swiper", {
    direction: "vertical", // 垂直切换选项
    loop: true, // 循环模式选项
    // initialSlide: 3,

    // 如果需要分页器
    pagination: {
      el: ".swiper-pagination",
    },
    on: {
      init: function () {
        swiperAnimateCache(this); //隐藏动画元素
        swiperAnimate(this); //初始化完成开始动画
      },
      slideChangeTransitionEnd: function () {
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
      },
    },
  });
</script>
```

上
