---
title: "VSCode安装使用教程（图文版）"
source: "https://www.arryblog.com/guide/vscode.html"
category: "VScode"
---

# VSCode 安装使用教程（图文版）

工欲善其事，必先利其器

对于我们每一位软件工程师来说，都要有自己顺手的 IDE 开发工具，它就是我们的武器。  

一个好用的 IDE 不仅能提升我们的开发效率，还能让我们保持愉悦的心情，这样才是非常 Nice 的状态 

## 那么，什么是 IDE 呢 ？

what

  * IDE（Integrated Development Environment，`集成开发环境`）是含代码编辑器、关键词高亮、智能感应、智能纠错、格式美化、版本管理等功能于一身的 `"高级代码编辑器"`
  * 每个 IT 工程师都要有自己顺手的 IDE，它是我们的武器
  * 要理解无论使用什么 IDE 编写出来的代码，本质上都是 "白底黑字" 的，都是 "纯文字" 的


## 目前，前端开发主流的 IDE 有以下 5 个

IDE 名称 | 公司 | 是否免费 | 功能强大度  
---|---|---|---  
Visual Studio Code | 微软 | 是 | 强大（推荐）  
Atom | GitHub | 是 | 适中  
WebStorm | JetBrains | 否 | 非常强大  
HBuilder | DCloud | 是 | 非常强大  

为什么现在不用 Dreamweaver

  * Dreamweaver 是曾经网页制作的王牌 IDE，推崇 `"所见即所得"` ，用拖拽控件的方式进行网页开发
  * 但近几年，前端开发技术，形式已经发生了根本性的变化，Dreamweaver 现在不是前端工程师的主流选择了

## 故事得从 2017 年说起

第一次

关注到微软公司的 VSCode ，还是在 Vue 创始人尤雨溪的社交账号上看到尤大说 "正式转投 VSCode 了" ，从那时起自己也开始慢慢用起来，确实越用越 Nice 了。  

事实上目前 VSCode 已经成为了各大厂前端开发人员的首选 IDE 开发工具了

> 上图是 Vue 创始人尤雨溪社交平台截图

## 下边我们开始玩转 VSCode

正式开始

  * Visual Studio Code 简称 VSCode ，2015 年由微软公司发布。
  * 可用于 Windows，macOS 和 Linux。它具有对 JavaScript，TypeScript 和 Node.js 的内置支持，并具有丰富的其他语言（例如 C++，C＃，Java，Python，PHP，Go）

![image-20220209205721849](data:image/png;base64,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)

  * 优点：内置功能非常丰富、插件全且安装简单、轻量、有 MAC 版本


## VSCode 下载、安装

官网下载

