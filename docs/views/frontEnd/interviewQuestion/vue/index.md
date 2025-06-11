
## vue2和vue3的区别？

:::warning 区别
- 性能优化
  
Vue3的虚拟DOM采用了更高效的 Diff算法，减少了渲染和更新的开销。

Tree-shaking 支持：Vue3的代码结构模块化，支持按需引入，减小了打包体积。

- Composition API
  
Vue3引入了Composition API，使代码更模块化、复用性更强。

使用 setup() 方法代替了部分选项式 API，通过函数的方式组织逻辑，代码更加清晰简洁。

- 响应式系统改进:

Vue3使用 Proxy 实现响应式，解决了 Vue2使用Object.defineProperty实现响应式的一些局限性，如无法监听新增属性和数组索引变化。

- 新特性：

Teleport：可以将组件的DOM渲染到指定的DOM节点之外，例如模态框、通知等。

Fragment 支持：Vue3支持组件返回多个根节点，不再需要单一根节点。

Vue3原生支持 TypeScript，提供更完善的类型推导和开发体验。

Vue3支持为一个组件绑定多个 v-model，并且可以自定义 prop 和 event 名称。
:::


## Vue 组件的通讯方式有哪些？

组件之间的通讯通常分为父子组件通讯和跨组件通讯。要注意，vue3 组件的通讯方式和 vue2 有一定的区别。
:::info 
父子组件通讯：
- props和emit
- 获取组件实例，调用属性和方法 
vue2:this.$parent/this.$children
vue3：通过ref直接引用组件
- 多v-model绑定和自定义属性名称

跨组件通信：
- Provide / Inject：父组件通过 provide 向后代组件传递数据，后代组件使用 inject 接收数据，适用于深层嵌套组件间的通信。
- vuex：通过全局状态管理库 Vuex 共享状态，实现跨组件通信（vue2）。
- pinia：Pinia 是 Vue 3 推荐的全局状态管理库，替代了 Vuex。
- 事件总线（Vue 2）：Vue 2 中可以通过Event Bus实现组件间的通信，但在 Vue 3 中不推荐使用。
- 全局事件处理器：通过在根组件$root或全局对象上监听事件，进行跨组件通信（Vue 3 推荐使用外部库，如 mitt）。
:::

## Vue 组件的生命周期
Vue 组件的生命周期是指组件从创建到销毁的整个过程，包括组件的初始化、渲染、更新和销毁等阶段。在Vue2和Vue3中，组件的生命周期有一些区别。
:::info vue2
创建阶段

1️⃣ beforeCreate：组件实例刚被创建，数据观测和事件/监听器设置之前。此时无法访问 data 、 computed 和 methods 等。 

2️⃣ created：组件实例已创建，数据观测、事件/监听器设置完成，此时可以访问 data 、 computed 和 methods 等，通常用于数据初始化。

挂载阶段

3️⃣ beforeMount：在挂载开始之前，模板已编译， el 和 template 已经确定，但尚未渲染。

4️⃣ mounted：组件实例挂载到 DOM 上之后，此时可以访问和操作 DOM。

更新阶段

5️⃣ beforeUpdate：数据发生变化，DOM 尚未更新。可以在这里做一些数据处理，避免不必要的渲染。

6️⃣ updated：数据变化，DOM 更新后调用。此时组件的 DOM 已经更新，可以访问和操作新的 DOM。

销毁阶段

7️⃣ beforeDestroy：组件实例销毁之前。可以在此阶段进行清理工作，例如移除事件监听器、定时器等。 

8️⃣ destroyed：组件实例销毁之后。此时，所有的事件监听器和子组件已被销毁。
:::

::: info vue3
创建阶段

1️⃣ onBeforeMount：等效于 Vue 2 中的 beforeMount ，在组件挂载之前调用。

2️⃣ onMounted：等效于 Vue 2 中的 mounted ，在组件挂载之后调用。

更新阶段

3️⃣ onBeforeUpdate：等效于 Vue 2 中的 beforeUpdate ，在数据更新之前调用。

4️⃣ onUpdated：等效于 Vue 2 中的 updated ，在数据更新并渲染之后调用。

销毁阶段

5️⃣ onBeforeUnmount：等效于 Vue 2 中的 beforeDestroy ，在组件卸载前调用。

