// 你先手写一个闭包，里面有一个对象，和获取对象的方法
let o = (function(){
    let obj = {
        name: 'xiao',
        age: 18
    }
    return {
        get: function(key){
            return obj[key]
        }
    }
})()
// 第一问 不能修改闭包的代码
// 如何读取出闭包中对象中的属性
Object.defineProperty(Object.prototype,'abc',{
    get(){
        return this
    }
})
console.log(o.get('abc'))
// 如何给闭包中对象添加一个nickName的属性 值为'hh'
let obj = o.get('abc')
obj.nickname = 'hh'
// 第二问
// 如何修改对象中的 age 为 20并且打印出来
obj.age = 20
console.log(obj)