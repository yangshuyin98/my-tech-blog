---
title: "MarkDown6-徽章"
source: "https://www.arryblog.com/guide/html5/markdown.html"
category: "guide/html5"
---



## 六、徽章

TIP

在 Markdown 中，徽章（Badge）是一种小型图标，通常用于显示项目的状态、版本、许可证类型等信息。

> 在 GitHub，GitLab、Gitee 上都有出现很多徽章图标，以 [Vue 为例(opens new window)](https://gitee.com/vuejs/vue)

[![Build Status](https://img.shields.io/circleci/project/github/vuejs/vue/dev.svg?sanitize=true) (opens new window)](https://gitee.com/link?target=https%3A%2F%2Fcircleci.com%2Fgh%2Fvuejs%2Fvue%2Ftree%2Fdev)[![Coverage Status](https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg?sanitize=true) (opens new window)](https://gitee.com/link?target=https%3A%2F%2Fcodecov.io%2Fgithub%2Fvuejs%2Fvue%3Fbranch%3Ddev)[![Downloads](https://img.shields.io/npm/dm/vue.svg?sanitize=true) (opens new window)](https://gitee.com/link?target=https%3A%2F%2Fnpmcharts.com%2Fcompare%2Fvue%3Fminimal%3Dtrue)[![Version](https://img.shields.io/npm/v/vue.svg?sanitize=true) (opens new window)](https://gitee.com/link?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fvue)[![License](https://img.shields.io/npm/l/vue.svg?sanitize=true) (opens new window)](https://gitee.com/link?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fvue)[![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg?sanitize=true)(opens new window)](https://gitee.com/link?target=https%3A%2F%2Fchat.vuejs.org%2F)

### 1、徽章的应用场景

TIP

Markdown 徽章因其简洁明了、易于嵌入的特点，在很多场景中都可以使用。

- **README 文件：** 在 GitHub、GitLab、Gitee 等代码托管平台的项目仓库中，README 文件通常是用户了解项目的第一入口。在 README 文件中嵌入徽章，可以直观地展示项目的状态（如构建是否通过、依赖是否更新）、版本信息、许可证类型等关键信息。
- **文档 和 博客：** 在使用 Markdown 编写的文档或博客中，徽章可以被用来标记某些内容的重要性（如警告、注意）、进度条（如完成度）、评分或评价等
- **社交媒体 和 个人网站：** 在个人网站、社交媒体（如 Twitter、LinkedIn）的自我介绍或项目展示中，使用徽章可以快速传达个人信息（如技能标签、编程语言熟练度）、项目状态（如是否开源、是否有活跃的社区支持）等
- **项目管理 和 协作工具：** 在一些支持 Markdown 的项目管理和协作工具（如 Trello、Jira、Notion）中，徽章可以被用来标记任务的优先级、状态（如进行中、已完成）、关联的资源或链接等
- **社区 和 论坛：** 在一些支持 Markdown 的社区和论坛中，用户可以使用徽章来展示自己的身份（如版主、贡献者）、成就（如获得的徽章、积分）或参与的活动（如在线研讨会、黑客马拉松）
- **API 文档 和 开发者门户：** 在 API 文档和开发者门户中，徽章可以被用来标记 API 的状态（如稳定、测试）、版本信息、支持的认证方式等
- **演示和报告：** 在使用 Markdown 编写的演示文稿或报告中，徽章可以用来增加视觉效果，强调关键信息 或 数据

### 2、常用的徽章生成服务

TIP

- **[Shields.io (opens new window)](https://shields.io/)**：一个流行的在线徽章生成服务，支持自定义标签、消息、颜色、样式等。
- **[Badgen (opens new window)](https://badgen.net/)**：另一个在线徽章生成服务，提供了更多的动态数据源支持，如 npm 版本、GitHub 状态等。
- **[Simple Icons Badges (opens new window)](https://simpleicons.org/)**：基于 Simple Icons 图标库的徽章生成服务，允许你使用各种流行的图标来创建徽章。

### 3、使用 Shields.io 网站生成徽章

TIP

**[Shields.io (opens new window)](https://shields.io/)**生成的徽章可以嵌入到你的 GitHub README 文件、博客文章或其他网页中。

> 进入 [徽章生成 (opens new window)](https://shields.io/badges)页面中，会看到一个简单的表单，用于生成徽章。

![image-20241218172423700](https://www.arryblog.com/assets/img/image-20241218172423700.db102805.png)

### 4、生成徽章链接路径参数，拼接语法

TIP

标签、信息和颜色由破折号`-`分隔

![Static Badge](https://img.shields.io/badge/any_text-you_like-blue)

> 拼接的链接地址：https://img.shields.io/badge/any_text-you_like-blue

| URL 输入            | 标记输出   |
| :------------------ | :--------- |
| 下划线 `_` 或 `%20` | 空间``     |
| 双下划线 `__`       | 下划线 `_` |
| 双破折号 `--`       | 破折号 `-` |

### 5、Shields.io 徽章配置路径参数

| 参数      | 说明                                                 | 示例值                         |
| :-------- | :--------------------------------------------------- | :----------------------------- |
| Label     | 徽章的标签，显示在徽章的左侧                         | `Version`                      |
| Message   | 徽章的消息，显示在徽章的右侧                         | `1.0.0`                        |
| Color     | 徽章的颜色，可以是预定义的颜色名或十六进制颜色代码   | `blue`, `#ff6347`              |
| Style     | 徽章的样式，如 flat、flat-square、plastic、social 等 | `flat-square`                  |
| Logo      | 徽章的图标，可以是 URL 链接到图片                    | `https://example.com/logo.png` |
| LogoWidth | 图标宽度，与 Logo 参数一起使用，调整图标大小         | `20`                           |
| LogoColor | 图标的颜色，可以是预定义的颜色名或十六进制颜色代码   | `white`                        |
| Link      | 徽章的链接，点击徽章时跳转到的地址                   | `https://example.com`          |

注：

可以使用十六进制、rgb、rgba、hsl、hsla 和 css 命名颜色。

### 6、在文本框中输入生成徽章对应的参数

TIP

按步骤填写对应的参数，即可生成徽章

![image-20241218175207885](https://www.arryblog.com/assets/img/image-20241218175207885.eef15329.png)

注：

生成徽章对应的参数语法和对应的值，参照以上配置表

生成后的 MarkDown 徽章语法

```markdown
![Static Badge](https://img.shields.io/badge/vue-3.5.1-green)
```

渲染效果：![Static Badge](https://img.shields.io/badge/vue-3.5.1-green)

### 7、使用 Simple Icons Badges 生成徽章图标

TIP

**[Simple Icons Badges (opens new window)](https://simpleicons.org/)**：基于 Simple Icons 图标库的徽章生成服务，允许你使用各种流行的图标来创建徽章。

![image-20241218180119462](https://www.arryblog.com/assets/img/image-20241218180119462.4aec711d.png)

使用徽章图标

![image-20241218180712458](https://www.arryblog.com/assets/img/image-20241218180712458.fb52e8d6.png)

生成后的 MarkDown 徽章语法

```markdown
![Static Badge](https://img.shields.io/badge/vue-3.5.1-green?logo=vuedotjs)
```

渲染效果：![Static Badge](https://img.shields.io/badge/vue-3.5.1-green?logo=vuedotjs)

### 8、使用 Badgen 生成徽章

TIP

**[Badgen (opens new window)](https://badgen.net/)**：另一个在线徽章生成服务，提供了更多的动态数据源支持，如 npm 版本、GitHub 状态等

![image-20241218181806998](https://www.arryblog.com/assets/img/image-20241218181806998.e4857123.png)

### 8.1、生成后的 MarkDown 徽章语法

```markdown
![Static Badge](https://badgen.net/docker/stars/library/centos)
```

渲染效果：![Static Badge](https://badgen.net/docker/stars/library/centos)

### 8.2、生成带图标的徽章

TIP

具体的图标还是使用 **[Simple Icons Badges (opens new window)](https://simpleicons.org/)**图标库来进行生成

```markdown
![Static Badge](https://badgen.net/docker/stars/library/centos?icon=docker)
```

渲染效果：![Static Badge](https://badgen.net/docker/stars/library/centos?icon=docker)

### 9、Version Badge 生成动态版本徽章

TIP

**[Version Badge (opens new window)](https://badge.fury.io/)是一个提供 npm 包版本信息的网站**‌。

用户可以通过该网站查询 npm 包的具体版本信息，包括最新版本、发布日期等。此外，该网站还支持动态徽章的生成，用户可以在项目 README 中嵌入这些徽章，以展示包的版本信息。

![image-20241218183432449](https://www.arryblog.com/assets/img/image-20241218183432449.66044c93.png)

生成后的 MarkDown 徽章语法

```markdown
[![npm version](https://badge.fury.io/js/vue.svg)](https://badge.fury.io/js/vue)
```

渲染效果：[![npm version](https://badge.fury.io/js/vue.svg)(opens new window)](https://badge.fury.io/js/vue)

