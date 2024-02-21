let a = [1,1,1,3,3,3,2,2,2,4,4,4,5,5,5,2,2,2,7];  
    // 实现一个函数，返回如下结果
    // [1,3,2,4,5,2,7]
function AdjacentDeduplication(arr){ //相邻去重
    for(let i = 0;i< arr.length;i++){
        if(a[i]===a[i+1])
        a[i]=0
    }
    return arr.filter(item => item!==0)
}
console.log(AdjacentDeduplication(a))

