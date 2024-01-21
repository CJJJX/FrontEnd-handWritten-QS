var Singleton = function(name){
    this.name =name
}
Singleton.prototype.getName = function(){
    return this.name
}
// 正确实现
var GetInstance = (function () {
    var instance = null
    return function(name){
        if(!instance){
           instance = new Singleton(name)
        }
        return instance
    }
})()
// 错误实现
function GetInstance2 () {
    var instance = null
    return function(name){
        if(!instance){
           instance = new Singleton(name)
        }
        return instance
    }
}
// 测试单例模式的实例，所以a === b
var a = GetInstance('aa')
var b = GetInstance('bb')
console.log(a===b) //true
console.log(b) //Singleton { name: 'aa' }
var c = GetInstance2()('cc')
var d = GetInstance2()('dd')
console.log(c===d) //false 因为GetInstance2每次调用的时候instance被重新定义为null
console.log(d) //Singleton { name: 'dd' }