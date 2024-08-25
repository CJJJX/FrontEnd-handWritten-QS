console.log('script start')
requestAnimationFrame(() => console.log('requestAnimationFrame'))
async function async1(){
    await async2()
    console.log('async1 end')
}
async function async2(){
    console.log('async2 end')
}
async1()
setTimeout(() => {
    console.log('setTimeout')
},0)
Promise.resolve().then(() => {
    console.log('resolve1')
})
new Promise((res,rej) => {
    console.log('promise')
    res()
}).then(() => {
    console.log('promise1')
}).then(() => {
    console.log('promise2')
})
console.log('script end')