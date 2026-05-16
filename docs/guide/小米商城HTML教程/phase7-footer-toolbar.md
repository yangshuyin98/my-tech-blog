# 阶段7：底部区域与右侧工具栏

## 目标
实现页面底部区域（服务保障、链接列表、版权信息）和右侧固定工具栏。

## 前置条件
- 阶段6 主体商品推荐区域完成

## 布局结构说明

```
.site-footer
└── .container
    ├── .footer-service (服务保障, ul>li)
    └── .footer-links (dl/dt/dd 结构)
        ├── dl.col-links × 5 (链接列表)
        └── .col-contact (客服电话 950816)

.site-info
└── .container
    ├── .logo (小米官网)
    └── .info-text (版权信息)

.right-tools (position:fixed, 右侧)
```

## 操作步骤

### 7.1 编写底部区域 HTML

文件：`index.html`，在 `.page-main` 之后添加

```html
<!-- 底部区域开始 -->
<div class="site-footer">
    <div class="container">
        <!-- 服务保障 -->
        <div class="footer-service">
            <ul class="list-service">
                <li><a href=""><em class="iconfont icon-service"></em>预约维修服务</a></li>
                <li><a href=""><em class="iconfont icon-7days"></em>7天无理由退货</a></li>
                <li><a href=""><em class="iconfont icon-15days"></em>15天免费换货</a></li>
                <li><a href=""><em class="iconfont icon-gift"></em>满69包邮</a></li>
                <li><a href=""><em class="iconfont icon-location"></em>520余家售后网点</a></li>
            </ul>
        </div>
        <!-- 链接列表 -->
        <div class="footer-links clearfix">
            <!-- 左侧占位列（真实小米商城使用，用于控制左侧间距） -->
            <dl class="col-links col-links-first">
                <dt></dt>
            </dl>
            <dl class="col-links">
                <dt>选购指南</dt>
                <dd><a href="">手机</a></dd>
                <dd><a href="">电视</a></dd>
                <dd><a href="">笔记本</a></dd>
                <dd><a href="">平板</a></dd>
                <dd><a href="">路由器</a></dd>
            </dl>
            <dl class="col-links">
                <dt>服务中心</dt>
                <dd><a href="">售后政策</a></dd>
                <dd><a href="">自助服务</a></dd>
                <dd><a href="">相关下载</a></dd>
                <dd><a href="">维修网点</a></dd>
            </dl>
            <dl class="col-links">
                <dt>线下门店</dt>
                <dd><a href="">小米之家</a></dd>
                <dd><a href="">服务网点</a></dd>
                <dd><a href="">授权体验店</a></dd>
            </dl>
            <dl class="col-links">
                <dt>关于小米</dt>
                <dd><a href="">了解小米</a></dd>
                <dd><a href="">加入小米</a></dd>
                <dd><a href="">投资者关系</a></dd>
                <dd><a href="">廉洁举报</a></dd>
            </dl>
            <dl class="col-links">
                <dt>关注我们</dt>
                <dd><a href="">新浪微博</a></dd>
                <dd><a href="">官方微信</a></dd>
                <dd><a href="">联系我们</a></dd>
                <dd><a href="">公益基金会</a></dd>
            </dl>
            <!-- 客服电话 -->
            <div class="col-contact">
                <p class="phone">950816</p>
                <p>8:00-18:00（仅收市话费）</p>
                <a class="btn btn-line-primary btn-small" href="">人工客服</a>
                <p class="phone" style="margin-top:25px">950818</p>
                <p>适用于大电视系列</p>
                <a class="btn btn-line-primary btn-small" href="">人工客服</a>
            </div>
        </div>
    </div>
</div>
<!-- 版权信息 -->
<div class="site-info">
    <div class="container">
        <div class="logo ir">小米官网</div>
        <div class="info-text">
            <p>
                <a href="">小米商城</a>
                <span>|</span>
                <a href="">小米澎湃OS</a>
                <span>|</span>
                <a href="">米家</a>
                <span>|</span>
                <a href="">多看</a>
                <span>|</span>
                <a href="">游戏</a>
                <span>|</span>
                <a href="">音乐</a>
                <span>|</span>
                <a href="">政企服务</a>
            </p>
            <p>
                ©<a href="">mi.com</a> 京ICP备10046444号
                <a href="">京公网安备11010802020134号</a>
                <a href="">京ICP证110507号</a>
            </p>
        </div>
    </div>
</div>
<!-- 底部区域结束 -->
```

