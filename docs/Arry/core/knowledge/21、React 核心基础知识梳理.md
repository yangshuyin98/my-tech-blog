---
title: "React核心基础知识梳理"
source: "https://www.arryblog.com/guide/react/"
category: "React"
order: 21
---

# React 核心基础知识梳理

> React 生态
>
> React 是一个用于构建用户界面的 JavaScript 库，起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源。 2022 年 4 月 26 日已发布最新版 18.1.0
>
> 本篇内容梳理了 React 入门到项目阶段企业级项目所用到的细节知识体系完整基础内容。



> 据不完全统计目前国内哪些大厂在使用 React
>
> 蚂蚁、飞猪、阿里大于、虾米音乐、口碑开放平台猫途鹰、喜马拉雅 FM、斗鱼、知乎、豆瓣、美团、房多多、石墨文档、墨刀
>
> TalkingData、xiaopiu、Teambition、Uber、倍洽、同盾科技、心知天气、拼多多、滴滴出行、Sentry、途牛、优酷、京东服饰+生鲜+旅行、算力矩阵、链家 H5、阿里云管理后台、Coding、CodePen、树莓派
>
> 36 氪、Notion、GoDaddy、站酷、Plotly、麦客 CRM、特赞营销日历、鹿班、网易云阅读 PC 端+网易云音乐 H5、猎聘网、看云文档编辑页、去哪儿 H5 多个模块、艺龙 H5 个别模块、租租车 H5、汽车之家车商城、Pocket、友盟、iH5 等



## 1、基础环境准备

| 名称                      | 描述                                                         |
| :------------------------ | :----------------------------------------------------------- |
| 开发工具（vscode 编辑器） | 支持 typescript 的代码编辑器                                 |
| 开发环境（node）          | 搭建代码的运行环境                                           |
| node 自查指令 （node -v） | 查看 node 版本； 可以用来检查 node 是否安装成功，如果显示出版本号，则说明 node 安装成功了。 |
| npm 自查指令（npm -v）    | 查看 npm 版本； 检查 npm 是否安装成功，如果显示出版本号，则说明可以使用 npm 了 |

## 2、搭建 react 项目（JS 版本的）

| 名称                          | 描述                                                         |
| :---------------------------- | :----------------------------------------------------------- |
| npx create-react-app 项目名称 | ① npx 是一个新的命令，安装过 5.2 版本以上的 npm，才可以使用； ② node 的 14 版本已经包含了最新的 npm，可以直接使用 npx ； ③ npx 是 npm 的威力加强版，可以在不全局安装工具的情况下，直接使用工具； ④ “npx create-react-app 项目名称”等价于如下两条指令： npm install -g create-react-app create-react-app 项目名 |
| cd 项目名称                   | cd 指令用来切换当前目录至其他目录； “cd test”就是进入“test”目录。 |
| npm start                     | 启动项目的指令。                                             |

## 3、项目内容介绍

| 名称         | 描述                                                         |
| :----------- | :----------------------------------------------------------- |
| package.json | 记录项目安装了哪些依赖、启动指令是什么等信息： 1、dependencies：记录项目运行所需要的依赖； 2、scripts：记录项目启动、调试等指令： ① npm start 启动项目 ② npm run build 打包项目 ③ npm run test 单元测试（几乎不会用到） ④ npm run eject 弹出项目配置文件（几乎不会用到） |
| App.js       | 项目根组件，内部使用了 jsx 语法书写组件结构。                |
| index.js     | 项目的入口文件； 会利用 ReactDOM.render 方法把根组件 App 挂载到 html 的 div#root 元素里； |
| import       | 引入资源文件。                                               |

## 4、搭建 react 项目（TS 版本的）

| 名称                                              | 描述                                                         |
| :------------------------------------------------ | :----------------------------------------------------------- |
| npx create-react-app 项目名 --template typescript | 搭建基于 typescript 语法的 react 项目                        |
| cd 项目名称                                       | cd 指令用来切换当前目录至其他目录；“cd test”就是进入“test”目录 |
| npm start                                         | 启动项目的指令                                               |

## 5、tsconfig.json（TS 语法的配置文件）

