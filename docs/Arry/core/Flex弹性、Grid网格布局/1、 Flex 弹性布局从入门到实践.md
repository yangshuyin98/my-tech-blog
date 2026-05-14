---
title: "Flex 弹性布局从入门到实践"
source: "https://www.arryblog.com/guide/webapp/"
category: "Flex"
order: 1
---

# Flex 弹性布局从入门到实践

TIP从入门到实践从入门到实践从入门到实践从入门到实践

传统的**浮动+定位布局**兼容性好，但布局繁琐，在移动端应用起来相对麻烦。而我们今天要学习的 Flex 弹性布局，操作方便，布局极为简单，非常适合移动端布局。当然 Flex 现在在 PC 端和移动端都应用很广泛。

## 一、Flex 布局的基本概念

接下来让我们一起来学习 Flex 弹性布局，首先我们来了解下 Flex 布局相关的一些基本概念

- 什么是 Flex 布局
- 什么是 Flex 容器（`Flex container`) 和 Flex 项目（`Flex item`）
- 什么是主轴，什么是交叉轴
- Flex 项目的默认表现形式

### 1、什么是 Flex 布局

- `Flex`是`Flexible Box`的缩写，意为“弹性盒子”。
- `Flex`布局是一种一维的布局模型，它给`flexbox`的**子元素**之间提供了强大的空间分布和对齐能力
- 我们说`flexbox` 是一种一维的布局，是因为一个`flexbox`一次只能处理一个维度上的元素布局，一行或者一列

### 2、什么是 Flex 容器（Flex container）和 Flex 项目（Flex item）

- 采用**Flex 布局**的元素，称为 **Flex 容器**（`flex container`），简称“容器”。

- **Flex 容器**的所有**直接子元素**自动成为容器成员，称为 **Flex 项目**（`flex item`），简称“项目”。

- 通过给元素添加

  ```
  display:flex;
  ```

  或

  ```
  display:inline-flex;
  ```

  来指定元素为 Flex 布局容器

  - `display:flex;` 弹性布局，元素自身以块级元素显示
  - `display:inline-flex;` 弹性布局，元素自身以行内块元素呈现

- 任何一个元素都可以指定为 Flex 布局

- Flex 布局项目（子元素）的`float`、`clear`和`vertical-align`属性将失效。

> 以下代码中 `.flex-container` 盒子为 `Flex` 容器 ，里面的子元素 `.flex-item` 为 `Flex` 项目

```html
<style>
  .flex-container {
    /* 布局方式：弹性布局 ，元素自身以块级元素显示 */
    display: flex;
    /* 布局方式：弹性布局，元素自身以行内块元素呈现 */
    display: inline-flex;
    background-color: skyblue;
  }
  .flex-item {
    width: 100px;
    height: 100px;
    margin: 10px;
    background-color: pink;
  }
</style>

<!-- flex-container flex 容器 -->
<div class="flex-container">
  <!-- 所有直接子元素为flex项目 -->
  <div class="flex-item">Flex项目</div>
  <div class="flex-item">Flex项目</div>
  <div class="flex-item">Flex项目</div>
  <div class="flex-item">Flex项目</div>
</div>
```

| inline-flex                                                  | flex                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20220805221516033](data:image/png;base64,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) | ![image-20220805221431013](data:image/png;base64,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) |

### 3、什么是主轴，什么是交叉轴

- **Flex 容器** 默认存在两根轴：水平的主轴（main axis）和 垂直的交叉轴（cross axis）
- 主轴的开始位置（与边框的交叉点）叫做`main start` ，结束位置叫做`main end`；
- 交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`
- **Flex 项目**默认沿主轴排列，（即 Flex 项目默认从左往右沿水平排列）。
- 单个**Flex 项目**占据的主轴空间叫做`main size`(主轴尺寸），占据的交叉轴空间叫做`cross size`（交叉尺寸）

![bg2015071004](https://www.arryblog.com/assets/img/bg2015071004.8b402883.png)

### 4、Flex 项目的默认表现形式

当 `flex` 容器和 `flex` 项目没有添加任何 **Flex 容器** 和 **Flex 项目**相关属性时，flex 项目默认的表现形式如下：

- 子元素（项目）排列为一行 (`flex-direction` 属性的初始值是 `row`)。
- 子元素（项目）从主轴的起始线开始排列
- 子元素（项目）不会在主维度方向拉伸（放的下，不会拉伸），但放不下，会缩小
- 子元素（项目）没有设置 height 时，元素被拉伸来填充交叉轴大小（单行时项目的高度等于容器高），设置了高，则按设置高显示。
- 如果 flex 容器能放下所有子元素时，子元素设置了 width，则宽为 width 大小，没有设置，则宽为元素内容宽。（因为 `flex-basis` 默认值为 `auto` )
- 子项默认放不下时，不会换行（因为`flex-wrap` 属性默认为值 `nowrap`）

**代码演示**

```html
<style>
  .flex-container {
    padding: 10px;
    /* 容器宽为 200px ，子项放不下时，子项宽会缩小 */
    width: 200px; /* 将宽度去掉 或 修改成1000px 后，看不同效果 */
    height: 200px;
    background-color: skyblue;
    /* 弹性布局 */
    display: flex;
  }
  .flex-item {
    /* 未设置高度 */
    width: 100px;
    line-height: 50px;
    font-size: 30px;
    color: #fff;
    text-align: center;
    background-color: tomato;
    margin: 5px;
  }
</style>
<body>
  <div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
  </div>
</body>
```

- `.flex-container` 宽没有设置，与浏览器一样大小时，子项可以完全放下

![image-20250107160309757](https://www.arryblog.com/assets/img/image-20250107160309757.9443c4fb.png)

- `.flex-container` 宽为 `200px` ，所有子项宽加起来 `400px`，大于了容器宽。但元素并没换行，而是缩小宽度，自动压缩到容器中显示。

![image-20220805225626873](data:image/png;base64,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)

- `.flex-container` 宽为 `50px`，此时子项缩小到只有内容宽时，容器还是放不下，则会溢出。

  ![image-20250107160859834](data:image/png;base64,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)

::: warning 注：

`.flex-item`没有设置高度时，其高度会被拉伸与父容器`.flex-container`的高一样大小。

:::

## 二、Flex 容器属性

接下来我们来学习 Flex 容器相关的属性，以下 6 个属性都是设置在**Flex 容器**上

| 属性名          | 说明                                                   |
| :-------------- | :----------------------------------------------------- |
| flex-direction  | 设置主轴的方向                                         |
| flex-wrap       | 设置（项目）子元素是否换行                             |
| flex-flow       | 复合属性，相当于同时设置了 flex-direction 和 flex-wrap |
| justify-content | 设置主轴上的（项目）子元素排列方式                     |
| align-items     | 设置交叉轴上的（项目）子元素排列方式 **（单行）**      |
| align-content   | 设置多轴线在交叉轴上排列方式 **（多行）**              |

### 1、flex-direction 设置主轴方向

flex-direction 属性决定了 Flex 容器的**主轴方向**，即 Flex 项目的排列方向

- 默认主轴方向就是 x 轴，水平向右
- 默认交叉轴就是 y 轴，垂直向下

**语法**：

```css
/* 主轴为行（x轴），水平向右 */
flex-direction: row;
```

**flex-direction 属性的 4 个值**

| 属性值         | 说明                                                         |
| :------------- | :----------------------------------------------------------- |
| row            | （默认值）主轴为水平方向，起点在左端。（即：交叉轴在垂直方向，起点在上边框位置 |
| row-reverse    | 主轴为水平方向，起点在右端。（即：交叉轴在垂直方向，起点在元素上边框位置） |
| column         | 主轴为垂直方向，起点元素上边框位置。（即：交叉轴为水平方向，起点在左端） |
| column-reverse | 主轴为垂直方向，起点在下沿。 (即：交叉轴为水平方向，起点在左端 ） |

**案例演示：**

```html
<style>
  .flex-container {
    /* 布局方式：弹性布局，元素自身以行内块元素呈现 */
    display: inline-flex;
    /* 定义主轴方向，可选值：row、row-reverse、column、column-reverse */
    flex-direction: row;
    padding: 10px;
    background-color: skyblue;
  }
  .flex-item {
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 30px;
    color: #fff;
    text-align: center;
    background-color: tomato;
    margin: 10px;
  }
</style>
<body>
  <div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
  </div>
