# 阶段5：侧边栏与广告区域

## 目标
实现 Banner 左侧侧边栏（带二级菜单）和下方广告/频道区域。

## 前置条件
- 阶段4 Banner轮播图完成

## 布局结构说明

```
.home-hero-container.container
└── .home-hero (position:relative)
    ├── .swiper-container (轮播图, z-index:1)
    ├── .site-category (侧边栏, absolute, z-index:5)
    │   └── .site-category-list > .category-item × 10
    │       ├── .title (分类名称)
    │       └── .children (二级菜单, absolute, left:234px)
    │           └── .children-list > li
    │               └── .link > .thumb + .text
    └── .home-hero-sub (广告区域)
        ├── .span4 > .home-channel-list (6个图标)
        └── .span16 > .home-promo-list (3张促销图)
```

**关键**：二级菜单是 `.category-item` 的子元素，用 CSS `:hover` 控制显示，不需要 JavaScript。

## 操作步骤

### 5.1 修改 Banner 区域 HTML

文件：`index.html`，在阶段4留下的注释处（`.swiper-container` 之后、`.home-hero` 关闭之前）添加侧边栏

> **重要**：侧边栏必须放在 `.home-hero` **内部**，这样 `position: absolute` 才能相对于 `.home-hero` 定位。不要放在 `</div>` of `.home-hero` 之后！

