var name = ''
var age = 0
var person = {
    name: 'xiaoming',
    age: 18,
    getName: function () {
        console.log(this.name)
    },
    getAge: () => {
        console.log(this.age)
    }
}
person.getName()
person.getAge()
var getName = function () {
    console.log(this.name)
}
var getAge =  () => {
    console.log(this.age)
}
getName()
getAge()
//xiaoming
//undefined
//undefined
//undefined