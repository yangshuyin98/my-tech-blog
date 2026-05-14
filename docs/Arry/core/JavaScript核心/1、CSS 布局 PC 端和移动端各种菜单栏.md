---
title: "CSS 布局 PC 端和移动端各种菜单栏"
source: "https://www.arryblog.com/case/"
category: "JavaScript"
order: 1
---

# CSS 布局 PC 端和移动端各种菜单栏

涵盖功能和技术点

- 常见的 PC 端网页和手机移动端常见的菜单栏
- 涉及 HTML/HTML5、CSS/CSS3 和 JavaScript（原生）相关知识点

## 图标栏



了解如何使用 CSS 创建图标栏。

### 垂直的图标栏

<iframe sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups-to-escape-sandbox allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="accelerometer; bluetooth; camera; clipboard-read; clipboard-write; display-capture; encrypted-media; geolocation; gyroscope; language-detector; language-model; local-network-access; microphone; midi; rewriter; serial; summarizer; translator; web-share; writer; xr-spatial-tracking" allowpaymentrequest="true" allowfullscreen="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/arryblog/embed/xxYzKNG?height=300&amp;default-tab=html%2Cresult&amp;slug-hash=xxYzKNG&amp;user=arryblog&amp;name=cp_embed_1" title="CodePen Embed" loading="lazy" id="cp_embed_xxYzKNG" style="width: 866px; overflow: hidden; display: block;"></iframe>

::: details 点击查看完整源代码
```html
<!DOCTYPE html>
<html>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!-- 添加icon图标库 -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style>
    body {
      margin: 0;
    }
    .icon-bar {
      width: 90px; /* 设置特定宽度 */
      background-color: #555; /* 深灰色背景 */
    }
    .icon-bar a {
      display: block; /* 使链接显示在彼此下方，而不是并排显示 */
      text-align: center; /* 居中对齐文本 */
      padding: 16px; /* 添加一些填充 */
      transition: all 0.3s ease; /* 为悬停效果添加过渡 */
      color: white; /* 白色文本颜色 */
      font-size: 36px; /* 增加字体大小 */
    }
    .icon-bar a:hover {
      background-color: #000; /* 添加悬停颜色 */
    }
    .active {
      background-color: #04aa6d; /* 添加活动/当前颜色 */
    }
  </style>
  <body>
    <h2>垂直图标栏</h2>
    <div class="icon-bar">
      <a class="active" href="#"><i class="fa fa-home"></i></a>
      <a href="#"><i class="fa fa-search"></i></a>
      <a href="#"><i class="fa fa-envelope"></i></a>
      <a href="#"><i class="fa fa-globe"></i></a>
      <a href="#"><i class="fa fa-trash"></i></a>
    </div>
  </body>
</html>
```
:::

### 水平的图标栏目

<iframe sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups-to-escape-sandbox allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="accelerometer; bluetooth; camera; clipboard-read; clipboard-write; display-capture; encrypted-media; geolocation; gyroscope; language-detector; language-model; local-network-access; microphone; midi; rewriter; serial; summarizer; translator; web-share; writer; xr-spatial-tracking" allowpaymentrequest="true" allowfullscreen="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_2" scrolling="no" src="https://codepen.io/arryblog/embed/abqKxJL?height=300&amp;default-tab=html%2Cresult&amp;slug-hash=abqKxJL&amp;user=arryblog&amp;name=cp_embed_2" title="CodePen Embed" loading="lazy" id="cp_embed_abqKxJL" style="width: 866px; overflow: hidden; display: block;"></iframe>

::: details 点击查看完整源代码
```html
<!DOCTYPE html>
<html>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!-- 添加icon图标库 -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style>
    body {
      margin: 0;
    }

    .icon-bar {
      width: 100%; /* 设置宽度为100% */
      background-color: #555; /* 深灰色背景 */
      overflow: auto; /* 浮动导致溢出 */
    }
    .icon-bar a {
      float: left; /* 并排浮动链接 */
      text-align: center; /* 居中对齐文本 */
      width: 20%; /* 等宽（5个图标，每个20%宽度=100%） */
      padding: 12px 0; /* 一些顶部和底部填充物 */
      transition: all 0.3s ease; /* 为悬停效果添加过渡 */
      color: white; /* 白色文本颜色 */
      font-size: 36px; /* 增加字体大小 */
    }
    .icon-bar a:hover {
      background-color: #000; /* 添加悬停颜色 */
    }
    .active {
      background-color: #04aa6d; /* 添加活动/当前颜色 */
    }
  </style>
  <body>
    <h2>水平图标栏</h2>
    <div class="icon-bar">
      <a class="active" href="#"><i class="fa fa-home"></i></a>
      <a href="#"><i class="fa fa-search"></i></a>
      <a href="#"><i class="fa fa-envelope"></i></a>
      <a href="#"><i class="fa fa-globe"></i></a>
      <a href="#"><i class="fa fa-trash"></i></a>
    </div>
  </body>
</html>
```
:::

## 菜单图标

TIP

如何使用 CSS 创建菜单图标

