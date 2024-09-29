function Person() {
    this.age = 0
    setTimeout(() => {
        this.age++
        console.log(this.age)
    },1000)
    setTimeout(function() {
        this.age++
        console.log(this.age)
    },1000)
}
const p = new Person()

//1
//NAN