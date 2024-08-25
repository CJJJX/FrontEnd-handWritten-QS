// 将字符串格式化的二维数组转化为一维数组，并从大到小排序，并去重
// ex: "[[1,2,3],[4,5,6],[7,8,9]]" -> [9,8,7,6,5,4,3,2,1]

function flattenAndSort(str) {
    // match返回匹配到的所有项构成的数组
    let arr = str.match(/\d+/g).map(Number)
    return [...new Set(arr)].sort((a,b) => a- b)
}