<iframe sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups-to-escape-sandbox allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="accelerometer; bluetooth; camera; clipboard-read; clipboard-write; display-capture; encrypted-media; geolocation; gyroscope; language-detector; language-model; local-network-access; microphone; midi; rewriter; serial; summarizer; translator; web-share; writer; xr-spatial-tracking" allowpaymentrequest="true" allowfullscreen="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_3" scrolling="no" src="https://codepen.io/arryblog/embed/mdXzXWv?height=300&amp;default-tab=html%2Cresult&amp;slug-hash=mdXzXWv&amp;user=arryblog&amp;name=cp_embed_3" title="CodePen Embed" loading="lazy" id="cp_embed_mdXzXWv" style="width: 866px; overflow: hidden; display: block;"></iframe>

::: details 点击查看完整源代码
```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      div {
        width: 35px;
        height: 5px;
        background-color: black;
        margin: 6px 0;
      }
    </style>
  </head>
  <body>
    <p>菜单图标：</p>

    <div></div>
    <div></div>
    <div></div>
  </body>
</html>
```
:::

## 动画菜单图标（点击它）

TIP

单击时使用 CSS 和 JavaScript 将菜单图标更改为“取消/删除”图标：

<iframe sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups-to-escape-sandbox allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="accelerometer; bluetooth; camera; clipboard-read; clipboard-write; display-capture; encrypted-media; geolocation; gyroscope; language-detector; language-model; local-network-access; microphone; midi; rewriter; serial; summarizer; translator; web-share; writer; xr-spatial-tracking" allowpaymentrequest="true" allowfullscreen="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_4" scrolling="no" src="https://codepen.io/arryblog/embed/ExQdQmw?height=300&amp;default-tab=html%2Cresult&amp;slug-hash=ExQdQmw&amp;user=arryblog&amp;name=cp_embed_4" title="CodePen Embed" loading="lazy" id="cp_embed_ExQdQmw" style="width: 866px; overflow: hidden; display: block;"></iframe>

::: details 点击查看完整源代码
```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      .container {
        display: inline-block;
        cursor: pointer;
      }

      .bar1,
      .bar2,
      .bar3 {
        width: 35px;
        height: 5px;
        background-color: #333;
        margin: 6px 0;
        transition: 0.4s;
      }
      /* 旋转第一个条形图 */
      .change .bar1 {
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-9px, 6px);
      }
      /* 淡出第二条 */
      .change .bar2 {
        opacity: 0;
      }
      /* 旋转最后一个条形图 */
      .change .bar3 {
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-8px, -8px);
      }
    </style>
  </head>
  <body>
    <h2>动画菜单图标（点击它）</h2>
    <p>单击菜单图标将其转换为“X”：</p>
    <div class="container" onclick="myFunction(this)">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>

    <script>
      function myFunction(x) {
        x.classList.toggle("change");
      }
    </script>
  </body>
</html>
```
:::

示例解释：

- HTML & CSS：我们使用与以前相同的样式，只是这一次，我们在每个 `<div>`元素周围包装了一个容器元素，并为每个元素指定了一个类名。
- 当用户将鼠标移到 div（条）上时，容器元素用于显示指针符号。- 当点击它时，它将执行一个 JavaScript 函数，为其添加一个新的类名，这将改变每个水平条的样式：第一个和最后一个条被转换并旋转到字母“x”。中间的条逐渐消失并变得不可见。

## 可折叠/手风琴

如何创建手风琴（可折叠内容）

手风琴：当您想要在隐藏和显示大量内容之间切换时，手风琴很有用

### 无动画手风琴

<iframe sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups-to-escape-sandbox allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="accelerometer; bluetooth; camera; clipboard-read; clipboard-write; display-capture; encrypted-media; geolocation; gyroscope; language-detector; language-model; local-network-access; microphone; midi; rewriter; serial; summarizer; translator; web-share; writer; xr-spatial-tracking" allowpaymentrequest="true" allowfullscreen="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_5" scrolling="no" src="https://codepen.io/arryblog/embed/PoQyRXj?height=300&amp;default-tab=html%2Cresult&amp;slug-hash=PoQyRXj&amp;user=arryblog&amp;name=cp_embed_5" title="CodePen Embed" loading="lazy" id="cp_embed_PoQyRXj" style="width: 866px; overflow: hidden; display: block;"></iframe>

::: details 点击查看源代码
```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      /* 设置用于打开和关闭手风琴panel的按钮样式 */
      .accordion {
        background-color: #eee;
        color: #444;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        transition: 0.4s;
      }
      /* 如果单击该按钮（使用JS添加.active类），并且当您将鼠标移到该按钮上时（悬停），请为其添加背景色 */
      .active,
      .accordion:hover {
        background-color: #ccc;
      }
      /* 设置手风琴panel的样式。注意：默认情况下隐藏 */
      .panel {
        padding: 0 18px;
        display: none;
        background-color: white;
        overflow: hidden;
      }
    </style>
  </head>
  <body>
    <h2>无动画手风琴</h2>
    <p>当您想要在隐藏和显示大量内容之间切换时，手风琴很有用：</p>
    <button class="accordion">第 1 节</button>
    <div class="panel">
      <p>内容描述...</p>
    </div>

    <button class="accordion">第 2 节</button>
    <div class="panel">
      <p>内容描述...</p>
    </div>

    <button class="accordion">第 3 节</button>
    <div class="panel">
      <p>内容描述...</p>
    </div>

    <script>
      var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          /* 在添加和删除“active”类之间切换，高亮显示panel的按钮 */
          this.classList.toggle("active");
          /* 在隐藏和显示 active panel之间切换 */
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      }
    </script>
  </body>
</html>
```
:::

