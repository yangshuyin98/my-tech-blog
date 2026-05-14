---
title: "transform 2D 与 3D 转换"
source: "https://www.arryblog.com/guide/css3/css-2d-3d-transformation.html"
category: "css3"
order: 12
---

# transform 2D 与 3D 转换

深入浅出 transform 属性，2D、3D 转换，项目中的应用场景和最佳实践

## 一、transform 属性

- 在 CSS 中，利用`transform`这个属性实现对元素进行旋转，缩放，倾斜或平移。
- transform 属性的值可以是 `none` 或一个或多个 **css 变换函数**。
- transform 的值不是 none 时，元素会**创建自己的层叠上下文**

### 1、transform 的 2D 变换函数

| 属性值         | 描述                                                         | 实例                             |
| :------------- | :----------------------------------------------------------- | :------------------------------- |
| translate(x,y) | x，y 为长度单位,可以是 px，也可以是百分比%， x 表示元素在 x 轴上的移动量 y 表示元素在 y 轴上的移动量，如果 y 值不写，则默认为 0，例如 translate(10px)表示 translate(10px,0) | transform:translate(100px,200px) |
| translateX(x)  | x 为长度单位，可以是 px，也可以是百分比% 表示元素在平面 x 轴上的位移量 | transform:translateX(300px)      |
| translateY(y)  | y 为长度单位，可以是 px，也可以是百分比% 表示元素在平面 Y 轴上的位移量 | transform:translateY(200px)      |
| rotate(ax)     | ax 代表旋转的角度 正角表示顺时针旋转 负角表示逆时针旋转      | transform:rotate(30deg)          |
| scaleX(x)      | x 数字类型，表示元素在 x 轴上的缩放比                        | transform:scaleX(2)              |
| scaleY(y)      | y 数字类型，表示元素在 y 轴上的缩放比                        | transform:scaleY(2)              |
| scale(x,y)     | x 数字类型，表示元素在 x 轴上的缩放比 y 数字类型，表示元素在 y 轴上的缩放比 当只有 x，没有 y 时，则 y 默认为 x，元素在 x，y 轴上均匀缩放 | transform:scale(2,3)             |
| skew(ax,ay)    | ax 表示一个角度，表示沿着 x 横坐标扭曲元素的角度 ay 表示一个角度，表示沿着 y 纵坐标扭曲元素的角度 | transform:skew(30deg,30deg)      |
| skewX(ax)      | ax 表示一个角度，表示沿着 x 横坐标扭曲元素的角度,形成水平拉伸效果 | transform:skewX(30deg)           |
| skewY(ay)      | ay 表示一个角度，表示沿着 y 纵坐标扭曲元素的角度，形成垂直拉伸效果 | transform:skewY(30deg)           |

### 2、transform 的 3D 转换属性值

| 属性值             | 描述                                                         | 实例                                   |
| :----------------- | :----------------------------------------------------------- | :------------------------------------- |
| translateZ(z)      | x 为 px 长度单位 元素在 3D 空间 z 轴方向上的位移量           | transform:translateZ(200px)            |
| translate3d(x,y,z) | x，y，z 分别为 px 长度单位 x 表示元素在 x 轴坐标上的位移量 y 表示元素在 y 轴坐标上的位移量 z 表示元素在 z 轴坐标上的位移量，**该值不能使用百分比，如果使用会被认为是无效属性** | transform:translate3d(50px,30px ,50px) |
| rotateX(ax)        | 表示元素绕`X`轴旋转一定的角度 ax 表示度数，可以为正，也可以为负 | transform:rotateX(30deg);              |
| rotateY(ay)        | 表示元素绕`Y`轴旋转一定的角度 ay 表示度数，可以为正，也可以为负 | transform:rotateY(30deg)               |
| rotateZ(az)        | 表示元素绕`Z`轴旋转一定的角度 ax 表示度数，可以为正，也可以为负 | transform:rotate(30deg);               |

## 二、2D 转换

在学习 2D 转换之前，我们先来了解下 2D 平面。下图为 2D 平面的坐标图。后期的所有 2D 变换都是在这个 2D 的平面操作。

**注意事项：**

- 元素的左上角坐标为 （0，0）
- （0，0）坐标的右方，为 x 轴的正方向
- （0，0）坐标的下方，为 y 轴的正方向。

![22image-20211111235301316](https://www.arryblog.com/assets/img/22image-20211111235301316.bae4c04e.png)

### 1、translate 位移

css 中通过给 `transform` 添加属性值`translate(x,y)`或`translateX(x)`或`translateY(y)`来实现元素的水平或垂直位移。

| 属性值         | 描述                     | 举例                 |
| :------------- | :----------------------- | :------------------- |
| translate(x,y) | 实现元素水平和垂直位移量 | translate(30px,50px) |
| translateX(x)  | 实现元素水平位移量       | translateX(30px)     |
| translateY(y)  | 实现元素垂直位移量       | translateY(50px)     |

### 2、translate(x,y)

- x 和 y 是长度值，单位可以是 px，也可以是%百分比
- x 表示元素在 x 轴上的位移量，为正表示向右移动，为负表示向左移动
- y 表示元素在 y 轴上的位移量，为正表示向下移动，为负表示向上移动
- 位移和相对定位非常像，位移变形也会 **"老家留坑"**，即会占据原来的位置
- 位移不会对其它元素造成影响，相当于悬浮在其它元素上面，因为位移的元素会创建自己的层叠上下文。

**x，y 为 px 长度单位**

```css
/*
	100px：表示元素水平向右移动100px
	200px: 表示元素垂直向下移动200px
*/
transform: translate(100px, 200px);
<style>
  .box {
    width: 100px;
    height: 100px;
  }
  .box1 {
    background-color: tomato;
    /* 元素水平向右移动50px，向下移动50px */
    transform: translate(50px, 50px);
  }
  .box2 {
    background-color: khaki;
  }
</style>
<body>
  <div class="box box1"></div>
  <div class="box box2"></div>
</body>
```

渲染效果：

![image-20220727192746913](https://www.arryblog.com/assets/img/image-20220727192746913.652b1d6f.png)

### 2.1、位移值为%百分比

位移值单位可以 px ，也可以是%百分比

```css
transform: translate(x%, y%);
```

- x 和 y 为%百分比，这个百分比分别是相对元素自身的 **可视宽** 和 **可视高** 而言。
- 在标准盒子模型下：
  - 水平位移 =（width + 左右 padding + 左右 border) * x%
  - 垂直位移 =（height + 上下 padding + 上下 border) * y%

```html
<style>
  .box {
    width: 200px;
    height: 100px;
  }
  .box1 {
    padding: 25px;
    border: 25px solid skyblue;
    background-color: tomato;
    /* 
            水平位移=（200+25*2+25*2）*50%=150px
            垂直位移=（100+25*2+25*2）*25%=50px;
        	即：translate(50%,25%)等同于translate(150px,50px)
        */
    transform: translate(50%, 25%);
  }
  .box2 {
    background-color: khaki;
  }
</style>
<body>
  <div class="box box1"></div>
  <div class="box box2"></div>
</body>
```

渲染效果：

