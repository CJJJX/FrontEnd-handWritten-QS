(function() {
    var a = b = 5;
})()
console.log(a)
console.log(b)

const num = {
    a: 10,
    add() {
        return this.a + 2
    },
    reduce: () => this.a - 2
}
console.log(num.add()) // 12
console.log(num.reduce()) // NAN

const promise = new Promise((resolve,reject) => {
    console.log(1)
    setTimeout(() => {
        console.log('timerStart')
        resolve('success')
        console.log('timerEnd')
    },0)
    console.log(2)
})
promise.then((res) => {
    console.log(res)
})
console.log(4)
// 1
// 2
// 4 
// timerStart
// timerEnd
// success