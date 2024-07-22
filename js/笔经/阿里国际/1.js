// 小红拿到了一个数组，她希望选择两个不相邻的数，
// 使得它们的和为偶数。小红想知道有多少种不同的取数方案
// 输入描述：第一行输入一个正整数n，代表数组的大小。第二行输入几个正整数ai，代表数组的元素。1 ≤ n,ai< 200000
// 输出描述：一个整数，代表取数方案数。
// 根据数组item个数的量级 推断时间复杂度要在onlogn
let arr = [1,2,3,4,5,7]
function violence (arr) {
    let cnt = 0
    // 暴力o(n^2)超时
    for(let i = 0;i < arr.length - 2;i ++) {
        // 确保不相邻
        for(let j = i + 2;j < arr.length;j ++) {
            if((arr[i] + arr[j]) % 2 === 0 )
            cnt++
        }
    }
    return cnt
}
function Optimized (arr) {
    // 分别筛选出偶数队列和奇数队列，只有偶偶，奇奇的和有可能为偶数,记录他们的下标
    let oddPairs = []
    let evenPairs = []
    arr.forEach((item,index) => {
        if(item % 2 === 0)
        evenPairs.push(index)
        else
        oddPairs.push(index)
    });
    // 下标数组已有序，无需sort
    console.log(oddPairs,evenPairs)
    let cnt = 0
    // 当碰到下标差大于2的即可加上后面元素的个数，因为有序数组后面元素下标差更大于2
    for(let i = 0;i < oddPairs.length - 1;i ++) {
        if(oddPairs[i+1] - oddPairs[i] < 2) 
        cnt += oddPairs.length - (i+1 + 1) // oddPairs[i+1]是相邻项，要多减个1
        else
        cnt += oddPairs.length - (i+1) // oddPairs[i+1]不是相邻项
    }

    for(let i = 0;i < evenPairs.length;i ++) {
        if(evenPairs[i+1] - evenPairs[i] < 2) 
        cnt += evenPairs.length - (i+1 + 1) // evenPairs[i+1]是相邻项，要多减个1
        else
        cnt += evenPairs.length - (i+1) // evenPairs[i+1]不是相邻项
    }
    return cnt
}
// 优化时间复杂度O(n*2) 最坏当前item找第二次就能找到，第一次若相邻，第二次必下表差大于等于2
// 比如index：【0,1,2,5】
console.log(Optimized(arr))
// 6
// 13 15 17 24 35 37