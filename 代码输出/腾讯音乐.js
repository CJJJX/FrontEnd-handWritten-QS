function fn(a){
    console.log(a)
    var a = 2
    // 函数声明会被提升到作用域的顶部
    function a(){}
    console.log(a)
}
fn(1)
//[Function: a]
//2
