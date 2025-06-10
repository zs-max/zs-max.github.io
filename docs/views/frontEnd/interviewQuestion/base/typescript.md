

## ts优缺点以及使用场景
:::info 优点
- 静态类型，减少类型错误
- 有错误会在编译时提醒，而非运行时报错 —— 解释“编译时”和“运行时”
- 智能提示，提高开发效率
:::

:::warning 缺点
- 学习成本高
- 
某些场景下，类型定义会过于混乱，可读性不好，如下代码
```typescript
type ModelFieldResolver<T, TKey extends keyof T = any> = (
  this: T,
  ...params: T[TKey] extends (...args: any) => any ? Parameters<T[TKey]> : never
) => T[TKey]
```
:::
适用场景:
- 大型项目，业务复杂，维护人员多
- 逻辑性比较强的代码，依赖类型更多
- 组内要有一个熟悉 TS 的架构人员，负责代码规范和质量

## ts的基础类型

:::info 基础类型

- 基础类型：boolean、number、string、array、object、symbol
- 空值：null、undefined、any void never unknown
- Tuple 元组  Enum枚举
:::

## 数组 Array 和元组 Tuple 的区别是什么
数组元素只能有一种类型，元祖元素可以有多种类型。
```javascript
// 数组，两种定义方式
const list1: number[] = [1, 2, 3]
const list2: Array<string> = ['a', 'b', 'c']

// 元组
let x: [string, number] = ['x', 10]
```


## 枚举 enum 是什么？有什么使用场景？
enum 枚举，一般用于表示有限的一些选项，例如使用 enum 定义 4 个方向:
```javascript
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
// 我们可以获取某一个方向，用于展示或存储。这样代码更具有可读性和可维护性。
const d = Direction.Up
```

## keyof 和 typeof 有什么区别？
- typeof 是 JS 基础用法，用于获取类型，这个很简单。
- keyof 是 TS 语法，用于获取所有 key 的类型，例如
```javascript
interface Person {
  name: string
  age: number
  location: string
}

type PersonType = keyof Person
// 等价于 type PersonType = 'name' | 'age' | 'location'
```

## any void never unknown 有什么区别
:::info 区别
- any 任意类型（不进行类型检查）
- void 没有任何类型，和 any 相反
- never 永不存在的值的类型
- unknown 未知类型（一个更安全的 any）

```javascript
function fn(): void {} // void 一般定义函数返回值

// 返回 never 的函数，必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message)
}
function infiniteLoop(): never {
  while (true) {}
}

// unknown 比直接使用 any 更安全
const a: any = 'abc'
console.log(a.toUpperCase()) // 不会报错，但不安全


const b: unknown = 'abc'
// console.log( b.toUpperCase() ) // 会报错！！！
console.log((b as string).toUpperCase()) // 使用 as 转换类型，意思是告诉 TS 编译器：“我知道 b 的类型，我对安全负责”

```
:::

:::warning any和unknow的区别
any 和 unknown 的区别在于：any 关闭了类型检查，允许所有操作；而 unknown 则要求你在进行任何操作之前必须首先验证或断言该值的类型，从而提供了一种更加安全的方式来处理不确定类型的变量。

unknown 是更安全的 any ，如下代码：
```javascript
const a: any = 'x'
a.toString() // 不报错

const b: unknown = 'y'
// b.toString() // 报错
;(b as string).toString() // 不报错
```
:::


## TS 访问修饰符 public protected private 有什么作用
:::info
- public 公开的，谁都能用 （默认）
- protected 受保护的，只有自己和子类可以访问
- private 私有的，仅自己可以访问

```javascript
class Person {
  name: string = ''
  protected age: number = 0
  private girlfriend = '小丽'

  // public protected private 也可以修饰方法、getter 等

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

class Employee extends Person {
  constructor(name: string, age: number) {
    super(name, age)
  }

  getInfo() {
    console.log(this.name)
    console.log(this.age)
    // console.log(this.girlfriend) // 这里会报错，private 属性不能在子类中访问
  }
}

const zhangsan = new Employee('张三', 20)
console.log(zhangsan.name)
// console.log(zhangsan.age) // 这里会报错，protected 属性不能在子类对象中访问，只能在子类中访问
```
:::

