<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

const { theme } = useData()

interface Article {
  title: string
  date: string
  route: string
  tag?: string[]
}

const allPages = computed(() => (theme.value as any)?.blog?.pagesData || [])

const articleList = computed(() => {
  return allPages.value
    .filter((v: any) => v.meta?.date && v.meta?.title && !v.meta?.hidden)
    .sort((a: any, b: any) => +new Date(b.meta.date) - +new Date(a.meta.date))
    .map((v: any) => ({
      title: v.meta.title,
      date: v.meta.date,
      route: v.route,
      tag: v.meta.tag,
    }))
})

// 按年份分组
const groupedByYear = computed(() => {
  const groups: Record<string, Article[]> = {}
  articleList.value.forEach((article: Article) => {
    const year = new Date(article.date).getFullYear().toString()
    if (!groups[year]) {
      groups[year] = []
    }
    groups[year].push(article)
  })
  return groups
})
</script>

<template>
  <div class="archives">
    <div v-if="articleList.length === 0" class="empty">
      还没有文章
    </div>
    <div v-for="(articles, year) in groupedByYear" :key="year" class="year-group">
      <h2 class="year-title">{{ year }} 年</h2>
      <ul class="article-list">
        <li v-for="article in articles" :key="article.route" class="article-item">
          <span class="date">{{ article.date }}</span>
          <a :href="withBase(article.route)" class="title">{{ article.title }}</a>
          <span v-if="article.tag?.length" class="tags">
            <span v-for="t in article.tag" :key="t" class="tag">{{ t }}</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.archives {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem 0;
}
.empty {
  text-align: center;
  color: var(--vp-c-text-2);
  padding: 3rem 0;
  font-size: 1.1rem;
}
.year-group {
  margin-bottom: 2rem;
}
.year-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--vp-c-divider);
  color: var(--vp-c-brand-1);
}
.article-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.article-item {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  padding: 0.5rem 0;
  border-bottom: 1px dashed var(--vp-c-divider);
  transition: background 0.2s;
}
.article-item:hover {
  background: var(--vp-c-bg-soft);
  padding-left: 0.5rem;
}
.date {
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
  white-space: nowrap;
  min-width: 85px;
  font-family: var(--vp-font-mono);
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
