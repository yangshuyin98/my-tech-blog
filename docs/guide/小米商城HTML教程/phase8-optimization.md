# 阶段8：收尾优化与字体图标本地化

## 目标
修复已知 Bug，将网络字体图标下载到本地，完成最终优化。

## 前置条件
- 阶段7 底部区域与右侧工具栏完成

## 操作步骤

### 8.1 修复 z-index 层级问题

当多个元素重叠时，需要正确设置 `z-index` 来控制显示优先级。以下是整个项目的 z-index 层级规划：

文件：`css/xiaomi.css`

```css
/* z-index 层级规划（从低到高）：
   .swiper-container       → 1   (轮播图底层)
   .site-category          → 5   (侧边栏，盖在轮播图上)
   .children               → 100 (二级菜单，悬停时显示)
   .swiper-button-prev/next → 10  (轮播按钮)
   .cart-ext               → 20  (购物车下拉)
   .search-ext             → 20  (搜索扩展)
   .right-tools            → 100 (右侧工具栏)
*/

/* 修复购物车下拉区域层级 */
.cart-ext {
    z-index: 20;
}

/* 修复搜索扩展区域层级 */
.search-ext {
    z-index: 20;
}

/* 修复轮播按钮层级 */
.home-hero-swiper .swiper-button-prev,
.home-hero-swiper .swiper-button-next {
    z-index: 10;
}
```

### 8.2 字体图标本地化

#### 8.2.1 下载字体文件

1. 打开 `css/iconfont.css`
2. 找到 `@font-face` 中的 URL 地址
3. 分别访问这些地址，下载字体文件：
   - `.woff2` 格式
   - `.woff` 格式
   - `.ttf` 格式
4. 将下载的文件保存到 `font/` 目录

#### 8.2.2 修改 CSS 中的字体路径

文件：`css/iconfont.css`

```css
@font-face {
    font-family: "iconfont";
    src:
        url('../font/iconfont.woff2?t=1234567890') format('woff2'),
        url('../font/iconfont.woff?t=1234567890') format('woff'),
        url('../font/iconfont.ttf?t=1234567890') format('truetype');
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* 图标定义 */
.icon-cart::before { content: "\e601"; }
.icon-search::before { content: "\e602"; }
.icon-arrow-right::before { content: "\e603"; }
.icon-service::before { content: "\e604"; }
/* ... 其他图标 */
```

### 8.3 添加 CSS 过渡动画

文件：`css/xiaomi.css`

```css
/* 为常用交互添加过渡效果 */
.topbar-nav a {
    transition: color 0.3s ease;
}

.nav-item a {
    transition: color 0.3s ease;
}

.brick-item {
    transition: all 0.3s ease;
}

.tools-list li {
    transition: all 0.3s ease;
}
```

### 8.4 优化图片加载

为图片添加懒加载：

```html
<!-- 使用 loading="lazy" 实现懒加载 -->
<img src="image/product/phone1.jpg" alt="Xiaomi 14 Ultra" loading="lazy">
```

### 8.5 完整的文件引用检查

文件：`index.html` 的 `<head>` 部分

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1226">
    <title>小米商城</title>
    <!-- 网站图标 -->
    <link rel="icon" href="image/favicon.ico">
    <!-- 公共样式 -->
    <link rel="stylesheet" href="css/common.css">
    <!-- 字体图标 -->
    <link rel="stylesheet" href="css/iconfont.css">
    <!-- Swiper.js 样式 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
    <!-- 右侧工具栏样式 -->
    <link rel="stylesheet" href="css/right-tools.css">
    <!-- 主页独有样式 -->
    <link rel="stylesheet" href="css/xiaomi.css">
</head>
```

文件：`index.html` 的 `<body>` 底部

```html
<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script src="js/toolbar.js"></script>
<script src="js/banner.js"></script>
</body>
```

### 8.6 Git 提交

```bash
git add .
git commit -m "完成小米商城主页开发"
git status
```

## 知识点

### z-index 层叠上下文
`z-index` 只对已定位的元素（`position: relative/absolute/fixed`）生效。数值越大，元素越靠前。

**类比**：就像一摞纸，数字越大越在上面。

### 字体图标本地化的好处
1. **加载更快**：不依赖外部 CDN
2. **更稳定**：不会因为网络问题导致图标不显示
3. **离线可用**：断网也能正常显示

### CSS 过渡 (Transition)
```css
transition: all 0.3s ease;
```
- `all`：所有属性都过渡
- `0.3s`：过渡时间
- `ease`：过渡曲线（先慢后快再慢）

### 图片懒加载
```html
<img loading="lazy" src="..." alt="">
```
图片进入可视区域时才加载，提高页面初始加载速度。

## 检查清单

- [ ] z-index 层级：二级菜单(100) > 轮播按钮(10) > 侧边栏(5) > 轮播图(1)
- [ ] z-index 层级：搜索/购物车扩展(20) > 轮播按钮(10)
- [ ] z-index 层级：右侧工具栏(100) > 所有其他元素
- [ ] 字体文件下载到本地
- [ ] 字体路径修改正确
- [ ] 所有图标正常显示
- [ ] 过渡动画平滑
- [ ] 图片懒加载配置
- [ ] 所有 CSS 文件引入正确
- [ ] 所有 JS 文件引入正确
- [ ] Git 提交完成

## 常见问题

**Q: 本地字体不显示？**
A: 检查字体文件路径是否正确，确认 `@font-face` 中的 URL 格式正确。

**Q: z-index 设置了但不生效？**
A: 确认元素已设置 `position: relative/absolute/fixed`。

**Q: 过渡动画卡顿？**
A: 尽量只过渡 `transform` 和 `opacity`，避免过渡 `width/height` 等属性。

## 项目完成

恭喜！你已经完成了小米商城首页的仿写。

### 后续学习建议

1. **继续完善页面**：添加更多商品区块、完善交互细节
2. **学习 CSS 预处理器**：Sass/Less 可以让 CSS 更易维护
3. **学习 JavaScript 框架**：Vue/React 可以提高开发效率
4. **学习构建工具**：Webpack/Vite 可以优化项目构建
5. **学习响应式设计**：让页面适配不同设备

### 项目扩展方向

- 添加商品详情页
- 实现购物车功能
- 添加用户登录注册
- 接入后端 API
- 部署到服务器
