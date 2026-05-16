# 阶段6：主体商品推荐区域

## 目标
实现主体商品推荐区域，包括商品楼层（标题 + 左侧大图 + 右侧商品卡片网格）。

## 前置条件
- 阶段5 侧边栏与广告区域完成

## 布局结构说明

```
.page-main.home-main
└── .container (1226px)
    ├── [大图广告]
    ├── 商品楼层1
    │   ├── .box-hd (标题 + 查看全部)
    │   └── .box-bd
    │       ├── .span4 (左侧大图, 234px)
    │       └── .span20 (右侧商品网格)
    │           └── .brick-list > .brick-item × 8
    └── 商品楼层2 (同上结构)
```

## 操作步骤

### 6.1 编写主体区域 HTML

文件：`index.html`，在 `.home-hero-container` 之后添加

```html
<!-- 主体商品推荐区域 -->
<div class="page-main home-main">
    <div class="container">
        <!-- 大图广告 -->
        <div class="home-banner">
            <a href="">
                <img src="image/product/main-banner.jpg" alt="">
            </a>
        </div>

        <!-- 手机推荐楼层 -->
        <div class="goods-floor">
            <div class="box-hd">
                <h2>手机</h2>
                <div class="more">
                    <a href="">查看全部 <span class="iconfont icon-arrow-right"></span></a>
                </div>
            </div>
            <div class="box-bd clearfix">
                <!-- 左侧大图 -->
                <div class="span4">
                    <a href="">
                        <img src="image/product/phone-left.jpg" alt="">
                    </a>
                </div>
                <!-- 右侧商品卡片 -->
                <div class="span20">
                    <ul class="brick-list">
                        <li class="brick-item">
                            <a href="">
                                <div class="figure-img"><img src="image/product/phone1.jpg" alt=""></div>
                                <h3 class="title">Xiaomi 14 Ultra</h3>
                                <p class="desc">徕卡光学Summilux镜头</p>
                                <p class="price">5999元起</p>
                            </a>
                        </li>
                        <li class="brick-item">
                            <a href="">
                                <div class="figure-img"><img src="image/product/phone2.jpg" alt=""></div>
                                <h3 class="title">Xiaomi 14</h3>
                                <p class="desc">徕卡光学Summilux镜头</p>
                                <p class="price">3999元起</p>
                            </a>
                        </li>
                        <li class="brick-item">
                            <a href="">
                                <div class="figure-img"><img src="image/product/phone3.jpg" alt=""></div>
                                <h3 class="title">Redmi K70 Pro</h3>
                                <p class="desc">性能之王</p>
                                <p class="price">2999元起</p>
                            </a>
                        </li>
                        <li class="brick-item">
                            <a href="">
                                <div class="figure-img"><img src="image/product/phone4.jpg" alt=""></div>
                                <h3 class="title">Redmi K70</h3>
                                <p class="desc">性价比之选</p>
                                <p class="price">1999元起</p>
                            </a>
                        </li>
                        <li class="brick-item">
                            <a href="">
                                <div class="figure-img"><img src="image/product/phone5.jpg" alt=""></div>
                                <h3 class="title">Redmi Note 13 Pro</h3>
                                <p class="desc">2亿像素</p>
                                <p class="price">1499元起</p>
                            </a>
                        </li>
                        <li class="brick-item">
                            <a href="">
                                <div class="figure-img"><img src="image/product/phone6.jpg" alt=""></div>
                                <h3 class="title">Redmi Note 13</h3>
                                <p class="desc">轻薄长续航</p>
                                <p class="price">999元起</p>
                            </a>
                        </li>
                        <li class="brick-item">
                            <a href="">
                                <div class="figure-img"><img src="image/product/phone7.jpg" alt=""></div>
                                <h3 class="title">Xiaomi MIX Fold 3</h3>
                                <p class="desc">轻薄折叠旗舰</p>
                                <p class="price">8999元起</p>
                            </a>
                        </li>
                        <li class="brick-item">
                            <a href="">
                                <div class="figure-img"><img src="image/product/phone8.jpg" alt=""></div>
                                <h3 class="title">Redmi 13C</h3>
                                <p class="desc">入门之选</p>
                                <p class="price">699元起</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 智能穿戴楼层 -->
        <div class="goods-floor">
            <div class="box-hd">
                <h2>智能穿戴</h2>
                <div class="more">
                    <a href="">查看全部 <span class="iconfont icon-arrow-right"></span></a>
                </div>
            </div>
            <div class="box-bd clearfix">
                <div class="span4">
                    <a href="">
                        <img src="image/product/wear-left.jpg" alt="">
                    </a>
                </div>
                <div class="span20">
                    <ul class="brick-list">
                        <li class="brick-item">
                            <a href="">
                                <div class="figure-img"><img src="image/product/wear1.jpg" alt=""></div>
                                <h3 class="title">Xiaomi Watch S3</h3>
                                <p class="desc">百变表圈</p>
                                <p class="price">999元起</p>
                            </a>
                        </li>
                        <li class="brick-item">
                            <a href="">
                                <div class="figure-img"><img src="image/product/wear2.jpg" alt=""></div>
                                <h3 class="title">小米手环 8 Pro</h3>
                                <p class="desc">大屏高亮</p>
                                <p class="price">299元起</p>
                            </a>
                        </li>
                        <li class="brick-item">
                            <a href="">
                                <div class="figure-img"><img src="image/product/wear3.jpg" alt=""></div>
                                <h3 class="title">Xiaomi Buds 4 Pro</h3>
                                <p class="desc">旗舰降噪</p>
                                <p class="price">999元起</p>
                            </a>
                        </li>
                        <li class="brick-item">
                            <a href="">
                                <div class="figure-img"><img src="image/product/wear4.jpg" alt=""></div>
                                <h3 class="title">小米智能家庭屏</h3>
                                <p class="desc">家庭中枢</p>
                                <p class="price">499元起</p>
                            </a>
                        </li>
                        <li class="brick-item">
                            <a href="">
                                <div class="figure-img"><img src="image/product/wear5.jpg" alt=""></div>
                                <h3 class="title">小米体脂秤 S400</h3>
                                <p class="desc">精准测量</p>
                                <p class="price">99元起</p>
                            </a>
                        </li>
                        <li class="brick-item">
                            <a href="">
                                <div class="figure-img"><img src="image/product/wear6.jpg" alt=""></div>
                                <h3 class="title">Redmi Watch 4</h3>
                                <p class="desc">方形大屏</p>
                                <p class="price">499元起</p>
                            </a>
                        </li>
                        <li class="brick-item">
                            <a href="">
                                <div class="figure-img"><img src="image/product/wear7.jpg" alt=""></div>
                                <h3 class="title">小米手表 S1 Pro</h3>
                                <p class="desc">商务旗舰</p>
                                <p class="price">1499元起</p>
                            </a>
                        </li>
                        <li class="brick-item">
                            <a href="">
                                <div class="figure-img"><img src="image/product/wear8.jpg" alt=""></div>
                                <h3 class="title">Redmi Buds 5</h3>
                                <p class="desc">主动降噪</p>
                                <p class="price">199元起</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
```