### 动画手风琴 (Slide Down)

TIP

- 要制作动画手风琴，请将`max-height：0`、`overflow: hidden`和 `max-height` 属性的`transition`添加到`panel`类。
- 然后，根据不同屏幕尺寸上面板的高度，使用 JavaScript 通过设置计算的`max-height`来向下滑动内容：

<iframe sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups-to-escape-sandbox allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="accelerometer; bluetooth; camera; clipboard-read; clipboard-write; display-capture; encrypted-media; geolocation; gyroscope; language-detector; language-model; local-network-access; microphone; midi; rewriter; serial; summarizer; translator; web-share; writer; xr-spatial-tracking" allowpaymentrequest="true" allowfullscreen="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_6" scrolling="no" src="https://codepen.io/arryblog/embed/jOZexPe?height=300&amp;default-tab=html%2Cresult&amp;slug-hash=jOZexPe&amp;user=arryblog&amp;name=cp_embed_6" title="CodePen Embed" loading="lazy" id="cp_embed_jOZexPe" style="width: 866px; overflow: hidden; display: block;"></iframe>

::: details 点击查看源代码
```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      /* 设置用于打开和关闭手风琴panel的按钮样式 */
      .accordion {
        background-color: #eee;
        color: #444;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        transition: 0.4s;
      }
      /*
        添加图标：
        在每个按钮上添加一个符号，以指示可折叠内容是打开的还是关闭的 
      */
      .accordion:after {
        content: "\02795"; /* 加号（+）的Unicode字符 */
        font-size: 13px;
        color: #777;
        float: right;
        margin-left: 5px;
      }
      .active:after {
        content: "\2796"; /* “减号（-）的Unicode字符 */
      }

      /* 如果单击该按钮（使用JS添加.active类），并且当您将鼠标移到该按钮上时（悬停），请为其添加背景色 */
      .active,
      .accordion:hover {
        background-color: #ccc;
      }
      /* 设置手风琴panel的样式。注意：默认情况下隐藏 */
      .panel {
        padding: 0 18px;
        background-color: white;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
      }
    </style>
  </head>
  <body>
    <h2>动画手风琴</h2>
    <p>单击时使用 CSS 和 JavaScript 将菜单图标更改为“ - 或 + ”图标：</p>
    <button class="accordion">第 1 节</button>
    <div class="panel">
      <p>内容描述...</p>
    </div>

    <button class="accordion">第 2 节</button>
    <div class="panel">
      <p>内容描述...</p>
    </div>

    <button class="accordion">第 3 节</button>
    <div class="panel">
      <p>内容描述...</p>
    </div>

    <script>
      var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }
    </script>
  </body>
</html>
```
:::

### 添加图标（事例）

TIP

在每个按钮上添加一个符号，以指示可折叠内容是打开的还是关闭的：

```css
.accordion:after {
  content: "\02795"; /* 加号（+）的Unicode字符 */
  font-size: 13px;
  color: #777;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2796"; /* “减号（-）的Unicode字符 */
}
```

## 标签（选项卡）

TIP

- 使用 CSS 和 JavaScript 创建选项卡
- 选项卡非常适合单页 Web 应用程序或能够显示不同主题的网页

### 可切换的选项卡

<iframe sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups-to-escape-sandbox allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="accelerometer; bluetooth; camera; clipboard-read; clipboard-write; display-capture; encrypted-media; geolocation; gyroscope; language-detector; language-model; local-network-access; microphone; midi; rewriter; serial; summarizer; translator; web-share; writer; xr-spatial-tracking" allowpaymentrequest="true" allowfullscreen="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_7" scrolling="no" src="https://codepen.io/arryblog/embed/gOvBzRv?height=300&amp;default-tab=html%2Cresult&amp;slug-hash=gOvBzRv&amp;user=arryblog&amp;name=cp_embed_7" title="CodePen Embed" loading="lazy" id="cp_embed_gOvBzRv" style="width: 866px; overflow: hidden; display: block;"></iframe>

事例解释：

- 创建按钮以打开特定选项卡内容。默认情况下，带有 class=“tabcontent”的所有`<div>`元素都是隐藏的（使用 CSS 和 JS）。
- 当用户单击按钮时，它将打开与此按钮“匹配”的选项卡内容。

