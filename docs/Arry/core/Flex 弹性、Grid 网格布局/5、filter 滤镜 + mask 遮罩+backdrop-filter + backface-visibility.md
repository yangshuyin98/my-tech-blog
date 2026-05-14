---
title: "filter 滤镜 + mask 遮罩+backdrop-filter + backface-visibility"
source: "https://www.arryblog.com/guide/webapp/filter-mask-backdrop-filter-backface-visibility.html"
category: "filter"
order: 5
---



:::details 点击查看完整版视频讲解

:::

# filter 滤镜 + mask 遮罩+backdrop-filter + backface-visibility



从本节开始我们学习 CSS3 新特性 filter 相关内容

- filter 滤镜
- mask 遮罩层
- backdrop-filter 元素背后区域滤镜效果
- backface-visibility 元素背面朝向用户时，是否可见

## 一、filter 滤镜



- CSS **`filter`** 属性将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像、背景和边框的渲染。
- CSS `filter` 属性的值有很多，下表列出的值是比较常用的，也是我们需要掌握的。
- `filter` 属性的值不为 none 时，会创建自己的 [层叠上下文(opens new window)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_positioned_layout/Stacking_context)

> 了解更多 filter 相关属性值，查阅 MDN 官方文档 [filter(opens new window)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)

| 属性值          | 描述                                                      |
| :-------------- | :-------------------------------------------------------- |
| `blur()`        | 将高斯模糊应用于输入图像，就是将元素变得模糊              |
| `brightness()`  | 用于调整图像的亮度                                        |
| `contrast()`    | 用于调整图像的对比度                                      |
| `drop-shadow()` | 沿着图像的轮廓生成阴影效果。（要与 box-shadow 属性做区分) |
| `grayscale()`   | 将图像转换为灰度图                                        |
| `opacity()`     | 调整图像的透明度。（与 opactiy 属性效果一致）             |

### 1、`blur()` 调整图像模糊度



`blur()` 函数用于将高斯模糊应用于输入图像，也就是设置元素的模糊度

**语法**

```css
/* length 为长度值，比如 10px , 值越大，图像越模糊 */
filter: blur(length);
```

**代码示例**

```html
<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: red;
    /* 模糊度 */
    filter: blur(20px);
  }
</style>

<div class="box"></div>
```

| 模糊值       | 最终效果                                                     |
| :----------- | :----------------------------------------------------------- |
| `blur(5px)`  | ![image-20250523211112493](data:image/png;base64,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) |
| `blur(20px)` | ![image-20250523211031955](data:image/png;base64,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) |

### 1.1、实战应用：背景模糊效果



利用 `filter: blur` 与 `background-size` 的结合来实现背景模糊效果

> `./images/tx2.jpg` 对应图片

![tx1](data:image/jpeg;base64,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)



```html
<style>
  body {
    margin: 0;
  }
  .header {
    width: 100%;
    height: 220px;
    background-color: #000;
    position: relative;
    /* overflow: hidden; */
  }
  .header::before {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    /*
        背景图地址  不重复  居中对齐  宽度120% 高度自动
        */
    background: url("./images/tx1.jpg") no-repeat center / 120%;
    /* 添加模糊效果 */
    filter: blur(60px);
  }
  .header .content {
    font-size: 50px;
    color: red;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>

<div class="header">
  <div class="content">我是内容.....</div>
</div>
```