</body>
```

> flex-direction 属性，不同值的表现效果如下：

| row                                                          | row-reverse                                                  | column                                                       | column-reverse                                               |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20220805223910977](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAABaCAIAAAA9yY1RAAAFHElEQVR4nO3bf2jUdRzH8aerXbCW62qcF7JjcSpOEM/oBnYjOio6ZOpwgzIkE1SiEbX8YyMYEvOPSeGSun/0DxGEETiQtigLmf+cUgZOhLmKg2GIY61GsIRu6Ppjdzo3f+Tte/vce70efx3f3bj3cc997/P9sSVTU1OdF8YQsaNtfWWJ6xlE8qFwxSSFKyYpXDFJ4YpJCldMUrhiksIVkxSumKRwxSSFKyYpXDFJ4YpJCldMUrhiksIVkxSumKRwxSSFKyY9Os/fb0tu92QOb3U2H8/7d/WOFsZ83hHa44pRCldMUrhiksIVkxSumKRwxSSFKyYpXDFJ4YpJCldMUrhiksIVk4os3HVxVgddDyEGzPfuMO+Eeb+dtUGGjjDU43qYfAXiNDWxuooy3+2N42lSJzjZ726sfAUiJN5g7Qoqym/v4iYnuHqR747w44jD0Yoh3CCJHWyMU+Z6kHlKdLAlSumc7f4w9a3U1vFZB6MO5spfcyfL52wsLac6xq41hA5y4ryDqQDX4YbZ+iaxKBW+Bz+32LXQFM0+HL9COs0kUM7KGirLAQIxmlvY1+Vuwof3CDDz7YA/zKoQJVDiJ/Eh17aRcjOau3DfSlIXnvEFlKHUfr5/XebLA7O/Q+s7aYgALI9T30Wfk8ny8vtlvvmCVPqOjYFGPtpNOeDnld2kjjgZzd3BWWBZ7sUzDPW4XTB547de9rbc5Y30tfFrBgAfqxsXfKx5ONQyu1pgtIcfchufDi/wRLc4PatwM8NwP/s386mbv1pPdfFx8p4//Dn3ST8ZWphpCuv0leyDsqdcjeBuqdC3n6EBZ6++wP7+x/UEhXH9T1ev7G6P+/+pFngmt2dy90l76YXcufY/5iwkFkqRXYBYnII8m1shXDvldBIvBBp5qQaACc46W+MVw3ncxS7xAVUA3EzzteVj0OooLzbyfIQyIEPqAN87m0XhFlhtK1si2ceXvjJ2AQLYeZjYnAPK8TTfHuS0s3UCWioUVn0HO+PZa2kjp/jc/joBuJnhRoaKFW6n0B63QMK8285zuYOYq/0kTV0zu+WXFCVpAH+IJ0rxhyjzUVnDxho21JFsZ9jNXAq3ANbtZvsm/NMXAjNc6uZQt+OR8pY6NvuibqyZhtfw+/BHea+Dve1O5tJSwWv1HbzTmK12coTuFsPV3lUqySfHuA5ARZRtbm5DVbieauqiIXeD2HAv+952ewRTKKM9DOZOj6za5GQELRW8k+gkkTvBeSbJcYM34P53I+MQBCgtd/L6CtcjgR1smj7tNcHJVvoW4452pqWPZx/ccPP6Wip4pCHOYwAMdS/+agkSyi1tx9xcule4nrj1QU5w0ez/Hc3yeiu19zjwamqlevqcyQin3ayItFTwRIyl0w981B2m7r7PPb/Hxr3kVVFejbN5gLOnGOxnGAjzch0bElT7s88Z7GXQzXQK11s+lj/ojltHZ+zzFIywNcLW1jk/mD4/7ezrReF6ImT+Pz3n+uk8y2K5yyh3KoJ7FYom3KN7OOp6hvx1scvmFd37OHOAMxCIEK5i5RpKgQkGB0iniuFWoaIJV4rT6ACjA5zrdT3HbDqrICYpXDFJ4YpJCldMUrhiksIVkxSumKRwxSSFKyYpXDFJ4YpJS6ampjovjLkeQ+QhtK2v1B5XTFK4YpLCFZMUrpikcMUkhSsmKVwxSeGKSQpXTFK4YpLCFZMUrpikcMUkhSsmKVwxSeGKSQpXTFK4YpLCFZP+BR4IDQXqLxxbAAAAAElFTkSuQmCC) | ![image-20220805223932050](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAABaCAIAAADINwbhAAAFGUlEQVR4nO3bf2jUdRzH8aeru2At15WcF7JjcSqbIB7RCXYjOio6ZNPhBmVIJjiJRtTyj0kwJCY4KVxS94/7QwRhBA6kLcpC5j+n1EImwlzFwTDEMasRLKETpT92l7r5o92d+3zf2+vx15fvbux98Lzvfb4/tmT/uauIGFHmegCROVCvYol6FUvUq1iiXsUS9SqWqFexRL2KJepVLFGvYol6FUvUq1iiXsUS9SqWqFexRL2KJepVLFGvYol6FUseLeaX96S2lWqOEupqPVbw7+odzY+C35GOr2KJehVL1KtYol7FEvUqlqhXsUS9iiXqVSxRr2KJehVL1KtYol7FEvUqc7EuQU3I4d8v6vmswgWjJN9g7UoqK259ZK5Pcfk83/Xw47ibqYoUTNDcTE0V5f5bOyczpI9zYtDdWKUS4f0O1oYY7WG0z9UQjnpt7WLFrJ2+Cqrj7FxD+CDHhxxMVYxkJ5tj+GbtD0Sob2d9HZ91MuFgrlIIkdzOxgTlrgdx1usjAExeIpPhOgCBCKvDlEFZgOSHXNlK2s1oBWmjOZbbvPWmKlhVy7IKgGCc1jb2drubsDARtrxJPEal/8GvnReOer16kW++IJ25Y2ewiY9aqAACvNJCusfNbAX76yJfHpi5mKnvojEKsCJBfTcDTiYryFsp6iK3rday+NxX6+h861DbzFiBiT5+yO98OjLPExXrt352t91l5T2wh1+zAPipaZr3sYoQXJ6vI8ton0dOKjx2feDUpdxG+VNO55irbj5O3fOHP+c/hE+G52eakrmZZWyQfZv41CvfdY7WAw907U/XE5TO3/+4nqAgA/sYHXY9xEweO76+kL+298es1YJdz+S/K2x9CL0XK97qNdjES7UATHHGK19ARQvxbH4ZcOWk00kWAm+sB6pjvNjE81HKgSzpA3zveqRSSX5AFQA3M3ztiVMW09z1uuMw8VnnH5MZvj3IqYWyGFjfzuZobvvCV2bvF3iIl9YDN7PcyFK50vUcJVLfyY5E7o7X+Ek+12KgBNwdX39JU5YBCIR5wkcgTLmfZbVsrGVDHakOxpyNVrQI73bwXP7c8fIgKXN3tjzKXa/pozPvuMZbaXyNgJ9AjPc62d3hZrAirWthWwOB6VtBWS70cqjX8UgLiJfWA+kUnxzlGgCVMba6fG6tQPWdvNOUi/X6OL1tirW0vNQrMNHHSP4kenWD01HmrrmbxvwjWmP97H174Zw4eoY3rmfdbnwSQgC+CtejzEWyi2T+4vHpFMcWwAOvXuS9Xpc+ntu44XSMOQlup2H6utUUJ9oZ0GH1YfHYeoAQ4fyy9Xcv3g+8u8YEjwEw2qtYHyoXvb7ezvp7nEs1t1M9fWY9zikrX6n/fcamOO/sH0UWCRfrgaoYrybYNMyZk4wMMgZEeLmODUmqA7nXjPQz4mC0gsRZOr3hp+4wdfd97dAuS49se4+79WsoypYoW9pn/WD6mqXFA5WfFQ96wtXwTRBPcNHrT0Msj+evqN/J5PMDYS/8I94i4aLX0wc4DcEokSpWrcEHTDEyTCZt84mQbnYugtutR3ZxxPUMLtcDE8NMDHO239kAYpDXrmeJ3I96FUvUq1iiXsUS9SqWqFexRL2KJepVLFGvYol6FUvUq1iyZP+5q65nEPm/dHwVS9SrWKJexRL1KpaoV7FEvYol6lUsUa9iiXoVS9SrWKJexRL1KpaoV7FEvYol6lUsUa9iiXoVS9SrWKJexZJ/AefVBYujyzBOAAAAAElFTkSuQmCC) | ![image-20220805223956822](data:image/png;base64,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) | ![image-20220805224016199](data:image/png;base64,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) |

### 2、flex-wrap 项目如何换行

- 默认情况下，项目都排在一条线（又称 "轴线" ）上排列。
- `flex-wrap`属性定义，如果项目在一条轴线（主轴）排不下时，如何换行。

**语法**：

```css
/* 放不下时，不换行 */
flex-wrap: nowrap;
```

**flex-wrap 属性的 3 个值**

| 属性值       | 说明                                 |
| :----------- | :----------------------------------- |
| nowrap       | （默认）：不换行                     |
| wrap         | 换行，第一行在上方 （或第一列左边）  |
| wrap-reverse | 换行，第一行在下方（或第一列在右边） |

```html
<style>
  .flex-container {
    /* 弹性布局 */
    display: flex;
    /* 主轴为垂直方向 */
    /* flex-direction: column; */
    /* 项目在放不下时，如何换行  wrap nowrap wrap-reverse */
    flex-wrap: wrap;
    width: 200px;
    height: 200px;
    padding: 10px;
    background-color: skyblue;
  }
  .flex-item {
    width: 50px;
    line-height: 50px;
    font-size: 30px;
    color: #fff;
    text-align: center;
    background-color: tomato;
    margin: 5px;
  }
</style>
<body>
  <div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
  </div>
</body>
```

> 主轴为 row，水平方向时

| nowrap                                                       | wrap                                                         | wrap-reverse                                                 |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20220822151546824](data:image/png;base64,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) | ![image-20220822151331254](data:image/png;base64,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) | ![image-20220822151639155](data:image/png;base64,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) |

> 主轴为 column，垂直方向时

| nowrap                                                       | wrap                                                         | wrap-reverse                                                 |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20220822151806568](data:image/png;base64,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) | ![image-20220822151827864](data:image/png;base64,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) | ![image-20220822151844628](data:image/png;base64,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) |

### 3、flex-flow 主轴方向和项目如何换行

`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。

**语法：**

```css
flex-flow: row nowrap;
<style>
  .flex-container {
    width: 100px;
    height: 200px;
    padding: 10px;
    background-color: skyblue;
    /* 弹性布局 */
    display: flex;
    /* flex-wrap  主轴方向和项目如何换行 */
    flex-flow: column wrap;
  }
  .flex-item {
    line-height: 50px;
    font-size: 30px;
    color: #fff;
    text-align: center;
    background-color: tomato;
    margin: 5px;
    padding: 5px 10px;
  }
</style>
<body>
  <div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
  </div>
</body>
```

| row nowrap                                                   | row wrap                                                     | column nowrap                                                | column wrap                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20220805233433320](data:image/png;base64,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) | ![image-20220805233548713](data:image/png;base64,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) | ![image-20220805233609812](data:image/png;base64,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) | ![image-20220805233653157](data:image/png;base64,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) |

### 4、justify-content 项目在主轴上对齐方式

`justify-content`属性定义了项目在主轴上的对齐方式

**语法：**

```css
/* 项目在主轴上左对齐 */
justify-content: flex-start;
```

**justify-content 属性的 5 个值**

| 属性值        | 说明                                                         |
| :------------ | :----------------------------------------------------------- |
| flex-start    | （默认值）左对齐                                             |
| flex-end      | 右对齐                                                       |
| center        | 居中                                                         |
| space-between | 两端对齐，项目之间的间隔都相等                               |
| space-around  | 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。 |
| space-evenly  | 使每个元素之间和元素距离边距的距离都相等                     |

```html
<style>
  .flex-container {
    padding: 10px;
    background-color: skyblue;
    /* 弹性布局 */
    display: flex;
    /* 项目在主轴上的对齐方式 */
    justify-content: center;
  }
  .flex-item {
    width: 50px;
    line-height: 50px;
    font-size: 30px;
    color: #fff;
    text-align: center;
    background-color: tomato;
    margin: 5px;
  }
</style>
<body>
  <div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
  </div>
</body>
```

| flex-start                                                   | flex-end                                                     | center                                                       |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20220805230729077](data:image/png;base64,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) | ![image-20220805230801833](data:image/png;base64,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) | ![image-20220805230852435](data:image/png;base64,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) |

