fn2()
fn1()
var fn1 = function() {
    console.log('1')
}
function fn2() {
    console.log('2')
}
// 2
// 报错VM148:2 Uncaught TypeError: fn1 is not a function