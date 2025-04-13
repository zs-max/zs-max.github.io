import {DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
  // /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置
  '/column/Algorithm/': [],
  '/column/interviewQuestion/':[
    {
   
      text: '前端基础',
      items: [
        {
   
          text: '栈-深拷贝和浅拷贝',
          link: '/column/interviewQuestion/001_Stack'
        },
        {
   
          text: '队列-事件循环',
          link: '/column/interviewQuestion/002_Queue'
        }
      ]
    },
  ],
  '/column/navigation/':[
    {
      text: '常用导航',
      items: [
         {
           text:"前端导航",
           link:"/column/navigation/frontEndNav"
         },
         {
          text:"后端导航",
          link:"/column/navigation/backEndNav"
         },
         {
           text:"AI导航",
           link:"/column/navigation/aiNav"
          }
      ]
    },
  ]
};
