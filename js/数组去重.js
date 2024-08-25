// 1.map记录已出现过的元素
// 2.splice删除
Array.prototype.distinct = function(){
    let arr = this
    let res = []
    let i,j,len=arr.length
    for(i = 0;i < len;i ++){
        for(j = i+1;j< len;j++){
            if(arr[i] === arr[j]){
                arr.splice(j,1)
                len--
                j--
            }
        }
    }
    return arr
}
let arr = [1,2,3,4,4,1,1,2,1,1,1]
console.log(arr.toString())
console.log(arr.distinct())
// 3.对已排序的数组进行递归去重
// 4.利用forEach和indexof,indexof返回元素第一次出现的下标
// 通过判断key === indexof(arr[key])