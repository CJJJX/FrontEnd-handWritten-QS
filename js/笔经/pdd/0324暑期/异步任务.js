// 请编写一个名为executeTasks的函数，该函数需接受一个异步任务数组
// 每个任务返回一个promise
// 你的目标是同时启动这些异步任务，并且在每个任务完成时，
//立即按照他们在数组中的原始顺序显示它们的结果
function executeTasks(tasks){
    let cur = 0
    let results = new Array(tasks.length).fill(null)
    const run = () => {
        while(results[cur]){
            if(results[cur].status === 1)
            console.log(results[cur].message)
            else
            console.log(`task ${cur+1} failed`)
            cur++
        }
    }
    tasks.forEach((p,i) => {
        p().then((res)=>{
            results[i] = { message: res,status: 1}
            run()
        })
        .catch((err)=>{
            results[i] = { message: err,status: 0}
            run()
        })
    });
}
const task1 = () => new Promise((resolve) => setTimeout(()=>resolve("Result of Task 1"),2000))
const task2 = () => new Promise((resolve) => setTimeout(()=>resolve("Result of Task 2"),1000))
const task3 = () => new Promise((resolve) => setTimeout(()=>resolve("Result of Task 3"),4000))
const task4 = () => new Promise((resolve,reject) => setTimeout(()=>reject("Some error"),500))
executeTasks([task1,task2,task3,task4])
