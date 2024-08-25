Promise.myResolve = function(value){
    return new Promise((resolve,reject) => {
        resolve(value)
    })
}
Promise.myRejct = function(value){
    return new Promise((resolve,reject) => {
        reject(value)
    })
}