//小红定义一个正整数是好数，当且仅当数位中，奇数的数量等于偶数的数量。
//例如，"1124"是好数。现在小红想知道，[l,r]区间内有多少好数。你能帮帮她吗?1 ≤l≤r≤ 10^18
function getNums(l,r){
    let cnt = 0
    for(let i = l;i < r;i ++){
        let cur = i.toString()
        let len = cur.length
        //总位数为奇数需要剪枝
        if(len % 2 != 0)
        continue
        let sum = 0
        // 总位数为偶数只需判断偶(奇)个数为总数的一半即可
        for(let j = 0;j< len;j ++){
            if(cur[j] == '0' || cur[j] == '2' || cur[j] == '4' || cur[j] == '6' || cur[j] == '8'){
                sum++
            }
        }
        if(sum == len /2)
        cnt++
    }
    return cnt
}
console.log(getNums(6,20))
const a = 10;