function A() {}
A.prototype.n = 1;
const b = new A(); //此处原型链已确认

A.prototype = {
    n: 2,
    m: 3
};

const c = new A();
console.log(b.n, b.m, c.n, c.m); 
// 1 undefined 2 3
function F() {}
Object.prototype.a = () => console.log("a")
Function.prototype.b = () => console.log("b")
const f = new F();
F.a(); 
f.b(); //没有函数肯定会报错
// a
// 报错