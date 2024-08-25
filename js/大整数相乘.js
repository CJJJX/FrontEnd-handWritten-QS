// 
function multiply(num1,num2) {
    num1 = num1.toString()
    num2 = num2.toString()
    let n = num1.length
    let m = num2.length
    let v = new Array(n + m).fill(0)
    let res = ''
    for(let i = 0;i < n;i ++) {
        for(let j = 0;j < m;j ++) {
            let num1_item = num1[n - i - 1] - '0'
            let num2_item = num2[m - j - 1] - '0'
            v[i + j] += num1_item * num2_item
        }
    }
    for(let k = 0,carry = 0;k < v.length;k ++) {
        v[k] += carry
        carry = Math.floor(v[k] / 10)
        v[k] = v[k] % 10
    }
    for(let i = v.length - 1;i >= 0;i --) {
        if(v[i] === 0 && res.length === 0)
        continue
         res += v[i]
    }
   
    return res.length > 0 ? res : '0'
}
console.log(multiply(199,99))