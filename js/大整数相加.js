// js超最大安全整数时需要用字符串做加法
function sum(a,b){
    a = a.toString()
    b= b.toString()
    let len = Math.max(a.length,b.length)
    // 对于位数较少的数空位补零
    a = a.padStart(len,'0')
    b = b.padStart(len,'0')
    let res = ''
    // 从最末尾开始相加
    let carry = 0
    for(let i = len - 1;i >= 0;i --){
        let cur = Number(a[i]) + Number(b[i]) + carry
        if(cur < 10){
            res = cur + res
            carry = 0
        }else{
            carry = 1
            res = cur - 10 + res
        }
    }
    return res
}
console.log(sum(799,99))