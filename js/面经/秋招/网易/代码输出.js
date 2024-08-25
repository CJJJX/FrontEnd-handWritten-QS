function fn1 () {
    console.log(v1)
    console.log(v2)
}
function fn2() {
    var v1 = 1
    var v2 = 2 //这里的var都是局部变量，只针对fn2
    fn1()
}
var v1 = 0
fn2()

// 0
// Uncaught ReferenceError: v2 is not defined