::: details 点击查看源代码
```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      /* 设置选项卡的样式 */
      .tab {
        overflow: hidden;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
      }

      /* 设置用于打开选项卡内容的按钮的样式 */
      .tab button {
        background-color: inherit;
        float: left;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;
      }

      /* 更改悬停按钮的背景色 */
      .tab button:hover {
        background-color: #ddd;
      }

      /* 创建活动/当前tablink类 */
      .tab button.active {
        background-color: #ccc;
      }

      /* 设置选项卡内容的样式 */
      .tabcontent {
        display: none;
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-top: none;
        /*如果要淡入标签内容，请添加以下 CSS*/
        animation: fadeEffect 1s; /* 褪色效果需要1秒 */
      }
      /* 从零变为完全不透明度 */
      @keyframes fadeEffect {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    </style>
  </head>
  <body>
    <h2>标签（选项卡）</h2>
    <p>单击选项卡菜单内的按钮:</p>
    <!-- 选项卡链接 -->
    <div class="tab">
      <button class="tablinks" onclick="openCity(event, 'London')">
        London
      </button>
      <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
      <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
    </div>

    <!-- 选项卡内容 -->
    <div id="London" class="tabcontent" style="display: block">
      <h3>London</h3>
      <p>London is the capital city of England.</p>
    </div>

    <div id="Paris" class="tabcontent">
      <h3>Paris</h3>
      <p>Paris is the capital of France.</p>
    </div>

    <div id="Tokyo" class="tabcontent">
      <h3>Tokyo</h3>
      <p>Tokyo is the capital of Japan.</p>
    </div>

    <script>
      function openCity(evt, cityName) {
        // 声明所有变量
        var i, tabcontent, tablinks;

        // 使用class=“tabcontent”获取所有元素并隐藏它们
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }

        // 使用class=“tablinks”获取所有元素并删除类“active”
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // 显示当前选项卡，并向打开该选项卡的按钮添加“active”类
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }
    </script>
  </body>
</html>
```
:::

### 默认显示选项卡，可关闭标签

TIP

- 要在页面加载时打开特定选项卡，请使用 JavaScript “单击”指定的选项卡按钮
- 如果要关闭特定选项卡，请使用 JavaScript 通过单击按钮来隐藏选项卡

<iframe sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups-to-escape-sandbox allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="accelerometer; bluetooth; camera; clipboard-read; clipboard-write; display-capture; encrypted-media; geolocation; gyroscope; language-detector; language-model; local-network-access; microphone; midi; rewriter; serial; summarizer; translator; web-share; writer; xr-spatial-tracking" allowpaymentrequest="true" allowfullscreen="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_8" scrolling="no" src="https://codepen.io/arryblog/embed/abqRKLE?height=300&amp;default-tab=html%2Cresult&amp;slug-hash=abqRKLE&amp;user=arryblog&amp;name=cp_embed_8" title="CodePen Embed" loading="lazy" id="cp_embed_abqRKLE" style="width: 866px; overflow: hidden; display: block;"></iframe>

::: details 点击查看源代码
```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body {
        font-family: Arial;
      }

      /* 设置选项卡样式 */
      .tab {
        overflow: hidden;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
      }

      /* 设置选项卡内按钮的样式 */
      .tab button {
        background-color: inherit;
        float: left;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;
        font-size: 17px;
      }

      /* 更改悬停按钮的背景色 */
      .tab button:hover {
        background-color: #ddd;
      }

      /* 创建 active/current tablink类 */
      .tab button.active {
        background-color: #ccc;
      }

      /* 设置选项卡内容的样式 */
      .tabcontent {
        display: none;
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-top: none;
      }

      /* 设置关闭按钮的样式 */
      .topright {
        float: right;
        cursor: pointer;
        font-size: 28px;
      }

      .topright:hover {
        color: red;
      }
    </style>
  </head>
  <body>
    <h2>选项卡</h2>
    <p>单击右上角的x按钮关闭当前选项卡：</p>

    <div class="tab">
      <button
        class="tablinks"
        onclick="openCity(event, 'London')"
        id="defaultOpen"
      >
        London
      </button>
      <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
      <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
    </div>

    <div id="London" class="tabcontent">
      <span onclick="this.parentElement.style.display='none'" class="topright"
        >&times</span
      >
      <h3>London</h3>
      <p>London is the capital city of England.</p>
    </div>

    <div id="Paris" class="tabcontent">
      <span onclick="this.parentElement.style.display='none'" class="topright"
        >&times</span
      >
      <h3>Paris</h3>
      <p>Paris is the capital of France.</p>
    </div>

    <div id="Tokyo" class="tabcontent">
      <span onclick="this.parentElement.style.display='none'" class="topright"
        >&times</span
      >
      <h3>Tokyo</h3>
      <p>Tokyo is the capital of Japan.</p>
    </div>

    <script>
      function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }

      // 获取id为=“defaultOpen”的元素并单击它
      document.getElementById("defaultOpen").click();
    </script>
  </body>
</html>
```
:::

## 垂直标签（垂直选项卡菜单）

TIP

- 使用 CSS 和 JavaScript 创建垂直选项卡菜单
- 选项卡非常适合单页 Web 应用程序或能够显示不同主题的网页。

<iframe sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups-to-escape-sandbox allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="accelerometer; bluetooth; camera; clipboard-read; clipboard-write; display-capture; encrypted-media; geolocation; gyroscope; language-detector; language-model; local-network-access; microphone; midi; rewriter; serial; summarizer; translator; web-share; writer; xr-spatial-tracking" allowpaymentrequest="true" allowfullscreen="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_9" scrolling="no" src="https://codepen.io/arryblog/embed/MWQPXXm?height=300&amp;default-tab=html%2Cresult&amp;slug-hash=MWQPXXm&amp;user=arryblog&amp;name=cp_embed_9" title="CodePen Embed" loading="lazy" id="cp_embed_MWQPXXm" style="width: 866px; overflow: hidden; display: block;"></iframe>

