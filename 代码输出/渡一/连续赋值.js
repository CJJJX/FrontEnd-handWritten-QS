var a = { n: 1 }
var b = a
a.x = a = { n:2 } //点运算符优先于赋值运算，a.x实际上是对原来的 a（也就是 b）进行操作。
console.log(a.x)
console.log(b.x)
// undefined
// {n:2}