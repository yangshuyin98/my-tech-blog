---
title: "Web 全栈开发学习路线（高级篇）"
source: "https://www.arryblog.com/fullstack/advanced-webstack.html"
category: "fullstack"
order: 24
---

# Web 全栈开发学习路线（高级篇）

从全局的视角，看清楚完整的技术体系和学习路线是非常有必要的，学习就不会迷茫。

## 1、前端工程化

  * 规范化 
    * Eslint 编码规范（结合 pre-commit）
    * Git 规范：branch 命名规范，commit 规范
    * jsdoc 注释规范
  * 模块化 
    * 代码分模块组织（依赖于 js css 模块化语法和 webpack 等工具的支持）
    * 组件化
  * 自动化 
    * 脚手架（如 create-react-app vue-cli），yeoman
    * 监听文件变化，自动构建
    * CI/CD 自动单元测试，自动提测、上线等
    * 自动兼容（如 postcss babel）
  * webpack 
    * 基础配置，常用 loader，常用 plugin
    * 代码拆分、公共代码抽离（产出多 chunk）
    * 性能优化
  * babel 编译 
    * babel-polyfill
    * babel-runtime
    * corejs
  * rollup.js ES 模块打包器
  * Parcel 零配置 JS 打包神器


## 2、运行和监控

  * 浏览器 和 webview 引擎
  * 页面加载和渲染：从输入 url 到页面显示的整个过程 
    * 加载过程
    * 渲染过程
    * 重绘/重排
  * JS 运行机制 
    * JS 引擎（ 如 V8 ）
    * 内存机制
    * 垃圾回收机制
  * 性能优化 
    * 优化加载速度
    * 优化渲染速度
    * 优化操作体验（如节流、防抖）
    * Chrome Performance API 性能监控
    * Chrome lightHouse 检测工具
  * 安全 
    * XSS
    * CSRF
    * DDOS 攻击
    * 密码加密存储
  * 监控和统计 
    * 错误监控、报警
    * 性能监控
    * 统计上报（小流量统计）
    * APM 监控平台
  * 客户端能力 
    * jsbridge（如微信 jssdk）
    * js 调起 app


## 3、前端框架基础

  * SPA 和 MPA （单页应用和多页应用）
  * 前端路由
  * MVVM
  * 组件化
  * 虚拟 DOM 和 diff 算法


## 4、Vue



  * vue-cli

  * 基础使用

    * 组件
    * 模板
    * 指令
    * 组件属性
    * 组件生命周期
    * 高级使用（如动态组件、异步组件、slot 等等）
    * 性能优化
  * 原理

    * 响应式（ Object.defineProperty ）
    * 模板编译
    * 虚拟 DOM
  * 周边

    * vuex
    * vue-router
    * UI 框架 
      * elementUI
      * view-design（之前叫 iview）
      * ant-design-vue
  * Vue3.x + TypeScript + Vite


## 5、React

  * create-react-app
  * 基础使用 
    * JSX 语法
    * 组件和属性
    * state 和 setState
    * 组件生命周期
    * 高级使用（如 Context、高阶组件、render-prop 等）
    * 性能优化（如 shouldComponentUpdate PureComponent ）
  * 原理 
    * JSX 语法糖本质
    * 合成事件机制
    * batchUpdate 机制
    * 事物机制
    * 组件渲染流程
    * fiber
  * 周边 
    * redux
    * mobX
    * react-router
    * UI 框架 
      * ant-design
  * Hooks


## 6、常用工具和插件

Tools

  * lodash - 工具函数
  * echarts - 统计图表
  * jquery 或 zepto - DOM 操作
  * axios - ajax
  * date-fns 或 moment - 日期时间格式
  * css reset 库
  * caniuse.com 浏览器兼容性
  * 等等 ....


## 7、服务端开发

  * NodeJS 
    * 基本 API（如 http、fs 等）
    * commonjs 模块化
    * 框架 
      * express
      * koa
      * egg
    * 调试
  * SSR 
    * 服务端模板，如 ejs artTemplate 等
    * nuxt.js （Vue SSR）
    * next.js（React SSR）
  * 常用 
    * nginx（反向代理、负载均衡）
    * 数据库 
      * redis
      * MySQL
      * mongodb
    * Docker
    * 日志分析
  * serverless
  * Deno
  * 小程序开发
  * PWA
  * 跨端（如 RN Weex）
  * 客户端 electron