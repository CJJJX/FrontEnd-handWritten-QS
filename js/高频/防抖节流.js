// 防抖
function debounce(fn,delay){
    let timer = null
    return function(...args){
        //这里应该不需要this参数,正常闭包函数里的this就好
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>fn.apply(this,args),delay)
    }
}
// 节流
//① 立即执行
function throttle1(fn,delay){
    let last = 0
    return function(...args){
        // 初始last为0，Date.now必大于delay
        if(!last ||  Date.now() - last > delay){
            fn.apply(this,args)
            last = now
        }
    }
}
//② 延迟执行的定时器写法
function throttle2(fn,delay){
    let timer = null
    return function(this,...args){
        if(!timer){
            timer = setTimeout(()=>{
            fn.apply(this,args)
            timer = null //节流结束需要将定时器清空
            },delay)
        }
    }
}
