---
# 提供三种布局，doc、page和home
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
layout: home
pageClass: m-home-layout
home: true

# 官方文档相关配置：https://vitepress.dev/reference/default-theme-home-page
title: lek的博客
titleTemplate: Hi,终于等到你
editLink: true
lastUpdated: true

hero:
    name: 小李同学
    text: Stay foolish, Stay hungry.
    tagline: 卷出层次 / 人间清醒 / 工具控
    image:
        # 首页右边的图片
        src: /avatar.png
        # 图片的描述
        alt: avatar
    # 按钮相关
    actions:
    - theme: brand
      text: 前端导航
      link: /column/Algorithm/
    - theme: alt
      text: 日常笔记
      link: /column/Growing/
    

# 按钮下方的描述
features:
  - icon: 📍
    title: 常用网站
    details: 常用网址导航
    link: /column/views/guide   
  - icon: 📖
    title: Web前端
    details: '前端常用知识点'
    link: /column/views/guide
  - icon: 💡
    title: 生活随笔
    details: 记录日常生活、旅行思考、思考感悟等
    link: /column/views/guide  
  - icon: 📷︎
    title: 摄影视角
    details: 分享摄影技巧以及摄影作品展示
    link: /column/views/guide
  - icon: 📘
    title: 阅读笔记
    details: 分享阅读的书籍，记录读后感以及学到的新知识
    link: /column/views/guide
  - icon: 👨‍💻
    title: 个人资料
    details: 是个平平无奇但是又很热爱学习的斜杆青年。
    link: /column/views/guide   
  # - icon: 🎨
  #   title: 喜欢美学
  #   details: 热爱一切美学，喜欢用各种设计工具造图。
  #   link: /column/views/guide
  # - icon: 🐞
  #   title: 斜杆青年
  #   details: 是个平平无奇但是又很热爱学习的斜杆青年。
  #   link: /column/views/guide
  # - icon: 💯
  #   title: Web前端
  #   details: 个人资料
  #   link: /column/views/guide     
---

<!-- 自定义组件 -->
<!-- <script setup>
  import home from './.vitepress/components/home.vue';
</script> -->

<home />