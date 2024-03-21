for(var i = 1;i <= 3;i ++){
    setTimeout(function(){
        console.log(i)
    },0)
}//4 4 4

function Fn(){}
Fn.prototype.add = function () {
    this.count++
    console.log(`this.count: ${this.count}`)
}
Fn.prototype.count = 0
let fn1 = new Fn()
fn1.add() //1
fn1.add() //2

let fn2 = new Fn()
fn2.add() //1

function f1(){
    console.log(v1)
    console.log(v2)
}
function f2(){
    var v1 = 1
    var v2 = 2
    f1()
}
var v1 = 0
f2() //报错 v2 is not defined