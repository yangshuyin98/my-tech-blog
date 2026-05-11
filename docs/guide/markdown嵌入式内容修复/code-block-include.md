# 代码块内 include 转义

在 Markdown 中，展示 include 指令代码时可能被 Vitepress 误解析。

## 问题

当代码块中包含 `@include` 指令时，Vitepress 会尝试加载对应文件，导致构建失败。

## 解决方案

使用 `::: v-pre` 容器包裹代码块，或在演示时将 `@` 替换为全角 `＠` 避免被识别。
