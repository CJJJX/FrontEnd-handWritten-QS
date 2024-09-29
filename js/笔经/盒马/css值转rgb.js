// function toRGB(val){

// }
// let val1 = '#0000FF'
// let val2 = '#A37'
// let val3 = '#huahs'
function toRGB(val) {  
    // 检查是否为有效的六位或三位十六进制颜色代码  
    if (/^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(val)) {  
        // 如果是三位，则每个字符重复一次  
        if (val.length === 4) {  
            val = '#' + val.charAt(1).repeat(2) + val.charAt(2).repeat(2) + val.charAt(3).repeat(2);  
        }  
  
        // 提取RGB值  
        let r = parseInt(val.substring(1, 3), 16);  
        let g = parseInt(val.substring(3, 5), 16);  
        let b = parseInt(val.substring(5, 7), 16);  
  
        // 返回RGB字符串  
        return `rgb(${r}, ${g}, ${b})`;  
    } else {  
        // 非法或无效的十六进制颜色代码  
        return 'Invalid hex color code';  
    }  
}  
  
// 测试  
let val1 = '#0000FF';  
let val2 = '#A37';  
let val3 = '#huahs';  
  
console.log(toRGB(val1)); // 应输出 rgb(0, 0, 255)  
console.log(toRGB(val2)); // 应输出 rgb(163, 51, 119)  
console.log(toRGB(val3)); // 应输出 Invalid hex color code
