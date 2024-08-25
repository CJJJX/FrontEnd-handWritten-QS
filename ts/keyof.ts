const messageColor = {
    error: '红色',
    warn: '黄色'
}
// typeof将对象转为interface类型，keyof能获取类型中key对应的联合类型
// 这里typeof messageColor 会生成
// type messageColor = {
    //error: string,
    //warn: string
    
//}
const message = (msg:string,type: keyof typeof messageColor) => {
    console.log(msg,messageColor[type])
}
message('警告','warn')

enum cjx {
    a = 1,
    b = 2
}
type cjxKeys = keyof typeof cjx
// type test<T> = a.a | a.b
