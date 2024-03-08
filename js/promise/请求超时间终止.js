function end(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('error')
        },time)
    })
}
let res = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('success')
    },4000)
})
let rej = end(3000)
// race返回的promise随着第一个promise的敲定而敲定
Promise.race([res,rej]).then(
    res => console.log(res),
    err => console.log(err)
)
