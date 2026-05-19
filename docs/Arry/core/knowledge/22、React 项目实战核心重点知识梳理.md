---
title: "React 项目实战核心重点知识梳理"
source: "https://www.arryblog.com/guide/react/react-advanced.html"
category: "React"
order: 22
---

# React 项目实战核心重点知识梳理

## 1、css 样式架构、全局样式

| 名称         | 描述                                                         |
| :----------- | :----------------------------------------------------------- |
| *.module.css | 项目中的样式文件最好与组件文件放在同一目录下；命名采用 *.module.css 的形式，例如 header.module.css |
| index.css    | src 目录下的 index.css 文件是整个项目的全局样式文件          |

## 2、css 模组化

| 名称                          | 描述                                                         |
| :---------------------------- | :----------------------------------------------------------- |
| import                        | 以对象的形式引入 css 文件，例如：import style from "./index.css" |
| *.d.ts                        | ① typescript 专用的类型声明文件；该文件只包含类型声明，不包含逻辑，不会被编译，也不会被 webpack 打包 ② 在 src 目录下，为项目创建 css 声明文件 custom.d.ts |
| typescript-plugin-css-modules | 插件： ① 该插件会解析 css 文件，并且生成 typescript 对应的引用类型；由于该插件仅参与代码开发，因此将其安装在 dev 依赖项中： npm install typescript-plugin-css-modules --save-dev ② 需要配置 tsconfig.json 文件，启用插件（"plugins":[{"name":"typescript-plugin-css-modules"}]） ③ 使用 vscode 的同学，需要配置一下编辑器，让编辑器能够自动提示样式 |

## 3、项目实操