6️⃣ onUnmounted：等效于 Vue 2 中的 destroyed ，在组件卸载后调用。

:::
::: warning setup
setup 作为 Vue3 的 Composition API 的一部分, 其内部函数的执行时机早于Mounted钩子。
```javascript
<script setup>
  import { ref, onMounted } from 'vue';
  console.log("setup");
  onMounted(() => {
  console.log('onMounted');
  });
  // 执行结果:setup onMounted
</script>
```
:::

## Vue 组件在哪个生命周期发送 ajax 请求？
created 钩子

优点： ✅ 更快获取数据：能尽早获取服务端数据，减少页面加载时间。 ✅ SSR 支持：支持服务器端渲染（SSR），在 SSR 环境中不会受到限制。

缺点 ❌ UI 未渲染时发起请求：如果需要操作 DOM 或渲染数据，可能导致闪屏问题

mounted 钩子

优点： ✅ DOM 可用：适合需要操作 DOM 或渲染数据后再发起请求的情况，避免闪屏。

缺点 ❌ 请求延迟：数据请求会稍微延迟，增加页面加载时间。 ❌ SSR 不支持：mounted 只在客户端执行，不适用于 SSR 环境。


## Vue 父子组件生命周期调用顺序

1️⃣ 创建阶段

- 父组件：beforeCreate ➡️ created
- 子组件：beforeCreate ➡️ created
- 顺序： 父组件的 beforeCreate 和 created 先执行 ，子组件的 beforeCreate 和 created 后执行。

原因：父组件需要先完成自身的初始化（如 data、computed 等），才能解析模板中的子组件并触发子组件的初始化。

2️⃣ 挂载阶段
- 父组件：beforeMount
- 子组件：beforeMount ➡️ mounted
- 父组件：mounted
- 顺序： 父 beforeMount → 子 beforeCreate→ 子 created→ 子 beforeMount→ 子 mounted → 父 mounted
  
原因：父组件在挂载前（beforeMount）需要先完成子组件的渲染和挂载，因为子组件是父组件模板的一部分。只有当所有子组件挂载完成后，父组件才会触发自身的 mounted。

3️⃣ 更新阶段
- 父组件：beforeUpdate
- 子组件：beforeUpdate ➡️ updated
- 父组件：updated
- 顺序： 父 beforeUpdate → 子 beforeUpdate → 子 updated → 父 updated
  
原因：父组件的数据变化会触发自身更新流程，但子组件的更新必须在父组件更新前完成（因为子组件可能依赖父组件的数据），最终父组件的视图更新完成。

4️⃣ 销毁阶段
- 父组件：beforeDestroy
- 子组件：beforeDestroy ➡️ destroyed
- 父组件：destroyed
- 顺序： 父 beforeDestroy → 子 beforeDestroy → 子 destroyed → 父 destroyed

原因：父组件销毁前需要先销毁所有子组件，确保子组件的资源释放和事件解绑，避免内存泄漏。

:::warning
注：vue3中，setup() 替代了 beforeCreate 和 created，但父子组件的生命周期顺序不变。
:::

## v-show 和 v-if 的区别
- 渲染方式： 💡v-if：条件为 true 时才会渲染元素，条件为 false 时销毁元素。 💡v-show：始终渲染元素，只是通过 CSS 控制 display 属性来显示或隐藏。
- 适用场景： 💡v-if：适用于条件变化不频繁的场景。 💡v-show：适用于条件变化频繁的场景。


## 为何v-if和v-for不能一起使用？
v-if 和 v-for 不能直接一起使用的原因，主要是因为它们在 解析优先级 和 逻辑处理 上存在冲突。
:::info
由于v-for 的解析优先级高于 v-if，同时使用 v-if 和 v-for，Vue 首先会循环创建所有dom元素，然后根据条件来判断是否渲染每个元素，这种方式可能导致 Vue 进行大量的 DOM 操作，性能较差。其次，v-for 会为每个循环项创建一个新的作用域，而 v-if 的条件如果依赖于这个作用域内的数据，可能导致判断逻辑异常。

为避免上述问题，vue官方推荐我们将 v-if 放到 v-for 外层，或者将 v-if 放置到 v-for 内部的单个节点上。

```javascript
<div v-if="show">
  <div v-for="item in list" :key="item.id">{{ item.name }}</div>
</div>
```
:::