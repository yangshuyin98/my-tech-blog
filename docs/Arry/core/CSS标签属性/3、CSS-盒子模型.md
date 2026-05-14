---
title: "CSS 盒子模型"
source: "https://www.arryblog.com/guide/css3/css-box-model.html"
category: "css3"
order: 3
---

# CSS 盒子模型

在学习盒子模型之前，我们先来思考一个问题？网页布局的本质是什么？

  + 我们所看到的网页本质上就是由**一个个矩形框拼凑而成** ，矩形框里放置相关**的图片** ，**文字** ，**视频** 等内容。
  + 我们可以简单的把网页中的这种矩形框结构称为**盒子模型** 。接下来我们站在专业的角度，来了解下盒子模型。
  + 如下图所示：

![image-20220706172732919](https://www.arryblog.com/assets/img/image-20220706172732919.241f7008.png)

## 一、盒子模型简介

  + 所有 HTML 标签都可以看成矩形盒子，具有 **（盒子模型）** 结构。
  + **盒模型由 4 个部分组成** ，分别是： **`content`** 、**`padding`** 、**`border`** 、**`margin`**
  + **盒模型有 5 个属性** ： **`width`** 宽 、**`height`** 高 、**`padding`** 内边距 、**`border`** 边框 、**`margin`** 外边距

![image-20211107135225669](https://www.arryblog.com/assets/img/image-20211107135225669.359c561e.png)

> 注：
>
> `width` 、 `height` 不是盒子的总宽度
>
> 在**标准盒子模型下** ，盒子模型的 content 部分就是元素的 width 和 height 属性组成的矩形部分。

**简单盒子模型**

```css
<style>
.box {
    /* 宽度 200px */
    width: 200px;
    /* 高度 200px */
    height: 200px;
    /* 边框 快捷键 bd */
    border: 10px solid red;
    /* 内边距 上右下左 30px */
    padding: 30px;
    /* 外边距 上右下左 30px */
    margin: 30px;
}
</style>
<body>
  <div class="box">我就是div盒子的内容</div>
</body>
```

![image-20220714155941608](https://www.arryblog.com/assets/img/image-20220714155941608.e3b243de.png)

## 二、盒模型的属性

包含内容：

  + width、height 属性（宽、高），border 属性（边框）
  + padding 属性（内边框），padding 的不同数值写法
  + margin 属性（外边距），margin 的不同数值写法，margin 塌陷，margin 负值
  + 去掉元素默认值，盒子水平居中，盒子模型占位计算

### 1、width 和 height 属性 - 宽和高

属性 | 单位 | 描述  
---|---|---  
`width` | px 、移动端开发 （百分比、rem 、vh 、vw 等单位） | 盒子内容的宽度  
`height` | px、移动端开发（百分比、rem 等单位） | 盒子内容的高度  

```css
<style>
  div {
    width: 100px; /*宽度*/
    height: 100px; /*高度*/
    background-color: pink; /*背景色*/
  }
</style>
<body>
  <div>我是div盒子</div>
</body>
```

如果 `width` 和 `height` 的值为 `%` 百分比值，则 `%` 百分比相对于父元素宽和高而言。%百分比单位在移动端或响应式开发中用得较多。

```css
<style>
  .box {
    /* 宽高 构成 内容区 */
    width: 200px;
    height: 100px;
    border: 2px solid red;
  }
  .item {
    width: 50%; /* 计算得到宽 200px * 50%=100px */
    height: 50%; /* 计算得到高 100px * 50%=50px */
    background-color: khaki;
  }
</style>
<div class="box">
  <div class="item"></div>
</div>
```

### 2、border 属性 - 边框

border 属性的三要素：

border 属性的值由三部分组成：线宽 线型（风格） 颜色；   

```css
/* 
    1px 线宽度
    solid 线型
    red 线颜色
*/
border: 1px solid red;
```

常见线型值 | 描述  
---|---  
`solid` | 实线  
`dashed` | 虚线  
`dotted` | 点状线  
`double` | 双边框  
`groove` | 定义 3D 凹槽边框。效果取决于 border-color 值  
`ridge` | 定义 3D 垄状边框。效果取决于 border-color 值  
`inset` | 3D inset 边框。其效果取决于 border-color 的值。  
`outset` | 3D outset 边框。其效果取决于 border-color 的值。  
`none` | 无边框  
`hidden` | 隐藏边框  

![image-20211130222312600](https://www.arryblog.com/assets/img/image-20211130222312600-165783056117236.e7449770.png)

```css
<style>
  div {
    width: 50px; /* 宽 */
    height: 50px; /* 高 */
  }
  .border1 {
    border: 2px solid red; /*2px 实线 红色边框线 */
  }
  .border2 {
    border: 4px dashed blue; /* 4px 虚线 蓝色边框 */
  }
  .no-border {
    border: none; /*去掉边框线*/
  }
</style>

<body>
  <div class="border1">1</div>
  <div class="no-border">2</div>
  <div class="border2">3</div>
</body>
```

#### 2.1、 边框的三要素小属性

小属性 | 描述  
---|---  
`border-width` | 线宽  
`border-style` | 线型  
`border-color` | 线颜色  

> 注：
>
> 小属性是为了层叠大属性用的

```css
<style>
div {
    width: 50px;
    height: 50px;
    /* 2px 实线 灰色边框 */
    border: 2px solid #666;
}
.box {
    /* 小属笥单独定义边框颜色为红色，覆盖上面的灰色 */
    border-color: red;
}
</style>

<body>
  <div>1</div>
  <div class="box">2</div>
  <div>3</div>
</body>
```

#### 2.2、 四个方向的边框

属性 | 描述  
---|---  
`border-top` | 上边框  
`border-right` | 右边框  
`border-bottom` | 下边框  
`border-left` | 左边框  

> 注：
>
> 小属性是为了层叠大属性用的  

```css
border-left: 1px solid red;
...
```

使用方法

```css
<style>
div {
    width: 100px;
    height: 100px;
    /* 上边框 */
    border-top: 5px solid red;
    /* 右边框 */
    border-right: 6px double blue;
    /* 下边框 */
    border-bottom: 6px dotted orange;
    /* 左边框 */
    border-left: 5px dashed skyblue;
}
</style>
<body>
  <div></div>
</body>
```

> **单独去掉某一边框线 ，可以将 border-top、border-bottom、border-right、border-left 的属性值设为 none**

```css
/* 去掉上边框线 */
border-top: none;
/* 去掉左边框线 */
border-left: none;
....
```

#### 2.3、 四个方向的边框的三要素小属性

属性 | 描述  
---|---  
`border-top-width` | 上边框宽度  
`border-top-style` | 上边框线型  
`border-top-color` | 上边框颜色  
`border-right-width` | 右边框宽度  
`border-right-style` | 右边框线型  
`border-right-color` | 右边框颜色  
`border-bottom-width` | 下边框宽度  
`border-bottom-style` | 下边框线型  
`border-bottom-color` | 下边框颜色  
`border-left-width` | 左边框宽度  
`border-left-style` | 左边框线型  
`border-left-color` | 左边框颜色  

> 注：
>
> 小属性是为了层叠大属性用的

```css
<style type="text/css">
.box {
    width: 200px;
    height: 200px;
    border: 20px solid red; /*20px  实线 红色 边框线*/
    border-bottom-color: turquoise; /*底边框背景色为 天蓝色*/
    border-top-style: dotted; /*上边框风格为点状*/
    border-left-width: 30px; /*左边框宽 30px*/
    /*写在后面的样式会覆盖前面的对应属性样式*/
}
</style>
<body>
  <div class="box"></div>
</body>
```

### 3、padding 属性 - 内边距

  + padding 是盒子的内边距，即边框内壁到内容区之间的距离

![image-20250516160655517](https://www.arryblog.com/assets/img/image-20250516160655517.f408f97e.png)

#### 3.1、单独设置不同方向内边距

padding 有四个方向，可以通过以下属性分别设置不同方向内边距

属性 | 描述  
---|---  
`padding-top` | 上内边距  
`padding-right` | 右内边距  
`padding-bottom` | 下内边距  
`padding-left` | 左内边距  

```css
<style>
  .box1 {
    width: 200px;
    height: 100px;
    background-color: skyblue;
    /* 上内边距 */
    padding-top: 10px;
    /* 右内边距 */
    padding-right: 20px;
    /* 下内边距 */
    padding-bottom: 30px;
    /* 左内边距 */
    padding-left: 40px;
  }
</style>

<body>
  <div class="box1">
    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
  </div>
</body>
```

![image-20220714164731669](https://www.arryblog.com/assets/img/image-20220714164731669.69daf43f.png)

#### 3.1、padding 属性，4 值不同写法

`padding` 属性，可以一次性设置元素四个方向的内边距

  + 1 个值
          /* padding:上下左右; */
        padding: 20px; /* 四个方向的内边距大小都是20px; */
      
  + 2 个值
      /* padding:上下  左右; */
        padding: 20px 30px; /*第一个值代表上下内边距20px，第二个值是左右内边距30px  */
      
  + 3 个值
          /* padding:上 左右  下; */
        padding: 20px 10px 30px; /*值1代表上内边距20px  值2代表左右内边距 10px   值3 代表下内边距30px */
      
  + 4 个值
          /* padding:上 右  下  左; */
        padding: 10px 20px 30px 40px; /*padding:上   右   下   左  ;  四个方向值*/

> 注：
>
>   + **应用场景：** 如果设置父子间间距，可以给父元素添加内边距来实现
>   + **快速记忆** ：左右是一对，上下是一对，缺下时和上一样，缺左时和右一样。

#### 3.2、 快速灵活设置 padding 属性

padding 大小属性的最佳实践：

  + 小属性 padding-top/padding-right/padding-bottom/padding-left 用来层叠大属性 padding 来组合使用
  + 更推荐（小属性层叠大属性）写法        

```css
/* 
	小属性层叠大属性
	padding: 上右下左为40px    大属性
	padding-bottom: 下为0     小属性
*/
padding: 40px;
padding-bottom: 0;
```

**案例**

```css
<style>
.box {
    width: 50px;
    border: 1px solid red;
    /* 四个方向内边距都为10px */
    padding: 10px;
}
.box1 {
    /* 单独控制下内边距为0 */
    padding-bottom: 0;
}
</style>
<body>
  <div class="box">文字内容文字</div>
  <div class="box">文字内容文字</div>
  <div class="box box1">文字内容文字</div>
</body>

```

![image-20220706201354790](https://www.arryblog.com/assets/img/image-20220706201354790-165783570758846.987693b0.png)

### 4、margin 属性 - 外边距

  + margin 是盒子的外边距
  + 即：盒子和其他盒子之间的距离

#### 4.1、单独设置不同方向外边距

属性 | 描述  
---|---  
`margin-top` | 上外边距  
`margin-right` | 右外边距  
`margin-bottom` | 下外边距  
`margin-left` | 左外边距  

```css
<style>
.box {
    width: 50px;
    height: 50px;
    background-color: skyblue;
}
.box1 {
    /* 上外边距 20px */
    margin-top: 20px;
    /* 左外边距 50px */
    margin-left: 50px;
    /* 下外边距 30px */
    margin-bottom: 30px;
}
</style>
<body>
  <div class="box box1">box1</div>
  <div class="box box2">box2</div>
</body>
```

![image-20220714224436271](https://www.arryblog.com/assets/img/image-20220714224436271.8d24e39c.png)

#### 4.2、margin 属性，4 值不同写法

`margin` 属性，可以一次性设置元素四个方向的外边距

  + 1 个值
          margin: 20px; /*四个方向的外边距大小都是20px;*/
      
  + 2 个值
          margin: 20px 30px; /*第一个值代表上下内边距20px，第二个值是左右内边距30px   padding:上下    左右*/
      
  + 3 个值
          margin: 20px 10px 30px; /*值1代表上内边距20px  值2代表左右内边距 10px   值3 代表下内边距30px */
      
  + 4 个值
          margin: 10px 20px 30px 40px; /*padding:上   右   下   左  ;  四个方向值*/

#### 4.3、margin 设置块级元素水平居中

将块级元素的 `margin` 属性的**左右值** 同时设置为 `auto` ，就可以实现元素在水平方向居中显示。

```css
margin: 20px auto; /*上下外边距20px  水平居中显示*/
margin: 10px auto 20px; /*上20px 水平居中  下20px*/
```

**案例**

```css
<style type="text/css">
.box1 {
    width: 100px;
    height: 100px;
    border: 5px solid red;
}
.box2 {
    width: 50px;
    height: 50px;
    background-color: skyblue;
    margin: 10px auto; /*上下外边距10px 水平方向居中*/
    /* margin:20px auto 10px; */
}
</style>
<body>
  <div class="box1">
    <div class="box2">1</div>
  </div>
</body>

```

> 提示：
>
>   + div 块级元素水平居中，是给元素自身加上 `margin:0 auto;`
>   + `margin:auto 20px;` 这样写，并不会垂直居中
>   + 温馨提示：文字水平、图片水平居中用：`text-align:center`

#### 4.4、margin 的塌陷

margin 塌陷也叫：外间距重叠 或 外边距合并 或 外边距穿透

#### ① 兄弟元素之间 ，垂直方向：上下外边距出现塌陷

  + 垂直方向的 margin 有塌陷现象，上一个元素的下外边距与下一个元素的上外边距会发生合并
  + 小的 margin 会塌陷到大的 margin 中，从而 margin 不叠加，只以大值为准
  + 以下两盒子之间间距为 100px ，垂直方向的 margin 不叠加，以大数为准

```css
<style>
  .box {
    width: 200px;
    height: 100px;
  }
  .box1 {
    background-color: skyblue;
    /*下外边距 100px */
    margin-bottom: 100px;
  }
  .box2 {
    background-color: gold;
    /* 上外边距 50px */
    margin-top: 50px;
  }
</style>
<body>
  <div class="box box1"></div>
  <div class="box box2"></div>
</body>
```

解决办法：

  + **方法一** ：任何一个元素加上 `display:inline-block;`
  + **方法二** ：把外边距只加在其中一个元素上
  + **方法三** ：选择把任意一个元素的外边距换成对应的 `padding`

#### ② 父子元素之间，垂直方向：上外边距塌陷

当一个元素包含在另一个元素中时，如果**父元素没有设置内边距或边框把外边距分隔开** ，它们的上外边距也会发生塌陷（合并）

```css
<style>
.box {
    width: 100px;
    height: 100px;
    background-color: gold;
    /* 父元素的上外边距 */
    margin-top: 20px;
}
.item {
    width: 50px;
    height: 50px;
    background-color: skyblue;
    /* 子元素的上外边距，此时父子元素的上边距发生塌陷（合并），最终上外边距的结果为 50px */
    margin-top: 50px;
}
</style>
<body>
  <div class="box">
    <div class="item"></div>
  </div>
</body>
```

**`.item`** 的 **`margin-top:50px;`** 发生了穿透现象（塌陷）

  + 穿透了父元素，并与父元素上外边距发生合并，合并后以最大的值为主。
  + 所以看到的间距并不 **`.item`** 与 **`.box`** 的间距，而是 **`.box`** 与浏览器上面产生了 **`50px`** 的间距

![image-20220714222036503](https://www.arryblog.com/assets/img/image-20220714222036503.01e70600.png)

解决方案

  + 方法一：给**父** 元素加上 **`overflow: hidden;`**
  + 方法二：给**父** 元素添加透明的**`border`** 边框
  + 方法三：将**子** 元素的上外边距去掉， 改成给父元素添加上内边距来实现两者的上间距。

> 还有更多方法，等我们后面学完浮动，定位之后再来讲解。

#### 4.5、margin 负值

关于 margin 负值问题，我们留在 float 浮动 学完后再学习。

### 5、去掉元素的默认样式

网页中的元素为了展示元素本身的用途和结构，都会给元素添加默认的样式。

  + 以下是常见元素对应的默认样式 
    - body、h1~h6、ul、p、dl、dd 标签，都添加了默认的 margin。
    - ul 添加了默认的 padding、list-style
    - a 标签添中了默认的颜色、下划线
    - 等等 ...... （后续在项目开发中还会深入所有标签的默认样式）
  + 我们在实际的网页开发中，要将这些默认的样式清除掉，也称之为 "CSS 样式的初始化"
  + `*` 通配符选择器，表示选择所有元素 （通配符有效率问题，实际工作中不使用）

```css
/* 通配符选择器，表示选择所有元素  - 不推荐使用 */
* {
  margin: 0;
  padding: 0;
}

/* 通配符有效率问题，应该使用并集选择器 */
body,
ul,
p {
  margin: 0;
  padding: 0;
}

a {
  /* 去掉下划线 */
  text-decoration: none;
  /* 颜色为黑色 */
  color: #000;
}

ul {
  /* 去掉圆点 */
  list-style: none;
}
```

### 6、盒子模型占位计算

盒模型的内容区大小，可视区大小，盒模型实际占位区大小

#### 6.1、盒模型内容区大小

在标准盒子模型中

盒模型内容区是指元素的 `width` 和 `height` 属性形成的矩形区域。

```css
<style>
div {
    width: 200px; /* 宽 */
    height: 200px; /* 高 */
    background-color: gold;
    /* 边框 */
    border: 20px solid skyblue;
    /* 内边距 */
    padding: 50px;
    /* 外边距 */
    margin: 30px;
}
</style>
<body>
  <div class="box">
    内容区，内容区内容区，内容区内容区，内容区内容区，内容区
  </div>
</body>

```

下图中**红色** 矩形区为内容区大小

#### 6.2、盒模型可视区大小

在标准盒子模型中

  + 可视区宽 = 宽度 + 左右内边距 + 左右边框宽
  + 可视区高 = 高度 + 上下内边距 + 上下边框宽

盒子模型可视区大小 `=` 可视区宽 和 可视区高形成的矩形区域大小

```css
<style>
div {
    width: 200px; /* 宽 */
    height: 200px; /* 高 */
    background-color: gold;
    /* 边框 */
    border: 20px solid skyblue;
    /* 内边距 */
    padding: 50px;
    /* 外边距 */
    margin: 30px;
}
</style>
<body>
  <div class="box">
    内容区，内容区内容区，内容区内容区，内容区内容区，内容区
  </div>
</body>
```

#### 6.3、盒模型实际占位大小

在标准盒子模型中

  + 实际占位宽 = 宽度 + 左右内边距 + 左右边框宽 + 左右外边距
  + 实际占位高 = 高度 + 上下内边距 + 上下边框宽 + 上下外边距

盒子模型实际占位大小 `=` 实际占位宽 和 实际占位高形成的矩形区域大小

```css
<style>
div {
    width: 200px; /* 宽 */
    height: 200px; /* 高 */
    background-color: gold;
    /* 边框 */
    border: 20px solid skyblue;
    /* 内边距 */
    padding: 50px;
    /* 外边距 */
    margin: 30px;
  }
</style>
<body>
  <div class="box">
    内容区，内容区内容区，内容区内容区，内容区内容区，内容区
  </div>
</body>
```

下图中**黑色** 矩形区域为实际占位大小

![image-202505281513317](https://www.arryblog.com/assets/img/image-202505281513317.89275272.jpg)

#### 6.4、三者的关系

提示：

  + 盒模型的内容区大小

    - 决定了该元素中的子元素能占据的最大的宽度和高度（也就是子元素总占位大小）
    - 如果只有一个子元素，子元素的宽度超过父元素，就会溢出
    - 如果有多个子元素（子元素为行内元素），子元素的宽度加起来超过了父元素，那么超过的那些子元就会换行显示
  + 可视区占位

    - 决定了这个元素在页面层现的视觉效果大小
  + 实际占位宽度：

    - 决定了这个元素在父元素中的实际占位大小，如果超过了父元素的内容区大小，则会溢出。

```css
<style>
.box {
    /* 内容区宽 */
    width: 200px;
    /* 内容区高 */
    height: 250px;
    /* 边框线 */
    border: 2px dashed #333;
    /* 内边距 */
    padding: 10px;
}
.box1 {
    /* 内容区宽 */
    width: 70px;
    /* 内容区高 */
    height: 120px;
    /* 边框线 */
    border: 5px solid skyblue;
    /* 内边距 */
    padding: 10px;
    /* 背景色 */
    background-color: gold;
}
</style>
<body>
  <div class="box">
    <div class="box1"></div>
  </div>
</body>

```

![image-20220715030129395](https://www.arryblog.com/assets/img/image-20220715030129395.a1b55ac5.png)

> 注：
>
> 如果 `box1` 计算得到的占位宽超过了 `box` 元素的内容区宽，就会达不到我们相要的布局效果

## 三、box-sizing 怪异盒模型

在 CSS3 中新增了怪异盒子模型（IE 盒子模型）

### 1、标准盒模型与怪异盒模型区别

区别

**标准盒模型** 和 **怪异盒模型** （也称：**IE 盒模型** ）的区别在于设置 **`width`** 和 **`height`** 属性时，所对应的范围不同：

  + 标准盒模型的 width 和 height 属性的范围只包含了 **`content`** 内容区

  + IE 盒模型（怪异盒模型）的 width 和 height 属性的范围包含了 **`border、padding 和 content`**

    - width = border + padding + 内容的宽度
    - height = border + padding + 内容的高度
  + 在怪异盒模型下，设置 width 和 height 属性后，内容区宽和高是被自动计算得到的

    - 内容的宽度 =width - border - padding
    - 内容的高度=height -border -padding
  + button 标签，是典型的怪异盒模型

**案例**

```css
<style>
  /*button的可视宽高 为 100px*/
  button {
    width: 100px;
    height: 100px;
    padding: 10px;
    border: 20px solid red;
  }
  /*div的可视宽高为 100+10*2+10*2=140px*/
  div {
    width: 100px;
    height: 100px;
    border: 10px solid red;
    padding: 10px;
  }
</style>

<body>
  <button>button</button>
  <hr />
  <!--画了一水平线-->
  <div>div</div>
</body>
```

> 同样的代码，在 Google 浏览中为什么显示却有差异

原因：

  + button 按钮默认是 怪异盒模型
  + 即：自带 `box-sizing: border-box;` 属性

### 2、盒模型转换

我们通过 box-sizing 属性来切换标准盒子模型与怪异盒子模型

  + `box-sizing：content-box` 是默认值，盒子以标准盒子模型特性来渲染
  + `box-sizing: border-box` 盒子以怪异盒子模型特性来渲染

```css
<style>
.box {
    width: 100px;
    height: 150px;
    padding: 20px;
    border: 10px;
    margin: 50px;
    /*box-sizing:borde-box;*/
}
</style>
<body>
  <div class="box"></div>
</body>
```

以上代码，在两种盒子模型下渲染的效果如下

标准盒子模型 | 怪异盒子模型（box-sizing:borde-box; )  
---|---  




标准盒模型下的 `width:100px; `  `height:150px;`

只包含了 content 部分，所以 content 的宽高为 100px 和 150px; | 怪异盒子模型： `width:100px; `  `height:150px;`

包含了 border、padding、content 三部分，则通过计算得出 content 内容区的  

高为： `150px - 20px*2 - 10px*2 = 90px`

宽为： `100px - 20px*2 - 10px*2 = 40px`

应用场景：

  + 如果我们期望不管元素的`边框`、`内边距`大小如何变化，元素的可视宽高始终不变时，就可以给元素添加 `box-sizing:border-box;` 属性，以怪异盒模型来渲染，这样元素的内容区大小会自动调整。
  + 怪异盒模型常应用在响应式开发、移动端开发中。

## 四、前端测量、切图工具

以下 4 个工具可以在开发时辅助我们对**效果图** 或 **psd 设计稿** 进行 `测量` 和 `标注切图` 等功能

软件名称 | 功能 | 描述 | 官网下载地址  
---|---|---|---  
Snipaste1 | 截图+贴图 | 个 人模仿他 人效果选可用 | <https://zh.snipaste.com/>[(opens new window)](<https://zh.snipaste.com/>)  
PxCook | 图片测量+psd 标注、代码生成等 | 是一款连接设计师到开发者之间的协作工具 | <https://www.fancynode.com.cn/pxcook/>[(opens new window)](<https://www.fancynode.com.cn/pxcook/>)  
Photoshop | 专业的图片软件处理工具 | 实际企业开发设计软件 | <https://www.adobe.com/cn/products/photoshop.html>[(opens new window)](<https://www.adobe.com/cn/products/photoshop.html>)  
蓝湖 | 产品设计协作平台 | 实际企业团队开发协作工具 | <https://lanhuapp.com/>[(opens new window)](<https://lanhuapp.com/>)  

### 1、Snipaste 截图 + 贴图

Snipaste 是一个简单但强大的截图工具，也可以让你将截图贴回到屏幕上！

  + Snipaste 官网 : <https://zh.snipaste.com/>[(opens new window)](<https://zh.snipaste.com/>)
  + 进入官网，下载 Snipaste 软件包，双击软件包，即可安装好。

**Snipaste 的简单使用**

  + 按下 `F1` 来开始截图，再按 `F3`，截图就在桌面置顶显示了
  + 详细的使用教程，看官方文档：<https://docs.snipaste.com/zh-cn/>[(opens new window)](<https://docs.snipaste.com/zh-cn/>)

### 2、PxCook 像素大厨

PxCook（像素大厨） 是一款连接设计师到开发者之间的协作工具。

  + 使用 PxCook，设计师可以免去繁琐的标注功能，而前端工程师也可以更加直观的查看设计稿中的元素的内容，间距，尺寸和样式等。
  + 同时， PxCook 可以为工程师直接呈现选中元素的多平台样式代码和素材切图。

#### 2.1、工具的安装

  + 进入 PxCook 像素大厨的官网
  + 网址：<https://www.fancynode.com.cn/pxcook/>[(opens new window)](<https://www.fancynode.com.cn/pxcook/>)，点击立即下载
  + 也可以在钉钉裙文件中下载即可（联系客服老师）

![image-20220713191311338](https://www.arryblog.com/assets/img/image-20220713191311338.cdd66481.png)

> 下载好的压缩包直接双击安装就可以了

#### 2.2、工具的使用

工具的具体使用，看老师的讲解视频

![image-20241224154242327](https://www.arryblog.com/assets/img/image-20241224154242327.1d1ee577.png)

### 3、Photoshop 测量与切图

### 4、Photoshop 和 蓝湖结合测量与切图

Photoshop 和 蓝湖工具，钉钉群文件中有详细视频讲解（或联系助理老师获取）

> [Photoshop 与蓝湖的结合使用(opens new window)](<https://www.arryblog.com/guide/project/css-restore-ui-design.html#%E5%9B%9B%E3%80%81%E8%93%9D%E6%B9%96-app-%E5%BF%AB%E9%80%9F%E6%A0%87%E6%B3%A8%E4%BF%A1%E6%81%AF>)

## 五、针对性案例训练

**利用学过的知识来开发以下效果**

要求：利用 PS 与 蓝湖 结合，将以下 PSD 设计稿用代码以 1:1 还原成网页

### 1、商品卡片布局

![image-20220713121306584](https://www.arryblog.com/assets/img/image-20220713121306584.ec21af61.png)

点击查看源代码

```css
<style>
  body {
    font: 12px/1 "Microsoft YaHei";
  }
  h3,
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
    /* border: 1px solid red; */
    display: block; /* 变成块级元素 */
  }
  .goods {
    width: 150px;
    /* height: 200px; 后面再去掉 */
    border: 1px solid #666666;
    padding: 10px;
  }
  .goods img {
    /* border: 1px solid red; */
    display: block;
  }
  .goods h3 {
    /* border: 1px solid red; */
    font-size: 12px;
    color: #666666;
    font-weight: 400;
    /* font-family: Microsoft YaHei; */
    line-height: 18px;
    margin-top: 2px;
  }
  .goods p {
    font-size: 16px;
    color: #e1251b;
    line-height: 23px;
    font-weight: 400;
    /* font-family: Microsoft YaHei; */
    /* border: 1px solid red; */
    margin-top: 9px;
  }
  .goods p span {
    font-family: Arial;
    font-weight: 400;
    font-size: 12px;
    /* color: #E1251B; */
    line-height: 18px;
    margin-right: 2px;
  }
  .goods p .sp2 {
    font-family: Microsoft YaHei;
    margin-right: 0;
  }
</style>

<div class="goods">
  <a href="http://arryblog.com">
    <img src="./images/img1.png" alt="" />
    <h3>iSeeJplus山茶花智能眼部按 摩器护眼仪</h3>
    <p><span class="sp1">¥</span>679.<span class="sp2">00</span></p>
  </a>
</div>
```

### 2、 CSS 边框实现三角形

```css
<style>
.box1 {
    width: 0;
    height: 0;
    /* transparent 是透明色 */
    border: 30px solid transparent;
    border-top-color: red;
}

.box2 {
    width: 0;
    height: 0;
    /* transparent 是透明色 */
    border: 30px solid transparent;
    border-right-color: red;
}

.box3 {
    width: 0;
    height: 0;
    /* transparent 是透明色 */
    border: 30px solid transparent;
    border-bottom-color: red;
}

.box4 {
    width: 0;
    height: 0;
    /* transparent 是透明色 */
    border: 30px solid transparent;
    border-left-color: red;
}
</style>

<body>
  <div class="box1"></div>
  <div class="box2"></div>
  <div class="box3"></div>
  <div class="box4"></div>
</body>

```

## 六、课后作业

> 根据课程进度完成以下针对性案例开发，开发过程要求：

**具体开发流程**

  + 利用 PS 软件标记好切图 -> 导出至蓝湖（国内企业用的多）中
  + 前端开发人员在蓝湖打开设计稿 ->下载网页开发所需的素材 -> 在蓝湖中量取尺寸 -> 即可开发静态页面

**PSD 的源文件设计稿**

  + 以下案例对应的 PS 设计稿，已发布到钉钉群作业中。
  + PS 与蓝湖结合标注、切图开发相关视频教程已上传至钉钉群

**视频讲解**

> 点击查阅：[30 个 HTML+CSS 实战小案例详解(opens new window)](<https://www.icodingedu.com/goods/show/82?targetId=91&preview=0>)

**有任何疑问可以联系添加的助理老师**

我们把 CSS/CSS3 基础知识全部学习完之后，会有 4 大项目开发（PC 端，响应式，移动端）会按照企业真实团队协作的方式，用 4 个项目来完整的实践。

### 1、 CSS 实现新闻列表（视频）

![2-165711672763918](https://www.arryblog.com/assets/img/2.3e81432d.jpg)

## 七、总结：本章重难点

  - [ ] 掌握 `div` 盒子模型的 `4` 个组成部分和 `5`个属性

    - **`content`** 、**`padding`** 、**`border`** 、**`margin`** 4 个组成部分
    - **`width`** 、**`height`** 、 **`border`** 、**`padding`** 、**`margin`** 五个属性的用法
  - [ ] 掌握 `margin` 外边距合并（塌陷）的两种情况及解决方案

|分类 | 合并（塌陷）问题 | 解决方案  |
|---|---|---  |
|兄弟元素之间 | 上下外边距塌陷（合并） | 1、任何一个元素加上 `display:inline-block;`<br />2、把外边距只加在其中一个元素上<br />3、选择把任意一个元素的外边距换成对应的 `padding` |
|父子元素之间 | 上外边距塌陷 | 1、给**父** 元素加上 **`overflow: hidden;`** <br />2、给**父** 元素添加透明的**`border`** 边框<br />3、将**子** 元素的上外边距去掉， 改成给父元素添加上内边距来实现两者的上间距。  |

#### 区分盒子的 3 大区域：内容区、可视区、占位区

分类 | 区域大小计算 | 内容区影响  
---|---|---  
内容区 | 内容区大小= 属性 `width` 和 `height` 形成的矩形大小 | 内容区大小决定了子元素能占据的最大的宽和高度，决定了子元素是否会换行  
可视区 | 可视宽 = 宽度 + 左右内边距 + 左右边框宽<br />可视高 = 高度 + 上下内边距 + 上下边框宽<br />可视区大小= 可视宽 和 可视高 形成的矩形大小 |我们看到的这个元素在页面层现的效果的区域
占位区 | 占位宽 = 宽度 + 左右内边距 + 左右边框宽 + 左右外边距<br />实际占位高 = 高度 + 上下内边距 + 上下边框宽 + 上下外边距<br />占位区大小= 占位宽 和 占位高 形成的矩形大小 |决定了这个元素在父元素中的占据大小

#### 掌握标准盒模型与怪异盒模型的区别、相互转换、应用场景

**区别**

  + 标准盒模型的 width 和 height 属性的范围只包含了 **`content`** 内容区
  + IE 盒模型（怪异盒模型）的 width 和 height 属性的范围包含了 **`border、padding 和 content`**

**相互转换**

  + `box-sizing：content-box` 是默认值，盒子以标准盒子模型特性来渲染
  + `box-sizing: border-box` 盒子以怪异盒子模型特性来渲染

**应用场景**

  + 如果我们期望不管，`边框`、`内边距`大小如何变化，元素的可视宽高始终不变时，就可以给元素添加 `box-sizing:border-box;`属性，以怪异盒模型来渲染。

  + 掌握以下 4 个辅助代码开发工具的用法

    - Snipaste： 截图 + 贴图工具，做简单了解即可，需要用时，可以查阅官方文档
    - PxCooke 像素大厨：只需要了解图片尺寸测量、取色、获取坐标信息功能即可

#### **【重点掌握】** Photoshop 和 蓝湖

Photoshop 和 蓝湖两者配合实现 psd 效果图的测量、取色、切图等功能。蓝湖是企业实际开发场景中，程序员与设计师协作开发的工具，是前端程序员重点要掌握的一款工具。

  + 独立完成以下 3 个 CSS 布局案例

    - 商品卡片布局效果
    - CSS 边框绘制三角形
    - CSS 实现新闻列表效果
