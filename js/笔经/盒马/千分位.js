function myFormat(number){
    number = parseFloat(number).toFixed(2)
    let formatNum = number.toString()
    
}
console.log(myFormat('1234.556'))
// 力扣 1556
var thousandSeparator = function(n) {
    let str = String(n)
    let len = str.length
    if(len < 4)
    return str
    let res = []
    for(let i = len - 1;i >= 0;i = i - 3) {
      res.unshift(str[i])
      res.unshift(str[i-1])
      res.unshift(str[i-2])
      res.unshift('.')
    }
    res.shift()
    return res.join('')
  };
  console.log(thousandSeparator('-1234556'))  