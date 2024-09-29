var length = 5
function a () {
    console.log(this.length) //undefined
    function b(fn) {
        fn()
        arguments[0]()
    }
    //b(a,1)
}
a()
// 一直输出5，随后栈溢出