import { defineConfig } from 'vitepress'
import { nav } from './relaConf';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lek-Blog",
  description: "A blog that records the journey of growth along the way",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:'./avatar.png',
    nav:nav,
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
