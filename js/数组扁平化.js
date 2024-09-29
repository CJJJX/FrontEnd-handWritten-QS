const arr = [
    [1, 2, 9],
    [2, 3, 3, 2],
    [3, 4, 5, [6, 7, 9]],
    0
]
// 不可以用箭头函数写法,这里箭头函数this会指向window
Array.prototype.myFlatten = function () {
    let res = []
    for (let item of this) {
        if (Array.isArray(item)) {
            res = res.concat(item.myFlatten())
        } else {
            res.push(item)
        }
    }
    return res
}
// 2024/05/14优化
Array.prototype.myFlatten = function (depth = 1) {
    // 创建一个空数组存储结果
    let res = []
    // 递归函数，用于扁平化数组  
    function flatten(array, depth) {
        let tempResult = [];

        for (let item of array) {
            // 如果当前深度大于0且当前项是数组，则递归调用flatten  
            if (depth > 0 && Array.isArray(item)) {
                tempResult.push(...flatten(item, depth - 1)); // 使用扩展运算符将结果添加到tempResult中  
            } else {
                // 否则，将当前项添加到tempResult数组中  
                tempResult.push(item);
            }
        }
        // 返回扁平化的数组  
        return tempResult;
    }

    // 调用递归函数，并将结果添加到result数组中  
    res.push(...flatten(this, depth));

    // 返回结果数组  
    return res;
}
// 2024/07/29更新
Array.prototype.myFlatten = function(depth=Infinity) {
    let res = []
    for(let item of this) {
        if(Array.isArray(item) && depth > 0) {
            res.push(...item.myFlatten(depth-1))
        }else{
            res.push(item)
        }
    }
    return res
}
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
console.log('emm', arr.myFlatten())
// arr.toString()方法也能将数组拍平
console.log(arr.toString().split(',').map(Number))
// 用正则实现
console.log(JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']'))
// 用reduce实现
console.log(arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? cur.myFlatten() : cur), []))
// 用flat API
console.log(arr.myFlatten())
