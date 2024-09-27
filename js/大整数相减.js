function Subtraction(a,b) {
    a = a.toString()
    b = b.toString()
    let arrA = a.split('').map(Number)
    let arrB = b.split('').map(Number)
    // 在不足位数的前面补0
    if(arrA.length > arrB.length) {
        while(arrB.length < arrA.length)
        arrB.unshift(0)
    }
    if(arrB.length > arrA.length) {
        while(arrA.length < arrB.length)
        arrA.unshift(0)
    }
    let res = ''
    let borrow = 0 // 1表示需要借位,0表示不需要借位
    for(let i = arrA.length - 1;i >= 0;i --) {
        let diff = arrA[i] - arrB[i] - borrow
        if(diff < 0) {
            diff += 10
            borrow = 1
        }else {
            borrow = 0
        }
        res = diff + res
    }
    return res
}
console.log(Subtraction('789','98'))