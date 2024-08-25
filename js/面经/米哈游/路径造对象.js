

const str = 'a.b.c'
/* 完成 toObject函数，字符串转为
    {
        a: {
            b: {
                c: null
            }
        }
    }
*/
function toObject(str) {
    let arr = str.split('.')
    function traversal(cur,start) {
        console.log(start,cur,'sasa')
        if(start === arr.length - 1) {
            cur[arr[start]] = null
        //return null
        }
        
        else {
           cur[arr[start]] = traversal({},start + 1)
        }
        
        //return cur[arr[start]] 这里一开始错了,得返回cur才能拿到最终结果
        return cur
    }
    let obj = traversal({},0)
    return obj
} 
const res = toObject(str)
console.log(JSON.stringify(res))