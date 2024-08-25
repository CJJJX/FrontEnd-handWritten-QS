var a = 1
// @ts-nocheck
(function () {
    console.log(a)
    a = 5
    var a = 20
    console.log(window.a)
    console.log(a)
})()

// undefined 声明提升,赋值20没提升
// 1 a = 5赋值的是局部变量
// 10