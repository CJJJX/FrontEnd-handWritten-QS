const obj = {
    arr: [1,2,3],
    a: 4,
    c: new Date()
}
// 循环引用
obj.sub = obj
obj.arr.push(obj)
// weakMap的键是弱引用，当键对象被垃圾回收时
// 对应键值也会被自动移除，避免内存泄漏
// 如拷贝完成，obj不会再使用
// 相比weakMap，map仍然持有obj的引用，导致obj无法被垃圾回收
function deepClone(target,map = new WeakMap()){
    // 基础类型直接返回，target == null处理null和undefined
    if(target == null || typeof target !== 'object')
    return target
    let constructor = target.constructor
    // 函数 正则 日期 es6新对象执行构造
    if(/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name))
    return new constructor(target)
    // map标记每一个出现过的属性，避免循环引用无限递归
    if(map.get(target))
    return map.get(target)
    map.set(target,true)
    let result = Array.isArray(target) ? [] : {}
    for(let prop in target){
        // 判断prop是target自身的属性，不是原型链上继承的属性
        if(target.hasOwnProperty(prop))
        result[prop]  = deepClone(target[prop],map)
    }
    return result
}
let newObj = deepClone(obj)
// test
console.log(newObj.sub !== obj.sub)// true
console.log(newObj.arr !== obj.arr)// true
console.log(newObj.arr[3] !== obj)// true
console.log(newObj.arr[3] === newObj)// false