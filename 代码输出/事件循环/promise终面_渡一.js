Promise.resolve() //pr1
.then( () => {    //p0  
    console.log(0)
    return Promise.resolve(4)
}) //p4
.then((res) => {
    console.log(res)
})

Promise.resolve() //pr2
.then( () => { //p1
    console.log(1)
})
.then( () => { //p2
    console.log(2)
})
.then( () => { //p3
    console.log(3)
})
.then( () => { //p4
    console.log(4)
})
.then( () => { //p5
    console.log(5)
})
.then( () => { //p6
    console.log(6)
})
// 0 1 2 3 4 5 6
// then中的回调函数返回一个promise*时，then所生成的Promise是如何完成的？
// 将 'promise*.then(()=>then所生成的promise完成)' 放入微队列

// 微队列
// f0 1
// p4.then(()=>p0完成) 1    ---输出0
// 1 ()=>p0完成             ---输出1，2进微队列
// ()=>p0完成 2
// p0完成                   ---输出2，3进微队列p0完成则4进微队列
// 4                       ---输出4，5进微队列
// 5                       ---输出5，6进微队列
// 6                       ---输出6，结束


