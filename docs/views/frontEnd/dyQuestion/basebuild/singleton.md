### 使用代理实现单例

在设计一个东西的时候，为了避免东西出现问题，一般有三种方式：
- 路径唯一 （只开放一条路，保持使用，这样就定制化比较高，比较难以通用）
- 错误提示 （包括编译错误、运行错误等）
- bug反馈  （错误买点、监控）


做架构设计，无论写一个简单那函数也好，还是做体系框架的脚手架也罢，都尽量把问题的隐患规避在前期，能做到路径唯一最好，至少就要做错误提示，尽早发现问题，问题发现越早越容易解决，成本越低;因为做架构是给整个团队、或者行业使用的，所以就不能出现问题

```javascript
// video.js 这样可以简单实现一个单例
class MyVideo{
    constructor(){
       console.log('new video')
    }
}
export default new MyVideo()

// 使用
import vdo from  './video.js'
console.log('new video')
```  
这种方式实际上是可以绕过去的
```javascript
import vdo from  './video.js'
const v2 = new vdo.constructor()
console.log(v2 === vdo)  // false
```
所以我们做的时候，不要给这种机会，把路堵上，具体怎么做？
```javascript
class MyVideo{
    constructor(){
       console.log('new video')
    }
}
// className 构造器
function singleton(className){
    let ins;
    const proxy = new Proxy(className,{
        construct(target,args){
            if(ins){
                return ins;
            }
            ins = Reflect.construct(target,args);
            return ins;
        }
    });
    proxy.prototype.constructor = proxy;
    return proxy
}
const MySingletonVideo = singleton(MyVideo)

const v1 = new MySingletonVideo();
const v2 = new MySingletonVideo();

export default new MySingletonVideo()
```        

最后我们就可以提取公共函数，实现单例模式
```javascript
function singleton(className){
    let ins;
    const proxy = new Proxy(className,{
        construct(target,args){
            if(ins){
                return ins;
            }
            ins = Reflect.construct(target,args);
            return ins;
        }
    });
    proxy.prototype.constructor = proxy;
    return proxy
}
```
