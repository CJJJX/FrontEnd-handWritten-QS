const arr = [2,1,8,4,3,5,9,9]
// 快速排序 nlog(n)
function quickSort(arr){
    if(arr.length<=1)
    return arr

    const pivot = arr[0]
    //分区
    const left = []
    const right = []

    for(let i = 1;i<arr.length;i++){
        if(arr[i]<pivot)
        left.push(arr[i])
        else
        right.push(arr[i])
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
console.log('快速排序res---',quickSort(arr))
//归并排序 nlog(n)
function mergeSort(arr){
    if(arr.length < 2)
    return arr
    let mid = arr.length/2
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    // 剪枝优化
    if(left[left.length -1] <= right[0]){
        return left.concat(right)
    }
    if(right[right.length-1] <= left[0]){
        return right.concat(left)
    }
    let res = []
    let leftIndex = 0
    let rightIndex = 0
    while(leftIndex < left.length && rightIndex < right.length ){
        if(left[leftIndex] < right[rightIndex]){
            res.push(left[leftIndex])
            leftIndex++
        }
        else{
            res.push(right[rightIndex])
            rightIndex++
        }
    }
    if(leftIndex < left.length){
        return res.concat(left.slice(leftIndex))
    }
    if(rightIndex < right.length){
        return res.concat(right.slice(rightIndex))
    }
}
const z = '归并排序res'
console.log(`${z}---`,mergeSort(arr))
//冒泡排序 n^2
function BubbleSort(arr){
    for(let i = 0;i < arr.length-1;i++){
        for(let j = 0;j < arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
console.log('冒泡排序res---',BubbleSort(arr))
// 选择排序 n^2
function selectSort(arr){
    for(let i = 0;i < arr.length;i++){
        for(let j = i + 1;j< arr.length;j++){
            if(arr[i]>arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
console.log('选择排序res---',selectSort(arr))
// 插入排序 n^2
// 和前面已排序部分作比较，小的插入前面
function insertSort(arr) {
    for(let j = 1;j < arr.length;j ++) {
        let i = j - 1
        let key = arr[j]
        while(i >= 0 && arr[i] > key) {
            arr[i+1] = arr[i]
            i--
        }
        arr[i+1] = key
    }
    return arr
}
console.log('插入排序res---',insertSort(arr))