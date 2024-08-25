let obj = {
    name: 'obj',
    foo(){
        function fn1(){
            console.log(this,'1') //window
        }
        fn1()
        let fn2 = () => {
            console.log(this,'2') //obj
        }
        fn2()
    },
    bar: () => {
        function fn1(){
            console.log(this,'3') //window
        }
        fn1()
        let fn2 = () => {
            console.log(this,'4') //window
        }
        fn2()
    }
}
obj.foo()
obj.bar()