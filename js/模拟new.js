// 自定义new创建实例
function create(constructor,...args){
    let newObj = Object.create(constructor.prototype)
    // Object.craete()方法相当于下面两行代码
    // let obj = {}
    // obj.__proto__ = constructor.prototype
    let res = constructor.apply(newObj,args)
    // 如果调用构造函数返回的是对象则返回该对象，否则返回newObj
    return res instanceof Object ? res : newObj
}
function person(name='cjx',age='20'){
    this.name = name
    this.age = age
}
const person1 = create(person,'hhh','24')
console.log(person1)
    