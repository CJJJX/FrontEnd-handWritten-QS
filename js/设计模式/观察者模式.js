// 发布者-目标
class Dep{
    constructor(){
        // 记录所有观察者
        this.subs = []
    }
    // 添加订阅者
    addSub(sub){
        if(sub && sub.update){
            this.subs.push(sub)
        }
    }
    // 发布通知
    notify(){
        this.subs && this.subs.forEach(
            sub => sub.update()
        )
    }
}
// 观察者
class Watcher{
    update(){
        console.log('update')
    }
}
let dep = new Dep()
let watcher = new Watcher()
dep.addSub(watcher)
dep.notify()
// 2024/07/30 牛客
// 被观察者
class Observerd {
    constructor(name,state) {
        this.name = name
        this.state = state
        this.observers = []
    }
    setObserver(observer) {
        this.observers.push(observer)
    }
    setState(newState) {
        this.state = newState
        this.observers.forEach(observer => observer.update(this.name,this.state))
    }
   
}
// 观察者
class Observer {
 update(name,state) {
    console.log(`${name}正在${state}`)
}
}
// 场景1：一个观察者观察多个被观察者
let observer001 = new Observer() //观察者001
let observerd1 = new Observerd('小明','看漫画') //被观察者1-小明
observerd1.setObserver(observer001)
observerd1.setState('看完漫画准备学习') //状态改变
observerd1.setState('看完漫画准备学习') //状态改变
let observerd2 = new Observerd('小狗','吃狗粮') //被观察者2-小狗
observerd2.setObserver(observer001)
observerd2.setObserver(observer001)

let observerd3 = new Observerd('小马','跑步') //被观察者3-小马
observerd3.setObserver(observer001)
observerd3.setObserver(observer001)
// 场景2：一个被观察者被多个观察者观察
// 场景2：一个被观察者被多个观察者观察
let observerd4 = new Observerd('姆巴佩','离开巴黎')

let observer002 = new Observer() // 被观察者注册观察者list
let observer003 = new Observer()
observerd4.setObserver(observer002)
observerd4.setObserver(observer003)
observerd4.setState('前往皇马')