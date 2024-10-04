let obj1 = {
    name: '张三',
    getName() {
        console.log(this,'this')
        return this.name;
    }
};

let obj2 = {
    name: '李四',
    getName() {
        return super.getName();
    }
};
// 相当于obj2.__proto__ = obj1
Object.setPrototypeOf(obj2, obj1);
console.log(obj2.getName());
// 李四
// super不会改变this，this由最外层函数决定
// 另一个示例
class ProtoClass {  
    describe() {  
        console.log(this.name, 'is described by ProtoClass');  
    }  
}  
  
class IntermediateClass extends ProtoClass {  
    selfDescribe() {  
        super.describe(); // 在类中，super 正确地调用父类的方法，并且 this 绑定到当前实例  
    }  
}  
  
class FinalClass extends IntermediateClass {  
    constructor() {  
        super();  
        this.name = 'Final Object';  
    }  
}  
  
let obj3 = new FinalClass();  
obj3.selfDescribe(); // 输出：Final Object is described by ProtoClass