| space-between                                                | space-around                                                 | space-evenly                                                 |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20220805231029364](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeYAAABPCAIAAACxlfEKAAAGg0lEQVR4nO3dUWhV9wHH8W9Dc4V4hyR0t7e4ZoXLNhUk6TCBEhnNnEsmtQMtSGRMZERcA66RQWQ0k00fEigVytLJ8lBWpE5qBm0d05aSJwn0bta8JGFbmChCmolBuIQRR7KH3CwxiXFlzf3f/8738+Lxnhv+Pzzyu/97zv+cPDY3N4ckKQaPAz2f3gkdQ5L0CCeefaIidAZJ0n/LypakaFjZkhQNK1uSomFlS1I0rGxJioaVLUnRsLIlKRpWtiRFw8qWpGhY2ZIUDStbkqJhZUtSNKxsSYrG45/3B070/WA9cvyPejrOhY4Qkgel3HhEytD/x0Fxli1J0bCyJSkaVrYkRcPKlqRoWNmSFA0rW5KiYWVLUjSsbEmKhpUtSdGwsiUpGla2JEXDypakaISu7LpmtmQDZ5CkSHzuJ/l9cXL8pJvtWcb6GRsIFyPxdnXS3EQmvfjxfb/A+FUunuFGyFxJlWPfQRrrqFlyRGZnmBxhsJ+Px0NG01JNnXx3KwC3OHmqZMMGqewsrYfY00xViMG1qIFXu3gmvfzlyjRbWvhZIx++zsV8iGAJdryXbSuOSEWKbD1tZ/haP2c/CBFLy2T5TgubAwxc4srOse8gTQ1sSpV2XK3m+EJfzxYYH+VOAaA6R66WSqioprWLey/xUdiUCTM/sy5M8PdRCgCka/l6jg1Aih3tHMhzYSJgQAG0vsLTYUYuYWX/sI+duSXfvmeotLiDqgBmuNbPmw9O3DLNHOskm4I0zV181BsmXjIV/sbF33H5+oOvNnC6m2wKUjR2cKE7TDYVtbC7PtTYJbz8mHlyYbQZxgb4xJlCaNOfcfHI8r4GJgd552pxO7OVTIljJdvZEyv6Gsjzx+Hi5qYnSxtIKxxtYxMAswEGL+2KkdkZbgxy+kVe6y/puFrVmx1cfsgH58gV7sxvpakrXSI91NXrTM9v1bArbJRkq+vim1mAW3n+GWD8Ep4YuXSasZXTB5Wn6/wrdASt7i4fh46QXPXsa6ICZm/y7nWONpQ+QQln2fZ1TPZSXLZQ4HbYJAJg27biCqt7nwVOkmSHX2ZzCuBaPyNhIoS+lUblqamxWNnTE6H+a2qJBg7OT+hmGPYmhkDqOmmsBbiX52ywxa8Bb6VR2WrgewsnsMcHgyZJvEw9O/curosd+S1v+201iAYOtFAJTPH7kCt2rGwtk+OnXWRTAPfHOX8ldJ7k2d3DgRVryAo3GTrPBT9BAzneVVw69afXufqI964rK1tLZJr5cQdPz58TKfDeKSYDJxLA7Az3YUMNGTwiAbT2FG9JnbgS8JTIPCtbCxrbObB/YcHpFO+/+tAlgFpXt/MMTQGks9RsZFOWdIrqWr7Vzo5vc+6U9zSUVF0n368HuH+Td8+ETmNlCyDLj37Jc7XFv02P2wshjQwsv+S7ZT9tbWxOU5XjcDc3Opxrl0hmP4fnT2EXeO/nDD/yB9adK0YSL9PMyV8t9vVfBzjdYV+Xl7EBTvYWa7oyR1tL4DxJ0cCxQ8WlUyPny+RLp7PsZMvs5ZV2MvMXGyf4wyku+XjP8pTnk1Fe2ApQuxO8LLz+Xj5evA4P5A7Rd2j5GzbM/1FL3/vFV4Ze5Nz6hrKyk6yBYwt9PZWnr9sHZJe1v9wtblRWBs2RGFVL/p03rPkMu//sXf8jY2Un2NGO4iRiYpA3ej09Wu6e2ljcCPE0oiSavMWXNj58d4qnssXHYd5eOGfyj3UPZWUnVhvbswCzN3nHvo7BN75a3Jjy5FVJvN255u79vNFOFTDBySOlSYSXH5Nrd13xTNzkqLekl4sXOtmVW33X891srwZghj/7IMzkcpadVF+pKW6k6/jFb9Z65/QoveGXoybCl7fS1ELrOEOXGckzNgFZdjTzfMvib7W+PciloCEVlJWdVBULF0zSWVb8rsEHTN9dc7e+aNU59nSwZ7Vdtz7g132lzqNyYmUnVfXaPa0QruXJ1ZBd7dD4jBEBISv7rSO8FWxw8dpLoRNoheF+hvshx3O1PNNIFTDDjeuMD7r+svwMcCzAg3CdZUvlZpyhcYacUGsVrhiRpGhY2ZIUDStbkqJhZUtSNKxsSYqGlS1J0bCyJSkaVrYkRcPKlqRoWNmSFA0rW5Ki8djc3FzPp3dCx5AkPcKJZ59wli1J0bCyJSkaVrYkRcPKlqRoWNmSFA0rW5KiYWVLUjSsbEmKhpUtSdGwsiUpGla2JEXDypakaPwb6IVcGfNhH0MAAAAASUVORK5CYII=) | ![image-20220805230944796](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeUAAABRCAIAAABjfiniAAAGi0lEQVR4nO3db2hV5wHH8a/pkkKaNrub3N4iBsdtixFK0tErdAljYe0MJVoxgdZRGoQqoqxb7IvIwMlIoZENs267MPRF6RDCaDO66lhdEX2TljVFIoU0WwmIIg1xWyhkZYs07kXutTZ/TKw39+lz/H7eeDjnCj8O4cc5z3nOc1a9dPYykqSvtv0Pr64InUGStCz2tSTFwb6WpDjY15IUB/takuJgX0tSHOxrSYqDfS1JcbCvJSkO9rUkxcG+lqQ42NeSFAf7WpLiYF9LUhy+FjoA+/PPhI6wgN69x0JHKAHP7crx3K4cz+1ivL6WpDjY15IUB/takuJgX0tSHOxrSYqDfS1JcbCvJSkO9rUkxcG+lqQ42NeSFAf7WpLiYF9LUhwS19cNLazPhA4hSaUXfn2+0sny4wM8lGH0KKMDocPEL91CRwfr11Jd9fnOyTEGX+eN0+FixS/dSOvTPHQ/tTWfXy9dmeLSOf56lPfGQ2ZLpKYuflAPwEUO9gQOc2uS0dcZWjt5ooXq0EESo7WHJ3NUztufytLWzcZmftXDRIBcSbC3lzXzdlbWsK6J5zZQd5jXhwKkSqwMj21a4ITHKfa+zrLthzTlqK1a+rdari46coXNyQuMjXEFqOGBelbXAKSb2NvFwb5wCWN2B3D9iYVUlgfrqICKFK37+Hg7gyEDJkrrT1gbOkPpxNzXz+Zpzl53RzlNpa1dOp98yB8Ozb09b+tlayPAmhba+jgRJFnkLn/IX37L4NgXdqbb+elOaoAUj+1k8GiYbEmziccbQ2copZifN6bvLcafZnTAgb9SunicF7oWOKUn9vPRNABVrG8ve6xEeLlrblkDEwP8rbjzm9kyJ0qs3dupBWAmcJBSibmvgZlpzp/mxS380uuREurj5/lFD/69WCtfrytPmtvFqQuFjepvBM2RFA3dfDsDcHGI/4YOUyIxj4eceJHR4dAhbj//+V/oBEn36b9DJ0iARrY1UQEzF3htmN25pf9HDGK+vrasg7ivePVnrZTWd4rvDfxr3miJbtaOPaypAjh7lJHQYUon5r5WABm+VRwG+fhk0CTJkm7ne7NzhKd4x8G9W9PQxcY6gE+G+F2iJkfGPB6i8rs2O2pmjD/7gLcU1uX4bjuPNFINTDN4iLdDR4pbjqc2UQlM8scDocOUmH2tZdvYzZPF2VEfvOn7Ml/ejiM0zXtaOznGW4c55WDIrdnXTRqA9w8nbxq74yFanrYedrQU3ngcP8lvHAwpqZlpPpum9v7QOSLX2suGGoDxkwkbCZnl9bWWlGXPgcLUKODSafK+2Xhr/jFIxRhAqo67K0nVUV3F6nqeqOfRZvIHOB86YYwaugr3f1cu8Foy/0Tta91Qw06e2Uxq9sXRaT7o5+X+wJESYPDVubfqTXvZuolUFakcP+rhhaQNvK64dDs7Zoetp/jTzzgXOs/KcDxEi2vrYXd7oayvjNPfZVmvlME8v3iVTwGozbHdNYFvSo7nO6kBYKSftxL7JNzray2io4/W+sL2+eMcyfuAcWVNDDCymUcyAA9uBmf1LduefWSKawdlO8l3zv3BnbP/1JF/s7Dn3S0cK0+4UrKvtZDW3mJZT3EmzzEXvC6L8UnIAFTWhI4SlerrVv6984aLvl07On+t4BjY15on3cnm2Xl7U7zRzQlnmJXLPXcVNj4LGiM6Exe5+67FD1dxX4YKYJpLxaGSy+XIVXL2tebZ2lK4fxztt6zLKENdcdj6n661cDN+33XDw+38eifVwDgHd5Un0QrxeaPmuNYaU5zzs2ql9lQ3Gxd5ltjRzbrZu/VxTjkApQV4fa05mrhndqOK5iM03/C3Q7v8ZMHNWZvj8Ra2DPPOSUZOcx7I8v1mHm1lXarwm5HjSVqiSCVkX2sxVaxZaoVrX+v4cjKNbGtkW/e8A7Mz3L2t0cLsa81R52eLV9D7Q9zbVHz/6ItcP0RLSVBfv7KLV0JnSII+nkvmu7xfCWcOcQbSjWTX8sCGwvt4I8OMDTq9fcUM8HxCblkS1NdSLCaGmRjm3eOhcygyzg+RpDjY15IUB/takuJgX0tSHOxrSYqDfS1JcbCvJSkO9rUkxcG+lqQ42NeSFAf7WpLisOqls3F+GEeSbif7H17t9bUkxcG+lqQ42NeSFAf7WpLiYF9LUhzsa0mKg30tSXGwryUpDva1JMXBvpakONjXkhQH+1qS4mBfS1Ic7GtJisOqq1evhs4gSVra/wFFrUuC/n09mAAAAABJRU5ErkJggg==) | ![image-20220805231057111](data:image/png;base64,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) |

### 5、align-items 项目在交叉轴上对齐方式

`align-items`属性定义项目在交叉轴上如何对齐，**只对单行有效**

```css
/* 默认值，项目未设置高度或设为auto，将占满整个容器的高度 */
align-items: stretch;
```

**align-item 属性的 5 个值**

| 属性值     | 说明                                                         |
| :--------- | :----------------------------------------------------------- |
| stretch    | （默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度。 |
| flex-start | 交叉轴的起点对齐                                             |
| flex-end   | 交叉轴的终点对齐                                             |
| center     | 交叉轴的中点对齐                                             |
| baseline   | 所有元素向基线对齐。侧轴起点到元素基线距离最大的元素将会于侧轴起点对齐以确定基线。 |

::: warning 注意：

`align-items`的值不是`stretch`时，其项目未设置高时，其高为内容大小，并不会拉伸到容器高度。

:::

```html
<style>
  .flex-container {
    height: 200px;
    background-color: skyblue;
    /* 弹性布局 */
    display: flex;
    /* 项目在交叉轴上如何对齐 */
    align-items: baseline;
  }
  .flex-item {
    width: 50px;
    line-height: 50px;
    font-size: 30px;
    color: #fff;
    text-align: center;
    background-color: tomato;
    padding: 5px 10px;
    margin: 0 5px;
  }
  .flex-item:nth-child(1) {
    height: 50px;
    font-size: 14px;
  }
  .flex-item:nth-child(2) {
    height: 100px;
    font-size: 40px;
  }
</style>
<body>
  <div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
  </div>
</body>
```

| stretch                                                      | flex-start                                                   | flex-end                                                     |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20220806000739309](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeYAAADICAIAAACyINVqAAAHv0lEQVR4nO3dX2iddx3H8Y9zidhFS2bpMspCINORwbDKotSWsTJHy6Q61g4tCGPMiVgEp0LGoBdSwRRldeJuNqF0DIbQiljF/aF0CFlxK9IidEUIjA4xZrO9qRVSVrxosyT9twgn59n36et1df48kO/JxTu//M5znvORn/71nczz+NPfTLuMb3v+Ks96vdVd/fVCazz+uRVJrmt6DAAWS7IBypBsgDIkG6AMyQYoQ7IBypBsgDIkG6AMyQYoQ7IBypBsgDIkG6AMyQYoQ7IByri+6QHaa2hD7lqX4ZuyfCA9SWby7smcfDOHf5+JyaaHA0qS7CUwtCkPP5RVfQsf7c2qvqwazB0b8uCJ7N+ZA8IN/H9sjHTaxh0Z23ZJrxfqG8zWXXlkfbdmAlrCKruj1mzPltG5u+dmcnIq/5zM6WTFcG4eSF/v7HO9WfNYzp7Kc0eaGBQoSbI7qu+GCzfOnsrhvdm/L9MLD7hnLF9bn2Xn7/Tmiw/lxSMXH1PRytXZ+I3ccWuW983953b2dP5xNC8/m9enmpwNWkSyl8D0RJ7Zkbcu99SBnXl3Jt/ZkJ4kycdG8pWB7K5ftG3jWXXJgz19GVqbb92ewSez940GpoLWsZfdacf35Ikr9Pq8o7tydF6jBzct/UxL76NJklMncvhgDh3MoYM5fiLnkiTX9WfjD7K2yemgNayyO+roL/LKIpbMR9/OnQMXbn984KqHFvHOm/nTry4+eXHl5jzxaPqS9OfLj2bi2WZmgxaxyu6o6cVtcRw6OXd72Q1XPq6Opx67zMnm0/vyl9kHPzXc5YmglZpK9ub8cm/ubeiHN25l79ztM/9pbo6ld+DEhRvLbmx0DmiJJjZGHn4maweT0w386A+JL83bDPlv/fceF+PMyQ8+BvggXV9l/2hvht/Mb67tk5Fvm7dL8K9Wn0rx/h+nf/uoJ3RA11fZP9+SJPeOd/vnfnh8dizD72+MTOXP7f3rtXJz7h5JkpzOa957hA5wxkiXjebBtXP/27w9kWNNTrNUhkZz1+bcuTrLksxkYmdeaXokaAXJ7qbR/Hh7BmaX2GdP5HctWnteeItioVOTefFJF8CCTpHsblm5Kd9/dN65IjN5/dkcbXKiJXduJu/NZPmtiWRDZ0h2V9w9lgfev7RIkplM7Mjudr3x+PeJXDeZJP2D+URP+gezrDcrRnLfSNasy9Pbr/aJUGBxJHupDee72/P5eWf1nTuVl9t4zY2JPZlY+Mjabbl/Q/p70z+a7+3ID7c3Mxi0iE8/LqWhrRnftaDXZybz68da2OvLmng6P9uTM0mS5aPZ2oqP5kOjJHvJ3L09Yw9lxbzN6+P78pNt19aVSKf35djs6/1MKy6ABY1qaGPklcdbftbXll3ZODJ39+xU/rgjf7gm34WbOpUMJEnPVb+pB1gEe9lL4KLT3a5y+exrwSdnr3v1XqNjQCtIdqdtHJ/X65n87YU89UKT8zRsIIOzW9jvtvdzntAt9rI7auXm3Ld69s5MJnZcE73++li+cIW3FreMZej8bv5UDhzs4kzQTlbZHXX/prmTr4/vaduZ11dyy2juXZ+vHslrL+XYwbyVZDj3rMuajRnqv3DMsf3t/Gg+dJdkd9D63Da72Dw3mef2NTpM1w2szgOr88DYJU+c3x26xn4bsDQku3NuX5fls7dPTrXhe9MX6fAbuWlt+nsv85RrjEBHSXbnDM77SrCeG/PIpevNKzh1JL99aSkm6pJXd+bVZOXqDN+ST9+eniSnc+xIJieuob9b0BWS3Tk3z/uurOUjWTNy5UMXmpqpnezzpo9k+kgO7W96DmgzZ4wAlCHZAGXYGOmc3d/O7qZnAFrNKhugDMkGKEOyAcqQbIAyJBugDMkGKEOyAcqQbIAyJBugDMkGKEOyAcqQbIAyJBugjIuv5De+7flG5gDgA1llA5Qh2QBlSDZAGZINUIZkA5Qh2QBlSDZAGZINUIZkA5Qh2QBlSDZAGZINUIZkA5Qh2QBlSDZAGZINUIZkA5Qh2QBlSDZAGZINUIZkA5Qh2QBlSDZAGZINUIZkA5Qh2QBlSDZAGZINUIZkA5Qh2QBlSDZAGZINUIZkA5Qh2QBlSDZAGZINUIZkA5Qh2QBlSDZAGZINUIZkA5Qh2QBlSDZAGZINUIZkA5Qh2QBlSDZAGZINUIZkA5RxfdMDNGx82/NNjwCwWFbZAGVINkAZkg1QhmQDlCHZAGVINkAZkg1QhmQDlCHZAGVINkAZkg1QhmQDlCHZAGVINkAZkg1QhmQDlCHZAGVINkAZkg1QhmQDlCHZAGVINkAZkg1QhmQDlCHZAGVINkAZkg1QhmQDlCHZAGVINkAZkg1QhmQDlCHZAGVINkAZkg1QhmQDlCHZAGVINkAZkg1QhmQDlCHZAGVINkAZkg1QhmQDlCHZAGVINkAZkg1QhmQDlCHZAGVINkAZkg1QhmQDlCHZAGVINkAZkg1QhmQDlCHZAGVINkAZkg1QhmQDlCHZAGVINkAZkg1QhmQDlCHZAGVINkAZkg1QhmQDlCHZAGVINkAZkg1QhmQDlCHZAGVINkAZkg1QhmQDlCHZAGVINkAZkg1QhmQDlCHZAGVINkAZkg1QhmQDlCHZAGVINkAZkg1QhmQDlCHZAGX8D1Q7MZN3a6P+AAAAAElFTkSuQmCC) | ![image-20220806000642919](data:image/png;base64,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) | ![image-20220806000707532](data:image/png;base64,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) |

| center                                                       | baseline                                                     |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20220806000803292](data:image/png;base64,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) | ![image-20220806001023139](data:image/png;base64,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) |

