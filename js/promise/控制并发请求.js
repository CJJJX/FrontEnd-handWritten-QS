// 百度场景题
const urls = []
for(let i = 0;i <= 10;i ++) {
    urls.push(`https://jsonplaceholder.typicode.com/todos/${i}`)
}
concurRequest(urls,3).then((resps) => {
    console.log(resps)
})
function concurRequest(urls,maxNum) {
    return new Promise((resolve) => { 
        if(urls.length == 0) {
            resolve([])
            return
        }
        const results = []
        let index = 0 //下一个请求的下标
        let count = 0 //当前请求完成的数量
        // 发送请求
        async function request() {
            if(index === urls.length)
            return
            const i = index
            const url = urls[index]
            index++
            console.log(url)
            try {
               const resp = await fetch(url)
               // resp加入result
               results[i] = resp
            }catch(err) {
                results[i] = err
            }finally {
                // 判断是否所有请求都完成
                count++
                if(count === urls.length) {
                    console.log('over')
                    resolve(results)
                }
                request() //之前的请求完成出栈，才能继续调用请求
            }
            
        }
        const times = Math.min(maxNum,urls.length)
        for(let i = 0;i < times;i ++) {
            request()
            console.log('i',i)
        }
        
    })
}