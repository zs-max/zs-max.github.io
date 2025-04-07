import { defineConfig } from 'vitepress'
import { nav,sidebar } from './relaConf';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/",
  title: "lek-blog",
  description: "A blog that records the journey of growth along the way",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:'./avatar.png',
    nav:nav,
    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search:{
      provider:"local"
    },
    i18nRouting: true
  }
})
