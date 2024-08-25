// 1.实现一个对异步请求函数加锁的高阶函数，具体要求如下:
// 	1.函数名:lockFnAndReuseExsiting;
// 	2.输入:返回值为Promise对象的function;
// 	3.输出:返回值为Promise对象的function，当外部调用该function时，如果当前有正在进行中的用进行中请求的结果;
//模拟异步请求方法
function requestData(){
    return newPromise((resolve,reject)=>{
    const random= Math.random()
    setTimeout(()=>random > 0.5 ? resolve('success'):reject('fail'))
    })
}

// 工具方法
function lockFnAndReuseExsiting(fn){
    //您的实现
}
// 示例调用
const requestDataWithLock = lockFnAndReuseExsiting(requestData)

requestDataWithLock()
.then(console.log)
.catch(console.log)

requestDataWithLock()
.then(console.log)
.catch(console.log)
setTimeout(() => {
    requestDataWithLock()
    .then(console.log)
    .catch(console.log)
},3000)
// 示例输出1 ---------
// success
// success
// failed或success，不受前两次调用影响

// 示例输出2 ---------
// failed
// faied
// failed或success，不受前两次调用影响