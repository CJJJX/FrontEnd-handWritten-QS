//字符串数组有序化(leetcode 944删列造序改编)
// 给定一个字符串数组A，字符串由小写英文字母组成，每个字符串长度相同。
//现在，对于每个字符串，我们需要删除几个相同索引的字符，
//假定删除字符的索引集合为D，使得删除字符后的字符串数组按照字典序排序，
//并且我们希望删除的字符数量最小,请你给出相应的最小值。
// 示例1：input ["xc","yb","za"] output:0 说明：有序不需要删除
// 示例2：input ["ca","bb","ac"] output:1 说明：可以删除索引为0的字符，即D={0}，删除字符后的数组为["a","b","c"],按照字典序排序了
// 示例3：input["zyx", "wyu", "tsr"] output:3 说明：必须全部删除，即D={0，1，2}
function minDeletionSize(A) {
    if(A == null || A.length == 0)
    return  0
    let delCnt = 0
    let rows = A.length
    let cols = A[0].length
    let flag = true
    for(let i = 0;i < cols;i ++){
        for(let j = 0;j < rows - 1;j ++){
            if(A[j][i] > A[j+1][i]){
                if(i == 0)
                flag = false
                delCnt++
                break
            }   
        }
    }
    // 第一列有序直接返回0
    if(flag)
    return 0
    return delCnt
}

console.log(minDeletionSize(["xc","yb","za"])); // 输出：0
console.log(minDeletionSize(["ca","bb","ac"])); // 输出：1
console.log(minDeletionSize(["zyx", "wyu", "tsr"])); // 输出：3