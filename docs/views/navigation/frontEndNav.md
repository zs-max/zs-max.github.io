---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { reactive } from 'vue'
import NavCards from '../../.vitepress/components/navCards.vue'
const data = reactive([
    {
      title: 'JavaScript 框架类库',
      items: [
        {
          // icon: 'https://simpleicons.org/icons/jquery.svg',
          icon: '/icons/jquery.svg',
          title: 'jQuery API 中文文档',
          desc: '一个兼容多浏览器的 JavaScript 框架',
          link: 'https://jquery.cuishifeng.cn',
        },
      ],
    },
  {
      title: 'CSS 相关',
      items: [
        {
          icon: 'https://postcss.org/assets/logo-3e39b0aa.svg',
          title: 'PostCSS',
          desc: '一个用 JavaScript 转换 CSS 的工具',
          link: 'https://postcss.org',
        },
        {
          icon: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
          title: 'Sass',
          desc: '一个成熟，稳定，功能强大的专业级 CSS 扩展语言',
          link: 'https://sass-lang.com',
        },
        {
          icon: 'https://www.tailwindcss.cn/apple-touch-icon.png',
          title: 'TailwindCSS 中文网',
          desc: '一个功能类优先的 CSS 框架',
          link: 'https://www.tailwindcss.cn',
        },
      ],
    },
   {
      title: 'Vue 生态',
      items: [
        {
          icon: 'https://cn.vuejs.org/logo.svg',
          title: 'Vue 3',
          desc: '渐进式 JavaScript 框架',
          link: 'https://cn.vuejs.org',
        },
        {
          icon: 'https://cn.vuejs.org/logo.svg',
          title: 'Vue 2',
          desc: '渐进式 JavaScript 框架',
          link: 'https://v2.cn.vuejs.org',
        },
        {
          icon: 'https://cn.vuejs.org/logo.svg',
          title: 'Vue Router',
          desc: 'Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由',
          link: 'https://router.vuejs.org/zh',
        },
        {
          icon: 'https://pinia.vuejs.org/logo.svg',
          title: 'Pinia',
          desc: '符合直觉的 Vue.js 状态管理库',
          link: 'https://pinia.vuejs.org/zh',
        },
        {
          icon: 'https://nuxt.com/icon.png',
          title: 'Nuxt.js',
          desc: '一个基于 Vue.js 的通用应用框架',
          link: 'https://nuxt.com',
        },
        {
          icon: 'https://vueuse.org/favicon.svg',
          title: 'VueUse',
          desc: 'Vue Composition API 的常用工具集',
          link: 'https://vueuse.org',
        },
        {
          icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
          title: 'Element Plus',
          desc: '基于 Vue 3，面向设计师和开发者的组件库',
          link: 'https://element-plus.org',
        },
        {
          icon: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
          title: 'Ant Design Vue',
          desc: 'Ant Design 的 Vue 实现，开发和服务于企业级后台产品',
          link: 'https://antdv.com',
        },
        {
          icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
          title: 'Vant',
          desc: '轻量、可定制的移动端 Vue 组件库',
          link: 'https://vant-ui.github.io/vant',
        }
      ],
    },
    {
      title: 'Node 相关',
      items: [
        {
          icon: '/icons/nodejs.svg',
          title: 'Node.js',
          desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境',
          link: 'https://nodejs.org/zh-cn',
        },
        {
          icon: 'https://expressjs.com/images/favicon.png',
          title: 'Express',
          desc: '基于 Node.js 平台，快速、开放、极简的 Web 开发框架',
          link: 'https://expressjs.com',
        },
        {
          icon: '/icons/koa.svg',
          title: 'Koa',
          desc: '基于 Node.js 平台的下一代 web 开发框架',
          link: 'https://koajs.com',
        },
        {
          icon: 'https://www.eggjs.org/favicon.png',
          title: 'Egg',
          desc: '为企业级框架和应用而生',
          link: 'https://www.eggjs.org/zh-CN',
        },
        {
          icon: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
          title: 'Nest.js 中文文档',
          desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
          link: 'https://docs.nestjs.cn',
        },
      ],
    },{
      title: '可视化',
      items: [
        {
          icon: 'https://echarts.apache.org/zh/images/favicon.png',
          title: 'ECharts',
          desc: '一个基于 JavaScript 的开源可视化图表库',
          link: 'https://echarts.apache.org/zh/index.html',
        },
        {
          icon: 'https://antv.vision/icons/icon-72x72.png',
          title: 'AntV',
          desc: '蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
          link: 'https://antv.vision/zh/',
        },
        {
          icon: 'https://d3js.org/favicon.png',
          title: 'D3.js',
          desc: '一个遵循 Web 标准用于可视化数据的 JavaScript 库',
          link: 'https://d3js.org',
        },
        {
          icon: 'https://www.chartjs.org/favicon.ico',
          title: 'Chart.js',
          desc: '一个简单而灵活的 JavaScript 图表库',
          link: 'https://www.chartjs.org',
        },
        {
          icon: 'https://threejs.org/files/favicon.ico',
          // icon: 'https://threejs.org/files/favicon_white.ico',
          title: 'Three.js',
          desc: 'JavaScript 3d 库',
          link: 'https://threejs.org',
        },
      ],
    },
     {
      title: '编译&构建&打包',
      items: [
        {
          icon: 'https://www.webpackjs.com/icon_180x180.png',
          title: 'Webpack 中文网',
          desc: '一个用于现代 JavaScript 应用程序的静态模块打包工具',
          link: 'https://www.webpackjs.com',
        },
        {
          icon: 'https://cn.vitejs.dev/logo.svg',
          title: 'Vite 中文文档',
          desc: '下一代前端工具链',
          link: 'https://cn.vitejs.dev',
        },
        {
          icon: 'https://www.rollupjs.com/img/favicon.png',
          title: 'Rollup',
          desc: 'Rollup 是一个 JavaScript 模块打包器',
          link: 'https://www.rollupjs.com',
        },
        {
          icon: 'https://turbo.build/images/favicon-dark/apple-touch-icon.png',
          title: 'Turbo',
          desc: 'Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust',
          link: 'https://turbo.build',
        },
        {
          icon: 'https://www.babeljs.cn/img/favicon.png',
          title: 'Babel',
          desc: 'Babel 是一个 JavaScript 编译器',
          link: 'https://www.babeljs.cn',
        },
        {
          icon: 'https://esbuild.github.io/favicon.svg',
          title: 'esbuild',
          desc: 'An extremely fast bundler for the web',
          link: 'https://esbuild.github.io',
        },
        {
          icon: 'https://swc.rs/favicon/apple-touch-icon.png',
          title: 'SWC',
          desc: 'Rust-based platform for the Web',
          link: 'https://swc.rs',
        },
      ],
    },
    {
      title: '图标库',
      items: [
        {
          icon: 'https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg',
          title: 'iconfont',
          desc: '国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
          link: 'https://www.iconfont.cn',
        },
        {
          icon: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg',
          title: 'IconPark 图标库',
          desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
          link: 'https://iconpark.oceanengine.com/official',
        },
        {
          icon: 'https://ts1.tc.mm.bing.net/th/id/ODLS.dbfe67d9-1eb1-4fee-b6e6-5b81c18b8c4f?w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2',
          title: 'undraw插画素材',
          desc: '免费素材网站',
          link: 'https://undraw.co/',
        }
      ],
    },
     {
      title: '前端学习资料',
      items: [
        {
          icon: 'https://ts1.tc.mm.bing.net/th/id/ODLS.f1c9fc9c-8feb-40a0-8863-5442c0c24716?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2',
          title: 'MDN | Web 开发者指南',
          desc: 'Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资',
          link: 'https://developer.mozilla.org/zh-CN',
        },
        {
          icon: 'https://ts1.tc.mm.bing.net/th/id/ODLS.cc1244f4-c576-40dc-8423-06895c0f5444?w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2',
          title: '菜鸟教程',
          desc: '学的不仅是技术，更是梦想！',
          link: 'https://www.runoob.com',
        },
        {
          icon: '/icons/es6.svg',
          title: 'ES6 入门教程',
          desc: '阮一峰的网络日志',
          link: 'http://es6.ruanyifeng.com',
        },
      ],
    },
    {
      title: '社区',
      items: [
        {
          title: 'Github',
          icon: {
            svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
          },
          desc: '一个面向开源及私有软件项目的托管平台',
          link: 'https://github.com',
        },
        {
          icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
          title: 'Stack Overflow',
          desc: '全球最大的技术问答网站',
          link: 'https://stackoverflow.com',
        },
        {
          title: '稀土掘金',
          icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
          desc: '面向全球中文开发者的技术内容分享与交流平台',
          link: 'https://juejin.cn',
        },
        {
          title: 'SegmentFault 思否',
          icon: 'https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png',
          desc: '技术问答开发者社区',
          link: 'https://segmentfault.com',
        },
        {
          title: '博客园',
          // icon: 'https://common.cnblogs.com/favicon.ico',
          icon: 'https://ts2.tc.mm.bing.net/th/id/ODLS.0477b578-4f83-485d-a826-4aa18530812d?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2',
          desc: '博客园是一个面向开发者的知识分享社区',
          link: 'https://www.cnblogs.com',
        },
        {
          title: '知乎',
          icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png',
          desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
          link: 'https://juejin.cn',
        },
      ],
    }
])

</script>
<style src="./index.scss"></style>

# 前端导航

<NavCards  v-for="item in data" :title="item.title" :items="item.items"/>

