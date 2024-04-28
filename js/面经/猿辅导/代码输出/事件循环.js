async function test1(){
    console.log(1)
    setTimeout(() => {
        console.log(2)
    }, 200)
    console.log(3)
    new Promise((resolve, reject) => {
        resolve(4)
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
    await Promise.resolve(7).then(res => console.log(res))
    console.log(8)
}
test1()
// 1 3 4 7 8 2
// 5,6行加入throw new Error('err')? 则输出1 3 4 err 2