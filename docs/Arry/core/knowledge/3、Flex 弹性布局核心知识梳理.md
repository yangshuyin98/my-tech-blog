---
title: "Flex 弹性布局核心知识梳理"
source: "https://www.arryblog.com/knowledge/html5-css3/css-flex-layout.html#_1%E3%80%81%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86"
category: "Flex"
order: 3
---

# Flex 弹性布局核心知识梳理

布局的传统解决方案，基于盒状模型，依赖 display 属性 + position 属性 + float 属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。

> 关于
>
> 2009 年，W3C 提出了一种新的方案：Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。

Flex 布局将成为未来布局的首选方案。

## 1、基础知识

| Flex 布局                           | 描述                                                         |
| :---------------------------------- | :----------------------------------------------------------- |
| 什么是 Flex 布局 ？                 | ① Flex 是 flexible box 的缩写，意为“弹性的盒子”，所以 flex 布局一般也叫做“flex 弹性布局” ② 任何一个 HTML 元素都可以指定为 flex 布局：display:flex \| inline-flex; ③ display: flex 块级元素 ④ inline-flex 内联块元素 |
| 什么是 flex 容器 （flex container） | 凡是采用 flex 布局的元素，就称为 flex 容器； 即：设置了 display: flex; 或 display: inline-flex; 的元素称之为 Flex 容器 |
| 什么是 flex 项目 item（flex item）  | flex 容器的所有子元素（就是第一级的儿子元素，不包含孙子及其后代的子元素），自动成为容器成员，称为 flex 项目 |
| 什么是主轴，什么是交叉轴            | ① 默认情况下，水平方向上的是主轴，垂直于主轴方向上的是交叉轴（默认时就是相当于 水平轴 和 垂直轴） ② flex 项目默认沿主轴方向开始排列 ③ 修改主轴方向 水平（行）flex-direction：row； 垂直（列）flex-direction：column； |

## 2、Flex 容器的属性

| 名称            | 描述                                                         |
| :-------------- | :----------------------------------------------------------- |
| flex-direction  | **决定主轴的方向 (即 Flex 项目的排列方向) ：** ① row (默认值) : 默认水平方向从左到右为主轴 ② row-reverse : 水平方向从右到左为主轴 ③ column : 垂直方向从上到下为主轴 ④ column-reverse : 垂直方向从下到上为主轴 |
| flex-wrap       | **定义了如果一条轴线排不下，如何换行：** ① nowrap (默认值) : 默认不换行 ② wrap: 换行 ③ wrap-reverse : 不仅换行还改变了默认方向，元素从下到上排列 |
| flex- flow      | **flex- direction 和 flex-wrap 的简写形式：** ① flex-direction: row (默认值) ② flex-wrap: nowrap (默认值) |
| justify-content | **定义了 Flex 项目在主轴上的对齐方式：** ① flex-start (默认值)：默认从行首起始位置开始排列 ② flex-end : 从行尾位置开始排列 ③ center : 居中排列 ④ space-between : 均匀排列每个元素。首个元素放置于起点,末尾元素放置于终点 ⑤ space-around : 均匀排列每个元素。每个元素周围分配相同的空间 |
| align-items     | **定义了 Flex 项目在交叉轴上如何对齐：** ① stretch (默认值) : 默认弹性元素被在交叉轴方向被拉伸到与容器相同的高度或宽度 ② flex-start : 元素向交叉轴起点对齐 ③ flex-end : 元素向交叉轴终点对齐 ④ center :元素在交叉轴居中 ⑤ baseline :所有元素向基线对齐 |
| align-content   | **定义了 存在多根主轴线时, Flex 项目在交叉轴上如何对齐：** ① stretch (默认值) :默认拉伸所有行来填满剩余空间 ② flex-start : 从起始点开始放置元素 ③ flex-end: 从终止点开始放置元素 ④ center: 将元素放置在中点 ⑤ space- between：均匀分布项目。第-项与起始点齐平,最后-项与终止点齐平 ⑥ space- around: 均匀分布项目。项目在两端有一半大小的空间 |

## 3、Flex 项目 item 的属性

| 名称        | 描述                                                         |
| :---------- | :----------------------------------------------------------- |
| order       | 定义 flex item 的排列顺序，数值越小，排列越靠前，默认值为 0； order: `<integer>; /* default 0 可以为负数 */` |
| flex-grow   | 定义 flex item 在主轴方向上的放大比例，默认值为 0，即如果存在剩余空间，该 item 也不会放大； flex-grow: `<number>; /* default 0 */` |
| flex-shrink | 定义 flex item 在主轴方向上的缩小比例，默认值为 1，即如果空间不足，该 item 将缩小； flex-shrink: `<number>; /* default 1 */` |
| flex-basis  | 定义了再分配多余空间之前，flex item 占据的主轴大小（main size） 浏览器会根据这个属性，计算主轴是否有多余空间； 它的默认值是 auto，即 item 的本来大小；flex-basis: `<length>; /* default auto */` |
| flex        | 是 flex-grow，flex-shrink，flex-basis 的简写 flex-grow：0 (默认值) flex-shrink：1 (默认值) flex-basis：auto (默认值) flex 该属性有 2 个快捷值 flex: auto; (1 1 auto) 与 flex:none; (0 0 auto) |
| align-self  | **允许单个 item 与其他 item 不一样的对齐方式，可以覆盖 align-items 属性** align-self: auto; 默认值 align-self: flex-start; 元素会对齐到交叉轴的首端 align-self: flex-end; 元素会对齐到交叉轴的尾端 align-self: center; 元素会对齐到交叉轴中间 align-self: stretch; 元素被拉伸显示 align-self: baseline; 元素对照基线对齐显示 |



