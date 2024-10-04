const obj = {a: [1,2,3],b: {c:4}}
const {a,b:{c}} = obj
console.log(a)  //[1,2,3]
console.log(b) //ReferenceError: b is not defined
console.log(c)