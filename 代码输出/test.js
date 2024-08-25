function Fn(){}
Fn.prototype.add = function () {
    this.count++
    console.log(`this.count: ${this.count}`)
}
Fn.prototype.count = 0
let fn1 = new Fn()
fn1.add()
fn1.add()

let fn2 = new Fn()
fn2.add()