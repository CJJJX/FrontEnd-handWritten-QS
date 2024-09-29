// 不改变数组，空间复杂度O（1），时间复杂度 O（n) , 判断是否有重复元素
function isRepeat(arr) {
    let flag = false
    for(let i = 0;i < arr.length;i ++) {
        if(arr[i] < 0)
        return true
        arr[arr[i]] = -arr[arr[i]]
    }
    return flag
}
console.log(isRepeat([1,2,5,1,5,2]))