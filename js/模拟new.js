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

var myList =new LinkedList();
function LinkedList(){
	this.head =  null;
}
LinkedList.prototype.push = function(val){
		var node={
			value: val,
			next: null
		}
		if(!this.head) {
			this. head =node ;
		} 
		else{
			var current = this.head;
			while (current.next){
				curent = current.next
			}
			current.next =node;
		}
};
myList.push(2);
myList.push(3);
myList.push(4);
console.log(myList.head.next.val) 
    
