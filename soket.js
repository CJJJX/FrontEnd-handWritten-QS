class Socket {
    wsUrl
    constructor(wsUrl){
        this.wsUrl = wsUrl
    }
    ModeCode = {
        // websoket消息类型
        MSG: 'message', //普通消息
        HEART_BEAT: 'heart_beat' //心跳
    }
    ws
    websoketState = false
    heartBeat = {
        // 心跳连接的时间间隔
        time: 5 * 1000, //心跳时间间隔
        timeout: 3 * 1000, //timeout:心跳超时间隔
        reconnect: 10 * 1000, //断线重连时间
    }
    reconnectTimer = null //断线重连定时器

    //连接ws
    connectWebsocket() {
        this.ws = new WebSocket(this.wsUrl)
        this.init()
    }
    //心跳初始函数
    startHeartBeat(time){
        setTimeout(() => {
            this.ws.send(
                JSON.stringify({
                    ModeCode: this.ModeCode,
                    msg: new Date()
                })
            )
            this.waitingServer()
        },time)
    }
    // 延时等待服务端响应，通过websoketState判断是否连接成功
    waitingServer() {
        this.websoketState = false
        setTimeout(() => {
            if(this.websoketState){
                this.startHeartBeat(this.startHeartBeat.time)
                return
            }
            console.log('心跳无响应')
            try{
                this.ws.close()
            }catch(e){
                console.log('连接已关闭，无需关闭')
            }
            this.reconnectWebsokect()
        },this.startHeartBeat.timeout)
    }
    // 重连操作
    reconnectWebsocket(){
        this.reconnectTimer = setTimeout(() => {
            this.reconnectWs()
        },this.heartBeat.reconnect)
    }
    // 初始化
    init(){
        this.ws.addEventListener('open',() => {
            // socket状态设置为连接，作为后面断线重连的连接器
            this.websoketState = true
            // 是否启动心跳机制
            this.heartBeat && this.heartBeat.time ? this.startHeartBeat()
            console.log('开启')
        })
        this.ws.addEventListener('message',(e) => {
            console.log(e.data)
            const data = JSON.parse(e.data)
            switch(data.ModeCode){
                case this.ModeCode.MSG: //普通消息
                    console.log('收到消息' + e.data)
                    break
                case this.ModeCode.MSG: //心跳消息
                    this.websoketState = true
                    console.log('收到心跳消息' + e.data)
                    break
            }
        })
        this.ws.addEventListener('close',(e) => {
            this.websoketState = false
            console.log('断开了连接',e)
        })
        
    }
    reconnectWs(){
        if(!this.ws){
            // 第一次执行，初始化
            this.connectWebsocket()
        }
        if(this.ws && this.reconnectTimer){

        }
    }
    // 发送数据
    sendMessage(data){
        this.ws.send(JSON.stringify(data))
    }
    // 在其他需要socket的地方主动关闭socket
    closeWebSocket(e){
        console.log(e)
        this.ws.close()
        clearTimeout(this.reconnectTimer)
        this.websoketState = false
    }
}

export default Socket