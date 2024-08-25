Promise.myany = function(promises){
    return new Promise((resolve,reject) => {
        if(promises.length == 0){
            return resolve()
        }
        let res = []
        let index = 0
        for(let i = 0;i < promises.length;i++){
            promises[i].then(
                res => {
                    return resolve(res)
                },
                rej => {
                    res[i] = rej
                    if(++index == promises.length){
                        return reject(res)
                    }
                }
            )
        }
    })
    
}
let p3 = new Promise((resolve,reject) => {
    setTimeout(()=>reject('p3'),500)
})
let p2 = new Promise((resolve,reject) => {
    setTimeout(()=>resolve('p2'),600)
})
let p1 = new Promise((resolve,reject) => {
    setTimeout(()=>reject('p1'),700)
})
let promises = [p1,p2,p3]
Promise.myany(promises).then(res => console.log(res))