### 6.2 编写主体区域样式

文件：`css/xiaomi.css`

```css
/* ========== 主体商品推荐区域 ========== */

.page-main {
    padding-top: 20px;
}

/* 大图广告 */
.home-banner {
    margin-bottom: 20px;
}

.home-banner img {
    width: 100%;
    display: block;
}

/* 商品楼层 */
.goods-floor {
    margin-bottom: 40px;
}

/* 楼层标题 */
.box-hd {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.box-hd h2 {
    font-size: 22px;
    font-weight: 200;
    color: #333;
}

.box-hd .more a {
    font-size: 16px;
    color: #333;
}

.box-hd .more a:hover {
    color: #ff6700;
}

/* 楼层内容 - 左大图 + 右商品 */
.box-bd {
    display: flex;
}

/* 左侧大图 */
.box-bd .span4 {
    width: 234px;
    margin-right: 14px;
}

.box-bd .span4 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.box-bd .span4 img:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

/* 右侧商品网格 */
.box-bd .span20 {
    flex: 1;
}

.brick-list {
    display: flex;
    flex-wrap: wrap;
}

/* 商品卡片 */
.brick-item {
    width: calc(25% - 11px);
    margin-left: 14px;
    margin-bottom: 14px;
    background-color: #fff;
    text-align: center;
    padding: 20px 0;
    transition: all 0.3s ease;
}

.brick-item:nth-child(4n+1) {
    margin-left: 0;
}

.brick-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.brick-item a {
    display: block;
    color: #333;
}

.brick-item .figure-img {
    margin-bottom: 10px;
}

.brick-item .figure-img img {
    width: 160px;
    height: 160px;
}

.brick-item .title {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 5px;
}

.brick-item .desc {
    font-size: 12px;
    color: #b0b0b0;
    margin-bottom: 10px;
}

.brick-item .price {
    font-size: 14px;
    color: #ff6700;
}
```

### 6.3 准备商品图片

从小米商城下载商品图片，保存到 `image/product/` 目录。

### 6.4 左侧双图变体

小米商城中，部分楼层（如生活电器、厨房电器、智能家居）的左侧不是一张大图，而是**上下两张小图**。