当主轴放不下，允许换行时，align-items 的效果

- 当项目放不下，换行时，可以把每一行看作一个新的 flex 容器
- `align-items`控制项目在这个新容器的交叉轴上的对齐方式
- **每一行容器占的高度 = 当前行最高元素的高 +（容器高 - 所有行最高的那一个元素的高之和） / 行数**

**案例**

```html
<style>
  .flex-container {
    width: 300px;
    height: 300px;
    background-color: skyblue;
    /* 弹性布局 */
    display: flex;
    /* 项目在交叉轴上如何对齐 */
    align-items: baseline;
    /* 放不下换行 */
    flex-wrap: wrap;
  }
  .flex-item {
    width: 50px;
    line-height: 50px;
    font-size: 30px;
    color: #fff;
    text-align: center;
    background-color: tomato;
    padding: 5px 10px;
    margin: 0px 5px;
  }
  .flex-item:nth-child(2) {
    height: 100px;
  }
</style>
<body>
  <div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
  </div>
</body>
```

| stretch                                                      | flex-start                                                   | flex-end                                                     |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20220809004313166](data:image/png;base64,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) | ![image-20220809004130058](data:image/png;base64,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) | ![image-20220809004336681](data:image/png;base64,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) |

| center                                                       | baseline                                                     |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20220809004412674](data:image/png;base64,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) | ![image-20220809004908246](data:image/png;base64,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) |

### 6、align-content 多根轴线对齐方式（多行）

- `align-content`属性定义了多根轴线在 **交叉轴**上 的对齐方式。
- 如果项目只有一根轴线，该属性不起作用。

**语法：**

```css
/* 多行在交叉轴上居中对齐 */
align-content: center;
```

**align-content 属性的 6 个值**

| 属性值        | 说明                                                         |
| :------------ | :----------------------------------------------------------- |
| stretch       | （默认值）轴线占满整个交叉轴（没有设置高度时生效）           |
| flex-start    | 与交叉轴的起点对齐                                           |
| flex-end      | 与交叉轴的终点对齐                                           |
| center        | 与交叉轴的中点对齐                                           |
| space-between | 与交叉轴两端对齐，轴线之间的间隔平均分布                     |
| space-around  | 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。 |

```html
<style>
  .flex-container {
    height: 300px;
    width: 300px;
    background-color: skyblue;
    /* 弹性布局 */
    display: flex;
    /* 项目放不下自动换行 */
    flex-wrap: wrap;
    /* 多轴线在交叉轴上的对齐方式 */
    align-content: space-around;
  }
  .flex-item {
    width: 50px;
    line-height: 50px;
    font-size: 30px;
    color: #fff;
    text-align: center;
    background-color: tomato;
    padding: 5px 10px;
    margin: 5px;
  }
  .flex-item:nth-child(1) {
    height: 50px;
  }
  .flex-item:nth-child(2) {
    height: 100px;
  }
</style>
<body>
  <div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
  </div>
</body>
```

| flex-start                                                   | flex-end                                                     | center                                                       |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20220806003454151](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEpCAIAAACm0oiRAAAMtElEQVR4nO3df2jU9x3H8VfVREhj7TmJV4Ih49oSBfEojeAistAfCaJWjMM5Sp3QFDG0NW0hMmalSxmRlbquSyeV4hxCkNbSVsfqSkgpS6W1aEIhzTYO0jgxS51OSKWeNNkfd+evXKLtvO/r8r3ng0K/ve/Zex+9Z76f+37v0tvGxsbaTpwRAJNp7gGAQkeEgBkRAmZECJjNGH/TtvZHg58jp9qa9k+yl+c71U3+fPMfR0LAjAgBMyIEzIgQMCNCwIwIATMiBMyIEDAjQsCMCAEzIgTMiBAwI0LAjAgBMyIEzIgQMCNCwMwd4eJaVUXNMwBWWX69RVBienq7FkXVv0f9B31j5FJZrdatU9V8lRRfufFcQt1v6Z0u31i5URZX/U+16G7NLr3ys/3SiE716q979OmQc7b8ZokwqvqNWlGrEseDB6a+VY9Uq2jc7ZGYVrZoyTL9tlXDhrlypalN5eNuLCpVZY0eX6iKl/XWMcNUU0HAEca09meqqdbs4hvfd2pr1rrq9Oa5QSUSuiSpVPcs0NxSSSqrUVOzduzyTXirTZd09ZOVIjHdW6Fp0rSI6p/R6Q3qdg6YtwKM8LF2LYtdtVBJqijsKZ7/Qgd2Xr8SW9mmNXFJKq/Vyl06bJksB776Qn/5vboT19xY1qBfNKpUUkQPNqp7j2e2/BbgiZmyeZlHS6r/YPjfJJw8pGebszzNw9v0z6QkqVhVDYGPlTOvNF9foKThg/okc+MPYgFPNFUEe3Z0NKmBLr24Wi+F/ifiLr3QPuHOv2del3dWBDONU+dgeqNkjnWO/BXgcvTwi+rvCe7h8tnXF90TOFw4654gTwV4JKTAy+7KHBMK4XX5o8x14P+MW6xCkv9ifSGK6oeZVejpI9ZJcq+sQT9eIEka0cehfw/yPRkv1heq+q2aL0kaTejP4T07VVmt5Q26P64SSUl179QH7pHyFREGa0mLHomntz9/L1QX6yVtel014041nUvo/ZfVyVp0QixHA7SyVZtq05+hGTqiV8O+FpU0mtS3Sc2+2z1HXuNIGIyYtmzXfZlTFKe61B6iz8pc9o9uTUtIUqRCs4oUqVBJseYu0IoFWrpM7ds14J4wLxFh7i1u1KOrFEl9PCipzzv0Sod5pBzp3nf9B9NqmrSmTpFiRar1ZKue3e4ZLL+xHM2xla3a3JAu8NKQOppDW2BW3e36zT5dkCTNrtYGvraWBRHm0rpdWpP5IsXAIe34eSGenxg+qL7MSeB7V1lHyVMsR3Omvk31mUtkH7Zrf+i+QHjzhs5JUUkqKnWPko+IMDfKNmpV6lLEiN5p0eHCOwBe7Y7b0xvfWsfIVyxHc2NNrWZKkvo7Cr1ARVWReSt4ho8uZkGEuXD5ZTei3pD+5o7rrG/RkglOuqxrUWXqzPCQOgt4TT4xlqO5UKM7UhvFWva6lk1632NPhOF7vfOr9VCtVvfo4yPq69KApJgeWKal9aqMpO/Td0h9zhnzFhHmVLHKb/SNwTBdv47GtTautS3jdqSujhbGouC7I8JcqAj577Aa77NjmleT+UDCtfjs6I34Itz7hPbaHjzHdunxMH4qbRIf7tSHUllcsfm6Z6GKJI2or0eJ7rB9SD0HOBLi1hnu0XCPjh5yzzHFcHYUMCNCwIwIATMiBMyIEDAjQsCMCAEzIgTMiBAwI0LAjAgBMyIEzIgQMCNCwIwIATMiBMyyfKm3rWl/8HMABYsjIWBGhIAZEQJmRAiYESFgRoSAGRECZkQImBEhYEaEgBkRAmZECJgRIWBGhIAZEQJmRAiYESFgRoSAGRECZkQImBEhYEaEgBkRAmZECJgRIWBGhIAZEQJmRAiYESFgRoSAGRECZkQImBEhYEaEgBkRAmZECJgRIWBGhIAZEQJmRAiYESFgRoSAGRECZkQImBEhYEaEgBkRAmZECJgRIWB229jYWNuJM+4xgMLFkRAwI0LAjAgBMyIEzIgQMCNCwIwIATMiBMyIEDCbMf6mbe2PBj9HTrU17Z9kL893qpv8+eY/joSAGRECZkQImBEhYEaEgBkRAmZECJgRIWBGhIAZEQJmRAiYESFgRoSAGRECZkQImBEhYEaEgBkRAmZZfr1FoGqa9fACSdJJ7Wg1D3OLbdALtZPt/3eXXusIaphgLdmoh+tVHlFR5pbRpM4ntLdZfc658pM3wqgerFO5dYQciqq8YrL906NBTRKkmJ7erkXjntq0YkXmq1xEOJ41wvqtmu98/Nx6aF56YzSpS9nu8E0ywGmCEdVzO1VVmv6ncwn1D6a35y5QrHSiP1bgjBHW6aG479EDdPx57e5xDxGITb9KF3hpSG+1qjNx7e6oyhxT5T1fhJs3aLYkaTSkp4fumpPeuFgYBS5s1tLU8ntE725T59C4ewxpOOihpgTTy39xi+6LStLJY/rGM0LOTc9sXHBOEZxVtelXU+8evT++QEzIEmFca2s0TRod1JvhPUrMLJYkjeiseZBANCpWLEmjCR044h5minFEuGmLyosl6fieMJ8rKy2k8xDr4+mX0sCnrDm/q8DfEy5u1pIKSTp/TLuPSZOexA+Ds/rAPUIA5mdOBf9rX3qjLK5YRJIuDKo3kf1PQVLgEVZrfZ2KJJ3T29uDfejA3Zk6Elao/b30Ld9+reEv1delt0O3YEs/2RGdlhY36id1il61EBgd0Sf79MYh03D5Ltjl6DMt6ZPUn72s7kAf2Wlmcfqvkogq41rRrD/8UStj7rFuoQbdkdo4q+FmbW64pkBJ00q1tEm/3s4liqwCPBLWt2lhqSQNHdHuY8E9rkedZiQ1clbnM1fkZ0dVUpz+oVcU1ZqdmvGi3gnZealZ2lCnIulUtz76my5IJRVaWq/KiCSV1eixBr100D1k3gkqwsXNeiQuSZcG9eaugB7U6Yi2jV9zxrShUcvjKpJUqrpGfdwUitMYFSpJbUQ0N6nuVu296ods5z5tel01FZJUtUoLD4b5bNz3EshytKxBm1JvBUf07vPqDeIx81JCHdu0+0j6U2xFMa0J3WeGTh65psCUva9lftZEtTx0T/n/FkCE1Xpqo1LvEfo6uIyr3l3qP5feLp/0axZTxuCVDyT0t2e7Q48GM//d51UHMtJUkvvl6JZnFC1Ob8c2qn3j9XeYmfrbVWcRj67W1P5fr95I35daFJGk0jk3uuuUkNRoamPiTyZcyLw3Liqky6c3J/dHwpKiK9uXzxNe/df4vUXj/y3IZ4d0PrM5fYK7XMz6RRJIQRwJh09q1u0T7y7WXVFNk5TUqcyK5aucD2U2Z1Z6YyQsH2k7PaTyqFSqyriU7ZRvJPMa+O9glr2FLfcR/ql50t0N+l2jSiQNaccTOR8mL8S1KHOR8HSXdZJbp/ek7o9K0j0N2SKMqyLzNd+TXKK4Xii/RJQHFq7SkqxfnI9q81al9owO6qOwXCc8elCpdczsaj3XcP3eTVvSl+kvfqEDwQ42Fbh/x0xYlddofZNW9+h4t44f0oBUFtf9tVpeq7mpt8FJHQ3T59d79Ga3nqyRpKpG/bJCh95Tb0JVdVq5QVWpnzpJfbTTOmSeIsJcisa1Iq4VTeN2JNW7L8v1tCmtt1Wd7XogJkmVdXqy7trdSR3dpQMFf4EqG5ajuXEqoZEJdp1LqKNZr4bxrVFHkzq6sjzxkUF1NOuNsLwBvtXsR8KDeiqML8e+Pdq6R5XVii1UZWYxNtCjRJcGzKPlVudOde7U4lotXKIS6cKgTnSpnwPgZOwRhtrAMQ2Ea815k3q71Mtx72axHAXMiBAwI0LAjAgBMyIEzIgQMCNCwIwIATMiBMyIEDAjQsCMCAEzIgTMiBAwI0LAjAgBs9vGxsbaTpxxjwEULo6EgBkRAmZECJgRIWBGhIAZEQJmRAiYESFgRoSAGRECZkQImBEhYEaEgBkRAmZECJgRIWBGhIAZEQJmRAiYESFgRoSAGRECZkQImBEhYEaEgBkRAmZECJgRIWBGhIAZEQJmRAiYESFgRoSAGRECZkQImBEhYEaEgBkRAmZECJgRIWBGhIAZEQJmRAiYESFgRoSAGRECZkQImBEhYEaEgBkRAmZECJgRIWBGhIAZEQJmRAiYESFgRoSAGRECZkQImBEhYEaEgBkRAmZECJgRIWBGhIAZEQJmRAiYESFgRoSAGRECZkQImBEhYEaEgBkRAmZECJgRIWBGhIAZEQJmRAiYESFgRoSAGRECZkQImBEhYEaEgBkRAmZECJgRIWBGhIAZEQJmRAiYESFgRoSAGRECZkQImBEhYEaEgBkRAmZECJgRIWBGhIAZEQJmRAiYESFgRoSAGRECZkQImBEhYEaEgBkRAmZECJj9D8YmVO5dDnu/AAAAAElFTkSuQmCC) | ![image-20220806003522996](data:image/png;base64,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) | ![image-20220806003547688](data:image/png;base64,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) |

| stretch                                                      | space-between                                                | space-around                                                 |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20220806003606314](data:image/png;base64,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) | ![image-20220806003630872](data:image/png;base64,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) | ![image-20220806003654446](data:image/png;base64,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) |

