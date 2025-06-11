import { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [
    {
     
      text: '首页',
      link: '/' // 表示docs/index.md
    },
    {
      text:"智能导航",
      link:"/views/navigation"
    },
    {
      text:"前端开发",
      items:[
        {
         text:"面试题",
         link:"/views/frontEnd/interviewQuestion"
        },
        {
          text:"组件库",
          link:"/views/frontEnd/components"
        },
        {
          text:"前端基建",
          link:"/views/frontEnd/baseBuild"
        },
        {
          text:"项目模板",
          link:"/views/frontEnd/proTemplate"
        },
        {
          text:"dy知识点",
          link:"/views/frontEnd/dyQuestion"
        },
         {
          text:"工具",
          link:"/views/frontEnd/tools"
        }
      ]
    },
    {
      text: '个人成长',
      items: [
        {
     
          text: '旅行',
          link: '/views/life/travel'
        },
        {
     
          text: '成长',
          link: '/views/life/growing'
        },
        {
     
          text: '其他',
          link: '/views/life/other'
        }
      ]
    },
    {
     
      text: '关于我',
      items: [
        {
          text: 'Github', 
          link: 'https://github.com/zs-max' 
        },
        {
     
          text: 'Gitee',
          link: 'https://gitee.com/li-wen-kai'
        },
        {
     
          text: '掘金',
          link: 'https://juejin.cn/user/3070268781890558/posts'
        }
      ]
    }
  ];