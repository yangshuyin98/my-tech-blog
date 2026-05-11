# Vue 组件在 Markdown 中使用

> VitePress 最强大的能力之一：文档里直接写 Vue 组件，让静态文档变成交互式应用。

---

## 目录

1. [基础用法](#基础用法)
2. [script setup 语法](#script-setup-语法)
3. [创建可复用组件](#创建可复用组件)
4. [组件自动注册](#组件自动注册)
5. [defineClientComponent](#defineclientcomponent)
6. [实战案例](#实战案例)
7. [注意事项](#注意事项)

---

## 基础用法

VitePress 的 Markdown 文件**就是 Vue 单文件组件**。你可以在 `.md` 文件中直接写 `<script>`、`<style>` 和 Vue 模板。

### 最简示例

```markdown
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

# 计数器演示

当前计数：**{{ count }}**

<button @click="count++">点击 +1</button>
```

效果：页面上会渲染出一个可以点击的按钮，计数实时更新。

### 在模板中使用表达式

```markdown
<script setup>
import { ref, computed } from 'vue'
const name = ref('VitePress')
const upper = computed(() => name.value.toUpperCase())
</script>

输入：<input v-model="name" />

转换后：**{{ upper }}**
```

---

## script setup 语法

### 导入组件

```markdown
<script setup>
import MyButton from './components/MyButton.vue'
</script>

<MyButton type="primary">点击我</MyButton>
```

### 导入多个组件

```markdown
<script setup>
import MyButton from './components/MyButton.vue'
import MyCard from './components/MyCard.vue'
import { ref } from 'vue'
</script>

<MyCard title="示例卡片">
  <p>卡片内容</p>
  <MyButton>卡片按钮</MyButton>
</MyCard>
```

### 使用 defineProps

```markdown
<script setup>
// 直接在 .md 中定义 props（不常见，但可行）
const props = defineProps({
  msg: { type: String, default: 'Hello' }
})
</script>

消息：{{ msg }}
```

---

## 创建可复用组件

### 目录结构

```
docs/
├── .vitepress/
│   ├── config.ts
│   └── theme/
│       └── index.ts
├── components/
│   ├── MyButton.vue
│   ├── MyCard.vue
│   ├── CodeSandbox.vue
│   └── Badge.vue
├── guide/
│   └── index.md
└── index.md
```

### 组件示例：MyButton.vue

```vue
<!-- docs/components/MyButton.vue -->
<script setup>
defineProps({
  type: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'primary', 'success', 'warning', 'danger'].includes(v)
  },
  size: {
    type: String,
    default: 'medium'
  }
})
</script>

<template>
  <button :class="['my-btn', `my-btn--${type}`, `my-btn--${size}`]">
    <slot />
  </button>
</template>

<style scoped>
.my-btn {
  padding: 8px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}
.my-btn--primary {
  background: var(--vp-c-brand);
  color: white;
  border-color: var(--vp-c-brand);
}
.my-btn--success {
  background: #10b981;
  color: white;
  border-color: #10b981;
}
.my-btn:hover {
  opacity: 0.85;
}
</style>
```

### 组件示例：MyCard.vue

```vue
<!-- docs/components/MyCard.vue -->
<script setup>
defineProps({
  title: String,
  icon: String
})
</script>

<template>
  <div class="my-card">
    <div v-if="title" class="my-card__header">
      <span v-if="icon" class="my-card__icon">{{ icon }}</span>
      <h3>{{ title }}</h3>
    </div>
    <div class="my-card__body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.my-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
}
.my-card__header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}
.my-card__header h3 {
  margin: 0;
}
</style>
```

### 在 Markdown 中使用

```markdown
<script setup>
import MyButton from '../components/MyButton.vue'
import MyCard from '../components/MyCard.vue'
</script>

# 组件演示

<MyCard title="基础按钮" icon="🔘">
  <MyButton>默认按钮</MyButton>
  <MyButton type="primary">主要按钮</MyButton>
  <MyButton type="success">成功按钮</MyButton>
</MyCard>
```

---

## 组件自动注册

每次都要 `import` 很烦？可以全局自动注册。

### 方式一：theme/index.ts 批量注册

```ts
// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import MyButton from '../../components/MyButton.vue'
import MyCard from '../../components/MyCard.vue'
import Badge from '../../components/Badge.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 全局注册组件，所有 .md 文件可直接使用
    app.component('MyButton', MyButton)
    app.component('MyCard', MyCard)
    app.component('Badge', Badge)
  }
}
```

```markdown
<!-- 无需 import，直接使用 -->
<MyButton type="primary">全局组件</MyButton>
```

### 方式二：自动导入（推荐）

使用 `unplugin-vue-components` 自动扫描并注册：

```bash
pnpm add -D unplugin-vue-components
```

```ts
// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { AntDesignContainer } from 'vitepress-plugin-antd'
import Components from 'unplugin-vue-components/vite'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // ...
  },
  // Vite 插件配置
  vite: {
    plugins: [
      Components({
        dirs: ['docs/components'],
        extensions: ['vue'],
      })
    ]
  }
}
```

> **注意：** VitePress 主题的 `vite` 配置需要在 config.ts 中设置，不是 theme/index.ts。

```ts
// config.ts
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  vite: {
    plugins: [
      Components({
        dirs: ['.vitepress/components', 'components'],
        extensions: ['vue'],
      })
    ]
  }
})
```

---

## defineClientComponent

有些组件依赖浏览器 API（window、document、localStorage），在 SSR 构建时会报错。

### 问题场景

```vue
<!-- ❌ 这会报错 -->
<script setup>
import { ref, onMounted } from 'vue'
const width = ref(0)
onMounted(() => {
  width.value = window.innerWidth  // SSR 时没有 window
})
</script>
```

### 解决方案

```ts
// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { defineAsyncComponent } from 'vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 方式一：defineAsyncComponent
    app.component(
      'ClientOnly',
      defineAsyncComponent(() => import('./components/ClientOnly.vue'))
    )

    // 方式二：直接用 VitePress 内置的 <ClientOnly>
    // 已默认可用，无需注册
  }
}
```

### 使用 ClientOnly

```markdown
<script setup>
import BrowserOnlyComponent from '../components/BrowserOnlyComponent.vue'
</script>

<ClientOnly>
  <BrowserOnlyComponent />
</ClientOnly>
```

### 封装 defineClientComponent

```ts
// 在组件内部处理 SSR
// docs/components/LocalStorage.vue
<script setup>
import { ref, onMounted } from 'vue'

const data = ref('')
const isClient = ref(false)

onMounted(() => {
  isClient.value = true
  data.value = localStorage.getItem('my-key') || '无数据'
})
</script>

<template>
  <div v-if="isClient">
    本地存储：{{ data }}
  </div>
  <div v-else>
    加载中...
  </div>
</template>
```

---

## 实战案例

### 案例 1：交互式代码演示

```markdown
<script setup>
import { ref } from 'vue'
const code = ref('console.log("Hello!")')
const lang = ref('js')
</script>

## 在线试一试

<textarea v-model="code" rows="4" style="width:100%;font-family:monospace" />

<select v-model="lang">
  <option value="js">JavaScript</option>
  <option value="ts">TypeScript</option>
  <option value="python">Python</option>
</select>

**预览：**
````
```{{ lang }}
{{ code }}
```
````
```

### 案例 2：版本切换器

```markdown
<script setup>
import { ref } from 'vue'
const version = ref('v2')
</script>

## API 文档

<div>
  <button @click="version = 'v1'" :style="{fontWeight: version==='v1'?'bold':'normal'}">v1</button>
  <button @click="version = 'v2'" :style="{fontWeight: version==='v2'?'bold':'normal'}">v2</button>
</div>

<div v-if="version === 'v1'">

### v1 API

```js
// 旧版 API
getData(callback)
```

</div>

<div v-else>

### v2 API

```js
// 新版 API（Promise）
await getData()
```

</div>
```

### 案例 3：可折叠的 FAQ

```vue
<!-- docs/components/FaqItem.vue -->
<script setup>
import { ref } from 'vue'
const props = defineProps({ question: String })
const open = ref(false)
</script>

<template>
  <div class="faq-item" @click="open = !open">
    <div class="faq-question">
      <span>{{ open ? '▼' : '▶' }} {{ question }}</span>
    </div>
    <div v-show="open" class="faq-answer">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.faq-item {
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 12px 0;
  cursor: pointer;
}
.faq-question { font-weight: 600; }
.faq-answer { padding-top: 8px; color: var(--vp-c-text-2); }
</style>
```

```markdown
<script setup>
import FaqItem from '../components/FaqItem.vue'
</script>

# 常见问题

<FaqItem question="VitePress 是什么？">
  VitePress 是一个基于 Vite 的静态网站生成器。
</FaqItem>

<FaqItem question="如何安装？">
  npm add -D vitepress
</FaqItem>
```

### 案例 4：Badge 组件

```vue
<!-- docs/components/Badge.vue -->
<script setup>
defineProps({
  text: String,
  type: { type: String, default: 'info' }
})
</script>

<template>
  <span :class="['badge', `badge--${type}`]">{{ text }}</span>
</template>

<style scoped>
.badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  vertical-align: middle;
  margin-left: 4px;
}
.badge--info { background: #e0f2fe; color: #0369a1; }
.badge--tip { background: #dcfce7; color: #15803d; }
.badge--warning { background: #fef3c7; color: #a16207; }
.badge--danger { background: #fee2e2; color: #dc2626; }
</style>
```

```markdown
<script setup>
import Badge from '../components/Badge.vue'
</script>

## API 参考

### getData()

获取数据 <Badge text="稳定" type="tip" /> <Badge text="v1.0+" type="info" />

### deprecatedMethod()

已弃用 <Badge text="弃用" type="danger" />
```

---

## 注意事项

### 1. SSR 兼容性

```markdown
<!-- ❌ SSR 会报错 -->
<script setup>
const el = document.querySelector('.my-class')
</script>

<!-- ✅ 在 onMounted 中使用 -->
<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  const el = document.querySelector('.my-class')
})
</script>

<!-- ✅ 或用 ClientOnly 包裹 -->
<ClientOnly>
  <BrowserComponent />
</ClientOnly>
```

### 2. 样式隔离

```markdown
<!-- 在 .md 中写的样式默认只影响当前页面 -->

<style scoped>
/* 推荐加 scoped 避免污染 */
.custom { color: red; }
</style>

<!-- 如果需要全局样式 -->
<style>
/* 不加 scoped = 全局生效，谨慎使用 */
.vp-doc h1 { color: blue; }
</style>
```

### 3. 组件路径

```markdown
<!-- 相对于当前 .md 文件 -->
<script setup>
import MyComp from './components/MyComp.vue'    // 当前目录
import MyComp from '../components/MyComp.vue'   // 上级目录
</script>

<!-- 也可以用别名（需要在 vite 配置中设置） -->
<script setup>
import MyComp from '@components/MyComp.vue'
</script>
```

```ts
// config.ts
import { resolve } from 'path'

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@components': resolve(__dirname, '../components')
      }
    }
  }
})
```

### 4. 性能考虑

- 全局注册的组件会被打包进每个页面，即使没用到
- 大型组件推荐用 `defineAsyncComponent` 懒加载
- 只在少数页面用的组件，在 `.md` 中 `import` 即可

```ts
// 懒加载大组件
import { defineAsyncComponent } from 'vue'

app.component('HeavyChart', defineAsyncComponent(
  () => import('./components/HeavyChart.vue')
))
```

---

## 下一步

- 👉 [Markdown 进阶技巧](./markdown-advanced.md)
- 👉 [自定义主题开发](./custom-theme.md)
- 👉 [部署全攻略](./deploy-guide.md)
