import { defineConfig } from 'vitepress'
import { nav,sidebar } from './layout';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/",
  title: "lek-blog",
  description: "A blog that records the journey of growth along the way",
  markdown:{
    theme: 'material-theme-palenight',
    lineNumbers: true,
  },
  head: [['link', { rel: 'icon', href: './avatar.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:'./avatar.png',
    nav:nav,
    sidebar: sidebar,
     /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录'
    },
    docFooter: {
        //文档页脚
        prev: '上一篇',
        next: '下一篇'
    },
    footer:{
      message:"Released under the MIT License.'",
      copyright:"Copyright © 2025-present Lek"
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search:{
      provider:"local"
    },
    i18nRouting: true,
    darkModeSwitchLabel: '模式',
    lastUpdatedText: '上次更新'
  }
})