:::warning #和private有什么区别
``#`` 在 TS 中可定义私有属性
```javascript
class Person {
  #salary: number
  constructor(
    private name: string,
    salary: number
  ) {
    this.#salary = salary
  }
}

const p = new Person('xxx', 5000)
// const n = p.name // 报错
const n = (p as any).name // 可以通过“投机取巧”获取到
console.log('name', n)

// const s = p.#salary // 报错
// const s = (p as any).#salary // 报错
```
- ``#``属性，不能在参数中定义,更私密一些
- private 属性，可通过 as any 强制获取

:::

## type 和 interface 共同和区别，如何选择
:::info 共同点
- 都能描述一个对象结构
- 都能被 class 实现
- 都能被扩展
```javascript
// 接口
interface User {
  name: string
  age: number
  getName: () => string
}

// 自定义类型
type UserType = {
  name: string
  age: number
  getName: () => string
}

// class UserClass implements User {
class UserClass implements UserType {
  name = 'x'
  age = 20
  getName() {
    return this.name
  }
}
```
:::

:::info 区别
- type 可以声明基础类型
- type 有联合类型和交差类型
- type 可以被 typeof 赋值
```javascript
// type 基础类型
type name = string
type list = Array<string>

// type 联合类型
type info = string | number

type T1 = { name: string }
type T2 = { age: number }
// interface T2 { age: number  } // 联合，还可以是 interface ，乱吧...
type T3 = T1 | T2
const a: T3 = { name: 'x' }
type T4 = T1 & T2
const b: T4 = { age: 20, name: 'x' }

// typeof 获取
type T5 = typeof b

//【补充】还有个 keyof ，它和 typeof 完全不同，它是获取 key 类型的
type K1 = keyof T5
const k: K1 = 'name'
```
:::


## 什么是泛型，如何使用它？
泛型 Generics 即通用类型，可以灵活的定义类型而无需写死。 
```javascript
const list: Array<string> = ['a', 'b']
const numbers: Array<number> = [10, 20]

interface User {
  name: string
  age: number
}
const userList: Array<User> = [{ name: 'x', age: 20 }]
```
泛型的使用:
- 用于函数
```javascript
// Type 一般可简写为 T
function fn<Type>(arg: Type): Type {
  return arg
}
const x1 = fn<string>('xxx')

// 可以有多个泛型，名称自己定义
function fn<T, K>(a: T, b: K) {
  console.log(a, b)
}
fn<string, number>('x', 10)
```
- 用于 class
```javascript
class SomeClass<T> {
  name: T
  constructor(name: T) {
    this.name = name
  }
  getName(): T {
    return this.name
  }
}
const s1 = new SomeClass<String>('xx')
```

- 用于 type
```javascript
function fn<T>(arg: T): T {
  return arg
}

const myFn: <U>(arg: U) => U = fn // U T 随便定义

```
:::warning
这里的 ``<U>``(arg: U) => U 定义了 myFn 的类型，它也是一个泛型函数，接受一个参数 arg，其类型是 U（同样，U 只是个占位符），并返回相同类型的值。换句话说，myFn 和 fn 具有相同的类型签名，只是使用了不同的类型参数名称（U 对 T）。
:::

- 用于 interface
```javascript
interface F1<T> {
  (arg: T): T;
}

function fn<T>(arg: T): T {
  return arg;
}

const myFn: F1<number> = fn;
```
:::warning
- 定义了一个函数接口 ``F1<T>``，它描述一个接收并返回 T 类型的函数；
- 定义了一个泛型函数 ``fn<T>``，功能与接口一致；
- 将 fn 赋值给 myFn，并且指定 myFn 只能用于 number 类型；
- TypeScript 会自动推导出此时 fn 应该当作 ``fn<number>`` 使用。
:::


## 什么是交叉类型和联合类型
交叉类型是将多个类型合并为一个类型，包含了所需的所有类型的特性。例如 T1 & T2 & T3
```javascript
interface U1 {
  name: string
  city: string
}
interface U2 {
  name: string
  age: number
}
type UserType1 = U1 & U2
const userA: UserType1 = { name: 'x', age: 20, city: 'beijing' }

// 可在 userA 获取所有属性，相当于“并集”
userA.name
userA.age
userA.city
```
:::warning 注意事项
- 两个类型的相同属性，如果类型不同（冲突了），则该属性是 never 类型
```javascript
// 如上代码
// U1 name:string ，U2 name: number
// 则 UserType1 name 是 never
```
- 基础类型没办法交叉，会返回 never
```javascript
type T = string & number // never
```
:::

