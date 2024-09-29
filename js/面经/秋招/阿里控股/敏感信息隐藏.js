// 将字符串中间四个字符隐藏为传入的字符，默认为*
// 1. 字符串长度小于等于4，返回字符串长度对应的*，如"1234" => "****"
// 2. 若字符串长度为奇数，隐藏中间四个字符，多出来的一个数放后面，如"123456789" => "12****789"
// 3. 若字符串长度为偶数，隐藏中间四个字符，如"12345678" => "12****78"
const hideSensitive = (str, char = "*") => {
    const len = str.length;
    if (len <= 4) return Array(len).fill(char).join("");
  
    const strArr = str.split("");
    const isEven = len % 2 === 0;
    // 写的比较丑陋，实际上不需要分奇偶
    if (isEven) {
      let startIndex = (len >> 1) - 2,
        endIndex = (len >> 1) + 1;
      for (let i = startIndex; i < endIndex; i++) {
        strArr[i] = char;
      }
    } else {
      let startIndex = (len >> 1) - 2,
        endIndex = (len >> 1) + 1;
      for (let i = startIndex; i < endIndex; i++) {
        strArr[i] = char;
      }
    }
    return strArr.join("");
  };
  