::: details 点击查看源代码
```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        font-family: "Lato", sans-serif;
      }

      /* 设置选项卡的样式 */
      .tab {
        float: left;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
        width: 30%;
        height: 300px;
      }

      /* 设置用于打开选项卡内容的按钮的样式 */
      .tab button {
        display: block;
        background-color: inherit;
        color: black;
        padding: 22px 16px;
        width: 100%;
        border: none;
        outline: none;
        text-align: left;
        cursor: pointer;
        transition: 0.3s;
        font-size: 17px;
      }

      /* 更改悬停按钮的背景色 */
      .tab button:hover {
        background-color: #ddd;
      }

      /* 创建 active/current “tab button” 类 */
      .tab button.active {
        background-color: #ccc;
      }

      /* 设置选项卡内容的样式 */
      .tabcontent {
        float: left;
        padding: 0px 12px;
        border: 1px solid #ccc;
        width: 70%;
        border-left: none;
        height: 300px;
      }
    </style>
  </head>
  <body>
    <h2>垂直选项卡（垂直选项卡菜单）</h2>
    <p>单击选项卡菜单内的按钮:</p>

    <div class="tab">
      <button
        class="tablinks"
        onclick="openCity(event, 'London')"
        id="defaultOpen"
      >
        London
      </button>
      <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
      <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
    </div>

    <div id="London" class="tabcontent">
      <h3>London</h3>
      <p>London is the capital city of England.</p>
    </div>

    <div id="Paris" class="tabcontent">
      <h3>Paris</h3>
      <p>Paris is the capital of France.</p>
    </div>

    <div id="Tokyo" class="tabcontent">
      <h3>Tokyo</h3>
      <p>Tokyo is the capital of Japan.</p>
    </div>

    <script>
      function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }

      // 获取id=“defaultOpen”的元素并单击它
      document.getElementById("defaultOpen").click();
    </script>
  </body>
</html>
```
:::

事例解释：

- 创建按钮以打开特定选项卡内容。
- 默认情况下，所有带有 class=“tabcontent”的元素都是隐藏的（使用 CSS 和 JS）-当用户单击按钮时，它将打开与此按钮“匹配”的选项卡内容。

## 标签页眉（选项卡页眉）

TIP

- 使用 CSS 和 JavaScript 创建选项卡标题
- 单击“城市”按钮以显示相应的标题

<iframe sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups-to-escape-sandbox allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="accelerometer; bluetooth; camera; clipboard-read; clipboard-write; display-capture; encrypted-media; geolocation; gyroscope; language-detector; language-model; local-network-access; microphone; midi; rewriter; serial; summarizer; translator; web-share; writer; xr-spatial-tracking" allowpaymentrequest="true" allowfullscreen="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_10" scrolling="no" src="https://codepen.io/arryblog/embed/eYVPLJw?height=300&amp;default-tab=html%2Cresult&amp;slug-hash=eYVPLJw&amp;user=arryblog&amp;name=cp_embed_10" title="CodePen Embed" loading="lazy" id="cp_embed_eYVPLJw" style="width: 866px; overflow: hidden; display: block;"></iframe>

::: details 点击查看源代码
```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body {
        font-family: "Lato", sans-serif;
      }
      /* 设置选项卡按钮的样式 */
      .tablink {
        background-color: #555;
        color: white;
        float: left;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        font-size: 17px;
        width: 25%;
      }
      /* 更改悬停按钮的背景色 */
      .tablink:hover {
        background-color: #777;
      }

      /* 设置选项卡内容的默认样式 */
      .tabcontent {
        color: white;
        display: none;
        padding: 50px;
        text-align: center;
      }

      /* 分别设置每个选项卡内容的样式 */
      #London {
        background-color: red;
      }
      #Paris {
        background-color: green;
      }
      #Tokyo {
        background-color: blue;
      }
      #Oslo {
        background-color: orange;
      }
    </style>
  </head>
  <body>
    <h2>标签页眉选项卡</h2>
    <p>单击选项卡菜单内的按钮:</p>

    <div id="London" class="tabcontent">
      <h1>London</h1>
      <p>London is the capital city of England.</p>
    </div>

    <div id="Paris" class="tabcontent">
      <h1>Paris</h1>
      <p>Paris is the capital of France.</p>
    </div>

    <div id="Tokyo" class="tabcontent">
      <h1>Tokyo</h1>
      <p>Tokyo is the capital of Japan.</p>
    </div>

    <div id="Oslo" class="tabcontent">
      <h1>Oslo</h1>
      <p>Oslo is the capital of Norway.</p>
    </div>

    <button
      class="tablink"
      onclick="openCity('London', this, 'red')"
      id="defaultOpen"
    >
      London
    </button>
    <button class="tablink" onclick="openCity('Paris', this, 'green')">
      Paris
    </button>
    <button class="tablink" onclick="openCity('Tokyo', this, 'blue')">
      Tokyo
    </button>
    <button class="tablink" onclick="openCity('Oslo', this, 'orange')">
      Oslo
    </button>

    <script>
      function openCity(cityName, elmnt, color) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].style.backgroundColor = "";
        }
        document.getElementById(cityName).style.display = "block";
        elmnt.style.backgroundColor = color;
      }
      // 获取id=“defaultOpen”的元素并单击它
      document.getElementById("defaultOpen").click();
    </script>
  </body>
</html>
```
:::

事例解释：

- 创建按钮以打开特定选项卡内容。
- 默认情况下，带有 class=“tabcontent”的所有`<div>`元素都是隐藏的（使用 CSS 和 JS）。当用户单击按钮时，它将打开与此按钮“匹配”的选项卡内容。