布局对比：

```
普通楼层（一张大图）        双图楼层（上下两张小图）
┌──────┬─────────────┐    ┌──────┬─────────────┐
│      │  ┌─┐┌─┐┌─┐┌─┐│    │ ┌──┐ │  ┌─┐┌─┐┌─┐┌─┐│
│  大  │  │ ││ ││ ││ ││    │ │图│ │  │ ││ ││ ││ ││
│  图  │  └─┘└─┘└─┘└─┘│    │ │片│ │  └─┘└─┘└─┘└─┘│
│      │  ┌─┐┌─┐┌─┐┌─┐│    │ │1 │ │  ┌─┐┌─┐┌─┐┌─┐│
│      │  │ ││ ││ ││ ││    │ └──┘ │  │ ││ ││ ││ ││
│      │  └─┘└─┘└─┘└─┘│    │ ┌──┐ │  └─┘└─┘└─┘└─┘│
└──────┴─────────────┘    │ │图│ │─────────────│
                           │ │片│ │
                           │ │2 │ │
                           │ └──┘ │
                           └──────┴─────────────┘
```

HTML 结构示例（以"生活电器"楼层为例）：

```html
<!-- 生活电器楼层（左侧双图） -->
<div class="goods-floor">
    <div class="box-hd">
        <h2>生活电器</h2>
        <div class="more">
            <a href="">查看全部 <span class="iconfont icon-arrow-right"></span></a>
        </div>
    </div>
    <div class="box-bd clearfix">
        <!-- 左侧双图 -->
        <div class="span4">
            <div class="span4-list">
                <a href="">
                    <img src="image/product/life-top.jpg" alt="">
                </a>
                <a href="">
                    <img src="image/product/life-bottom.jpg" alt="">
                </a>
            </div>
        </div>
        <!-- 右侧商品卡片 -->
        <div class="span20">
            <ul class="brick-list">
                <li class="brick-item">
                    <a href="">
                        <div class="figure-img"><img src="image/product/life1.jpg" alt=""></div>
                        <h3 class="title">米家扫拖机器人 2</h3>
                        <p class="desc">智能避障</p>
                        <p class="price">1999元起</p>
                    </a>
                </li>
                <!-- ... 更多商品卡片 ... -->
            </ul>
        </div>
    </div>
</div>
```

对应的 CSS 补充样式：

```css
/* ========== 左侧双图变体 ========== */

/* 双图容器 - 上下排列 */
.span4-list {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.span4-list a {
    flex: 1;
    display: block;
}

.span4-list a:first-child {
    margin-bottom: 14px;
}

.span4-list a img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.span4-list a img:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}
```

**关键点**：
- `.span4-list` 用 `flex-direction: column` 让两张图上下排列
- 每张图用 `flex: 1` 平分高度
- `margin-bottom: 14px` 给两张图之间加间距

## 知识点

### calc() 计算

```css
width: calc(25% - 11px);
```
CSS3 的计算函数，可以在 CSS 中进行数学运算。这里用 25% 减去间距，实现4列等宽布局。

### flex-wrap 换行
```css
flex-wrap: wrap;
```
当一行放不下时，自动换行到下一行。配合 `width: calc(25%)` 实现网格布局。

### transition 过渡动画
```css
transition: all 0.3s ease;
```
所有属性变化时，在 0.3 秒内平滑过渡。

### transform 变换
```css
transform: translateY(-2px);
```
向上移动 2 像素，产生悬浮效果。

### flex-direction: column 垂直排列
```css
.span4-list {
    display: flex;
    flex-direction: column;
}
.span4-list a { flex: 1; }
```
默认 `flex-direction: row` 是水平排列，改为 `column` 后变成垂直排列。`flex: 1` 让子元素平分父容器高度。

**类比**：默认像排队横着站，`column` 像排队竖着站。

## 检查清单

- [ ] 大图广告显示正确
- [ ] 手机推荐楼层标题显示正确
- [ ] 左侧大图显示正确
- [ ] 右侧 8 个商品卡片显示正确（4列2行）
- [ ] 商品卡片有悬停效果（上浮 + 阴影）
- [ ] 智能穿戴楼层显示正确
- [ ] 左侧双图楼层：两张图上下排列，间距 14px
- [ ] 各楼层间距合理

## 常见问题

**Q: 商品卡片没有水平排列？**
A: 检查父元素 `.brick-list` 是否设置了 `display: flex` 和 `flex-wrap: wrap`。

**Q: 商品卡片宽度不对？**
A: 检查 `width: calc(25% - 11px)` 是否正确，确认 margin 值。

**Q: 悬停效果不生效？**
A: 检查 `transition` 和 `transform` 是否正确设置。
