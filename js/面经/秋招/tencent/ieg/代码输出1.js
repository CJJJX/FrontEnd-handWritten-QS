var a = 100;
function fn() {
alert(a); //因为fn作用域里var声明的a声明提升了，但赋值没提升
var a = 200;
alert(a);
}
fn();
alert(a);
var a;
alert(a);
var a = 300;
alert(a);
// undefined
// 200
// 100
// 100