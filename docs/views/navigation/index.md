---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { reactive } from 'vue'
import NavCards from '../../.vitepress/components/navCards.vue'
const data = reactive([
    {
       title: '常用工具',
       items: [
        {
          icon: 'https://caniuse.com/img/favicon-128.png',
          title: 'Can I use',
          desc: '前端 API 兼容性查询',
          link: 'https://caniuse.com',
        },
        {
          icon: 'https://tinypng.com/images/apple-touch-icon.png',
          title: 'TinyPNG',
          desc: '在线图片压缩工具',
          link: 'https://tinypng.com',
        },
        {
          icon: 'https://devtool.tech/logo.svg',
          title: '开发者武器库',
          desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
          link: 'https://devtool.tech',
        },
        {
          icon: 'https://tool.lu/favicon.ico',
          title: '在线工具',
          desc: '开发人员的工具箱',
          link: 'https://tool.lu',
        },
        {
          icon: '/icons/json-cn.ico',
          title: 'Json 中文网',
          desc: 'JSON 在线解析及格式化验证',
          link: 'https://www.json.cn',
        },
        {
          title: 'ts在线类型测试',
          desc: 'ts在线编译类型',
          link: 'https://www.tslang.cn/play/index.html',
        },
      ],
    }
])

</script>
<style src="./index.scss"></style>

# 常用导航

<NavCards  v-for="item in data" :title="item.title" :items="item.items"/>

