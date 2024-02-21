async function a(){
    console.log(1)
    await console.log(2)
    await console.log(3)
    console.log(4)
}
a()
new Promise(function(resolve,reject) {
    console.log(5)
    resolve(6)
}).then((res) => console.log(res))
setTimeout(()=>{
    console.log(7)
},0)
console.log(8)
// 1 2 5 8 3 6 4 7