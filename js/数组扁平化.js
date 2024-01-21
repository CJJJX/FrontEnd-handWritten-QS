const arr = [
    [1,2,9],
    [2,3,3,2],
    [3,4,5,[6,7,9]],
    0
]
// 不可以用箭头函数写法,这里箭头函数this会指向window
Array.prototype.myFlatten = function(){
    let res = []
    for(let item of this){
        if(Array.isArray(item)){
           res = res.concat(item.myFlatten())
        }else{
            res.push(item)
        }
    }
    return res
}
// 用map实现
console.log(arr.myFlatten())