let foo = 1
function fn(){
    foo = 2 //此时修改的是函数foo,而函数在js不可变，此行代码无实际效果
    function foo(){ //foo会提升到fn函数中的顶部
        return 3
    }
}
fn()
console.log(foo) //1