在官方网站：[https://code.visualstudio.com/ (opens new window)](<https://code.visualstudio.com/>)

下载最新版本的 VSCode 即可

## Window 版 VScode 安装流程

### 1、下载 Vscode 安装文件

提示

点击上面的下载之后，它会跳转至一个新页面

### 2、下载完成单击运行，然后我们开始进行安装

### 3、选择安装的位置

> 安装目录文件所在，可选择、可默认

### 4、选择开始菜单文件夹

> 你想在哪里放置程序的快捷方式，默认即可

### 5、选择附加任务

提示

  * 将以下四项都勾选上，桌面快捷方式需要就添加即可
  * 添加到 PATH：添加到系统环境变量中，勾选后，即可在命令行中使用 `code .` 即可打开 Vscode

### 6、准备安装

### 7、正在安装

### 8、安装完成

### 9、安装完成后，第一次打开 VSCode

## VSCode 常见插件安装

### 1、简体中文语言包

插件名称：Chinese 中文（简体）语言包

  * 作用：将 VSCode 操作界面转换为中文，对英语不好的朋友，非常友好

> 安装完成，重启 VScode 即可

> 查看中文操作界面

### 2、编辑器主题选择、设置

建议浅色系对眼睛友好

管理 -> 颜色主题 -> 选择自己喜欢的主题即可

> 提示
>
>   * 选择自己喜欢的主题
>   * Quiet Light
>
> 查看代码效果
>
> 浅色 + （默认浅色）

### 3、vscode-icons 显示代码图标

插件名称：Material Icon

  * Theme 作用：显示 Vscode 文件、文件夹的图标

  * 在 VScode 扩展插件中搜索 “Material Icon Theme” 即可安装

管理 -> 主题 -> 文件图标主题 ，选择自己喜欢的文件图标主题即可



### 4、open in brower 通过编辑器直接打开默认浏览器

插件名称：open in brower

  * 作用：该插件可通过编辑器打开默认浏览器显示代码效果

### 5、Live Server 开启本地服务器

插件名称：Live Server

  * 作用：通过插件可以开启本地服务
  * 优点：一边编写代码一边保存，即实时刷新预览，大大提升开发测试效率



### 6、Auto Rename Tag 自动修改标签对名称

插件名称：Auto Rename Tag

  * 作用：修改标签，自动帮你完成头部和尾部闭合标签的同步修改



### 7、carbon-now-sh 将代码生成一张图片

插件名称：carbon-now-sh

  * 作用：可提升逼格的插件，在实际开发中遇到技术问题或者做部分代码片段分享，可以使用该插件将代码生成一张图片
  * 使用方法： 
    * 在 VSCode 中，选中需要生成图片的代码
    * 打开命令托盘：Windows：Ctrl + Shift + P，Mac：Cmd + Shift + P
    * 输入 Carbon，回车
    * 在浏览器中导出，生成图片



### 8、prettier 格式化代码

插件名称：Prettier - Code formatter

  * 作用：格式化美化代码
  * Ctrl + s 保存会自动格式化

管理 -> 设置 -> 文件图标主题 ，选择自己喜欢的文件图标主题即可

## 相关设置

### 1、字体设置

管理 -> 设置

  * 字体大小： 20
  * 字体系列：`JetBrains Mono`




> 注
>
> 在 VSCode 中 "控制字体系列" 添加字体名称 （优先级：从左至右）
>
> 同时还要在对应的电脑操作系统中安装字体才能生效

  * 在 VSCode 中推荐使用 `JetBrains Mono` 编程专用字体
  * JetBrains 公司最新出了一个字体 JetBrains Mono，据称是`专为改善看代码体验而生`


### 2、 下载字体

JetBrains Mono 官方下载地址 ：<https://www.jetbrains.com/lp/mono/>[(opens new window)](<https://www.jetbrains.com/lp/mono/>)

点击 `Download font` 下载

### 3、在电脑中安装字体

安装

  * 下载后解压，进到`ttf 文件夹下`，会有一堆文件，全选后安装
  * 所有的字体都叫 JetBrains Mono，全选安装的目的是为了响应各种特殊字体（比如斜体、意大利体、粗体、如果不需要这些花里胡哨的只需安装 Regular.ttf）

### 4、 在 VSCode 中启用查看字体

如需要 Consolas 字体：如下

windows 下 VScode 使用 Consolas 下载地址

<https://www.fonts.net.cn/font-33390313417.html>[(opens new window)](<https://www.fonts.net.cn/font-33390313417.html>)

### 5、光标设置，平滑插入动画

管理 -> 设置 ->光标 ->  Cursor Smooth Caret Animation

### 6、关闭代码缩略图，不占用新资源

Editor › Minimap: Enabled 去掉默认勾选

### 7、Ctrl + 鼠标滚轮缩放字体大小

如果能用 Ctrl + 鼠标滚轮缩放字号，会非常方便

  * 我们需要进行相关的配置，在 管理 -> 设置 -> 搜索：输入 "滚动" 即可看到


Editor: Mouse Wheel Zoom  勾选即可



## VSCode 快捷键

### 1、Window 版快捷键

常用快捷键

  * 注释: 
    * 单行注释：`ctrl + k ctrl + c 或 ctrl + /`
    * 取消单行注释：`ctrl + k ctrl + u`（按下 ctrl 不放，再按 k+u）
    * 多行注释：`alt + shift + A`
    * 多行注释 : `/**/`
  * 移动行：`alt + up/down`
  * 显示/隐藏左侧目录栏 `ctrl + b`
  * 复制当前行：`shift + alt + up/down`
  * 删除当前行：`shift + ctrl + k`
  * 控制台终端显示与隐藏：`ctrl + ~`
  * 查找文件/安装 vscode 插件地址：`ctrl + p`
  * 代码格式化：`shift + alt + f`
  * 新建一个窗口：`ctrl + shift + n`
  * 多行编辑：`Ctrl + Alt + up/down`


### 2、Mac 版快捷键

Mac

  * `Command + X` 剪切（未选中文本的情况下，剪切光标所在行）
  * `Command + C` 复制（未选中文本的情况下，复制光标所在行）
  * `Option + Up` 向上移动行
  * `Option + Down` 向下移动行
  * `Option + Shift + Up` 向上复制行
  * `Option + Shift + Down` 向下复制行
  * `Command + Shift` \+ K 删除行
  * `Command + Enter` 下一行插入
  * `Command + Shift + Enter` 上一行插入
  * `Command + Shift + \` 跳转到匹配的括号
  * `Command + [` 减少缩进
  * `Command + 1` 增加缩进
  * `Home` 跳转至行首
  * `End` 跳转到行尾


> 作为优秀的开发者，熟练的用好快捷键也是非常重要的技能之一

## Emmet 语法

  * 作为大厂资深的前端工程师们，都会熟练的使用 Emmet 语法
  * 在实际开发中可以大大的提升开发效率
  * Emmet 官方文档：<https://docs.emmet.io/cheat-sheet/>[(opens new window)](<https://docs.emmet.io/cheat-sheet/>)



