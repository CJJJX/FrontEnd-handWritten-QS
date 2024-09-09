// 百度场景题
const urls = []
for(let i = 0;i <= 10;i ++) {
    urls.push(`https://jsonplaceholder.typicode.com/todos/${i}`)
}
// concurRequest(urls,3).then((resps) => {
//     console.log(resps)
// })
// function concurRequest(urls,maxNum) {
//     return new Promise((resolve) => { 
//         if(urls.length == 0) {
//             resolve([])
//             return
//         }
//         const results = []
//         let index = 0 //下一个请求的下标
//         let count = 0 //当前请求完成的数量
//         // 发送请求
//         async function request() {
//             if(index === urls.length)
//             return
//             const i = index
//             const url = urls[index]
//             index++
//             console.log(url)
//             try {
//                const resp = await fetch(url)
//                // resp加入result
//                results[i] = resp
//             }catch(err) {
//                 results[i] = err
//             }finally {
//                 // 判断是否所有请求都完成
//                 count++
//                 if(count === urls.length) {
//                     console.log('over')
//                     resolve(results)
//                 }
//                 request() //之前的请求完成出栈，才能继续调用请求
//             }
            
//         }
//         const times = Math.min(maxNum,urls.length)
//         for(let i = 0;i < times;i ++) {
//             request()
//             console.log('i',i)
//         }
        
//     })
// }
// update 2024/08/25 zbwer 
class PromisePool {
    constructor(capacity) {
        this.capacity = capacity
        this.tasks = []
        this.running = 0
    }
    add(fn) {
        return new Promise((resolve,reject) => {
            this.tasks.push({
                fn,
                resolve,
                reject
            })
             this._run()
        })
    }
    _run() {
        while(this.tasks.length && this.running < this.capacity) {
           const {fn,resolve,reject} = this.tasks.shift()
           this.running++
           fn().then(resolve,reject).finally(() => {
            this.running--
            this._run()
           })
        }
    }
}
const pool = new PromisePool(2)
const sleep = function(time) {
    new Promise((resolve) => setTimeout(() => resolve(),time))
}
const addTask = (time,str) => {
    pool.add(() => sleep(time))
    .then(() => console.log(str))
}
addTask(10000,'1')
addTask(5000,'2')
addTask(3000,'3')
addTask(4000,'4')
addTask(5000,'5')
// 2 3 1 4 5