| 名称                                 | 描述                                                         |
| :----------------------------------- | :----------------------------------------------------------- |
| import                               | 可以用来引入项目所需的图片、字体文件；其中字体，需要使用@font-face 在样式中引入一下。 |
| class                                | 声明类组件                                                   |
| extends                              | 继承                                                         |
| React.component                      | React 抽象基础类，接受三个泛型，分别是 P、S、SS： P（Props）：用于组件之间的数据传递 S（state）：代表组件自身的状态 SS：代表自定义数据 |
| constructor                          | 组件的构建函数，可以用来初始化数据： ① 需要传入 props 的类型 ② 需要使用 super 关键字来调用 React.component 基础类的构建函数 |
| render                               | 方法，用来渲染页面的 html 结构                               |
| className                            | 定义组件的 class 属性                                        |
| export default                       | 导出定义好的组件；使用组件时，需要使用 import 导入           |
| style={{ 属性名：属性值（表达式） }} | 在组件中，书写行内样式；                                     |
| onClick={ ()=>{ //事件处理逻辑 }}    | 绑定点击事件                                                 |
| setState()                           | 方法，用来修改组件 state 中定义的数据，例如： this.setState({isOpen:false}) |
| this                                 | 可以通过将事件处理函数改成箭头函数，让其内部的 this 指向当前组件（React.component） |
| bind( )                              | js 原生方法 bind，给事件处理函数绑定 this，可以达到箭头函数同样的效果 |
| npm install react-icons              | 第三方 react 的图标组件（注意：icons 结尾的 s 不要丢掉） 使用方式：`import {FiShoppingCart} from "react-icons/fi"; < FiShoppingCart />` |

## 4、基础理论

| 名称                     | 描述                                                         |
| :----------------------- | :----------------------------------------------------------- |
| state                    | ① state 是组件对内的接口，用于组件内部的数据传递 ② state 是私有的，即 state 是组件的“私有属性”；组件中，如果想修改 state 的状态，需要使用 setState 方法。直接修改 state 的状态（this.state.xxx=yyy），不会触发 render 函数，即页面不会重新渲染 ③ 构造函数 constructor，是唯一可以初始化 state 的地方 ④ state 的更新是异步的：调用 setState 后，state 不会立即改变，是异步操作；因此不能依赖当前的 state 计算下一个 state |
| props                    | ① props 是组件对外的接口，用于组件间的数据传递。更准确地说，是父组件传递给子组件的数据。 ② props 中的所有数据都是只读的，不可变的（immutable）： a、对象一旦创建就不可以改变，只能通过销毁、重建来改变数据 b、通过判断内存地址是否一致，来确定对象是否被修改 |
| 函数式编程               | 函数中，自变量不会因为函数的操作而改变，这就是 immutable； 利用 immutable 来编写程序的方式就是函数式编程。 |
| e                        | React 的事件对象。它是对原生事件对象的封装，可以通过 e.nativeEvent 访问原生的 js 事件对象，它有两个常用属性： e.target：描述的是事件发生的元素 e.currentTarget：描述的是事件处理绑定的元素 可以使用(e.target as HTMLElement).nodeName 来获取事件触发元素的标签名 |
| React 事件对象的类型定义 | `React.MouseEvent< HTMLButtonElement,MouseEvent >` 将鼠标移入 html 结构上绑定的事件，就能看到事件对象的类型定义，复制粘贴下来即可。 |
| setState(参数 1，参数 2) | ① setState 方法是异步更新，同步执行：它本身并不是异步的，但它对 state 的处理机制给人一种异步的假象。state 处理一般发生在生命周期变化的时候。 ② 第二个参数是回调函数，可以在该函数中，使用更新后的 state ③ 可以将第一个参数设置成函数，这样可以在同一个事件处理函数中，多次调用 setState，改变 state |

## 5、异步请求相关

| 名称             | 描述                                                         |
| :--------------- | :----------------------------------------------------------- |
| 在线数据模拟接口 | 推荐http://jsonplaceholder.typicode.com/ 用于学习和测试 例如：https://jsonplaceholder.typicode.com/users |
| fetch            | 原生 js 函数，用于发送网络请求； 它返回的不是直接能使用的数据，而是 Promise 对象，需要使用 then()处理。 then 中的响应式数据 response，还需调用 json()方法进行处理； 调用 json()后，返回的仍然是 Promise 对象，需要继续使用 then 处理，才能获取到最终的数据。 |

## 6、组件生命周期

| 名称                 | 描述                                                         |
| :------------------- | :----------------------------------------------------------- |
| componentDidMount    | 组件初始化时，刚刚被挂载进页面，创建 dom 元素时自动执行的函数 |
| componentWillUnmount | 组件结束使命、将要被销毁的时候自动执行的函数                 |

## 7、组件生命周期

| 名称                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| constructor ，componentDidMount                              | 生命周期第一阶段：初始化 ① constructor：用来初始化组件的 state ② componentDidMount：组件创建好 dom 元素以后、挂载进页面的时候调用 二者只会在初始化的时候，调用一次。 |
| componentWillReceiveProps ，static getDerivedStateFromProps ，shouldComponentUpdate ，componentDidUpdate | 生命周期第二个阶段：更新 ① componentWillReceiveProps：在组件接受到一个新的 prop（更新后）时被调用；由于可能存在一些无法想象的问题，已经被废弃，如果想使用可以使用 static getDerivedStateFromProps 替代 ② getDerivedStateFromProps：会在组件初始化、更新的时候调用；可以用来对比当前的 prop 和之前 state 的变化 ③ shouldComponentUpdate：接收两个参数 nextProps、nextState，通过判断 prop、state 的变化，来控制组件是否被更新；返回值是 true 或 false，true 代表更新，false 代表不更新 ④ componentDidUpdate：只要组件发生了更新，ui 重新渲染，这个函数就会被调用。 |
| componentWillUnmount                                         | 生命周期第三个阶段：组件销毁 componentWillUnmount 会在组件销毁的时候调用 |
| render                                                       | 在组件初始化阶段执行： constructor--》getDerivedStateFromProps--》render (render 执行完，ui 就会被画出来)--》componentDidMount 在组件更新阶段执行（props、state 有变化）： getDerivedStateFromProps--》props、state 有变化--》render（更新、渲染 ui）--》componentDidUpdate |

## 8、项目开发注意事项

注：

- 1、没有新功能，但具有战略意义
- 2、替换了底层底代码，向下兼容，同时甩掉了历史包袱
- 3、没有代码断层，给未来留下足够的升级空间
- 4、具有突破性的改变：
  - a、事件委托机制改变
  - b、像原生浏览器靠拢
  - c、删除事件池
  - d、useEffect 清理操作改成异步操作
  - e、jsx 不可返回 undefined
  - f、删除私有 api

## 9、钩子

| 名称  | 描述                                                         |
| :---- | :----------------------------------------------------------- |
| hooks | 钩子： 1、函数组件中，如果想处理一些特殊逻辑，可以使用钩子把外部代码“钩”进来 2、本质是：一类特殊的函数，为函数式组件注入特殊的功能 3、hooks 一律使用 use 前缀命名：useXxx |

## 10、常用钩子函数

| 名称         | 描述                                                         |
| :----------- | :----------------------------------------------------------- |
| useState( )  | 状态钩子： react 自带的钩子函数，用来声明组件状态；参数可以设置 state 的初始值；返回值是一个只有两个元素的数组[状态，状态更新函数] |
| useEffect( ) | 副作用钩子： 1、可以取代生命周期函数 componentDidMount、componentDidUpdate 和 componentWillUnmount 2、给函数式组件添加副作用，例如：ajax 请求 |

## 11、useState 钩子函数细说

| 名称          | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| useState( )   | 用法：let/const [状态,状态改变函数]=useState(状态初始值) 解释说明： ① 状态、状态函数的名字可以自定义；但是状态改变函数最好以“set 状态名”的形式命名。 ② “状态改变函数”用来改变“状态”的值 ③ “状态改变函数”可以传入数据的类型 示例：const [count,setCount]=useState< number>(0) ④ “状态改变函数”，例如 setCount，是异步的、而且不能重载，不能提供异步处理的回调接口 |
| pure function | 纯函数（单词不用记）： 给一个函数同样的参数，这个函数永远返回同样的内容； 利用纯函数思想进行编程，就是“函数式编程”； React 组件输入相同的参数（props），渲染的 ui 应该永远一样 |

## 12、副作用

| 名称        | 描述                                                         |
| :---------- | :----------------------------------------------------------- |
| side-effect | 副作用（单词不用记）： 与纯函数相反，指一个函数处理了与返回值无关的事情；比如函数中处理了与返回值无关的事情，比如函数中修改了全局变量，修改了传入的参数，发送了异步请求 |

## 13、关于 useEffect( )

| 名称                  | 描述                                                         |
| :-------------------- | :----------------------------------------------------------- |
| useEffect( ) 应用     | ① 默认情况下，每次 ui 渲染、状态改变，useEffect 都会执行 ② 可以通过设置第二个参数（是数组），控制 useEffect 的执行时机；第二个传参如果传入空数组，就相当于生命周期函数 componentDidMount； 如果不传入第二个参数，则相当于生命周期函数 componentDidUpdate |
| useEffect( ) 注意事项 | ① 谨防代码陷入“死循环”模式（“夺命连环 call”） ② useEffect( )自身不支持关键词 async，如果想在 useEffect 中使用 async/await，需要把异步代码写在自己封装的方法中，例如： useEffect(()=>{ const fetchData=async ()=>{ // 异步逻辑 } fetData() }) |

## 14、项目中常用组件和方法

| 名称                   | 描述                                                         |
| :--------------------- | :----------------------------------------------------------- |
| context                | React 上下文：处理跨组件数据传递，让多个组件共享数据         |
| React.createContext( ) | ① 用来创建 React 上下文对象；需要给定默认初始值; 返回值需要使用变量接收，例如 appContext； ② 为了其他组件中能引用上下文对象，该对象需要使用 export 导出 |
| Provider               | 作用：用来包裹组件，被包裹的组件内，可以共享 value 属性设置的数据 示例：`< appContext.Provider > < App /> < /appContext.Provider >` |
| useContext( )          | 钩子函数，用来在组件中获取数据。userContext(appContext)可以替代`< appContext.Consumer >`，简化代码 |
| Consumer               | 使用 Consumer 组件，包裹子组件（子孙组件）的 jsx 代码；然后使用箭头函数，获取上下文对象上数据的取值，代码示例如下： |

```jsx
<appContext.Consumer>
  {(value) => {
    return <>// jsx搭建的html结构代码； // 通过{value.xxx}的形式获取数据</>;
  }}
</appContext.Consumer>
```

## 15、关于 HOC 和 Hook

| 名称 | 描述                                                         |
| :--- | :----------------------------------------------------------- |
| HOC  | 高阶组件（HOC）： 本质：就是一个返回了组件的函数；接收一个组件作为参数并返回一个经过改造的新组件。 作用：通过组件嵌套的方法给子组件添加更多的功能； 使用场景： ① 抽取重复代码，实现组件复用 ② 条件渲染，控制组件的逻辑渲染 ③ 捕获/劫持被处理组件的生命周期函数 注意事项：高阶组件命名时，一般使用 with 开头。 |
| Hook | 自定义 Hooks 要点： ① Hooks 是函数 ② 命名以“use”开头 ③ 内部可调用其他 Hook 函数 ④ 并非 React 的特性（新建 Hooks 时，不需要引入 React 框架） |

