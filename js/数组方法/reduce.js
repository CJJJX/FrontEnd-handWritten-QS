Array.prototype._reduce = function (callBack,init) {
    let res = init ? init : this[0]
    let curIndex = init ? 0 : 1
    for(curIndex;curIndex < this.length;curIndex++)
    res = callBack(res,this[curIndex],curIndex,this)
    return res
}
/* callback有四个参数
1. accumulator 累加器,记录累加结果
2. curValue 当前元素的值
3. curIndex 当前数组下标
4. arr 原数组本身
*/
console.log([1,2,3]._reduce((left,right) => left + right,5))