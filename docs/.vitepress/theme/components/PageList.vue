<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { theme } = useData()

const props = withDefaults(
  defineProps<{
    /** 按路由前缀过滤，例如 '/guide/blog-ops' */
    prefix?: string
    /** 排序字段，默认 order */
    sortBy?: 'order' | 'date'
    /** 排序方向，默认 asc（order 升序 / date 降序） */
    sortOrder?: 'asc' | 'desc'
  }>(),
  {
    prefix: '',
    sortBy: 'order',
    sortOrder: 'asc',
  }
)

const allPages = computed(() => (theme.value as any)?.blog?.pagesData || [])

const articleList = computed(() => {
  let list = allPages.value
    .filter((v: any) => {
      // 必须有 title，不能隐藏
      if (!v.meta?.title) return false
      if (v.meta?.hidden) return false
      // 按前缀过滤
      if (props.prefix && !v.route.startsWith(props.prefix)) return false
      // 排除 index/概览页自身
      if (v.route === props.prefix || v.route === props.prefix + '/' || v.route === props.prefix + '/index') return false
      return true
    })

  // 排序
  if (props.sortBy === 'order') {
    const dir = props.sortOrder === 'asc' ? 1 : -1
    list = list.sort((a: any, b: any) => {
      const oa = a.meta?.order ?? 999
      const ob = b.meta?.order ?? 999
      return (oa - ob) * dir
    })
  } else {
    // 按日期排序
    const dir = props.sortOrder === 'asc' ? 1 : -1
    list = list.sort((a: any, b: any) => {
      const da = a.meta?.date ? +new Date(a.meta.date) : 0
      const db = b.meta?.date ? +new Date(b.meta.date) : 0
      return (da - db) * dir
    })
  }

  return list.map((v: any) => ({
    title: v.meta.title,
    date: v.meta.date || '',
    route: v.route,
    order: v.meta?.order,
    tag: v.meta?.tag || [],
  }))
})
</script>

<template>
  <div class="page-list">
    <div v-if="articleList.length === 0" class="empty">
      暂无文章
    </div>
    <ul v-else class="list">
      <li v-for="article in articleList" :key="article.route" class="item">
        <span v-if="article.order" class="order">{{ article.order }}</span>
        <span v-if="article.date && sortBy === 'date'" class="date">{{ article.date }}</span>
        <a :href="article.route" class="title">{{ article.title }}</a>
        <span v-if="article.tag.length" class="tags">
          <span v-for="t in article.tag" :key="t" class="tag">{{ t }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.page-list {
  max-width: 800px;
  margin: 0 auto;
}
.empty {
  text-align: center;
  color: var(--vp-c-text-2);
  padding: 2rem 0;
  font-size: 1rem;
}
.list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.item {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  padding: 0.6rem 0;
  border-bottom: 1px dashed var(--vp-c-divider);
  transition: background 0.2s, padding-left 0.2s;
}
.item:hover {
  background: var(--vp-c-bg-soft);
  padding-left: 0.5rem;
  border-radius: 4px;
}
.order {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.6rem;
  height: 1.6rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  flex-shrink: 0;
}
.date {
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
  white-space: nowrap;
  min-width: 85px;
  font-family: var(--vp-font-mono);
  flex-shrink: 0;
}
.title {
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 0.95rem;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title:hover {
  color: var(--vp-c-brand-1);
}
.tags {
  display: flex;
  gap: 0.3rem;
  flex-shrink: 0;
}
.tag {
  font-size: 0.75rem;
  padding: 0.1rem 0.4rem;
  border-radius: 3px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
}
</style>
