async function async1(){
    console.log('async1start1')
    await async2()
    console.log('async1end')
}
async function async2(){
    console.log('async2')
}
console.log('scriptstart')
setTimeout(function(){
    console.log('setTimeout')
},0)
async1()
new Promise(function(resolve){
    console.log('promise1')
    resolve()
}).then(function(){
    console.log('promise2')
})
console.log('scriptend')
// scriptstart
// async1start1
// async2
// promise1
// promise2
// scriptend
// async1end
// setTimeout