const name = 'nowcoder'
url = 'www.nowcoder.com'
console.log(delete name)//false
console.log(delete url)//true

const obj = {0:'Emir',2:'Alex',1:'Jack'}
console.log(Object.getOwnPropertyNames(obj))//[ '0', '1', '2' ]
console.log(Object.getOwnPropertyNames(''))//[ 'length' ]

class cls{}
class son extends cls{}
// son.__proto__指向类，son.prototype指向cls new出来的对象 
// cls[class cls] cls {}
console.log(son.__proto__ === son.prototype) //false
console.log(son.__proto__.prototype === cls.prototype) //true

class cl{}
console.log(typeof cl)//function
//cl是类 cl.prototype.construcotor是类的构造函数
console.log(cl === cl.prototype.construcotor)//false 

let objj = {
    getNum: function(){
        console.log(1)
        return this
    }
}
var getNum = function(){
    console.log(2)
}
let func = function(){
    // 这里没有用关键字声明，全局的getNum被覆盖
    getNum = function(){
        console.log(3)
    }
    return this
}
objj.getNum() //1
getNum() //2
func().getNum() //3
getNum() //3

let a = 1
const b = 2
console.log(window.a + window.b) //NAN(undefined与任何基础类型相加结果均为NAN)
console.log(a + b) //3
