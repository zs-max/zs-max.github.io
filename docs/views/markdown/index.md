# markdown的基本写法（vite版本）


## 内部链接
直接导航导旅行页面：
[Travel](/views/life/travel/index)  
主页：[Home](/) <!-- 将用户导航至根目录下的 index.html -->

导航到锚点：[foo heading](./#heading) <!-- 将用户锚定到目录 foo 下的index文件中的一个标题上 -->

相对目录，旅行链接[travel](../life/travel/index) <!-- 可以省略扩展名 -->

带有md后缀[travel](../life/travel/index.md)  <!-- 可以添加 .md -->

[travel](../life/travel/index.html) <!-- 或者可以添加 .html -->


## 表格
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |



## 表情
:tada: :100:


## 目录表
[[toc]]


## 卡片
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## 自定义标题
可以通过在容器的 "type" 之后附加文本来设置自定义标题。
::: danger STOP
危险区域，请勿继续
:::


## raw
::: raw
Wraps in a `<div class="vp-raw">`
:::

## GitHub 风格的警报
> [!NOTE]
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP]
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT]
> 对用户达成目标至关重要的信息。

> [!WARNING]
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION]
> 行为可能带来的负面影响。

## 代码块中的语法高亮
```js
export default {
  name: 'MyComponent',
  // ...
}
```

## 在代码块中实现行高亮
除了单行之外，还可以指定多个单行、多行，或两者均指定：
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
:::warning
- 多行：例如 ``{5-8}、{3-10}、{10-17}``
- 多个单行：例如 ``{4,7,9}``
- 多行与单行：例如 ``{4,7-13,16,23-27,40}``
:::

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```
也可以使用 // [!code highlight] 注释实现行高亮
```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code highlight]
    }
  }
}
```

## 代码块中聚焦
在某一行上添加 ``// [!code focus]`` 注释将聚焦它并模糊代码的其他部分。
此外，可以使用 ``// [!code focus:<lines>]`` 定义要聚焦的行数。
```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

## 代码块中的颜色差异
在某一行添加 ``// [!code --]`` 或 ``// [!code ++]`` 注释将会为该行创建 diff，同时保留代码块的颜色。
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

## 高亮“错误”和“警告”
在某一行添加 ``// [!code warning]`` 或 ``// [!code error]`` 注释将会为该行相应的着色。
```js
export default {
  data () {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

## 行号
可以通过以下配置为每个代码块启用行号：
- 可以在代码块中添加 :line-numbers / :no-line-numbers 标记来覆盖在配置中的设置。
- 还可以通过在 :line-numbers 之后添加 = 来自定义起始行号，例如 :line-numbers=2 表示代码块中的行号从 2 开始。

```ts {1}
// 默认禁用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// 启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers=2 {1}
// 行号已启用，并从 2 开始
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```

## 代码组
可以像这样对多个代码块进行分组：

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::


## 包含 markdown 文件
可以像这样在一个 markdown 文件中包含另一个 markdown 文件，甚至是内嵌的。
:::tip
也可以使用 @，它的值对应于源代码根目录，默认情况下是 VitePress 项目根目录，除非配置了 srcDir。
:::
例如，可以这样用相对路径包含 Markdown 文件：
<!--@include: ../life/travel/index.md-->
还支持选择行：
<!--@include: ../life/travel/index.md{1,}-->
所选行范围的格式可以是： ``{3,}、 {,10}、{1,10}``







