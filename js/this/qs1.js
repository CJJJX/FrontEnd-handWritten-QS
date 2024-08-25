//显式绑定不能解决隐式丢失问题,如何解决
function foo() {
    setTimeout(function (){
        console.log('id:',this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 });//21
//1.箭头函数
function foo() {
    setTimeout(() => {
        console.log('id:',this.id);
    }, 100);
}
//2.保存this
function foo() {
    var self = this;
    setTimeout(function (){
        console.log('id:',self.id);
    }, 100);
}