## 整页标签（整页选项卡）

TIP

使用 CSS 和 JavaScript 创建覆盖整个浏览器窗口的整页选项卡

<iframe sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups-to-escape-sandbox allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="accelerometer; bluetooth; camera; clipboard-read; clipboard-write; display-capture; encrypted-media; geolocation; gyroscope; language-detector; language-model; local-network-access; microphone; midi; rewriter; serial; summarizer; translator; web-share; writer; xr-spatial-tracking" allowpaymentrequest="true" allowfullscreen="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_11" scrolling="no" src="https://codepen.io/arryblog/embed/LYQgJyb?height=300&amp;default-tab=html%2Cresult&amp;slug-hash=LYQgJyb&amp;user=arryblog&amp;name=cp_embed_11" title="CodePen Embed" loading="lazy" id="cp_embed_LYQgJyb" style="width: 866px; overflow: hidden; display: block;"></iframe>

事例解释：

- 创建按钮以打开特定选项卡内容。
- 默认情况下，带有 class=“tabcontent”的所有`<div>`元素都是隐藏的（使用 CSS 和 JS）。当用户单击按钮时，它将打开与此按钮“匹配”的选项卡内容。

::: details 点击查看源代码
```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      * {
        box-sizing: border-box;
      }
      /* 将正文和文档的高度设置为100%，以启用“整页选项卡” */
      body,
      html {
        height: 100%;
        margin: 0;
        font-family: Arial;
      }

      /* 样式选项卡链接 */
      .tablink {
        background-color: #555;
        color: white;
        float: left;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        font-size: 17px;
        width: 25%;
      }

      .tablink:hover {
        background-color: #777;
      }

      /* 设置选项卡内容的样式（并添加高度：全页内容为100%） */
      .tabcontent {
        color: white;
        display: none;
        padding: 100px 20px;
        height: 100%;
      }

      #Home {
        background-color: red;
      }
      #News {
        background-color: green;
      }
      #Contact {
        background-color: blue;
      }
      #About {
        background-color: orange;
      }
    </style>
  </head>
  <body>
    <h2>整页选项卡</h2>
    <p>单击链接以显示“当前”页面：</p>
    <button class="tablink" onclick="openPage('Home', this, 'red')">
      Home
    </button>
    <button
      class="tablink"
      onclick="openPage('News', this, 'green')"
      id="defaultOpen"
    >
      News
    </button>
    <button class="tablink" onclick="openPage('Contact', this, 'blue')">
      Contact
    </button>
    <button class="tablink" onclick="openPage('About', this, 'orange')">
      About
    </button>

    <div id="Home" class="tabcontent">
      <h3>Home</h3>
      <p>Home is where the heart is..</p>
    </div>

    <div id="News" class="tabcontent">
      <h3>News</h3>
      <p>Some news this fine day!</p>
    </div>

    <div id="Contact" class="tabcontent">
      <h3>Contact</h3>
      <p>Get in touch, or swing by for a cup of coffee.</p>
    </div>

    <div id="About" class="tabcontent">
      <h3>About</h3>
      <p>Who we are and what we do.</p>
    </div>

    <div id="News" class="tabcontent">
      <h3>News</h3>
      <p>Some news this fine day!</p>
    </div>

    <div id="Contact" class="tabcontent">
      <h3>Contact</h3>
      <p>Get in touch, or swing by for a cup of coffee.</p>
    </div>

    <div id="About" class="tabcontent">
      <h3>About</h3>
      <p>Who we are and what we do.</p>
    </div>

    <script>
      function openPage(pageName, elmnt, color) {
        // 默认情况下，使用class=“tabcontent”隐藏所有元素
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }

        // 删除所有标签链接/按钮的背景色
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].style.backgroundColor = "";
        }

        // 显示特定选项卡内容
        document.getElementById(pageName).style.display = "block";

        // 将特定颜色添加到用于打开选项卡内容的按钮
        elmnt.style.backgroundColor = color;
      }

      // 获取id为=“defaultOpen”的元素并单击它
      document.getElementById("defaultOpen").click();
    </script>
  </body>
</html>
```
:::

## 悬停标签（悬停时更改选项卡）

TIP

- 使用 CSS 和 JavaScript 在悬停时更改选项卡
- 将鼠标移到其中一个菜单按钮上以显示选项卡内容：

<iframe sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups-to-escape-sandbox allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="accelerometer; bluetooth; camera; clipboard-read; clipboard-write; display-capture; encrypted-media; geolocation; gyroscope; language-detector; language-model; local-network-access; microphone; midi; rewriter; serial; summarizer; translator; web-share; writer; xr-spatial-tracking" allowpaymentrequest="true" allowfullscreen="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_12" scrolling="no" src="https://codepen.io/arryblog/embed/MWQPqXg?height=300&amp;default-tab=html%2Cresult&amp;slug-hash=MWQPqXg&amp;user=arryblog&amp;name=cp_embed_12" title="CodePen Embed" loading="lazy" id="cp_embed_MWQPqXg" style="width: 866px; overflow: hidden; display: block;"></iframe>

