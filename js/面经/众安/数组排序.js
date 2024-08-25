const arr1 = [3,2,1]
const arr2 = [{key: 1,value: 1},{key: 2,value: 3},{key: 3,value: 2}]
// 按arr1单项排序arr2的value
// 创建一个映射，以便快速查找arr2中value在arr1中的位置  
const map = new Map(arr1.map((value,index) => [value,index]))
arr2.sort((a,b) => {
    let indexA = map.get(a.value)
    let indexB = map.get(b.value)
    return indexA - indexB
})
console.log(arr2)