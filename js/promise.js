class Mypromise{
    constructor(executor){
        // 初始状态为pending
        this.status = 'pending'
        this.value = ''
        this.error = ''
        // 保存成功函数回调队列
        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []
        const resolve = (value) => {
            if(this.status === 'pending')
            this.status = 'fulfilled'
            this.value = value
            this.onFulfilledCallbacks.forEach(callback => callback(this.value))
        }
        const reject = (error) => {
            if(this.status === 'pending')
            this.status = 'rejected'
            this.error = error
            this.onRejectedCallbacks.forEach(callback => callback(this.error))
        }
        try{
            executor(resolve,reject)
        }catch(err){
            reject(err)
        }
    }

    then(onFulfilled,onRejected){
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : res => res
        onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err}
        if(this.status === 'fufilled'){
            onFulfilled(this.value)
        }else if(this.status === 'rejected'){
            onRejected(this.error)
        }else{
            // 如果pending状态，将回调函数加入对应队列
            this.onFulfilledCallbacks.push(onFulfilled)
            this.onRejectedCallbacks.push(onRejected)
        }
    }
}
const promise = new Mypromise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Hi')
    },1000)
})
promise.then(
    (res)=> {
        console.log(res)
    },
    (err) => {
        console.log(err)
    }
)