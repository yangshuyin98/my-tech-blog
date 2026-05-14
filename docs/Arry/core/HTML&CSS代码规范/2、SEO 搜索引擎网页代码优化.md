---
title: "SEO 搜索引擎网页代码优化"
source: "https://www.arryblog.com/guide/standard/seo.html"
category: "规范"
order: 2
---

# SEO 搜索引擎网页代码优化

SEO 优化的好处

- 利用搜索引擎的规则提高网站在有关搜索引擎内的自然排名，为自己的网站获取免费流量；
- 以用户体验为核心，为目标用户提供高质量的内容；
- 对页面的代码和网页阅读体验，网站性能等进行优化，符合搜索引擎的规则，提升搜索引擎网页的自然排名。

## 一、网页三要素的基础优化规范



深入浅出 SEO 优化规范

### 1、页面标题（Title）30 字以内

网站首页：

品牌词 - 产品中文全称、特色服务、xxxx

```html
<title>品牌名-正品低价、品质保障、配送及时、轻松购物 ！</title>
```

list 页面：

产品和主题概述 - 品牌词

```html
<title>广州装修公司排行，联系地址-品牌词</title>
```

detail 页面：

具体产品或内容主题概述-品牌词

```html
<title>广州番禺区百姓装潢设计_收费标准-品牌词</title>
```

注：

强调重点即可，重要的关键词出现不要超过 2 次，而且要靠前，不同页面的 title 要有所不同

### 2、页面描述（Description）

150 字以内

- 不超过 150 个字符，描述内容要和页面内容相关。
- 对页面内容的高度概括，不可过分堆砌关键词，不同页面的 description 要有所不同

```html
<meta
  name="description"
  content="品牌名-专业的综合网上购物商城，为您提供正品低价的购物选择、优质便捷的服务体验。商品来自全球数十万品牌商家，囊括家电、手机、电脑、服装、居家、母婴、美妆、个护、食品、生鲜等丰富品类，满足各种购物需求。"
/>
```

### 3、页面关键字（Keywords）

TIP

Keywords 为产品名、专题名、专题相关名词，之间用英文半角逗号`,`隔开 ，告诉搜索引擎本页的重点、关键词。

```html
<meta
  name="Keywords"
  content="网上购物,网上商城,家电,手机,电脑,服装,居家,母婴,美妆,个护,食品,生鲜"
/>
```

### 4、总结

书写顺序

代码顺序按照 标题 -> 描述 -> 关键字 依次

## 二、搜索引擎的索引方式

索引方式

- robot terms 是一组使用逗号 `,` 分割的值
- 通常有如下几种取值：none，noindex，nofollow，all，index 和 follow。确保正确使用 nofollow 和 noindex 属性值。

```html
<meta name="robots" content="index,follow" />
<!--
    all：文件将被检索，且页面上的链接可以被查询；
    none：文件将不被检索，且页面上的链接不可以被查询；
    index：文件将被检索；
    follow：页面上的链接可以被查询，告诉蜘蛛可以被追踪，传递权重；
    noindex：文件将不被检索；
    nofollow：页面上的链接不可以被查询，告诉蜘蛛无需追踪，不传递权重。一般用于站外链接。
 -->
```

### 页面重定向和刷新

TIP

- content 内的数字代表时间（秒），既多少时间后刷新。
- 如果加 url，则会重定向到指定网页（搜索引擎能够自动检测，也很容易被引擎视作误导而受到惩罚）。

```html
<meta http-equiv="refresh" content="0; url=" />
```

## 三、语义化内容标签的使用

语义化的好处

- 符合 W3C 规范
- 代码结构清晰，方便阅读，有利于团队合作开发
- 语义化代码让搜索引擎容易理解网页，有利于搜索引擎优化（SEO）

**语义化内容标签如下：**

### 1、超链接：a 标签



- 内部链接，要加 `title` 属性加以说明
- 外部链接，要加 `rel="nofollow"` 属性，告诉蜘蛛无需追踪，传递权重

### 2、图片：img 标签



`img` 要加上 `alt` 属性加以说明

### 3、表格：table 标签



标题使用 `caption` 标签

### 4、标题：h1 ~ h6 标签



- `h1` 一个页面只可有一个，首页多用于包含 logo，其他页面用于主标题
- `h2` 模块标题
- `h3` 段落的小节标题
- `h4, h5, h6` 基本上不使用

