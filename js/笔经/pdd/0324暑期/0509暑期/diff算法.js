// 2.实现一个diff(newObj, oldObj)方法，找出newObj相对于oldObj的差异，具体要求如下

// ​	1.对一个key，oldObj中有，newObj中没有，或者值不相等，计为一个dif，反之不算diff;

// ​	2.相等的判定:要求===，对象类型要求递归判断，直到key对应的值为基本类型;

// ​	3.对象中叶子节点的value都是基本类型，基本类型仅需考虑Undefined、Null、String、Number、	Boolean;
// ​	4.输出要求:返回diff数组，数据项为字符串类型，值为key在oldObj中的路径，具体参考示例代码中	的示例输出;
// ​	5.输出要求:无任何diff时，返回空数组:
function diff(newObj,oldObj){

}
// 示例输入
const oldObj = {
    a: 1,
    b: {
        b1: true,
        b2: null
    },
    c: {
        c1: 'foo',
        c2: 'bar'
    },
    d: null
}
const newObj = {
    a: 1,
    b: {
        b1: false,
        b2: undefined
    },
    c: {
        c1: 'foo',
        c2: 'barbar'
    }
}
console.log(diff(newObj,oldObj))
// ['b.b1','b.b1','c.c2','d']