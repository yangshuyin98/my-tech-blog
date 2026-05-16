# 阶段2：顶部通栏与头部区域

## 目标
实现小米商城顶部黑色通栏（`site-topbar`）和白色头部导航（`site-header`）。

## 前置条件
- 阶段1 项目初始化完成

## 布局结构说明

```
.header
├── .site-topbar (黑色通栏, height:40px)
│   └── .container
│       ├── .topbar-nav (左侧链接)
│       ├── .topbar-cart (购物车)
│       └── .topbar-info (登录/注册)
└── .site-header (白色导航, height:100px)
    └── .container
        ├── .header-logo
        ├── .header-nav
        └── .header-search
```

## 操作步骤

### 2.1 编写 HTML 结构

文件：`index.html` 的 `<body>` 内容

```html
<!-- 头部区域开始 -->
<div class="header">
    <!-- 黑色顶部通栏 -->
    <div class="site-topbar">
        <div class="container">
            <div class="topbar-nav">
                <a href="">小米官网</a>
                <span class="sep">|</span>
                <a href="">小米商城</a>
                <span class="sep">|</span>
                <a href="">小米澎湃OS</a>
                <span class="sep">|</span>
                <a href="">小米汽车</a>
                <span class="sep">|</span>
                <a href="">云服务</a>
                <span class="sep">|</span>
                <a href="">IoT</a>
                <span class="sep">|</span>
                <a href="">有品</a>
                <span class="sep">|</span>
                <a href="">小爱开放平台</a>
                <span class="sep">|</span>
                <a href="">资质证照</a>
                <span class="sep">|</span>
                <a href="">协议规则</a>
                <span class="sep">|</span>
                <a href="">下载app</a>
                <span class="sep">|</span>
                <a href="">Select Location</a>
            </div>
            <div class="topbar-cart" id="J_miniCartTrigger">
                <a href="">
                    <span class="iconfont icon-cart"></span>
                    购物车（0）
                </a>
                <!-- 购物车下拉 -->
                <div class="cart-ext">
                    购物车中还没有商品，赶紧选购吧！
                </div>
            </div>
            <div class="topbar-info" id="J_siteUserInfo">
                <a href="">登录</a>
                <span class="sep">|</span>
                <a href="">注册</a>
                <span class="sep">|</span>
                <a href="">消息通知</a>
            </div>
        </div>
    </div>
</div>
<!-- 头部区域结束 -->
```

### 2.2 编写顶部通栏样式

文件：`css/xiaomi.css`

```css
/* ========== 顶部通栏 ========== */

.site-topbar {
    width: 100%;
    height: 40px;
    background-color: #333;
    font-size: 12px;
    line-height: 40px;
}

.site-topbar .container {
    display: flex;
    justify-content: space-between;
}

.topbar-nav {
    display: flex;
    align-items: center;
}

.topbar-nav a {
    color: #b0b0b0;
}

.topbar-nav a:hover {
    color: #fff;
}

.topbar-nav .sep {
    color: #424242;
    margin: 0 5px;
}

/* 购物车 */
.topbar-cart {
    position: relative;
}

.topbar-cart > a {
    display: flex;
    align-items: center;
    padding: 0 15px;
    height: 40px;
    color: #b0b0b0;
}

.topbar-cart > a:hover {
    color: #ff6700;
}

.topbar-cart .iconfont {
    font-size: 20px;
    margin-right: 5px;
}

/* 购物车下拉区域 */
.cart-ext {
    display: none;
    position: absolute;
    top: 40px;
    right: 0;
    width: 316px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border: 1px solid #e0e0e0;
    background-color: #fff;
    z-index: 20;
    color: #b0b0b0;
    font-size: 14px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

.topbar-cart:hover .cart-ext {
    display: block;
}

/* 登录/注册 */
.topbar-info {
    display: flex;
    align-items: center;
}

.topbar-info a {
    color: #b0b0b0;
}

.topbar-info a:hover {
    color: #fff;
}

.topbar-info .sep {
    color: #424242;
    margin: 0 5px;
}
```

### 2.3 下载矢量图标

1. 访问 https://www.iconfont.cn/
2. 搜索需要的图标（购物车、搜索等）
3. 下载图标文件
4. 将 `iconfont.css` 和字体文件放入项目

### 2.4 引入矢量图标

文件：`index.html` 的 `<head>` 内

```html
<!-- 字体图标样式 -->
<link rel="stylesheet" href="css/iconfont.css">
```

## 知识点

### 真实网站的 DOM 结构
小米商城的头部由两层组成：黑色 `.site-topbar` 和白色 `.site-header`，每层内部都用 `.container`（1226px）限制内容宽度。这比用一个 `<header>` 包裹更灵活。

### Flexbox 水平分布
```css
.site-topbar .container {
    display: flex;
    justify-content: space-between;
}
```
`justify-content: space-between` 让子元素自动两端对齐，左侧导航、中间购物车、右侧登录信息各占一边。

### position: relative 的作用
```css
.topbar-cart { position: relative; }
.cart-ext { position: absolute; top: 40px; }
```
父元素设置 `position: relative` 后，子元素的 `position: absolute` 才能相对于父元素定位。

## 检查清单

- [ ] 黑色通栏高度 40px，背景色 #333
- [ ] 左侧链接水平排列，字体颜色 #b0b0b0
- [ ] 竖线分隔符颜色 #424242
- [ ] 鼠标悬停链接变白
- [ ] 购物车在右侧，悬停显示下拉区域
- [ ] 登录/注册在最右侧
- [ ] 矢量图标引入成功

## 常见问题

**Q: 三个区域没有两端对齐？**
A: 确认 `.site-topbar .container` 设置了 `display: flex` 和 `justify-content: space-between`。

**Q: 购物车下拉不显示？**
A: 确认 `.topbar-cart` 设置了 `position: relative`，`.cart-ext` 设置了 `position: absolute`。

**Q: 竖线颜色不对？**
A: 检查 `.sep` 的颜色是否设置为 `#424242`。