## 三、Flex 项目属性



以下 6 大属性为 Flex 项目属性，都是直接添加到项目身上。

| 属性名      | 说明                                                         |
| :---------- | :----------------------------------------------------------- |
| order       | 属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0       |
| align-self  | 单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性 默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。 |
| flex-grow   | flex 项 **主尺寸** 的 flex 增长系数。默认为`0`，即如果存在剩余空间，也不放大。 |
| flex-shrink | flex 项**主尺寸**的缩小比例，默认为`1`，即如果空间不足，该项目将缩小。 |
| flex-basis  | 定义了在分配多余空间之前，项目占据的主轴空间（`main size`）  |
| flex        | `flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写 默认值为`0 1 auto`。后两个属性可选。 |

### 1、order 项目的排列顺序



- `order`属性定义项目的排列顺序。
- `order`属性值为`>= 0`的整数，数值越小，排列越靠前，默认为 0。

**语法**：

```css
order: 1;
<style>
  .flex-container {
    height: 100px;
    background-color: skyblue;
    /* 弹性布局 */
    display: flex;
  }
  .flex-item {
    width: 50px;
    line-height: 50px;
    font-size: 30px;
    color: #fff;
    text-align: center;
    background-color: tomato;
    padding: 5px 10px;
    margin: 5px;
  }
  .flex-item:nth-child(1) {
    /* 排列顺序，数值越小，越排前 */
    order: 1;
  }
  .flex-item:nth-child(2) {
    /* 排列顺序，数值越小，越排前 */
    order: 3;
  }
</style>
<body>
  <div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
  </div>
</body>
```

![image-20220806150515031](data:image/png;base64,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)

### 2、align-self 单个项目交叉轴对齐方式



- `align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。
- `align-self`的默认值为`auto`，表示继承父元素的`align-items`属性
- 如果父元素没有设置`align-items`属性，则等同于`stretch`（要生效，元素自身没有设置高度）。

**语法：**

```css
/* 与交叉轴起点对齐 */
align-self: flex-start;
```

6 **align-self 属性的 6 个值**

> 该属性的 6 个值，除了 auto，其他都与 align-items 的属性完全一致

| 属性值     | 说明                                                         |
| :--------- | :----------------------------------------------------------- |
| auto       | 默认值 表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。 |
| stretch    | 如果项目未设置高度或设为`auto`，将占满整个容器的高度。       |
| flex-start | 交叉轴的起点对齐                                             |
| flex-end   | 交叉轴的终点对齐                                             |
| center     | 交叉轴的中点对齐                                             |
| baseline   | 项目的第一行文字的基线对齐                                   |

```html
<style>
  .flex-container {
    height: 200px;
    background-color: skyblue;
    /* 弹性布局 */
    display: flex;
    align-items: center;
  }
  .flex-item {
    line-height: 50px;
    font-size: 30px;
    color: #fff;
    text-align: center;
    background-color: tomato;
    padding: 5px 10px;
    margin: 5px;
  }
  .flex-item:nth-child(1) {
    align-self: auto;
  }
  .flex-item:nth-child(2) {
    align-self: stretch;
  }
  .flex-item:nth-child(3) {
    align-self: flex-start;
  }
  .flex-item:nth-child(4) {
    align-self: flex-end;
  }
  .flex-item:nth-child(5) {
    align-self: center;
  }
  .flex-item:nth-child(6) {
    align-self: baseline;
  }
</style>
<body>
  <div class="flex-container">
    <div class="flex-item">auto</div>
    <div class="flex-item">stretch</div>
    <div class="flex-item">flex-start</div>
    <div class="flex-item">flex-end</div>
    <div class="flex-item">center</div>
    <div class="flex-item">baseline</div>
  </div>
</body>
```

![image-20220806152200078](data:image/png;base64,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)

::: warning 注意：

当项目换行时，其`align-self`单个项目对齐方式，是相对于其所在的那一行的轴线而言。

:::

```html
<style>
  .flex-container {
    height: 400px;
    width: 600px;
    background-color: skyblue;
    /* 弹性布局 */
    display: flex;
    /* 允许换行 */
    flex-wrap: wrap;
    /* 项目在交叉轴，垂直方向上对齐方式 */
    align-items: center;
  }
  .flex-item {
    line-height: 50px;
    font-size: 30px;
    color: #fff;
    text-align: center;
    background-color: tomato;
    padding: 5px 10px;
    margin: 5px;
  }
  .flex-item:nth-child(1) {
    /* 单独设置了高为100px */
    height: 100px;
    align-self: auto;
  }
  .flex-item:nth-child(2) {
    align-self: stretch;
  }
  .flex-item:nth-child(3) {
    align-self: flex-start;
  }
  .flex-item:nth-child(4) {
    align-self: flex-end;
  }
  .flex-item:nth-child(5) {
    align-self: center;
  }
  .flex-item:nth-child(6) {
    align-self: baseline;
  }
</style>
<body>
  <div class="flex-container">
    <div class="flex-item">auto</div>
    <div class="flex-item">stretch</div>
    <div class="flex-item">flex-start</div>
    <div class="flex-item">flex-end</div>
    <div class="flex-item">center</div>
    <div class="flex-item">baseline</div>
  </div>
</body>
```

