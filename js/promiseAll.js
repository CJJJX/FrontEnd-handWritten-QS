let p1 = new Promise((resolve,reject) => {
    setTimeout(()=>resolve('p1'),500)
})
let p2 = new Promise((resolve,reject) => {
    setTimeout(()=>resolve('p2'),600)
})
let p3 = new Promise((resolve,reject) => {
    setTimeout(()=>resolve('p3'),700)
})
let promises = [p3,p2,p1]
let resolvedArr = []
function promiseAll(promises){
    // 参数必须为数组
    if(!Array.isArray(promises))
    return TypeError('arguments must be a array')
    return new Promise((resolve,reject) => {
        let resolvedNum = 0
        for(let i = 0;i < promises.length;i ++){
            // Promise.resolve()将给定的值转换为一个Promise,也可直接使用promises[i]
            Promise.resolve(promises[i]).then(
                res => {
                    resolvedNum ++
                    resolvedArr[i] = res
                    // 所有promise处理完返回结果
                    if(resolvedNum == promises.length)
                    resolve(resolvedArr)
                },
                err => {
                    return reject(err)
                }
            )
        }
    })
}
promiseAll(promises).then(res => console.log(res))