**具体标准参考百度百科文章页面代码**

### 5、强调内容的重要性



- `strong` 和 `em` 都表示强调
- strong 显示为粗体 em 显示为斜体，且 strong 的强调程度要比 em 更高

```html
<em>强调文本</em> <strong>强调文本</strong>
```

### 6、视觉上突出显示文本

```html
<!--如：搜索结果中高亮的关键词-->
<mark></mark>
```

### 7、时间

```html
<p>
  文章发表于
  <time datetime="2022-06-01 12:00">2022-06-01</time>
</p>
```

### 8、定义联系信息

```html
<address></address>
<!--也可定义 article 元素的作者信息，但不适用于嵌套的 article 元素-->
```

### 9、代表一段独立的内容，经常与说明配合使用

```html
<figure>
  <!-- 图片、图表、表格等 -->
  <figcaption>标题/说明</figcaption>
</figure>
<!--figcaption 元素必须是 figure 元素的第一个或者最后一个子元素-->
```

### 10、换行、版权符号



- `br` 只用于文本内容的换行
- 输入法输入 `'banquan'`，按序号选择版权符号

## 四、语义化结构标签的使用



语义化标签在 SEO 优化中的应用

### 1、section 标签使用场景

```html
<header></header>
<section>
  <h2>标题</h2>
  <p>段落内容</p>
</section>
<section>
  <h2>标题</h2>
  <img src="./img/pic.jpg" width="" height="" alt="图片说明" />
</section>
<section>
  <h2>标题</h2>
  <p>段落内容</p>
</section>
<footer></footer>
```

注：

- 对页面中的内容进行分块，一个 `section` 元素通常由标题以及内容组成
- **不推荐那些没有标题的内容使用 section 标签**

### 2、article 使用场景

```html
<article>
  <header>
    <h2>标题</h2>
    <p>
      发表日期：
      <time datetime="2022-06-01 12:00">2022-06-01</time>
    </p>
  </header>
  <p>文章内容段</p>
  <p>文章内容段</p>
</article>
```

对比

它比 `section` 具有更明确的语义，代表一个独立的、完整的相关内容块，可以包含一个或多个 `section`

### 3、aside 使用场景

```html
<aside>
  <h2></h2>
  <ul>
    <li></li>
    <li></li>
  </ul>
</aside>
```

aside

独立于内容的一部分，且可以被单独的拆分出来而不会使整体受影响，常用于定义页面侧边栏

### 4、main 使用场景

```html
<main></main>
```

只能有一个

用来呈现文档或应用的主体部分，一个页面只能有一个 `main` 标签

### 5、header 使用场景

**页面中的 header**

```html
<header>
  <h1 role="logo">
    <a href="/">文字Logo</a>
  </h1>
  <nav>
    <a href="/">首页</a>
    <a href="/product">产品介绍</a>
    <a href="/about">关于我们</a>
  </nav>
</header>
```

**分块中的 header**

```html
<section>
  <header>
    <h2>标题</h2>
    <p>信息介绍</p>
  </header>
  <p>分块内容段</p>
</section>
```

**文章中的 header**

```html
<article>
  <header>
    <h2>标题</h2>
    <p>
      发表日期：
      <time datetime="2022-06-01 12:00">2022-06-01</time>
    </p>
  </header>
  <p>文章内容段</p>
</article>
```

注：

article、section、aside、nav 标签都可以拥有自己的 header 和 footer 标签

### 6、role 属性的使用场景

增强语义性

用来增强语义性，当现有的 HTML 标签不能充分表达语义的时候，可以借助 `role` 属性来说明

## 五、搜索引擎优化的基础注意事项

注：

- 重要内容尽量靠前放
  - 搜索引擎抓取 `HTML` 的顺序是从上到下的，而有的搜索引擎对抓取的内容长度有一定的限制
- 重要内容不要用 JS 输出
  - 搜索引擎不会抓取 `JS` 的生成内容
- 其他
  - 页面结构尽量扁平化，目录结构不宜过深，最好不超过 `三级`，每级都有 `面包屑导航`，成树状结构分布。否则不利于搜索引擎抓取
  - 做 `404` 页面，不仅提高蜘蛛体验，也提高用户体验

> 更多专业的 SEO 搜索引擎优化教程后续再做梳理

