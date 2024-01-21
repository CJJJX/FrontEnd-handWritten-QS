const a = [1,8,2,5,5,5,8]
let b
b = a.filter((item,index,arr)=>  arr.indexOf(item)===index)
console.log(a.filter((item,index,arr)=>  arr.indexOf(item)===index))
// new Set()将a转为有序的无重复集合
//Array.from()将数组对象,类数组对象或set对象转为数组
console.log(Array.from(new Set(a)))

console.log(b)