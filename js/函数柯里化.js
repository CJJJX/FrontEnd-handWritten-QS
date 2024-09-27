function curry(fn){
    return function curried(...args){
        //当收集的参数达到原函数的参数个数时，执行原函数
        if(args.length >= fn.length){
            return fn.apply(this,args)       
        }else{
            //否则继续收集参数
            return function(...moreArgs){
                return curried.apply(this,args.concat(moreArgs))
            }
        }
    }
}
let sum = function(a,b,c){
    console.log(a+b+c)
}
let curried = curry(sum)
let fn1 = curried(1)
let fn2 = fn1(2)
fn2(3)
curried(1)(2)(3)
curried(1,2)(3)