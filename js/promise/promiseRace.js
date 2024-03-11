const promiseRace = function(promises) {
    return new Promise((resolve,reject)=>{
        if(promises.length==0)
        resolve([])
        else{
            for(let i = 0;i < promises.length;i ++){
                promises[i].then(
                    res => {
                        resolve(res)
                        return
                    },
                    err => {
                        reject(err)
                        return
                    }
                )
            }
        }
    })
}
let p3 = new Promise((resolve,reject) => {
    setTimeout(()=>resolve('p3'),500)
})
let p2 = new Promise((resolve,reject) => {
    setTimeout(()=>resolve('p2'),600)
})
let p1 = new Promise((resolve,reject) => {
    setTimeout(()=>resolve('p1'),700)
})
let promises = [p1,p2,p3]
promiseRace(promises).then(res => console.log(res))