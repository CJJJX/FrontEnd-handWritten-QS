const list = [
    {start: '10.255.254.1',end: '100.255.254.255',city: 'Xian'},
    {start: '100.255.254.1',end: '189.255.254.255',city: 'Beijing'},
    {start: '200.255.254.1',end: '233.255.254.255',city: 'Haikou'},
]
// list为升序，找给定ip所在城市,ip为字符串需要转为数字
// 1.迭代法
function foundCity(ip,list){
    let left = 0
    let right = list.length - 1
    let city = 'Not fuond'
    ip = ipStringToNumber(ip)
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        let startIp = ipStringToNumber(list[mid].start)
        let endIp = ipStringToNumber(list[mid].end)
        console.log(startIp,endIp,ip)
        if( ip >= startIp && ip <= endIp){
            city = list[mid].city
            break
        }else if(ip < startIp){
            right = mid - 1
        }
        else{
            left = mid + 1
        }    
    }
    return city
}
// 2.递归法
function foundCity2(ip,list){
    let left = 0
    let right = list.length - 1
    let city = 'not found'
    recursive(left,right,ip,list)
    function recursive(left,right,ip,list){
        let mid = Math.floor((left + right) / 2)
        if(ipStringToNumber(ip) < ipStringToNumber(list[mid].start)){
            recursive(left,mid-1,ip,list)
        }else if(ipStringToNumber(ip) > ipStringToNumber(list[mid].end)){
            recursive(mid+1,right,ip,list)
        }else{
            city = list[mid].city
        }
    }
    return city
}
function ipStringToNumber(ip) {  
    const newIp = ip.replace(/\./g,'')
    return parseInt(newIp,10)
  }  
    
console.log(foundCity2('111.111.111.111',list)) // Beijing  
  