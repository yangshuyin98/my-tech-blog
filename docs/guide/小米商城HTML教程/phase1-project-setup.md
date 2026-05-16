# 阶段1：项目初始化与公共样式

## 目标
创建项目结构，配置 HTML 基础，编写公共样式重置文件。

## 前置条件
- 安装了 WebStorm 或 VS Code
- 安装了 Chrome 浏览器

## 操作步骤

### 1.1 创建项目目录

在编辑器中创建新项目，目录结构如下：

```
xiaomi-mall/
├── index.html
├── css/
├── js/
├── image/
└── font/
```

### 1.2 创建 HTML 基础结构

文件：`index.html`

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>小米商城</title>
    <!-- 网站图标 -->
    <link rel="icon" href="image/favicon.ico">
    <!-- 公共样式 -->
    <link rel="stylesheet" href="css/common.css">
    <!-- 主页独有样式 -->
    <link rel="stylesheet" href="css/xiaomi.css">
</head>
<body>

</body>
</html>
```

### 1.3 获取网站图标

1. 打开小米商城官网 https://www.mi.com
2. 右键 → 查看网页源代码
3. 搜索 `icon`，找到 `<link rel="icon" ...>` 标签
4. 复制 href 中的地址，在浏览器中打开
5. 右键保存图片到 `image/favicon.ico`

### 1.4 编写公共样式

文件：`css/common.css`

```css
/* 公共样式 - 所有网站通用 */

/* 重置所有元素的默认外边距和内边距 */
* {
    margin: 0;
    padding: 0;
}

/* 重置 body 默认样式 */
body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #333;
    background-color: #fff;
}

/* 重置列表样式 */
ul, ol {
    list-style: none;
}

/* 重置链接样式 */
a {
    text-decoration: none;
    color: #333;
}

/* 重置图片样式 */
img {
    vertical-align: middle;
    border: none;
}

/* 重置表单元素 */
input, button, textarea {
    border: none;
    outline: none;
    font-family: inherit;
}

button {
    cursor: pointer;
}

/* 清除浮动 */
.clearfix::after {
    content: "";
    display: block;
    clear: both;
}

/* 公共容器 - 固定宽度居中（小米商城使用 .container 作为容器类名） */
.container {
    width: 1226px;
    margin: 0 auto;
}
```

### 1.5 创建主页样式文件

文件：`css/xiaomi.css`

```css
/* 小米商城主页样式 */

/* 这里后续会添加各个区域的样式 */
```

### 1.6 测试基础页面

1. 用浏览器打开 `index.html`
2. 按 F12 打开开发者工具
3. 确认页面没有默认的边距和内边距

## 知识点

### lang 属性
```html
<html lang="zh-CN">
```
告诉浏览器这是中文网站。如果设置为 `en`，浏览器可能会提示翻译。

### CSS 重置 (Reset)
不同浏览器对 HTML 元素有不同的默认样式。CSS 重置就是把这些默认样式统一去掉，保证在所有浏览器中显示一致。

**类比**：就像新房子装修前先把原来的旧装修全部敲掉，重新来过。

### 通配符选择器 `*`
```css
* { margin: 0; padding: 0; }
```
选中页面中所有元素，一次性重置所有元素的外边距和内边距。

### 居中技巧
```css
.container {
    width: 1226px;
    margin: 0 auto;
}
```
- `width: 1226px`：设置固定宽度
- `margin: 0 auto`：上下外边距为0，左右自动（居中）

**类比**：就像把一个固定宽度的画框放在墙上，左右留白自动相等。

## 检查清单

- [ ] 项目目录结构创建完成
- [ ] index.html 文件创建成功
- [ ] favicon.ico 图标获取并放置成功
- [ ] common.css 公共样式编写完成
- [ ] xiaomi.css 主页样式文件创建
- [ ] 浏览器打开页面无默认边距
- [ ] 理解 CSS 重置的作用

## 常见问题

**Q: 为什么 `lang="zh-CN"` 而不是 `lang="en"`？**
A: 中文网站设置 `zh-CN` 可以避免浏览器提示翻译。但里面仍然可以写英文内容。

**Q: `margin: 0 auto` 为什么能居中？**
A: 必须配合 `width` 使用。没有宽度时，元素会占满父容器，无法居中。

**Q: 为什么要用 `*` 通配符重置？**
A: 浏览器对 body、p、ul 等元素有默认的 margin/padding，重置后更方便控制布局。
