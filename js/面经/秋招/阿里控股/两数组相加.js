let l1 = [2,4,3],l2 = [5,6,4]
// 暴力
function add(l1,l2) {
    l1 = l1.reverse().join('')
    l2 = l2.reverse().join('')
    return (parseInt(l1) + parseInt(l2)).toString().split('').reverse().map(Number)
}
console.log(add(l1,l2))
// 输出[7,0,8]
// 342 + 465 = 807
// 常规
let l3 = [2,4,3],l4 = [5,6,4]
function add1(l1,l2) {
    let index1 = 0,index2 = 0,carry = 0,res = [],index = 0
    while(index1 < l1.length || index2 < l2.length || carry) {
        let num1 = index1 < l1.length ? l1[index1] : 0
        let num2 = index2 < l2.length ? l2[index2] : 0
        let tmpNum = (num1 + num2 + carry) % 10
        carry = (num1 + num2 + carry) >= 10 ? 1 : 0
        res[index++] = tmpNum
        index1++
        index2++
    } 
    return res
}
console.log(add1(l3,l4))