![image-20220725164313144](https://www.arryblog.com/assets/img/image-20220725164313144.f1e7b8cb.png)

### 2、`brightness()` 调整图像亮度



图像亮度（Brightness/Luminance）是指图像中光线强度的视觉感知量，是影响图像视觉效果的核心要素之一。 光线弱，看东西变暗的；光线强（亮），看东西太刺眼。

> `brightness()` 函数用于调整图像的亮度。

- 值为 `0%` 或 `0` 将创建全黑图像；
- 值为 `100%` 或 `1` 会使输入保持不变。
- 如果值大于 `100%` 将使图像更加明亮。

**语法**

```css
filter: brightness(40%);
filter: brightness(0.4);
```

**代码示例**

```html
<style>
  .box {
    width: 200px;
    height: 200px;
    background: url(./images/ms.jpg) center;
    /* 调整图片的亮度 */
    /* filter:brightness(0); */
    /* filter:brightness(0.5); */
    /* filter:brightness(1);  */
    filter: brightness(1.2);
  }
</style>
<div class="box"></div>
```

| 属性值            | 渲染效果                                                     |
| :---------------- | :----------------------------------------------------------- |
| `brightness(0)`   | ![image-20250523213248577](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAADbCAIAAABvFKMqAAACcklEQVR4nO3YIQ4DQQwEwXWU/3/ZRwKjwFxLVwUXDWgZ7OzugYDX3QPgQ4tUaJEKLVKhRSq0SIUWqXh/fZ2ZP+/gCX5/ZruLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhVapEKLVGiRCi1SoUUqtEiFFqnQIhWzu3dvgHPcRTq0SIUWqdAiFVqkQotUaJEKLVKhRSq0SMUFoOEKsSS3RdsAAAAASUVORK5CYII=) |
| `brightness(0.5)` | ![image-20250523213314775](https://www.arryblog.com/assets/img/image-20250523213314775.32151ab5.png) |
| `brightness(1)`   | ![image-20250523213336392](https://www.arryblog.com/assets/img/image-20250523213336392.08020f9a.png) |
| `brightness(1.2)` | ![image-20250523213354450](https://www.arryblog.com/assets/img/image-20250523213354450.b945b025.png) |

### 3、`contrast()` 调整图像对比度



图像对比度（Contrast）是指图像中最亮部分与最暗部分之间的差异程度，是影响图像视觉冲击力和信息传达效率的关键因素。

> CSS `contrast()` 函数调整图像的对比度。

- 值是 `0%` 或 `0` 将使图像变灰；
- 值是 `100%` 或 `1` ，则无影响；
- 若值超过 `100%` 或 `1` 将增强对比度。当值大到一定程度时，图像中颜色之间是没有模糊部分，颜色之间分界线非常明显

**语法**

```css
filter: contrast(200%);
filter: contrast(2);
```

**代码示例**

```html
<style>
  .box {
    width: 200px;
    height: 200px;
    background-color: khaki;
    background: linear-gradient(red, yellow);
    /* filter:contrast(0); */
    /* filter:contrast(0.5); */
    /* filter:contrast(1); */
    /* filter:contrast(5); */
    filter: contrast(50);
    margin: 100px;
  }
</style>
<body>
  <div class="box box1"></div>
</body>
```

| 属性值          | 效果                                                         |
| :-------------- | :----------------------------------------------------------- |
| `contrast(0)`   | ![image-20250523225555609](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAByCAIAAAAESsIXAAABJ0lEQVR4nO3SMQoDMRAEQZ/xv4VevpfbaYHw0ZVJ0dDsNTOvOO/TA56moFhBsYJin6/33vvIjn+01vr97EKxgmIFxQqKFRQrKFZQrKBYQbGCYgXFCooVFCsoVlCsoFhBsYJiBcUKihUUKyhWUKygWEGxgmIFxQqKFRQrKFZQrKBYQbGCYgXFCooVFCsoVlCsoFhBsYJiBcUKihUUKyhWUKygWEGxgmIFxQqKFRQrKFZQrKBYQbGCYgXFCooVFCsoVlCsoFhBsYJiBcUKihUUKyhWUKygWEGxgmIFxQqKFRQrKFZQrKBYQbGCYgXFCooVFCsoVlCsoFhBsYJiBcUKihUUKyhWUKygWEGxgmIFxa6ZOb3hUbpQrKBYQbGCYgXFCooVFCsodgMLgQnf+sIQawAAAABJRU5ErkJggg==) |
| `contrast(0.5)` | ![image-20250523225045818](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAB1CAIAAAD/ZjnrAAABtUlEQVR4nO3bQU4CQRRF0WrjwtSN687aqRCKboGbRnPO4KeCE/PyfYCVXtZ1HWRejv4F/jn5tuTbkm9Lvi35tuTber3ys6+P97GOsQxzc759fv4637GMsTjvO09s5Xt2cN48n9qXL7e6mq83v7vZ35Z8W/Jt6d+W/W3JtyXflv5t2d+WfFvybenflv1tbe3v0fcCf2beku9i7p4T++6HzFsj1r8tnx9aVyM8+xOY1YXX537Tv+PH2ev69xno35b9bcm3Jd+W/m3Z35Z8W/Jt6d+W/W3Jt+V+6Nj7oYv/oDMvzkv0Q0s/PEM/OG+eJzz/9ujzKf3b8v2tZX9b8m3Jt6V/W/a3Jd+WfFv6t2V/W/Jtybelf1v2t+X+4tj7C3PnnHB/3Easf1s+P7Q8//ag1yc8//bo10/p35b+bdnflnxb8m3p35b9bcm3Jd+W/m3Z35Z8W+6HnuH5FnPPvEQ/tPTDM/SD8+Z5wvNvjz6f0r8t399a9rcl35Z8W/q3ZX9b8m3Jt6V/W/a3Jd+WfFv6t2V/W+4vjr2/MHfOiWVd5+FzN29hLfm25NuSb0u+Lfm25NuSb+sbcqGeLFAticgAAAAASUVORK5CYII=) |
| `contrast(1)`   | ![image-20250523225141384](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAABzCAIAAAAkIaqxAAAB0UlEQVR4nO3bbWvCMBhG4Xbz///kdR9kQ2bq2unxZVwHCY8phnJzLElK5mVZJgS8PfoG/i2SrZBshWQrJFsh2YrD6pX3eVqmaZ60v7cfg5nrerLfNh9/r75Qj7jg7OoVbIGzt6hHcLZig7P4E5yt4GwFZys4W8HZCs5WcLaCsxWcreBsBWcrLib78B3lV2kl+xzJvj3BHb9Ky9nnSHY4NziOpX+t/wRzg4rNz9kj5/8F/X95zp6Oor5Qj7AGq/CcreBsBWcrOFvB2QrOVnC2grMVnK3gbAVnK+x833/nW7JVsvPX53wU/T/69yV7eAIXXqXdl6yzNdvrEeYGFZy9RT2CsxXWYBWcreBsBWcrOFvB2QrOVnC2grMVnK3gbAVnK7ytuf/Ot2SrZJ0H4+zj293OnnMcS/9a/wnmBhXOg92if1+yzoNtr0dYg1V4zlZwtoKzFZyt4GwFZys4W8HZCs5WcLaCsxV2vu+/8y3ZKtn567OcfFWv1TuSdR6sctbZmu31CHODCs7eoh7B2QprsArOVnC2grMVnK3gbAVnKzhbwdkKzlZwtoKzFd7W3H/nW7JVss6DXZfsvCwrV3AdZgAVkq2QbIVkKyRbIdkKyVZ8AoE0+OqK9ZCSAAAAAElFTkSuQmCC) |
| `contrast(5)`   | ![image-20250523225226341](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAB2CAIAAAB07DsCAAABaElEQVR4nO3csWrCUACG0Ztily59/2d1iIPrTYjop005ZwhBCISPf1FJlnVdB4GvT9/Av6VsRdmKshVlK8pWlK1cJp8ty9tv47S2vw3YbEXZirIVZSvKVpStKFtRtqJsRdmKshVlK8pWlK0oW1G2omxF2YqyFWUrylaUrShbUbaibEXZirIVZSvKVpStKFtRtqJsRdmKshVlK8pWlK0oW5k9D/YzxnWMb8cDx4fL3t2vd75zvm1W9nfvAg6yWZs9m93N8gSbrdhsxWYrNlux2YrNVmy2YrMVm63YbMVmKxtlP/6L8lmOyv6Nsv6teUXZZfaeb+9FPM57Ed9O2YqyFWUrylaUrShbUbaibEXZirIVZSvKVpStKFtRtqJsRdmKshVlK8pWlK0oW1G2omxF2YqyFWUrylaUrShbUbaibEXZirIVZSvKVpStKFuZPWm3/YwTx9lsRdmKshVlK8pWlK0oW1G2omzlBhoMBftDdxmqAAAAAElFTkSuQmCC) |
| `contrast(50)`  | ![image-20250523225259773](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB5CAIAAAB0sdJaAAABSklEQVR4nO3csQ0CMRBFQYwoiVpp9yiBTcxDeCa+YPXk5JK/ruu68V33+oATiR4QPSB6QPSA6AHRA6IHRA88Pn+y1v4z/sXs995LD4geED0gekD0gOgB0QOiB0QPiB4QPSB6QPSA6AHRA6IHRA+IHhA9IHpA9IDoAdEDogdED4geED0gekD0gOgB0QOiB0QPiB4QPSB6QPSA6AHRA6IHRA+IHhA9IHpA9IDoAdEDogcGIzvP/VccZhD9tf+Kw6zBwLE5qTlzUr9K9IDoAdEDogdED4geED0gekD0gOgB0QOiB0QPiB4QPSB6QPSA6AHRA6IHRA+IHhA9IHpA9IDoAdEDogdED4geED0gekD0gOgB0QOiB0QPiB4QPSB6QPSA6AHRA6IHRA+IHhA9MFg2mg3HMOelB0QPiB4QPSB6QPSA6AHRA6IHRA+8AeqDC7zg573CAAAAAElFTkSuQmCC) |

### 3.1、实战应用：文字交融展开动画

![GIF2025-04-2717-36-35](https://www.arryblog.com/assets/img/GIF2025-04-2717-36-35.5b3f3f6b.gif)

```html
<style>
  body {
    margin: 0;
  }
  .container {
    height: 100px;
    width: 100%;
    background-color: #000;
    filter: contrast(40);
  }
  .text {
    font-size: 50px;
    color: #fff;
    font-weight: bold;
    line-height: 100px;
    text-align: center;
    /* 设置文字之间的间距 */
    /* letter-spacing: -50px; 汉字间间距 */
    /* filter: blur(10px); */
  }
  .animation-expand {
    animation: expand 1s ease-in both;
  }

  /* 展开动画 */
  @keyframes expand {
    0% {
      letter-spacing: -50px;
      filter: blur(10px);
    }

    100% {
      letter-spacing: 30px;
      filter: blur(0px);
    }
  }

  /* 动画执行结束后，将 container中的 filter 值设为 none */
  .filter-none {
    filter: none;
  }
</style>
<div class="container">
  <div class="text animation-expand">文字交融展开动画</div>
</div>
    <script>
      /* 获取 .conatiner 元素 */
      const container = document.querySelector(".container");
      /* 获取 .conatiner 元素 */
      const text = document.querySelector(".text");
      /* 给 text元素添加 animationend事件
       当animation动画结束后 给 container 元素添加 class类 filter-none
        */
      text.addEventListener("animationend", function () {
        container.classList.add("filter-none");
      });
    </script>
```

### 4、`drop-shadow()` 设置图像轮廓阴影



`drop-shadow()` 函数用于设置**图像轮廓阴影**，其用法与 `box-shadow` 属性类似，但有以下 4 个区别

- `drop-shadow` 不支持内阴影
- `drop-shadow` 属性在部分浏览器中，不支持设置阴影的扩散半径
- drop-shadow 常用于设置**图标**、**不规则图形**，**文字**的阴影。`box-shadow` 更适合矩形盒子模型阴影的设置
- drop-shadow 设置阴影实际上是是输入图像的 alpha 蒙版的一个模糊的、偏移的版本，用特定的颜色绘制并合成在图像下面，所以性能消耗比较大。而`box-shadow` 性能消耗较低

```css
drop-shadow(水平偏移  垂直偏移  阴影模糊  阴影颜色 )
<style>
  .fi {
    filter: drop-shadow(0px 0px 8px #4444dd);
    /* box-shadow:0px 0px 8px #4444dd ; */
  }
</style>
<img src="./images/shape.png" width="200px" class="fi" />
```

| 阴影代码                                   | 渲染效果                                                     |
| :----------------------------------------- | :----------------------------------------------------------- |
| `filter: drop-shadow(0px 0px 8px #4444dd)` | ![image-20250523232251029](https://www.arryblog.com/assets/img/image-20250523232251029.33be4bfa.png) |
| `box-shadow:0px 0px 8px #4444dd`           | ![image-20250523232317673](https://www.arryblog.com/assets/img/image-20250523232317673.6232cba6.png) |

### 4.1、实战应用：带阴影的会话框

用到的三角形图片素材 ![arrow-left](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAbpJREFUaEPtmb1KA0EUhc/Noib+BBsbCztFtNVKFPEhRBTxCRR/8CVEUbvs+4gYdlEsrOwUJGYTUumOCckVlYEdFWN+yM6FTb2B891z5s7MHYLwHwnXjwQgbgcTBxIHIhXwn8KJufHMQytFsSZCflFtMzWc+bHBM1EA98wDlXLVJeYtoLEnCsB7fl3gVMolYPar6oIA/JLaYca5GRcBAJePnOlLKxegzZ9ZtxwgXwwXnRTlmDHz+0K1GMAL1C6A0787jIUAtwUeenOUS6CN5u3RMoDrYm2pTnUXwHRz8ZZ1IT9Q+wyc/E+4/soCBy6CYKQf2RyB11sTb4EDXhAuA/QRmanWxccM4AfqgIHj9oTHGKGrMmedxufGtNaZ+BgcyJfCFYcpx8Bk5+J7DOAF6hDAUXeE9zBCN5XKaK2Wdolotbvie+SAeABddbERisYmXwhXHEfoItYgotto1A2xG1kUQvRRQoPcMQ+/lKquyMPct0jJPE5HIURfaDSI6CulucCFXuqNjU/yWEWDiB5sGV1K6mjRWBeSh7saRPR43YiU1AcOA0LyE1O711Nr3sgSgHYrEPf/kgjF7cA7bw0GQDwedrcAAAAASUVORK5CYII=)

![image-20250620133937336](data:image/png;base64,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)

```html
<style>
  .box {
    width: 200px;
    height: 200px;
    background-color: #cbebf8;
    border-radius: 10px;
    /* 阴影 */
    box-shadow: 0 0 5px #000;
    margin: 100px;
    position: relative; /* 相对定位 */
  }
  .box img {
    position: absolute;
    left: -34px;
    top: 50%;
    transform: translateY(-50%);
    /* 图片阴影 */
    filter: drop-shadow(0 0 3px #000);
  }
  .box::after {
    content: "";
    width: 50px;
    height: 50px;
    background-color: #cbebf8;
    display: block;
    /* 遮罩层 */
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
  }
</style>

<div class="box">
  <img src="./images/arrow-left.png" alt="" />
</div>
```

### 5、`grayscale()` 将图像转为灰度图



`grayscale()` 函数用于将图像转换为灰度图。

- 值为 `0%` 或 `0` 则图像无变化。
- 值为 `100%` 或 `1` 则完全转为灰度图像
- 值在 `0%` 到 `100%` 之间，值越大，灰度越明显

```html
<style>
  img {
    /* 正常无变化 
        filter: grayscale(0);*/
    /* 图片有一定灰度 
        filter: grayscale(0.5);*/
    /* 完全转换为灰度图像 */
    filter: grayscale(1);
  }
</style>
<img src="./images//ms.jpg" />
```

| grayscale(0)                                                 | grayscale(0.5)                                               | grayscale(1)                                                 |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20250620134923250](https://www.arryblog.com/assets/img/image-20250620134923250.f5a81fc2.png) | ![image-20250620134901723](https://www.arryblog.com/assets/img/image-20250620134901723.6cd48732.png) | ![image-20250620134842199](https://www.arryblog.com/assets/img/image-20250620134842199.6608a9a0.png) |

### 5.1、实战应用：全站置灰(网站哀悼模式)



在一些特定的时间，为了哀悼某个特殊的人或事情，我们需要将全站首页内容置灰一天。

```css
/* 将整个HTML文档转换为灰度图像 */
html {
  -webkit-filter: grayscale(
    100%
  ); /* 针对WebKit内核的浏览器，如Chrome和Safari */
  -moz-filter: grayscale(100%); /* 针对Mozilla Firefox */
  -ms-filter: grayscale(100%); /* 针对旧版本的Internet Explorer */
  -o-filter: grayscale(100%); /* 针对Opera浏览器 */

  filter: grayscale(100%); /* 标准的CSS滤镜属性 */
}
<style>
  html {
    /* 将整个HTML文档转换为灰度图像 */
    filter: grayscale(100%);
  }
  p {
    color: red;
  }
</style>
<div class="box">
  <img src="./images/ms.jpg" />
  <p>我是红色的，但现在是灰色的</p>
</div>
我是黑色的
```

![image-20250620135821489](https://www.arryblog.com/assets/img/image-20250620135821489.0f2b7c3b.png)

### 6、`opacity()` 调整图像透明度



`opacity()` 函数用法和 `opacity` 属性用法一样，都是用来调整元素的透明度。

**两者的区别**

有了 filter 滤镜，有些浏览器会针对`filter:opacity()` 提供[硬件加速 (opens new window)](https://www.arryblog.com/interview/htmlcss/css3-animation.html#_3、所有-css3-的动画都能用-gpu-加速么-广联达)以获取更好的性能表现。

```html
<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: skyblue;
    /* 0-1 从完全透明到不透明状态 */
    filter: opacity(0.5);
  }
</style>
<div class="box">
  <p>我是里面的内容</p>
</div>
```

![image-20250620150937676](data:image/png;base64,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)

### 7、filter 滤镜多值写法



可以组合任意数量的函数来控制渲染。滤镜将按声明顺序依次应用。

```cs
/* 先模糊 再调整灰度 再调对比度 */
filter: blur(5px) grayscale(0.8) contrast(10);
```

### 7.1、实战应用：图像水墨画风格

```html
<style>
  /* 水墨画风格：
    完全灰度 + 对比度 + 图像亮度调暗 + 轻微模糊 
    */
  .ink-wash {
    filter: grayscale(1) contrast(1.8) brightness(0.9) blur(0.3px);
  }
</style>
<img src="./images/hua.png" class="ink-wash" />
```

| 原图效果                                                     | 调整为水墨画风格后效果                                       |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20250524003041069](https://www.arryblog.com/assets/img/image-20250524003041069.9b793a41.png) | ![image-20250524003005293](https://www.arryblog.com/assets/img/image-20250524003005293.3229bd6f.png) |

## 二、mask 遮罩



自 2023 年 12 月起，该功能适用于最新的设备和浏览器版本（浏览器兼容性如下表）

![image-20250620162749690](https://www.arryblog.com/assets/img/image-20250620162749690.aa0d3fbe.png)

注：

CSS Mask（遮罩）允许你使用**图像**或**渐变**作为遮罩层来控制元素的可见性。**遮罩层**中

- 完全透明的部分，元素完全不可见
- 半透明的部分，元素半透明状态
- 不透明的部分，元素完全可见

> CSS Mask 提供了一系列属性来精确控制遮罩效果，包括遮罩图像、位置、大小、重复方式等。以下是相关属性列表

| 属性           | 说明                     |
| :------------- | :----------------------- |
| mask-image     | 指定遮罩层图像或渐变     |
| mask-mode      | 指定遮罩图像模式         |
| mask-repeat    | 指定遮罩图像重复度       |
| mask-position  | 指定遮罩图像位置         |
| mask-size      | 指定遮罩图像延大小       |
| mask-clip      | 指定遮罩图像延伸区       |
| mask-origin    | 指定遮罩图定位区域       |
| mask-composite | 指定遮罩图像如何合成操作 |
| mask           | 遮罩图像复合写法         |

> 以上属性可以组合使用，创造出各种视觉效果，如图像裁剪、渐变过渡、复杂形状显示等。

**以下是后面代码中需要用到的图片素材**

| `star.png`                                                   | `ms.jpg`                                                     |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![star](data:image/png;base64,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) | ![ms](https://www.arryblog.com/assets/img/ms-17480951218642.b27ae282.jpg) |

### 1、mask-image 遮罩层图像或渐变



`mask-image` 属性指定用作元素遮罩的图像或渐变。

> 它可以接受以下三种值

| 属性值   | 说明                                                     |
| :------- | :------------------------------------------------------- |
| URL 值   | 通过`url()` 加载一张遮罩图像                             |
| CSS 渐变 | 通过 CSS 线型渐变 、径向渐变、锥形渐变等绘制遮罩渐变图像 |
| none     | 取消遮罩效果                                             |

**语法**

```css
/* 值为图片地址 */
mask-image: url("./images/star.png");
/* 值为CSS渐变 */
mask-image: linear-gradient(pink, transparent);
/* 值为 none 取消遮罩效果 */
mask-image: none;
```

### 1.1、使用图像作为遮罩层



使用图像作为遮罩层

- 图像不透明部分，元素完全显示
- 透明部分则完全不显示
- 半透明部分，呈半透明显示

```css
/* 值为图片地址 */
mask-image: url("./images/star.png");
<style>
  .mask {
    /* 添加兼容型前缀 */
    -webkit-mask-image: url("./images/star.png");
    /* 图片为上图提供的纯黑色的五角星,图片默认会水平垂直方向重复 */
    mask-image: url("./images/star.png");
  }
</style>
<img src="./images/ms.jpg" class="mask" />
```

说明：

这个例子使用了一个纯黑色的五角形图像作为遮罩层，则图片在五角星区域内可见。

> 因为遮罩图像默认可水平垂直方向重复，所以会看到如下图所示效果

![image-20250524234803526](https://www.arryblog.com/assets/img/image-20250524234803526.e9392014.png)

使用从不透明到完全透明的图片做为遮罩层 （以下是图片素材）

![bg](https://www.arryblog.com/assets/img/bg.44883fc1.png)

```html
<style>
  img {
    mask-image: url(./images/bg.png);
  }
</style>
<img src="./images/ms.jpg" alt="" />
```

最终呈现如下效果

![image-20250620162457429](https://www.arryblog.com/assets/img/image-20250620162457429.741262d5.png)

### 1.2、使用 CSS 渐变作为遮罩层

```html
<style>
  .mask {
    /* 添加兼容型前缀 */
    /* 从上往下的径向渐变（从粉色到看不见） */
    -webkit-mask-image: linear-gradient(pink, transparent);
    mask-image: linear-gradient(pink, transparent);
  }
</style>
<img src="./images/ms.jpg" class="mask" />
```

说明：

这个例子使用了一个从上到下，从完全不透明到完全透明的渐变图像作为遮罩层。则图片呈现从上到下，从完全不透明到完全透明的效果

> （如下图）

![image-20250524215933860](https://www.arryblog.com/assets/img/image-20250524215933860.78502aa7.png)

### 2、mask-mode 指定遮罩模式



`mask-mode` 属性指定遮罩图像是作为亮度遮罩还是 alpha 遮罩。

> 它接受以下三种值

| 属性         | 说明                                                         |
| :----------- | :----------------------------------------------------------- |
| alpha        | 使用图像的 alpha 通道（透明度）作为遮罩依据（默认）。也就是图像不透明区元素可见，完全透明区元素不可见。适用于带透明度的遮罩图像， |
| luminance    | 使用图像的亮度（黑白亮度）值作为遮罩依据。适用于渐变或黑白像，也就是亮或白的区域使元素更可见，较暗或黑的区域使元素更透明 |
| match-source | 如果 mask-image 的值类型是`<image>`，掩码层图像的 alpha 值应用作掩码值 如果[`mask-image` (opens new window)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-image)属性是`<mask-source>`类型，掩模层图像的亮度值会被作为掩模值。 |

### 2.1、alpha 透明度



- 使用图像的 alpha 通道 （透明度）作为遮罩依据（默认）。也就是图像不透明区元素可见，完全透明区元素不可见。
- 适用于 png （带透明度）、SVG 等遮罩图像

```html
<style>
  .box {
    width: 200px;
    height: 200px;
    background-color: khaki;
  }
  .mask {
    /* 从上到下，黑色从完全可见到完全不可见的透明渐变 */
    mask-image: linear-gradient(#000, transparent);
    /* 默认值，写和不写效果都一样 */
    mask-mode: alpha; /* 完全部透明区可见，完全透明区不可见 */
  }
</style>
<div class="box mask"></div>
```

![image-20250524231934823](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUEAAAFiCAIAAADnVP3+AAAE/ElEQVR4nO3cMUpEQRBF0flibuw6XYfrNHYF31yoZmih5cI56UzQyeNVfZq+7vt+AFkv/30A4E9kGNpkGNpkGNpkGNpkGNpkGNpkGNpepx++vz5PngP45e3945m/6WFoG3v48bjOnQLYpYehTQ9Dmx6GtrmHLz0MAXoY2mQY2nzTgrYxwxIMCXoY2uzD0CbD0CbD0GYfhjY9DG16GNoW96UPngLYpYehzT4MbTIMbWZpaNPD0CbD0GaWhjY9DG0yDG1maWjTw9A2v6flfWko0MPQZh+GNj0MbTIMbWZpaNPD0CbD0GaWhjY9DG0yDG1maWjzvjS06WFosw9Dmx6GNj0MbTIMbTIMbfZhaJvf0zp5CmCXHoY2+zC0yTC0Le5Lm6UhQA9Dm29a0KaHoU0PQ5sehjYZhjYZhjb7MLTpYWjTw9Cmh6HNfWlo08PQJsPQ5psWtHlPC9r0MLTZh6FNhqFNhqHNPgxtehja9DC0Le5LHzwFsEsPQ5t9GNpkGNrM0tCmh6FNhqHNLA1tehjaZBjazNLQpoehbX5Py/vSUKCHoc0+DG16GNpkGNrM0tCmh6FNhqHNLA1tehjaZBjazNLQ5n1paNPD0GYfhjY9DG16GNpkGNpkGNrsw9A2v6d18hTALj0MbfZhaJNhaFvclzZLQ4AehjbftKBND0ObHoY2PQxtMgxtMgxt9mFo08PQpoehTQ9Dm/vS0KaHoU2Goc03LWjznha06WFosw9DmwxDmwxDm30Y2vQwtOlhaFvclz54CmCXHoY2+zC0yTC0maWhTQ9DmwxDm1ka2vQwtMkwtJmloU0PQ9v8npb3paFAD0ObfRja9DC0yTC0maWhTQ9DmwxDm1ka2vQwtMkwtJmloc370tCmh6HNPgxtehja9DC0yTC0yTC02YehbX5P6+QpgF16GNrsw9Amw9C2uC9tloYAPQxtvmlBmx6GNj0MbXoY2mQY2mQY2uzD0KaHoU0PQ5sehjb3paFND0ObDEObb1rQ5j0taNPD0GYfhjYZhjYZhjb7MLTpYWjTw9C2uC998BTALj0MbfZhaJNhaDNLQ5sehjYZhjazNLTpYWiTYWgzS0ObHoa2+T0t70tDgR6GNvswtOlhaJNhaDNLQ5sehjYZhjazNLTpYWiTYWgzS0Ob96WhTQ9Dm30Y2vQwtOlhaJNhaJNhaLMPQ9v8ntbJUwC79DC02YehTYahbXFf2iwNAXoY2nzTgjY9DG16GNr0MLTJMLTJMLTZh6FND0ObHoY2PQxt7ktDmx6GNhmGNt+0oM17WtCmh6HNPgxtMgxtMgxt9mFo08PQpoehbXFf+uApgF16GNrsw9Amw9BmloY2PQxtMgxtZmlo08PQJsPQZpaGNj0MbfN7Wt6XhgI9DG32YWjTw9Amw9BmloY2PQxtMgxtZmlo08PQJsPQZpaGNu9LQ5sehjb7MLTpYWjTw9Amw9Amw9BmH4a2+T2tk6cAdulhaLMPQ5sMQ9vivrRZGgL0MLT5pgVtehja9DC06WFok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fok2Fo+wGefgpsExNogAAAAABJRU5ErkJggg==)

### 2.2、luminance 亮度



- 使用图像的亮度值作为遮罩依据。也就是亮（白） 的区域使元素更可见，较暗（黑） 的区域使元素更透明
- 适用于渐变 或 黑白遮罩图像

```html
<style>
  .box {
    width: 200px;
    height: 200px;
    background-color: khaki;
  }
  .mask {
    /* 从上到下，黑色到白色的渐变 */
    mask-image: linear-gradient(#000, #fff);
    mask-mode: luminance; /* 黑的部分不可见，白的部分可见 */
  }
</style>
<div class="box mask"></div>
```

![image-20250524232330332](data:image/png;base64,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)

### 3、mask-repeat 遮罩图像重复



`mask-repeat` 属性定义遮罩图像是否以及如何重复，类似于`background-repeat`。

```html
<style>
  .box {
    width: 300px;
    height: 200px;
    border: 1px solid red;
  }
  .mask {
    /* 添加兼容型前缀 */
    -webkit-mask-image: url("./images/star.png");
    /* 图片为上图提供的纯黑色的五角星,图片默认会水平垂直方向重复 */
    mask-image: url("./images/star.png");
    /* 可以将以下值修改为  repeat-x repeat-y no-repeat 查看不同效果*/
    mask-repeat: no-repeat;
  }
</style>
<div class="box">
  <img src="./images/ms.jpg" class="mask" />
</div>
```

| mask-repeat 属性值 | 说明                           | 渲染效果                                                     |
| :----------------- | :----------------------------- | :----------------------------------------------------------- |
| repeat             | 默认值，水平和垂直两个方向重复 | ![image-20250525131918052](https://www.arryblog.com/assets/img/image-20250525131918052.57e82a6e.png) |
| repeat-x           | 水平方向重复                   | ![image-20250525132005724](https://www.arryblog.com/assets/img/image-20250525132005724.f94f28b7.png) |
| repeat-y           | 垂直方向重复                   | ![image-20250525132045590](https://www.arryblog.com/assets/img/image-20250525132045590.2c00f3ed.png) |
| no-repeat          | 不重复                         | ![image-20250525132133353](https://www.arryblog.com/assets/img/image-20250525132133353.fe54731b.png) |

### 4、mask-position 遮罩图像位置



`mask-position` 属性设置遮罩图像在元素内的初始位置，类似于`background-position`。

```html
<style>
  .box {
    width: 300px;
    height: 200px;
    border: 1px solid red;
  }
  .mask {
    /* 添加兼容型前缀 */
    -webkit-mask-image: url("./images/star.png");
    /* 图片为上图提供的纯黑色的五角星,图片默认会水平垂直方向重复 */
    mask-image: url("./images/star.png");
    /* 遮罩图像不重复 */
    mask-repeat: no-repeat;
    /* 遮罩图像位置*/
    mask-position: 50px 0px;
  }
</style>
<div class="box">
  <img src="./images/ms.jpg" class="mask" />
</div>
```

| mask-position 属性值 | 说明                                             | 渲染效果                                                     |
| :------------------- | :----------------------------------------------- | :----------------------------------------------------------- |
| `50px 0px`           | 遮罩图像位于元素左上角水平 50px，垂直 0px 的位置 | ![image-20250525131114983](https://www.arryblog.com/assets/img/image-20250525131114983.dba32e15.png) |
| `left center`        | 遮罩图像位于元素左侧中间                         | ![image-20250525130710320](https://www.arryblog.com/assets/img/image-20250525130710320.9f4135cf.png) |
| `center`             | 遮罩图像位于元素中间                             | ![image-20250525130843657](https://www.arryblog.com/assets/img/image-20250525130843657.353cf1c2.png) |
| `100% 100%`          | 遮罩图像位于元素右下角（right bottom)            | ![image-20250525130930622](https://www.arryblog.com/assets/img/image-20250525130930622.ceee87b0.png) |

### 5、mask-size 遮罩层图像大小



`mask-size` 属性指定遮罩图像的大小，类似于`background-size`。

```html
<style>
  .box {
    width: 300px;
    height: 200px;
    border: 1px solid red;
  }
  .mask {
    /* 添加兼容型前缀 */
    -webkit-mask-image: url("./images/star.png");
    /* 图片为上图提供的纯黑色的五角星 */
    mask-image: url("./images/star.png");
    mask-repeat: no-repeat; /* 遮罩图像重复度 */
    /* 遮罩层图像大小 */
    mask-size: 200px 200px;
  }
</style>
<div class="box">
  <img src="./images/ms.jpg" class="mask" />
</div>
```

| mask-size 属性值 | 说明                                                         | 渲染效果                                                     |
| :--------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 300px 200px      | 遮罩图像宽 `300px` ,高 `200px`                               | ![image-20250525134811458](https://www.arryblog.com/assets/img/image-20250525134811458.d60c9e08.png) |
| 300px auto       | 遮罩图像宽 `300px` 高自动等比缩放                            | ![image-20250525134920927](https://www.arryblog.com/assets/img/image-20250525134920927.324caf4b.png) |
| contain          | 遮罩图像等比缩放到正好完全填充到元素内                       | ![image-20250525135003627](https://www.arryblog.com/assets/img/image-20250525135003627.64562c0e.png) |
| cover            | 遮罩图像宽高等比缩放，正好完全覆盖掉元素（有部分可能会被裁剪） | ![image-20250525135022451](https://www.arryblog.com/assets/img/image-20250525135022451.6f5e44f3.png) |

### 6、mask-clip 遮罩图像延伸区域



`mask-clip` 属性指定遮罩图像的延伸区域，类似于`background-clip`。

```html
<style>
  .wrap {
    display: inline-block;
    border: 2px solid red;
  }
  .box {
    width: 200px; /* 内容宽 */
    height: 100px;
    border: 20px solid blue; /* 边框 */
    padding: 50px; /* 内边距 */
    background-color: khaki;
  }
  .mask {
    /* 添加兼容型前缀 */
    -webkit-mask-image: url("./images/star.png");
    /* 图片为上图提供的纯黑色的五角星 */
    mask-image: url("./images/star.png");
    /* mask-repeat:no-repeat;  遮罩图像重复度 */
    mask-position: 0 0; /* 遮罩层背景图居中 */
    mask-clip: border-box; /* 遮罩图像延伸区域 */
  }
</style>

<div class="wrap">
  <div class="box mask"></div>
</div>
```

| mask-clip 属性值 | 说明                                  | 渲染效果                                                     |
| :--------------- | :------------------------------------ | :----------------------------------------------------------- |
| border-box       | **默认值**。 遮罩效果会延伸到边框区域 | ![image-20250525180154494](https://www.arryblog.com/assets/img/image-20250525180154494.d0e21051.png) |
| padding-box      | 遮罩效果会延伸到内边距区域            | ![image-20250525180434151](https://www.arryblog.com/assets/img/image-20250525180434151.0185e4c0.png) |
| content-box      | 遮罩效果只延伸到内容区域              | ![image-20250525180513763](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAg0AAAF1CAIAAADk407yAAAXRklEQVR4nO3d23IbR7ag4Vwrswo8iKRInS2Pt7W7+2YuJmK/0n6FeY55lnmVibnYEXu6W/b2QbZOlEiKJFBVudZcUHK73Va2RAIoJPB/4QuHLQEZWCT+QqJQEHcPAAB8hI69AADASkt/+1eR8ZYBAFgN/7DJxOsJAEAJnQAAlKTf+W+8sw0Am+bjbz3wegIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAlaewFrJWTn/7Xp/yx2H7RbP2p3f7vojuLXtIcuV10l//RT/+cu2djr2VkTHBlHTz6n2MvYQ3xemIsHoKPvYbPVeOaF6fGR6PGNWN8dGIM7sHr/HWtd+XzVe/jUO/KMR46MZZKf1crXfYiVPpQVLpsjIlOjKLq39WqFz8vVT8IVS8eI6ATo6h3m7jelc9XvY9DvSvHaOjEONzNa9smdnd3G3sVq4IJYnPQCQBACZ0YRb2v/etd+XzV+zjUu3KMhk6Mot7f1XpXPl/1Pg71rhyjoRNjqfR3tdJlL0KlD0Wly8aY6MQY3Os8rPMQ+JRWCIEJYrPQiZFU+rta6bIXodKH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WCYmiI1CJ0bidV6UrdJlL0KlD0Wly8ao6MQ4vM6Ld1a67EWo9KGodNkYF50YgQev9iLPzhNNYILYMOK/vA6VD5utvDIFgE3z8QTwegIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAldAIAUEInAAAl6Xf+m8jSlwEAWFG8ngAAlNAJAEDJr/ad3MdbBgBgRfF6AgBQQicAACV0AgBQQicAACX/H7yhXZx2/uTqAAAAAElFTkSuQmCC) |

### 7、mask-origin 遮罩图像定位区域



`mask-origin` 属性指定遮罩图像的初始定位区域，类似于`background-origin`。

```html
<style>
  .wrap {
    display: inline-block;
    border: 2px solid red;
  }
  .box {
    width: 200px;
    height: 100px;
    border: 20px solid blue;
    padding: 50px;
    background-color: khaki;
  }
  .mask {
    /* 添加兼容型前缀 */
    -webkit-mask-image: url("./images/star.png");
    /* 图片为上图提供的纯黑色的五角星 */
    mask-image: url("./images/star.png");
    mask-repeat: no-repeat; /* 遮罩图像重复度 */
    mask-position: 0 0; /* 遮罩层背景图居中 */
    /* 遮罩图层初始定位区域 ,
        决定了mask-position设置的坐标相对于那个区域定位
        */
    mask-origin: padding-box;
  }
</style>

<div class="wrap">
  <div class="box mask"></div>
</div>
```

| mask-origin 属性值 | 说明                                           | 渲染效果                                                     |
| :----------------- | :--------------------------------------------- | :----------------------------------------------------------- |
| border-box         | **默认值**，遮罩图像初始定位区域为元素边框区域 | ![image-20250525181729484](data:image/png;base64,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) |
| padding-box        | 遮罩图像初始定位区域为元素内边距区域           | ![image-20250525181916029](data:image/png;base64,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) |
| content-box        | 遮罩图像初始定位区域为元素内容区               | ![image-20250525181847964](data:image/png;base64,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) |

### 8、多属性值写法



前面我们学过的 `mask-image`、 `mask-position`、`mask-size` `mask-repeat` `mask-clip`、 `mask-origin` 属性都可以设置多组值，每组值之间用逗号分隔开来。

> 每个属性之间用逗号分隔的值，都是按顺序一一对应的，如果对应后面的值没有写，则以当前属性设置的第一组值为默认值显示。

```html
<style>
  .wrap {
    display: inline-block;
    border: 2px solid red;
  }
  .mask {
    width: 300px;
    height: 200px;
    padding-top: 50px;
    /* 背景图片 */
    background-image: url("./images/ms.jpg");
    /* background-color: khaki; */
    /* background-image: url('./images/star.png') ,radial-gradient(50px at 150px 50px,red,red 100%,transparent); */
    /* 遮罩图像，第一个图像是一个五角星，第二个图像是一个半径为 50px的圆 */
    mask-image: url("./images/star.png"), radial-gradient(50px at 50%, red, red
          100%, transparent);
    /* 遮罩图像大小，第一个宽高为 50px，第二个宽高为 100px*/
    mask-size: 50px 50px, 100px 100px;
    /* 遮罩图像位置,两个图像位置坐标都是 0 0*/
    mask-position: 0 0;
    /* 遮罩图像重复度，第一个沿x轴重复，第二个沿 x 和 y 两个方向重复 */
    mask-repeat: repeat-x, repeat;
    /* 遮罩图像延伸区域 ，第一个延伸到边框区域，第二个延伸到内容区域 */
    mask-clip: border-box, content-box;
    /* 遮罩图像定位区域 ，第一个定位区域为边框区域，第二个定位区域为内容区域 */
    mask-origin: border-box, content-box;
  }
</style>
<div class="wrap">
  <div class="mask"></div>
</div>
```

![image-20250525193901833](https://www.arryblog.com/assets/img/image-20250525193901833.821c05a9.png)

### 9、mask-composite 遮罩图像如何合成操作



[CSS (opens new window)](https://developer.mozilla.org/zh-CN/docs/Web/CSS)属性 **`mask-composite`** 属性指定多个遮罩图像如何组合在一起。

> 以下表格中列出的所有组合模式

| 属性值    | 说明                                               |
| :-------- | :------------------------------------------------- |
| add       | 将多个遮罩图像相加，显示他们的并集（显示区域并集） |
| subtract  | 显示上层遮罩图像有，而下层遮罩图像没有的部分       |
| intersect | 显示所有遮罩图像重叠的部分（显示区交集）           |
| exclude   | 显示所有遮罩图像不重叠的区域                       |

注意：

遮罩图像在组合时，是按 `mask-image` 后面值的书写顺序从后往前来组合的。

> 写在前面的叫上层，写在后面的叫下层

```html
<style>
  .wrap {
    display: inline-block;
    border: 2px solid red;
  }
  .mask {
    width: 200px;
    height: 100px;
    /* 背景图片 */
    background-image: url("./images/ms.jpg");
    /* background-image: radial-gradient(50px at 50px 50px,red,red 100%,transparent), 
        radial-gradient(50px at 100px 50px,blue,blue 100%,transparent),
        radial-gradient(50px at 150px 50px,green,green 100%,transparent); */
    mask-image: radial-gradient(50px at 50px 50px, red, red 100%, transparent),
      radial-gradient(50px at 100px 50px, blue, blue 100%, transparent),
      radial-gradient(50px at 150px 50px, green, green 100%, transparent);
    /* 遮罩图合成操作 */
    mask-composite: add;
  }
</style>

<div class="wrap">
  <div class="mask"></div>
</div>
```

| 属性值            | 渲染效果                                                     |
| :---------------- | :----------------------------------------------------------- |
| add               | ![image-20250525200505391](https://www.arryblog.com/assets/img/image-20250525200505391.aeb3eaa6.png) |
| subtract          | ![image-20250525200832517](https://www.arryblog.com/assets/img/image-20250525200832517.e5ec6b90.png) |
| intersect（交叉） | ![image-20250525201850865](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATwAAACpCAIAAAA5uxYVAAACKUlEQVR4nO3aMQqEMBQAUSO5/5WztayC22wYeK8z1W+Gb9Cx1jqAjnP3AMBvRAsxooUY0UKMaCFmXp7G2DQG8ODr+45NCzGihZh5f+yPC9jr+a5q00KMaCFGtBAjWogRLcSIFmJECzGihRjRQoxoIUa0ECNaiBEtxIgWYkQLMaKFGNFCjGghRrQQI1qIES3EiBZiRAsxooUY0UKMaCFGtBAjWogRLcSIFmJECzGihRjRQoxoIUa0ECNaiBEtxIgWYkQLMaKFGNFCjGghRrQQI1qIES3EiBZiRAsxooUY0UKMaCFGtBAjWogRLcSIFmJECzGihRjRQoxoIUa0ECNaiBEtxIgWYkQLMaKFGNFCjGghRrQQI1qIES3EiBZiRAsxooUY0UKMaCFGtBAjWogRLcSIFmJECzGihRjRQoxoIUa0ECNaiBEtxIgWYkQLMaKFGNFCjGghRrQQI1qIES3EiBZiRAsxooUY0UKMaCFGtBAjWogRLcSIFmJECzGihRjRQoxoIUa0ECNaiBEtxIgWYkQLMaKFGNFCjGghRrQQI1qIES3EiBZiRAsxooUY0UKMaCFGtBAjWogRLcSIFmJECzGihRjRQoxoIUa0ECNaiBEtxIgWYkQLMaKFGNFCjGghRrQQI1qIES3EiBZiRAsxooUY0UKMaCFGtBAjWogRLcTM++Mx/jsG8JZNCzGihZjr6/Fam8YA3rJpIUa0ECNaiBEtxIgWYkQLMR80RwpXlXSetAAAAABJRU5ErkJggg==) |
| exclude           | ![image-20250525201315228](https://www.arryblog.com/assets/img/image-20250525201315228.b55b4f3b.png) |

### 10、mask 遮罩复合写法



CSS mask 属性为`mask-image`、 `mask-position` 、`mask-size` 、 `mask-repeat`、 `mask-clip` 、 `mask-origin` 、`mask-composit` 这些属性的简写。

**语法**

```css
mask: mask-image mask-position/mask-size mask-repeat mask-clip mask-origin
  mask-composit;
```

**代码示例**

```html
<style>
  .layout {
    display: inline-block;
    background-color: skyblue;
  }
  .mask {
    width: 300px;
    height: 200px;
    background-image: url("./images/star.png");
    mask: url("./images/star.png") no-repeat center/100px 100px;
  }
</style>

<div class="layout">
  <div class="mask">
    <img src="./images/ms.jpg" alt="" />
  </div>
</div>
```

![image-20250620172703325](https://www.arryblog.com/assets/img/image-20250620172703325.6aee9e67.png)

### 11、实战应用：实现元素倒影

![image-20250601214748590](https://www.arryblog.com/assets/img/image-20250601214748590.16feee0f.png)

```css
.box-reflect {
  width: 200px;
  height: 200px;
  position: relative; /* 相对定位 */
}
.box-reflect img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  position: absolute; /* 绝对定位 */
  left: 0;
  top: 0;
}
.box-reflect img.reflect {
  top: 1px; /* 用来实现倒影与元素之间的间距 */
  transform-origin: bottom center;
  transform: rotateX(-180deg);
  /* 添加蒙版 */
  /* 因为图片旋转了180deg ,所以蒙版 方向也改变了*/
  mask: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8));
}
<div class="box-reflect">
  <img src="./caomei.png" />
  <img src="./caomei.png" class="reflect" />
</div>
```

### 12、实战应用：实现四角线框

![GIF2025-4-218-43-51-17435906701854](https://www.arryblog.com/assets/img/GIF2025-4-218-43-51-17435906701854.554e2fef.gif)

以下代码用来实现上图动画中的 四角线框布局

```html
<style>
  .box {
    width: 200px;
    height: 200px;
    border: 2px solid rgba(0, 0, 0, 0.5);
    margin: 10px;
    float: left;
  }
  .bg {
    background-image: linear-gradient(red, red), linear-gradient(red, red),
      linear-gradient(red, red), linear-gradient(red, red);
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: 0 0, 184px 0, 184px 184px, 0 184px;
    background-origin: border-box;
  }
  .mask {
    mask: linear-gradient(red, red), linear-gradient(red, red), linear-gradient(
        red,
        red
      ), linear-gradient(red, red);
    mask-size: 20px 20px;
    mask-repeat: no-repeat;
    mask-position: 0 0, 184px 0, 184px 184px, 0 184px;
    /* mask-origin: border-box; 
        默认值就是 border-box  */
  }

  .mask2 {
    /* background-image: conic-gradient(
        at 20px 20px,
        transparent 270deg,
        red 270deg
        ); 
        background-origin: border-box; */
    background-size: calc(100% - 20px) calc(100% - 20px);
    mask: conic-gradient(at 20px 20px, transparent 270deg, red 270deg);
    mask-size: calc(100% - 20px) calc(100% - 20px);
  }
</style>
<div class="box bg"></div>
<div class="box mask"></div>
<div class="box mask2"></div>
```

![image-20250620180426792](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAg8AAACrCAIAAABuVegkAAAC+ElEQVR4nO3d22rCQBRA0aT0v518efpcC90ZbfDStfBFCWHgRLYRGdd93xcA+NXHoxcAwAtQCwCaWgDQ1AKA9nn1fKzr3Akulz9bC3fatoMHjsmfNowxTj2e8xyfxdlTdlU8g3umdl2LZVlmTzZ1OCc6VovbBuat/qIODu62+boqXs7UyK4O9k0UAE0tAGhqAUBTCwCaWgDQ1AKAphYANLUAoKkFAE0tAGhqAUBTCwCaWgDQ1AKAtu7f/+pgjGEX4vdmxMAN3FsA0NQCgKYWADS1AKCpBQBNLQBoagFAUwsAmloA0NQCgKYWADS1AKCpBQBNLQBoagFAUwsAmloA0NQCgKYWADS1AKCpBQBNLQBoagFAUwsAmloA0NQCgKYWADS1AKCpBQBNLQBoagFAUwsAmloA0NQCgKYWADS1AKCpBQBNLQBoagFAUwsAmloA0NQCgKYWADS1AKCpBQBNLQBoagFAUwsAmloA0NQCgKYWADS1AKCpBQBNLQBoagFAUwsAmloA0NQCgKYWADS1AKCpBQBNLQBoagFAUwsAmloA0NQCgKYWADS1AKCpBQBNLQBoagFAUwsAmloA0NQCgKYWADS1AKCpBQBNLQBoagFAUwsAmloA0NQCgKYWADS1AKCpBQBNLQBoagFAUwsAmloA0NQCgKYWADS1AKCpBQBNLQBoagFAUwsAmloA0NQCgKYWADS1AKCpBQBNLQBoagFAUwsAmloA0NQCgKYWADS1AKCpBQBNLQBoagFAUwsAmloA0NQCgKYWADS1AKCpBQBNLQBoagFAUwsAmloA0NQCgKYWADS1AKCpBQBNLQBoagFAUwsAmloA0NQCuMUY49FL4FxXI1YLANqPWmzbsq4TD57HwZFt2+yJfYp8e0ZMcm8BQFMLAJpaANDUAoCmFgA0tQCgqQUATS0AaGoBQFMLAJpaANDUAoD2+fOlud3FbEb2P0ztOmeLuudx6ixcFS/nnims+77/4VIAeEu+iQKgqQUATS0AaF96dUAPcBxn+wAAAABJRU5ErkJggg==)

### 13、实战应用：3D 立体文字

![image-20250620182945195](https://www.arryblog.com/assets/img/image-20250620182945195.d90e0b9b.png)

```html
<style>
  body {
    margin: 0;
  }
  .container {
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(35, 152, 154);
  }
  .text {
    font-size: 150px;
    color: #fff;
    font-weight: bold;
    position: relative;
    z-index: 1; /* 创建自己的层叠上下 */
  }
  .text::after {
    content: "ICODING";
    position: absolute;
    left: 0;
    top: 0;
    color: #000;
    transform: translate(-77px, 22px) scaleY(0.6) skewX(50deg);
    /* 控制文字阴影在文字下面显示 */
    z-index: -1;
    /* 添加滤镜 */
    filter: blur(3px);
    /* 添加遮罩层 */
    mask: linear-gradient(transparent, #000);
  }
</style>

<div class="container">
  <div class="text">ICODING</div>
</div>
```

## 三、backdrop-filter 元素后面区域效果



**`backdrop-filter`** [CSS (opens new window)](https://developer.mozilla.org/zh-CN/docs/Web/CSS)属性可以让你为一个元素**后面区域**添加图形效果（如模糊或颜色偏移）。

> 因为它适用于元素背后的所有元素，为了看到效果，必须使元素或其背景至少部分透明。

```css
/* 
* backdrop-filter 属性用于为元素后面的区域添加图形效果
* 它会在元素背景（即"背后内容"）上应用滤镜效果
* 类似于 filter 属性，但影响的是元素背后的内容而非元素本身
*/

/* 1. 关键字值 - 不应用任何滤镜效果 */
backdrop-filter: none;

/* 2. 使用SVG滤镜 
* 通过URL引用SVG文件中定义的滤镜
* 这里引用的是 common-filters.svg 文件中的 id="filter" 的滤镜
*/
backdrop-filter: url(common-filters.svg#filter);

/* 3. 滤镜函数值 - 各种内置滤镜效果 */

/* 高斯模糊效果 - 2像素半径的模糊 */
backdrop-filter: blur(2px);

/* 亮度调整 - 降低到原始亮度的60% */
backdrop-filter: brightness(60%);

/* 对比度调整 - 降低到原始对比度的40% */
backdrop-filter: contrast(40%);

/* 投影效果 - 右4px下4px的蓝色投影，10px模糊半径 */
backdrop-filter: drop-shadow(4px 4px 10px blue);

/* 灰度转换 - 30%程度的灰度效果 */
backdrop-filter: grayscale(30%);

/* 色相旋转 - 将颜色旋转120度 */
backdrop-filter: hue-rotate(120deg);

/* 颜色反转 - 70%程度的颜色反转 */
backdrop-filter: invert(70%);

/* 透明度调整 - 降低到20%不透明度 */
backdrop-filter: opacity(20%);

/* 深褐色调 - 90%程度的深褐色效果 */
backdrop-filter: sepia(90%);

/* 饱和度调整 - 增加到原始饱和度的80% */
backdrop-filter: saturate(80%);

/* 4. 多重滤镜组合 
* 可以组合多个滤镜效果，按顺序应用
* 这里先应用SVG滤镜，然后4px模糊，最后150%饱和度
*/
backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);

/* 5. 全局值 - 标准的CSS全局关键字 */

/* 继承父元素的 backdrop-filter 值 */
backdrop-filter: inherit;

/* 重置为属性初始值（none） */
backdrop-filter: initial;

/* 回滚到浏览器或用户自定义的默认值 */
backdrop-filter: revert;

/* 回滚到上一层级的层值（CSS层叠上下文） */
backdrop-filter: revert-layer;

/* 取消任何滤镜效果（等同于 none） */
backdrop-filter: unset;
```

### 1、毛玻璃效果

```html
<style>
  .box {
    width: 800px;
    height: 600px;
    position: relative;
  }
  .box img {
    width: 800px;
    height: 600px;
    object-fit: cover;
  }
  .box::after {
    content: "";
    position: absolute;
    /* 相当于 top right bottom left 的值都是 80px*/
    inset: 80px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    /* 当前元素后面的图形添加模糊效果 */
    backdrop-filter: blur(10px);
    /* 亮度调整 - 降低到原始亮度的60% 
        backdrop-filter: brightness(60%);*/
    /* 对比度调整 - 提升对比度为原始的 200% 
        backdrop-filter: contrast(2);*/
  }
</style>
<div class="box">
  <img src="./images/16.png" />
</div>
```

![image-20250620190713717](https://www.arryblog.com/assets/img/image-20250620190713717.d5588de3.png)

`backdrop-filter` 属性不同值效果

| brightness(60%);                                             | contrast(2);                                                 |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![image-20250620191051886](https://www.arryblog.com/assets/img/image-20250620191051886.7ed72c60.png) | ![image-20250620191229761](https://www.arryblog.com/assets/img/image-20250620191229761.5626e923.png) |

## 四、backface-visibility



CSS 属性 **`backface-visibility`** 指定当元素背面朝向观察者时是否可见。

| 属性值  | 说明                     |
| :------ | :----------------------- |
| visible | 元素背面朝向用户时可见   |
| hidden  | 元素背面朝向用户时不可见 |

```html
<style>
  .box {
    width: 200px;
    height: 200px;
    border: 2px solid red;
    margin: 100px;
    perspective: 800px;
  }
  .item {
    width: inherit;
    height: inherit;
    background-color: khaki;
    transform-origin: bottom center;
    transition: transform 2s;
    /* 背面朝向用户时不可见 */
    backface-visibility: hidden;
  }
  .box:hover .item {
    transform: rotateX(180deg);
  }
</style>
<div class="box">
  <div class="item"></div>
</div>
```

以上代码，当元素旋转到大于 90deg 时，则元素是背面朝向用户的。

| hidden                                                       | visible                                                      |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![GIF2025-6-2019-23-44](data:image/gif;base64,R0lGODlhcADDAFUAACH5BAAUAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAcADDAKL6+vrw5oz/AADv7++oqKi0tLTNzc3JyckD/wi63P4wykmrvTjrzbv/YCiOZKkJaKqubOu+cCzPsSQEeK7vfO//wKBw+BPYiMikcskMGCO3pnRKHT4h0ap2S70+styw2Hocm888rwOMbovVDbZ7XoUz5PQ8077A6/9EfAp+gIVFZYaJQYIAhIqPjI6PiZGTljuVl5qZmpacnZCIoIqfo4alpoCoqXqrrHSur26xsmi0tWa3uG+iu7O9vrbAwbnDxLxQx7/JysLMzcXP0MhY09HV1tRf2dpr3GG630jh4mTS5VLk6EDq6z7t7mnG8ebY9Evw9zj5+vz3/vQAxhPojuA6g+gQllMojuE3h9wgZpNojeI0i9AwNtOojPHjMY/EQAYT6YvkLpO4UNZSKYvlK5esYKaSaYrmKJugcHbSuWmevkPnfgrheYmoJ59C5QVNCtQe00VIn+6LKtXoJKuhlkrFRPUpVlJdmX6lFDbp2FNlhUaiwbat27dwUZiYS7eu3bt48+rdy7ev37+AAwseTLiw4cOIEytezLix48eQI0ueTLmy5cuYM2vezLmz58+gQ4seTbq06dOoU6tezbq169ewY8ueTbu27du4c+vezbu379/AgwsfTry48ePIkytfzry58+fQo0ufTr269evYs2vfzr279+/KBww/MJyA+OAECpz/XYAAAQPreScAACH5BAEKAAAALGUANgALABMApAD/APj5+xcWGUJDTby1csjJzD49LwoKE7KzuCgoNMgBBOjo6uHh49bW2EtMV0sBDM7O0i4uOjMzP/Dw80IBC0NETmFibCwsOMLCySwADLO0vAAAAAAAAAAAAAAAAAAAAAVXoEAAZFkKxmieQbqSQtCqZiwbymrLVFHLwIEPBpQBhMQiIIDcGQEToTNQWgymJgZ2wL0CDxpABZE8EDIAxoVoBjwwAAfZ0AYoEoBG5BVvACR8CwkWEAAhACH5BAEKAAAALAYABQBqAGMApQD/APj5+/799fDmjPn10PTusPPsqPHomPLqofDnkPfxwBcWGfr22PbwuPjzyLy1cv8AAD89MD49L/v43PXvuEdFNSkoJPHolPv44AoKE/jzyuHh46iiaMK6ddbW2PjzxfDw8/PqocLC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) | ![GIF2025-6-2019-23-02](https://www.arryblog.com/assets/img/GIF2025-6-2019-23-02.6e70ac37.gif) |

## 五、专项训练案例（作业）



作业参考视频 [30 个 HTML+CSS 实战小案例详解(opens new window)](https://www.icodingedu.com/goods/show/82?targetId=91&preview=0)

### 1、实战应用：可拖拽的环绕式照片墙(布局)

![GIF2025-06-2318-32-20](https://www.arryblog.com/assets/img/GIF2025-06-2318-32-20.03031dcd.gif)

**静态布局版**

```html
<style>
  .ring {
    /* overflow: hidden; */
    /* width: 1400px; */
    width: 100%;
    margin: 200px auto;
    height: 600px;
    /* border: 5px solid red; */
    /* 设置透视距离，使3D效果更明显，模拟人站在离屏幕 900px的位置看物体 */
    perspective: 1000px;
    --length: 10; /* 确定展示图片的个数*/
  }

  .imgwrap {
    width: 400px;
    height: 400px;
    /* border: 2px solid blue; */
    margin: 0 auto;
    position: relative;
    /* 设置元素的子元素是位于 3D 空间中 */
    transform-style: preserve-3d;
  }

  .imgwrap img {
    width: 100%;
    height: 100%;
    /* 保持图片的宽高比，正好填充满容器 */
    object-fit: cover;
    position: absolute;
    /* 动态计算每个图片旋转的角度 =
        360deg / 总图片个数 * 每个图片对应的索引 
        */
    --angle: calc(360deg / var(--length) * var(--index));
    /* 对图片进行先旋转 再位移 */
    transform: rotateY(var(--angle)) translateZ(-700px);
    /* 元素背面朝向用户时不可见 */
    backface-visibility: hidden;
  }
</style>
<div class="ring">
  <div class="imgwrap">
    <img src="./images/01.png" style="--index:0" />
    <img src="./images/02.png" style="--index:1" />
    <img src="./images/03.png" style="--index:2" />
    <img src="./images/04.png" style="--index:3" />
    <img src="./images/05.png" style="--index:4" />
    <img src="./images/06.png" style="--index:5" />
    <img src="./images/07.png" style="--index:6" />
    <img src="./images/08.png" style="--index:7" />
    <img src="./images/09.png" style="--index:8" />
    <img src="./images/10.png" style="--index:9" />
  </div>
</div>
```

**完整的 JS 版本**

```html
<style>
  body {
    /* background-color: #000; */
  }

  .ring {
    overflow: hidden;
    /* width: 1400px; */
    width: 100%;
    margin: 100px auto;
    height: 600px;
    /* border: 5px solid red; */
    /* 设置透视距离，使3D效果更明显，模拟人站在离屏幕 900px的位置看物体 */
    perspective: 1000px;
  }

  .imgwrap {
    width: 400px;
    height: 400px;
    /* border: 2px solid blue; */
    margin: 0 auto;
    position: relative;
    /* 设置元素的子元素是位于 3D 空间中 */
    transform-style: preserve-3d;
  }

  .imgwrap img {
    width: 100%;
    height: 100%;
    /* 保持图片的宽高比，正好填充满容器 */
    object-fit: cover;
    position: absolute;

    backface-visibility: hidden;
  }
</style>
<div class="ring">
  <div class="imgwrap">
    <img src="./images/01.png" />
    <img src="./images/02.png" />
    <img src="./images/03.png" />
    <img src="./images/04.png" />
    <img src="./images/05.png" />
    <img src="./images/06.png" />
    <img src="./images/07.png" />
    <img src="./images/08.png" />
    <img src="./images/09.png" />
    <img src="./images/10.png" />
  </div>
</div>
<script>
  // 获取所有图片
  let items = document.querySelectorAll(".ring img");
  // 得到图片的总个数
  const length = items.length;

  // 给每一个元素设置旋转的角度，让其围绕中心旋转一圈
  items.forEach((item, index) => {
    let angle = (360 / length) * index + "deg";
    item.style.transform = `rotateY(${angle}) translateZ(-700px)`;
  });

  // 环形元素的初始旋转角度
  let angle = 0;
  // 环形元素新的角度值
  let newAngle = 0;
  // 获取放置图片的容器
  let imgWrap = document.querySelector(".imgwrap");

  // 获取最外成容器
  let ring = document.querySelector(".ring");
  // 监听mousedown 事件
  ring.addEventListener("mousedown", function (e) {
    // 阻止默认行为
    e.preventDefault();
    // 记录鼠标按下时相对于浏览器可视区x的坐标
    let startX = e.clientX;

    // 监听 document 的 mousemove 事件
    document.addEventListener("mousemove", mousemoveHandler);
    function mousemoveHandler(e) {
      //鼠标移动时相对于*对于浏览器可视区 x 的坐标  endX
      let endX = e.clientX;
      // 计算鼠标移动的距离
      let moveX = endX - startX;
      // 圆的半径 700 ,计算圆的周长 2πr = 700 * Math.PI * 2
      const circumference = 2 * Math.PI * 700;
      // 计算环形元素的旋转角度
      newAngle = parseInt(angle - (moveX / circumference) * 360);
      // 设置环形元素的旋转角度
      imgWrap.style.transform = `rotateY(${newAngle}deg)`;
    }

    // 监听 document 的 mouseup 事件
    document.addEventListener("mouseup", mouseupHandler);
    function mouseupHandler(e) {
      // 更新角度值
      angle = newAngle;
      // 移除 mousemove 和 mouseup 的监听
      document.removeEventListener("mousemove", mousemoveHandler);
      document.removeEventListener("mouseup", mouseupHandler);
    }
  });
</script>
```

### 2、实战应用：3D 数字卡片翻转

![GIF2025-6-2019-38-55](https://www.arryblog.com/assets/img/GIF2025-6-2019-38-55.f9f2367b.gif)

```html
<style>
  .number-card {
    width: 200px;
    height: 200px;
    border: 2px solid #000;
    margin: 50px auto;
    position: relative;
    /* 设置透视距离，让卡片有3D效果 */
    perspective: 500px;
  }

  .number-card::before {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #666;
    /* 分隔线相对父元素绝对定位在容器中间 */
    position: absolute;
    top: calc(50% - 1px);
    left: 0;
    /* 设置 z-index的值大一些，确保线条在所有卡片之上 */
    z-index: 99;
  }

  .card {
    width: 100%;
    height: 50%;
    background-color: #ddd;
    /*  省略部分css  ，具体见前面 .... */
    position: absolute;
    left: 0;
    top: 0;
    /* 字体大小 */
    font-size: 150px;
    /* 水平居中 */
    text-align: center;
    line-height: 200px;
    /* 将行高设为 200px ，这样文字垂直方向中心就对齐了容器中心 */
    overflow: hidden;
  }

  .card1-down {
    /* 向下移动50%的高度 */
    top: 50%;
    line-height: 0;
    /* 设置旋转的原点为顶部中心 */
    transform-origin: top center;
    /* 向止旋转 180deg */
    transform: rotateX(180deg);
    /* 元素背面朝向用户时，不可见 */
    backface-visibility: hidden;
    /* 添加过渡动画 */
    transition: transform 0.5s;
    z-index: 10;
  }

  /* 鼠标移入后效果 */
  .number-card:hover .card1-down {
    transform: rotateX(0deg);
  }

  .card2-up {
    /* 省略部分css ，具体见前面......*/
    /* 添加过渡动画 */
    transition: transform 0.5s;
    /* 旋转中心为 底部中心 */
    transform-origin: bottom center;
    backface-visibility: hidden;
  }

  .number-card:hover .card2-up {
    transform: rotateX(-180deg);
    /* x 轴反方向旋转 180deg */
  }

  .card2-down {
    /* 向下移动50%的高度 */
    top: 50%;
    line-height: 0;
  }
</style>
```

