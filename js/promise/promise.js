class Mypromise{
    constructor(executor){
        try{
            executor(this.resolve,this.reject)
        }catch(err){
            this.reject(err)
        }
    }
        // 初始状态为pending
        status = 'pending'
        value = ''
        error = ''
        // 保存成功函数回调队列
        onFulfilledCallbacks = []
        onRejectedCallbacks = []
        resolve = (value) => {
            if(this.status === 'pending')
            this.status = 'fulfilled'
            this.value = value
            // this.onFulfilledCallbacks.forEach(callback => callback(this.value))
            while(this.onFulfilledCallbacks.length)
            this.onFulfilledCallbacks.shift()(this.value)
        }
        reject = (error) => {
            if(this.status === 'pending')
            this.status = 'rejected'
            this.error = error
            // this.onRejectedCallbacks.forEach(callback => callback(this.error))
            while(this.onRejectedCallbacks.length)
            this.onRejectedCallbacks.shift()(this.error)
        }
        // then方法链式调用有误，还未实现
    //promise的链式调用(then中返回一个新promise)，then返回自己的时候需要报错，
    then(onFulfilled,onRejected){
        // then方法参数可选
        onFulfilled = onFulfilled ? onFulfilled : res => res
        onRejected = onRejected ? onRejected : err => {throw err}
        return new Promise((resolve,reject) => {
        if(this.status === 'fufilled'){
            // 上一个函数的返回值
            let lastRes = onFulfilled(this.value)
            // then方法将其传给下一个then方法成功的回调
            resolvePromise(lastRes,resolve,reject)
        }else if(this.status === 'rejected'){
            onRejected(this.error)
        }else{
            // 如果pending状态，将回调函数加入对应队列
            this.onFulfilledCallbacks.push(onFulfilled)
            this.onRejectedCallbacks.push(onRejected)
        }
    })
    }
    catch(failCallBack){
        return this.then(null,failCallBack)
    }
    finally(callback){
        return this.then(
            res => {
                return Mypromise.resolve(callback()).then(() => res)
            },
            rej => {
                return Mypromise.resolve(callback()).then(() => {throw rej})
            }
        )
    }
    static resolve(value){
        if(value instanceof Mypromise)
        return value
        return new Mypromise(resolve => resolve(value))
    }
    resolvePromise(x,resolve,reject){
        // 判断then的返回值是否普通值还是promise对象
        if(x instanceof Mypromise){
            // 如果是promise对象，调用then方法，继续判断
            x.then(resolve,reject)
        }
        else{
            // 如果是普通值，直接调用resolve
            resolve(x)
        }
    }
}
const promise = new Mypromise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Hi')
    },1000)
})
function other(){
    return new Promise((resolve,reject)=>{
       resolve('other')
    })
}
promise.then(
    (res)=> {
        console.log(res)
        return 100
    }
).then(
    (res) => {
        console.log(res)
    }
)