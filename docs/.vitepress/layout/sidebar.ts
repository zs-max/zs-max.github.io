import {DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
 
  '/views/navigation/':[
    {
      text: '常用导航',
      items: [
         {
           text:"前端导航",
           link:"/views/navigation/frontEndNav"
         },
         {
          text:"后端导航",
          link:"/views/navigation/backEndNav"
         },
         {
           text:"AI导航",
           link:"/views/navigation/aiNav"
          }
      ]
    }
  ],
  '/views/frontEnd/components/':[
    {
      text: '组件库文档',
      items: [
         {
          text:"基础组件",
          link:"/views/components/base"
         },
         {
          text:"高级组件",
          link:"/views/components/major"
         },
         {
          text:"业务组件",
          link:"/views/components/busi"
         }
      ]
    }
  ],
  '/views/frontEnd/interviewQuestion/':[
    {
   
      text: '前端基础',
      items: [
        {
          text: 'html',
          link: '/views/frontEnd/interviewQuestion/base/html'
        },
        {
   
          text: 'css',
          link: '/views/frontEnd/interviewQuestion/base/css'
        },
        {
   
          text: 'javascript',
          link: '/views/frontEnd/interviewQuestion/base/javascript'
        },
        {
   
          text: 'typescript',
          link: '/views/frontEnd/interviewQuestion/base/typescript'
        }
      ]
    },
    {
      text:"框架相关",
      items:[
         {
          text: 'vue',
          link: '/views/frontEnd/interviewQuestion/vue/index'
        }
      ]
    },
    {
      text:"场景题目",
      link: '/views/frontEnd/interviewQuestion/senceQuestion/index',
      items:[
         {
          text: 'html',
          link: '/views/frontEnd/interviewQuestion/senceQuestion/html'
        }
      ]
    }
  ],
  '/views/frontEnd/dyQuestion/':[
    {
      text: '前端基础',
      items: [
        {
          text: '栈-深拷贝和浅拷贝',
          link: '/views/frontEnd/dyQuestion/baseQuestion/001_Stack'
        }
      ]
    },
    {
      text: 'javascript',
      items: [
        {
          text: 'js实现函数重载',
          link: '/views/frontEnd/dyQuestion/javascript/reloadFun'
        }
      ]
    },
    {
      text: '前端基建',
      items: [
        {
          text: '代理实现单例模式',
          link: '/views/frontEnd/dyQuestion/basebuild/singleton'
        }
      ]
    },
  ],
  '/views/frontEnd/baseBuild/': [
    {
      text: "前端基建",
      link: "/views/frontEnd/baseBuild/index",
      items: [
        {
          text: "脚手架",
          link: "/views/frontEnd/baseBuild/cli/index"
        }, {
          text: "组件库",
          link: "/views/frontEnd/baseBuild/components/index"
        }
      ]
    }
  ],
  '/views/frontEnd/tools':[
    {
      text:"前端工具",
      link:'/views/frontEnd/tools/index',
      items:[
        {
          text: "jenkins",
          link: "/views/frontEnd/tools/jenkins/index"
        },
         {
          text: "宝塔",
          link: "/views/frontEnd/tools/baota/index"
        },
      ]
    }
  ],
  '/views/markdown':[
    {text:"markdown基本使用",link:'/views/markdown/index'}
  ]
};
