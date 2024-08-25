const promise = new Promise((resolve,reject) => {
    console.log(1)
    reject(2)
    console.log(3)
})
promise.
catch((e) => console.log(e))
.then((e) => console.log(e))
setTimeout(() => console.log(5),0)
// 1 3 2 undefined 5