![image-20220727194128199](https://www.arryblog.com/assets/img/image-20220727194128199.e6c1c1a0.png)

### 2.2、位移的默认值

`transform: translate(x，y)` 实现位移时，如果 y 值不写，则默认为 0

```css
/*
transform:translate(x) 等同于 transform:translate(x,0)
只有x发生位移，y轴上不发生移动
*/
transform: translate(x);
<style>
  .box {
    width: 100px;
    height: 100px;
  }
  .box1 {
    background-color: tomato;
    /* 
        水平位移=100*50%=50px
        垂直位移=0
        */
    transform: translate(50%);
  }
  .box2 {
    background-color: khaki;
  }
</style>
<body>
  <div class="box box1"></div>
  <div class="box box2"></div>
</body>
```

渲染效果：

![image-20220727194946600](https://www.arryblog.com/assets/img/image-20220727194946600.60b1e121.png)

### 3、translateX(x) 与 translateY(y)

- `translateX(x)`实现元素在 X 轴的位移量
- `translateY(y)`实现元素在 Y 轴的位移量
- 本质上 `translate(x,y)` 是 `translateX` 与 `translateY` 两者的复合写法

```css
/* transform:translate(x) 等同于  translateX(x) */
transform: translate(x);
```

- `transform` 后面如果跟多个变换函数，则各函数之间用空格隔开。

```css
/*
	transform:translate(x,y) 等同于 transform:translateX(x) translateY(y);
*/
transform: translateX(x) translateY(y);
<style>
  .box {
    width: 100px;
    height: 100px;
  }
  .box1 {
    background-color: tomato;
    /* 
        水平向右移动50px
        垂直向下移动30px 
        */
    transform: translateX(50px) translateY(30px);
  }
  .box2 {
    background-color: khaki;
  }
</style>
<body>
  <div class="box box1"></div>
  <div class="box box2"></div>
</body>
```

![image-20220727200049042](https://www.arryblog.com/assets/img/image-20220727200049042.4796de03.png)

### 4、translate 与绝对定位结合实现元素水平垂直居中

```css
/* 
先利用绝对定位
让元素的顶部和左侧分别与父元素垂直和水平中间对齐
然后再利用translate，让元素向上和向左移动自身宽度的一半
这样就实现了水平和垂直居中
*/
position: absolute;
top: 50%;
left: 50%;
/* 向左和向上分别移动元素自身宽和高的一半 */
transform: translate(-50%, -50%);
<style>
  .box {
    width: 200px;
    height: 150px;
    background-color: tomato;
    position: relative;
  }
  .item {
    width: 50px;
    height: 50px;
    background-color: khaki;
    /* 以下代码实现元素相对父元素水平垂直居中 */
    position: absolute;
    left: 50%;
    top: 50%;
    /* 水平向左和垂直向上，分别移动自身宽和高的一半 */
    transform: translate(-50%, -50%);
  }
</style>
<body>
  <div class="box">
    <div class="item"></div>
  </div>
</body>
```

![image-20220727201448554](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAACaCAIAAABXBVEpAAAB2UlEQVR4nO3dsQlCMRRAUZXfO5XgIK5h5RoOIjiVE8RSC8HuRvznVAmkeMXltdmOMTZQ2c0egHVZXsfTcd4Y/K/r7f1mw5ESHCnBkRIcKcGREhwpwZESHCnBkRIcKcGREhwpwZESHCnBkRIcKcGREhwpwZESHCnBkRIcKcGREhwpwZESHCnBkRIcKcGREhwpwZESHCnBkRIcKcGREhwpwZESHCnBkRIcKcGREhwpwZESHCnBkRIcKcGREhwpwZFavj/5F4/LYfYIH+zP99kjpGw4UoIjJThSgiMlOFKCIyU4UoIjJThSgiMlOFKCIyU4UoIjJThSgiMlOFKCIyU4UoIjJThSgiMlOFKCIyU4UoIjJThSgiMlOFKCIyU4UoIjJThSgiMlOFKCIyU4UoIjJThSgiMlOFKCIyU4UoIjJThSgiMlOFKCIyU4Uiv6EXptfy//JhuOlOBICY6U4EgJjpTgSAmOlOBICY6U4EgJjpTgSAmOlOBICY6U4EgJjpTgSAmOlOBICY6U4EgJjpTgSAmOlOBICY6U4EgJjpTgSAmOlOBICY6U4EgJjpTgSAmOlOBICY6U4EgJjpTgSAmOlOBICY6U4EgJjpTgSAmO1HaMMXsGVsSGI/UEvdMNehmO2l8AAAAASUVORK5CYII=)

### 5、scale 缩放

css 中通过给`transform`添加属性值`scale(x,y)`或`scaleX(x)`或`scaleY(y)`来实现元素的宽高缩放效果

缩放不会对其它元素造成影响，相当于悬浮在其它元素上面

### 5.1、scale(x,y)

- x，y 都是数字类型，也可以用百分比%表示，分别表示元素的宽和高缩放比
- 当 x，y 的值 >1 时，表示放大; <1 时，表示缩小； =1 表示不变
- 当只有 x，没有 y 时，则 y 默认为 x，元素宽高同时均匀缩放

```css
/* 宽放大2倍，高放大3倍 */
transform: scale(2, 3);
/* 宽缩小0.5倍，高放大2倍 */
transform: scale(0.5, 2);
/* 宽高同时放大2倍 */
transform: scale(2);
<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: khaki;
    margin: 150px;
  }
  .item {
    width: 100px;
    height: 100px;
    background-color: rgb(255, 99, 71, 0.5);
    /* 宽放大2倍，高放大1.5倍 */
    transform: scale(2, 1.5);
    /* 宽高同时放大2倍 */
    transform: scale(2);
    /* 宽缩小一半，高放大2倍 */
    transform: scale(0.5, 2);
  }
</style>
<body>
  <div class="box">
    <div class="item"></div>
  </div>
</body>
```

| scale(2,1.5)                                                 | scale(2)                                                     | scale(0.5,2)                                                 |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20220727202902953](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAACgCAIAAAD7D9WYAAAB5klEQVR4nO3boQ0CQRRFUZZssoaGaIIKKI8KaIKGMKjBg1lBcoE9R4564ua7mcYYOyjs6wFsl/jIiI+M+MjMrw/XSzGDf3c6v7+5fGTER0Z8ZMRHRnxkxEdGfGTER0Z8ZMRHRnxkxEdGfGTER0Z8ZMRHRnxkxEdGfGTER0Z8ZMRHRnxkxEfm7dP4V3rcb/WEn7EcjvWEtVw+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4ycz1gleVwrCfweS4fGfGRER8Z8ZERHxnxkREfGfGRER8Z8ZERHxnxkREfGfGRER8Z8ZERHxnxkREfGfGRER8Z8ZERHxnxkZnGGPUGNsrlIyM+MuIjIz4yT86tDIuU9Xl5AAAAAElFTkSuQmCC) | ![image-20220727202809415](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANEAAADRCAIAAADdWMC4AAACY0lEQVR4nO3UoQ1CQRRFQSA/wdAQTVAB5VEBTdAQBrVYUN+QswFm3CYrrjh52zHGBkK72QP4O5qjpjlqy9vrepk0g592Or++3DlqmqOmOWqao6Y5apqjpjlqmqOmOWqao6Y5apqjpjlqmqOmOWqao6Y5apqjpjlqmqOmOWqao6Y5apqjpjlqmqOmOWqao6Y5apqjpjlqmqOmOWqao6Y5apqjpjlqmqOmOWqao6Y5apqjpjlqmqOmOWqao6Y5apqjpjlqy/qX2R732+wJX2N/OM6esM6do6Y5apqjpjlqmqOmOWqao6Y5apqjpjlqmqOmOWqao6Y5apqjpjlqmqOmOWqao6Y5apqjpjlqmqOmOWqao6Y5apqjpjlqmqOmOWqao6Y5apqjpjlqmqOmOWqao6Y5apqjpjlqmqOmOWqao6Y5apqjpjlqmqOmOWqao6Y5apqjpjlqmqOmOWqao6Y5apqjpjlqmqOmOWqao6Y5apqjpjlqmqOmOWqao6Y5apqjpjlqmqOmOWqao6Y5apqjpjlqmqOmOWqao6Y5apqjpjlqmqOmOWqao6Y5apqjpjlqmqOmOWqao6Y5apqjpjlqmqOmOWqao6Y5apqjtswesG5/OM6ewCe5c9Q0R01z1DRHTXPUNEdNc9Q0R01z1DRHTXPUNEdNc9Q0R01z1DRHTXPUNEdNc9Q0R01z1DRHTXPUNEdNc9Q0R01z1DRHTXPUNEdNc9Q0R01z1DRHTXPUNEdNc9Q0R01z1DRHTXPUNEdNc9Q0R01z1DRHTXPUNEdNc9S2Y4zZG/gv7hw1zVHTHDXNUXsCjjoM7RtKprQAAAAASUVORK5CYII=) | ![image-20220727202727025](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAADSCAIAAAD2YWj6AAACJElEQVR4nO3coQ0CQRBAUSAIHJqmrgK6oA66oAIKwhIkCQK3NIAi90IC/8kTM5ef0bscYywCrL79Az+rskpllTXfcD7xFR+Y9npDN6tUVqmsUlmlskpllcoqlVUqq1RWqaxSWaWySmWVyiqVVSqrVFaprFJZpbJKZZXKKpVVKqtUVqmsUlmlskpllcoqlVUqq1RWqaxSWaWySmWVyiqVVSqrVFaprFJZpbJKZZXKKpVVKqu8f5Pjfj3OtWDzuMw1akbP622uUdvd4e33blaprFJZpbJKZZXKKpVVKqtUVqmsUlmlskpllcoqlVUqq1RWqaxSWaWySmWVyiqVVSqrVFaprFJZpbJKZZXKKpVVKqtUVqmsUlmlskpllcoqlVUqq1RWqaxSWaWySmWVyiqVVSqrVFaprFJZpbJKZZXKKpVVKqtUVqmsUlmlskpllcoqlVUqq1RWqaxSWaWySmWVyiqVVSqrVFaprFJZpbJKZZXKKpVVKqtUVqmsUlmlskpllcoqlVUqq1RWqaxSWaWySmWVyiqVVSqrVFaprFJZZTnGsBvOJzv/M9Neb+hmlcoqlVUqq1RWqaxSWaWySmWVyiqVVSqrVFaprFJZpbJKZZXKKpVVKqtUVqmsUlmlskpllcoqlVUqq1RWqaxSWaWySmWVyiqVVSqrVFaprFJZpbJKZZXKKpVVKqtUVqmsUlmlskplFf8mx7/qZpXKKpVVKqtUVnkBnDQWPymB+owAAAAASUVORK5CYII=) |
| 宽放大 2 倍，高放大 1.5 倍                                   | 宽高同比放大 2 倍                                            | 宽缩小到 0.1 倍，高度放大 2 倍                               |

### 5.2、百分比% 单位

```css
transform: scale(x%, y%);
```

- `x%` 和 `y%` 分别相对于元素的可视宽和可视高而言
- 在标准盒子模型下
  - 可视宽缩放后大小 =（width + 左右 padding + 左右 border) * x%;
  - 可视高缩放后大小 =（height + 上下 padding + 上下 border) * y%

```html
<style>
  .box {
    width: 150px;
    height: 150px;
    /* 背景颜色 黄色 */
    background-color: khaki;
    margin: 150px;
  }
  .item {
    width: 50px;
    height: 50px;
    padding: 25px;
    border: 25px solid rgb(243, 147, 147, 0.9);
    /* 
        	宽放大2倍，高缩小一半 
        	宽缩放后大小=（50+25*2+25*2）*200%=300px
        	高缩放后大小=（50+25*2+25*2）*50%=75px
        */
    transform: scale(200%, 50%);
  }
</style>
<body>
  <div class="box">
    <div class="item"></div>
  </div>
  <div class="h"></div>
</body>
```

| scale(200%,50%)                                              | scale(200%)                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20220727210307283](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACgCAIAAAAJltcUAAACq0lEQVR4nO3aQWoUURRAUdNpW0Ek4+wivaTMM3MdWUPvRHAFyS7iNIRGSSDtVAoUocv6N805s5o8XsG//BrU2eFweAdUrUYvAPyNRCFNopAmUUiTKKStRy+wtMeH29ErcJSLyy+jV1iUWxTSJAppEoU0iUKaRCFNopAmUUiTKKRJFNIkCmkShTSJQppEIU2ikCZRSJMopEkU0iQKaRKFNIlCmkQhTaKQJlFIkyikSRTSJAppEoU0iUKaRCFNopAmUUiTKKRJFNIkCmkShTSJQtp68vx8dzdkj8WcPZ2PXoGjPH8/8SO62W5/f5wm+nJ/v+AyA6xep6/M2/KyOvEjOknUhy6kSRTSJAppEoU0iUKaRCFNopAmUUiTKKRJFNIkCmlv44fVT9fXc416fLidaxRDXFzezDVqv9vNNer/cYtCmkQhTaKQJlFIkyikSRTSJAppEoU0iUKaRCFNopAmUUiTKKRJFNIkCmkShTSJQppEIU2ikCZRSJMopEkU0iQKaRKFNIlCmkQhTaKQJlFIkyikSRTSJAppEoU0iUKaRCFNopAmUUiTKKRJFNIkCmkShTSJQppEIU2ikCZRSJMopEkU0iQKaRKFNIlC2nr0Av9kv9vNNer89cNcoxhiv5rtMLwJblFIkyikSRTSJAppEoU0iUKaRCFNopAmUUiTKKRJFNKm/+i+v7oassdifj59G70CR/n4+cSP6MQ00c12O2SPxfx4+Dp6BY6yuTzxIzrhQxfSJAppEoU0iUKaRCFNopAmUUiTKKRJFNIkCmkShTSJQppEIU2ikCZRSJMopEkU0iQKaRKFNIlCmkQhTaKQJlFIkyikSRTSJAppEoU0iUKaRCFNopAmUUiTKKRJFNIkCmkShTSJQtrZ4XAYvQPwR25RSJMopEkU0n4BN04oN2d+GqwAAAAASUVORK5CYII=) | ![image-20220727210325284](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT8AAAE7CAIAAAAkVRHqAAAD+0lEQVR4nO3csU3EUBRFQRY522DjLc81bB3U4PKICRybBgAJg3g6aCb9yU2OXvYvx3E8AUHP0wOAk9QLVeqFKvVClXqhSr1QpV6oWr5+3rftb3YAH7qu62dPbi9UqReq1AtV6oUq9UKVeqFKvVClXqhSL1SpF6rUC1XqhSr1QpV6oUq9UKVeqFIvVKkXqtQLVeqFKvVClXqhSr1QpV6oUi9UqReq1AtV6oUq9UKVeqFKvVClXqhSL1SpF6rUC1XqhSr1QpV6oUq9UKVeqFIvVKkXqtQLVeqFKvVClXqhSr1QpV6oUi9ULdMDzriu6/QE/qF926YnfI/bC1XqhSr1QpV6oUq9UKVeqFIvVKkXqtQLVeqFKvVClXqhSr1QpV6oUi9UqReq1AtV6oUq9UKVeqFKvVClXqhSL1SpF6qSv7H/orfXl+kJ/Mjt/pieMMbthSr1QpV6oUq9UKVeqFIvVKkXqtQLVeqFKvVClXqhSr1QpV6oUi9UqReq1AtV6oUq9UKVeqFKvVClXqhSL1SpF6rUC1XqhSr1QpV6oUq9UKVeqFIvVKkXqtQLVeqFKvVClXqhSr1QpV6oUi9UqReq1AtV6oUq9UKVeqFKvVClXqhSL1SpF6rUC1XqhSr1QpV6oUq9UKVeqFIvVKkXqtQLVeqFKvVClXqhSr1QpV6oUi9UqReq1AtV6oUq9UKVeqFKvVClXqhSL1SpF6rUC1XqhSr1QpV6oUq9UKVeqFIvVKkXqtQLVeqFKvVClXqhSr1QpV6oUi9UqReq1AtV6oUq9UKVeqFKvVClXqhSL1SpF6rUC1XqhSr1QpV6oUq9UKVeqFIvVKkXqtQLVeqFKvVClXqhSr1QpV6oUi9UqReq1AtV6oUq9UKVeqFKvVClXqhSL1SpF6rUC1XqhSr1QpV6oUq9UKVeqFIvVKkXqtQLVeqFKvVClXqhSr1QpV6oUi9UqReq1AtV6oUq9UKVeqFKvVClXqhSL1SpF6rUC1XqhSr1QpV6oUq9UKVeqFqmBwy73R/TE+Aktxeq1AtV6oUq9UKVeqFKvVClXqhSL1SpF6rUC1XqhSr1QpV6oUq9UKVeqFIvVKkXqtQLVeqFKvVClXqhSr1QpV6oUi9UJX9j37dtegLMc3uhSr1QpV6oUi9UqReq1AtV6oUq9UKVeqFKvVClXqhSL1SpF6rUC1XqhSr1QpV6oUq9UKVeqFIvVKkXqtQLVeqFKvVClXqhSr1QpV6oUi9UqReq1AtV6oUq9UKVeqFKvVClXqhSL1SpF6rUC1XqhSr1QpV6oUq9UKVeqFIvVKkXqtQLVeqFKvVClXqh6nIcx/QG4Ay3F6rUC1XqhSr1QpV6oUq9UPUO9T8URwFBTQ4AAAAASUVORK5CYII=) |

### 6、scaleX(x) 与 scaleY(y)

- `scaleX(x)` 实现元素的可视宽缩放效果
- `scaleY(Y)` 实现元素可视高缩放效果
- 本质上 `scale(x,y)` 是 `scaleX(x)` 与 `scaleY(y)` 的复合写法

```css
/*
	transform:scale(x,y) 同等于 transform:scaleX(x) scaleY(y);
*/
transform: scaleX(x) scaleY(y);
<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: khaki;
    margin: 150px;
  }
  .item {
    width: 100px;
    height: 100px;
    background-color: rgb(255, 99, 71, 0.5);
    /* 宽放大两倍，高缩小一半 */
    transform: scaleX(2) scaleY(0.5);
  }
</style>
<body>
  <div class="box">
    <div class="item"></div>
  </div>
</body>
```

![image-20220727203524118](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANEAAABtCAIAAACwUBO2AAABh0lEQVR4nO3dsU3DABRFUYKQaJBSZxSWYAK2yBzZgglYglFSR6KhMi2RQO7ux3BO5+4VV7+zvVuW5QZCt9MD+Hc0R01z1O6mB6y7nE/TEzZjfzhOT1jnzlHTHDXNUdMcNc1R0xw1zVHTHDXNUdMcNc1R0xw1zVHTHDXNUdMcNc1R0xw1zVHTHDXNUdMcNc1R0xy13dU3cl5f5pb86OP9bXrCZtw/PE5P+M7T89cnd46a5qhpjprmqGmOmuaoaY6a5qhpjprmqGmOmuaoaY6a5qhpjprmqGmOmuaoaY6a5qhpjprmqGmOmuaoaY6a5qhpjprmqGmOmuaoaY6a5qhpjprmqGmOmuaoaY6a5qhpjprmqGmOmuaoaY6a5qhpjprmqGmOmuaoaY7a9X+qf6XL+TQ9YTP2h+P0hHXuHDXNUdMcNc1R0xw1zVHTHDXNUdMcNc1R0xw1zVHTHDXNUdMcNc1R0xw1zVHTHDXNUdMcNc1R0xw1zVHbwDvV/DHuHDXNUdMcNc1R+wQwCBfNjznUQQAAAABJRU5ErkJggg==)

### 7、skew 斜切

- css 中通过给`transform`添加属性值`skew(ax,ay)`或`skewX(ax)`或`skewY(ay)`变换函数来实现元素斜切效果
- `skewX(ax)`：用于水平拉伸，使元素的每个点在水平方向上扭曲一定角度
- `skewY(ay)`：用于垂直拉伸，使元素的每个点在垂直方向上扭曲一定角度
- `skew(ax,ay)`：用于水平和垂直拉伸，使元素在水平和垂直方向上扭曲一定角度
- ax：表示一个角度，用来表示沿着横坐标扭曲元素的角度
- ay：表示一个角度，用来表示沿着纵坐标扭曲元素的角度

```css
/* X轴斜切 30deg */
skewX(30deg);
/* Y轴斜切 50deg */
skewY(50deg);
/* X轴斜切 30deg Y轴斜切50deg*/
skew(30deg,50deg)
<style>
  .box {
    width: 100px;
    height: 100px;
    margin: 100px;
    background-color: khaki;
    transform: skewX(30deg);
    /* transform: skewX(-30deg); */
    /* transform: skew(30deg, 30deg); */
  }
</style>
<body>
  <div class="box"></div>
</body>
```

| skewX(30deg)                                                 | skewX(-30deg)                                                | skewY(30deg)                                                 | skew(30deg,30deg)                                            |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20220801132019211](data:image/png;base64,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) | ![image-20220801133048114](data:image/png;base64,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) | ![image-20220801132220966](data:image/png;base64,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) | ![image-20220801132342017](data:image/png;base64,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) |