![image-20220806152829565](https://www.arryblog.com/assets/img/image-20220806152829565.4bddbfb6.png)

### 3、flex-grow 项目主轴放大系数



- `flex-grow` 设置 flex 项目 **主尺寸（main size）** 的 flex 增长系数
- 主尺寸是项目的宽度还是高度，这取决于`flex-direction`值
- flex-grow 属性，在 Flex 容器有**剩余空间**时生效（默认主轴为水平轴）
  - 剩余空间 = flex 容器宽大小 - 所有 flex 项目**占位宽**加起来的大小
  - 剩余空间的值一定要是大于 0 的，否则就是没有剩余空间
- flex-grow 的默认值为 0，表示即使有剩余空间，也不增长（放大）
- flex-grow 的值为>=0 的数字时，需要按下面公式来计算每个项目的增长宽

### 3.1、项目放大后尺寸计算公式



- 当所有项目的 flex-grow 值的总和加起来`< 1`时

  > 项目放大后宽（width 属性） = 项目原始宽 + 剩余空间 * 项目的 flex-grow 值

- 当所有项目的 flex-grow 值的总和加起来`>= 1` 时

  > 项目放大后宽 = 项目原始宽 + 剩余空间 * （flex-grow 值） / 所有项目的 flex-grow 值总和

**案例 1**

> flex 容器存在剩余空间,且所有`flex-grow`值总和 `< 1` 时

```html
<style>
  .flex-container {
    width: 400px;
    height: 100px;
    background-color: skyblue;
    /* 弹性布局 */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .flex-item {
    width: 50px;
    line-height: 50px;
    font-size: 30px;
    color: #fff;
    text-align: center;
  }
  .flex-item:nth-child(1) {
    flex-grow: 0.1;
    background-color: tomato;
  }
  .flex-item:nth-child(2) {
    flex-grow: 0.2;
    background-color: khaki;
  }
  .flex-item:nth-child(3) {
    flex-grow: 0.3;
    background-color: pink;
  }
</style>
<body>
  <div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
  </div>
</body>
```

![image-20220809010011069](https://www.arryblog.com/assets/img/image-20220809010011069.af7a6100.png)

**案例 2**

> flex 容器存在剩余空间,且所有`flex-grow`值总和 `>= 1`时

```html
<style>
  .flex-container {
    width: 400px;
    height: 100px;
    background-color: skyblue;
    /* 弹性布局 */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .flex-item {
    width: 50px;
    line-height: 50px;
    font-size: 30px;
    color: #fff;
    text-align: center;
  }
  .flex-item:nth-child(1) {
    flex-grow: 1;
    background-color: tomato;
  }
  .flex-item:nth-child(2) {
    flex-grow: 2;
    background-color: khaki;
  }
  .flex-item:nth-child(3) {
    flex-grow: 3;
    background-color: pink;
  }
</style>
<body>
  <div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
  </div>
</body>
```

| ![image-20220806160342883](data:image/png;base64,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) | ![image-20220806160003081](https://www.arryblog.com/assets/img/image-20220806160003081.0ba09929.png) |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
|                                                              |                                                              |

::: tip 温馨提示：

flex 容器的剩余空间为 0 时，不管 flex 项目的`flex-grow`的值是多少，flex 项都不会放大
:::

### 4、flex-shrink 项目主轴上缩小系数

- `flex-shrink`属性指定了 flex 元素的收缩规则。
- 当所有`flex`项目**占位宽度之和大于容器**时候才会发生收缩（默认主轴为水平方向）
- flex 项目收缩的大小是依据所有 flex 项的`flex-shrink`的值决定的。
- 只有当 flex 容器设置了`flex-wrap: nowrap;`时，才能看到效果

推荐查看官方文档[控制弹性元素在主轴上的比例(opens new window)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#flex-grow_属性)

### 4.1 、flex-shrink 默认值

`flex-shrink`的默认值为`1`，表示容器空间不足时，所有 flex 项目等比缩小。

**计算公式：**

- 总缩放宽 = 所有子项宽 - 父容器宽
- 每个子项宽占比 = 每个子项宽 / 所有子项总宽
- 缩小宽 = 每个子项宽占比 * 总缩放宽

> 注意：元素无论如何都不会缩小到比自身内容宽还小。

```html
<style>
  .flex {
    width: 500px;
    height: 200px;
    background-color: skyblue;
    display: flex;
    border: 2px solid blue;
  }
  .item:nth-child(1) {
    width: 200px;
    background-color: tomato;
  }
  .item:nth-child(2) {
    width: 200px;
    background-color: khaki;
  }
  .item:nth-child(3) {
    width: 300px;
    background-color: pink;
  }
</style>

<div class="flex">
  <!--
		总缩放宽 = (200+200+300) -500 =200
		item1 宽占比=200/(200+200+300)=2/7
		item1最终宽 = 200- 200*2/7=142.85
	-->
  <div class="item item1">
    1
    <!-- 可以试着往这里面插入一张 宽200px的图片，则会发现，元素宽度不会缩小 -->
  </div>
  <div class="item item2">2</div>
  <div class="item item3">3</div>
</div>
```

![image-20250616182521437](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgEAAADVCAIAAABBtLQmAAAGXElEQVR4nO3dX2id9QHG8V9sqK1Ym1ZEd6WRSAxMqp2zYDc64iZVW5WyqqgIGntjHVPUbRfdxVgvxlpXhsJuGsE/N1IQ/2G1rr0YaEHFWEVrtBidoDl1rW0j5CRLPLuww6xNSqvsvGmez+fuPVfP1fvld96TvC2NRqMAEOmUqgcAUBkNAMilAQC5WidetLRUNQOAZjjiEbBzAECu1qM/avQsb/4OvpuDf/xF1RM4XvM/WFb1BKK1/OzSoz90DgDIpQEAuTQAIJcGAOTSAIBcGgCQa5Lfhn7r67G+z/Z9efpZ3W1SMY2NjfX/45XHt9YOljMuu3Xp6kXz5lS9iKmNDvQ907u9f7DM6/rptWsvbZ8zq+pFZJvq5n6o9+WdCx7dvvilt+7+dKSpizghh/as6/7dkp43Pyil7H3nV1f9YdEDu+tVj2JyX71+/21Lz79/S18pZXjXxt/eMPeuJ3aPV72KbFOdA05d3HF+b8eBjTs+PtDUPZygvbVPfnRL/45Lzm4tpZT1T/eee9fzm9d23X1e1cM42ukXdl/9m55Vq7tml1JKWfHnuff+9cE3bt28pOJdJJvqHHDqJe1nr2pf2N7UMZy4jqWPbzocgFLK/Is7Oktt14eVTmJK866+6b8BKKVc0NldysAX+6pcRDxf9M8sY/8upbVtftUzOA4D2156ofz45iVnVj2EaMd8JszJ5u0tr/WfseShxVXv4Bj2PHPn0+98/v7WF/7Zft+mv/WcVfUesjkHzCB7/r7mof1X/mn5Zco+zQ1/NrC/lFI+H/yXB/hUy91ipji0e82KFwd/2bPt+rlVT+GYOq7b/PvrSin1gUcuv/2Ga8Zf3L7C10FUxjlgRhipbbyxd0v7ym1/6fIs4GQxp/2OdVeUHc9tHah6Cck04OQ3Vnv4+g3rDy599sllnc5109n40IGvJl6P1odLOW2egxsVmrwB9dGRweGRweGxeillZGRweGSw/nVzh3F8xmoPr9yw7t2uDY/9vLM+VNs7VNs7VNs/VvUsJtH36OoFt93zYN+++ngpo0N9T92z9tXSfcVPzql6GMlaGhNeLvnN+4QbPct37nz58vf+96a/oPOjVef5c4Hp5u0fvLVofe3ITy9cuWvHsnOr2MMxzN/9w6c2/fqW5/sPPweedeaqNRt6b7qordpZxPjmPWJHvE948gY0dRffg3dJnkQOv0tyfPTAwaF6md220H92oqkmbYDvj6G5Zs1uW+iHQEwXngkD5NIAgFwaAJBLAwByaQBALg0AyKUBALk0ACCXBgDk0gCAXBoAkEsDAHJpAEAuDQDIpQEAuTQAIJcGAOTSAIBcGgCQSwMAcmkAQC4NAMilAQC5NAAglwYA5NIAgFwaAJBLAwByaQBALg0AyKUBALk0ACCXBgDk0gCAXBoAkEsDAHJpAEAuDQDIpQEAuTQAIJcGAOTSAIBcGgCQSwMAcmkAQC4NAMilAQC5NAAglwYA5NIAgFwaAJBLAwByaQBALg0AyKUBALk0ACCXBgDk0gCAXBoAkEsDAHJpAEAuDQDIpQEAuTQAIJcGAOTSAIBcGgCQSwMAcmkAQC4NAMilAQC5NAAglwYA5NIAgFwaAJBLAwByaQBALg0AyKUBALk0ACCXBgDk0gCAXBoAkEsDAHJpAEAuDQDIpQEAuTQAIJcGAOTSAIBcGgCQSwMAcmkAQC4NAMilAQC5NAAglwYA5NIAgFwaAJBLAwByaQBALg0AyKUBALk0ACCXBgDk0gCAXBoAkEsDAHJpAEAuDQDIpQEAuTQAIJcGAOTSAIBcGgCQSwMAcmkAQC4NAMilAQC5NAAglwYA5NIAgFwaAJBLAwByaQBALg0AyKUBALk0ACCXBgDk0gCAXBoAkEsDAHJpAEAuDQDIpQEAuTQAIJcGAOTSAIBcGgCQSwMAcmkAQC4NAMilAQC5NAAglwYA5NIAgFwaAJBLAwByaQBALg0AyKUBALk0ACCXBgDk0gCAXBoAkEsDAHJpAEAuDQDIpQEAuTQAIJcGAOTSAIBcGgCQSwMAcmkAQC4NAMilAQC5NAAglwYA5NIAgFwaAJBLAwByaQBALg0AyKUBALk0ACCXBgDk0gCAXBoAkKul0Wh8e9FS4RIA/u8m3PJLcQ4ASNY68eKIPgAwszkHAOTSAIBcGgCQSwMAcv0HDmEIkddTEkwAAAAASUVORK5CYII=)

### 4.2、flex-shrink 值为 0

`flex-shrink:0;`元素无任何如何不缩放

```html
<style>
  .flex {
    width: 500px;
    height: 200px;
    background-color: skyblue;
    display: flex;
    border: 2px solid blue;
  }
  .item:nth-child(1) {
    width: 200px;
    background-color: tomato;
    flex-shrink: 0;
  }
  .item:nth-child(2) {
    width: 200px;
    background-color: khaki;
  }
  .item:nth-child(3) {
    width: 300px;
    background-color: pink;
  }
</style>

<div class="flex">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

### 4.3、所有元素 `flex-shrink` 值的和大于 1

所有元素的 `flex-shrink` 值大于 1，正常情况下则会将所有溢出容全部收缩至父容器内。

`flex-shrink` 的值越大，表示缩收量尽可能越大。

> **注意：元素无论如何都不会缩小到比自身内容宽还小。**

```html
<style>
  .flex {
    width: 500px;
    height: 200px;
    background-color: skyblue;
    display: flex;
    border: 2px solid blue;
  }
  .item:nth-child(1) {
    width: 200px;
    background-color: tomato;
    flex-shrink: 0.5;
  }
  .item:nth-child(2) {
    width: 200px;
    background-color: khaki;
    /* 默认 flex-shrink:1 */
  }
  .item:nth-child(3) {
    width: 300px;
    background-color: pink;
    /* 默认 flex-shrink:1 */
  }
</style>

<div class="flex">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

### 4.4、所有元素 flex-shrink 值的和小于 1

最终所有元素的总收缩宽 = 总溢出宽 * 所有元素的 `flex-shrink` 值之和

**注意**：元素默认`flex-shrink` 的值为 1。要想使所有元素的`flex-shrink` 值之和小于 1，则每个元素都需要单独设置 `flex-shrink`的值。

```html
<style>
  .flex {
    width: 500px;
    height: 200px;
    background-color: skyblue;
    display: flex;
    border: 2px solid blue;
  }
  .item:nth-child(1) {
    width: 200px;
    background-color: tomato;
    flex-shrink: 0.5;
  }
  .item:nth-child(2) {
    width: 200px;
    background-color: khaki;
    flex-shrink: 0.2;
  }
  .item:nth-child(3) {
    width: 300px;
    background-color: pink;
    flex-shrink: 0.2;
  }
</style>
<div class="flex">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

![image-20250616184616279](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnsAAADXCAIAAADtFwB8AAAQOElEQVR4nO3df2ybdX7A8c/z2GvPQOLEEZDjKtIe7UCdUJUKMRu2VpQfClcqnTsRMsHBqbDbKIThinXSClN1vZ62cKorBV11o61EuVUlbHinUgi/0o0f54w/0sFN5VQzaFjXBnTxxbT0aSr7++yPx3V+NG3akOfzhPj9UqXGTx7bX/efd79+vv7acl1XAACAz+ygBwAAQFWguAAAaKC4AABoCHt/WVawwwAA+ItFO4FjjgsAgAbLW6vszXHdB1sCHs5sUdh0e9BDgJLooeVBDwHw0/Ibgh7B7MEcFwAADRQXAAANFBcAAA0UFwAADRQXAAANFBcAAA3hiQ+b4oGjg7+/7PIVdSR5yoqff9D37C8Pfy6Ra++88aFlV37rHP/YmAWGPt6/47X3PnKk8Y/ufvTWaxvnBD0gADPP2UH9cscb2frn3lr62n89+r/DAYxodih+/vx9m69d9er7X4l8dbjzvqcbk+/1Bz0o+KL06Y6/bal/6B//NS8iv3vpZ/d9e/VTr5wIelQAZp6zp11zly787o6FQz/rOTwUwHhmi5PHP7z0j1//75Yba0VE5C+7l9yZ+ckbNz/LxhizT2jB0j+9b9/f3fe9qIiIPPDiTXd3PPnqw9+7+6qABwZghjl7jju3ecGVqxfEFgQwmFmkduHTvziTWxFZ0nSjyIe5fJBDgm+a7zqTWxG5/LqbovLRscEgBwRgRuIyrYpiUUSujP5B0OOA704deHVHoebBW64PeiAAZhwW82govPz+i7Kwc0VN0AOBb/Lvbd65/+D/vbv7Q1n9xI5nCC6AszDH9d+Xv3ki9VFT+6offDvokcBfv/voyGkRGfri6FAp6LEAmHmY4/qs+Pkz9zz34nWr/vNvvhP0UOCn2M0bnrh5g4gU9t977+MLTuz8/WPMcwGMwRzXT0Vn77pnnvy0ueuF5dfyf5sqEb3lyT9fMPTSr14JeiAAZhqK6x/n9XU//cHr3+l8+d47aic/G99Yx4cKY26fOvmlzJlTH9BoAMxY44t76vTwgDM84BRPicjw8IAzPHDKBDGwbzrn9cd+2vovkUf/6d47ao9//oX3xzkV9LAw7Ybe2lS/uvWhf/906LRI6fTArzv+7J8H6+66MxH0wADMNJbruiJiWSIi7oMt2ewbNx0cm9j6az9ZPZ+P516UwrIv6h44cNbh5q6j994RwHDgo+ihpdk9m1Y/u3+gvFpqTvNdP3kldUtjKNhxAdNk+Q1Bj2D2GF/cgIczWxQ2sblUtYgeWi4iIqeH8sdPyZy6aM23aC1mE4o7fVjPA0yLOXWxhqDHAGBGY+UUAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AABooLgAAGiguAAAaKC4AwHemo8N0dU39vh0dkz+a45TWrbuQZ3F7e4uJhNvbO7XxTFlY+fkAAFXHceTSS006bV19tRWPm64uk05PeicrkQht3iwidjJZfOop09IS7uyURYvEcaxly0obN7q9vaHNmyUS8c43e/e62ax1zTXiOJWDks8X1661ly61168//9OZri6zc2f5KfxBcQEAPotE7Eceka++KqVSoXTabm21W1vHnJDLFdvb7TVrxh/3LFoU3rPHdHSUtm3zEmvF4+Hdu4tr17offGDF494jmJ077WTSfuQRjVc0JRQXAKDBbm93T5xwf/vbciNHMZmM1NXZt912vruPm6TGYuE9e8o/O05p2zZr8WK7vX06RzzdKC4AQEUkEvrxjyc4ns+bvj579WqJxSZ9DNPRYTKZc/22uGKF90P5HenKe8szA8UFAATJbN8u/f0T/85xShs2WPF4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)

在实际开发中，用的最多的是以下两种情况

- `flex-shrink:0;`元素无任何如何不缩放
- 所有元素的 flex-shrink 值，默认都为 1，等比缩小。

### 5、flex-basis 分配剩余空间前，项目占据主轴空间大小（main size）

- `flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）(也就是 flex 项目的起始宽或高。)
- 浏览器根据这个属性，计算主轴是否有多余空间。
- 它的默认值为`auto`，即项目的本来大小(如果`width:200px`，则缩放以`200px`为参考)

- `flex-basis`的优先级要高于`width`（如果同时设置 `width` 和 `flex-basis` ，则元素宽以 `flex-basis` 值为主）

```css
.flex-item:nth-child(1) {
  width: 100px;
  /*  在计算剩余空间之前，元素宽为200px */
  flex-basis: 200px;
}
<style>
  .flex-container {
    width: 600px;
    height: 100px;
    background-color: skyblue;
    /* 弹性布局 */
    display: flex;
    align-items: center;
  }
  .flex-item {
    width: 50px;
    line-height: 50px;
    font-size: 30px;
    color: #fff;
    text-align: center;
  }
  .flex-item:nth-child(1) {
    background-color: tomato;
    width: 100px;
    /* 剩余空间前，元素的大小 */
    flex-basis: 200px;
    flex-grow: 1;
  }
  .flex-item:nth-child(2) {
    background-color: khaki;
    width: 200px;
    flex-grow: 2;
  }
  .flex-item:nth-child(3) {
    background-color: pink;
    width: 100px;
    flex-grow: 3;
  }
  /*
        剩余宽=600-（200+200+100）=100
        项目1放大后宽=200+ 1/6*100=216.7
        项目2放大后宽=200+ 2/6*100=233.3
        项目3放大后宽=100+ 3/6*100=150
    */
</style>
<body>
  <div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
  </div>
</body>
```

![image-20220806203658016](https://www.arryblog.com/assets/img/image-20220806203658016.a34f79d4.png)

**注意区分下面两种情况**

```css
/*  在计算剩余空间之前，元素宽为200px */
.flex-auto {
  width: 200px;
  /* 这里auto相当于200px */
  flex-basis: auto;
}
/* 在计算剩余空间之前，元素的宽为0 */
.flex-auto {
  width: 200px;
  /* 这里相当于元素宽为 0 */
  flex-basis: 0%;
}
```

### 6、flex 属性

- `flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写。
- flex 属性的默认值 ：0 1 auto

```css
flex: 1 1 auto;
/* 以上css 等价于以下三个属性的简写 */
flex-grow: 1;
flex-shrink: 1;
flex-basis: auto;
```

> `flex` 的属性值支持 一个，两个，三个值的写法。

### 6.1、flex 一个值写法

- 一个 flex-grow 的有效值：此时简写会扩展为 `flex: <flex-grow> 1 0`。

```css
flex: 1;
/* 上面简写，等价于下面写法 */
flex: 1 1 0;
```

- 一个 flex-basis 的有效值：此时简写会扩展为 `flex: 1 1 <flex-basis>`。

```css
flex: 0px; /* 这里为0必须带单位，否则会被当成 flex-grow 处理*/
/* 上面写法等价于下面写法 */
flex: 1 1 0px;
```

- 关键字 none 或 initial 或 auto

```css
flex: initial; /* 等价于 flex :0 1 auto   为 flex的默认值 */
flex: none; /* 等价于  flex: 0 0 auto */
flex: auto; /* flex:1 1 auto;  默认值 */
```

### 6.2、flex 两个值写法

- 第一个值必须是一`flex-grow` 的有效值。

> 第二个值必须是以下之一：

- 一个 `flex-shrink` 的有效值：此时简写会扩展为 `flex: <flex-grow> <flex-shrink> 0`

```css
flex: 1 1; /* 等价于 flex:1 1 0 */
```

- 一个 flex-basis 的有效值：此时简写会扩展为 `flex: <flex-grow> 1 <flex-basis>`

```css
flex: 1 auto; /* 等价于 flex:1 1 auto */
```

### 6.3、推荐记住以下常见的简写

- `flex:none;`表示：`flex: 0 0 auto;` 不支持弹性伸缩
- `flex:auto;`表示：`flex:1 1 auto;` 在元素设置宽的基础上自动伸缩
- `flex:1;` 表示： `flex: 1 1 0;` 在元素宽为 0 的基础上伸缩

```html
<style>
  .flex-container {
    height: 100px;
    background-color: skyblue;
    /* 弹性布局 */
    display: flex;
    /* 两端对齐 */
    justify-content: space-between;
    /* 垂直居中对齐 */
    align-items: center;
  }
  .flex-item {
    line-height: 50px;
    font-size: 30px;
    color: #fff;
    text-align: center;
  }
  .flex-item:nth-child(1) {
    background-color: tomato;
    width: 200px;
  }
  .flex-item:nth-child(2) {
    background-color: khaki;
    overflow: hidden;
    /* 文字不换行 */
    white-space: nowrap;
    /* flex:1相当于 flex:1 1 0%; */
    flex: 1;
  }
  .flex-item:nth-child(3) {
    width: 300px;
    background-color: pink;
  }
</style>
<body>
  <div class="flex-container">
    <div class="flex-item">logo</div>
    <div class="flex-item">搜索</div>
    <div class="flex-item">登录</div>
  </div>
</body>
```

![GIF-2022-8-6-20-54-34](https://www.arryblog.com/assets/img/GIF-2022-8-6-20-54-34.e6181946.gif)

### 7、z-index 属性

`z-index` 属性用于控制 `Flex` 子项的层叠顺序（也就是元素在 z 轴上的顺序）,值越大元素越在上面显示

> flex 子项的 `z-index` 属性默认值为 `auto`

```html
<style>
  .flex {
    display: flex;
  }
  .item {
    width: 100px;
    height: 100px;
    border: 2px solid red;
    background-color: khaki;
    border-radius: 50%;
    margin-right: -30px; /* 后面的元素往左边移 */
  }
  /* 鼠标移入，元素显示在最上面 */
  .item:hover {
    z-index: 3; /* 提升元素的层级 */
  }
</style>

<div class="flex">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

![GIF2025-6-1715-21-54](data:image/gif;base64,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)

## 五、补充：Flex 容器属性

深入浅出更多 Flex 容器属性

### 1、row-gap、column-gap 、gap 设置 flex 子项间隔

| 属性名     | 说明                                                         |
| :--------- | :----------------------------------------------------------- |
| row-gap    | 用于设置 `flex` 项目行之间的间隔大小 (默认主轴为水平方向时)  |
| column-gap | 用于设置 `flex` 项目列之间的间隔大小 (默认主轴为水平方向时)  |
| gap        | gap 为 row-gap 与 column-gap 的复合写法，即 gap: row-gap column-gap; |

```html
<style>
  .flex {
    display: flex; /* 弹性布局 */
    width: 430px; /* 这里的宽度是计算得到的 */
    border: 1px solid red;
    flex-wrap: wrap; /* 放不下时换行 */
    row-gap: 10px; /* 行间距 */
    column-gap: 10px; /* 列间距 */
  }
  .item {
    width: 100px;
    height: 100px;
    background-color: khaki;
  }
</style>

<div class="flex">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
</div>
```

![image-20250617144721668](data:image/png;base64,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)

### 2、单行宽自适应两端对齐

![GIF2025-6-1715-13-03](https://www.arryblog.com/assets/img/GIF2025-6-1715-13-03.e7e33ef6.gif)

```html
<style>
  .flex {
    display: flex; /* 弹性布局 */
    border: 1px solid red;
    column-gap: 10px; /* 列间距 */
  }
  .item {
    background-color: khaki;
    min-height: 100px;
    flex: 1;
    /* flex:1  相当于 
        flex-basis: 0;  最开始元素在主轴占居尺寸为 0
        flex-grow: 1; 所有元素平分剩余空间 
        flex-shrink: 1; 当空间不足时所有元素同步收缩
        */
  }
</style>
<div class="flex">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

### 3、多行宽自适应两端对齐

![GIF2025-6-1715-09-32](https://www.arryblog.com/assets/img/GIF2025-6-1715-09-32.4acc2aca.gif)

```html
<style>
  .flex {
    display: flex; /* 弹性布局 */
    border: 1px solid red;
    column-gap: 10px; /* 列间距 */
    row-gap: 10px; /* 行间距 */
    flex-wrap: wrap;
  }
  .item {
    background-color: khaki;
    /* 最小高 */
    min-height: 100px;
    /* 一排放4个 */
    flex: calc(25% - 10px);
    /* 
        相当于 
        flex-basis: calc(25% - 10px);  最开始元素在主轴占居尺寸
        flex-grow: 1; 所有元素平分剩余空间 
        flex-shrink: 1; 当空间不足时所有元素同步收缩
        */
  }
</style>
<div class="flex">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

## 六、Flex 实战

深入浅出 Flex 布局，掌握 Flex 实战技巧。

### 1、元素水平垂直居

```html
<style>
  .flex-container {
    width: 200px;
    height: 200px;
    background-color: skyblue;
    display: flex;
    /* 水平居中 */
    justify-content: center;
    /* 垂直居中 */
    align-items: center;
  }
  .flex-item {
    width: 100px;
    height: 100px;
    background-color: khaki;
  }
</style>
<body>
  <div class="flex-container">
    <div class="flex-item"></div>
  </div>
</body>
```

![image-20220806211402830](https://www.arryblog.com/assets/img/image-20220806211402830.7a015359.png)

### 2、画 3 色子

![sssese20222](data:image/png;base64,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)

```html
<style>
  .dice {
    width: 95px;
    height: 95px;
    border: 1px solid #666;
    border-radius: 5px;
    display: flex;
    justify-content: space-between; /*两端对齐*/
    padding: 5px;
  }
  .dice span {
    width: 20px;
    height: 20px;
    background-color: #000;
    border-radius: 50%;
  }
  /*色子2*/
  .dice span:nth-child(2) {
    align-self: center;
  }
  /*色子3*/
  .dice span:last-child {
    align-self: flex-end;
  }
</style>
<body>
  <div class="dice">
    <span></span>
    <span></span>
    <span></span>
  </div>
</body>
```

::: warning 注：

关于 1 点色子到 6 点色子，如何用弹性布局来实现。

> [详细可以参考博客地址 (opens new window)](https://www.arryblog.com/interview/htmlcss/flex-grid-layout.html)👆

:::

### 3、双飞翼布局

TIP

左右固定，中间自适应，最中间的内容放在第一位，有利用 SEO 搜索引擎优化。

![GIF-2022-8-6-21-45-29](https://www.arryblog.com/assets/img/GIF-2022-8-6-21-45-29.370d2ce4.gif)

```html
<style>
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  .container {
    display: flex;
    height: 100%;
  }
  .middle {
    flex-grow: 1;
    background-color: khaki;
    order: 1;
  }
  .left {
    width: 200px;
    background-color: skyblue;
    order: 0;
  }
  .right {
    width: 200px;
    background-color: tomato;
    order: 2;
  }
</style>
<body>
  <div class="container">
    <div class="middle">中间</div>
    <div class="left">左边</div>
    <div class="right">右边</div>
  </div>
</body>
```

### 4、flex 怎么实现盒子 1 在最左边，2 、3 在最右边

![2022-08-12](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABhkAAAE0CAIAAAC+e8UrAAAJIklEQVR4nO3cr4tVaQDH4eNwmWtREPxVREVkkkVcMNhlu2G7fWaq/4HRaNDuf6BGJxgWUcQ0TQQxOAuLinDHcG1iWc9nETlefZ50TvvmD+/7Dtvb2wMAAAAAfNPm5ubOzs7a1DMAAAAAWBlaEgAAAADV7Ouf5fWrU+0A+BXceTD1AgDgPzx6MvUC+K3dPHxm6gl8lxsXj335di4JAAAAgEpLAgAAAKDSkgAAAACotCQAAAAAKi0JAAAAgEpLAgAAAKDSkgAAAACotCQAAAAAKi0JAAAAgEpLAgAAAKDSkgAAAACotCQAAAAAKi0JAAAAgEpLAgAAAKDSkgAAAACotCQAAAAAKi0JAAAAgEpLAgAAAKDSkgAAAAAYt/dy98X9e7OpZwAAAACwAo6e2bjw5zXnkgAAAACotCQAAAAAKi0JAAAAgEpLAgAAAGDc3svdF/fveHsbAAAAgHHe3gYAAADg/9GSAAAAAKi0JAAAAAAqLQkAAACAce8Ww6AlAQAAAFC8f/54d09LAgAAACCYr73+8GZfSwIAAABg3KFTl46eX9eSAAAAABg3P3H29EF33AAAAADItCQAAAAAxi0+7X/49+ls6hkAAAAArICPr/5+duu2lgQAAADAuCPnrmycvuyOGwAAAADJ8T/+0pIAAAAAqLQkAAAAACotCQAAAIBKSwIAAACg0pIAAAAAqLQkAAAAACotCQAAAIBKSwIAAACg0pIAAAAAqLQkAAAAACotCQAAAIBKSwIAAACg0pIAAAAAqLQkAAAAACotCQAAAIBKSwIAAACg0pIAAAAAqLQkAAAAACotCQAAAIBKSwIAAACg0pIAAAAAqLQkAAAAACotCQAAAIBKSwIAAACg0pIAAAAAqLQkAAAAACotCQAAAIBKSwIAAACg0pIAAAAAqLQkAAAAACotCQAAAIBKSwIAAACg0pIAAAAAqLQkAAAAACotCQAAAIBKSwIAAACg0pIAAAAAqLQkAAAAACotCQAAAIBKSwIAAACg0pIAAAAAqLQkAAAAACotCQAAAIBKSwIAAACgWlssFlNvAAAAAGA1rM3n86k3AAAAALAa3HEDAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAoNKSAAAAAKi0JAAAAAAqLQkAAACASksCAAAAYNyn5TBoSQAAAAAU/7zdH7QkAAAAAIqTx9cHLQkAAACATksCAAAAoNKSAAAAAKi0JAAAAACq2dc/B+4+nGoHwK/g7oGpFwAAAPxYziUBAAAAUGlJAAAAAFSzYRiWy+XUMwAAAAD4qW1tbQ3OJQEAAADQfQZ0wD5KmyXNxAAAAABJRU5ErkJggg==)

```html
<style>
  html,
  body {
    margin: 0;
    padding: 0;
  }
  .container {
    height: 200px;
    border: 2px solid #000;
    display: flex; /*弹性布局*/
    justify-content: space-between; /*两端对齐*/
  }
  .container .left {
    width: 300px;
    background-color: tomato;
  }
  .container .right {
    display: flex; /*弹性布局，这样子元素没有添加高度时，会和父元素一样高*/
  }
  .container .right .item1 {
    width: 200px;
    background-color: pink;
  }
  .container .right .item2 {
    width: 100px;
    background-color: skyblue;
  }
</style>
<body>
  <div class="container">
    <div class="left"></div>
    <div class="right">
      <div class="item1"></div>
      <div class="item2"></div>
    </div>
  </div>
</body>
```

### 5、左右布局，左侧文字支持溢出显示省略号

![image-20250108181257579](data:image/png;base64,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)

```html
<style>
  .box {
    width: 500px;
    height: 50px;
    display: flex;
    align-items: center;
  }
  .box .title {
    flex: 1; /* 等价 1 1 0  支持弹性缩放*/
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 50px;
    margin-right: 10px;
  }
  .box .mark {
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    border-radius: 5px;
    background-color: pink;
    /* 设置元素不支持弹性 大小永元固定*/
    /* flex: none;  等价  0 0 auto */
    flex-shrink: 0; /* 相当于将flex默认值 0 1 auto 修改为 0 0 auto  */
  }
</style>

<div class="box">
  <div class="title">
    我是标题内容，我希望占据剩余的空间。如果内容放不下，我不换行，要显示省略号
  </div>
  <div class="mark">新</div>
</div>

<div class="box">
  <div class="title">我是标题内容，我希望占据剩余的空间</div>
  <div class="mark">新</div>
</div>
```

### 6、星级评估

![GIF-2022-8-6-21-23-15](https://www.arryblog.com/assets/img/GIF-2022-8-6-21-23-15.f35d5fd3.gif)

```html
<style>
  .rating {
    display: flex;
    align-items: center;
    justify-content: center;
    /*从右往左排列，关键性代码*/
    flex-direction: row-reverse;
  }
  .rating-star {
    position: relative;
    margin: 0 2px;
    font-size: 42px;
    color: #ddd;
  }
  .rating-star::before {
    /* \2605是 Unicode 转义序列 表示实心五角星 ★ */
    content: "\2605";
    left: 0px;
    position: absolute;
  }
  /*鼠标滑动到星上时，星后面对应的星都变红*/
  .rating-star:hover::before,
  .rating-star:hover ~ .rating-star::before {
    color: red;
  }
</style>
<body>
  <div class="rating">
    <span class="rating-star">☆</span>
    <span class="rating-star">☆</span>
    <span class="rating-star">☆</span>
    <span class="rating-star">☆</span>
    <span class="rating-star">☆</span>
  </div>
</body>
```

### 7、阶梯式布局

![image-20250108183737336](data:image/png;base64,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)

```html
<style>
  p {
    margin: 0;
    padding: 0;
  }
  .container {
    width: 1000px;
    height: 400px;

    display: flex; /* Flex布局 */
    align-items: flex-end; /* 子元素在交叉轴上对齐方式为底部 */
  }
  .container .flex-item {
    flex: 1; /* 相当于 1 1 0 子元素宽为0，然后在此基础上自动伸缩 */
    margin: 0px 10px;
    background-color: skyblue;
  }
  .h100 {
    height: 100px;
  }
  .h200 {
    height: 200px;
  }
  .h250 {
    height: 250px;
  }
  .h300 {
    height: 300px;
  }
  .h350 {
    height: 350px;
  }
  .flex-item p {
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
  }
</style>

<div class="container">
  <div class="flex-item h100">
    <p>第一阶段</p>
  </div>
  <div class="flex-item h200">
    <p>第二阶段</p>
  </div>
  <div class="flex-item h250">
    <p>第三阶段</p>
  </div>
  <div class="flex-item h300">
    <p>第三阶段</p>
  </div>
  <div class="flex-item h350">
    <p>第四阶段</p>
  </div>
</div>
```

### 8、时间轴布局

![image-20250108185711723](data:image/png;base64,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)

```html
<style>
  .flex-container {
    width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
  }
  .flex-item:nth-child(2n + 1) {
    width: calc(50% - 1px);
    height: 200px;
    border-right: 2px solid skyblue;
    position: relative;
    padding-top: 20px;
  }
  .flex-item:nth-child(2n) {
    width: calc(50% - 1px);
    height: 200px;
    padding-top: 20px;
    align-self: flex-end; /* 交叉轴结束位置 */
    border-left: 2px solid skyblue;
    position: relative;
  }

  .flex-item:nth-child(2n + 1)::before,
  .flex-item:nth-child(2n)::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .flex-item:nth-child(2n + 1)::before {
    border-left-color: skyblue;
    right: -10px;
  }
  .flex-item:nth-child(2n)::before {
    border-right-color: skyblue;
    left: -10px;
  }

  .flex-item:nth-child(2n + 1) .content {
    margin-right: 10px;
    min-height: 200px;
    background-color: skyblue;
    border-radius: 5px;
  }
  .flex-item:nth-child(2n) .content {
    margin-left: 10px;
    min-height: 200px;
    background-color: skyblue;
    border-radius: 5px;
  }
</style>

<div class="flex-container">
  <div class="flex-item">
    <div class="content"></div>
  </div>
  <div class="flex-item">
    <div class="content"></div>
  </div>
  <div class="flex-item">
    <div class="content"></div>
  </div>
  <div class="flex-item">
    <div class="content"></div>
  </div>
</div>
```

### 9、如何解决 flex 布局 7 个元素使用 space-between 最后一行两边分布的问题？

如果我们每一行显示的个数为 n，那我们可以最后一行子项的后面加上 n-2 个 span 元素，span 元素的宽度和其它子项元素宽度一样，但不用设置高度。

**为什么是添加 n-2 个 span 元素呢 ？**

- 当最后一行只有 1 个子元素时，他会默认靠左，不用处理
- 当最后一行子元素正好时，我们就不用关心这个问题。

> 所以要去掉这两种情况，只需要加 n-2 个 span 元素就好

**案例演示：在没有加 n-2 个 span 元素前的效果**

```html
<style>
  .container {
    width: 500px;
    display: flex; /*弹性布局*/
    justify-content: space-between; /*两端对齐*/
    flex-wrap: wrap; /*超出部分换行*/
  }
  .item {
    width: 120px;
    height: 100px;
    background-color: pink;
    margin-top: 10px;
  }
</style>
<body>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
  </div>
</body>
```

![2022-808922](data:image/png;base64,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)

**添加了 `n-2`个 span 元素后效果（这里每行 4 个，4-2=2，所以只需要加 2 个 span 就可以了）如下所示：**

```html
<style>
  .container span {
    width: 120px;
  } /*span宽和子项宽一样*/
</style>
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <span></span>
  <span></span>
</div>
```

![2022-098022](data:image/png;base64,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)

::: info 注：

如果想非常熟练的掌握 Flex 弹性布局，可以去博客看 102 个常见的布局案例，这 102 个常见的布局案例部都是采用最新 Flex 布局技术来实现的。

[点击查看，102 个常见的 Flex 布局最佳实践 (opens new window)](https://www.arryblog.com/case/)👆

![image-20220806212603629](https://www.arryblog.com/assets/img/image-20220806212603629.57741dfe.png)

:::

接下来的移动端的项目开发，我们就会采用最新的 Flex 布局来实现整站的页面开发。

## 七、专项案例训练（作业）

根据课程进度完成以下针对性案例开发，开发过程要求：

**具体开发流程**

- 利用 PS 软件标记好切图 -> 导出至蓝湖（国内企业用的多）中
- 前端开发人员在蓝湖打开设计稿 ->下载网页开发所需的素材 -> 在蓝湖中量取尺寸 -> 即可开发静态页面

**PSD 的源文件设计稿**

- 以下案例对应的 PS 设计稿，已发布到钉钉群作业中。
- PS 与蓝湖结合标注、切图开发相关视频教程已上传至钉钉群

**作业参考视频**

作业参考视频 [30 个 HTML+CSS 实战小案例详解(opens new window)](https://www.icodingedu.com/goods/show/82?targetId=91&preview=0)

**有任何疑问可以联系添加的助理老师**

我们把 CSS/CSS3 基础知识全部学习完之后，会有 3 大项目开发（PC 端，响应式，移动端）会按照企业真实团队协作的方式，用 3 个项目来完整的实践。

::: tip 切记

学习阶段一定要按照以上的流程学习，提前熟悉工具和整个开发步骤，企业真实项目开发就是这样的流程

:::

### 1、Flex 开发酷狗音乐播放列表

![Flex开发酷狗音乐播放列表](https://www.arryblog.com/assets/img/26.aafc2959.jpg)

### 2、Flex 弹性布局（开发今日头条热门视频布局效果）

![Flex弹性布局（开发今日头条热门视频布局效果）](https://www.arryblog.com/assets/img/27.f6cf8932.jpg)

### 3、Flex 弹性布局（开发微博热搜榜效果）

![Flex弹性布局（开发微博热搜榜效果）](https://www.arryblog.com/assets/img/28.9828fb68.jpg)