::: details 点击查看源代码
```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        font-family: "Lato", sans-serif;
      }

      /* 设置选项卡样式 */
      .tab {
        float: left;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
        width: 30%;
        height: 300px;
      }

      /* 设置用于打开选项卡内容的按钮的样式 */
      .tab button {
        display: block;
        background-color: inherit;
        color: black;
        padding: 22px 16px;
        width: 100%;
        border: none;
        outline: none;
        text-align: left;
        cursor: pointer;
        font-size: 17px;
      }

      /* 更改悬停按钮的背景色 */
      .tab button:hover {
        background-color: #ddd;
      }

      /* 创建 active/current “tab button”类 */
      .tab button.active {
        background-color: #ccc;
      }

      /* 设置选项卡内容的样式 */
      .tabcontent {
        float: left;
        padding: 0px 12px;
        border: 1px solid #ccc;
        width: 70%;
        border-left: none;
        height: 300px;
        display: none;
      }

      /* 清除选项卡后的浮动 */
      .clearfix::after {
        content: "";
        clear: both;
        display: table;
      }
    </style>
  </head>
  <body>
    <h2>悬停选项卡</h2>
    <p>将鼠标移到选项卡式菜单内的按钮上:</p>

    <div class="tab">
      <button class="tablinks" onmouseover="openCity(event, 'London')">
        London
      </button>
      <button class="tablinks" onmouseover="openCity(event, 'Paris')">
        Paris
      </button>
      <button class="tablinks" onmouseover="openCity(event, 'Tokyo')">
        Tokyo
      </button>
    </div>

    <div id="London" class="tabcontent">
      <h3>London</h3>
      <p>London is the capital city of England.</p>
    </div>

    <div id="Paris" class="tabcontent">
      <h3>Paris</h3>
      <p>Paris is the capital of France.</p>
    </div>

    <div id="Tokyo" class="tabcontent">
      <h3>Tokyo</h3>
      <p>Tokyo is the capital of Japan.</p>
    </div>

    <div class="clearfix"></div>

    <script>
      function openCity(evt, cityName) {
        // 声明所有变量
        var i, tabcontent, tablinks;

        // 使用class=“tabcontent”获取所有元素并隐藏它们
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }

        // 使用class=“tablinks”获取所有元素并删除类“active”
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // 显示当前选项卡，并向打开该选项卡的链接添加“active”类
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }
    </script>
  </body>
</html>
```
:::

事例解释：

- 创建按钮以打开特定选项卡内容。
- 默认情况下，所有带有 class=“tabcontent”的元素都是隐藏的（使用 CSS 和 JS）-当用户将鼠标移到按钮上时，它将打开与此按钮“匹配”的选项卡内容。

## 顶部导航栏

TIP

使用 CSS 创建顶部导航栏

<iframe sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups-to-escape-sandbox allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="accelerometer; bluetooth; camera; clipboard-read; clipboard-write; display-capture; encrypted-media; geolocation; gyroscope; language-detector; language-model; local-network-access; microphone; midi; rewriter; serial; summarizer; translator; web-share; writer; xr-spatial-tracking" allowpaymentrequest="true" allowfullscreen="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_13" scrolling="no" src="https://codepen.io/arryblog/embed/JjpmmPy?height=300&amp;default-tab=html%2Cresult&amp;slug-hash=JjpmmPy&amp;user=arryblog&amp;name=cp_embed_13" title="CodePen Embed" loading="lazy" id="cp_embed_JjpmmPy" style="width: 866px; overflow: hidden; display: block;"></iframe>

::: details 点击查看源代码
```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
      }
      /* 向顶部导航添加黑色背景色 */
      .topnav {
        overflow: hidden;
        background-color: #333;
      }
      /* 设置导航栏内链接的样式 */
      .topnav a {
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
      }
      /* 更改悬停时链接的颜色 */
      .topnav a:hover {
        background-color: #ddd;
        color: black;
      }
      /* 向 active/current 链接添加颜色 */
      .topnav a.active {
        background-color: #04aa6d;
        color: white;
      }
    </style>
  </head>
  <body>
    <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>

    <div style="padding-left: 16px">
      <h2>顶部导航示例</h2>
      <p>Some content..</p>
    </div>
  </body>
</html>
```
:::

## 响应式顶部导航栏

TIP

- 使用 CSS 和 JavaScript 创建响应式顶部导航菜单
- **调整**浏览器窗口的大小以查看响应式导航菜单的工作原理：

<iframe sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups-to-escape-sandbox allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="accelerometer; bluetooth; camera; clipboard-read; clipboard-write; display-capture; encrypted-media; geolocation; gyroscope; language-detector; language-model; local-network-access; microphone; midi; rewriter; serial; summarizer; translator; web-share; writer; xr-spatial-tracking" allowpaymentrequest="true" allowfullscreen="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_14" scrolling="no" src="https://codepen.io/arryblog/embed/oNEaaZd?height=300&amp;default-tab=html%2Cresult&amp;slug-hash=oNEaaZd&amp;user=arryblog&amp;name=cp_embed_14" title="CodePen Embed" loading="lazy" id="cp_embed_oNEaaZd" style="width: 866px; overflow: hidden; display: block;"></iframe>

事例解释：

带有 class=“icon”的链接用于在小屏幕上打开和关闭 topnav。

