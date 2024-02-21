foo(); // 输出 'foo2'，因为函数声明会被提升，最后的函数 foo 覆盖之前的函数声明

var foo = function () {
  console.log('foo1');
};
foo(); // 输出 'foo1'，此时 foo 已经成为函数表达式，覆盖 var foo 的声明

var foo = function () {
  console.log('foo2');
};
foo(); // 输出 'foo2'，此时 foo 被重新赋值为新的函数表达式

function foo() {
  console.log('foo1');
}
foo(); // 输出 'foo2'，函数声明被提升，但在此之前 foo 已经被重新赋值为新的函数表达式

function foo() {
  console.log('foo2');
}
foo(); // 输出 'foo2'，最终的函数声明覆盖之前的函数声明
