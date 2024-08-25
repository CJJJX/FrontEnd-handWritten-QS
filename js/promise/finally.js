let p2 = new Promise((resolve,reject) => {
    setTimeout(()=>reject('pp'),300)
})
Promise.prototype.myFinally = function(callback){
    this.then(
        res => Promise.resolve(callback()).then(()=>res),
        err => Promise.resolve(callback()).then(()=>{throw err})
    )
}
p2.then(res => console.log(res),rej => console.log(rej))
.finally(()=>console.log('finally'))