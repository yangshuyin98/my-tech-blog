# 阶段4：Banner轮播图区域

## 目标
实现图片轮播效果，使用 Swiper.js 实现自动播放、左右切换按钮、小圆点指示器。

## 前置条件
- 阶段3 白色导航区域完成
- 准备好6张轮播图片

## 布局结构说明

```
.home-hero-container.container (1226px居中)
└── .home-hero (position:relative)
    ├── .swiper-container.home-hero-swiper (height:460px)
    │   ├── .swiper-wrapper
    │   │   └── .swiper-slide × 6
    │   ├── .swiper-pagination (小圆点)
    │   ├── .swiper-button-prev (上一张)
    │   └── .swiper-button-next (下一张)
    └── .home-hero-sub (广告区域, 阶段5实现)
```

轮播图在 `.container`（1226px）内部，不是全屏铺满。

## 操作步骤

### 4.1 准备轮播图片

从小米商城下载6张轮播图，保存到 `image/banner/` 目录：
- banner1.jpg ~ banner6.jpg（建议尺寸 1226x460）

### 4.2 编写 HTML 结构

文件：`index.html`，在 `.site-header` 之后添加

```html
<!-- Banner区域开始 -->
<div class="home-hero-container container">
    <div class="home-hero">
        <!-- 轮播图 -->
        <div class="swiper-container home-hero-swiper" id="J_homeSwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <a href=""><img src="image/banner/banner1.jpg" alt=""></a>
                </div>
                <div class="swiper-slide">
                    <a href=""><img src="image/banner/banner2.jpg" alt=""></a>
                </div>
                <div class="swiper-slide">
                    <a href=""><img src="image/banner/banner3.jpg" alt=""></a>
                </div>
                <div class="swiper-slide">
                    <a href=""><img src="image/banner/banner4.jpg" alt=""></a>
                </div>
                <div class="swiper-slide">
                    <a href=""><img src="image/banner/banner5.jpg" alt=""></a>
                </div>
                <div class="swiper-slide">
                    <a href=""><img src="image/banner/banner6.jpg" alt=""></a>
                </div>
            </div>
            <!-- 小圆点指示器 -->
            <div class="swiper-pagination"></div>
            <!-- 左右切换按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <!-- 注意：.home-hero 和 .home-hero-container 暂时不关闭 -->
        <!-- 侧边栏和广告区域将在阶段5添加在这里 -->
    <!-- </div> .home-hero 关闭标签在阶段5添加 -->
<!-- </div> .home-hero-container 关闭标签在阶段5添加 -->
```

### 4.3 引入 Swiper.js

文件：`index.html` 的 `<head>` 内

```html
<!-- Swiper.js 样式 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
```

文件：`index.html` 的 `<body>` 底部

```html
<!-- Swiper.js 脚本 -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
```

### 4.4 编写 Banner 样式

文件：`css/xiaomi.css`

```css
/* ========== Banner区域 ========== */

.home-hero-container {
    position: relative;
}

.home-hero {
    position: relative;
}

/* 轮播图容器 */
.home-hero-swiper {
    position: relative;
    width: 100%;
    height: 460px;
    overflow: hidden;
}

.home-hero-swiper .swiper-slide a {
    display: block;
    width: 100%;
    height: 100%;
}

.home-hero-swiper .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* 自定义分页器样式 */
.home-hero-swiper .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    background: rgba(255, 255, 255, 0.5);
    border: 2px solid rgba(0, 0, 0, 0.3);
    opacity: 1;
}

.home-hero-swiper .swiper-pagination-bullet-active {
    background: #fff;
    border-color: #fff;
}

/* 自定义左右按钮 */
.home-hero-swiper .swiper-button-prev,
.home-hero-swiper .swiper-button-next {
    width: 40px;
    height: 70px;
    margin-top: -35px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
}

.home-hero-swiper .swiper-button-prev:hover,
.home-hero-swiper .swiper-button-next:hover {
    background-color: rgba(0, 0, 0, 0.5);
}

.home-hero-swiper .swiper-button-prev {
    left: 234px;
}

.home-hero-swiper .swiper-button-next {
    right: 0;
}

.home-hero-swiper .swiper-button-prev::after,
.home-hero-swiper .swiper-button-next::after {
    font-size: 20px;
}
```

### 4.5 编写 Swiper 初始化 JavaScript

文件：`js/banner.js`

```javascript
// 轮播图初始化
window.addEventListener('load', function () {
    var mySwiper = new Swiper('#J_homeSwiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });

    // 鼠标悬停暂停，移出继续
    var swiperEl = document.getElementById('J_homeSwiper');
    swiperEl.addEventListener('mouseenter', function () {
        mySwiper.autoplay.stop();
    });
    swiperEl.addEventListener('mouseleave', function () {
        mySwiper.autoplay.start();
    });
});
```

## 知识点

### Swiper.js 轮播库
Swiper.js 是专业的轮播图库，支持触摸滑动、循环播放、淡入淡出等效果。比手写 JS 更稳定可靠。

**类比**：就像用洗衣机洗衣服 vs 手洗，Swiper.js 帮你处理了所有复杂细节。

### Swiper 的三层结构
```html
.swiper-container        ← 最外层容器
  .swiper-wrapper        ← 滑动轨道
    .swiper-slide        ← 每一帧内容
```
- `.swiper-container`：固定宽高
- `.swiper-wrapper`：由 Swiper 自动控制位移
- `.swiper-slide`：每张图片的容器

### effect: 'fade' 淡入淡出
默认的滑动效果是左右平移，`effect: 'fade'` 改为淡入淡出，更符合小米商城的实际效果。

## 检查清单

- [ ] `.home-hero` 和 `.home-hero-container` 的关闭标签**尚未添加**（等阶段5）
- [ ] 6张轮播图片显示正确，宽度为容器宽度（1226px）
- [ ] 图片自动轮播（5秒间隔）
- [ ] 切换动画为淡入淡出效果
- [ ] 上一张按钮在侧边栏位置（left: 234px）
- [ ] 下一张按钮在容器右侧
- [ ] 点击上一张/下一张按钮正常切换
- [ ] 小圆点指示器显示正确
- [ ] 当前图片对应的小圆点亮起
- [ ] 点击小圆点可以切换图片
- [ ] 鼠标悬停暂停轮播
- [ ] 鼠标移出继续轮播

## 常见问题

**Q: 图片不显示？**
A: 检查图片路径是否正确，确认图片文件存在。

**Q: Swiper 不工作？**
A: 检查 Swiper.js 是否正确引入，确认 `#J_homeSwiper` 选择器正确。

**Q: 上一张按钮位置不对？**
A: 确认 `.swiper-button-prev` 设置了 `left: 234px`，确认父元素设置了 `position: relative`。

**Q: 轮播不自动播放？**
A: 确认 `autoplay` 配置正确，检查是否有 JS 报错。
