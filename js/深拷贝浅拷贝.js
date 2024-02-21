// 浅拷贝
const obj1 = {a: 1, b: {c: 1, d: 2}}
const obj2 = {...obj1}
obj2.b.c = 2
console.log(obj1.b.c) // 2
// 深拷贝
function deepClone(obj){
    if(obj == null || typeof obj !== 'object')//数值,字符串,布尔值,null,undefined(obj==null)
    return obj
    let res = {}
    if(Array.isArray(obj)){
        res = []
    }
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            res[key] = deepClone(obj[key])
        }
    }
    return res
}
const obj3 = deepClone(obj1)
obj3.b.c = 2
console.log(obj1.b.c) // 1
let age
console.log(deepClone(age)) // undefined