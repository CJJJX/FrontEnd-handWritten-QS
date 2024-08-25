// 实现find方法，根据id查找data树中的任意一项
const data = [
    {
        id: '1000',
        name: '深圳',
        children: [

        ]
    },
    {
        id: '2000',
        name: '广州',
        children: [
            {
                id: '2001',
                name: '越秀区',
                children: [
                    {
                        id: '2011',
                        name: '人民公园'
                    },
                    {
                        id: '1012',
                        name: '粤海街道'
                    }
                ]
            },
            {
                id: '2002',
                name: '天河区'
            }
        ]
    },
]
function find(arr,id) {
    for(let item of arr) {
        if(item.id === id) 
        return item.name
        if(item.children?.length > 0)
        return find(item.children,id)
    }
    return '未找到'
}
const r1 = find(data,'1000') //深圳
const r2 = find(data,'2001') //越秀区
const r3 = find(data,'1012') //粤海街道
const r4 = find(data,'2011') //人民公园
const r5 = find(data,'1222') //未找到
console.log(r1)
console.log(r2)
console.log(r3)
console.log(r4)
console.log(r5)