```html
<!-- 侧边栏 -->
<div class="site-category">
    <ul class="site-category-list">
        <li class="category-item">
            <a class="title" href="">手机 电话卡 <em class="iconfont icon-arrow-right"></em></a>
            <div class="children clearfix">
                <ul class="children-list">
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/phone1.png" alt=""><span class="text">Xiaomi 14 Ultra</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/phone2.png" alt=""><span class="text">Xiaomi 14</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/phone3.png" alt=""><span class="text">Redmi K70 Pro</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/phone4.png" alt=""><span class="text">Redmi K70</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/phone5.png" alt=""><span class="text">Redmi Note 13 Pro</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/phone6.png" alt=""><span class="text">Redmi Note 13</span></a></li>
                </ul>
            </div>
        </li>
        <li class="category-item">
            <a class="title" href="">电视 盒子 <em class="iconfont icon-arrow-right"></em></a>
            <div class="children clearfix">
                <ul class="children-list">
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/tv1.png" alt=""><span class="text">小米电视 S Pro 75</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/tv2.png" alt=""><span class="text">小米电视 S Pro 65</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/tv3.png" alt=""><span class="text">Redmi 游戏电视 X 75</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/tv4.png" alt=""><span class="text">小米电视 A 55</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/tv5.png" alt=""><span class="text">小米电视 A 43</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/tv6.png" alt=""><span class="text">小米电视 A 32</span></a></li>
                </ul>
            </div>
        </li>
        <li class="category-item">
            <a class="title" href="">笔记本 平板 <em class="iconfont icon-arrow-right"></em></a>
            <div class="children clearfix">
                <ul class="children-list">
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/laptop1.png" alt=""><span class="text">小米笔记本 Pro 16</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/laptop2.png" alt=""><span class="text">小米笔记本 Pro 14</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/laptop3.png" alt=""><span class="text">Redmi Book 16</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/laptop4.png" alt=""><span class="text">Redmi Book 14</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/laptop5.png" alt=""><span class="text">小米平板 6 Max</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/laptop6.png" alt=""><span class="text">小米平板 6</span></a></li>
                </ul>
            </div>
        </li>
        <li class="category-item">
            <a class="title" href="">家电 <em class="iconfont icon-arrow-right"></em></a>
            <div class="children clearfix">
                <ul class="children-list">
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/appliance1.png" alt=""><span class="text">米家冰箱 对开门 550L</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/appliance2.png" alt=""><span class="text">米家洗烘一体机 12kg</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/appliance3.png" alt=""><span class="text">米家空调 巨省电 1.5匹</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/appliance4.png" alt=""><span class="text">米家扫拖机器人 2</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/appliance5.png" alt=""><span class="text">米家空气净化器 4 Pro</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/appliance6.png" alt=""><span class="text">米家净水器 1200G</span></a></li>
                </ul>
            </div>
        </li>
        <li class="category-item">
            <a class="title" href="">出行 穿搭 <em class="iconfont icon-arrow-right"></em></a>
            <div class="children clearfix">
                <ul class="children-list">
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/travel1.png" alt=""><span class="text">小米电动滑板车 4 Pro</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/travel2.png" alt=""><span class="text">米家充气宝 2</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/travel3.png" alt=""><span class="text">小米手环 8 Pro</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/travel4.png" alt=""><span class="text">小米旅行箱 20寸</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/travel5.png" alt=""><span class="text">小米双肩包</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/travel6.png" alt=""><span class="text">小米运动鞋 4</span></a></li>
                </ul>
            </div>
        </li>
        <li class="category-item">
            <a class="title" href="">智能 路由器 <em class="iconfont icon-arrow-right"></em></a>
            <div class="children clearfix">
                <ul class="children-list">
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/smart1.png" alt=""><span class="text">小米路由器 BE6500</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/smart2.png" alt=""><span class="text">小米路由器 AX6000</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/smart3.png" alt=""><span class="text">小米智能摄像机 3</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/smart4.png" alt=""><span class="text">小米智能门锁 Pro</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/smart5.png" alt=""><span class="text">米家智能插座 3</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/smart6.png" alt=""><span class="text">小米中枢网关</span></a></li>
                </ul>
            </div>
        </li>
        <li class="category-item">
            <a class="title" href="">电源 配件 <em class="iconfont icon-arrow-right"></em></a>
            <div class="children clearfix">
                <ul class="children-list">
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/power1.png" alt=""><span class="text">小米 67W 充电器</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/power2.png" alt=""><span class="text">小米移动电源 3</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/power3.png" alt=""><span class="text">小米数据线 2m</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/power4.png" alt=""><span class="text">小米车载充电器</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/power5.png" alt=""><span class="text">小米无线充电座</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/power6.png" alt=""><span class="text">小米插线板 5位</span></a></li>
                </ul>
            </div>
        </li>
        <li class="category-item">
            <a class="title" href="">耳机 音箱 <em class="iconfont icon-arrow-right"></em></a>
            <div class="children clearfix">
                <ul class="children-list">
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/audio1.png" alt=""><span class="text">Xiaomi Buds 4 Pro</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/audio2.png" alt=""><span class="text">Xiaomi Buds 4</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/audio3.png" alt=""><span class="text">Redmi Buds 5 Pro</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/audio4.png" alt=""><span class="text">小米音箱 Art</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/audio5.png" alt=""><span class="text">小米小爱音箱 Pro</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/audio6.png" alt=""><span class="text">小米户外音箱</span></a></li>
                </ul>
            </div>
        </li>
        <li class="category-item">
            <a class="title" href="">生活 箱包 <em class="iconfont icon-arrow-right"></em></a>
            <div class="children clearfix">
                <ul class="children-list">
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/life1.png" alt=""><span class="text">米家保温杯</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/life2.png" alt=""><span class="text">米家自动洗手机</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/life3.png" alt=""><span class="text">米家吹风机 H501</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/life4.png" alt=""><span class="text">米家剃须刀 S600</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/life5.png" alt=""><span class="text">小米背包 20L</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/life6.png" alt=""><span class="text">小米签字笔</span></a></li>
                </ul>
            </div>
        </li>
        <li class="category-item">
            <a class="title" href="">儿童 老人 <em class="iconfont icon-arrow-right"></em></a>
            <div class="children clearfix">
                <ul class="children-list">
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/kids1.png" alt=""><span class="text">米家儿童手表 6C</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/kids2.png" alt=""><span class="text">米家故事机</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/kids3.png" alt=""><span class="text">米家儿童自行车</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/kids4.png" alt=""><span class="text">米家老人血压计</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/kids5.png" alt=""><span class="text">米家老人手环</span></a></li>
                    <li><a class="link clearfix" href=""><img class="thumb" width="40" height="40" src="image/menu/kids6.png" alt=""><span class="text">米家老人收音机</span></a></li>
                </ul>
            </div>
        </li>
    </ul>
</div>
```

