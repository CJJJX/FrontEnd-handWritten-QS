function _setTimeout(fn,delay,...args){
    let timer = setInterval(()=>{
        fn.apply(args)
        clearInterval(timer)
    },delay)
}