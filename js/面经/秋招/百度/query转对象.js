let url = 'https://www.baidu.com/?a=1&b=2&a=3&c=4'
//输出 {a:[1,2],b:2,c:4}
function test(url) {
    const obj = {}
    let start = url.split('').findIndex(item => item === '?')
    let arr = url.substring(start+1).split('&')
    arr.forEach(item => {
        const [key,value] = item.split('=')
        if(Array.isArray(obj[key])) {
            obj[key].push(obj[key])
        }else if(obj[key]) {
            obj[key] = [...obj[key],value]
        }else {
            obj[key] = value
        }     
    });
    return obj
}
console.log(test(url))