<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

const { theme } = useData()

const props = withDefaults(
  defineProps<{
    /** 按路由前缀过滤，例如 '/Arry/core/' */
    prefix?: string
    /** 每组显示的最大文章数，默认 0 表示不显示文章列表 */
    limit?: number
  }>(),
  {
    prefix: '',
    limit: 0,
  }
)

const allPages = computed(() => (theme.value as any)?.blog?.pagesData || [])

const folderGroups = computed(() => {
  const prefix = props.prefix.endsWith('/') ? props.prefix : props.prefix + '/'

  // 过滤出 prefix 下所有有 title 的页面
  const filtered = allPages.value.filter((v: any) => {
    if (!v.meta?.title) return false
    if (v.meta?.hidden) return false
    if (!v.route.startsWith(prefix)) return false
    // 排除 prefix 自身的 index 页
    if (v.route === prefix || v.route === prefix + 'index') return false
    return true
  })

  // 按子文件夹名分组
  const groups = new Map<string, any[]>()
  for (const page of filtered) {
    const rest = page.route.slice(prefix.length) // e.g. "CSS标签属性/some-page" or "CSS标签属性/"
    const folderName = rest.split('/')[0]
    if (!folderName) continue
    if (!groups.has(folderName)) groups.set(folderName, [])
    groups.get(folderName)!.push(page)
  }

  // 每组取 index 页作为入口，按 order 排序文章列表
  return Array.from(groups.entries())
    .map(([folderName, pages]) => {
      // 找 index 页：route === prefix+folderName 或 prefix+folderName+'/index'
      const indexPage = pages.find(
        (p: any) =>
          p.route === prefix + folderName ||
          p.route === prefix + folderName + '/' ||
          p.route === prefix + folderName + '/index'
      )

      const sortedPages = pages
        .filter((p: any) => p !== indexPage)
        .sort((a: any, b: any) => {
          const oa = a.meta?.order ?? 999
          const ob = b.meta?.order ?? 999
          return oa - ob
        })

      return {
        folderName,
        title: indexPage?.meta?.title || folderName,
        route: indexPage?.route || prefix + folderName,
        date: indexPage?.meta?.date || '',
        count: pages.length,
        items: sortedPages.map((p: any) => ({
          title: p.meta.title,
          route: p.route,
          order: p.meta?.order,
        })),
      }
    })
    .sort((a, b) => {
      // 有 order 的按 order 排，没有的按文件夹名排
      const oa = allPages.value.find((p: any) => p.route === a.route)?.meta?.order ?? 999
      const ob = allPages.value.find((p: any) => p.route === b.route)?.meta?.order ?? 999
      if (oa !== 999 || ob !== 999) return oa - ob
      return a.folderName.localeCompare(b.folderName, 'zh-CN')
    })
})
</script>

<template>
  <div class="article-page-list">
    <div v-if="folderGroups.length === 0" class="empty">
      暂无内容
    </div>
    <div v-else class="grid">
      <a
        v-for="group in folderGroups"
        :key="group.folderName"
        :href="withBase(group.route)"
        class="card"
      >
        <div class="card-header">
          <span class="card-title">{{ group.title }}</span>
          <span class="card-count">{{ group.count }} 篇</span>
        </div>
        <div v-if="group.date" class="card-date">{{ group.date }}</div>
        <ul v-if="limit > 0 && group.items.length" class="card-items">
          <li v-for="item in group.items.slice(0, limit)" :key="item.route" class="card-item">
            <span v-if="item.order" class="item-order">{{ item.order }}</span>
            <span class="item-title">{{ item.title }}</span>
          </li>
          <li v-if="group.items.length > limit" class="card-item more">
            更多 {{ group.items.length - limit }} 篇...
          </li>
        </ul>
      </a>
    </div>
  </div>
</template>

<style scoped>
.article-page-list {
  max-width: 900px;
  margin: 0 auto;
}
.empty {
  text-align: center;
  color: var(--vp-c-text-2);
  padding: 2rem 0;
  font-size: 1rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}
.card {
  display: block;
  padding: 1.2rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  transition: border-color 0.25s, box-shadow 0.25s, transform 0.2s;
}
.card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}
.card-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card-count {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-mute);
  padding: 0.15rem 0.5rem;
  border-radius: 10px;
  flex-shrink: 0;
}
.card-date {
  margin-top: 0.4rem;
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-mono);
}
.card-items {
  list-style: none;
  padding: 0;
  margin: 0.8rem 0 0;
  border-top: 1px dashed var(--vp-c-divider);
  padding-top: 0.6rem;
}
.card-item {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  padding: 0.2rem 0;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card-item.more {
  color: var(--vp-c-text-3);
  font-style: italic;
}
.item-order {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.2rem;
  height: 1.2rem;
  font-size: 0.65rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-mute);
  border-radius: 3px;
  flex-shrink: 0;
}
.item-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
