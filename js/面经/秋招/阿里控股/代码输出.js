console.log(1)

setTimeout(() => {
    console.log(2)
},0)

new Promise((resolve,reject) => {
    console.log(3)
    resolve()
}).then(() => {
    console.log(4)
    new Promise((resolve,reject) => {
        console.log(5)
        resolve()
    }).then(() => {
        console.log(6)
    })
})

console.log(7)
// 1 3 7 4 5 6 2
