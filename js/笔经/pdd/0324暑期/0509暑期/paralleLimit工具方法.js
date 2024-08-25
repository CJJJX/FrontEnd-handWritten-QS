// 生成一个异步任务方法
function createATask(resolvedValue){
    return () => 
    new Promise((resolve,reject) => {
        setTimeout(() => {
            Math.random() > 0.001 ? resolve(resolvedValue) : reject('falied')
        },Math.random()*2000)
    })
}
// 当任务执行完毕后，自动补充任务，始终保持正在执行的任务有'limit'个
// tasks为返回值为promise对象的函数数组
// limit为大于0的整数
// return 返回值与promise.all类似
function paralleLimit(tasks,limit){
    // 您的实现
}

// 生成十个异步任务
const tasks = new Array(10).fill(null).map((_,index) => createATask(index))

paralleLimit(tasks,3)
.then(console.log,console.log)

// 可能两种输出
//[0,1,2,3,4,5,6,7,8,9] 全部成功
//failed 有任务失败