### 5.2 编写侧边栏样式

文件：`css/xiaomi.css`

```css
/* ========== 侧边栏与二级菜单 ========== */

/* 侧边栏 - 绝对定位盖在轮播图上面 */
.site-category {
    position: absolute;
    top: 0;
    left: 0;
    width: 234px;
    height: 460px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 5;
    padding-top: 20px;
}

/* 分类项 */
.category-item {
    position: relative;
    height: 42px;
    line-height: 42px;
    padding: 0 30px;
}

.category-item:hover {
    background-color: #ff6700;
}

.category-item .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 14px;
}

.category-item .title .iconfont {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
}

/* 二级菜单 - 默认隐藏 */
.children {
    display: none;
    position: absolute;
    top: 0;
    left: 234px;
    width: 800px;
    height: 460px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-left: none;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.18);
    z-index: 100;
}

/* 悬停时显示二级菜单 */
.category-item:hover .children {
    display: block;
}

/* 二级菜单商品列表 */
.children-list {
    padding: 20px 30px;
}

.children-list li {
    float: left;
    width: 25%;
    height: 70px;
    padding: 10px 0;
}

.children-list .link {
    display: flex;
    align-items: center;
    color: #333;
    font-size: 14px;
}

.children-list .link:hover {
    color: #ff6700;
}

.children-list .thumb {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    object-fit: contain;
}

.children-list .text {
    white-space: nowrap;
}
```

### 5.3 编写广告/频道区域 HTML

文件：`index.html`，在 `.home-hero` 内、侧边栏之后添加。最后关闭 `.home-hero` 和 `.home-hero-container`。

> **重要**：广告区域同样必须放在 `.home-hero` **内部**。添加完广告区域后，记得关闭 `.home-hero`（`</div>`）和 `.home-hero-container`（`</div>`）。

```html
<!-- 广告/频道区域 -->
<div class="home-hero-sub row">
    <!-- 左侧频道图标 -->
    <div class="span4">
        <ul class="home-channel-list">
            <li><a href=""><img src="image/channel/channel1.png" alt="">手机</a></li>
            <li><a href=""><img src="image/channel/channel2.png" alt="">智能穿戴</a></li>
            <li><a href=""><img src="image/channel/channel3.png" alt="">电视</a></li>
            <li><a href=""><img src="image/channel/channel4.png" alt="#">笔记本</a></li>
            <li><a href=""><img src="image/channel/channel5.png" alt="">家电</a></li>
            <li><a href=""><img src="image/channel/channel6.png" alt="">生活电器</a></li>
        </ul>
    </div>
    <!-- 右侧促销图片 -->
    <div class="span16">
        <ul class="home-promo-list">
            <li><a href=""><img src="image/promo/promo1.jpg" alt=""></a></li>
            <li><a href=""><img src="image/promo/promo2.jpg" alt=""></a></li>
            <li><a href=""><img src="image/promo/promo3.jpg" alt=""></a></li>
        </ul>
    </div>
</div>
    </div> <!-- 关闭 .home-hero -->
</div> <!-- 关闭 .home-hero-container -->
<!-- Banner区域结束 -->
```

### 5.4 编写广告/频道区域样式

文件：`css/xiaomi.css`

