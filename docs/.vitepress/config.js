import { defineConfig } from 'vitepress'
export default defineConfig({
  title: '项目文档',
  description: '基于 VitePress 的知识库模板',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' }
    ],
    sidebar: {
      '/guide/': [
        { text: '开始', link: '/guide/' }
      ]
    }
  }
})
