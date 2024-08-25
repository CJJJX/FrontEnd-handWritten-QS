/**
编写一个TrafficLightController类，实现红绿灯状态切换，并在控制台打印输出
(1)start()方法，实现红绿灯切换，绿灯30s/黄灯3s/红灯20s
(2)changeDuration()方法，可以实现改变红绿灯持续时间
(3)stop方法，停止切换
可以使用promise/async/await
*/
class trafficLightController{
    constructor(){
        this.yellowDuration = 3
        this.redDuration = 20
        this.greenDuration = 30
        this.isStop = false
    }
    async start(){
        console.log('绿灯亮',Date.now())
        await this.delay(this.greenDuration)
        console.log('红灯亮',Date.now())
        await this.delay(this.redDuration)
        console.log('黄灯亮',Date.now())
        await this.delay(this.yellowDuration)
    }
    async delay(duration){
        return new Promise(resolve=>{
            setTimeout(resolve,duration*1000)
        })
    }
    changeDuration(type,duration){
        switch(type){
            case 'green':
                 this.greenDuration = duration
                 break
            case "red":
                 this.redDuration = duration
            case 'yellow':
                 this.yellowDuration = duration
            default:
                 throw new Error('无效颜色')     
        }
    }
    stop(){
        this.isStop = true
    }
}
let controller = new trafficLightController()
controller.start()