// 将字符串转为驼峰格式
// 将'-'连接的字符串转换为驼峰格式
// ex: "get-element-by-id" -> "getElementById"
// ex: "-width" -> "Width"
function camelCase(str){
    // 去除开头的-和_
    str = str.replace(/^[-_]+/,'')
    // 将字符串中的-_后的字母改为大写
    return str.replace(/[-_]+([a-z])/g,function(match,group){//捕获组为([a-z])
        //match是匹配子串,group是捕获组
        return group.toUpperCase()
    })
}
let str = 'get-element-by-id'
str = camelCase(str)
console.log(str)