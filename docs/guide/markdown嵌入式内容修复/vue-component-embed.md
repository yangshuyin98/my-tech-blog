# Vue 组件嵌入问题

在 Markdown 中直接使用 Vue 组件时，需要注意组件注册和作用域问题。

## 全局注册

在 `.vitepress/theme/index.ts` 中全局注册组件：

```typescript
import DefaultTheme from 'vitepress/theme'
import MyComponent from './components/MyComponent.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('MyComponent', MyComponent)
  }
}
```

## 使用

```markdown
<MyComponent prop="value" />
```
