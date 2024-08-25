class EventEmitter{
    constructor(){
        // 初始化对象
        this.subs = Object.create(null)
    }
    // 注册事件
    $on(eventType,handler){
        this.subs[eventType] = this.subs[eventType] || []
        this.subs[eventType].push(handler)
    }
    // 触发事件
    $emit(eventType){
        this.subs[eventType] && this.subs[eventType].forEach(handler => handler())
    }
}

let em = new EventEmitter()
em.$on('click',()=>{
    console.log('click1')
})
em.$on('click',()=>{
    console.log('click2')
})
em.$emit('click')
//完整版 2024.08.15
class EventBus {
    constructor() {
        this.events = {} //key,value为Set,而不是arr，因为Set更好删除，只需要delete
    }
    // 注册
    $on(eventType,handler) {
        // 不为undefined或null说明注册过 || 如果没有注册过会初始化一个Set
        (this.events[eventType] || (this.events[eventType] = new Set())).add(handler)
    }
    // 触发
    $emit(eventType,...args) {
        this.events[eventType]?.forEach(handler => handler(args))
    }
    // 注销
    $off(eventType,handler) {
        this.events[eventType]?.delete(handler)
    }
    //只注册一次
    $once(eventType,handler) {
        // 处理过的handler函数，执行完后需要注销
        const handle = (...args) => {
            handler(...args)
            this.$off(eventType,handle)
        }
        this.$on(eventType,handle) 
    }
}
const bus = new EventBus()
bus.$on('click',()=>{
    console.log('click3')
})
bus.$on('click',()=>{
    console.log('click4')
})
bus.$emit('click')