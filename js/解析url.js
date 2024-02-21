const url = 'https://abc.com?a=1&b=2'
const getParam = (url,key) => {
    let tmp = ''
    const map = new Map()
    for(let i = 0;i < url.length;i ++){
        if(url[i]=='?'){
             tmp = url.substr(i+1) //'a=1&b=2'
             break
        }
    }
    let tmpArr = tmp.split('&')
    for(let i = 0;i < tmpArr.length;i ++){
        let KeyValue = tmpArr[i].split('=') //'a=1'
        map.set(KeyValue[0],KeyValue[KeyValue.length-1])
    }
    return map.get(key)+''
}
console.log(getParam(url,'a')==='1')