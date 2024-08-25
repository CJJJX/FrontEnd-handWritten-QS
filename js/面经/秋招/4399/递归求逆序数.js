// 输入2543，返回"3425"
function reverse(n) {
    let isNegtive = n < 0 ? true: false
    let res = ''
    function traversal(cur,res = '') {
        if(cur === 0)
        return res
        return traversal(Math.floor(cur/10),res + cur % 10)
    }
    return isNegtive ? '-' + traversal(Math.abs(n),res) : traversal(n,res)
}
console.log(reverse(-2543,''))