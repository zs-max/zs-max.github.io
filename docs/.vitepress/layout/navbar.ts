import { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [
    {
     
      text: '首页',
      link: '/' // 表示docs/index.md
    },
    {
      text:"智能导航",
      items:[
        {
         text:"前端导航",
         link:"/column/Algorithm"
        },
        {
          text:"数据结构与算法",
          link:"/column/Algorithm"
         },
          {
         text:"数据结构与算法",
         link:"/column/Algorithm"
        }
      ]
    },
    {
      text: '个人成长',
      items: [
        {
     
          text: '大江南北游记',
          link: '/column/Travel/' // 表示docs/column/Travel/index.md
        },
        {
     
          text: '所思·所想',
          link: '/column/Growing/' // 表示docs/column/Growing/index.md
        }
      ]
    },
    {
      text:"前端开发",
      items:[
        {
         text:"面试题",
         link:"/column/Algorithm"
        },
        {
          text:"数据结构与算法",
          link:"/column/Algorithm"
         },
          {
         text:"数据结构与算法",
         link:"/column/Algorithm"
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