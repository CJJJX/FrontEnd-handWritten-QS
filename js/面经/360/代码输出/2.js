let obj = {
    a: 1
}
// obj按值传递，不影响外面的obj
function fn(obj){
    obj.a = 2
    obj = {
        b: 3
    }
}
fn(obj)
console.log(obj) //{a: 2}