```css
/* ========== 广告/频道区域 ========== */

.home-hero-sub {
    margin-top: 14px;
    display: flex;
}

/* 行容器 */
.row {
    display: flex;
}

/* 左侧频道图标 */
.span4 {
    width: 234px;
    margin-right: 14px;
}

.home-channel-list {
    display: flex;
    flex-wrap: wrap;
    background-color: #5f5750;
}

.home-channel-list li {
    width: 78px;
    height: 82px;
    text-align: center;
}

.home-channel-list li a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #fff;
    font-size: 12px;
}

.home-channel-list li a:hover {
    color: #ff6700;
}

.home-channel-list li a img {
    width: 24px;
    height: 24px;
    margin-bottom: 5px;
}

/* 右侧促销图片 */
.span16 {
    flex: 1;
}

.home-promo-list {
    display: flex;
}

.home-promo-list li {
    flex: 1;
    margin-left: 14px;
}

.home-promo-list li:first-child {
    margin-left: 0;
}

.home-promo-list li a {
    display: block;
}

.home-promo-list li a img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

### 5.5 准备图片资源

#### 侧边栏二级菜单商品图片
下载对应商品的小图（约 40x40 像素），保存到 `image/menu/` 目录。

#### 频道图标

下载 6 个频道图标（约 24x24 像素），保存到 `image/channel/` 目录。

#### 促销图片
下载 3 张促销图片，保存到 `image/promo/` 目录。

## 知识点

### CSS :hover 控制二级菜单显示
```css
.children { display: none; }
.category-item:hover .children { display: block; }
```
这是纯 CSS 实现，不需要 JavaScript。当鼠标悬停在 `.category-item` 上时，其子元素 `.children` 自动显示。

**类比**：就像抽屉柜，拉开一个抽屉（hover），里面的东西自动露出来。

### 侧边栏覆盖轮播图的原理
```
.home-hero (position: relative)
├── .swiper-container (z-index: 1)  ← 轮播图在最底层
├── .site-category (z-index: 5)     ← 侧边栏盖在轮播图上面
└── .swiper-button-prev (z-index: 10) ← 按钮在最上面
```

侧边栏和轮播图都在同一个容器内，通过 `z-index` 控制层叠顺序。

### 二级菜单的定位
```css
.children {
    position: absolute;
    left: 234px;  /* 紧贴侧边栏右侧 */
    top: 0;
}
```
二级菜单相对于父元素 `.category-item` 定位，`left: 234px` 等于侧边栏宽度。

### Flex 弹性布局
```css
.home-promo-list { display: flex; }
.home-promo-list li { flex: 1; }
```
`flex: 1` 让元素自动等分父容器的可用空间。

## 检查清单

- [ ] 侧边栏和广告区域都在 `.home-hero` **内部**（不是外面）
- [ ] `.home-hero` 和 `.home-hero-container` 的关闭标签在广告区域之后
- [ ] 侧边栏盖在轮播图左上角，宽度 234px
- [ ] 侧边栏有半透明黑色背景
- [ ] 鼠标悬停侧边栏项变色为 #ff6700
- [ ] 鼠标悬停时右侧显示二级菜单
- [ ] 二级菜单显示商品图片和名称
- [ ] 鼠标移出后二级菜单自动隐藏
- [ ] 轮播按钮在侧边栏旁边，可正常点击
- [ ] 左侧频道区域 6 个图标显示正确
- [ ] 右侧促销区域 3 张图片显示正确

## 常见问题

**Q: 侧边栏位置不对，没有盖在轮播图上面？**
A: 最常见的原因是 `.site-category` 放在了 `.home-hero` **外面**。它必须是 `.home-hero` 的子元素，`position: absolute` 才能相对于 `.home-hero` 定位。用 F12 检查 DOM 嵌套关系。

**Q: 二级菜单不显示？**
A: 检查 `.children` 是否设置了 `display: none`，检查 `:hover` 选择器是否正确（父元素是 `.category-item`）。

**Q: 鼠标移到二级菜单时菜单消失了？**
A: 确保 `.children` 是 `.category-item` 的子元素（不是兄弟元素），这样 hover 状态会传递。

**Q: 轮播按钮被侧边栏遮挡？**
A: 确认 `.swiper-button-prev` 的 `z-index`（10）高于 `.site-category` 的 `z-index`（5）。
