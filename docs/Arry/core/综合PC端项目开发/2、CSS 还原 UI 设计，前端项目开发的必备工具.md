---
title: "CSS 还原 UI 设计，前端项目开发的必备工具"
source: "https://www.arryblog.com/guide/project/css-restore-ui-design.html"
category: "CSS"
order: 2
---

# CSS 还原 UI 设计，前端项目开发的必备工具

企业前端项目开发的真实流程：

- 产品经理给出原型图 ->
- 交给 UI 设计师（根据原型图的需求设计出 UI 的源文件）->
- 推送至墨刀或蓝湖这样的协作设计开发平台 - >
- 给到程序员（使用各种切图工具量取尺寸）开发布局网页

在这个过程中，前端开发人员如何测量 UI 设计图中的尺寸就显得非常重要。

> 本节，主要围绕如何通过各种切图工具将所需要的 CSS 数据测量出来

## 一、长度单位与颜色分类

深入浅出 CSS 样式长度单位 和 颜色分类

### 1、长度

CSS 中使用的每个属性都允许拥有一个或一组值，例如：`color : red` 代码中，其中 color 为属性，red 为值。

- 在 CSS 中有很多属性是用来控制位置和尺寸的，所以它们的值必须是一个表示长度的数值，而数值是需要添加单位的。
- CSS 中有两种长度单位——绝对长度单位和相对长度单位。重要的是要知道它们之间的区别，以便理解它们控制的元素将变得有多大。

### 2、绝对长度单位

以下都是绝对长度单位——它们与其他任何东西都没有关系，通常被认为总是相同的大小。

| 单位 | 名称 |
| :--- | :--- |
| cm   | 厘米 |
| mm   | 毫米 |
| in   | 英寸 |
| pt   | 点   |
| px   | 像素 |

> 这些绝对长度单位中，除了 px 像素经常使用外，其他并不常用。

### 3、相对长度单位

- 相对长度单位相对于其他一些东西，比如父元素的字体大小，或者视图端口的大小。
- 使用相对单位的好处是，经过一些仔细的规划，您可以使文本或其他元素的大小与页面上的其他内容相对应。以下列出了常见相对单位。

| 单位 | 名称                                                         |
| :--- | :----------------------------------------------------------- |
| em   | 在 font-size 中使用是相对于父元素的字体大小，在其他属性中使用是相对于自身的字体大小 |
| ex   | 字符 “x” 的高度                                              |
| ch   | 数字 “0” 的宽度                                              |
| rem  | 根元素的字体大小                                             |
| lh   | 元素的 line-height                                           |
| vw   | 视窗宽度的 1%                                                |
| vh   | 视窗高度的 1%                                                |
| vmin | 视窗较小尺寸的 1%                                            |
| vmax | 视图大尺寸的 1%                                              |

> 像 rem 和 vw 单位会在移动端布局中所使用，将在接下来的课程中对 rem 和 vw 单位进行详细的讲解，这里就不再赘述。

### 4、颜色

在 CSS 中指定颜色的方法有很多，其中一些是最近才实现的。

- 在 CSS 中，相同的颜色值可以在任何地方使用，无论您指定的是文本颜色、背景颜色还是其他颜色
- 现代计算机的标准颜色系统是 24 位的，它允许通过不同的红、绿、蓝通道的组合显示大约 1670 万种不同的颜色，每个通道有 256 个不同的值(256 x 256 x 256 = 16,777,216)

让我们来看看在 CSS 中指定颜色的一些方法 !

### 5、颜色关键词

在 CSS 中，可以直接在代码中使用颜色单词进行赋值，例如：`color: red;`，这是一种指定颜色的简单易懂的方式

![image-20220729050708838](data:image/png;base64,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)

部分颜色关键词

### 6、RGB 颜色

在 CSS 中，可以使用公式`rgb(red, green, blue)`将颜色指定为 RGB 值。每个参数`(red、green 以及 blue)`定义了 0 到 255 之间的颜色强度

- 例如，`rgb(255, 0, 0)` 显示为红色，因为红色设置为最大值（255），其他设置为 0
- 要显示黑色，请将所有颜色参数设置为 0，如下所示：`rgb(0, 0, 0)`
- 要显示白色，请将所有颜色参数设置为 255，如下所示：`rgb(255, 255, 255)`

