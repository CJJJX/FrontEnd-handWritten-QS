// 需求：将数据结构
// data[
//   {typeName: '大数据应用',typeValue: 'aaa'},
//   {typeName: '大数据应用',typeValue: 'bbb'},
//   {typeName: '测试应用',typeValue: 'ccc'},
//   {typeName: '云应用',typeValue: 'ddd'},
//   {typeName: 'AI应用',typeValue: 'eee'},
//   {typeName: 'AI应用',typeValue: 'fff'},
// ]
// 转为
// data[
//   {typeName: '大数据应用',childList:[{typeValue: 'aaa'},{typeValue: 'bbb'}]},
//   {typeName: '测试应用',childList:[{typeValue: 'ccc'}]},
//   {typeName: '云应用',childList:[{typeValue: 'ddd'}]},
//   {typeName: 'AI应用',childList:[{typeValue: 'eee'},{typeValue: 'fff'}]},
// ]
let data = [
       {typeName: '大数据应用',typeValue: 'aaa'},
       {typeName: '大数据应用',typeValue: 'bbb'},
       {typeName: '测试应用',typeValue: 'ccc'},
       {typeName: '云应用',typeValue: 'ddd'},
       {typeName: 'AI应用',typeValue: 'eee'},
       {typeName: 'AI应用',typeValue: 'fff'},]
let newData1 = []
let newData2 = []
//方法1

data.forEach(item => {
    let found = newData1.find(x => x.typeName == item.typeName)
    // 如果已存的数据没有找到typeName则需新建
    if(!found){
        found = {typeName:item.typeName ,childList: []}
        newData1.push(found)
    }
    // 找到typename则直接往childList填数据
    found.childList.push({typeValue: item.typeValue})
})
//方法2 复杂度太高弃用
let uniqueTypes = data.map(item => item.typeName)
// 先筛选出typeName，再往其中添加数据
newData2 = uniqueTypes.map(typeName => {
    // 筛选输typeName所拥有的typeValue
    let childList = data.filter(item => item.typeName === typeName).map(item => item.typeValue)
    return {typeName,childList}
})

console.log('newData1',JSON.stringify(newData1,null, 2))
console.log('newData2',JSON.stringify(newData2,null,2))
