// 自定义new创建实例
function create(constructor,...args){
    let obj = Object.create(constructor.prototype)
    let res = constructor.apply(obj,args)

    return res instanceof Object ? res : obj
}
function person(name='cjx',age='20'){
    this.name = name
    this.age = age
}
const person1 = create(person,'hhh','24')
console.log(person1)
    