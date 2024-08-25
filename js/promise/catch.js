let p2 = new Promise((resolve,reject) => {
    setTimeout(()=>reject('p2'),600)
})
Promise.prototype.myCatch = function(failCallBacks){
    return this.then(null,failCallBacks)
}
p2.catch(err => console.log(err))