![image-20220729051348363](https://www.arryblog.com/assets/img/image-20220729051348363.df82ca4e.png)

部分RGB颜色

### 7、RGBA 值

RGBA 颜色值是具有 alpha 通道的 RGB 颜色值的扩展 - 它指定了颜色的不透明度

- RGBA 颜色值指定为：`rgba(red, green, blue, alpha)`
- alpha 参数是介于 0.0（完全透明）和 1.0（完全不透明）之间的数字

![image-20220729051647842](https://www.arryblog.com/assets/img/image-20220729051647842.03895b7d.png)

部分RGBA颜色

### 8、HEX 颜色

在 CSS 中，可以使用`#rrggbb`格式的十六进制值指定颜色

- 其中 rr（红色）、gg（绿色）和 bb（蓝色）是介于 00 和 ff 之间的十六进制值（与十进制 0-255 相同）
- 例如，#ff0000 显示为红色，因为红色设置为最大值（ff），其他设置为最小值（00）

![image-20220729052627267](data:image/png;base64,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)

部分HEX颜色

### 9、HSL 颜色

在 CSS 中，可以使用色相、饱和度和明度（HSL）来指定颜色，格式如：`hsla(hue, saturation, lightness)`

- 色相（hue）是色轮上从 0 到 360 的度数。0 是红色，120 是绿色，240 是蓝色
- 饱和度（saturation）是一个百分比值，0％ 表示灰色阴影，而 100％ 是全色
- 亮度（lightness）也是百分比，0％ 是黑色，50％ 是既不明也不暗，100％是白色

![image-20220729052923794](https://www.arryblog.com/assets/img/image-20220729052923794.920e1577.png)

部分HSL颜色

::: info 注：

接下来我们将通过各种软件，测量出 UI 设计图中的尺寸长度及颜色取值

:::

## 二、UI 设计图的源文件种类

全面了解市面上常见的 UI 设计图源文件种类

### 1、布局与 UI 设计图

开发一个网页，通常需要先有一套 UI 设计图，然后 web 前端开发人员会根据设计图进行元素尺寸、位置、颜色等信息的获取，从而根据这些信息来完成 CSS 布局。

### 2、什么是设计图源文件

通常我们认知中的 JPG、PNG、GIF 等图片格式，属于设计图的效果展示类文件，并不属于真正的源文件。

- 源文件是可以查看到图片的所有的图层，通道、参考线、注解和颜色模式等信息，开发人员通过操作源文件，可以更加方便的控制图片，并快速的获取到图片信息。

> 以下是 PSD 源文件在 PhotoShop 软件中打开的样子：

![image-20220729054650432](https://www.arryblog.com/assets/img/image-20220729054650432.50992c96.png)

PSD源文件

### 3、常见的源文件有哪些

- `.psd`格式源文件，通过[PhotoShop (opens new window)](https://www.adobe.com/products/photoshop.html)工具制作
- `.sketch`格式源文件，通过[Sketch (opens new window)](https://www.sketch.com/)工具制作
- `.xd`格式源文件，通过[Xd (opens new window)](https://www.adobe.com/products/xd.html)工具制作

![image-20220730164437712](https://www.arryblog.com/assets/img/image-20220730164437712.46897541.png)

Ps、Xd、Sketch

::: tip 注：

- 通常在项目中，UI 设计师会提供给我们 UI 设计图的源文件（常见的 PSD 文件），web 前端开发人员会根据源文件进行切图处理和信息获取。
- 接下来将选择 PSD 源文件给大家演示是如何进行操作的，其他格式操作类似，就不再赘述。

:::

## 三、Photoshop 还原 UI 设计

如何通过 Photoshop 还原 UI 设计，即：实现 尺寸、文字、颜色等信息的获取以及具体的切图操作步骤

### 1、PS 软件下载安装

- 要求最好是 Photoshop CC 2019 以上的版本
- 具体免费版安装包和教程（Windows、Mac）联系助理老师即可

> 注：安装前一定要将当前电脑的网络断开，否则安装不成功 ！

### 2、尺寸、文字、颜色等信息的获取

PS 设置信息面板，修改标尺单位

点击 "窗口" -> 选中"信息"（拖拽信息面板至右侧停靠） -> 打开 "面板选项 ..." -> 选择标尺单位为 “像素”

![info-box](https://www.arryblog.com/assets/img/info-box.cf0a83c9.jpg)

尺寸的测量方式一：使用 PS 的 "矩形选框工具"

选中 PS 左侧工具条中的矩形选框工具 -> 拉取需要测量的元素之间的距离 -> 在信息面板中即可查看宽高尺寸

**如果需要扩大或缩小已选中的范围**

- 使用快捷键：按下 Shift 键，然后鼠标拖动扩大选中范围即可
- 使用快捷键：按下 Ctrl 键 ，然后鼠标拖动缩小选中范围即可

> 不过这种方式会比较慢一些，效率比较低一些

![image-20220729231014756](https://www.arryblog.com/assets/img/image-20220729231014756.bb2746df.png)

尺寸的测量方式二：使用 PS 的 "移动工具"

选择“移动工具" -> 按住"Ctrl 键"鼠标触碰到需要量取尺寸的两个元素的边缘或者选中对应的图层即可看到具体的尺寸了

> 这种方式更加方便快捷

![image-20220729233223993](https://www.arryblog.com/assets/img/image-20220729233223993.1934dc63.png)

颜色值的获取：使用 "吸管工具"

选择 "吸管工具" -> 吸取需要元素的颜色 - > 点开 "拾色器" 查看不同类型的颜色值 -> 复制需要的值即可

![image-20220729234821448](https://www.arryblog.com/assets/img/image-20220729234821448.4dab80e6.png)

文字相关属性值获取：使用 PS 的 "矩形选框工具"

选中 PS 左侧工具条中的矩形选框工具 -> 选中对应的文字图层 -> 在字符面板即可查看对应文字的相关属性

![image-20220730000744304](https://www.arryblog.com/assets/img/image-20220730000744304.3cbe9b1d.png)

### 3、切图操作：启动生成器，勾选图像资源

在 PS 中，启动生成器

选择 "编辑" -> 首选项 -> 点击打开 "增效工具 ...."

![image-20220730004452304](https://www.arryblog.com/assets/img/image-20220730004452304.cafe105e.png)

> 勾选 "启用生成器"

![image-20220730010633804](https://www.arryblog.com/assets/img/image-20220730010633804.53bcd70c.png)

勾选 “图像资源”

选择 "文件" -> 选择 “生成” -> 勾选 “图像资源”

![image-20241220175356440](https://www.arryblog.com/assets/img/image-20241220175356440.8fd675f5.png)

开始选择切图

选择 "移动工具" -> 点击选中需要切图的图片 -> 修改图层的名称，并添加常见图片的后缀名 -> 按下回车键，即切图成功（注：一定要添加后缀名才能切图成功）

![image-20220730012118182](https://www.arryblog.com/assets/img/image-20220730012118182.868ddcf2.png)

> 在 PS 源文件的根目录，查看切图后的图片

![image-20220730013107097](https://www.arryblog.com/assets/img/image-20220730013107097.991520c1.png)

![image-20220730013254917](https://www.arryblog.com/assets/img/image-20220730013254917.7c76fecc.png)

如果需要切 2 倍图，快捷方式

只需要在图层名称前添加 "200% 空格" ，然后按下回车键，即切图成功

![image-20220730013659268](https://www.arryblog.com/assets/img/image-20220730013659268.e81e993a.png)

::: tip 注：

以上就是通过 PS 切图和获取布局相关尺寸、文字、颜色等数据的最简单、快捷方式，也是最原始的方式（依然有部分企业再用，我们学会也挺好）有利于后期对团队协作流程的理解。

:::

## 四、蓝湖 App 快速标注信息

几乎大部分企业（包括我们常见的大厂）都在使用类似蓝湖 App 的设计开发团队协作工具，我们在学习阶段就先提前使用起来。

### 1、蓝湖是什么 ？

蓝湖是一款设计图的共享平台，帮助互联网团队更好地管理设计图

- 可自动生成设计图标注，与团队共享设计图，展示页面之间的跳转关系
- 蓝湖支持从 Sketch、Ps、 Xd- 键共享、在线讨论，蓝湖已经成为新一代产品设计的工作方式
- 最大的好处就是：团队协作共享
- 类似 App：measure、zeplin 等

有了类似蓝湖这样的工具之后，作为前端开发人员就没必要学习那么多的设计切图软件了，直接使用蓝湖就可以满足我们开发的日常需求。

> 还可以团队协作共享，大大的提升了团队协作的效率

![image-20220730021130884](https://www.arryblog.com/assets/img/image-20220730021130884.79be93df.png)

### 2、蓝湖的下载安装

- 蓝湖官网：[蓝湖 - 高效的产品设计协作平台 (lanhuapp.com)(opens new window)](https://lanhuapp.com/)
- 注册，登录账号
- 先整体浏览了解整个蓝湖相关的功能
- 下载 Photoshop 插件

![image-20220730020116915](https://www.arryblog.com/assets/img/image-20220730020116915.1f1fd09d.png)

Photoshop 插件下载成功后

- 直接下一步安装即可
- 安装成功后，需要重启 PS 才能通过以下方式找到该插件
- 然后，在 PS 中选择 "窗口" -> "扩展功能" -> 选择 "蓝湖" 即可

![image-20220730021102237](https://www.arryblog.com/assets/img/image-20220730021102237.2ff7158c.png)

### 3、蓝湖的基础使用

按步骤新建项目即可

一般企业中，这些过程都有设计师团队来完成，我们个人开发也可以使用

![image-20220730022514755](https://www.arryblog.com/assets/img/image-20220730022514755.be939d99.png)

> 项目创建成功后，效果如下 ！可尝试点点研究下相关功能点

![image-20220730025020090](https://www.arryblog.com/assets/img/image-20220730025020090.1605803d.png)

在 PS 中，选择 "蓝湖插件"

输入蓝湖账号的用户名和密码即可登录成功 -> 选择以上新建的项目名称即可

![image-20220730023403470](https://www.arryblog.com/assets/img/image-20220730023403470.53300bde.png)

> 将 PS 中的 PSD 源文件上传至蓝湖

![image-20220730024257161](https://www.arryblog.com/assets/img/image-20220730024257161.da46bf5f.png)

> 上传成功后，去浏览器蓝湖 Web 端查看即可

![image-20220730024622127](https://www.arryblog.com/assets/img/image-20220730024622127.55aca111.png)

> 刷新网页版蓝湖当前项目界面，即可看到刚刚上传的设计图

![image-20220730025405910](https://www.arryblog.com/assets/img/image-20220730025405910.9759c0bf.png)

> 双击打开后，即可进行 CSS 布局所需基本的数据获取了

![image-20220730025723379](https://www.arryblog.com/assets/img/image-20220730025723379.505ef55b.png)

如何利用蓝湖工具切图呢 ？

- 需要设计师在 PS 端选中需要切图的图层 -> 标记为切图 -> 上传完成即可在蓝湖 web 端下载网页布局所需要的图片素材了

![image-20220730032543109](https://www.arryblog.com/assets/img/image-20220730032543109.b4f9696b.png)

> 标记为切图后，再次上传至蓝湖

![image-20220730033152904](https://www.arryblog.com/assets/img/image-20220730033152904.b973ab67.png)

> 在蓝湖中，直接下载网页布局所需的图片素材即可

![image-20220730033615765](https://www.arryblog.com/assets/img/image-20220730033615765.474c57c0.png)

## 五、PxCook 自动标注工具

有关 PxCook 自动标注工具大家听过之前的课程以及作业练习中都使用过，已经很熟悉了，这里就不再赘述。

[点击查看，往期 PxCook 操作教程(opens new window)](https://www.arryblog.com/guide/css3/css-box-model.html#_2、pxcook-像素大厨)

## 六、imgcook 设计稿智能平台

imgcook 专注以 Sketch、PSD、 静态图片等形式的视觉稿作为输入，通过智能化技术一键生成可维护的前端代码，包含视图代码、数据字段绑定、组件代码、部分业务逻辑代码等。

- 目前此产品是阿里巴巴前端委员会智能化小组的服务化的内外落地产品
- imgcook 设计稿智能生成代码官网：[https://www.imgcook.com/(opens new window)](https://www.imgcook.com/)

![image-20220730150714874](https://www.arryblog.com/assets/img/image-20220730150714874.5381608a.png)

> 直接登录账号，上传对应的 UI 设计稿即可生成对应的源代码

![image-20220730152921800](https://www.arryblog.com/assets/img/image-20220730152921800.468b6f47.png)

注：

- 生成后的代码还是需要根据实际项目的需求进行调整；
- 目前阶段可用于学习使用，了解项目代码的规范和基础布局参考；
- 当前，imgcook 对于 PSD 源文件的支持还不是特别友好，会出现报错等问题，官方更推荐 sketch 文件格式
- 虽然市面上也有很多智能化的代码生成工具，并不意味我们就不用学习了 ！相反更需要深入的学习，只有扎实的基础才能看懂或修改成自己项目需要的代码

有了这些 Web 项目开发必备的前置知识后，我接下来就会带领大家正式开始第一个 PC 端项目的开发了 ^_^ 一起加油 ！

