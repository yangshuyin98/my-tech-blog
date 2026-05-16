# 阶段3：白色导航区域

## 目标
实现白色导航条，包含 Logo、导航菜单（全部商品分类 + 8个导航项）、搜索框。

## 前置条件
- 阶段2 顶部通栏完成

## 布局结构说明

```
.site-header (白色, height:100px)
└── .container (display:flex, align-items:center)
    ├── .header-logo (MI Logo)
    ├── .header-nav
    │   └── .nav-list (display:flex)
    │       ├── .nav-category (全部商品分类)
    │       └── .nav-item × 8 (小米手机/电视/笔记本...)
    └── .header-search
        ├── form > input + button
        └── .search-ext (搜索扩展, focus时显示)
```

## 操作步骤

### 3.1 编写 HTML 结构

文件：`index.html`，在 `.header` 的 `.site-topbar` 之后添加

```html
<!-- 白色导航区域 -->
<div class="site-header">
    <div class="container">
        <!-- Logo -->
        <div class="header-logo">
            <a href="" class="logo ir">小米官网</a>
        </div>
        <!-- 导航菜单 -->
        <div class="header-nav">
            <ul class="nav-list">
                <li class="nav-item"><a href="">Xiaomi手机</a></li>
                <li class="nav-item"><a href="">REDMI手机</a></li>
                <li class="nav-item"><a href="">电视</a></li>
                <li class="nav-item"><a href="">笔记本</a></li>
                <li class="nav-item"><a href="">平板</a></li>
                <li class="nav-item"><a href="">家电</a></li>
                <li class="nav-item"><a href="">路由器</a></li>
                <li class="nav-item"><a href="">服务中心</a></li>
            </ul>
        </div>
        <!-- 搜索框 -->
        <div class="header-search">
            <form action="">
                <input type="text" class="search-text" placeholder="手机">
                <button class="search-btn">
                    <span class="iconfont icon-search"></span>
                </button>
            </form>
            <div class="search-ext">
                <a href="">手机</a>
                <a href="">笔记本</a>
            </div>
        </div>
    </div>
</div>
```

### 3.2 获取 Logo 图片

1. 打开小米商城官网
2. F12 检查元素，找到 Logo
3. 获取 Logo 图片地址并下载
4. 保存到 `image/logo.png`

### 3.3 编写导航区域样式

文件：`css/xiaomi.css`

```css
/* ========== 白色导航区域 ========== */

.site-header {
    width: 100%;
    height: 100px;
    background-color: #fff;
}

.site-header .container {
    display: flex;
    align-items: center;
    height: 100%;
}

/* Logo */
.header-logo {
    width: 56px;
    height: 56px;
    margin-right: 20px;
}

.header-logo .logo {
    display: block;
    width: 56px;
    height: 56px;
    background-image: url('../image/logo.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    overflow: hidden;
}

/* 图片替换文字 (ir = image replacement) */
.ir {
    text-indent: -9999px;
    overflow: hidden;
}

/* 导航菜单 */
.header-nav {
    flex: 1;
}

.nav-list {
    display: flex;
    align-items: center;
}

.nav-item {
    margin: 0 10px;
}

.nav-item a {
    font-size: 16px;
    color: #333;
}

.nav-item a:hover {
    color: #ff6700;
}

/* 搜索框 */
.header-search {
    position: relative;
}

.header-search form {
    display: flex;
    border: 1px solid #e0e0e0;
}

.search-text {
    width: 245px;
    height: 50px;
    padding: 0 10px;
    font-size: 14px;
}

.search-btn {
    width: 52px;
    height: 50px;
    background-color: #fff;
    border-left: 1px solid #e0e0e0;
}

.search-btn:hover {
    background-color: #ff6700;
    color: #fff;
}

/* 搜索扩展区域 */
.search-ext {
    display: none;
    position: absolute;
    top: 52px;
    left: 0;
    width: 245px;
    border: 1px solid #ff6700;
    background-color: #fff;
    z-index: 20;
}

.search-ext a {
    display: block;
    padding: 6px 10px;
    color: #333;
    font-size: 12px;
}

.search-ext a:hover {
    background-color: #f5f5f5;
}

.search-text:focus ~ .search-ext {
    display: block;
}
```

## 知识点

### Flexbox 布局
```css
.site-header .container {
    display: flex;
    align-items: center;
}
```
Flexbox 是现代 CSS 布局方式，`align-items: center` 实现垂直居中，`flex: 1` 让导航菜单占满剩余空间，把搜索框推到最右侧。

### 图片替换文字 (IR 技巧)
```css
.ir {
    text-indent: -9999px;
    overflow: hidden;
}
```
用背景图替换文字内容，SEO 友好（搜索引擎仍能读到文字），同时显示 Logo 图片。

### 伪类选择器 `:focus`
```css
.search-text:focus ~ .search-ext { display: block; }
```
输入框获得焦点时触发。`~` 是兄弟选择器，选中后面的兄弟元素。

## 检查清单

- [ ] Logo 显示正确，大小为 56x56
- [ ] 导航菜单水平排列，间距合理
- [ ] 菜单悬停变色为 #ff6700
- [ ] 搜索框在最右侧
- [ ] 搜索框聚焦时显示扩展区域
- [ ] 各区域间距合理

## 常见问题

**Q: Logo 背景图片不显示？**
A: 检查 `background-image` 路径是否正确，确认图片文件存在。

**Q: 搜索框没有在最右侧？**
A: 确认 `.header-nav` 设置了 `flex: 1`，它会占满剩余空间把搜索框推到右边。

**Q: 搜索扩展区域位置不对？**
A: 确认父元素 `.header-search` 设置了 `position: relative`。
