//Promise.allSettled() 静态方法将一个 Promise 可迭代对象作为输入，
//并返回一个单独的 Promise。当所有输入的 Promise 都已敲定时（包括传入空的可迭代对象时），
//返回的 Promise 将被兑现，并带有描述每个 Promise 结果的对象数组
function promiseAllSettled(promises){
    
    return new Promise((resolve,reject) => {
        let settledNum = 0
        let settledArr = []
        let len = promises.length
        for(let i = 0;i < len;i ++){
                promises[i].then(
            res => {
                settledNum ++
                settledArr[i] = { status: 'FULFILLED',value: res}
                //if(settledNum == len) resolve(settledArr)
                console.log(settledArr.length,'eee')
                if(settledArr.length == promises.length) resolve(settledArr)
            },
            rej => {
                settledNum ++
                settledArr[i] = { status: 'REJECTED',value: rej}
                //if(settledNum == len) resolve(settledArr)
                console.log(settledArr.length,'eee')
                if(settledArr.length == promises.length) resolve(settledArr)
            }
        )
        }
    }
)}
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('p1')
    },500)
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('p2')
    },400)
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('p3')
    },300)
})
let promises = [p1,p2,p3]
promiseAllSettled(promises).then(res=>console.log(res))