## 联合类型 T1 | T2
一种“或”的关系。格式如 T1 | T2 | T3。代码示例如下
```javascript
interface U1 {
  name: string
  city: string
}
interface U2 {
  name: string
  age: number
}

function fn(): U1 | U2 {
  return {
    name: 'x',
    age: 20,
  }
}
```
:::warning 注意事项
- 基础类型可以联合
```javascript
type T = string | number
const a: T = 'x'
const b: T = 100
```
- 但如果未赋值的情况下，联合类型无法使用 string 或 number 的方法
```javascript
function fn(x: string | number) {
  console.log(x.length) // 报错
}
```
:::


## 是否用过工具类型
TS 工具类型有 Partial Required Omit ReadOnly 等，熟练使用 TS 的人都会熟悉这些工具类型。
- ``Partial<T>`` 属性设置为可选
```javascript
interface User {
  name: string
  age: number
}
type User1 = Partial<User> // 属性全部可选，类似 `?`
const u: User1 = {}
```
- ``Require<T>`` 属性设置为必选 （和 Partial 相反）
- ``Pick<T, K>`` 挑选部分属性  
```javascript
interface User {
  name: string
  age: number
  city: string
}
type User1 = Pick<User, 'name' | 'age'> // 只选择两个属性
const u: User1 = { name: 'x', age: 20 }
```
- ``Omit<T, K>`` 剔除部分属性（和 Pick 相反）
- ``ReadOnly<T>`` 属性设置为只读,相当于为每个属性都设置一遍readonly
```javascript
interface User {
  name: string
  age: number
}
type User1 = Readonly<User>
const u: User1 = { name: 'x', age: 20 }
// u.name = 'y' // 报错
```

## TS 这些符号 ? ?. ?? ! _ & | # 分别什么意思
- ? 可选属性，可选参数
```javascript
interface User {
  name: string
  age?: number
}
const u: User = { name: 'xx' } // age 可写 可不写

function fn(a: number, b?: number) {
  console.log(a, b)
}
fn(10) // 第二个参数可不传
```
- ?. 可选链：有则获取，没有则返回 undefined ，但不报错。
```javascript
const user: any = {
  info: {
    city: '北京',
  },
}
// const c = user && user.info && user.info.city
const c = user?.info?.city
console.log(c)
```
- ?? 空值合并运算符：当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。
```javascript
const user: any = {
  // name: '张三'
  index: 0,
}
// const n1 = user.name ?? '暂无姓名'
const n2 = user.name || '暂无姓名' // 某些情况可用 || 代替
console.log('name', n2)

const i1 = user.index ?? '暂无 index'
const i2 = user.index || '暂无 index' // 当是 0 （或 false 空字符串等）时，就不能直接用 || 代替
console.log('index', i1)
```
- ! 非空断言操作符：忽略 undefined null ，自己把控风险
```javascript
function fn(a?: string) {
  return a!.length // 加 ! 表示忽略 undefined 情况
}
```
- _ 数字分隔符：分割数字，增加可读性
```javascript
const million = 1_000_000
const phone = 173_1777_7777
```
其他的本文都有讲解
- ``&``交叉类型
- ``_`` 联合类型
- ``#`` 私有属性

## 什么是抽象类 abstract class
抽象类，不能直接被实例化，必须派生一个子类才能使用。
```javascript
abstract class Animal {
  abstract makeSound(): void
  move(): void {
    console.log('roaming the earch...')
  }
}

// const a = new Animal() // 直接实例化，报错

class Dog extends Animal {
  // 必须要实现 Animal 中的抽象方法，否则报错
  makeSound() {
    console.log('wang wang')
  }
}

const d = new Dog()
d.makeSound()
d.move()
```

## 如何扩展 window 属性，如何定义第三方模块的类型
```javascript
declare interface Window {
  test: string
}

window.test = 'aa'
console.log(window.test)
```

## 是否有过真实的 Typescript 开发经验，讲一下你的使用体验
在 Vue React 或其他框架使用时遇到的障碍？

在打包构建时，有没有遇到 TS 语法问题而打包失败？

有没有用很多 any ？如何避免 any 泛滥？

https://juejin.cn/post/6929793926979125255