```json
// compilerOptions
// 定义编译器的工作方式，内含如下常用配置项：
"noImplicitAny": false // 不需要显式地声明变量的类型any
"target": "es5" // 编译后的目标javascript版本,ES5 ,ES6/ES2015 ,ES2016 ,ES2017 ,ES2018 ,ES2019 ,ES2020 ,ESNext
// lib：列出了编译期间所有需要的库文件；通过库文件，可以告诉ts编译器可以使用哪些功能
"allowJs": true // 允许混合编译JavaScript文件
"esModuleInterop": true // 允许我们使用commonjs的方式import默认文件，import React from 'react'
"module": "esnext" // 配置的是我们代码的模块系统，Node.js的CommonJS、ES6标准的esnext、requirejs的AMD
"moduleResolution": "node", // 决定了我们编译器的工作方式，"node" and "classic"，其中classic选项已于2019年12月废弃了
"isolatedModules": true // 编译器会将每个文件作为单独的模块来使用
"noEmit": true, // 表示当错误发生的时候，编译器不要生成JavaScript代码
"jsx": "react-jsx" // 允许编译器支持编译react代码
"resolveJsonModule"：true // 允许项目中，引入json文件，需要配合"moduleResolution": "node"一起使用

// ts语法的配置文件补充 compilerOptions
// 除了上述配置项外，图文节中补充了compilerOptions中，还可以配置如下选项：
"include":["src/**/*"] // 列出我们需要编译的文件
"files":["./file1.ts","./file2.d.ts",...] // 列出始终编译的文件有哪些
"exclude":["node_modules",...] // 列出不编译的文件有哪些
```

## 6、TS 编译器的工作流程

| 名称              | 描述                                                         |
| :---------------- | :----------------------------------------------------------- |
| webpack.config.js | **项目的配置核心：** ① 我们的项目是基于 webpack 创建的 ② 使用 create-react-app 脚手架创建项目并启动后，会运行 webpack； ③ 在 webpack 中使用了 babel-loader 编译 ts 文件；编译的同时，会根据 tsconfig.json 中的配置信息来配置编译器 |

## 7、项目升级改造

| 名称                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| npm install --save typescript @types/node @types/react @types/react-dom @types/jest | 将已经存在的、基于 js 的 react 项目，升级改造成支持 ts 的项目： typescript：ts 语法的工具集 @types/node：node 语法的 ts 解释声明文件 @types/react：react 语法中 ts 解释声明文件 @types/react-dom：react-dom 语法中的 ts 解释声明文件 @types/jest：jest 语法中的 ts 解释声明文件 |

## 8、创建基础演示项目

| 名称                                                     | 描述                    |
| :------------------------------------------------------- | :---------------------- |
| npx create-react-app robot-gallery --template typescript | 创建 robot-gallery 项目 |

## 9、react 知识点

| 名称           | 描述                                                         |
| :------------- | :----------------------------------------------------------- |
| props          | 用于组件之间的数据传递                                       |
| React.FC<P={}> | 函数式组件的声明（接口）；`React.FC<RobotProps>`的意思是组件之间的传递数据时，数据 props 的类型要满足 RobotProps。 |
| { }            | 用于数据绑定                                                 |
| map            | 函数，用于遍历数据并生成结构                                 |

## 10、文件类型介绍

| 名称                      | 描述                                                         |
| :------------------------ | :----------------------------------------------------------- |
| `.js` `.jsx` `.ts` `.tsx` | 这四种，都是文件名后缀： ① 使用标准 js 语法书写的项目，推荐文件使用.js 后缀；使用 jsx 语法书写的项目，推荐使用.jsx 后缀；不论是.js 文件，还是.jsx 文件，都需要通过 babel 转化成 es5 标准下的代码 结论：使用.js 或者.jsx 都行，可以根据个人喜好来选择 ② 我们的项目使用.ts、.tsx 文件，其中.js 对应的 typescript 代码对应.ts 文件，.jsx 对应的 typescript 代码对应.tsx 文件。 |

## 11、理论知识

> JSX

- **1、为什么使用 JSX：**
  - a、React 并不强制使用 JSX，也可以使用原生的 JavaScript
  - b、React 认为视图的本质就是渲染逻辑与 UI 视图表现内在统一；
  - 因此它把 HTML 与渲染逻辑进行了耦合，形成了 jsx
- **2、JSX 特点：**
  - a、常规的 HTML 代码都可以与 JSX 兼容
  - b、可以在 JSX 中嵌入表达式
  - c、可以使用 JSX 指定子元素
- **3、JSX 命名约定：**
  - a、使用 camelCase（小驼峰）方式定义属性
  - b、JSX 的自定义属性，以 data-开头
- **4、JSX 本质表示的是对象：**
  - JSX 会被编译为 React.createElement( )对象
- **5、如何在 JSX 中防止注入攻击（xss）：**
  - React 中，使用花括号直接引入渲染内容时，React 会自动将其转义
  - 即所有内容在渲染之前，都被转换成了字符串。

> TSX

- 1、TSX 实际上就是 JSX 的 typescript 版本；
- 2、想在 react 中使用 TSX 需要做两件事情：
  - a、将文件后缀名改成.tsx
  - b、在配置文件 tsconfig.json 中，启用 jsx 选项（"jsx":"react"）

