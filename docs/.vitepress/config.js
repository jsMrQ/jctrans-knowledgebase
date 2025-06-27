// docs/.vitepress/config.js
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '菜单',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
    ],
    sidebar: {
      '/guide/': [
        { text: 'Guide Home', link: '/guide/' },
        { text: 'Setup', link: '/guide/setup' }
      ],
      '/': [
        { text: '首页', link: '/' },
        { text: '公共', link: '/public/index.md' }
      ]
    },
    search: {
      provider: 'local'
    }
  },
})
