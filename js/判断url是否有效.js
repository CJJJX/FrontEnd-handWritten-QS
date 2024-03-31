// 方案1 使用浏览器的url API
function isValidUrl(str){
    try{
        new URL(str)
        return true
    }catch(_){
        return false
    }
}
const url = 'http://example.com'
if(isValidUrl(url)){
    console.log('valid')
}else{
    console.log('Invalid')
}
// 方案2 正则
function isURL(str) {
    // 匹配常见的 URL 格式
    const pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return pattern.test(str);
  }
  
  // 测试
  console.log(isURL('https://www.example.com')); // true
  console.log(isURL('ftp://ftp.example.com/file.txt')); // true
  console.log(isURL('www.example.com')); // false
  console.log(isURL('invalid-url')); // false