### 9、rotate 旋转

- css 中通过给`transform:rotate(ax)`来实现元素旋转效果
- ax 表示旋转的角度，比如`rotate(45deg)`
- ax 为正，表示顺时针方向旋转
- ax 为负，表示逆时针方向旋转

:::details 点击查看完整源代码

```html
<style>
  .body,
  ul {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style-type: none;
  }
  ul li {
    width: 100px;
    height: 100px;
    border: 2px solid red;
    margin: 20px;
    float: left;
  }
  .item {
    height: 100%;
    background-color: khaki;
  }
  .item1 {
    /* 顺时针旋转到30deg */
    transform: rotate(30deg);
  }
  .item2 {
    /* 逆时针旋转到30deg */
    transform: rotate(-30deg);
  }
  .item3 {
    /* 顺时针旋转到180deg */
    transform: rotate(180deg);
  }
  .item4 {
    /* 顺时针旋转30deg */
    transform: rotate(450deg);
  }
</style>
<body>
  <ul>
    <li>
      <div class="item item1">30deg</div>
    </li>
    <li>
      <div class="item item2">-30deg</div>
    </li>
    <li>
      <div class="item item3">180deg</div>
    </li>
    <li>
      <div class="item item4">450deg</div>
    </li>
  </ul>
</body>
```

:::

