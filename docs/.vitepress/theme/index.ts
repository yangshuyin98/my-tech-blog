import BlogTheme from '@sugarat/theme'
import Archives from './components/Archives.vue'
import PageList from './components/PageList.vue'

// 自定义样式重载
import './style.css'

// 自定义主题色
import './user-theme.css'

export default {
  ...BlogTheme,
  enhanceApp(ctx) {
    BlogTheme.enhanceApp?.(ctx)
    ctx.app.component('Archives', Archives)
    ctx.app.component('PageList', PageList)
  }
}