::: details 点击查看源代码
```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- 加载图标库以在小屏幕上显示汉堡菜单（条） -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <style>
      body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
      }
      /* 向顶部导航添加黑色背景色 */
      .topnav {
        background-color: #333;
        overflow: hidden;
      }

      /* 设置导航栏内链接的样式 */
      .topnav a {
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
      }

      /* 更改悬停时链接的颜色 */
      .topnav a:hover {
        background-color: #ddd;
        color: black;
      }

      /* 添加活动类以突出显示当前页面 */
      .topnav a.active {
        background-color: #04aa6d;
        color: white;
      }

      /* 隐藏应在小屏幕上打开和关闭topnav的链接 */
      .topnav .icon {
        display: none;
      }

      /* 当屏幕宽度小于600像素时，隐藏除第一个（“Home”）外的所有链接。显示包含的链接应打开和关闭topnav（.icon）*/
      @media screen and (max-width: 600px) {
        .topnav a:not(:first-child) {
          display: none;
        }
        .topnav a.icon {
          float: right;
          display: block;
        }
      }

      /* 当用户单击图标时，“responsive”类将通过JavaScript添加到topnav中。此类使topnav在小屏幕上看起来很好（垂直显示链接，而不是水平显示链接） */
      @media screen and (max-width: 600px) {
        .topnav.responsive {
          position: relative;
        }
        .topnav.responsive a.icon {
          position: absolute;
          right: 0;
          top: 0;
        }
        .topnav.responsive a {
          float: none;
          display: block;
          text-align: left;
        }
      }
    </style>
  </head>
  <body>
    <div class="topnav" id="myTopnav">
      <a href="#home" class="active">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
    <script>
      /* 当用户单击图标时，在向topnav添加和删除“responsive”类之间切换 */
      function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    </script>
  </body>
</html>
```
:::

## 拆分导航

TIP

使用 CSS 创建“拆分导航”栏

<iframe sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups-to-escape-sandbox allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="accelerometer; bluetooth; camera; clipboard-read; clipboard-write; display-capture; encrypted-media; geolocation; gyroscope; language-detector; language-model; local-network-access; microphone; midi; rewriter; serial; summarizer; translator; web-share; writer; xr-spatial-tracking" allowpaymentrequest="true" allowfullscreen="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_15" scrolling="no" src="https://codepen.io/arryblog/embed/JjpmmBZ?height=300&amp;default-tab=html%2Cresult&amp;slug-hash=JjpmmBZ&amp;user=arryblog&amp;name=cp_embed_15" title="CodePen Embed" loading="lazy" id="cp_embed_JjpmmBZ" style="width: 866px; overflow: hidden; display: block;"></iframe>

::: details 点击查看源代码
```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
      }
      /* 创建具有黑色背景色的顶部导航栏 */
      .topnav {
        background-color: #333;
        overflow: hidden;
      }

      /* 设置导航栏内链接的样式 */
      .topnav a {
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
      }

      /* 更改悬停时链接的颜色 */
      .topnav a:hover {
        background-color: #ddd;
        color: black;
      }

      /* 在导航栏内创建右对齐（拆分）链接 */
      .topnav a.split {
        float: right;
        background-color: #04aa6d;
        color: white;
      }
    </style>
  </head>
  <body>
    <div class="topnav">
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about" class="split">Help</a>
    </div>
    <div style="padding-left: 16px">
      <h2>拆分导航示例</h2>
      <p>导航栏中的“帮助”链接与其他导航链接分离，从而形成“分割导航”布局。</p>
    </div>
  </body>
</html>
```
:::

## 带有图标的响应式导航栏

TIP

使用 CSS 创建带有图标的响应式导航菜单。

<iframe sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups-to-escape-sandbox allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="accelerometer; bluetooth; camera; clipboard-read; clipboard-write; display-capture; encrypted-media; geolocation; gyroscope; language-detector; language-model; local-network-access; microphone; midi; rewriter; serial; summarizer; translator; web-share; writer; xr-spatial-tracking" allowpaymentrequest="true" allowfullscreen="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_16" scrolling="no" src="https://codepen.io/arryblog/embed/jOZeeoy?height=300&amp;default-tab=html%2Cresult&amp;slug-hash=jOZeeoy&amp;user=arryblog&amp;name=cp_embed_16" title="CodePen Embed" loading="lazy" id="cp_embed_jOZeeoy" style="width: 866px; overflow: hidden; display: block;"></iframe>

::: details 点击查看源代码
```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- 加载图标库 -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <style>
      body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
      }
      /* 设置导航栏样式 */
      .navbar {
        width: 100%;
        background-color: #555;
        overflow: auto;
      }
      /* 向左导航 */
      .navbar a {
        float: left;
        padding: 12px;
        color: white;
        text-decoration: none;
        font-size: 17px;
      }
      /* 鼠标悬停导航栏链接 */
      .navbar a:hover {
        background-color: #000;
      }
      /* Current/active 导航栏链接 */
      .active {
        background-color: #04aa6d;
      }
      /* 添加响应性-将在小于500像素的屏幕上自动垂直显示导航栏，而不是水平显示 */
      @media screen and (max-width: 500px) {
        .navbar a {
          float: none;
          display: block;
        }
      }
    </style>
  </head>
  <body>
    <h2>带有图标的响应式导航栏</h2>
    <p>尝试调整浏览器窗口的大小以查看响应效果。</p>
    <div class="navbar">
      <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a>
      <a href="#"><i class="fa fa-fw fa-search"></i> Search</a>
      <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a>
      <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>
    </div>
  </body>
</html>
```
:::

