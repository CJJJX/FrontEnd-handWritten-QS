// await后如果有代码将后面的代码推入微队列，没有则将'async标识的函数完成'推入微队列
// 'async标识的函数完成'出微队列后，才能将后面的代码加入微队列
// 如：微：asy2执行完成
// 微：2
async function asy1(){
    console.log(1)
    await asy2()
    console.log(2)
}

const asy2 = async () => {
    await setTimeout(() => {
        Promise.resolve().then(() => {
            console.log(3)
        })
        console.log(4)
    }, 0);
}

const asy3 = async () => {
    Promise.resolve().then(() => {
        console.log(6)
    })
}

asy1()
console.log(7)
asy3()
// 1 7 6 2 4 3