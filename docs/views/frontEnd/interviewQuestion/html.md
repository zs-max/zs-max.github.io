# HTML

## DOCTYPE 是什么，都有哪些属性？

:::details
HTML 的 <!DOCTYPE> 声明是文档类型声明，用于告知浏览器当前 HTML 文档使用的 HTML 版本,确保文档以正确的模式渲染

现在的开发中一般使用简单的HTML5的简单声明
```html
   <!DOCTYPE html>
```
在之前的 HTML 版本中，如 HTML4 ，会有其他写法，不过现在已经不常用。

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```
:::


## meta属性和作用
:::details
 HTML 中的 <meta> 标签用于提供页面的元信息，这些信息不会直接显示在网页内容中，但对浏览器、搜索引擎和其他服务非常重要。
常见的 meta 信息如下：
- 字符编码。指定网页的字符编码，确保正确显示内容
```html
   <meta charset="UTF-8" />
```
- 页面视口设置（响应式设计）。控制页面在移动设备上的显示和缩放行为。
```html
  // width=device-width：页面宽度匹配设备屏幕宽度
  // initial-scale=1.0：初始缩放比例为 1
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
```
- 搜索引擎优化（SEO）。提供描述性信息，便于搜索引擎索引
```html
<meta
  name="keywords"
  content="前端, 面试, 前端面试, 面试题, 刷题, 面试流程, 前端面试流程, 面试准备, 简历, 前端简历, Javascript, Typescript, React, Vue, webpack, vite, HTTP, 算法"
/>
<meta name="description" content="大厂面试规范，开源免费" />
<meta name="robots" content="index, follow" />
```
- 作者信息。提供网页作者信息。
  
```html
<meta name="author" content="lek" />
```
:::


## 什么是 DOM ，它和 HTML 有什么区别？
- dom：文档对象模型（document object model），是一个js对象
- html：一种标记语言，用于定义网页内容和结构

:::tip
DOM 的特点:

- 树形结构，DOM 树
- 可编程，可以使用 Javascript 读取和修改 DOM 数据
- 动态性，通过 DOM API 动态修改结构和数据
:::  

:::warning
HTML 到 DOM 的过程:

- HTML 解析：浏览器解析 HTML 代码，生成 DOM 树。
- CSSOM 生成：解析 CSS，生成 CSSOM（CSS 对象模型）。
- 渲染树：结合 DOM 和 CSSOM，生成渲染树。
- 页面渲染：根据渲染树将内容显示在页面上。
:::


## HTML5 语义化以及常见的语义化标签
 用正确的标签做正确的事情，使网页的结构和内容更加清晰，方便浏览器、开发者以及搜索引擎理解网页内容
- 提高代码可读性
- 增强 SEO（搜索引擎优化）：搜索引擎能更好地抓取和理解网页内容
- 提升可访问性

:::warning
常见的 HTML5 语义化标签：
- header nav aside main section article footer
:::

:::details 语义化案例
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML5 语义化示例</title>
  </head>
  <body>
    <header>
      <h1>面试派</h1>
      <nav>
        <ul>
          <li><a href="#contact">联系</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="home">
        <h2>欢迎访问</h2>
        <p>这是一个 HTML5 语义化的示例。</p>
      </section>
      <section id="about">
        <h2>关于我们</h2>
        <article>
          <h3>我们的历史</h3>
          <p>这是关于我们历史的介绍。</p>
        </article>
      </section>
    </main>

    <aside>
      <h3>相关文章</h3>
      <ul>
        <li><a href="#">文章 2</a></li>
      </ul>
    </aside>

    <footer>
      <p> 2025 面试派</p>
    </footer>
  </body>
</html>
```
:::










