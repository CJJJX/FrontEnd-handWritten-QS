
Function.prototype.myCall = function(context,...args){
    args = args || []
    context = context || window
    const key = Symbol()
    context[key] = this
    const res = context[key](...args)
    delete context[key]
    return res
}
Function.prototype.myApply = function(context,args){
    args = args || []
    context = context || window
    const key = Symbol()
    context[key] = this
    const res = context[key](...args)
    delete context[key]
    return res 
}
Function.prototype.myBind = function(context,...outerArgs){
    const self = this
    return function(...innerArgs){
        return self.myApply(context,[...outerArgs,...innerArgs])
    }
}
const car = {
    name: 'Teslla',
    year: 5 
}
const animal = {
    id: 1
}
const func = function(val,val1){
    console.log(this)
    console.log(val,val1)
}
func.myCall(car,1,2)
func.myApply(car,[3,4])
const fn =  func.myBind(animal,5,6).myBind(car,7,8)// 7，8传入了20行的outer，但是23行的outer是第一次传入的5，6(闭包变量驻留)
console.log(fn()) //fn()没有返回值，所以最后多打印个undefined