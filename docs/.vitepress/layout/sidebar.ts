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
          text: '栈-深拷贝和浅拷贝',
          link: '/views/interviewQuestion/001_Stack'
        },
        {
   
          text: '队列-事件循环',
          link: '/views/interviewQuestion/002_Queue'
        }
      ]
    },
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
  ]
};
