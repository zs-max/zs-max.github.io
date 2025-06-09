# HTML相关场景题目

### 开发一个无线下拉
开发一个无限下拉加载图片的页面，如何给每个图片绑定 click 事件？

:::info 答案
- 利用事件委托实现，避免重复绑定事件，性能高，适合动态加载的场景。
```javascript
<div id="image-container" style="height: 400px; overflow-y: scroll; border: 1px solid #ccc;">
  <!-- 加载图片 -->
</div>
<script>
  const container = document.getElementById('image-container')
  // 模拟 API 请求加载图片
  let page = 1 // 当前加载的页码
  const loadImages = () => {
    for (let i = 1; i <= 10; i++) {
      const img = document.createElement('img')
      img.src = `https://via.placeholder.com/150?text=Image+${(page - 1) * 10 + i}`
      img.style.margin = '10px'
      img.alt = `Image ${(page - 1) * 10 + i}`
      img.className = 'image-item' // 添加统一的类名
      container.appendChild(img)
    }
    page++
  }

  container.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
      alert(`You clicked on ${event.target.alt}`)
    }
  })

  container.addEventListener('scroll', () => {
    if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
      loadImages() // 加载更多图片
    }
  })

  loadImages()
  </script>
```
:::


:::warning 事件冒泡和委托
- 事件冒泡:当一个元素上的事件被触发的时候，这个事件不仅仅会在该元素上面触发，还会像父级传播，知道顶层元素（document/window对象）

例如，如果你在一个包含在另一个元素内的按钮上触发了一个点击事件，首先会执行按钮上的事件处理器，然后是它的父元素的事件处理器，以此类推，直到文档的根节点。

```javascript
document.getElementById('button').addEventListener('click', function(event) {
    console.log('Button clicked');
});

document.getElementById('container').addEventListener('click', function() {
    console.log('Container clicked (via bubbling)');
});
```

- 事件委托：一种利用事件冒泡原理的技术。它允许你为一个父元素设置事件监听器，来处理其子元素发生的事件。好处是，如果子元素是动态添加的或者有大量相似的子元素，你不需要为每个子元素单独绑定事件监听器。通过事件委托，你可以减少内存消耗，并简化代码维护。
```javascript
document.getElementById('list').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'LI') {
        console.log('List item clicked:', event.target.textContent);
    }
});
```
事件冒泡是一种事件传播机制，而事件委托则是一种编程模式，它利用了事件冒泡的特点来实现更高效的事件处理。
:::