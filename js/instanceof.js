const myInstanceof = function(left,right){
    while(true){
        if(left === null || typeof right !== 'function')
        return false
        if(left.__proto__===right.prototype)
        return true
        left = left.__proto__
    }
}
// 测试用例
function Foo() {}
const obj = new Foo();
const str = 'str'
console.log(myInstanceof(obj,Object)) // true
console.log(myInstanceof(obj,Function)) // false
console.log(myInstanceof(str,String)) // true
console.log(myInstanceof(new Date(), Date)) // true