### 7.2 编写底部区域样式

文件：`css/xiaomi.css`

```css
/* ========== 底部区域 ========== */

.site-footer {
    margin-top: 40px;
    background-color: #fff;
}

/* 服务保障 */
.footer-service {
    border-bottom: 1px solid #e0e0e0;
    padding: 27px 0;
}

.list-service {
    display: flex;
    justify-content: space-around;
}

.list-service li a {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #616161;
}

.list-service li a:hover {
    color: #ff6700;
}

.list-service li a .iconfont {
    font-size: 24px;
    color: #b0b0b0;
    margin-right: 8px;
}

/* 链接列表 - dl/dt/dd 结构 */
.footer-links {
    padding: 40px 0;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
}

.col-links {
    flex: 1;
}

/* 左侧占位列 - 不占空间 */
.col-links-first {
    flex: 0 0 0;
    width: 0;
    overflow: hidden;
}

.col-links dt {
    font-size: 14px;
    color: #333;
    margin-bottom: 20px;
}

.col-links dd {
    margin-bottom: 10px;
}

.col-links dd a {
    font-size: 12px;
    color: #757575;
}

.col-links dd a:hover {
    color: #ff6700;
}

/* 客服电话 */
.col-contact {
    width: 200px;
    text-align: center;
    border-left: 1px solid #e0e0e0;
    padding-left: 20px;
    flex-shrink: 0;
}

.col-contact .phone {
    font-size: 22px;
    color: #ff6700;
    margin-bottom: 5px;
}

.col-contact p {
    font-size: 12px;
    color: #757575;
    margin-bottom: 15px;
}

.btn-line-primary {
    display: inline-block;
    padding: 8px 20px;
    border: 1px solid #ff6700;
    color: #ff6700;
    font-size: 12px;
}

.btn-line-primary:hover {
    background-color: #ff6700;
    color: #fff;
}

/* 版权信息 */
.site-info {
    padding: 30px 0;
    background-color: #fff;
}

.site-info .container {
    display: flex;
    align-items: center;
}

.site-info .logo {
    width: 50px;
    height: 50px;
    background-image: url('../image/logo.png');
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 15px;
    overflow: hidden;
    text-indent: -9999px;
}

.info-text {
    flex: 1;
}

.info-text p {
    font-size: 12px;
    color: #b0b0b0;
    margin-bottom: 5px;
}

.info-text p a {
    color: #b0b0b0;
}

.info-text p a:hover {
    color: #ff6700;
}

.info-text p span {
    margin: 0 5px;
}
```

### 7.3 编写右侧工具栏 HTML

文件：`index.html`

```html
<!-- 右侧工具栏开始 -->
<div class="right-tools">
    <ul class="tools-list">
        <li>
            <a href="">
                <div class="tools-img">
                    <img src="image/toolbar/user.png" alt="">
                    <img src="image/toolbar/user-hover.png" alt="">
                </div>
                <p>个人中心</p>
            </a>
        </li>
        <li>
            <a href="">
                <div class="tools-img">
                    <img src="image/toolbar/service.png" alt="">
                    <img src="image/toolbar/service-hover.png" alt="">
                </div>
                <p>售后服务</p>
            </a>
        </li>
        <li>
            <a href="">
                <div class="tools-img">
                    <img src="image/toolbar/chat.png" alt="">
                    <img src="image/toolbar/chat-hover.png" alt="">
                </div>
                <p>人工客服</p>
            </a>
        </li>
        <li>
            <a href="">
                <div class="tools-img">
                    <img src="image/toolbar/cart.png" alt="">
                    <img src="image/toolbar/cart-hover.png" alt="">
                </div>
                <p>购物车</p>
            </a>
        </li>
    </ul>
    <!-- 回顶部 -->
    <ul class="tools-list return-top">
        <li>
            <a href="">
                <div class="tools-img">
                    <img src="image/toolbar/top.png" alt="">
                    <img src="image/toolbar/top-hover.png" alt="">
                </div>
                <p>回顶部</p>
            </a>
        </li>
    </ul>
</div>
<!-- 右侧工具栏结束 -->
```