![image-20220727212754232](https://www.arryblog.com/assets/img/image-20220727212754232.f733b2d3.png)

### 10、transform-origin 2D 变形原点

`transform-origin` 属性用来设置元素的 2D 和 3D 变换原点，即元素在变换时是以围绕那个点来发生变换的。

```css
/*
x： 表示x轴的坐标位置
y： 表示y轴的坐标位置
z: 表示z轴的坐标位置
*/
transform-orign: x y z;
```

注：

**x , y 可以是以下三种值**

- 可以长度值 `px`
- 可以是`百分比 %` 值 （百分比相对的是元素自身的**可视宽**和**可视高**而言）
- 可以是预设的关键词 （（left、right）与（top、bottom） 与 center 三组中任意一个与另一组中的一个关键字组合来表示）
- z 的值只能是长度值（后面讲 3D 变时，会详细讲）

**2D 变形原点**

在没有讲到 3D 之前，我们先只在 2D 的基础上来演示，所以只需要写两个值就 ok，即`transform-origin:x y;`

```css
/*
x： 表示x轴的坐标位置
y： 表示y轴的坐标位置
z: 在没有写的时候，z表示0 
*/
transform-orign: x y;
```

- 在 2D 转换中，元素的默认变换原点为元素的中心

```css
transform-origin: 50% 50%; /* 应用于 2D 变换的原点 */
```

![transform-origin](https://www.arryblog.com/assets/img/transform-origin.6bf69d85.png)

### 10.1、关键字表示

关键词（left、right）与（top、bottom） 与 center 三组中任意一个与另一组中的一个关键字组合来表示

> 如下表

| 关键 字      | 描述                                          |
| :----------- | :-------------------------------------------- |
| left         | 原点为元素左边中间位置，同`left center`一样   |
| right        | 原点为元素右边中间位置，同`right center`一样  |
| top          | 原点为元素上边中间位置，同`top center`一样    |
| bottom       | 原点为元素下边中间位置，同`bottom center`一样 |
| center       | 原点为元素中间位置，同`center center`一样     |
| top left     | 原点为元素左上角，相当于坐标（0 0）           |
| top right    | 原点为元素右上角                              |
| left bottom  | 原点为元素左下角                              |
| right bottom | 原点为元素右下角                              |

> 元素的默认变换原点为元素的中间位置`transform-origin:center;`

:::details 点击查看完整源代码

```html
<style>
  .body,
  ul {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style-type: none;
    margin: 50px;
  }
  ul li {
    width: 100px;
    height: 100px;
    border: 2px solid red;
    margin: 40px;
    float: left;
  }
  .item {
    height: 100%;
    background-color: khaki;
    /* 顺时针旋转60deg */
    transform: rotate(60deg);
  }
  .item1 {
    /* 旋转的原点 头部中间,相当 top center   */
    transform-origin: top;
  }
  .item2 {
    /* 旋转的原点右侧中间，相当 right center */
    transform-origin: right;
  }
  .item3 {
    /* 旋转的原点 底部中心，相当于 botttom center  */
    transform-origin: bottom;
  }
  .item4 {
    /* 旋转的原点 */
    transform-origin: left;
  }
  .item5 {
    /* 旋转的原点 */
    transform-origin: center;
  }
</style>
<body>
  <ul>
    <li>
      <div class="item item1">top</div>
    </li>
    <li>
      <div class="item item2">right</div>
    </li>
    <li>
      <div class="item item3">bottom</div>
    </li>
    <li>
      <div class="item item4">left</div>
    </li>
    <li>
      <div class="item item5">center</div>
    </li>
  </ul>
</body>
```

:::

![image-20220727222754345](https://www.arryblog.com/assets/img/image-20220727222754345.7a0c6a1a.png)

### 10.2、 数值表示法

```css
transform-origin: x y;
```

- x , y 为长度单位 px
- 当 y 省略不写时，默认为元素的垂直中心点

```css
/* 变换原点：为左上角 */
transform-origin: 0 0;
/* 变换原点为：x轴20px 与y轴30px相交的位置 */
transform-origin: 20px 50px;
/* 变换原点：为上边的中间点 */
transform-origin: 0;
```

:::details 点击查看完整源代码

```html
<style>
  .body,
  ul {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style-type: none;
    margin: 50px;
  }
  ul li {
    width: 100px;
    height: 100px;
    border: 2px solid red;
    margin: 40px;
    float: left;
  }
  .item {
    height: 100%;
    background-color: khaki;
    /* 元素旋转60deg */
    transform: rotate(60deg);
  }
  .item1 {
    /* 旋转的原点 */
    transform-origin: 0 0;
  }
  .item2 {
    /* 旋转的原点 */
    transform-origin: 20px 20px;
  }
  .item3 {
    /* 旋转的原点 */
    transform-origin: 50px 50px;
  }
  .item4 {
    /* 旋转的原点 */
    transform-origin: 100px 0px;
  }
  .item5 {
    /* 旋转的原点 */
    transform-origin: 50px 100px;
  }
</style>
<body>
  <ul>
    <li>
      <div class="item item1">0 0</div>
    </li>
    <li>
      <div class="item item2">20px 20px</div>
    </li>
    <li>
      <div class="item item3">50px 50px</div>
    </li>
    <li>
      <div class="item item4">100px 0px</div>
    </li>
    <li>
      <div class="item item5">50px 100px</div>
    </li>
  </ul>
</body>
```

:::

![image-20220727224023192](https://www.arryblog.com/assets/img/image-20220727224023192.03ef20d6.png)

### 10.3、百分比表示法

百分比相对的是元素自身的**可视宽**和**可视高**而言

:::details 点击查看完整源代码

```html
<style>
  .body,
  ul {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style-type: none;
    margin: 50px;
  }
  ul li {
    width: 100px;
    height: 100px;
    border: 2px solid red;
    margin: 40px;
    float: left;
  }
  .item {
    width: 100px;
    height: 100px;
    background-color: khaki;
    transform: rotate(60deg);
  }
  .item1 {
    /* 旋转的原点 */
    transform-origin: 100%;
  }
  .item2 {
    /* 旋转的原点 */
    transform-origin: 50%;
  }
  .item3 {
    /* 旋转的原点 */
    transform-origin: 100% 0%;
  }
  .item4 {
    /* 旋转的原点 */
    transform-origin: 100% 100%;
  }
  .item5 {
    /* 旋转的原点 */
    transform-origin: 100% 50%;
  }
</style>
<body>
  <ul>
    <li>
      <div class="item item1">100%</div>
    </li>
    <li>
      <div class="item item2">50%</div>
    </li>
    <li>
      <div class="item item3">100% 0%</div>
    </li>
    <li>
      <div class="item item4">100% 100%</div>
    </li>
    <li>
      <div class="item item5">100% 50%</div>
    </li>
  </ul>
</body>
```

:::

![image-20220727225814240](https://www.arryblog.com/assets/img/image-20220727225814240.6fd290b3.png)

### 11、 scale 与 skew 都可以设置其变换原

元素默认的转换原点为元素的中心点 `transform-origin:50% 50%;`

:::details 点击查看完整源代码

```html
<style>
  .box {
    width: 100px;
    height: 100px;
    border: 2px solid red;
    margin: 150px;
  }
  .item {
    width: 100px;
    height: 100px;
    background-color: rgb(242, 232, 147, 0.5);
    transform: scale(2);
    /* 原点左上角 */
    transform-origin: 0 0;
    /* 原点右边中间 */
    transform-origin: 100%;
  }
</style>
<body>
  <div class="box">
    <div class="item"></div>
  </div>
</body>
```

:::

| 未设置原点                                                   | transform-origin:0 0;                                        | transform-origin:100%;                                       |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20220727230638503](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAADWCAIAAAAmdDtEAAACg0lEQVR4nO3dIY7CUBRA0WFCgmE9bK/p9lgPBvURuEIyIwi3hXPkU0/cvsq/G2P8QOG3XoDvJT4y4iMjPjLiI7N/HF0v5/fvwcc7HE+LictHRnxkxEdGfGTER0Z8ZMRHRnxkxEdGfGTER0Z8ZMRHRnxkxEdGfGTER0Z8ZMRHRnxkxEdGfGTER0Z8ZMRHRnxkxEdGfGTER0Z8ZMRHRnxkxEdGfGTER0Z8ZMRHRnxkxEdGfGTER0Z8ZMRHRnxkxEdGfGTER+bJe7urM8/1Bts0TfUGf3D5yGzh8t2t/jtekY38K1w+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y4iMjPjLiIyM+MuIjIz4y+3qBf5vnegNezOUjsxtjLEbXyzlZhc92OJ4WE5ePjPjIiI+M+MiIj4z4yIiPjPjIiI+M+MiIj4z4yIiPjPjIiI+M+MiIj4z4yIiPjPjIiI+M+MiIj4z4yIiPjPjIiI+M+MiIj4z4yIiPjPjIiI+M+MiIj4z4yIiPjPjIiI+M+MiIj4z4yIiPjPjIiI+M+MiIj8yT93bhPVw+MuIjIz4y4iMjPjLiIyM+MjekuBWr6kKLEQAAAABJRU5ErkJggg==) | ![image-20220727230621682](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAADWCAIAAAAiget5AAACfElEQVR4nO3YIW7DQBRF0e8qUknX0/15ec12GlI05UlRga8snwMHfXD1wGxrrYHOW30AVydBYhIkJkFiEiR2e37YtuKM8/Ox8F9WkNjLCs7MzM/318F3nNi+z8w87vUdJ/D+8fn6aAWJSZCYBIlJkJgEiUmQmASJSZCYBIlJkJgEiUmQmASJSZCYBIlJkJgEiUmQmASJSZCYBIlJkJgEiUmQmASJSZCYBIlJkJgEiUmQmASJSZCYBIlJkJgEiUmQmASJSZCYBIlJkJgEiUmQmASJSZCYBIlJkJgEiUmQmASJSZCYBIlJkJgEiUmQmASJSZCYBIlJkJgEiUmQmASJSZCYBIlJkJgEiUmQmASJSZCYBIlJkJgEiUmQmASJSZCYBIlJkJgEiUmQmASJSZCYBIlJkJgEiUmQmASJSZCYBIlJkJgEiUmQmASJSZCYBIlJkJgEiUmQmASJSZCYBInd/n7e92PP4LqsILGXFVxrZuZxP/4UrskKEpMgMQkSkyAxCRKTIDEJEpMgMQkSkyAxCRKTIDEJEpMgMQkSkyAxCRKTIDEJEpMgMQkSkyAxCRKTIDEJEpMgMQkSkyAxCRKTIDEJEpMgMQkSkyAxCRKTIDEJEpMgMQkSkyAxCRKTIDEJEpMgMQkSkyAxCRKTIDEJEpMgMQkSkyAxCRKTIDEJEpMgMQkSkyAxCRKTIDEJEpMgMQkSkyAxCRKTIDEJEpMgMQkSkyAxCRKTIDEJEpMgMQkSkyAxCRKTIDEJEpMgMQkSkyAxCRKTIDEJEpMgMQkSkyAxCRKTIDEJEpMgMQkSkyAxCRKTIDEJEtvWWvUNXJoVJCZBYhIkJkFiEiT2C+AsFCn0dM7rAAAAAElFTkSuQmCC) | ![image-20220727230554550](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANUAAADUCAIAAACEfvFxAAAChUlEQVR4nO3dIW5CQRhG0aEhwbAetkee73q6CNaDQQ2ipu1DNGnCzaPnyFG/uPns7OacAyJv9QH8a/qjpD9K+qO0Xz/drpfn38HLOxxP60f7R0l/lPRHSX+U9EdJf5T0R0l/lPRHSX+U9EdJf5T0R0l/lPRHSX+U9EdJf5T0R0l/lPRHSX+U9EdJf5T0R0l/lPRHSX+U9EdJf5T0R0l/lPRHSX+U9EdJf5T0R0l/lPRHSX+U9EdJf5T0R0l/lPRHSX+U9Efpwf+//Mqy1BdszfvHGGPM+fXN/lGyf39zPtcXbMfn/n1n/yjpj5L+KOmPkv4o6Y+S/ijpj5L+KOmPkv4o6Y+S/ijpj5L+KOmPkv4o6Y+S/ijpj5L+KOmPkv4o6Y+S/ijpj5L+KOmPkv4o6Y+S/ijpj5L+KOmPkv4o6Y+S/ijpj5L+KOmPkv4o6Y+S/ijpj5L+KOmPkv4o6Y+S/ijpj5L+KOmPkv4o6Y+S/ijpj5L+KOmPkv4o6Y+S/ijpj5L+KOmPkv4o6Y+S/ijpj5L+KOmPkv4o6Y+S/ijpj5L+KOmPkv4o6Y+S/ijpj5L+KOmPkv4o6Y+S/ijpj5L+KOmPkv4o6Y+S/ijpj5L+KOmPkv4o6Y+S/ijpj5L+KO3rAzZuWeoLts3+UdrNOX883a6X5BRe2+F4Wj/aP0r6o6Q/SvqjpD9K+qOkP0r6o6Q/SvqjpD9K+qOkP0r6o6Q/SvqjpD9K+qOkP0r6o6Q/SvqjpD9K+qOkP0r6o6Q/SvqjpD9K+qOkP0r6o6Q/SvqjpD9K+qOkP0r6o6Q/SvqjpD9K+qOkP0r6o6Q/SvqjpD9KD/7/haexf5T0R0l/lPRHSX+U9EfpDvCnGCmYLQ8IAAAAAElFTkSuQmCC) |

### 11、2D 转换综合写法顺序问题

同时使用多个转换，其多个转换函数之间用空格隔开

```css
transform: translate() rotate() scale();
```

转换函数的顺序会影响转换的效果，比如：先旋转会影响坐标轴方向

:::details 点击查看完整源代码

```html
<style>
  .box {
    width: 100px;
    height: 100px;
    border: 2px solid red;
    margin: 20px 150px;
  }
  .item {
    width: 100px;
    height: 100px;
    border-top: 2px solid blue;
    border-left: 2px solid #000;
  }
  .item1 {
    /* 背景颜色为 黄色 */
    background-color: khaki;
    /* 先旋转，再位移 */
    transform: rotate(180deg) translateX(100px);
  }
  .item2 {
    /* 背景颜色为 天蓝色 */
    background-color: skyblue;
    /* 先位移，再旋转 */
    transform: translateX(200px) rotate(180deg);
  }
</style>
<body>
  <div class="box">
    <div class="item item1"></div>
  </div>
  <div class="box">
    <div class="item item2"></div>
  </div>
</body>
```

:::

| 未旋转和位移                                                 | 先旋转再位移                                                 | 先位移再旋转                                                 |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20250612170606633](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAABzCAIAAAApP9r2AAABVElEQVR4nO3WMU7DUBRFwWdEyW5ZAGazqdnBp4e4nFhOzpS/ujp6sryttSbM29kDnlx9rfpa9bXe/z5s2xkzru/gN6H7tf7d78zMbLPPfD14yqUd/eQe3e8+8622vJL79zszM/vP7eNxQy7v8+5r31+rvlZ9rfpa9bXqa9XXqq9VX6u+Vn2t+lr1tepr1deqr1Vfq75Wfa36WvW16mvV16qvVV+rvlZ9rfpa9bXqa9XXqq9VX6u+Vn2t+lr1tepr1deqr1Vfq75Wfa36WvW16mvV16qvVV+rvlZ9rfpa9bXqa9XXqq9VX6u+Vn2t+lr1tepr1deqr1Vfq75Wfa36WvW16mvV16qvVV+rvlZ9rfpa9bXqa9XXqq9VX6u+Vn2t+lr1tepr1deqr1Vfq75Wfa36WvW16mvV16qvVV+rvlZ9rW2tdfaGZ9b9WvW16mvV16qv9Qsg6w66qPrDfwAAAABJRU5ErkJggg==) | ![image-20250612170431927](data:image/png;base64,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) | ![image-20250612170520912](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAToAAABzCAIAAACHAFkbAAABuUlEQVR4nO3Zy03EMBRAURulBRqhO1bAju5ohB7MdkaZGYUN4Urn7JzVU+Qr5zPXWgMoeDp7AOAouUKGXCFDrpCxXa3mPGmMOJ/r+BNOV8jYblxzVhzneeSwz6/vs0fIeH15HmPsf7I6XSFDrpAhV8iQK2TIFTLkChlyhQy5QoZcIUOukCFXyJArZMgVMuQKGXKFDLlChlwhQ66QIVfIkCtkyBUy5AoZcoUMuUKGXCFDrpAhV8iQK2TIFTLkChlyhQy5QoZcIUOukCFXyJArZMgVMuQKGXKFDLlChlwhQ66QIVfIkCtkyBUy5AoZcoUMuUKGXCFDrpAhV8iQK2TIFTLkChlyhQy5QoZcIUOukCFXyJArZMgVMuQKGXKFDLlChlwhQ66QIVfIkCtkyBUy5AoZcoUMuUKGXCFDrpAhV8iQK2TIFTLkChlyhQy5QoZcIUOukCFXyJArZMgVMuQKGXKFDLlChlwhQ66QIVfIkCtkyBUy5AoZcoUMuUKGXCFDrpAhV8iYa62L1TxvkrLLe8gdNtdvfIzxvnb7ajtlFuCht5tX575g4H/y7goZcoUMuUKGXCFDrpDxA5wcGmBUOF73AAAAAElFTkSuQmCC) |
| x 正轴向右，y 正轴向下                                       | 先旋转，改变了 x 轴和 y 轴方方向， x 正轴向左，y 正轴向上。然后再向 x 正轴（左）位移 200px | 先向 x 轴正方向（右）位移 200px，再旋转                      |

注：

当我们需要同时位移和旋转时，需要注意位移和旋转的书写顺序，因为写旋转会影响到元素的坐标轴方向。

### 12、transform 属性注意事项

在前面 `transform` 中定义的转换，在后续的效果中也要带上，否则会出现不按预期效果显示。

```html
<style>
  .box {
    width: 100px;
    height: 100px;
    margin: 50px;
    background-color: skyblue;
    transform: rotate(45deg);
  }
  .box:hover {
    /* 
        我们本想在鼠标移入时，元素可以放大1.2倍。
        但实际效果是，元素确实放大了1.2倍，但元素的旋转效果没有了。
        */
    transform: scale(1.2);
    /* 上面代码等同于 */
    /* transform: rotate(0deg) scale(1.2) translate(0,0) skew(0deg); */
  }
</style>

<div class="box"></div>
```

渲染效果：

![GIF2025-1-423-52-41](data:image/gif;base64,R0lGODlhrwCtAEQAACH5BAAeAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAArwCtAKH///+Hzuvc8fkAAAAC/4SPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8MCofEovGITCptAsHyGRIEAk6oVSOdUq/cSla77YodX3B4jD6Uzee0eM1uu63wuHyurNvveKN+z9cn9AcYKOhDWGh4qJOouMjI9PhYFbnjODlVaXmDmanJ2fn5uRkK4zmqVWrKgpqqyuri+gobqzJLW2trgpuruyvS6/sL7CE8TFyMhYy8qmxxzAzm/CwRLT1dDY2NTa29cM1t5v2tJi5O/h1+zpb+vM7eXp4AHy8/D1Bvf6++v+8eSp+/OAAjCRxIUNlBhAl3LWTYkNVDiBE5TaRYkdFFjP8Z+2zk2NHNR5Ahx4wkWZLLSZQpoaxk2TIPTJgFibycaadmkJs4c9Lp2VMnD55A9wjNQbSoUSRJlS4t0tTp00FSpR49VbXq1RZRsxbaesurV7AnuopVRJaE2bNocaxl27bGW7hxZcylW/fFXbx5W/Hlm/bC3r+U/BL+G9ja4cOJHwxenKkxg8eQI5egXLnw5cyIUWDmzK8s6LOSI3wGXVrxaKepJ5xe3JrC684zZtONLXg1S9wYbI9tpBsj7w2+lQ7nUDwokOQ0qQZndzzKc3R+pkuLrtb6MOybtb/izsv7KPCixWv+aR4Q+bDpYyZhfl1k+2Rv5q+PAf+7RvH3aeS4n9SfXNMFKIluBIoy2oFuoaZQZgpeAtmDQzE2D3MS/lDchcvBpeFOpOEDzm8ghmjViA0M1iFTRaX4nnImmjYTi09EJaNLJNWIHkU4XvHSjiox5GMXHwVZnz1EmhTPkWgcpGQa+jQpHzNQzhHOlHhEY6VHtGQpCC5cHuLKl/ud96JdfZWJn3poIhjamv616eab9MVZGyh0NiLmnXruyWeffv4JaKCCDkpooYYeimiiii7KaKOOPtpBAQAh+QQBCgAAACyPADkADAATAKQA/wBCQ00YGCTIycxLTFeys7gsLDjw8PMLCxj09Pfh4ePW1tgoKDTl5ecVFyPOztIGCRf4+fvo6OoNEyIzMz8jNkhhYmzCwsmtvscAAAAAAAAAAAAAAAAAAAAAAAAAAAAFVqAwAGRpCsFonkC6lgLpvrGssuUMrzpQm7pfKTITlg4uY0mSUpYUgd9BFqhGSQlEobUlOQDZgQGgGJMmB8SIcAEQuhUIhjRgABbmF2EBoLxIDQwWDyQhACH5BAEKAAAALA8ADgCOAI4ApAD/AIfO6/j5+w0TImqjvCM2SCM3SQYJFxglNig+UW2mwuHh49bW2F6RqhspO/Dw8+jo6sLCyTNPZHm51bO0vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX/ICCOZGmeaKqupCCwcCzPdG3LrnvvfO//olwOSCwaf0LhcclsnpJJp3QKhEKp2CzOetV6vyMuF0zGisXlNPN8Vrur7PZ7F6jb7/i8fs+/8/qAgYJ2f4OGh3U+iIuChYyPeUCQk350lJNFl5iWmotHnYyOoINMo4eipn1OqY2crHtTr6quspWxtZG0uFq4eKi1X72Euq9kwgG/rGnCyaZuvc2gc7vE0nMAwNWa1yOy0ZTcJMXam+Hdqd+P5ibo5KHr7KPpiPAo8u6n9fad86T6KfzwtfoH8FI/QARZGBQ4K+EKcAxhOYRRzgakiTIuRvSFMeO7Gx87xghZw5NIGiZB/+Y7iXKlRUMsVfqTGShmxBc0G9p8GUgHT507f/IB4LMl0KBC9QTBOQMhUkUNi44c+vSHTqkKJVa1qnWpx1xbJSltgbUgx7BExpJlqgIs2rRnyVK09TaTH5xRsiaqu+TOkLJt9/LtW+cv26yDm9h5oQOwvcSK9zY+nIIy5CN4GcNwfJnIZM5hQHf2MSSGktFrSq/Iixrz6cqsWxfp8oS2bM+2Q+dOOEABtzFrdxMcUIDANTRLgWMcIKD4nDZsRDIXYMC4mzhyludwriZ69onTXVTvjpyocvBJuJMpnzy2w/A5xq+3Uts9byvqvdBHIfwf/BwP5JdFf7qJts5/OUAgIP8V9tVnmX9iLFDAF6+xoBp6SRigoQET6mdgCR+GE94BFFDXQBkhgiidCwcQ4IAACyCAIh0dMdciAAlEIEACJwZTCEYF3AgAAQgIwICMXgjGU0wJMCCAA0kqWdIwIk2AgAS+ZUHXlFTe1tSWRnXppV5ihlnmmCeolZSUaJbQFZdutXmOmnDG2eZRX1Ilp1M50XlbTQKhOdCafnY2E6GFJgbTRqi5VCegkNGzEZtopYQonlWRZOailWqap6VPadSnoztV9KikQUE0KqoxLbQqqyJtM6meHQX0KqgJWXMrrvrcsyuv6zgzK6T1tPOrp9coM+yg3IxzrDrheLPsoc9I+6yCqGpQcy22xmh7qa5gMDMtrFqKu62q5Zr7rbBYHEPpV8e06y4y40K7yrz0nmsrYfgeZKwR+J4Jb78AB/zuVAbny1XC/jrbQ8ICIwwxVBArfGrADVvLEnbsybkDxwR6TAPIF4rcA8kmz4ZdykbEwbJr572MW8gy80BzzTaXjHPLDzoUAgAh+QQBPAAAACxXAFEAEQAXAKQA/wCHzuv4+fsNEyJqo7wjNkgjN0kGCRcYJTYoPlHh4ePW1tgbKTtekarw8PPCwsno6OptpsIzT2SztLx5udUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFfyAgikEwnuhYmmm7su35wudAqHM6FDcwl6iBgOf70YQCA8EIFCGHS6ZTQE1GjYAnlccMaAUArvErEs/IAId5hBZAxOwqFVBVFFZTedLAvzefBxNJDSR4WVQHBAwCCgiFfwKJAAkPAgmEKQWSAAQIAguOMScJCwIMoicUCBIRLSEAIfkEAQoAAAAsVwBVACwAQQCkAP8Ah87r+Pn7DRMiaqO8IzZIIzdJyMnMCwsYS0xXLi46KCg0GBgk4eHj6Ojq1tbYwsLJzs7S8PDzYWJsQkNNMzM/s7S8srO4XpGqAAAAAAAAAAAAAAAAAAAAAAAAAAAABcRgEABkaZ5oqqLiuL7w27pxXc+0rad4vv+Ang9oEw6JMOMRqVIumSfnE0qSTqFW6iqr5Rm7si+42QrOxl4XDh07s8Oit3xOr9vv+Lx+z+/7/4CBgoOEhYaHiImKi4x3AwR9AwWQewMCk5UCAgaUeJaamJ6ampyio5eddJ+npXWrp6Fzr6MSsW+zow62aLijDQWyp6QGxMByqwgWmxh2DAACCAcKAA3TdQzQBwAJENsXdRTRJAcLAA/WeQkPABV7DgsTESQhACH5BAFkAAAALA8ADgCOAI4AoQD/AP///4fO69zx+QL/hI+py+2PxoC02ouztkOIuYXiSJZA533myrYlmqruTNcKHMv2zpN4rusJh5AfMEhMKo1HpPK5Yzad0CpLOqVatyFsVsu1BMbksvmMTqvJoM1gDY/Lx6K5/T5ud/H8eL0PeKYn8hZoSBdyaDg4UqjY9/eIx+gjyRdpKUf5kmmH2am2aeIIqvZZaia6QopqdtoaoHoFe/aKKtvCCmsLiuuii8qb6TsDDCosSUxjnImsqFzDLOm8GHaym3hrbSB9SN0HLdQd+D25nTAOmT18fnO8nty+kH5XrinPQD9nDxe+pe8HXjV8DgCu4ZfGnzWDaRAKIliBYS2BfBS2k1jGIRuI/xgwItoQyCJBjxpFQsTo0CRHiQhVcryGh5/LlzA9UVwzk2ZNOeVy6twJ55vPn0BN3XxIdFZAkP2S/lqqoanTpweP5pm6rCpTNEOxojO6NZVXG8ZedR3rbmLYq2ijqI1a5mzbea7gyZ1Ll0yku3jzBvjDt2/eOoEF0yVkeEmXxE8UdmCsBEw+D5CTeFAGozKRFL5waB4SQ9aPz0JyiDJCugcQSkxS8zgySIrrHU3aYJltY8oEL7hrZJGQpTeN3yemCJ+h+4Ds4y1qozvCvPnqeUCis5g+OYb1FaYfeN5eIjSFzOBJcOZAufyIyx0FqF/v+D1iN/I1mIxV/8IbwPnHf/+Ei19/DTiCSWGCkfKJgXOxcoqCY+liloBF/XWUg0mVZZWFOjEjjIYraQVgQuV144yHF0GVwT3MpSPUcfT01Js+9pgIBUAypWZQS58xlFJlLFkllWEoARkkXiQRWSRaHlG4VkULeoNkHDSuoohGYmG1pF5RqnjhNFtyuaElVnL1U5Z1NXnIlPp1MqaIJ72D5jMjldJmKPKY2dCXTm6DZ55xxhNGn36GWIqaytFSp5RWCAoWodo0FtQjiYIpTkBV6pkmESwaAOWfhVbK0wGGTGqHgTIiQA6mjwRmYwKAkHrHXTm6qo6nsJzFowK1OkpLXErFtMAlqrLDya602mRrry5KHQkAha8O24lJS3JKx7MPfpFcIs3q9d9sXjiHybbiCvdtdyNoWS2TMWLLngvVRlfuXRnBS5yEo4Br773m5ruKePzm0u6/uRhKQgEAOw==)

### 常见的错误写法

```html
<style>
  .box {
    width: 200px;
    height: 200px;
    margin: 50px;
    background-color: skyblue;
    position: relative;
  }
  .item {
    width: 100px;
    height: 100px;
    background-color: tomato;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .box:hover .item {
    /* 只有缩放，没有位移*/
    transform: scale(0.5);
    /* 上面代码等价于 transform: translate(0,0) scale(0.5) */
    /* 先缩小再位移 */
    transform: scale(0.5) translate(-50%, -50%);
    /* 先位移 再缩小 */
    /* transform: translate(-50%, -50%) scale(0.5); */
  }
</style>
<div class="box">
  <div class="item"></div>
</div>
```

鼠标未移入时效果

![image-20250106000853521](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADVCAIAAABR6xJnAAACjElEQVR4nO3UMY1CURRF0WHyJWAEP+MAA0j4BnCAH4zg4VESGpJfwNtk1mpvc4qduxtj/EDG7+wB8ESRtCiSFkXSokhaFEnL8uK2Xm8f28H/cTrsX1z9SFoUSYsiaVEkLYqkRZG0KJIWRdKiSFoUSYsiaVEkLYqkRZG0KJIWRdKiSFoUSYsiaVEkLYqkRZG0KJIWRdKiSFoUSYsiaVEkLYqkRZG0KJIWRdKiSFoUSYsiaVEkLYqkRZG0KJIWRdKiSFoUSYsiaVEkLYqkRZG0KJIWRdKiSFqW2QM2O53/Zk/4GuvxMnvCZn4kLYqkRZG0KJIWRdKiSFoUSYsiaVEkLYqkRZG0KJIWRdKiSFoUSYsiaVEkLYqkRZG0KJIWRdKiSFoUSYsiaVEkLYqkRZG0KJIWRdKiSFoUSYsiaVEkLYqkRZG0KJIWRdKiSFoUSYsiaVEkLYqkRZG0KJIWRdKiSFoUSYsiaVEkLYqkRZG0KJIWRdKiSFoUSYsiaVEkLYqkRZG0KJIWRdKiSFoUSYsiaVEkLYqkRZG0KJIWRdKiSFoUSYsiaVEkLYqkRZG0KJIWRdKiSFoUSYsiaVEkLYqkRZG0KJIWRdKiSFoUSYsiaVEkLYqkRZG0KJIWRdKiSFoUSYsiaVEkLYqkRZG0LLMHbLYeL7Mn8EZ+JC2KpEWRtCiSFkXSokhaFEmLImlRJC2KpEWRtCiSFkXSokhaFEmLImlRJC2KpEWRtCiSFkXSokhaFEmLImlRJC2KpEWRtCiSFkXSokhaFEmLImlRJC2KpEWRtCiSFkXSokhaFEmLImlRJC2KpEWRtCiSFkXSokhaFEmLImlRJC27McbsDfDgR9KiSFoUSYsiaVEkLXdHGw9AI+R7BwAAAABJRU5ErkJggg==)

上面代码 `.box:hover .item` 选择器中，不同代码，鼠标移入后效果

| transform: scale(0.5);                                       | transform: scale(0.5) translate(-50%, -50%);                 | transform: translate(-50%, -50%) scale(0.5);                 |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20250106000606952](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAADWCAIAAADTirD0AAACjElEQVR4nO3dMQ0CQRRF0YWsBIzgBwcYQAIGcIAfjOBhaGhIoN25Cee0U+wrbn67uzHGAgH72QPgTYtUaJEKLVKhRSq0SMX66+H6eG65gz9xOR5+PbmLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUq1tkD+HC5nWZP+OJ6vm/wFXeRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRinX2AD5s8wf7JneRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVOzGGLM3wLK4i3RokQotUqFFKrRIhRapeAGTBQ9Cc9yb7AAAAABJRU5ErkJggg==) | ![image-20250106000708985](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADcCAIAAAB25EOvAAACoElEQVR4nO3UMW0DURRFQa+1EEwkfMLABAxhCYSB+ZhIOHyXUSRrJTf5R5uZ9jW3OHrLGOMEGefZA+AXRdKiSFoUSYsiaVEkLYqkRZG0KJKWdee2Pb7/bAf/x+3jsnP1I2lRJC2KpEWRtCiSFkXSokhaFEmLImlRJC2KpEWRtCiSFkXSokhaFEmLImlRJC2KpEWRtCiSFkXSokhaFEmLImlRJC2KpEWRtCiSFkXSokhaFEmLImlRJC2KpEWRtCiSFkXSokhaFEmLImlRJC2KpEWRtCiSFkXSokhaFEmLImlRJC2KpEWRtCiSFkXSokhaFEmLImlRJC2KpEWRtCiSFkXSokhaFEmLImlRJC2KpEWRtCiSFkXSokhaFEmLImlRJC2KpEWRtCiSFkXSokhaFEmLImlRJC2KpEWRtCiSFkXSokhaFEmLImlRJC2KpEWRtCiSFkXSokhaFEmLImlRJC2KpGWdPeAgbl+fsye8sF3vsye8zY+kRZG0KJIWRdKiSFoUSYsiaVEkLYqkRZG0KJIWRdKiSFoUSYsiaVEkLYqkRZG0KJIWRdKiSFoUSYsiaVEkLYqkRZG0KJIWRdKiSFoUSYsiaVEkLYqkRZG0KJIWRdKiSFoUSYsiaVEkLYqkRZG0KJIWRdKiSFoUSYsiaVEkLYqkZZ094CC26332hIPwI2lRJC2KpEWRtCiSFkXSokhaFEmLImlRJC2KpEWRtCiSFkXSokhaFEmLImlRJC2KpEWRtCiSFkXSokhaFEmLImlRJC2KpEWRtCiSFkXSokhaFEmLImlRJC2KpEWRtCiSFkXSokhaFEmLImlRJC2KpEWRtCiSFkXSokhaFEmLImlZxhizN8APP5IWRdKiSFoUSYsiaVEkLYqkRZG0KJKWJyZQD04iUweZAAAAAElFTkSuQmCC) | ![image-20250106000735066](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAADXCAIAAAAGH1PiAAACb0lEQVR4nO3dMRHCQBRFUcJEAkbwgwMMREIM4AA/GMHDIgBouczsOWXSvOLOb3cZYxwgdawHgAr5Ayqkp0J6KqSnQnoqpLd++7E/nr/cwSS28+n9o1tIT4X0VEhPhfRUSE+F9FRIT4X0VEhPhfRUSE+F9FRIT4X0VEhPhfRUSE+F9FRIT4X0VEhPhfRUSE+F9FRIT4X0VEhPhfRUSE+F9FRIT4X0VEhPhfRUSE+F9FRIT4X0VEhPhfRUSE+F9FRIT4X0VEhPhfRUSE+F9FRIT4X0VEhPhfRUSE+F9FRIT4X0VEhPhfRUSE+F9FRIT4X0VEhPhfRUSE+F9FRIT4X0VEhPhfRUSE+F9FRIT4X01npAZrtd6gkf7Nd7PSHgFtJTIT0V0lMhPRXSUyE9FdJTIT0V0lMhPRXSUyE9FdJTIT0V0lMhPRXSUyE9FdJTIT0V0lMhPRXSUyE9FdJTIT0V0lMhPRXSUyE9FdJTIT0V0lMhPRXSUyE9FdJTIT0V0lMhPRXSUyE9FdJTIT0V0lMhPRXSUyE9FdKb9634OV9l/09uIT0V0lMhPRXSUyE9FdJTIT0V0lMhPRXSUyE9FdJTIT0V0lMhPRXSUyE9FdJTIT0V0lMhPRXSUyE9FdJTIT0V0lMhPRXSUyE9FdJTIT0V0lMhPRXSUyE9FdJTIT0V0lMhPRXSUyE9FdJTIT0V0lMhPRXSUyE9FdJTIT0V0lMhPRXSUyE9FdJTIT0V0lMhPRXSUyE9FdJTIT0V0lMhPRXSUyE9FdJTIT0V0lMhPRXSUyE9FdJTIT0V0lvGGPUGZucW0lMhPRXSUyE9FdJTIb0X/ScPRFv/Uk8AAAAASUVORK5CYII=) |
| 只有缩小，前面的位移丢掉了                                   | 先缩小，后面位移是相对缩小后的宽高而言                       | 先位移，水平垂直居中，再缩小                                 |

## 三、2D 转换实战应用

深入浅出，2D 转换 在企业项目中的实战应用。

### 1、旋转的三角形

![GIF2025-1-417-19-54](https://www.arryblog.com/assets/img/GIF2025-1-417-19-54.7712908b.gif)

:::details 点击查看完整源代码

```html
<style>
  .arrow {
    padding: 10px;
    width: 15px;
    height: 15px;
    border: 1px solid #ddd;
    margin: 20px;
  }
  /* 箭头样式 */
  .arrow::after {
    content: "";
    display: block;
    /* width: 15px; */
    height: 15px;
    box-sizing: border-box; /* 怪异盒子模型 */
    border-left: 1px solid #ddd;
    border-top: 1px solid #ddd;
    /* 过渡动画 */
    transition: transform 1s;
  }
  /* 位移+旋转，实现向上箭头 */
  .arrow-up::after {
    transform: translateY(25%) rotate(45deg);
  }
  /* 位移+旋转，实现向下箭头 */
  .arrow-down::after {
    transform: translateY(-25%) rotate(-135deg);
  }
  /* 鼠标移入，向上箭头变向下箭头 */
  .arrow-up:hover::after {
    transform: translateY(-25%) rotate(-135deg);
  }
  /* 鼠标移入，向下箭头变向上箭头 */
  .arrow-down:hover::after {
    transform: translateY(25%) rotate(45deg);
  }
</style>
<body>
  <div class="arrow arrow-up"></div>
  <div class="arrow arrow-down"></div>
</body>
```

:::

### 2、鼠标滑动图片放大

![GIF-2022-7-28-19-53-26](https://www.arryblog.com/assets/img/GIF-2022-7-28-19-53-26.6e4117cd.gif)

:::details 点击查看完整源代码

```html
<style>
  .box {
    width: 300px;
    height: 300px;
    /* border: 1px solid red; */
    margin: 100px;
    position: relative;
    overflow: hidden;
  }
  /* 黑色半透明遮罩层 */
  .box::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0);
    z-index: 2;
    transition: background-color 0.5s;
  }
  .box .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }
  .box .play {
    width: 60px;
    height: 60px;
    /* border: 1px solid red; */
    /* 以下4行代码，控制元素水平垂直居中 */
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: url("./images/play.png") no-repeat center;
    /* background-size: 60px 60px; */
    background-size: contain; /* 填充整个盒子 */
    opacity: 0;
    transition: transform 0.5s, opacity 0.5s;
    z-index: 3;
  }
  /* 鼠标移入，图片放大 */
  .box:hover .img {
    /* transform-origin: 50% 50%; */
    transform: scale(1.2);
  }
  /* 鼠标放上去，播放按扭动画 */
  .box:hover .play {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
  }
  .box:hover::before {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>

<div class="box">
  <!-- ::before -->
  <img src="./images/music.jpg" class="img" />
  <div class="play"></div>
</div>
```

:::

### 3、渐进式淡入动画

![GIF2025-1-50-35-02](https://www.arryblog.com/assets/img/GIF2025-1-50-35-02.902fed0a.gif)

```html
<style>
  body,
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  .imglist {
    width: 1100px;
    height: 250px;
    background-color: #000;
    margin: 50px auto;
    padding: 20px 10px;
    overflow: hidden;
  }
  .imglist li {
    width: 200px;
    height: 250px;
    float: left;
    margin: 0 10px;
  }
  .imglist li img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 等比缩放，正好覆盖容器 */
  }

  /* 定义延迟加载动画 */
  .animate-fadeIn {
    /* 
        动画名  动画时间  延迟时间  动画结束后如何将样式应用于目标元素（停留在最后一帧）
        */
    animation: fadeIn 1s var(--delay) both;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0; /* 透明度为0 */
      transform: translateY(calc(100% + 40px));
    }
    100% {
      opacity: 1; /* 透明度为1 */
      transform: translateY(0);
    }
  }
</style>

<ul class="imglist">
  <!-- 自动定属性，定义动画执行的延迟时间 -->
  <li class="animate-fadeIn" style="--delay: 0.1s">
    <img src="./images/01.jpg" />
  </li>
  <li class="animate-fadeIn" style="--delay: 0.2s">
    <img src="./images/02.jpg" />
  </li>
  <li class="animate-fadeIn" style="--delay: 0.3s">
    <img src="./images/03.jpg" />
  </li>
  <li class="animate-fadeIn" style="--delay: 0.4s">
    <img src="./images/04.jpg" />
  </li>
  <li class="animate-fadeIn" style="--delay: 0.5s">
    <img src="./images/05.jpg" />
  </li>
</ul>
```

### 4、圆环加载执示器

![GIF2025-05-2119-47-46](https://www.arryblog.com/assets/img/GIF2025-05-2119-47-46.3e21a46e.gif)

[cssloaders (opens new window)](https://cssloaders.github.io/)是一个非常好用的 CSS loading 动画库。 纯 CSS 实现的加载动画合集，代码简洁易用，可直接复制到项目中。

```html
<style>
  body {
    background-color: #000;
  }
  /* 圆环 */
  .progress-container {
    position: relative;
    box-sizing: border-box;
    width: 200px;
    height: 200px;
    margin: 50px auto;
    border-radius: 50%;
    border: 16px solid #333;
    position: relative;
    /* overflow: hidden; */
  }
  .progress-container .progress-bar {
    position: absolute;
    top: -16px;
    bottom: -16px;
    left: -16px;
    right: -16px;
    /* border: 1px solid red; */
    background-image: conic-gradient(#32c5a9 0%, transparent 40%);
    border-radius: 50%;
  }

  .progress-container::after {
    content: "";
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: #333;
    border-radius: 50%;
  }
  .progress-bar::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    background: #fff;
    top: 0;
    left: 50%;
    border-radius: 50%;
    /* 位移 */
    transform: translate(-50%, 2px);
    /* 阴影 */
    box-shadow: 0 0 4px 2px rgb(108, 199, 241);
  }

  /* 无限旋转动画*/
  .animate_roate {
    animation: rotate 1s ease-in-out infinite;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>

<div class="progress-container animate_roate">
  <!-- 进度条 -->
  <div class="progress-bar"></div>
</div>
```

## 四、3D 转换

在学习 3D 转换前，我们先看下下面的 3D 的坐标图，这样会更有利于我们后期对 3D 动画的理解。

在 3D 动画中，元素是围绕 3D 坐标`X，Y，Z`轴来变换的。

> 我们来看下面这个图

![image-20220808225002904](https://www.arryblog.com/assets/img/image-20220808225002904.716ea79f.png)

注：

- 元素的左上角坐标为（0，0，0）
- x 轴右边为正方向
- y 轴的下方为正方向
- z 轴垂直电脑屏幕，射向我们的那一头为正方向

> 在了解了 3D 坐标后， 我们还需要了解一个非常重要的概念：**透视**

### 1、perspective 透视

- 没有透视定义，不成 3D。
- 透视是指在平面上描绘物体的空间关系的方法或技术。
- 要在平面上描绘物体的空间立体感，需要遵顺透视原理中的 **近大远小** 的规则
- 当一个物体离我们越近，我们看到他会比离我们远的时候要大。

![image-20250104191913576](https://www.arryblog.com/assets/img/image-20250104191913576.8dde3bd6.png)

视点

- **视点**是绘画者（或观察者）眼睛的位置
- CSS3 中 3D transform 的 **透视点（视点）** 是在浏览器的前方！

![image-20250104190718054](https://www.arryblog.com/assets/img/image-20250104190718054.b861908b.png)

注：

- 在 css3 中，用`perspective`属性来设置视距，即模拟人站在离屏幕多远的地方来看电脑上显示的元素
- 比如`perspective:800px;`意思就是在离屏幕 800px （ z 轴 800px ) 的地方看到这个元素（元素在 z = 0 的位置）。
- 如果元素往**Z 轴正方向**移动，离我们越近，看到物体就越大，
- 如果元素往**Z 轴负方向**移动，离我们越远，看到的物体就越小
- `perspective`这个属性要设置在 3D 元素的 **父元素**上面，表示观察者距离**3D 场景**的虚拟距离

![1609428-20190801220139575-2128845822](https://www.arryblog.com/assets/img/1609428-20190801220139575-2128845822.9d2fca33.png)

### 2、translate 3D 位移

- translateX(x) 表示水平方向（x 轴）的位移量，与 2D 位移是一样的效果
- translateY(y) 表示垂直方向（y 轴）的位移量，与 2D 位移是一样的效果
- translateZ(z) 表示垂直于电脑屏幕方向（z 轴）的位移量
- translate3d(x,y,z) 表示元素在 x,y,z 三个坐标上的位移量，用来称动元素在 3D 空间中的位置

### 2.1、translateZ(z)

我们要能看到 3D 的效果，必需要配合`perspective` 属性，`perspective`属性用来定义透视强度。

```css
/* 视距为300px  相当于模拟人站在离电脑屏幕300px的位置看这个元素 */
perspective: 300px;
/* 当值为 0 或负值时，无透视变换 */
```

注：

当 perspective 的值为 300px，则 300px 就会成为当下显示效果的基准。在这个基准下

- `translateZ=0` 图形大小正常显示
- `0< translateZ<300` 图形变大
- `translateZ>=300` 图片不见，相当于图片在你的后面，你肯定是看不见的了
- `translateZ<0` 图形变小

:::details 点击查看完整源代码

```html
<style>
  .box {
    width: 150px;
    height: 150px;
    border: 2px solid red;
    float: left;
    margin: 100px 30px;
    /* perspective这个属性要设置在3D元素的父元素上面*/
    /* 设置视距为300px  */
    perspective: 300px;
  }
  .box .item {
    width: 100%;
    height: 100%;
    background-color: rgb(240, 230, 140, 0.7);
  }

  .z0 {
    /* 相当于元素在z轴 没有移动 */
    transform: translateZ(0px);
  }
  .z100 {
    /* 元素向Z轴正方向移动 100px  */
    transform: translateZ(100px);
  }
  .z-100 {
    /* 元素向Z轴负方向移动 100px  */
    transform: translateZ(-100px);
  }
</style>

<body>
  <div class="box">
    <div class="item z0">translateZ(0px)</div>
  </div>
  <div class="box">
    <div class="item z100">translateZ(100px)</div>
  </div>
  <div class="box">
    <div class="item z-100">translateZ(-100px)</div>
  </div>
</body>
```

:::

| perspective:300px;                                           |
| :----------------------------------------------------------- |
| ![image-20250105115426848](https://www.arryblog.com/assets/img/image-20250105115426848.abb3bf04.png) |

| perspective:900px                                            |
| :----------------------------------------------------------- |
| ![image-20250105115618317](https://www.arryblog.com/assets/img/image-20250105115618317.3fe609a2.png) |

注：

- 当`perspective:300px;`时，向前移动`100px`，离元素还差`200px`
- 发`perspective:900px;`时，向前移动`100px`，离元素还差`800px`
- 所以当`perspective:300px`时看到的要比`perspective:900px`时的更大。
- 其向后移动 100px，则看到的更小，原理类似

### 2.2、 translate3d(x,y,z)

- 表示元素在 x,y,z 三个坐标上的位移量，用来移动元素在 3D 空间中的位置
- **z 的值不能使用百分比，如果使用会被认为是无效属性**

:::details 点击查看完整源代码

```html
<style>
  .box {
    width: 150px;
    height: 150px;
    border: 2px solid red;
    float: left;
    margin: 100px 30px;
    /* 设置视距为300px */
    perspective: 300px;
    /* perspective: 900px; */
  }
  .box .item {
    width: 100%;
    height: 100%;
    background-color: rgb(240, 230, 140, 0.7);
  }
  .tz20x30y50 {
    /*  
        x轴正方向移动20px
        y轴正方向移动30px
        z轴正方向移动50px
        */
    transform: translate3d(20px, 30px, 50px);
  }
  .tz20x30y-50 {
    /*  
        x轴正方向移动20px
        y轴正方向移动30px
        z轴负方向移动50px
        */
    transform: translate3d(20px, 30px, -50px);
  }
  .tz-20x-30y-50 {
    transform: translate3d(-20px, -30px, -50px);
  }
</style>

<body>
  <div class="box">
    <div class="item tz20x30y50">translate3d(20px, 30px, 50px)</div>
  </div>
  <div class="box">
    <div class="item tz20x30y-50">translate3d(20px, 30px, -50px)</div>
  </div>
  <div class="box">
    <div class="item tz-20x-30y-50">translate3d(-20px, -30px, -50px)</div>
  </div>
</body>
```

:::

![image-20220728002401170](https://www.arryblog.com/assets/img/image-20220728002401170.8fada236.png)

### 3、rotate 3D 旋转

css 中通过给`transform`添加下以变换函数值来实现 3D 旋转效果

| 属性值      | 描述                                                         |
| :---------- | :----------------------------------------------------------- |
| rotateX(ax) | 表示元素绕`X`轴旋转一定的角度 ax 表示度数，可以为正，也可以为负 |
| rotateY(ay) | 表示元素绕`Y`轴旋转一定的角度 ay 表示度数，可以为正，也可以为负 |
| rotateZ(az) | 表示元素绕`Z`轴旋转一定的角度 ax 表示度数，可以为正，也可以为负 |

### 3.1、3D 旋转方向

![image-20211111235204058](https://www.arryblog.com/assets/img/image-20211111235204058.1ca767b4.png)

左手法则

我们并不需要死记的方式来记住不同轴上的正角和负角的旋转方向。我们可以通过左手法则来记忆。

| x 轴                                                         | y 轴                                                         | z 轴                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 大拇指方向指向 x 的正方向，剩下四个手指的方向为 x 轴旋转的正方向，那反过来就是反方向了 | 大拇指方向指向 Y 的正方向，剩下四个手指的方向为 Y 轴旋转的正方向，那反过来就是反方向了 | 大拇指方向指向 Z 的正方向，剩下四个手指的方向为 Z 轴旋转的正方向，那反过来就是反方向了 |
| ![image-20220727233218168](https://www.arryblog.com/assets/img/image-20220727233218168.a5ed6833.png) | ![5e6909fd9c797e6a257d39cabdcabb6](https://www.arryblog.com/assets/img/5e6909fd9c797e6a257d39cabdcabb6.b18d8da4.png) |                                                              |

### 3.2、rotateX、rotateY、rotateZ

:::details 点击查看完整源代码

```html
<style>
  .box {
    width: 150px;
    height: 150px;
    border: 2px solid red;
    float: left;
    margin: 50px 20px;
    /* 设置3D的透视距，你可以理解为站在多远的地方来看这个物体 */
    perspective: 600px;
  }
  .item {
    width: 150px;
    height: 150px;
    background-color: skyblue;
    font-size: 20px;
  }
  .rotateX40deg {
    transform: rotateX(40deg);
  }
  .rotateX-40deg {
    transform: rotateX(-40deg);
  }

  .rotateY40deg {
    transform: rotateY(40deg);
  }
  .rotateY-40deg {
    transform: rotateY(-40deg);
  }
  .rotateZ40deg {
    transform: rotateZ(40deg);
  }
  .rotateZ-40deg {
    transform: rotateZ(-40deg);
  }
</style>

<div class="box">
  <div class="item rotateX40deg">rotateX(40deg)</div>
</div>
<div class="box">
  <div class="item rotateX-40deg">rotateX(-40deg)</div>
</div>
<div class="box">
  <div class="item rotateY40deg">rotateY(40deg)</div>
</div>
<div class="box">
  <div class="item rotateY-40deg">rotateY(-40deg)</div>
</div>
<div class="box">
  <div class="item rotateZ40deg">rotateZ(40deg)</div>
</div>
<div class="box">
  <div class="item rotateZ-40deg">rotateZ(-40deg)</div>
</div>
```

:::

![image-20220727235542783](https://www.arryblog.com/assets/img/image-20220727235542783.cbee6636.png)

### 4、transform-style

设置元素的子元素是位于 3D 空间中还是平面中

| 值          | 描述                             |
| :---------- | :------------------------------- |
| flat        | 表示所有子元素在 2D 平面呈现。   |
| preserve-3d | 表示所有子元素在 3D 空间中呈现。 |

:::details 点击查看完整源代码

```html
<style>
  .box {
    width: 200px;
    height: 200px;
    border: 2px solid red;
    margin: 150px 150px;
    position: relative;
    /* 视距 */
    perspective: 300px;
    /* 设置元素的子元素是位于 3D 空间中  */
    /* transform-style: preserve-3d; */
  }

  .item {
    width: 200px;
    height: 200px;
    /* 定位元素 */
    position: absolute;
    left: 0;
    top: 0;
  }

  .flat {
    /* 设置元素的子元素是位于 2D 空间中  */
    transform-style: flat;
  }
  .preserve-3d {
    /* 设置元素的子元素是位于 3D 空间中  */
    transform-style: preserve-3d;
  }

  .rotatex60deg {
    background-color: khaki;
    /* x轴正方向顺转60deg */
    transform: rotateX(60deg);
  }
  .rotatey60deg {
    background-color: skyblue;
    /* y轴正方向顺转 60deg */
    transform: rotateY(60deg);
  }
</style>

<!-- 子元素位于 2D 平面中 -->
<div class="box flat">
  <div class="item rotatex60deg"></div>
  <div class="item rotatey60deg"></div>
</div>
<!-- 子元素位于 3D 平面中 -->
<div class="box preserve-3d">
  <div class="item rotatex60deg"></div>
  <div class="item rotatey60deg"></div>
</div>
```

:::

| transform-style:flat 效果                                    | transform-style:preserve-3d 效果                             |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20220728162515025](data:image/png;base64,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) | ![image-20220728162434982](data:image/png;base64,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) |

### 5、transform-origin

transform-origin 属性，设置元素的变换原点，即元素在变换时是以围绕那个点来发生变换的。

```css
/*
x： 表示x轴的坐标位置
y： 表示y轴的坐标位置
z: 表示z轴的坐标位置
*/
/* 前两个值的用法和 2D 变换原点的用法一样 */
transform-orign: x y z;

/*  如果只设置了x， y 坐标，则z的默认值为 0*/
transform-orign: x y;
```

- x , y 的值，可以长度值（px 或百分比%）还可以是预设的关键词。
- z 的值只能是长度值 px

**transform-origin 默认值为：**

```css
transform-origin: 50% 50% 0px;
```

- **50% 50%**：这表示变换原点在元素的水平和垂直方向上的中心位置。也就是说，如果不对 `transform-origin` 进行任何设置，元素的变换（如旋转、缩放等）将以其中心点为基准进行。
- **0**：这表示变换原点在 Z 轴（深度轴）上的位置为 0，即原点位于 2D 平面上，而不是在 3D 空间中偏移。

![transform-origin22](https://www.arryblog.com/assets/img/transform-origin22.0aa7da7b.png)

> 关于 3D 变换原点设置后对应的效果演示，在下面实战案例《创建长方体》中演示

### 6、perspective 透视对子元素影响

在所有子元素 `li`的父元素 `ul` 中设置视距 `perspective：300px`

```html
<style>
  body,
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  .container {
    width: 1200px;
    margin: 50px auto;
  }
  ul {
    list-style-type: none;
    perspective: 300px; /* 视距 - 对所有子元素的影响是不一样的 */
  }
  ul li {
    width: 200px;
    height: 250px;
    float: left;
    /* 对 li 进行旋转 */
    transform: rotateY(10deg);
  }
  /* 选择奇数项 */
  ul li:nth-child(odd) {
    background-color: skyblue;
  }
  /* 选择偶数项 */
  ul li:nth-child(even) {
    background-color: khaki;
  }
</style>

<div class="container">
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
```

在视觉上，子元素从左往右越来越小，两者间的间距也越来越大

![image-20250106184639065](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABNoAAAEoCAIAAAABiwuoAAAQGklEQVR4nO3dzW5jyXmAYdbPOST1Q5HsodSLAEZW2WSbvYEssg7gW/Ad5Q6C5B58H94F8SJBNkYQ2MbY7bh7RlmQPDpS9yCSyKPvkHoezIILT08ZGHD0qqq+Svf39xMAAAB4Wzl6AQAAALxHchQAAIAAchQAAIAAchQAAIAAchQAAIAAchQAAIAAchQAAIAAchQAAIAAchQAAIAAchQAAIAAchQAAIAAchQAAIAAchQAAIAAchQAAIAAchQAAIAA9XV/2398//lf/+33x10KPNMv7/6lpi/Rq+A9+tXvfv6bP/8sehW8I3+3mf/9X11OJpO//OnXn37/q+jlcBra+d/Ol/9wrD/t+88//tOv/+dYfxqj9TfL9h//ehG9iqe+/+9//uHzb6NXwU+q059drn9x4B9idxQARuo+egEAMCg5CgAAQAA5CgAAQAA5CgAAQAA5CgAjlaIXAACDkqMAMFJGGQFw3uQoAAAAAeQoAAAAAeQoAAAAAeQoAAAAAeQoAAAAAeQoAAAAAeQoAAAAAeQoAIxUil4AAAxKjgLASN1HLwAABiVHAQAACCBHAQAACCBHAWCk3B0F4LzJUQAYKXdHAThvchQAAIAAchQAAIAAchQAAIAAchQAAIAAchQAAIAAchQAAIAAchQAAIAAchQAAIAAchQAAIAAchQAAIAAchQARipFLwAABiVHAQAACCBHAQAACCBHAWCk7qMXAACDkqMAAAAEkKMAAAAEkKMAAAAEkKMAAAAEkKMAAAAEkKMAAAAEkKMAAAAEkKMAAAAEkKMAAAAEkKMAAAAEkKMAAAAEkKMAAAAEkKMAMFIpegEAMCg5CgAjdR+9AAAYlBwFAAAggBwFgJFyWBeA8yZHAWCkHNYF4LzJUQAAAALIUQAAAALIUQAAAALIUQAAAALIUQAAAALIUQAAAALIUQAAAALIUQAAAALIUQAAAALIUQAAAALIUQAAAALIUQAAAALIUQAAAALIUQAYqRS9AAAYlBwFgJG6j14AAAxKjgIAABBAjgIAABBAjgIAABBAjgLASBllBMB5k6MAMFJGGQFw3uQoAAAAAeQoAAAAAeQoAIyUu6MAnDc5CgAAQAA5CgAAQAA5CgAjZbIuAOdNjgIAABBAjgIAABBAjgIAABBAjgIAABBAjgIAABBAjgIAABBAjgIAABBAjgIAABBAjgIAABBAjgIAABBAjgIAABBAjgIAABBAjgIAABBAjgIAABBAjgIAABBAjgLASKXoBQDAoOQoAAAAAeQoAIzUffQCAGBQchQAAIAAchQAAIAAchQAAIAAchQAAIAAchQAAIAAchQAAIAAchQARipFLwAABiVHAWCkvDsKwHmTowAAAASQowAAAASQowAAAASQowAwUkYZAXDe5CgAAAAB5CgAjJTJugCcNzkKAABAADkKAABAADkKAABAADkKAABAADkKAABAADkKAABAADkKAABAADkKAABAADkKAABAADkKAABAADkKACOVohcAAIOSowAwUvfRCwCAQclRAAAAAshRABgph3UBOG9yFABGymFdAM6bHAWAkbI7CsB5k6MAMFJ2RwE4b3IUAEbK7igA502OAgAAEECOAsBIOawLwHmTowAwUg7rAnDe5CgAjJTdUQDOmxwFgJGyOwrAeZOjADBSdkcBOG9yFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgAByFAAAgABy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)

为了让同一父级的所有子元素从左往右倾斜的角度和大小在视觉上呈现一致。我们需要将 `perspective：300px` 添加到这些子元素上。

- 我们将`perspective：300px` 添加到每个 `li` 元素身上
- 在`li` 中创建子元素 `div` ，然后对该 `div` 元素做旋转。

```html
<style>
  body,
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style-type: none;
  }
  .container {
    width: 1200px;
    margin: 50px auto;
  }
  ul li {
    width: 200px;
    height: 250px;
    perspective: 300px; /* 视距 - 会创建自己的层叠上下文 */
    float: left;
    position: relative; /* 添加相对定位，后面通过 z-index 提升层级*/
  }
  ul li div {
    width: 200px;
    height: 250px;
    transform: rotateY(20deg); /* 旋转 */
    transition: transform 0.5s; /* 添加过渡动画 */
  }
  /* 选择奇数项 */
  ul li:nth-child(odd) div {
    background-color: skyblue;
  }
  /* 选择偶数项 */
  ul li:nth-child(even) div {
    background-color: khaki;
  }

  ul li:hover {
    z-index: 999; /* 提升层级 */
  }
  /* 让元素不再旋转 然后放大1.2倍 */
  ul li:hover div {
    transform: rotateY(0deg) scale(1.2);
  }
</style>

<body>
  <div class="container">
    <ul>
      <li><div></div></li>
      <li><div></div></li>
      <li><div></div></li>
      <li><div></div></li>
      <li><div></div></li>
      <li><div></div></li>
    </ul>
  </div>
</body>
```

![GIF2025-1-619-09-02](https://www.arryblog.com/assets/img/GIF2025-1-619-09-02.4a42f837.gif)

## 五、2D 与 3D 简单总结

深入浅出 CSS3 2D 和 3D 变换的常用属性、函数和重要属性的总结。

### 1、变换函数

- 位移变换函数：translate(x,y)、 translateX(x) 、 translateY(y) 、 translateZ(y)
  - x,y 的值为位移长度，单位可以是 px、百分比
  - **z 的值只能为 px 长度单位**
  - translate(x) 同等于 translate(x,0);
- 缩放变换函数：scale(x,y) 、scaleX(x)、 scaleY()
  - x,y 的值为数字，分别表示宽度和长度的缩放比例
  - scale(x) 表示 y 的值和 x 一样大，实现宽高等比缩放
- 斜切变换函数：skew(ax,ay)、 skewX(ax)、 skewY(ax)
  - ax、ay 分表示水平和垂直拉升，使元素与 x 轴和 y 轴发生的扭曲角度
- 旋转变换函数：rotate(ax) 、rotateX() 、 rotateY()、 rotateZ()
  - rotate 表示 2D 平面旋转，ax 表示旋转度数，为正，表示顺时针旋转，为负，表示逆时针旋转
  - rotateX( ax) 、rotateY(ay )、rotateZ(az )表示 3D 旋转,旋转的方向，可以通过左手法则来记忆。

### 2、重要属性

**perspective 视距**

- 用来模拟人站在离电脑屏幕多远的距离来看这个元素。
- 假设 div 的 `width:300px;height:300px;perspective:900px;`则表示人站在离屏幕 `900px` 的位置看现在的 div。看到 div 的大小就是我们设置的 `width:300px;` 和 `height:300px;` 的大小
- 当 div 的 `translateZ=0` 时，看到的元素大小就是 `width:300px` 和 `height:300px`
- 当 div 的 `0 < translateZ < 300px` 时，看到的元素要比实际大
- 当 div 的 `translateZ < 0` 时，看到的元素要比实际的小
- 当 div 的 `translateZ > 300px` 时，则看不到元素，因为元素在我们的后面。

**transform-style 子元素是否在 3D 空间下呈现**

| 值          | 描述                             |
| :---------- | :------------------------------- |
| flat        | 表示所有子元素在 2D 平面呈现。   |
| preserve-3d | 表示所有子元素在 3D 空间中呈现。 |

**`transform-origin:x y z;` 设置变换的原点**

- 默认值为 `transform-origin:50% 50% 0 ;`
- x y 的值可以是长度单位 px 和百分比% 或预设的关键字

> 预设关键字如下：

| 关键 字      | 描述                                          |
| :----------- | :-------------------------------------------- |
| left         | 原点为元素左边中间位置，同`left center`一样   |
| right        | 原点为元素右边中间位置，同`right center`一样  |
| top          | 原点为元素上边中间位置，同`top center`一样    |
| bottom       | 原点为元素下边中间位置，同`bottom center`一样 |
| center       | 原点为元素中间位置，同`center center`一样     |
| top left     | 原点为元素左上角，相当于坐标（0 0）           |
| top right    | 原点为元素右上角                              |
| left bottom  | 原点为元素左下角                              |
| right bottom | 原点为元素右下角                              |

### 3、注意事项

transform 后面多个变换函数，用空格隔开，多个变换函数顺序不一样，结果会不一样。

比如：先旋转会改变坐标轴的方向

## 六、实战案例

针对性应用场景训练

### 1、飞行的火箭

![GIF-2022-7-28-19-37-02](https://www.arryblog.com/assets/img/GIF-2022-7-28-19-37-02.cca09d54.gif)

开发步骤：

- 第一步：插入火箭图，然后利用自定义动画，实现火箭沿左上角和右下角方向来会移动
- 第二步：定义一个宽 1px 和高 160px，背景颜色为蓝色的盒子，然后定位到火箭旁边，再旋转一定的角度
- 第三步：自定义动画，实现线条（气流）从上往下移动（Y 轴移动），然后从透明到不透明再到透明的效果

:::details 点击查看完整源代码

```html
<style>
  .huojian {
    width: 300px;
    position: absolute;
    left: 300px;
    top: 200px;
  }

  /* 调用震动动画 */
  .animation-vibrate {
    animation: vibrate 1s linear 0s infinite alternate;
  }
  /* 定义震动动画 */
  @keyframes vibrate {
    0% {
      transform: translate(-30px, -30px);
    }
    100% {
      transform: translate(30px, 30px);
    }
  }

  .line {
    width: 1px;
    height: 160px;
    background-color: blue;
    position: absolute;
    /* animation: move 1s linear var(--delay) infinite backwards; */
  }
  .pos1 {
    top: 200px;
    left: 400px;
    /* animation: move 1s linear var(--delay) infinite  backwards; */
  }
  .pos2 {
    top: 240px;
    left: 450px;
    /* animation: move 1s linear var(--delay) infinite backwards ; */
  }
  .pos3 {
    top: 290px;
    left: 500px;
    /* animation-fill-mode: backwards; */
    /* animation: move 1s linear var(--delay) infinite backwards; */
  }
  .pos4 {
    top: 320px;
    left: 550px;
    /* animation: move 1s linear var(--delay) infinite backwards; */
  }

  /* 倾斜从上往下移入再移出动画 */
  .animation-move {
    animation: move 1s linear var(--delay) infinite backwards;
  }

  @keyframes move {
    0% {
      opacity: 0;
      transform: rotate(55deg) translateY(-200px);
    }
    100% {
      opacity: 1;
      transform: rotate(55deg) translateY(200px);
    }
  }
</style>

<body>
  <!-- 火箭图 -->
  <img src="./images/huojian.jpeg" class="huojian animation-vibrate" />
  <!-- 气流 -->
  <div class="line pos1 animation-move" style="--delay: 0s"></div>
  <div class="line pos2 animation-move" style="--delay: 0.4s"></div>
  <div class="line pos3 animation-move" style="--delay: 0.6s"></div>
  <div class="line pos4 animation-move" style="--delay: 0.2s"></div>
  <!-- 添加音乐 现代浏览器不支持音频自动播放，所以音频没有效果
处理方式
用户进入界面前，让他点击开始按扭，播放音乐，看到游戏画面（需要结合JS实现）
因为不支持自动播放音乐--所以课上没讲
-->
  <audio src="./images/huojian.mp3" autoplay loop></audio>
</body>
```

:::

### 2、创建 3D 导航

![GIF-2022-7-28-19-12-06](https://www.arryblog.com/assets/img/GIF-2022-7-28-19-12-06.4f6f5b7b.gif)

开发步骤

- 第一步：利用 ul 标签来制作简单的导航布局
- 第二步：在每个 li 中添加一个 div 用来实现旋转效果，后面旋转就是要旋转这个 div
- 第三步：利用 transform 来调整两个 a 标签的构成的盒子的位置

:::details 点击查看完整源代码

```html
<style>
  body,
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  ul li {
    float: left;
    /* 视距 站在多元的地方来看里面的3D动画*/
    perspective: 300px;
    /* border: 1px solid red; */
  }
  ul {
    height: 50px;
    background-color: skyblue;
  }
  ul li .box {
    height: 50px;
    /* 创建一个 3D的空间的 */
    transform-style: preserve-3d;
    transition: transform 0.4s;
    /* 设置旋转的中心点 */
    transform-origin: 50% 50% -25px;
  }
  ul li .box a {
    display: block;
    height: 50px;
    line-height: 50px;
    color: #fff;
    padding: 0px 20px;
  }
  ul li .box a.front {
    background-color: skyblue;
  }
  ul li .box a.bottom {
    background-color: khaki;
    /* 设置旋转的中心点为 顶部的中间 */
    transform-origin: top center;
    /* X 轴负方向旋转90deg  */
    transform: rotateX(-90deg);
  }
  ul li:hover .box {
    /* X 轴正方向旋转90deg  */
    transform: rotateX(90deg);
  }
</style>
<body>
  <ul>
    <li>
      <div class="box">
        <a href="" class="front">首页</a>
        <a href="" class="bottom">首页</a>
      </div>
    </li>
    <li>
      <div class="box">
        <a href="" class="front">前端开发</a>
        <a href="" class="bottom">前端开发</a>
      </div>
    </li>
    <li>
      <div class="box">
        <a href="" class="front">架构师</a>
        <a href="" class="bottom">架构师</a>
      </div>
    </li>
    <li>
      <div class="box">
        <a href="" class="front">关于我们</a>
        <a href="" class="bottom">关于我们</a>
      </div>
    </li>
  </ul>
</body>
```

:::

### 3、翻书效果

![GIF-2022-7-28-19-10-50](https://www.arryblog.com/assets/img/GIF-2022-7-28-19-10-50.e4478efa.gif)

TIP

- 构建.book 盒子，然后在.book 中构建.page,后面在旋转翻页效果时，旋转的就是.page 这个盒子
- .page 沿着 Y 轴的反方向旋转 180deg 来实现翻页效果，翻页时，把转换原点设置为左边中间位置（transform-origin:left;
- 在.page 盒子中，构建两个 div，.front 作为一页的正面，.back 作为一页的反面。用绝对定位控制位置
- 要实现翻转时，能看到一页的背面，则给.back 盒子添加 transform:translateZ(-1)，使其与正面拉开一点距离
- 要使翻转后能看到书的反面是正面朝上的，则需要先把.back 旋转 180deg ，即 transform:rotateY(-180deg)

:::details 点击查看完整源代码

```html
<style>
  .book {
    width: 300px;
    height: 400px;
    margin: 150px 0 0 300px;
    /* 透视的视距 */
    perspective: 1000px;
  }
  /* 等下翻页，翻转的就是这个盒子 */
  .page {
    width: 300px;
    height: 400px;
    /* 定位 */
    position: absolute;
    left: 0;
    top: 0;
    /* 子元素在3D空间中呈现 */
    transform-style: preserve-3d;
    /* 旋转的基点为左边中间 */
    transform-origin: 0 50%;
    /* 过渡动画 */
    transition: all 2s;
  }
  /* 每页宽和高 */
  .page-item {
    width: 300px;
    height: 400px;
  }
  /* 正面背景色 */
  .front {
    background-color: powderblue;
  }
  /* 反面 样式  */
  .back {
    background-color: tomato;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: -1;
    /* 延z轴向后移动1像素，这样就能看到反面的，
        然后绕Y轴旋转-180deg */
    transform: translateZ(-1px) rotateY(-180deg);
  }

  /* 鼠标滑到书上，让第一页沿着Y轴旋转-180deg*/
  .book:hover .first {
    /* 绕Y轴旋转-180deg */
    transform: rotateY(-180deg);
  }
</style>
<body>
  <div class="book">
    <!-- 每一页分为前（正面）和 后（反面）两部分 -->
    <div class="page first" style="z-index: 2">
      <!-- 每页正面  -->
      <div class="page-item front">
        <img src="images/cover1.jpg" alt="" />
      </div>
      <!-- 每页反面 -->
      <div class="page-item back">
        <img src="./images/cover2.jpg" alt="" />
      </div>
    </div>
    <!-- 底页内页 -->
    <div class="page">
      <img src="./images/front.jpg" alt="" />
    </div>
    <!-- 这个效果，不显示底页正面，所以不用绘制 -->
  </div>
</body>
```

:::

### 4、创建长方体。top

![GIF2025-1-721-50-25](https://www.arryblog.com/assets/img/GIF2025-1-721-50-25.1ba5d718.gif)

![image-20250107204733741](https://www.arryblog.com/assets/img/image-20250107204733741.92418e75.png)

开发步骤：

- 第一步：首先创建一个名为 `.container` 的容器，用来放立方体。我们站在离这个容器 `900px` 的地方，来观察里面的立方体。所以设置`perspective: 900px;`
- 第二步：创建一个名为 `.mybox` 的容器，用来构建立方体。所以需要设置 `transform-style: preserve-3d;`，将子元素在 3D 空间展示
- 第三步：在容器中构建 6 个长方形，分别代表正方体的 6 个面
- 第四步：通过定位把元素叠在一起，然后通过位移，旋转来移动每个面的位置
- 第五步：给容器设置一个旋转角度，这样看正方体更立体一些

:::details 点击查看完整源代码

```html
<style>
  .container {
    /* width: 800px;
        height: 800px; */
    margin: 100px auto;
    /* border: 2px solid red; */
    perspective: 1000px; /* 视距 - 站在离屏幕 1000px的位置来看里面的立方体*/
  }

  .container:hover .mybox {
    transition: transform 10s linear;
    /*  transform-origin: 50% 50% -100px; 旋转的中心点 */
    transform: rotateX(-180deg);
  }

  /* 创建的立方体盒子 长 400px   高 300px   厚 200px */
  .mybox {
    width: 400px;
    height: 300px;
    transform-origin: 50% 50% -100px; /* 旋转的中心点 */
    /* border: 2px solid blue; */
    margin: 150px auto;
    position: relative; /* 相对定位*/
    transform-style: preserve-3d;
    /* animation: rotate 10s linear infinite; */
  }

  /* @keyframes rotate {
    0% {
    transform: rotateX(0deg) rotateY(0deg);
    }
    100% {
    transform: rotateX(-360deg) rotateY(-360deg);
    }
    } */

  .mybox .face {
    position: absolute;
    top: 0;
    left: 0;
  }

  /* 前面和后面 */
  .mybox .before,
  .mybox .after {
    width: 400px;
    height: 300px;
  }
  .mybox .before {
    background-color: rgb(139, 45, 226, 0.5);
  }
  .mybox .after {
    background-color: rgb(125, 248, 1, 0.5);
  }

  /* 上面和下面 */
  .mybox .top,
  .mybox .bottom {
    width: 400px;
    height: 200px;
  }
  .mybox .top {
    background-color: rgb(130, 200, 228, 0.5);
  }
  .mybox .bottom {
    background-color: rgb(253, 99, 72, 0.5);
  }

  /* 左边和右边 */
  .mybox .left,
  .mybox .right {
    width: 200px;
    height: 300px;
  }
  .mybox .left {
    background-color: rgb(241, 224, 71, 0.5);
  }
  .mybox .right {
    background-color: rgb(4, 4, 245, 0.5);
  }

  /* 制后面这个面*/
  .mybox .after {
    transform: translateZ(-200px);
  }
  /* 制作顶部的面 */
  .mybox .top {
    transform-origin: bottom;
    /* 位移 */
    transform: translateY(-100%) rotateX(90deg);
  }
  /* 制作下面的面 */
  .mybox .bottom {
    transform-origin: top;
    transform: translateY(300px) rotateX(-90deg);
  }
  /* 制作左边的面 */
  .mybox .left {
    transform-origin: right;
    transform: translateX(-100%) rotateY(-90deg);
  }

  /* 制作右边的面 */
  .mybox .right {
    transform-origin: left;
    transform: translateX(400px) rotateY(90deg);
  }
</style>

<!-- 用来方立方体的容器 -->
<div class="container">
  <!-- 创建立方体的盒子 -->
  <div class="mybox">
    <div class="face before">最前面</div>
    <div class="face after">最后面</div>
    <div class="face top">top-上面</div>
    <div class="face bottom">bottom - 下面</div>
    <div class="face left">左边</div>
    <div class="face right">右边</div>
  </div>
</div>
```

:::

### 4.1、改变 transform-origin 变换原点

可以将上面的对应 css 修改如下，演示 transform-origin 变换原点时，不同的旋转效果

```css
.mybox {
  /* transform: rotateX(-20deg) rotateY(-30deg); */
  /* 将上面代码注释，修改成如下 */
  transform: rotateY(0deg);
  /* 可以修改下面变换原点的值，来看不同的旋转效果 */
  transform-origin: 0% 0% -100px;
  /* transform-origin: 0% 0% 0px; */
  transform-origin: 50% 50% -100px;
}

/* 鼠标移入时，旋转立方体 */
.mybox:hover {
  /*  transform: rotateX(0deg) rotateY(-360deg); */
  /* 将上面代码注释，修改成如下 */
  transform: rotateY(-360deg);
}
```

变换原点为：`transform-origin: 0% 0% 0px` 时效果

![GIF2025-1-517-52-14](https://www.arryblog.com/assets/img/GIF2025-1-517-52-14.5067f90b.gif)

变换原点为：`transform-origin: 50% 50% -100px` 时效果

![GIF2025-1-517-54-24](https://www.arryblog.com/assets/img/GIF2025-1-517-54-24.70afd0d7.gif)

### 5、环环相扣效果

![image-20250522170237478](https://www.arryblog.com/assets/img/image-20250522170237478.041eca8e.png)

```html
<style>
  .wrap {
    /* 子元素位于 3D场景中 */
    transform-style: preserve-3d;
  }
  .ring {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    float: left;
  }
  .tomato {
    border: 10px solid tomato;
  }
  .skyblue {
    border: 10px solid skyblue;
    margin-left: -40px; /* 向左移动 40px */
    transform-origin: center 40px; /* 旋转的中心点*/
    /* 沿X轴正方向旋转的度数  */
    transform: rotateX(1deg);
  }
</style>

<div class="wrap">
  <div class="ring tomato"></div>
  <div class="ring skyblue"></div>
</div>
```

## 八、专项案例训练（作业）

> 根据课程进度完成以下针对性案例开发，开发过程要求：

**具体开发流程**

- 利用 PS 软件标记好切图 -> 导出至蓝湖（国内企业用的多）中
- 前端开发人员在蓝湖打开设计稿 ->下载网页开发所需的素材 -> 在蓝湖中量取尺寸 -> 即可开发静态页面

**PSD 的源文件设计稿**

- 以下案例对应的 PS 设计稿，已发布到钉钉群作业中。
- PS 与蓝湖结合标注、切图开发相关视频教程已上传至钉钉群

**视频讲解**

> 点击查阅：[30 个 HTML+CSS 实战小案例详解(opens new window)](https://www.icodingedu.com/goods/show/82?targetId=91&preview=0)

**有任何疑问可以联系添加的助理老师（或博客右侧的晓冉老师）**

我们把 CSS/CSS3 基础知识全部学习完之后，会有 4 大项目开发（PC 端，响应式，移动端）会按照企业真实团队协作的方式，用 4 个项目来完整的实践。

### 1、CSS3 动画（鼠标移入文字滑入动画效果）

![CSS表格布局](https://www.arryblog.com/assets/img/17.76eb20e2.jpg)

:::details 点击查看完整版视频讲解

<iframe width="100%" height="405" frameborder="0" src="https://www.ixigua.com/iframe/7080851877612651023?autoplay=0" referrerpolicy="unsafe-url" allowfullscreen="allowfullscreen"></iframe>

:::

### 2、CSS3 动画（鼠标悬停缩放动画）

![CSS3动画-鼠标悬停缩放动画](https://www.arryblog.com/assets/img/18.8defe37f.jpg)

:::details 点击查看完整版视频讲解

<iframe width="100%" height="405" frameborder="0" src="https://www.ixigua.com/iframe/7081206834199331343?autoplay=0" referrerpolicy="unsafe-url" allowfullscreen="allowfullscreen"></iframe>

:::

### 3、CSS3 动画（鼠标移入旋转动画）

![CSS3动画-鼠标移入旋转动画](https://www.arryblog.com/assets/img/19.8ad15f93.jpg)

:::details 点击查看完整版视频讲解

<iframe width="100%" height="405" frameborder="0" src="https://www.ixigua.com/iframe/7081595203181937192?autoplay=0" referrerpolicy="unsafe-url" allowfullscreen="allowfullscreen"></iframe>

:::

### 4、CSS3 开发 Loading 加载动画

![CSS3开发Loading加载动画](https://www.arryblog.com/assets/img/20.4ee96db8.jpg)

:::details 点击查看完整版视频讲解

<iframe width="100%" height="405" frameborder="0" src="https://www.ixigua.com/iframe/7081966082273215006?autoplay=0" referrerpolicy="unsafe-url" allowfullscreen="allowfullscreen"></iframe>

:::

### 5、CSS3 开发吃豆豆动画效果

![CSS3开发吃豆豆动画效果](https://www.arryblog.com/assets/img/22.cd3c54c7.jpg)

:::details 点击查看完整版视频讲解

<iframe width="100%" height="405" frameborder="0" src="https://www.ixigua.com/iframe/7082683682427044389?autoplay=0" referrerpolicy="unsafe-url" allowfullscreen="allowfullscreen"></iframe>

:::

### 6、鼠标悬停 3D 旋转动画效果

![鼠标悬停3D旋转动画效果](https://www.arryblog.com/assets/img/23.aa2b6c48.jpg)

:::details 点击查看完整版视频讲解

<iframe width="100%" height="405" frameborder="0" src="https://www.ixigua.com/iframe/7083051516591866404?autoplay=0" referrerpolicy="unsafe-url" allowfullscreen="allowfullscreen"></iframe>

:::

### 7、3D 旋转木马效果

![3D旋转木马效果](https://www.arryblog.com/assets/img/24.f7ae49eb.jpg)

:::details 点击查看完整版视频讲解

<iframe width="100%" height="405" frameborder="0" src="https://www.ixigua.com/iframe/7083420001914487336?autoplay=0" referrerpolicy="unsafe-url" allowfullscreen="allowfullscreen"></iframe>

:::

