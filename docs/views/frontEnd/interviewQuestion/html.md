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


## dom节点的attr和property有何区别
- attr指的是HTML属性
- property指的是dom对象属性
:::warning
主要区别:
- attr 定义在 HTML 元素上的初始属性，存储在 DOM 元素的属性列表中，与 HTML 源代码一一对应。
- property 是 DOM 对象的属性，是通过浏览器解析 HTML 并生成 DOM 对象时动态创建的，供 JavaScript 操作
  
存储位置不同:
- attr是HTML的一部分，存储在元素的HTML标记中
- property是dom的一部分，存储在javascript对象中

行为不同:
- attr一般是静态的,，表示元素初始的值，即从 HTML 源代码中解析的值，通常不会因用户操作或脚本修改而自动更新。除非你手动使用 JS 修改值
- property 一般是动态的，表示当前状态，可以通过 JavaScript 修改，并反映在 DOM 中。

对于一些常用的属性（如 id、value、checked 等），attr 和 property 会部分同步：
- 修改 attr 会影响 property 值。
- 而修改 property 可能不会同步回 attr。
  
总结，一般来说，attr 用于设置元素的初始状态，而 property 用于操作和获取当前状态
:::

:::details input案例
```javascript
// value就是一个html属性，表示这个输入框的初始值是“初始值”
<input type="text" value="初始值" />

// 当你通过 JavaScript 访问或修改这个值时，使用的是 property。例如：
let inputElement = document.querySelector('input');
console.log(inputElement.value);  // 输出用户当前输入的值，可能与初始值不同

// 如果用户在输入框中改变了文本，inputElement.value 将反映用户的输入，而原始的 HTML 属性不会改变。
```
:::

:::details checkbox案例
```javascript
// checked 属性表明复选框默认被选中
<input type="checkbox" checked />

// 检查元素的 HTML 属性，它仍然会有 checked 标记，因为这是它的初始状态，但 property 已经更新以反映当前状态
let checkboxElement = document.querySelector('input[type="checkbox"]');
console.log(checkboxElement.checked); // false，反映了当前状态
```
:::

:::details image案例
```javascript
// src 属性告诉浏览器从何处加载图像。
<img src="example.jpg" alt="描述" />

// 影响到DOM中的src property，而且会导致浏览器重新加载新指定的图像。然而，原始的 HTML 源代码中的 src 属性没有改变
let imgElement = document.querySelector('img');
imgElement.src = "newimage.jpg";
```
:::


## 如何一次性插入多个 DOM 节点？考虑性能
:::tip
直接多次操作 DOM（如多次 appendChild 或 innerHTML 更新）会导致性能问题，因为每次操作都会触发 DOM 的重新渲染。DocumentFragment 是一个轻量级的文档片段，可以在内存中操作节点，最后一次性插入到 DOM 中，从而减少重绘和回流。
:::

```javascript
// 获取目标容器
const container = document.getElementById('list')

// 创建 DocumentFragment
const fragment = document.createDocumentFragment()

// 创建多个节点并添加到 fragment 中
for (let i = 1; i <= 1000; i++) {
  const li = document.createElement('li')
  li.textContent = `item ${i}`
  fragment.appendChild(li)
}

// 一次性插入到 DOM
container.appendChild(fragment)
```

## offsetHeight scrollHeight clientHeight 有什么区别
:::tip
- offsetHeight: 元素的总高度，包括内容高度、内边距（padding）、水平滚动条高度（如果存在）、以及边框（border）。不包括外边距（margin）
- clientHeight 元素的可见内容高度，包括内容高度和内边距（padding），但不包括水平滚动条高度、边框（border）和外边距（margin）
- scrollHeight 元素的实际内容高度，包括不可见的溢出部分（scrollable content），大于等于 clientHeight
:::

## HTMLCollection 和 NodeList 的区别
在操作 DOM 时，HTMLCollection 和 NodeList 都是用来表示节点集合的对象，它们的区别是：
:::tip
HTMLCollection 只包含 HTML 元素节点。通过 document.getElementsByTagName 或 document.getElementsByClassName 返回的结果是 HTMLCollection。
NodeList 包括 元素节点、文本节点、注释节点 等，不仅仅是 HTML 元素节点
- 通过 document.querySelectorAll 返回的是 静态 NodeList
- 通过 childNodes 返回的是 动态 NodeList
  
当文档结构发生变化时
- HTMLCollection 和 动态 NodeList 会随着 DOM 的变化自动更新
- 静态 NodeList 不会随着 DOM 的变化自动更新
:::

## Node 和 Element 有什么区别？
:::tip
在 DOM（文档对象模型）中，HTML Element 和 Node 都是表示文档结构中的对象，但它们有不同的定义和用途
Node 是 DOM 树中所有类型对象的基类，是一个接口，表示文档树中的一个节点。它有多个子类型，Element 是其中的一个。其他的还有 Text、Comment 等。

Node 常见属性如 nodeName nodeValue

HTML Element 是 Node 的子类，专门表示 HTML 元素节点。它提供了与 HTML 元素相关的更多功能，如属性、样式等。HTML Element 仅表示 HTML 元素节点，通常对应 HTML 标签，
如 ``<div>``, ``<p>``, ``<a>`` 等。

Element 常见属性和方法如 innerHTML getAttri
bute setAttribute
:::



## window.onload 和 DOMContentLoaded 的区别是什么？
都用来检测页面的加载状态，但触发的时机和作用范围有所不同。
:::info
- DOMContentLoaded 是当 DOM 树构建完成（HTML 被解析完成，不等待样式表、图片、iframe 等资源加载）时触发，不依赖于外部资源。
- window.onload 是当 整个页面及所有资源（包括样式表、图片、iframe、脚本等）加载完成时触发，依赖于外部资源。

触发时机:domContentLoaded早于window.onload

具体使用：
- 如果你的逻辑只依赖 DOM 的加载（如操作页面结构、绑定事件），使用 DOMContentLoaded
- 如果你的逻辑需要依赖页面所有资源加载完成（如获取图片尺寸、执行动画），使用 window.onload。

:::

## script 标签放在 head 里，怎么解决加载阻塞的问题
在 HTML 中，``<script>`` 标签通常会阻塞页面的渲染，尤其是当它放在 ``<head>`` 部分时，因为浏览器会在执行 JavaScript 代码之前停止解析 HTML。
:::info 解决方案
- 使用 async 属性,当 async 属性添加到 ``<script>`` 标签时，脚本会异步加载，并在加载完成后立即执行，不会阻塞页面的渲染。
```javascript
<head>
  <script src="script.js" async></script>
</head>
```

- 使用 defer 属性,defer 属性使得脚本延迟执行，直到 HTML 文档解析完毕。
```javascript
<head>
  <script src="script.js" defer></script>
</head>
```
- 将 ``<script>`` 放在 ``<body>`` 最后
:::
:::warning
defer和async:
相同：都是加载外部资源
不同：
async是异步加载，并且下载完立即执行，执行时无法保证加载顺序，因为不确定下载的先后
defer是延迟加载，知道html解析完毕，并且执行顺序是按script标签的顺序执行
:::





