### 7.4 编写右侧工具栏样式

文件：`css/right-tools.css`

```css
/* ========== 右侧工具栏 ========== */

.right-tools {
    position: fixed;
    right: 0;
    bottom: 70px;
    z-index: 100;
}

.tools-list li {
    width: 82px;
    height: 90px;
    background-color: #fff;
    border: 1px solid #f5f5f5;
    text-align: center;
    cursor: pointer;
}

.tools-list li a {
    display: block;
    color: #757575;
}

.tools-img {
    position: relative;
    width: 30px;
    height: 30px;
    margin: 0 auto;
    padding-top: 18px;
}

.tools-img img {
    position: absolute;
    width: 30px;
    height: 30px;
}

.tools-img img:last-child {
    opacity: 0;
}

/* 鼠标悬停效果 - 切换图片 */
.tools-list li:hover .tools-img img:first-child {
    opacity: 0;
}

.tools-list li:hover .tools-img img:last-child {
    opacity: 1;
}

.tools-list li:hover p {
    color: #ff6700;
}

.tools-list li p {
    font-size: 12px;
    margin-top: 8px;
}

/* 回顶部按钮 - 默认隐藏 */
.return-top {
    display: none;
    margin-top: 14px;
}
```

### 7.5 引入工具栏样式

文件：`index.html` 的 `<head>` 内

```html
<!-- 右侧工具栏样式 -->
<link rel="stylesheet" href="css/right-tools.css">
```

### 7.6 编写工具栏 JavaScript

文件：`js/toolbar.js`

```javascript
// 右侧工具栏交互
window.addEventListener('load', function () {
    var returnTop = document.querySelector('.return-top');

    // 监听滚动事件
    window.addEventListener('scroll', function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop >= 1280) {
            returnTop.style.display = 'block';
        } else {
            returnTop.style.display = 'none';
        }
    });

    // 点击回顶部
    returnTop.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
```

### 7.7 引入 JS 文件

文件：`index.html` 的 `<body>` 底部

```html
<!-- JavaScript -->
<script src="js/toolbar.js"></script>
<script src="js/banner.js"></script>
```

### 7.8 准备工具栏图片

下载工具栏需要的图片（灰色和橙色两套），保存到 `image/toolbar/` 目录。

## 知识点

### dl/dt/dd 定义列表
```html
<dl>
    <dt>选购指南</dt>
    <dd><a href="">手机</a></dd>
</dl>
```
`<dl>` 是定义列表，`<dt>` 是标题，`<dd>` 是内容。小米商城用它来组织底部链接，比 `<ul>` 更语义化。

### 固定定位 (Fixed)
```css
position: fixed;
right: 0;
bottom: 70px;
```
元素相对于浏览器窗口定位，滚动时位置不变。

### window.scrollTo 平滑滚动
```javascript
window.scrollTo({ top: 0, behavior: 'smooth' });
```
`behavior: 'smooth'` 实现平滑滚动回顶部，比直接设置 `scrollTop` 体验更好。

## 检查清单

- [ ] 底部服务保障区域显示正确（5项）
- [ ] 底部链接列表使用 dl/dt/dd 结构
- [ ] 客服电话显示 950816
- [ ] 版权信息显示正确
- [ ] 右侧工具栏固定在右侧
- [ ] 工具栏悬停变色效果正常
- [ ] 滚动到一定位置后显示"回顶部"
- [ ] 点击"回顶部"平滑回到页面顶部

## 常见问题

**Q: 工具栏没有固定在右侧？**
A: 检查 `position: fixed` 和 `right: 0` 是否正确设置。

**Q: "回顶部"按钮不显示？**
A: 检查滚动事件是否正确绑定，确认 `scrollTop` 值是否正确。

**Q: 图片切换效果不生效？**
A: 确认两张图片在同一位置（都设置 `position: absolute`），检查 `opacity` 切换逻辑。
