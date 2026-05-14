---
title: "transition 过渡动画与 animation 自定义动画"
source: "https://www.arryblog.com/guide/css3/css-transition-animation.html"
category: "css3"
order: 11
---

# transition 过渡动画与 animation 自定义动画

transition 过渡动画、animation 自定义动画，无论在 PC 端、还是移动端项目开发中都是高频常用的动画，对于交互体验的提升都有很大的帮助。因此，学好动画相关知识及灵活应用就非常重要。

## 一、transition 过渡动画

如何理解过渡动画 ？

一个元素由 A 状态经过一段时间变化成 B 状态，我们只需要定义其开始和结束的状态，而他的中间的状态会自己添加“补间动画”。如下图：

![image-20211112215646512](https://www.arryblog.com/assets/img/image-20211112215646512.14e43f14.jpg)

注：

  + 以前，网页的特效基本都是由 JavaScript 定时器实现的，现在逐步改为使用 CSS3 过渡
  + 优点：动画更细腻，内存开销小
  + 兼容性：移动 PC 都兼容，但是需要加上对应的浏览器前缀

### 1、transition 基本语法

CSS transition 属性可以为一个元素在不同状态之间切换的时候定义不同的过渡效果

**语法**

    
    
    /* 
    	[] 表示这个值，可以省略不写
    	css属性名  过渡时间   时间函数  延迟时间 
    */
    transition: transition-property transition-duration [transition-timing-function]
      [transition-delay];

属性 | 描述  
---|---  
`transition-property` | 指定 CSS 属性的 name，哪些属性要过渡  
`transition-duration` | transition 效果需要指定多少秒或毫秒才能完成，动画时间  
`transition-timing-function` | 指定 transition 效果的速度变化曲线  
`transition-delay` | 定义 transition 效果开始的时候（延迟时间）  

**用法**

    
    
    /* 
        width : 过渡属性为width
        1s : 动画时长1秒
        linear : 直线匀速动动
        0s : 延迟时间,不延迟
    */
    transition: width 1s linear 0s;
    transition: width 1s;
    transition: width 1s linear;
    transition: width 1s 2s;

过渡动画何时发生 ?

  + 当属性值发生变化时，才会触发 transition 动画
  + transition 动画主要与 `:hover` 配合，来实现鼠标滑动动画效果

**实际应用**

```

<style type="text/css">
  div {
    width: 100px;
    height: 100px;
    background: tomato;
    /* 
            transition：定义过渡动画
            border-radius：过渡的css属性
            1s ：动画过渡时间
            ease： 速度慢快慢
            0s ：延迟时间0s 
        */
    transition: border-radius 1s ease 0s;
    margin: 50px 10px;
  }
  .box:hover {
    border-radius: 50%;
  }
</style>
<body>
  <div class="box"></div>
</body>

```

渲染效果：

![GIF2025-1-316-19-33](https://www.arryblog.com/assets/img/GIF2025-1-316-19-33.f4dabbc8.gif)

### 2、可参与过渡的属性

可参与过渡的属性

  + 所有数值类型的属性，都可以参与过渡
  + 比如：width、height、left、top、border-radius、font-size、opacity
  + 背景颜色和文字都可以被过渡
  + 所有的变形（包括 2D 和 3D）都能被过渡，在 CSS 中 90%的属性都可以被过渡

**不能参与过渡动画的属性**

  + float 和 position 不能
  + display 无法过渡
  + font-family 等

​    
​    

    /* 
    	错误用法 
    	display属性是不可以参与过渡动画的
    */
    transition: display 1s ease 0s;

### 3、all 这个特殊属性

  + 需要所有属性参与过渡，即定义为 all
  + all 属性不要随意使用，会引发效率问题。
  + 如果只需要某一个属性过渡，最好指定该过渡的属性，而非用 all

​    
​    

    /*
        all: 所有属性
        1s: 动画过渡时间为1s
        linear: 匀速动动
        0s: 动画延迟时间0s
    */
    transition: all 1s linear 0s;

**应用**

```

<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: salmon;
    border-radius: 0;
    /* 
            all: 所有能过的渡的属性，发生改变时，都会发生过渡效果
            1s: 动画过渡时间为1s
            linear: 动画习速运动
            0s: 延迟时间
        */
    transition: all 1s linear 0s;
  }
  .box:hover {
    /* 宽、高、背景颜色、圆角都是可过渡属性，所以鼠标滑动后，都能呈现过渡变化效果 */
    width: 200px;
    height: 300px;
    background-color: skyblue;
    border-radius: 50%;
  }
</style>
<body>
  <div class="box"></div>
</body>

```

渲染效果：

![GIF2025-1-316-21-16](https://www.arryblog.com/assets/img/GIF2025-1-316-21-16.dd61bd14.gif)

### 4、定义多个过渡动画

多个过渡动画之间用 `,` （逗号）隔开

**语法**

    
    
    transition: 属性 过渡时间 时间函数 延迟时间, 属性 过渡时间 时间函数 延迟时间,
      属性 过渡时间 时间函数 延迟时间;

**应用**

```

<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: red;
    opacity: 1;
    /* 
            动画1： 宽度变化
            动画2：延迟1s后，高度发生变化
            动画3：延吃2s后，透明度发生变化
        */
    transition: width 1s linear 0s, height 1s ease 1s, opacity 1s linear 2s;
  }
  /* 鼠标滑动后，改变宽，高，透明度 */
  .box:hover {
    width: 200px;
    height: 200px;
    opacity: 0.2;
  }
</style>
<body>
  <div class="box"></div>
</body>

```

渲染效果：

![GIF2025-1-316-17-36](https://www.arryblog.com/assets/img/GIF2025-1-316-17-36.b9d52edc.gif)

### 5、过渡的四个小属性

前面我们学过 transition 这个属性，本质上 transition 这个属性是以下四个小属性的复合写法。

属性 | 描述  
---|---  
`transition-property` | 指定 CSS 属性的 name，哪些属性要过渡  
`transition-duration` | 指定动画多少秒或毫秒才能完成，动画执行时间  
`transition-timing-function` | 时间函数，指定动画速度变化曲线  
`transition-delay` | 指定动画开始前，需要的延迟时间  

  + 多个值之间用 `,`（逗号） 隔开，没有指定的值，以属性的第一个值为准

​    
​    

    transition-property: width, height;
    transition-duration: 1s, 2s;
    transition-timing-function: linear;
    transition-delay: 0s, 1s;

  + 小属性主要是用来层叠大属性用的。

```

<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: red;
    opacity: 1;
    /* 
            all: 所有能参与过渡的属性，都可参与过渡动画
            1s: 过渡时间1s
        */
    transition: all 1s;
    /* 过渡属性: 宽,高，不透明度 */
    transition-property: width, height, opacity;
    /* 过渡时间：
        	width 1s 
        	height 2s 
        	opacity 1s 
        */
    transition-duration: 1s, 2s;
    /* 
        	过渡延迟时间：
            1s：width宽过渡时间
            1s：height高过渡时间 
            2s：opacity不透明度过渡时间
        */
    transition-delay: 0s, 1s, 2s;
  }
  .box:hover {
    width: 200px;
    height: 200px;
    opacity: 0.2;
  }
</style>
<body>
  <div class="box"></div>
</body>

```

渲染效果：

![GIF-2022-7-26-14-39-34](data:image/gif; base64, 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/Q0eLj5OXm5+jp6uvs7e7v4OHy8/T19vf4+fr7/P3+//DzCgwIEECxo8iDChwoUMGzp8CDGixIkUK1q8iDGjxo0GHDt6LFMAACH5BAAKAKsALL8AAgAMAMgAoP///wAAAAIyhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YjUFQAAIfkEAAoAqwAspgACABkAyACg////AAAAAk2Ej6nL7Q+jnLTai7PevPsPhuJIluaJpurKtu4Lx/JM1/aN5/rO9/4PDAqHxKLxiEwql8ym8wmNSqfUqvWKzWq33K73Cw6Lx+Sy+WwrAAAh+QQACgCrACyRAAIAFQDIAKD///8AAAACRoSPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8MCofEovGITCqXzKbzCY1Kp9Sq9YrNarfcrvcrKQAAIfkEAAoAqwAsgAACABEAyACg////AAAAAj2Ej6nL7Q+jnLTai7PevPsPhuJIluaJpurKtu4Lx/JM1/aN5/rO9/4PDAqHxKLxiEwql8ym8wmNSqfU6rQAACH5BAAKAKsALHYAAgAKAMgAoP///wAAAAIshI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKZwUAIfkEAAoAqwAsbwACAAcAyACg////AAAAAiSEj6nL7Q+jnLTai7PevPsPhuJIluaJpurKtu4Lx/JM1/aNawUAIfkEAAoAqwAsagACAAUAyACg////AAAAAh6Ej6nL7Q+jnLTai7PevPsPhuJIluaJpurKtu4LOwUAIfkEAAoAqwAsaAACAAIAyACg////AAAAAhGEj6nL7Q+jnLTai7PevPuvFQAh+QQACgCrACxnAAIAAQDIAKD///8AAAACDISPqcvtD6OctNrrCgAh+QQACgCrACwDAMYAZAAEAKD///8AAAACEYSPqcvtD6OctNqLs968+68VACH5BAAKAKsALAMAvwBkAAcAoP///wAAAAIYhI+py+0Po5y02ouz3rz7D4biSJbmiZoFACH5BAAKAKsALAMAtABkAAsAoP///wAAAAIghI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyVQAAIfkEAAoAqwAsAwCpAGQACwCg////AAAAAiCEj6nL7Q+j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)

### 6、时间函数

时间函数（ `transition-timing-function` ），管理着动画在单位帧内播放的速度曲线

**时间函数的预设值**

值 | 描述  
---|---  
linear | 规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0, 0, 1, 1)）。  
ease | **默认值** ，规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25, 0.1, 0.25, 1)）。  
ease-in | 规定以慢速开始的过渡效果（等于 cubic-bezier(0.42, 0, 1, 1)）。  
ease-out | 规定以慢速结束的过渡效果（等于 cubic-bezier(0, 0, 0.58, 1)）。  
ease-in-out | 规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42, 0, 0.58, 1)）。  
cubic-bezier(_n_ , _n_ , _n_ , _n_) | 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。  

**常用参数**

> 横轴表示时间，纵轴表示变化量 . 越斗表示运动速度越快。

![image-20211112224408179](https://www.arryblog.com/assets/img/image-20211112224408179.efe97eef.png)

**贝塞尔曲线**

> 官方网址：<https://cubic-bezier.com/>[(opens new window)](<https://cubic-bezier.com/>) 可以在线生成贝塞尔曲线，可以自定义动画时间函数

![image-20250103171847679](https://www.arryblog.com/assets/img/image-20250103171847679.3e9be2be.png)

### 6.1、利用贝塞尔曲线来制定元素的运动速度

![image-20250103171301794](https://www.arryblog.com/assets/img/image-20250103171301794.ac1556f7.png)

```

<style>
  .box {
    width: 100px;
    height: 100px;
  }
  .box1 {
    background-color: khaki;
    /* cubic-bezier(0, 1.4, 0.72, 1.42) 贝塞尔曲线 区线指定运动速度*/
    transition: width 1s cubic-bezier(0, 1.4, 0.72, 1.42);
  }
  .box:hover {
    width: 200px;
  }
  .box2 {
    width: 200px;
    background-color: skyblue;
  }
</style>
<body>
  <div class="box box1"></div>
  <div class="box box2"></div>
</body>

```

![GIF2025-1-317-06-24](data:image/gif; base64, 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adKp8vkSajRamjIKigqiynri+voRK9tBWxtxistxu9vQ61ulG/w7TCz8eVycrIy82ex8Ca0ADF3dfK2cfbxN3B387Ru+O45bXnsum/66ztqO+l6qKiAwrTNKX28/n7+Pn68P2z+A1gYS1GbwoLeECsUxbGjuIUR1Eie6q9iPHEZ6Tg4/AfzIrWJIj/1AghtowGTHZwkssjOWMuNKafbuMasJIF4onZ14ZvJZCWgkoY2IJjJaCGkgpX2Y5nFaB2ocqW2oprFaBmsYrV24ehlVAAAh+QQACgCrACxzAAUAKgBkAKD///8AAAACRoSPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8MCofEovGITCqXzKbzCY1Kp9Sq9YrNarfcrvcrKQAAIfkEAAoAqwAsYwAFABAAZACg////AAAAAieEj6nL7Q+jnLTai7PevPsPhuJIluaJpurKtu4Lx/JM1/aN5/rOIwUAIfkEAAoAqwAsWAAFAAsAZACg////AAAAAiCEj6nL7Q+jnLTai7PevPsPhuJIluaJpurKtu4Lx/JVAAAh+QQACgCrACxSAAUABgBkAKD///8AAAACF4SPqcvtD6OctNqLs968+w+G4kiWZlIAACH5BAAKAKsALFAABQACAGQAoP///wAAAAIMhI+py+0Po5y02usKACH5BAAKAKsALFAABQABAGQAoPDmjAAAAAIIhI+py+0PYysAIfkEAAoAqwAsUQAFAAQAZACg8OaMAAAAAhGEj6nL7Q+jnLTai7PevPuvFQAh+QQACgCrACxVAAUACQBkAKDw5owAAAACHISPqcvtD6OctNqLs968+w+G4kiW5omm6sq2awEAIfkEAFAAqwAsXgAFAAoAZACg8OaMAAAAAh6Ej6nL7Q+jnLTai7PevPsPhuJIluaJpurKtu4LOwUAOw==)

### 6.2、代码的控面板当中来调整贝塞尔曲线

我们可以在浏览器中右击审查元素，在代码的控面板当中来调整贝塞尔曲线，来调节运动速度

> 如下

```

<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: red;
    /* 过渡动画 */
    transition: width 1s linear;
  }
  .box:hover {
    width: 200px;
  }
</style>
<body>
  <div class="box"></div>
</body>

```

![image-20220726145203445](https://www.arryblog.com/assets/img/image-20220726145203445.86f5d6a4.png)

## 二、transition 过渡动画实战案例

项目中常用的动画实践案例

### 1、鼠标滑动，背景从透明到半透明效果

![GIF-2022-7-26-16-19-50](https://www.arryblog.com/assets/img/GIF-2022-7-26-16-19-50.593a6869.gif)

点击查看完整源代码

```

<style>
  .box {
    width: 200px;
    height: 200px;
    position: relative;
  }
  .box img {
    width: 200px;
    height: 200px;
    /* 图片填充方式:图片等宽高覆盖内容框 */
    object-fit: cover;
  }
  .box::after {
    /* 绝对定位 */
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    content: "";
    /* 背景颜色完全透明 刚开始看不到*/
    background-color: rgba(0, 0, 0, 0);
    /* 过渡动画*/
    transition: background-color 1s;
  }
  .box:hover::after {
    /* 背景颜色不透明度为0.5 */
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
<body>
  <div class="box">
    <img src="./images/pic1.jpg" alt="" />
  </div>
</body>

```

### 2、鼠标滑动，文字从下往上滑动效果

![GIF-2022-7-26-16-18-26](https://www.arryblog.com/assets/img/GIF-2022-7-26-16-18-26.acb7884b.gif)

点击查看完整源代码

```

<style>
  body,
  p {
    margin: 0;
  }
  .box {
    width: 200px;
    height: 200px;
    position: relative;
    /* 超出部分隐藏 */
    overflow: hidden;
  }
  .box img {
    width: 200px;
    height: 200px;
    /* 图片等宽高填充内容区 */
    object-fit: cover;
  }
  .box p {
    /* 绝对定位 */
    position: absolute;
    left: 0px;
    /* 最开始定位到父元素外边看不到 */
    bottom: -35px;
    width: 100%;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    /* 过渡动画 */
    transition: bottom 0.5s;
  }
  .box:hover p {
    bottom: 0px;
  }
</style>
<body>
  <div class="box">
    <img src="./images/pic1.jpg" alt="" />
    <p>上帝散落的光</p>
  </div>
</body>

```

### 3、商城右侧通栏导航

在 [iconfont 官网(opens new window)](<https://www.iconfont.cn/>)搜索 **会话、头像、购物车、优惠券** ` 找到下图中需要用到的小图标。

![GIF-2022-7-26-17-11-02](https://www.arryblog.com/assets/img/GIF-2022-7-26-17-11-02.7ed82c24.gif)

点击查看完整源代码

```

<!-- 引用阿里矢量图标 -->
<link rel="stylesheet" href="./iconfont/iconfont.css" />
<style>
  /* 清除默认样式 */
  body {
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  /* 侧边栏固定定位在浏览器最右边 */
  .siderbar {
    width: 5px;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #666;
  }
  .siderbar ul {
    width: 50px;
    height: 208px;
    /* background-color: red; */
    /* 绝对定位在侧边栏垂直居中位置 */
    position: absolute;
    left: -50px;
    top: 50%;
    margin-top: -104px;
  }
  .siderbar ul li {
    width: 50px;
    height: 50px;
    margin: 2px 0px;
    background-color: #666;
    /* 相对定位 */
    position: relative;
  }
  .siderbar ul li i {
    display: block;
    width: 50px;
    height: 50px;
    background-color: #666;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 24px;
    text-align: center;
    line-height: 50px;
    color: #fff;
  }
  .siderbar ul li span {
    display: block;
    /* 最开始隐藏不见，即width为0，同时overflow:hidden */
    width: 0px;
    overflow: hidden;
    height: 50px;
    /* 相对li绝对定位，元素的最右边与li的最左边对齐 */
    position: absolute;
    top: 0;
    right: 50px;
    background-color: #666;
    color: #fff;
    /* 文字首行缩进20px */
    text-indent: 20px;
    line-height: 50px;
    /* 宽度过渡动画效果 */
    transition: width 1s;
  }
  .siderbar ul li:hover i {
    background-color: red;
  }
  /* 鼠标滑动到li ，改变span的宽和背景颜色*/
  .siderbar ul li:hover span {
    width: 120px;
    background-color: red;
  }
</style>
<body>
  <div class="siderbar">
    <ul>
      <li>
        <i class="iconfont icon-xiaoxixinxihuihuahuida"></i>
        <span>联系客服</span>
      </li>
      <li>
        <i class="iconfont icon-jurassic_user"></i>
        <span>京东会员</span>
      </li>
      <li>
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
      </li>
      <li>
        <i class="iconfont icon-wodeyouhuiquan"></i>
        <span>优惠券</span>
      </li>
    </ul>
  </div>
</body>

```

### 4、抛物线运动

![GIF2025-1-318-13-19](data:image/gif; base64, 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)

```

.add {
  width: 20px;
  height: 20px;
  background-color: tomato;
  border-radius: 50%;
  /* 固定定位 */
  position: fixed;
  left: 800px;
  bottom: 600px;
}
.parabola {
  transition-duration: 1s; /* 过渡时间 */
  transition-property: left, bottom; /* 过渡属性 */
  transition-timing-function: ease, cubic-bezier(0.25, -0.55, 0.83, 0.13);
}
.end-state {
  /* 修改 left 与 bottom 的值 */
  left: 100px;
  bottom: 60px;
}

<div class="add parabola"></div>
<script>
  let add = document.querySelector(".add"); /* 获取添加按扭 */
  add.onclick = function () {
    /* 给按扭加上 end-state class */
    this.classList.add("end-state");
  };
</script>

```

![image-20250103180932020](https://www.arryblog.com/assets/img/image-20250103180932020.92cafe4e.png)

### 5、复杂的过渡动画

![GIF2025-6-1018-44-19](https://www.arryblog.com/assets/img/GIF2025-6-1018-44-19.b900ed1e.gif)

```

<style>
  a {
    text-decoration: none;
    text-align: center;
    color: #000;
  }
  a.more-button {
    display: block;
    width: 120px;
    height: 50px;
    line-height: 50px;
    border: 1px solid #666;
    background-color: #ddd;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    margin-top: 100px;
    z-index: 0;
  }

  /* 蓝色 圆形 */
  a.more-button::after {
    content: "";
    display: block;
    width: 120%;
    height: 300%;
    background-color: skyblue;
    border-radius: 50%;
    top: 50px;
    left: -10%;
    position: absolute;
    /* transition: top 1s; */
    z-index: -2;
  }

  /* 蓝色方块 */
  a.more-button::before {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background-color: skyblue;
    position: absolute;
    left: 0;
    top: -102%;
    z-index: -1;
    /* 离开时，慢慢离开*/
    transition: top 0.5s ease 0s;
  }

  /* 蓝色方块 一开始延迟 0.5s 然后立刻调整 top值为 0*/
  a.more-button:hover::before {
    top: 0;
    transition: top 0s ease 0.5s;
  }
  /* 圆形方块，鼠标移入后，慢慢改变top值 */
  a.more-button:hover::after {
    transition: top 0.5s;
    top: -100%;
  }
</style>
<body>
  <a href="" class="more-button"> 查看更多 </a>
</body>

```

## 三、animation 自定义动画

使用自定义动画，需要分两步：

  + 第一步是：定义动画
  + 第二步是：调用动画

### 1、动画的定义

使用 @keyframes 关键帧来定义动画

  + 创建动画的原理是，将一套 CSS 样式逐渐变化为另一套样式。
  + 在动画过程中，您可以多次更改 CSS 样式的设定。
  + 动画执行各阶段时间，可以通过百分比来规定改变发生的时间，或者通过关键词 "from" 和 "to"。
  + from 和 to 等价于 0% 和 100%。from 和 0% 是动画的开始时间，to 和 100% 动画的结束时间。

```

@keyframes  动画名 {
    /* 起始状态 */
    from {  样式   }
    /* 结束状态 */
    to {  样式  }
}

/* 或 */

@keyframes  动画名 {
    /* 起始状态 */
	0% {  样式   }
	/* 结束状态 */
	100% {  样式  }
}

```

**定义一个动画**

```

/* 
    @keyframes 表示定义动画
    changeBox:动画的名字
    0% ：表示起始状态
    100% :表示结束状态 
*/

@keyframes changeBox {
  0% {
    width: 200px;
    height: 200px;
  }
  100% {
    width: 400px;
    height: 400px;
  }
}

```

### 2、调用动画

动画定义好之后，我们需要使用 animation 属性来调用动画

    
    
    /* 简单的 animation 动画 */
    animation: 动画名 动画完成时间 [时间函数] [延迟时间];

​    
​    

    /*
    	changeBox 动画的名字
    	1s 总时长
    	linear 缓动效果
    	0s 延迟时间
    */
    animation: changeBox 1s linear 0s;

**案例**

![GIF-2022-7-30-22-47-57](https://www.arryblog.com/assets/img/GIF-2022-7-30-22-47-57.90edfe6f.gif)

点击查看完整源代码

```

<style>
  .box {
    width: 50px;
    height: 50px;
    background-color: red;
    /* 调用动画：动画名 动画执行时间; */
    animation: changeBox 5s;
  }
  /* 定义动画 动画名为 changeBox */
  @keyframes changeBox {
    /*
     0% {
      width: 50px;
      height: 50px;
    }

    100% {
      width: 200px;
      height: 200px;
    } 
    */

    /* 起始状态 */
    from {
      width: 50px;
      height: 50px;
    }
    /* 结束状态 */
    to {
      width: 200px;
      height: 200px;
    }
  }
</style>
<body>
  <div class="box"></div>
</body>

```

### 3、多关键帧动画

用百分比%，分别表示动画执行的时间节点

```

<style>
.box {
    width: 100px;
    height: 100px;
    background-color: red;
}
/* 鼠标滑上后，再加上animation 动画 */
.box:hover {
    animation: changeBox 3s linear;
}

/* 前 1.5秒杀只改变宽，后1.5秒只改变高 */
@keyframes changeBox {
    0% {
        width: 100px;
        height: 100px;
    }
    50% {
        /* 先改变宽，高不变 这里的高一定不能省 */
        width: 200px;
        height: 100px;
    }
    100% {
        /* 再保持宽不变，改变高，这里的宽一定不能省  */
        width: 200px;
        height: 200px;
    }
}
</style>

<div class="box"></div>

```

![GIF2025-1-319-31-13](data:image/gif; base64, R0lGODlhBAHQAEQAACH5BAAeAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAABAHQAKD/////AAAC/4SPqcvtD6OctNqLs968+w+G4kiW5omm6noE7gvH8kzX9o3nNcv3qQ4MCofEgO+IBBWXzKYuCY1enNQqVYrNOqzcblALDgO85PJMjJaa1+a0G8mOd990nvx+retR+P5yD1jiNygUaBhCmJhzyNih+LjTKIkBWRkziVlhuWmU6QnBafk52hBaSYqaYAqZ2jq2quiaChsrS0qbaHuLO6g7ytvr6wnsJzxMjGeciZysPMl85/wMHSctSV1tzYjNpr3N3eZtCB4uDkheZh6ITqZ+zj7nrgcfL09Hz2Vfh2+lf8+fx18agAEFiiHoxOBAhEwUomHY0GEYiH8kgqFYxOJFjP9DNGrh2NEjFpCFRKohCcTkSZSLVEJh+cRlEpgtZR6hicMmHJw2dN7kGcmnHaA0hPYgWtQoC6RnlK5gKsPpU6gwpKqgWtUqH6wutG7l6vUE165hBY0taxYs2hFjO61FdPYtXLVyP7StqyQuXkd6926465cD4MAaBhOm1PewBcOKNSVuPIExZAmSJ4N6bPlB5cylMHNmsPmzgtCiEZAubeA0atWlWYt2/Rk2Z9mZaVu2PRk3ZN2NeSv2fRg4YeGoixs/jjy58uXMmzt/Dj269OnUq1u/jj279u3cu3v/Dj68+PHky5s/jz69+vXs27t/Dz++/Pn069u/jz+//v38+/tZ/w9ggAIOSGCBBh6IYIIKLshggw4+CGGEEk5IYYUWXohhhhpuyGGHHn4IYogijkhiiSaeiGKKKq7IYosuvghjjDLOSGONNt6IY4467shjjz7+CGSQQg6JYQEAIfkEAQoAAAAsxAAiAAwAEwCkAP8AQkNNGBgkyMnMCwsYS0xXsrO4LCw48PDz9PT34eHj1tbYKCg05eXnMzM/+Pn76OjqYWJswsLJzs7SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABVOgMABkaQrBaJ5AupYC6b6xrLLlDK86UJu6X+kxE5YQLmMJklKWFIEfQhaoRkkJgqG1JcUQhMEBoBh7s6OCBFDoBsKkAQOwML8KC4DjRWowIhMkIQAh+QQBCgAAACxLACIAhQAkAKQA/wD4+ftCAQsYAAzIAQRLAQwLAA0zAAwoAAyyAQbW1tjh4ePCwsnsAADw8PPo6OrOAARhAQuztLwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF3yAgjmRpnmiqrmzrvkAQwHRt3/gtz3nv/8DUTBYsGo8vHhHJbCJ5MahzSrVJl9WsViWNbr9gUdcbLlPHZLP6iN6t30F0VA6vu+hYuz45Uu7oe4ElfkOAgod9c4WIjEJuRHmNkm5eSwMEkpkkkCIDApiamX+dAZ+hp6SloKiZAzumrJKur6uxh7O0toi4ubqBvL2+dsAyDrDCcMQyD8fIasoyCwLOb8QFAtjT1M87BhIBBQnbyTIGBAcBCwjj1QHmAAUM4OLsZgLvAAQIAQoH9XYFFATw9w9OAwQRIBQMEwIAIfkEAQoAAAAsKwADAEMAZACkAP8A/wAA+Pn7QgELGAAMyAEESwEMCwANKAAMMwAM4eHj1tbYsgEG8PDzwsLJ7AAA6OjqzgAEYQELs7S8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABf8gII5kaZ5oqpZB6wZrLM/q69J4Htut7v8jHgxIxAmLSNkxyUQtm9AgL0oFPKvMKxap3RK73h84rBuTjdPzN60Ws9vlNxxtm/vM9hQ+f9rzWXJ/NYGCToSFJn6IioWMgo5/kHySeZR2lnOYcJptnGqeZ6BkomGkXqZbqFiqVaxUrlGwULJNsD1JtrdFubpAvL13PAQFr3W+wgPEs4dKwgLJy8wrQgQCz8q4QkM51NbXWdrbNN3e0Fzh4s021d7fu+jp087t7sfodC/s9OZu9+Pz9Brwi2OJHD0BEAbiM8YN4EEFA/rBYPhv3UEDAzJGDDaE4gyDByYIMMAg1o2GFgV2HCiQQIACBCaBqcunkpgBByNLIrLCY8BKEQUQCFiQYCdPjwAMLBBQdGeXBwgkRDBKCxxSoySqZruKVYTWc1y7fn0XFuvYNWWpSlOb1ulat20XvZUbt9Fcu3Uf3dWbN9Jev30n/RUcuNJgw4UvHVacONNixzZCAAAh+QQACgCrACxuAAMABgBkAKD/AAAAAAACF4SPqcvtD6OctNqLs968+w+G4kiWZlIAACH5BAAKAKsALHQAAwAIAGQAoP8AAAAAAAIahI+py+0Po5y02ouz3rz7D4biSJbmiabqihUAIfkEAAoAqwAsfAADAAgAZACg/wAAAAAAAhqEj6nL7Q+jnLTai7PevPsPhuJIluaJpuqKFQAh+QQACgCrACyEAAMABwBkAKD/AAAAAAACGISPqcvtD6OctNqLs968+w+G4kiW5omaBQAh+QQACgCrACyLAAMABwBkAKD/AAAAAAACGISPqcvtD6OctNqLs968+w+G4kiW5omaBQAh+QQACgCrACySAAMABwBkAKD/AAAAAAACGISPqcvtD6OctNqLs968+w+G4kiW5omaBQAh+QQACgCrACyZAAMACABkAKD/AAAAAAACGoSPqcvtD6OctNqLs968+w+G4kiW5omm6ooVACH5BAAKAKsALKEAAwAGAGQAoP8AAAAAAAIXhI+py+0Po5y02ouz3rz7D4biSJZmUgAAIfkEAAoAqwAspwADAAgAZACg/wAAAAAAAhqEj6nL7Q+jnLTai7PevPsPhuJIluaJpuqKFQAh+QQACgCrACyvAAMABwBkAKD/AAAAAAACGISPqcvtD6OctNqLs968+w+G4kiW5omaBQAh+QQACgCrACy2AAMACABkAKD/AAAAAAACGoSPqcvtD6OctNqLs968+w+G4kiW5omm6ooVACH5BAAKAKsALL4AAwAGAGQAoP8AAAAAAAIXhI+py+0Po5y02ouz3rz7D4biSJZmUgAAIfkEAQoAAAAsAwADAMgAZQCgAP8A/wAAAv+Ej6nL7Q+jnLTae4LeAfsPhuJIJtxWpurKts6pufJM1xHc2frOq3gPDAonv6HxaCwil8yasgmNlp7SqtVCvWq3jCz3y/WCx1Ux+cw0o9dDNfvNc8PnNDn9zrLj9yQ9///hBzhYIUh4CGGIuLigyPho4AjJKDmJWGlJiJkJuMnJ5/mJFypKR1oKd4rKprqK1upKBhsLNksbBnPLaat7xdtblgsM+TsMVWycJpx8ucys6fzcGS0NSl09eo1tqr2d2u3NCh7+Ok4ua35em66Oe9LO/Q7/LT8vXm9fjp+Pvs+/7u+fOw4CzyAr6IMdwiUHF/ZR6DAJxIhCGlIEYfGih4xjGi9w7FhoIkgdH0dKKGkykciUM1CybODyZaOVMvPQrJkwIM44N3c+1OnTRsygQ30W3XkUZ9KaS2U2ffmUZdSUU01WHXkVZNaOWzV2vfiVYtiIOMqaPYs2rdq1bNu6fQs37tsCACH5BAAKAKsALAMAaADIAAgAoP8AAAAAAAInhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6ziMFACH5BAAKAKsALAMAcADIAAcAoP8AAAAAAAIkhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jWsFACH5BAAKAKsALAMAdwDIAAcAoP8AAAAAAAIkhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jWsFACH5BAAKAKsALAMAfgDIAAcAoP8AAAAAAAIkhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jWsFACH5BAAKAKsALAMAhQDIAAgAoP8AAAAAAAInhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6ziMFACH5BAAKAKsALAMAjQDIAAgAoP8AAAAAAAInhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6ziMFACH5BAAKAKsALAMAlQDIAAYAoP8AAAAAAAIhhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTHMFACH5BAAKAKsALAMAmwDIAAgAoP8AAAAAAAInhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6ziMFACH5BAAKAKsALAMAowDIAAcAoP8AAAAAAAIkhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jWsFACH5BAAKAKsALAMAqgDIAAcAoP8AAAAAAAIkhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jWsFACH5BAAKAKsALAMAsQDIAAcAoP8AAAAAAAIkhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jWsFACH5BAAKAKsALAMAuADIAAgAoP8AAAAAAAInhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6ziMFACH5BAAKAKsALAMAwADIAAcAoP8AAAAAAAIkhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jWsFACH5BAEoAAEALAMAAwDIAMQAoP///wD/AAL/jI+py+0PYwO02ouz3rz7v0niSJZmAKbqyrbACcey5Nb2Dc76ruP+7+MJhyOg8agiKpcLpPOZYUqZ0Cp0ih1at8est8cN475kmPhcK6tJ6PZqDY+455+4fULPa+78hP5/0SeIAlg42FdoeHiXCLjI2Kj3aBcpOQlXmXeJmTm3udbp+VkW6jZKWop2SpaquurVevYKGxs2m1VrezuVy7XL22v1KxUsPLxUXHWMnPy0rNTs/KwVjTRNXW10LZTdtb3Trf0NFh40PlP+c46ePrYe0+7+fhJ/M29Wn3Zvkq+/z9avxb8SAQUOLFLwzUERCRUulNMwxUMaEXNMhFDR4kUH/xnrbOTYscNHkCFDjGRQksNJlCn3rFTQ0uVLBDGjzKRZM9DNAzl17iTUk8JPA0ErDAUa9GhRoUOXvmi6VGlUqEWlVqWaFGtPq1l/OuW6VWtOsGPF1iR71mxMtGvVtmT71m1KuHPllqR7125IvHv1duT7129GwIMFVyR82HBExIsVN2T82LHTyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz7+xH/D2CAAg5IYIEGHohggr0VAAAh+QQBCgAAACwrADcAGwAiAKQA/wD/AAD4+ftCAQsYAAzIAQRLAQwzAAwLAA0oAAzh4ePW1tiyAQbw8PPCwsnsAADo6OrOAARhAQuztLwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFmGAQAGRpnqgpjmnbrqwrk3A8v/Xt1qKe8j2fCmjzEYPCI1KnXM6aRRk0SRSWjlbaCpAzEQrSYLdEGICNW6/AjHYSBOtzlgyPz+l19v1dt8/5fXpWgIFyPoR1DYI6iHUQizONdQoDQo0GA5mVh3UIE2sMf3AIBQcCCgeipAAGDgIGoVYDqwAFCQILqXclBgsCursADwkSESQhACH5BAEKAAAALDoARgCKAEMApAD/AP8AAEJDTRgYJMjJzAsLGEtMVywsOLKzuPDw8+Hh4/T099bW2CgoNOXl5zMzP/j5++jo6mFibMLCyc7O0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX/YBAAZGmeaKqubOu+cCyLo2zfeK7vAF3zwKBwmPL9iMik0mU8Lp9QZNMZrVpvU+p1yy1mu+BwKSsSm7fk8nn9TKvZ8KFbG69j3fa8jqzv5/h+gTE+PYSChyw0JEaIjS+GjpFeb5KVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw3kDBMRAAwLHyDoDAMvNOc/QzNIy1NXX2CbR2y/ZJN7fLOHi1uQp5gAQ4+kn6wAJ7u8k8QAR9O/3AAoC9SayJRAnoOA/gPZILCiAAFpDhAHlFSBwoF9FiCUGLDxmYAIAAw8xCphIgkADAAwuEGJEYYABgAcrUzhoIIECiRAAIfkEAVoAAAAsuAB2AAwAEwCgAP8A////AihMgKl2umBcalE2eOfK0FXEYZpXhdhhnuk5MgwYfegr0zNM3ZKYukgBADs=)

### 4、多关键帧动画 - 注意事项一

如果没有指定 0% 和 100% 时间段，则元素的初始状态为 0% 和 100% 的状态

```

<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: red;
  }
  .box:hover {
    animation: changeBox 3s linear;
  }
  @keyframes changeBox {
    50% {
      width: 200px;
      height: 200px;
    }
  }
</style>

<div class="box"></div>

```

![GIF2025-1-320-47-20](https://www.arryblog.com/assets/img/GIF2025-1-320-47-20.a03ea6ef.gif)

上面案例中定义的 changeBox 动画，相当于以下 changeBox 动画的简写

```

@keyframes changeBox {
  0% {
    width: 100px;
    height: 100px;
  }
  50% {
    width: 200px;
    height: 200px;
  }
  100% {
    width: 100px;
    height: 100px;
  }
}

```

### 5、多关键帧动画 - 注意事项二

如果在前面的时间段中指定了某属性（如：width） 的值，在后面的时间段中没有指定该 width 属性，则动画结束时间段中，该属性 width 的值为元素的初始值。

```

<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: red;
  }
  .box:hover {
    animation: changeBox 3s linear;
  }
  @keyframes changeBox {
    50% {
      width: 200px;
      height: 200px;
    }
    100% {
      height: 200px;
      /* 这里没有指定 width 的属性值，则 width: 100px;  */
    }
  }
</style>

<div class="box"></div>

```

![GIF2025-1-320-40-03](https://www.arryblog.com/assets/img/GIF2025-1-320-40-03.5c67dd46.gif)

### 6、多关键帧动画案例

![GIF-2022-7-26-17-38-18](data:image/gif; base64, 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)

```

<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: aqua;
    position: absolute;
    /* 
        调用动画
        mymove 动画名
        4s 动画执行时间
        ease 动画速度 
        0s 动画延迟时间
    */
    animation: mymove 4s ease 0s;
  }

  @keyframes mymove {
    /* 起始状态 0s */
    0% {
      top: 0px;
      left: 0px;
      background: red;
    }
    /* 1秒后 */
    25% {
      top: 0px;
      left: 100px;
      background: blue;
    }
    /* 2秒后 */
    50% {
      top: 100px;
      left: 100px;
      background: yellow;
    }
    /* 3秒后 */
    75% {
      top: 100px;
      left: 0px;
      background: green;
    }
    /* 4秒 结束状态 */
    100% {
      top: 0px;
      left: 0px;
      background: red;
    }
  }
</style>
<body>
  <div class="box"></div>
</body>

```

### 7、animation 完整写法

animation 这个属性，相当于是下面表格中所有属性的复合写法。

**语法**

    
    
    animation: 动画名 动画完成时间 时间函数 延迟时间 播放次数 是否返向播放
      动画开始或完成时的状态 动画是否正在运行或已暂停;

属性 | 说明 | 属性值  
---|---|---  
animation-name | 指定应用的一系列动画名，即@keyframes 定义的动画名 | none 表示不调用动画  
动画名：由大小写敏感的字母 a-z、数字 0-9、下划线 (_) 和/或横线 (-) 组成。不能以数字开头  
animation-duration | 指定动画周期时长，需要多少秒或毫秒完成 | 默认值为 0s，表示无动画。  
时长单位为秒（s)或者毫秒（ms）  
如: 1s ，2s  
animation-timing-function | 设置动画将如何完成一个周期 | linear（直线匀速）   
ease（慢-快-慢）  
ease-in（慢-快）  
ease-out（快-慢）   
ease-in-out（慢-快-慢）  
贝塞尔函数表示 cubic-bezier(0.84, -0.21, 1, -0.15)   
steps(n, start|end)  
animation-delay | 设置动画在启动前的延迟间隔时间 | 默认值为 0s, 表示立即执行  
时长单位为秒（s)或者毫秒（ms）  
如: 1s ，2s  
animation-iteration-count | 定义动画的播放次数。 | n：一个数字，动画播放次数  
infinite：无限次播放  
animation-direction | 指定是否应该轮流反向播放动画。  
| `normal` ： 默认值。动画正常播放  
`reverse` : 动画反向播放，动画按步后退的效果  
`alternate` ： 动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。  
`alternate-reverse` : 动画在奇数次（1、3、5...）反向播放，在偶数次（2、4、6...）正向播放。  
animation-fill-mode | 设置 CSS 动画在执行之前和之后如何将样式应用于其目标元素 | `none` : 默认值。动画在动画执行之前和之后不会应用任何样式到目标元素。  
`forwards` : 在动画结束后，动画将停止在最后结束的状态  
`backwards` : 动画正式开始之前，元素就会呈现出动画第一帧的样式。  
动画延迟执行的情况下，能看到动画开始前，元素应用的是动画第一帧的样式  
`both` : 动画遵循 `forwards` 和 `backwards` 的规则。也就是说，动画会在两个方向上扩展动画属性  
animation-play-state | 指定动画是否正在运行或已暂停。 | `paused` 暂停动画  
`running` 正在运行动画  

### 7.1、animation-iteration-count 动画播放次数

animation-iteration-count 属性定义动画的播放次数，属性值可以是以下两种

  + n：一个数字，动画播放次数
  + infinite：无限次播放

```

<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: skyblue;
    position: absolute;
    left: 0;
    top: 0;
    /* 动画名 执行时间 匀速 延迟0s 执行2次*/
    /* animation: mymove 2s linear 0s 2; */
    /* infinite 无限循环 */
    animation: mymove 2s linear 0s infinite;
  }
  @keyframes mymove {
    0% {
      top: 0;
      left: 0;
    }
    50% {
      top: 0px;
      left: 200px;
    }
    100% {
      top: 200px;
      left: 200px;
    }
  }
</style>
<body>
  <div class="box"></div>
</body>

```

渲染效果：

![GIF-2022-7-30-23-11-33](https://www.arryblog.com/assets/img/GIF-2022-7-30-23-11-33.eb2c543a.gif)

### 7.2、animation-direction 指定是否应该轮流反向播放动画

animation-direction 属性用于指定是否应该轮流反向播放动画，属性值可以是以下几种

  + `normal`： 默认值。动画正常播放
  + `reverse` : 动画反向播放，动画按步后退的效果
  + `alternate`： 动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。
  + `alternate-reverse` : 动画在奇数次（1、3、5...）反向播放，在偶数次（2、4、6...）正向播放。

```

<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: skyblue;
    /* 绝对定位 */
    position: absolute;
    left: 0;
    top: 0;
    /* 动画名 执行时间 匀速 延迟0s  播放次数2次  奇数次正向播，偶数反向播 */
    animation: mymove 2s linear 0s 2 alternate;
  }
  @keyframes mymove {
    /* 0s 开始 */
    0% {
      top: 0;
      left: 0;
    }
    /* 1s 后*/
    50% {
      top: 0px;
      left: 200px;
    }
    /* 2s 后*/
    100% {
      top: 200px;
      left: 200px;
    }
  }
</style>
<body>
  <div class="box"></div>
</body>

```

reverse 反向播放 | alternate 先正向后反向 | alternate-reverse 先反向后正向  
---|---|---  

![GIF-2022-7-30-23-21-36](https://www.arryblog.com/assets/img/GIF-2022-7-30-23-21-36.28801fe4.gif) | ![GIF-2022-7-30-23-26-08](https://www.arryblog.com/assets/img/GIF-2022-7-30-23-26-08.8fe96248.gif) | ![GIF-2022-7-30-23-24-41](https://www.arryblog.com/assets/img/GIF-2022-7-30-23-24-41.222a1141.gif)

  

### 7.3、animation-fill-mode 属性

CSS 属性 **`animation-fill-mode`** 设置 CSS 动画在执行之前和之后如何将样式应用于其目标

**animation-fill-mode 属性值**

属性值 | 描述  
---|---  
none | 默认值。动画在动画执行之前和之后不会应用任何样式到目标元素。  
forwards | 在动画结束后，动画将停止在最后一帧（动画结束）的状态  
backwards | 动画正式开始之前，元素就会呈现出动画第一帧的样式。  
动画延迟执行的情况下，能看到动画开始前，元素应用的是动画第一帧的样式  
both | 动画遵循 `forwards` 和 `backwards` 的规则。也就是说，动画会在两个方向上扩展动画属性。动画开始应用第一帧  

```
  

<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: skyblue;
    position: absolute;
    left: 0;
    top: 0;
    /* 动画名 执行时间 匀速 延迟0s */
    /*  
        animation: mymove 2s linear 2s 1 none;
        animation: mymove 2s linear 2s 1 forwards;
        animation: mymove 2s linear 2s 1 backwards; */
    animation: mymove 2s linear 2s 1 both;
  }
  @keyframes mymove {
    0% {
      top: 100px;
      left: 0;
      color: yellow;
    }
    50% {
      top: 0px;
      left: 200px;
    }
    100% {
      top: 200px;
      left: 200px;
    }
  }
</style>
<body>
  <div class="box">我是大美人</div>
</body>

```

none | forwards  
---|---  

![GIF2025-1-321-40-53](https://www.arryblog.com/assets/img/GIF2025-1-321-40-53.6f1a00ae.gif) | ![GIF2025-1-321-44-46](https://www.arryblog.com/assets/img/GIF2025-1-321-44-46.eed21418.gif)

  
刚进到页面，元素在初始位置显示  
2s 后，移到 top:100px 的位置，然后开始动画  
动画结束后又回到初始位置 | 刚进到页面，元素在初始位置显示  
2s 后，移到 top:100px 的位置，然后开始动画  
动画结束后，停在结束后位置  
backwards | both  
---|---  

![GIF2025-1-321-47-27](https://www.arryblog.com/assets/img/GIF2025-1-321-47-27.f7857723.gif) | ![GIF2025-1-321-50-21](https://www.arryblog.com/assets/img/GIF2025-1-321-50-21.81318ab7.gif)

  
刚进到页面，元素停在 top:100px 的位置  
2s 后，开始动画  
动画结束后又回到初始位置 | 刚进到页面，元素停在 top:100px 的位置  
2s 后，开始动画  
动画结束后，停在结束后位置  

### 7.4、animation-play-state 指定动画是否正在运行或已暂停

属性值 | 说明  
---|---  
paused | 暂停动画  
running | 正在运行动画  

注：

`animation-play-state` 通常与 `:hover` 配合来使用，当鼠标滑动上去时，可以暂停或开启动画

```

<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: skyblue;
    position: absolute;
    left: 0;
    top: 0;
    /* 动画名 执行时间 匀速 延迟0s */
    animation: mymove 5s linear 0s 1;
  }
  @keyframes mymove {
    0% {
      top: 0;
      left: 0;
      color: yellow;
    }
    50% {
      top: 0px;
      left: 200px;
    }
    100% {
      top: 200px;
      left: 200px;
    }
  }
  /* 鼠标滑动上去,暂停动画执行 */
  .box:hover {
    animation-play-state: paused;
  }
</style>
<body>
  <div class="box"></div>
</body>

```

渲染效果：

![GIF-2022-7-30-23-37-25](https://www.arryblog.com/assets/img/GIF-2022-7-30-23-37-25.aace1afa.gif)

### 8、animation 指定多组动画

`animation` 属性用来指定一组或多组动画，每组之间用 逗号 `,` 相隔。

```

animation: move 2s, bgcolor 2s 2s forwards;

<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: skyblue;
    /* 
        动画 move  执行时间2s  延迟1s执行,执行后动画停止在结束的状态
        动画 bgcolor 执行时间2s  延迟3s执行,执行后动画停止在结束的状态
        */
    animation: move 2s 1s forwards, changeBox 2s 3s forwards;
    position: absolute;
    top: 10px;
    left: 10px;
  }

  /* 动画1 */
  @keyframes move {
    50% {
      top: 10px;
      left: 100px;
    }
    100% {
      left: 100px;
      top: 100px;
    }
  }
  /* 动画2*/
  @keyframes changeBox {
    0% {
      background-color: khaki;
    }
    100% {
      width: 200px;
      height: 200px;
      background-color: red;
    }
  }
</style>
<body>
  <div class="box"></div>
</body>

```

渲染效果：

![GIF2025-1-322-10-27](data:image/gif; base64, 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)

### 9、实战应用：抖动消失动画

![GIF2025-1-322-42-52](data:image/gif; base64, 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)

左右抖动动画原理：

  + 让一个元素先向左移动 5px 距离，再向右移动 5px 距离
  + 再向左多动 3px 距离，再向右移动 3px 距离
  + 再向左移动 2px 距离，再回到原点

```

<style>
  body {
    overflow: hidden;
  }
  .box {
    width: 200px;
    height: 250px;
    background-color: skyblue;
    margin: 50px auto;
    position: relative;
    left: 0;
    top: 0;
  }
  .animation-bounce {
    /* animation: bounce 1s ease-out forwards; */
    animation: bounce 1s ease-out;
  }

  /*  定义抖动动画 */
  @keyframes bounce {
    0% {
      left: -5px;
    }
    15% {
      left: 5px;
    }
    30% {
      left: -3px;
    }
    45% {
      left: 3px;
    }
    60% {
      left: -2px;
    }
    75% {
      left: 0;
      top: 0;
      opacity: 1;
    }
    100% {
      left: 0;
      top: 2000px;
      opacity: 0;
    }
  }
</style>

<div class="box"></div>

<script>
  var box = document.querySelector(".box"); // 获取 box元素
  // 给 box 元素绑定点击事件，
  box.onclick = function () {
    // 点击元素后，给当前元素添加  class属性值 animation-bounce
    this.classList.add("animation-bounce");
  };
</script>

```

注：

在实际的开发中，抖动动画的左右移动是通过 `transform:translateX()` 来实现的。

因为我们现在还没有学到，所以暂时用相对定位来实现，目的是了解该动画实现原理。

### 10、steps 帧动画

steps 定义一个动画从开始到结束，**每一个时间段内的步数** ，每个步数之间的间格时间是相等的

**语法**

    
    
    steps(n,start|end)

  + `n` ：指定了动画应该分成 多少步
  + `start`：表示动画在每个步骤的开始时发生变化。这意味着动画的第一步将在动画时间线的开始处立即显示，然后跳转到下一步，依此类推。
  + `end`：表示动画在每个步骤的结束时发生变化。这意味着动画将先完成当前步骤的持续时间，然后在时间线的下一步处突然显示下一步的状态。

**如何区分 start 与 end**

假设动画的时间是 10s，共分 5 步执行

    
    
    steps(5, start);

![image-20250105213707717](https://www.arryblog.com/assets/img/image-20250105213707717.5c79de81.jpg)

    
    
    steps(5, end);

![image-20250105213731831](https://www.arryblog.com/assets/img/image-20250105213731831.a166379d.jpg)

```

<style>
  body {
    margin: 0;
  }
  .box {
    width: 100px;
    height: 100px;
    background-color: skyblue;
    position: absolute;
    top: 0;
    left: 0;
    /* 分五步,第一步在第一帧结束的位置 */
    animation: move 10s steps(5, start);
  }
  @keyframes move {
    0% {
      left: 0;
    }
    100% {
      left: 500px;
    }
  }
  /* 这个是用来做参考的,参考500px的位置在哪里 */
  .box2 {
    width: 500px;
    background-color: red;
    height: 20px;
  }
</style>
<body>
  <div class="box"></div>
  <div class="box2"></div>
</body>

```

steps(5, end) | steps(5, start)  
---|---  

![GIF-2022-7-30-23-51-52](data:image/gif; base64, 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) | ![GIF-2022-7-30-23-50-01](data:image/gif; base64, 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)

  
等待 2 秒后，才执行第一步 | 一上来，就执行了第一步  

### 10.1、steps 的特殊性

`steps` 是设置的 `每一步` 动画的跳跃步数，而不是整个动画的跳跃步数 ，具体看下面这个案例

```

<style>
  body {
    margin: 0;
  }
  .box {
    width: 100px;
    height: 100px;
    background-color: rgb(138, 210, 238, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    /* 分五步,第一步在第一帧结束的位置 */
    animation: move 10s steps(5, start);
  }
  @keyframes move {
    0% {
      left: 0;
    }
    50% {
      left: 100px;
    }
    100% {
      left: 500px;
    }
  }
  /* 这个是用来做参考的,参考500px的位置在哪里 */
  .box2 {
    width: 500px;
    background-color: red;
    height: 20px;
  }
  /* 这个是用来做参考的,参考100px的位置在哪里 */
  .box3 {
    width: 100px;
    background-color: khaki;
    height: 10px;
  }
</style>
<body>
  <div class="box"></div>
  <div class="box2"></div>
  <div class="box3"></div>
</body>

```

![GIF-2022-7-30-23-57-47](data:image/gif; base64, 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)

### 10.2、steps 帧动画实战案例

![GIF-2022-7-26-19-53-12](https://www.arryblog.com/assets/img/GIF-2022-7-26-19-53-12.9a37b77e.gif)

首先需要准备一张如下图所示的图片

  + 图片的 `宽 * 高` = `1472px * 325px`
  + 图片有人物的 8 种不同状态，要求每种状态所占据的宽为 `1472px / 8 = 184 px`
  + 我们定义一个宽为 184px ，高为 325px 的长方形，将图片做为 长方形的背景图。
  + 创建 `steps()` 帧动画，将动画分为 8 步，每一步让背景图在原有的基础上向左移动 `184px` ，最终形成了如上图所示动画效果

![people](https://www.arryblog.com/assets/img/people.b7240742.png)

```

<style type="text/css">
  html,
  body {
    margin: 0;
    padding: 0;
  }
  .box {
    width: 184px;
    height: 325px;
    margin: 50px auto;
    background-image: url("images/people.png");
    background-repeat: no-repeat;
    background-position: 0px 0px;
    /* 创建 帧动画 ，分 8步执行完  重复执行 */
    animation: move 1s steps(8, end) 0s infinite;
  }
  @keyframes move {
    0% {
      /* 动画开始时，图片的位置 */
      background-position: 0px 0px;
    }

    100% {
      /* 动画结束时，图片的位置 */
      background-position: -1472px 0px;
    }
  }
</style>
<body>
  <div class="box"></div>
</body>

```

> 以下图解的是 在 32 秒内完成整上动画

**start**

一上来就执行了一步， 所以第一次进到页面，看到的是第二张，同时最后一步会出现空白

![image-20250611155333973](https://www.arryblog.com/assets/img/image-20250611155333973.e05c05c6.png)

**end**

等待 3 秒后，才显示第一步， 所以第一次进到页面，看到的是第一张图，同时最后一步也不会出现空白。

![image-20250611155757134](https://www.arryblog.com/assets/img/image-20250611155757134.21b3528f.png)

### 11、transition 与 animation 的区别

区别

  + 1、`transition` 是过渡，是样式值的变化的过程，只需要定义开始和结束两种状态值，中间状态会自动补全；`animation` 其实也叫关键帧，通过和 @keyframe 结合可以设置中间每帧的一个状态
  + 2、`transition` 需要通过 hover 或者 JS 事件来配合触发，`animation` 配合 `@keyframe` 可以一进入页面就执行动画，
  + 3、`animation` 可以设置很多的属性，比如循环次数，动画结束的状态等等。`transition` 不能控制循环次数，动画结束的状态等，所以`transition` 动画只能触发一次；

**温馨提示** ： `transition` 与 `animation` 属性都需要添加浏览器兼容性前缀。

```

.element {
  -webkit-transition: all 0.3s ease; /* Safari, Chrome, Opera < 15.4, iOS */
  -moz-transition: all 0.3s ease; /* Firefox < 16 */
  -o-transition: all 0.3s ease; /* Opera < 12.1 */
  transition: all 0.3s ease; /* 标准语法 */
}

```

## 四、animate.css 动画库

  + animate.css 是非常强大的跨平台的预设 css3 动画库
  + 内置了很多典型的 css3 动画，兼容性好使用方便
  + animate.css 官网：<https://animate.style/>[(opens new window)](<https://animate.style/>)

### 1、深入学习 animate.css 动画库官网

[点击网站(opens new window)](<https://animate.style/>) 右侧的导航，就能显示出对应的动画效果，如下图：

> 如果国外网站打不开，可以去 BootCDN 下载，往后看，我在后面提供了 BootCDN 的相关的操作步骤。

![GIF-2022-7-31-0-24-32](https://www.arryblog.com/assets/img/GIF-2022-7-31-0-24-32.54fd76cd.gif)

### 2、下载 animate.css 文件

![image-20220731002748824](data:image/png; base64, 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)

![image-20220731003040959](https://www.arryblog.com/assets/img/image-20220731003040959.df34d2de.png)

![image-20220731003259426](https://www.arryblog.com/assets/img/image-20220731003259426.9ee287d0.png)

### 3、在页面引入 animate.css 文件

```

<!--引用时，要注意引用入的地址 -->
<link rel="stylesheet" href="./css/animate.css" />

```

### 4、选择对应动画效果应用

  + 在网站的右侧选择你需要的效果
  + 需要应用那个样式效果，在需要应用的元素上加 `.animate__animated`和 需要的**效果样式名** 就 ok
  + **效果的样式名** ，在英文官网的样式标题上有个复制的小按扭，点击小按扭复制就可以获得

![image-20211113180401684](https://www.arryblog.com/assets/img/image-20211113180401684.06a9c7cd.png)

```

<!-- 应用  bounce 这个样式效果 -->
<div class="box animate__animated animate__bounce"></div>

```

### 5、BootCDN 上下载 animate.css 文件

BootCDN 官网地址：<https://www.bootcdn.cn/>[(opens new window)](<https://www.bootcdn.cn/>)

![image-20220731000650397](https://www.arryblog.com/assets/img/image-20220731000650397.1dde05c3.png)

![image-20220731000952291](https://www.arryblog.com/assets/img/image-20220731000952291.15dea631.png)

## 五、专项案例训练（作业）

  + 作业参考视频 [30 个 HTML+CSS 实战小案例详解(opens new window)](<https://www.icodingedu.com/goods/show/82?targetId=91&preview=0>)
  + 有任何疑问可以联系添加的助理老师（或博客右侧的晓冉老师）

切记

学习阶段一定要按照以上的流程学习，提前熟悉工具和整个开发步骤，企业真实项目开发就是这样的流程

### 1、CSS3 网站全屏加载动画

![CSS3网站全屏加载动画](https://www.arryblog.com/assets/img/21.ae467f8c.jpg)

点击查看完整版视频讲解
